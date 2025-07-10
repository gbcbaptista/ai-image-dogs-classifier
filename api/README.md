# Dog Breed Classifier API 🐕

<div align="center">
  
<img src="https://raw.githubusercontent.com/gbcbaptista/gbcbaptista/main/icon.svg" alt="Gabriel Baptista Logo" width="80" height="80" style="margin-bottom: 20px;">

</div>

A high-performance REST API for dog breed classification using FastAPI and TensorFlow. This API serves the trained deep learning model and provides real-time breed predictions from uploaded images.

## 🚀 Features

- **Fast Predictions**: Real-time dog breed classification (<200ms inference time)
- **RESTful API**: Clean, well-documented endpoints
- **Image Processing**: Automatic image preprocessing and resizing
- **CORS Support**: Cross-origin requests enabled for web applications
- **Docker Ready**: Containerized deployment support
- **High Accuracy**: 90%+ classification accuracy

## 🐕 Supported Dog Breeds

The API can classify the following 6 dog breeds:

- **Beagle** - Friendly hunting hound
- **Chihuahua** - Tiny but mighty toy breed
- **German Shepherd** - Intelligent working dog
- **Golden Retriever** - Gentle, family-friendly retriever
- **Pug** - Charming, compact companion
- **Siberian Husky** - Athletic, cold-weather sled dog

## 📁 Project Structure

```
api/
├── .gitignore              # Git ignore file (excludes __pycache__)
├── Dockerfile              # Docker container configuration
├── main.py                 # FastAPI application entry point
├── requirements.txt        # Python dependencies
├── model/                  # Model artifacts directory
│   ├── dog_classifier.keras # Trained TensorFlow model
│   └── labels.json         # Class labels mapping
└── README.md              # This file
```

## 🛠️ Technology Stack

- **FastAPI**: Modern, fast web framework for building APIs
- **TensorFlow/Keras**: Deep learning model inference (v2.16.1)
- **Uvicorn**: ASGI server for FastAPI
- **PIL (Pillow)**: Image processing and manipulation
- **NumPy**: Numerical computing
- **Python 3.12**: Programming language

## 📋 Prerequisites

- Python 3.12.11
- pip package manager
- Docker (optional, for containerized deployment)

## 🚀 Installation & Setup

### Local Development

1. **Clone the repository and navigate to the API directory:**

   ```bash
   cd api
   ```

2. **Create and activate a virtual environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

   **Dependencies installed:**

   - `fastapi` - Web framework
   - `uvicorn[standard]` - ASGI server
   - `python-multipart` - File upload support
   - `tensorflow==2.16.1` - Deep learning framework
   - `numpy` - Numerical computing
   - `Pillow` - Image processing

4. **Ensure model files are in place:**

   ```
   model/
   ├── dog_classifier.keras
   └── labels.json
   ```

5. **Run the API:**
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```

### Docker Deployment

1. **Build the Docker image:**

   ```bash
   docker build -t dog-classifier-api .
   ```

2. **Run the container:**
   ```bash
   docker run -p 8000:8000 dog-classifier-api
   ```

**Docker Configuration:**

- **Base Image**: `python:3.12.11-slim`
- **Working Directory**: `/app`
- **Exposed Port**: `8000`
- **Entry Point**: `uvicorn main:app --host 0.0.0.0 --port 8000`

## 📚 API Documentation

### Base URL

```
http://localhost:8000
```

### Endpoints

#### Health Check

```http
GET /
```

**Response:**

```json
{
  "status": "online",
  "message": "Success!"
}
```

#### Predict Dog Breed

```http
POST /api/predict
```

**Parameters:**

- `file`: Image file (multipart/form-data)
  - Supported formats: JPEG, PNG, JPG
  - Recommended size: Any size (automatically resized to 224x224)

**Example Request:**

```bash
curl -X POST \
  -F "file=@dog_image.jpg" \
  http://localhost:8000/api/predict
```

**Response:**

```json
{
  "breed": "golden_retriever",
  "confidence": "87.45%"
}
```

**Error Response:**

```json
{
  "error": "Model is not loaded."
}
```

### Interactive Documentation

Once the API is running, visit these URLs for interactive documentation:

- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

## 🔧 Application Architecture

### Model Loading

The application loads the TensorFlow model and labels on startup:

```python
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
```

### Image Processing Pipeline

1. **Upload**: Receive image file via HTTP POST
2. **Decode**: Convert bytes to PIL Image object using `BytesIO`
3. **Resize**: Standardize to 224x224 pixels
4. **Convert**: Transform to NumPy array and expand dimensions
5. **Predict**: Run inference through the TensorFlow model
6. **Format**: Return breed name and confidence percentage

```python
def process_image(image_bytes: bytes) -> np.ndarray:
  image = Image.open(BytesIO(image_bytes))
  image = image.resize((224, 224))
  image_array = np.array(image)
  image_array = np.expand_dims(image_array, axis=0)
  return image_array
```

### CORS Configuration

The API is configured with permissive CORS settings for development:

```python
app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)
```

## 🧪 Testing

### Manual Testing

1. **Test the health endpoint:**

   ```bash
   curl http://localhost:8000/
   ```

2. **Test prediction with an image:**
   ```bash
   curl -X POST \
     -F "file=@test_dog.jpg" \
     http://localhost:8000/api/predict
   ```

### Example Test Images

For testing, use clear images of dogs with the following characteristics:

- Single dog in the image
- Good lighting and resolution
- Dog clearly visible and not heavily obscured
- Must be one of the 6 supported breeds

## 📊 Performance

- **Inference Time**: <200ms per image
- **Model Size**: ~13MB
- **Memory Usage**: ~100MB (including model in memory)
- **Throughput**: Depends on hardware, typically 10-50 requests/second
- **TensorFlow Version**: 2.16.1 (optimized for performance)

## 🔍 Prediction Process

The prediction endpoint follows this workflow:

1. **Validation**: Check if model is loaded
2. **File Reading**: Read uploaded file bytes
3. **Image Processing**: Resize and preprocess image
4. **Model Inference**: Get predictions from TensorFlow model
5. **Post-processing**: Extract breed and confidence
6. **Response**: Return JSON with breed name and confidence percentage

**Label Mapping:**

```json
[
  "beagle",
  "chihuahua",
  "german_shepherd",
  "golden_retriever",
  "pug",
  "siberian_husky"
]
```

---
