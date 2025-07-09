# Dog Breed Classification Model

<div align="center">
  
<img src="https://raw.githubusercontent.com/gbcbaptista/gbcbaptista/main/icon.svg" alt="Gabriel Baptista Logo" width="80" height="80" style="margin-bottom: 20px;">

</div>

A deep learning project for classifying dog breeds using TensorFlow and Keras with transfer learning approach.

## Overview

This project implements a convolutional neural network (CNN) for dog breed classification using MobileNetV2 as the base model with transfer learning. The model can classify images into 8 different dog breeds with high accuracy.

## Supported Dog Breeds

The model is trained to recognize the following 8 dog breeds:

- **Beagle**
- **Bulldog**
- **Chihuahua**
- **German Shepherd**
- **Golden Retriever**
- **Poodle**
- **Pug**
- **Siberian Husky**

## Project Structure

```
model_training/
├── .gitignore              # Git ignore file (excludes data directories)
├── labels.json             # JSON file containing class labels
├── prepare_data.py         # Data preparation and organization script
├── train.py               # Model training script
└── README.md              # This file
```

## Data Preparation

### Dataset Source

The project uses the **Dog Breed Identification** dataset from Kaggle:

- **Dataset URL:** https://www.kaggle.com/competitions/dog-breed-identification/data
- **Original Size:** 10,000+ images across 120 dog breeds
- **Format:** JPEG images with CSV labels file

### Dataset Structure

The project uses a structured approach to organize the training data:

```
data/
├── dog-breed-identification/
│   ├── train/             # Original training images
│   └── labels.csv         # Image labels mapping
└── dataset/               # Curated dataset (created by prepare_data.py)
    ├── beagle/
    ├── bulldog/
    ├── chihuahua/
    ├── german_shepherd/
    ├── golden_retriever/
    ├── poodle/
    ├── pug/
    └── siberian_husky/
```

### Data Curation Process

The `prepare_data.py` script performs the following tasks:

1. **Filters the dataset** to include only the 8 selected dog breeds
2. **Creates organized directories** for each breed
3. **Copies relevant images** from the original dataset to the new structure
4. **Removes any existing dataset** directory before creating a new one

**Key Features:**

- Automatically creates breed-specific folders
- Filters images based on CSV labels
- Provides progress feedback during the curation process

## Model Architecture

### Base Model: MobileNetV2

- **Input Shape:** 224x224x3 (RGB images)
- **Weights:** Pre-trained on ImageNet
- **Feature Extraction:** Base model layers are frozen for transfer learning

### Custom Classification Head

- **Global Average Pooling:** Reduces feature map dimensions
- **Dropout Layer:** 0.2 dropout rate for regularization
- **Dense Output Layer:** 8 units with softmax activation (one for each breed)

### Model Configuration

- **Optimizer:** Adam with learning rate 0.001
- **Loss Function:** Categorical crossentropy
- **Metrics:** Accuracy
- **Epochs:** 10
- **Batch Size:** 32

## Training Process

### Data Pipeline

- **Validation Split:** 20% of data reserved for validation
- **Image Preprocessing:** MobileNetV2 preprocessing applied
- **Data Augmentation:** Built-in dataset augmentation through Keras
- **Batch Processing:** Optimized with tf.data.AUTOTUNE

### Training Results

![Training Results](first_train.png)

The model achieved excellent performance during training:

- **Training Accuracy:** Reached ~95% accuracy
- **Validation Accuracy:** Maintained ~90% accuracy with good generalization
- **Loss:** Consistently decreased throughout training epochs

## Installation and Usage

### Requirements

```bash
pip install tensorflow keras pandas
```

### Running the Project

1. **Prepare the Data:**

   ```bash
   python prepare_data.py
   ```

2. **Train the Model:**

   ```bash
   python train.py
   ```

3. **Output Files:**
   - `dog_classifier.keras` - Trained model file
   - `labels.json` - Class labels mapping

### Model Loading

```python
import tensorflow as tf
import json

# Load the trained model
model = tf.keras.models.load_model('dog_classifier.keras')

# Load class labels
with open('labels.json', 'r') as f:
    class_names = json.load(f)
```

## Technical Details

### Transfer Learning Benefits

- **Faster Training:** Leverages pre-trained ImageNet weights
- **Better Performance:** Achieves high accuracy with limited data
- **Computational Efficiency:** Reduces training time and resources

### Data Preprocessing

- **Image Resizing:** All images standardized to 224x224 pixels
- **Normalization:** MobileNetV2 preprocessing applied
- **Categorical Labels:** One-hot encoded for multi-class classification

## Performance Metrics

The model demonstrates excellent classification performance:

- **High Accuracy:** >90% validation accuracy
- **Good Generalization:** Minimal overfitting observed
- **Stable Training:** Consistent improvement across epochs

## Future Improvements

- **Extended Dataset:** Add more dog breeds and increase sample size
- **Data Augmentation:** Implement advanced augmentation techniques
- **Fine-tuning:** Unfreeze some base model layers for better performance
- **Model Optimization:** Explore other architectures (EfficientNet, ResNet)

## File Descriptions

### `prepare_data.py`

- Organizes raw dataset into structured format
- Filters images for selected breeds
- Creates breed-specific directories

### `train.py`

- Implements transfer learning with MobileNetV2
- Handles data loading and preprocessing
- Trains and saves the final model

### `labels.json`

- Contains the ordered list of class names
- Generated automatically during training
- Used for model inference and prediction mapping

---

_This project demonstrates effective use of transfer learning for image classification tasks, achieving high accuracy with a relatively small, curated dataset._
