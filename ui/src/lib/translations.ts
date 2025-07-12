export const translations = {
  en: {
    // Header
    title: "AI Dog Breed Classifier",
    subtitle: "Identify your dog's breed with artificial intelligence",

    // Navigation
    home: "Home",
    about: "About",
    howItWorks: "How It Works",
    portfolio: "Portfolio Hub",

    // Language Selector
    language: "Language",

    // Main Content
    dragAndDrop: "Drag and drop your dog image here",
    or: "or",
    selectImage: "Select Image",
    supportedFormats: "Supported formats: JPG, PNG, JPEG",
    maxSize: "Maximum size: 10MB",

    // Upload States
    uploading: "Analyzing image...",
    analyzing: "Identifying breed...",

    // Results
    results: "Results",
    breed: "Breed",
    confidence: "Confidence",
    tryAnother: "Try Another Image",

    // Error Messages
    errorTitle: "Oops! Something went wrong",
    errorMessage: "Please try again with a different image",
    errorInvalidFile: "Please select a valid image file",
    errorTooLarge: "Image is too large. Maximum size is 10MB",
    errorConnection: "Connection error. Please try again",

    // How It Works
    howItWorksTitle: "How It Works",
    step1Title: "Upload Your Image",
    step1Description:
      "Start by choosing a clear picture of a dog. Our system accepts common formats like JPG and PNG.",
    step2Title: "AI-Powered Analysis",
    step2Description:
      "Our TensorFlow model, powered by MobileNetV2, processes the image and identifies key features to classify the breed.",
    step3Title: "Get Instant Results",
    step3Description:
      "Receive the predicted dog breed and the confidence score in seconds, all delivered through our high-speed FastAPI backend.",

    // Supported Breeds
    supportedBreedsTitle: "Supported Breeds",
    supportedBreedsSubtitle: "Our AI can identify these 6 dog breeds:",

    // Breed Names
    breeds: {
      beagle: "Beagle",
      chihuahua: "Chihuahua",
      german_shepherd: "German Shepherd",
      golden_retriever: "Golden Retriever",
      pug: "Pug",
      siberian_husky: "Siberian Husky",
    },

    // Breed Descriptions
    breedDescriptions: {
      beagle: "Friendly hunting hound",
      chihuahua: "Tiny but mighty toy breed",
      german_shepherd: "Intelligent working dog",
      golden_retriever: "Gentle, family-friendly retriever",
      pug: "Charming, compact companion",
      siberian_husky: "Athletic, cold-weather sled dog",
    },

    // About
    aboutTitle: "About This Project",
    aboutDescription:
      "This AI-powered application uses deep learning to classify dog breeds from images. Built with TensorFlow/Keras, FastAPI, and Next.js, it demonstrates modern AI integration in web applications.",

    // Footer
    builtWith: "Built with",
    by: "by",

    // API Status
    apiOnline: "API Online",
    apiOffline: "API Offline",
    checkingStatus: "Checking status...",

    // Tips
    tipsTitle: "Tips for Better Results",
    tip1: "Use clear, well-lit photos",
    tip2: "Ensure the dog is the main subject",
    tip3: "Avoid heavily filtered images",
    tip4: "Front or side view works best",
  },
  pt: {
    // Header
    title: "Identifique raças com IA",
    subtitle: "Identifique a raça do seu cão com inteligência artificial",

    // Navigation
    home: "Início",
    about: "Sobre",
    howItWorks: "Como Funciona",
    portfolio: "Portfolio Hub",

    // Language Selector
    language: "Idioma",

    // Main Content
    dragAndDrop: "Arraste e solte a imagem do seu cão aqui",
    or: "ou",
    selectImage: "Selecionar Imagem",
    supportedFormats: "Formatos suportados: JPG, PNG, JPEG",
    maxSize: "Tamanho máximo: 10MB",

    // Upload States
    uploading: "Analisando imagem...",
    analyzing: "Identificando raça...",

    // Results
    results: "Resultados",
    breed: "Raça",
    confidence: "Confiança",
    tryAnother: "Tentar Outra Imagem",

    // Error Messages
    errorTitle: "Ops! Algo deu errado",
    errorMessage: "Tente novamente com uma imagem diferente",
    errorInvalidFile: "Selecione um arquivo de imagem válido",
    errorTooLarge: "Imagem muito grande. Tamanho máximo é 10MB",
    errorConnection: "Erro de conexão. Tente novamente",

    // How It Works
    howItWorksTitle: "Como Funciona",
    step1Title: "Envie sua Imagem",
    step1Description:
      "Comece escolhendo uma foto clara de um cachorro. Nosso sistema aceita formatos comuns como JPG e PNG.",
    step2Title: "Análise com IA",
    step2Description:
      "Nosso modelo TensorFlow, baseado no MobileNetV2, processa a imagem e identifica características importantes para classificar a raça.",
    step3Title: "Resultados Instantâneos",
    step3Description:
      "Receba a raça prevista do cachorro e o grau de confiança em segundos, tudo entregue via nosso backend FastAPI de alta velocidade.",

    // Supported Breeds
    supportedBreedsTitle: "Raças Suportadas",
    supportedBreedsSubtitle: "Nossa IA pode identificar estas 6 raças de cães:",

    // Breed Names
    breeds: {
      beagle: "Beagle",
      chihuahua: "Chihuahua",
      german_shepherd: "Pastor Alemão",
      golden_retriever: "Golden Retriever",
      pug: "Pug",
      siberian_husky: "Husky Siberiano",
    },

    // Breed Descriptions
    breedDescriptions: {
      beagle: "Cão de caça amigável",
      chihuahua: "Raça toy pequena mas corajosa",
      german_shepherd: "Cão de trabalho inteligente",
      golden_retriever: "Retriever gentil e familiar",
      pug: "Companheiro charmoso e compacto",
      siberian_husky: "Cão atlético de clima frio",
    },

    // About
    aboutTitle: "Sobre Este Projeto",
    aboutDescription:
      "Esta aplicação alimentada por IA usa aprendizado profundo para classificar raças de cães a partir de imagens. Construída com TensorFlow/Keras, FastAPI e Next.js, demonstra a integração moderna de IA em aplicações web.",

    // Footer
    builtWith: "Construído com",
    by: "por",

    // API Status
    apiOnline: "API Online",
    apiOffline: "API Offline",
    checkingStatus: "Verificando status...",

    // Tips
    tipsTitle: "Dicas para Melhores Resultados",
    tip1: "Use fotos claras e bem iluminadas",
    tip2: "Certifique-se de que o cão seja o assunto principal",
    tip3: "Evite imagens muito filtradas",
    tip4: "Vista frontal ou lateral funciona melhor",
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
