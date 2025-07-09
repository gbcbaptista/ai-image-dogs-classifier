import os
import shutil
import pandas as pd

CHOSEN_BREEDS = [
    'beagle',
    'pug',
    'chihuahua',
    'german_shepherd',
    'golden_retriever',
    'siberian_husky',
    'poodle',
    'bulldog'
]

ORIGINAL_TRAIN_DIR = 'data/dog-breed-identification/train'
LABELS_FILE = 'data/dog-breed-identification/labels.csv'
DATASET_DEST_DIR = 'data/dataset'

print("Starting data curation...")

if os.path.exists(DATASET_DEST_DIR):
  shutil.rmtree(DATASET_DEST_DIR)
os.makedirs(DATASET_DEST_DIR)

for breed in CHOSEN_BREEDS:
  os.makedirs(os.path.join(DATASET_DEST_DIR, breed))

labels_df = pd.read_csv(LABELS_FILE)

filtered_df = labels_df[labels_df['breed'].isin(CHOSEN_BREEDS)]

copied_count = 0

for index, row in filtered_df.iterrows():
  image_id = row['id']
  breed = row['breed']

  original_file_name = f"{image_id}.jpg"
  original_path = os.path.join(ORIGINAL_TRAIN_DIR, original_file_name)
  dest_path = os.path.join(DATASET_DEST_DIR, breed, original_file_name)

  if os.path.exists(original_path):
    shutil.copyfile(original_path, dest_path)
    copied_count += 1
  
print(f"Curation finished! {copied_count} images copied to the folder '{DATASET_DEST_DIR}'.")
print("Dataset structure successfully created.")
