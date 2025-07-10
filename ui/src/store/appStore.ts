import { create } from "zustand";
const API_URL = "http://localhost:8000/api/predict";

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

    // 2. Criar um objeto FormData para enviar o arquivo
    const formData = new FormData();
    formData.append("file", file); // A chave 'file' deve corresponder ao nome no endpoint FastAPI

    try {
      // 3. Fazer a chamada fetch para a API
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("A resposta da rede não foi bem-sucedida.");
      }

      const data = await response.json();

      // 4. Atualizar o estado com os dados recebidos da API
      get().setResult(data);
    } catch (error) {
      console.error("Erro ao classificar a imagem:", error);
      // Em caso de erro, podemos resetar o estado para o usuário tentar novamente
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
