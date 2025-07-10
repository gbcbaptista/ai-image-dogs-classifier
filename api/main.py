import json
import numpy as np
import keras
from fastapi import FastAPI, File, UploadFile
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
  allow_origins=["*"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

def process_image(image_bytes: bytes) -> np.ndarray:
  image = Image.open(BytesIO(image_bytes))
  image = image.resize((224, 224))
  image_array = np.array(image)
  image_array = np.expand_dims(image_array, axis=0)
  return image_array

@app.get("/")
def read_root():
  return {"status": "online", "message": "Success!"}

@app.post("/api/predict", summary="Classify the dog's breed")
async def predict(file: UploadFile = File(...)):
  if not model:
    return {"error": "Model is not loaded."}
  
  contents= await file.read()
  processed_image = process_image(contents)
  predictions = model.predict(processed_image)
  print(predictions)

  predicted_index = np.argmax(predictions, axis=1)[0]
  predicted_breed = class_names[predicted_index]
  confidence = float(predictions[0][predicted_index])

  return {
        "breed": predicted_breed,
        "confidence": f"{confidence:.2%}"
    }