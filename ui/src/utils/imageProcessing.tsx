async function processImage(file: File): Promise<number[][][][]> {
  const arrayBuffer = await file.arrayBuffer();
  const blob = new Blob([arrayBuffer]);
  const imageBitmap = await createImageBitmap(blob);

  const canvas = new OffscreenCanvas(224, 224);
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(imageBitmap, 0, 0, 224, 224);

  const imageData = ctx.getImageData(0, 0, 224, 224);
  const data = imageData.data;

  const imageArray: number[][][] = [];
  for (let i = 0; i < 224; i++) {
    const row: number[][] = [];
    for (let j = 0; j < 224; j++) {
      const pixelIndex = (i * 224 + j) * 4;
      const pixel = [
        data[pixelIndex], // R
        data[pixelIndex + 1], // G
        data[pixelIndex + 2], // B
      ];
      row.push(pixel);
    }
    imageArray.push(row);
  }

  return [imageArray];
}

const requests = {
  classifyDog: async (imageFile: File) => {
    const processedImage = await processImage(imageFile);

    return await fetch(`api/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(processedImage),
    });
  },
};

export default requests;
