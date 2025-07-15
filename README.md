# AI Image Dogs Classifier 🐕

<div align="center">
  
<img src="https://raw.githubusercontent.com/gbcbaptista/gbcbaptista/main/icon.svg" alt="Gabriel Baptista Logo" width="80" height="80" style="margin-bottom: 20px;">

</div>

A complete end-to-end solution for dog breed classification using artificial intelligence, featuring a deep learning model, REST API, and modern web interface deployed on AWS cloud infrastructure.

-----

## 🚧 Project Status

| Step | Component | Status | Link |
| :--- | :--- | :--- | :--- |
| 1 | Model Training | ✅ Completed | [📁 model_training/](./model_training/) |
| 2 | API | ✅ Completed | [📁 api/](./api/) |
| 3 | Frontend | ✅ Completed | [📁 ui/](./ui/) |
| 4 | AWS Deploy + CI/CD | ✅ Completed | [📄 .github/workflows/deploy-to-lightsail.yml](./.github/workflows/deploy-to-lightsail.yml) |

-----

## 🎯 Project Overview

This project implements a full-stack AI-powered application that can classify dog breeds from uploaded images. The system combines machine learning, modern web technologies, and cloud infrastructure to deliver a seamless user experience with multilingual support (English and Portuguese).

The application allows users to upload an image of a dog and receive a real-time breed classification with a high confidence score. The user interface is intuitive, responsive, and demonstrates a strong command of front-end and back-end development skills.

-----

## 🐕 Supported Dog Breeds

The AI model can classify the following 6 dog breeds:

  * **Beagle** - Friendly hunting hound
  * **Chihuahua** - Tiny but mighty toy breed
  * **German Shepherd** - Intelligent working dog
  * **Golden Retriever** - Gentle, family-friendly retriever
  * **Pug** - Charming, compact companion
  * **Siberian Husky** - Athletic, cold-weather sled dog

-----

## 🚀 Technology Stack

This project leverages a modern tech stack for each stage of development:

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Machine Learning**| **TensorFlow/Keras** | Training and inference of the deep learning model (MobileNetV2). |
| **Backend** | **Python & FastAPI** | Building a high-performance REST API to serve the model. |
| **Frontend** | **Next.js & React** | Developing the interactive and server-rendered web interface. |
| | **TypeScript** | Ensuring type safety and scalability for the frontend codebase. |
| | **Tailwind CSS** | Enabling rapid and consistent UI styling. |
| | **Framer Motion** | Creating smooth and engaging animations for a better UX. |
| **Infrastructure**| **AWS Lightsail** | Hosting the application on a cost-effective virtual private server. |
| | **Docker & Docker Compose**| Containerizing the API and frontend services to ensure consistency. |
| | **Nginx** | Acting as a reverse proxy to manage HTTP/HTTPS traffic and serve containers. |
| | **Certbot** | Automating the generation and renewal of SSL/TLS certificates. |
| **CI/CD** | **GitHub Actions** | Automating the build, push to ECR, and deployment to the Lightsail instance. |

-----

## 📊 Model Performance

The deep learning model demonstrates excellent classification performance:

  * **Training Accuracy**: \~99%
  * **Validation Accuracy**: \~97%
  * **Model Size**: \~13MB (optimized for deployment)
  * **Inference Time**: \<200ms per image

-----

## 🏗️ Architecture and Infrastructure

The application was designed for robustness and efficiency. While initially conceived for an ECR+ECS+ALB stack, the infrastructure was strategically pivoted to **AWS Lightsail** to deliver a more cost-effective solution for a portfolio project, showcasing adaptability and cost-management skills.

In the final architecture:

1.  A **GitHub Actions** workflow builds and pushes Docker images to **Amazon ECR**.
2.  The workflow then connects to the **Lightsail** instance via SSH to trigger the deployment.
3.  **Docker Compose** pulls the new images from ECR and orchestrates the containers.
4.  **Nginx** serves as a reverse proxy, directing traffic to the appropriate service (Frontend or API) and handling SSL termination with certificates from **Certbot**.

This setup proves the ability to build and manage a full-stack, containerized application in a cloud environment while being mindful of operational costs.

-----

## 🛠️ Development and Deployment

### 1\. Model Training (Completed)

The deep learning model was trained using transfer learning with MobileNetV2.

  * **Key Features**: Enhanced classification head with batch normalization, data augmentation, and model optimization.
  * **To Run**:
    ```bash
    cd model_training
    pip install -r requirements.txt
    python prepare_data.py
    python train.py
    ```

### 2\. API Development (Completed)

A RESTful API was developed with FastAPI to serve the trained model.

  * **Key Features**: Real-time classification endpoint, automatic image preprocessing, and full containerization with Docker.

### 3\. Frontend Development (Completed)

A modern web interface was built with Next.js and React.

  * **Key Features**: Responsive design, drag & drop upload, multilingual support, and real-time results display.

### 🚀 How to Run Locally

**1. Clone the repository:**

```bash
git clone https://github.com/gbcbaptista/ai-image-dogs-classifier.git
cd ai-image-dogs-classifier
```

**2. Build and run the API container:**

```bash
cd api
docker build -t dog-classifier-api .
docker run -d -p 8000:8000 --name dog-api dog-classifier-api
```

**3. Build and run the UI container:**

```bash
cd ../ui
# Note: You may need to adjust the API URL in the code to point to http://localhost:8000 for local development
docker build -t dog-classifier-ui .
docker run -d -p 3000:3000 --name dog-ui dog-classifier-ui
```

**4. Access the application:**

  - **Frontend:** [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)
  - **API Documentation (Swagger):** [http://localhost:8000/docs](https://www.google.com/search?q=http://localhost:8000/docs)
