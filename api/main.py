import json
import numpy as np
import keras
from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from io import BytesIO

try:
  model_path = 'model/dog_classifier.keras'
  labels_path = 'model/labels.json'
  model = keras.models.load_model(model_path)
  with open(labels_path, 'r') as f:
    class_names = json.load(f)
  print("Model and labels loaded successfully!")
except Exception as e:
  print(f"Error on loading the model and labels: {e}")
  model = None
  class_names = []

app = FastAPI(
  title="Dog Breed Classifier API",
  version="1.0.0"
)

app.add_middleware(
  CORSMiddleware,
  allow_origins=["https://dog-classifier.gabriel-baptista.dev"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

def validate_and_process_image(image_bytes: bytes) -> np.ndarray:
  """
  Validade processed image
  """
  try:
    image = Image.open(BytesIO(image_bytes))
    
    if image.format not in ['JPEG', 'PNG', 'WEBP']:
      raise ValueError("Formato de imagem não suportado")
    
    if image.size != (224, 224):
      raise ValueError("Imagem deve ter dimensões 224x224")
    
    if image.mode != 'RGB':
      image = image.convert('RGB')
    
    image_array = np.array(image, dtype=np.float32)
    
    if image_array.max() > 1.0:
      image_array = image_array / 255.0

    image_array = np.expand_dims(image_array, axis=0)
    
    return image_array
    
  except Exception as e:
    raise ValueError(f"Erro ao processar imagem: {str(e)}")

@app.get("/")
def read_root():
  return {"status": "online", "message": "Success!"}

@app.post("/api/predict", summary="Classify the dog's breed")
async def predict(file: UploadFile = File(...)):
  if not model:
    raise HTTPException(status_code=500, detail="Model is not loaded")
  
  if not file.content_type or not file.content_type.startswith('image/'):
    raise HTTPException(status_code=400, detail="File must be an image")
  
  MAX_FILE_SIZE = 100 * 1024
  contents = await file.read()

  if len(contents) > MAX_FILE_SIZE:
    raise HTTPException(
      status_code=413, 
      detail="Processed image too large. Please ensure frontend processing is working correctly."
    )
  try:
    processed_image = validate_and_process_image(contents)
    predictions = model.predict(processed_image)
    
    predicted_index = np.argmax(predictions, axis=1)[0]
    predicted_breed = class_names[predicted_index]
    confidence = float(predictions[0][predicted_index])

    return {
        "breed": predicted_breed,
        "confidence": f"{confidence:.2%}",
        "file_size": len(contents),
        "image_shape": processed_image.shape
      }
    
  except ValueError as e:
    raise HTTPException(status_code=400, detail=str(e))
  except Exception as e:
    raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")
  
@app.get("/health")
def health_check():
  return {
    "status": "healthy",
    "model_loaded": model is not None,
    "classes_count": len(class_names)
  }