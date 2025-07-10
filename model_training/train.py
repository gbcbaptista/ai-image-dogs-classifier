import tensorflow as tf
import keras
import json
import os

IMG_SIZE = (224, 224)
BATCH_SIZE = 32
DATASET_DIR = 'data/dataset'
NUM_CLASSES = len([d for d in os.listdir(DATASET_DIR) if os.path.isdir(os.path.join(DATASET_DIR, d))])
EPOCHS = 10

print("Loading and preparing the data...")


train_dataset = keras.utils.image_dataset_from_directory(
  DATASET_DIR,
  validation_split=0.2,
  subset="training",
  seed=123,
  image_size=IMG_SIZE,
  batch_size=BATCH_SIZE,
  label_mode='categorical'
)

validation_dataset = keras.utils.image_dataset_from_directory(
  DATASET_DIR,
  validation_split=0.2,
  subset="validation",
  seed=123,
  image_size=IMG_SIZE,
  batch_size=BATCH_SIZE,
  label_mode='categorical'
)

class_names = train_dataset.class_names
with open('labels.json', 'w') as f:
    json.dump(class_names, f)
print(f"Classes: {class_names}")
print("File 'labels.json' successfully saved")

AUTOTUNE = tf.data.AUTOTUNE
train_dataset = train_dataset.prefetch(buffer_size=AUTOTUNE)
validation_dataset = validation_dataset.prefetch(buffer_size=AUTOTUNE)

print("Building the model...")

preprocess_input = keras.applications.mobilenet_v2.preprocess_input

base_model = keras.applications.MobileNetV2(
  input_shape=(224, 224, 3),
  include_top=False,
  weights='imagenet'
)

base_model.trainable = False

inputs = keras.Input(shape=(224, 224, 3))
x = preprocess_input(inputs)
x = base_model(x, training=False)
x = keras.layers.GlobalAveragePooling2D()(x)
x = keras.layers.BatchNormalization()(x)
x = keras.layers.Dropout(0.3)(x)
x = keras.layers.Dense(256, activation='relu')(x)
x = keras.layers.BatchNormalization()(x)
x = keras.layers.Dropout(0.4)(x)
x = keras.layers.Dense(128, activation='relu')(x)
x = keras.layers.Dropout(0.2)(x)
outputs = keras.layers.Dense(NUM_CLASSES, activation='softmax')(x)

model = keras.Model(inputs, outputs)

print("Compile the model...")
model.compile(
  optimizer=keras.optimizers.Adam(learning_rate=0.001),
  loss='categorical_crossentropy',
  metrics=['accuracy']
)

model.summary()

print('Starting model training...')
history = model.fit(
  train_dataset,
  epochs=EPOCHS,
  validation_data=validation_dataset
)

print("Training finished. Saving the model...")
model.save('dog_classifier.keras')
print("Model 'dog_classifier.keras' successfully saved!")

