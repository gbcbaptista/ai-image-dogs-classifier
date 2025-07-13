// utils/imageProcessing.ts

export interface ProcessedImageResult {
  processedFile: File;
  originalSize: number;
  processedSize: number;
  dimensions: { width: number; height: number };
  preview: string;
}

export const processImageForModel = (
  file: File,
  targetSize: number = 224,
  quality: number = 0.9
): Promise<ProcessedImageResult> => {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("File must be an image"));
      return;
    }

    if (file.size > 20 * 1024 * 1024) {
      reject(new Error("File size exceeds 20MB limit"));
      return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    if (!ctx) {
      reject(new Error("Error creating canvas context"));
      return;
    }

    img.onload = () => {
      try {
        canvas.width = targetSize;
        canvas.height = targetSize;

        const sourceSize = Math.min(img.width, img.height);
        const sourceX = (img.width - sourceSize) / 2;
        const sourceY = (img.height - sourceSize) / 2;

        ctx.drawImage(
          img,
          sourceX,
          sourceY,
          sourceSize,
          sourceSize,
          0,
          0,
          targetSize,
          targetSize
        );

        canvas.toBlob(
          (blob) => {
            if (blob) {
              const processedFile = new File([blob], `processed_${file.name}`, {
                type: "image/jpeg",
                lastModified: Date.now(),
              });

              const preview = canvas.toDataURL("image/jpeg", quality);

              resolve({
                processedFile,
                originalSize: file.size,
                processedSize: blob.size,
                dimensions: { width: targetSize, height: targetSize },
                preview,
              });
            } else {
              reject(new Error("Erro ao processar imagem"));
            }
          },
          "image/jpeg",
          quality
        );
      } catch (error) {
        reject(new Error(`Erro ao processar imagem: ${error}`));
      }
    };

    img.onerror = () => {
      reject(new Error("Erro ao carregar imagem"));
    };

    img.src = URL.createObjectURL(file);
  });
};

export const validateDogImage = (file: File): Promise<boolean> => {
  return new Promise((resolve) => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

    if (!validTypes.includes(file.type)) {
      resolve(false);
      return;
    }

    const img = new Image();
    img.onload = () => {
      const isValidSize = img.width >= 100 && img.height >= 100;
      resolve(isValidSize);
    };
    img.onerror = () => resolve(false);
    img.src = URL.createObjectURL(file);
  });
};

const requests = {
  classifyDog: async (file: File) => {
    try {
      const isValidImage = await validateDogImage(file);
      if (!isValidImage) {
        throw new Error(
          "Please upload a valid dog image with at least 100x100 pixels."
        );
      }

      const processed = await processImageForModel(file);

      const formData = new FormData();
      formData.append("file", processed.processedFile);

      console.log(
        `Original size: ${(processed.originalSize / 1024).toFixed(2)}KB`
      );
      console.log(
        `Initial size: ${(processed.processedSize / 1024).toFixed(2)}KB`
      );
      console.log(
        `Size delta: ${(
          (1 - processed.processedSize / processed.originalSize) *
          100
        ).toFixed(1)}%`
      );

      return {
        response: await fetch(`/api/predict`, {
          method: "POST",
          body: formData,
        }),
        processed,
      };
    } catch (error) {
      throw new Error(`Error processing image: ${error}`);
    }
  },
};

export default requests;
