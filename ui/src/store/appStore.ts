import requests from "@/utils/imageProcessing";
import { create } from "zustand";

interface AppState {
  imageFile: File | null;
  imageUrl: string | null;
  isLoading: boolean;
  result: {
    breed: string;
    confidence: string;
  } | null;
}

interface AppActions {
  setImage: (file: File) => void;
  setResult: (result: AppState["result"]) => void;
  reset: () => void;
}

const initialState: AppState = {
  imageFile: null,
  imageUrl: null,
  isLoading: false,
  result: null,
};

export const useAppStore = create<AppState & AppActions>((set, get) => ({
  ...initialState,
  setImage: async (file) => {
    const imageUrl = URL.createObjectURL(file);

    set({
      imageFile: file,
      imageUrl: imageUrl,
      isLoading: true,
      result: null,
    });

    const formData = new FormData();
    formData.append("file", file);

    try {
      const { response, processed } = await requests.classifyDog(file);

      if (!response.ok) {
        throw new Error("An error ocurred while processing the image");
      }

      console.log(processed);
      const data = await response.json();

      get().setResult(data);
    } catch (error) {
      console.error("Erro ao classificar a imagem:", error);
      get().reset();
    }
  },
  setResult: (result) => {
    set({ result, isLoading: false });
  },
  reset: () => {
    const { imageUrl } = get();
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
    set(initialState);
  },
}));
