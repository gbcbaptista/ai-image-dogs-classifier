const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/predict";

const requests = {
  classifyDog: async (formData: FormData) => {
    return await fetch(API_URL, {
      method: "POST",
      body: formData,
    });
  },
};

export default requests;
