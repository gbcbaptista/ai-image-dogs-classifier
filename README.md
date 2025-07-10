# AI Image Dogs Classifier 🐕

<div align="center">
  
<img src="https://raw.githubusercontent.com/gbcbaptista/gbcbaptista/main/icon.svg" alt="Gabriel Baptista Logo" width="80" height="80" style="margin-bottom: 20px;">

</div>

A complete end-to-end solution for dog breed classification using artificial intelligence, featuring a deep learning model, REST API, and modern web interface deployed on AWS cloud infrastructure.

## 🚧 Project Status

| Step | Component      | Status         |
| ---- | -------------- | -------------- |
| 1    | Model Training | ✅ Completed   |
| 2    | API            | ✅ Completed   |
| 3    | Frontend       | 🔄 In Progress |
| 4    | Deploy AWS     | ⏳ Pending     |

## 🎯 Project Overview

This project implements a full-stack AI-powered application that can classify dog breeds from uploaded images. The system combines machine learning, modern web technologies, and cloud infrastructure to deliver a seamless user experience.

## 🐕 Supported Dog Breeds

The AI model can classify the following 6 dog breeds:

- **Beagle** - Friendly hunting hound
- **Chihuahua** - Tiny but mighty toy breed
- **German Shepherd** - Intelligent working dog
- **Golden Retriever** - Gentle, family-friendly retriever
- **Pug** - Charming, compact companion
- **Siberian Husky** - Athletic, cold-weather sled dog

## 📁 Project Structure

```
ai-image-dogs-classifier/
├── model_training/          # AI Model Development
│   ├── prepare_data.py     # Data preparation script
│   ├── train.py           # Model training script
│   ├── labels.json        # Class labels mapping
│   └── README.md          # Model documentation
├── api/                    # REST API Backend
│   ├── main.py            # FastAPI application
│   ├── requirements.txt   # Python dependencies
│   ├── Dockerfile         # Container configuration
│   ├── model/            # Model artifacts
│   │   ├── dog_classifier.keras
│   │   └── labels.json
│   └── README.md         # API documentation
└── README.md             # This file
```

## 🚀 Technology Stack

### Machine Learning

- **TensorFlow/Keras**: Deep learning framework
- **MobileNetV2**: Transfer learning base model
- **Python 3.12**: Programming language

### Backend API

- **FastAPI**: Modern, fast web framework
- **Uvicorn**: ASGI server
- **Docker**: Containerization

## 📊 Model Performance

The deep learning model demonstrates excellent classification performance:

- **Training Accuracy**: ~95%
- **Validation Accuracy**: ~90%
- **Model Size**: ~13MB (optimized for deployment)
- **Inference Time**: <200ms per image

![Training Results](model_training/first_train.png)

## 🛠️ Development Steps

### 1. Model Training ✅ (Completed)

The first step was developing and training the deep learning model for dog breed classification.

**Setup:**

```bash
cd model_training
pip install tensorflow keras pandas
python prepare_data.py
python train.py
```

**Key Features:**

- Transfer learning with MobileNetV2
- Data preparation and augmentation
- Model training and validation
- Model export and optimization

### 2. API Development ✅ (Completed)

FastAPI backend development for serving the trained model with REST endpoints.

**Setup:**

```bash
cd api
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

**Key Features:**

- RESTful API with FastAPI
- Real-time image classification
- Automatic image preprocessing
- Docker containerization
- CORS support for web integration
- Interactive API documentation (Swagger UI)

**Docker Deployment:**

```bash
cd api
docker build -t dog-classifier-api .
docker run -p 8000:8000 dog-classifier-api
```

### 3. Frontend Development 🔄 (In Progress)

Modern web interface for user interaction with the AI model.

---
