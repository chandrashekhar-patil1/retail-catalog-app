# 🛒 Retail Catalog App — DevOps CI/CD Project

A simple Retail Catalog REST API deployed using a complete DevOps CI/CD pipeline.

## 🚀 Project Overview

This project demonstrates how a source-code change can automatically move through:

GitHub → GitHub Actions → Docker → Docker Hub → AWS EC2 → Production Container

The application provides REST APIs for managing retail products.

## 🏗️ Architecture

Developer
   |
   v
GitHub Repository
   |
   v
GitHub Actions
   |
   +--> Run Tests
   |
   +--> Build Docker Image
   |
   +--> Push Image to Docker Hub
   |
   v
AWS EC2
   |
   v
Docker Container
   |
   v
Retail Catalog API

Monitoring:
AWS CloudWatch
   |
   v
CPU Alarm

## 🛠️ Technologies Used

- Git
- GitHub
- GitHub Actions
- Docker
- Docker Hub
- AWS EC2
- AWS CloudWatch
- Linux / Ubuntu
- Node.js
- Express.js
- REST API

## 📌 Application APIs

### Health Check

GET /health

Example:

{
  "status": "UP",
  "message": "Retail Catalog App is healthy"
}

### Get All Products

GET /products

### Get Product by ID

GET /products/:id

### Add Product

POST /products

Example request:

{
  "name": "Milk",
  "price": 30,
  "category": "Dairy"
}

## 🔄 CI/CD Pipeline

Whenever code is pushed to the main branch:

1. GitHub Actions starts the workflow.
2. Dependencies are installed.
3. Application tests are executed.
4. Docker image is built.
5. GitHub Actions logs into Docker Hub.
6. Docker image is pushed to Docker Hub.
7. GitHub Actions connects to AWS EC2.
8. Latest Docker image is pulled.
9. Previous container is stopped and removed.
10. New container is started.
11. Application becomes available on port 3000.

## 🐳 Docker

Docker image:

patil17431/retail-catalog-app:latest

Container port:

3000

Application port:

3000

## ☁️ AWS Infrastructure

### EC2

The application is deployed on an Ubuntu EC2 instance.

### Security Group

Configured ports:

- SSH — Port 22
- Application — Port 3000

SSH access is restricted instead of allowing unrestricted SSH access.

### CloudWatch

CloudWatch monitors EC2 metrics.

A CPU alarm was created:

retail-catalog-ec2-high-cpu

Threshold:

70% CPU utilization

## 🔐 GitHub Secrets

Sensitive credentials are stored using GitHub Actions repository secrets.

Examples:

- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN
- EC2_HOST
- EC2_USER
- EC2_SSH_KEY

No passwords or private keys are stored directly in the source code.

## 🧪 Verification

Health check:

curl http://localhost:3000/health

Products:

curl http://localhost:3000/products

Docker container:

sudo docker ps

Docker health status:

sudo docker inspect --format='{{.State.Health.Status}}' retail-catalog-app

Expected:

healthy

## 📊 Monitoring

Docker resource usage can be checked with:

sudo docker stats --no-stream retail-catalog-app

EC2 memory:

free -h

EC2 disk:

df -h

Application logs:

sudo docker logs retail-catalog-app

## 🎯 DevOps Concepts Demonstrated

- Version Control
- Git branching and commits
- CI/CD
- Automated testing
- Docker containerization
- Docker image management
- Docker Hub
- AWS EC2 deployment
- Linux administration
- SSH
- GitHub Actions Secrets
- Infrastructure security
- Application health checks
- Container monitoring
- AWS CloudWatch
- CloudWatch alarms

## 👨‍💻 Author

Chandrashekhar Patil

BCA | AWS | DevOps | Cloud Computing
