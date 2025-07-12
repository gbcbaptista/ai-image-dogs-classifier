const requests = {
  classifyDog: async (formData: FormData) => {
    return await fetch("/api/classify", {
      method: "POST",
      body: formData,
    });
  },
};

export default requests;
