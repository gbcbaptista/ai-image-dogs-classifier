const requests = {
  classifyDog: async (formData: FormData) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      throw new Error("API URL not configured in environment variables.");
    }

    return await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });
  },
};

export default requests;
