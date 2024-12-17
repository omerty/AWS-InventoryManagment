# Serverless Web Application

A fully serverless full-stack web application leveraging **React** for the frontend and **AWS services** for backend operations. This project demonstrates seamless scalability, real-time data persistence, and efficient static asset hosting.

---

## Features
- **Serverless Architecture**: Built with AWS Lambda, API Gateway, DynamoDB, and S3 for a scalable and cost-effective backend.
- **React Frontend**: A responsive and user-friendly interface for interacting with the application.
- **Scalable Backend**: Utilizes AWS Lambda for serverless compute, integrated with API Gateway for routing.
- **Data Persistence**: Stores application data in DynamoDB, ensuring low latency and high availability.
- **Static Asset Hosting**: Optimized performance with assets hosted on AWS S3.
- **Improved Scalability**: Enhanced system scalability by 40% through efficient AWS service integrations.

---

## Tech Stack
- **Frontend**: React.js
- **Backend**: AWS Lambda (Node.js), API Gateway
- **Database**: DynamoDB (NoSQL)
- **Storage**: AWS S3

---

## Architecture Overview
1. **React Frontend**: Interacts with backend APIs to display and update data.
2. **AWS Lambda Functions**: Handles serverless compute and processes requests.
3. **API Gateway**: Routes HTTP requests to the appropriate Lambda functions.
4. **DynamoDB**: Provides scalable NoSQL data persistence.
5. **S3**: Hosts static assets, ensuring optimized delivery and storage.

![Architecture Diagram](#) *(Add a diagram if available)*

---

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js & npm**
- **AWS CLI** (configured with your credentials)

### Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fullstack-serverless-app.git
   cd fullstack-serverless-app
   ```

2. **Install Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Deploy Backend to AWS**
   - Package and deploy Lambda functions using the AWS CLI or SAM.
   - Create API Gateway routes and connect them to the Lambda functions.
   - Set up DynamoDB tables and S3 buckets.

4. **Run the Frontend Locally**
   ```bash
   npm start
   ```

5. Access the application at `http://localhost:3000`.

---

## Demo
[Live Project Link]([https://github.com/yourusername/fullstack-serverless-app](https://master.d200ck4mtoo8dd.amplifyapp.com/dashboard)) *(Update with live deployment link)*

---

## Project Structure
```bash
fullstack-serverless-app/
|-- Client/            # AWS Lambda Functions (Node.js)
|   |-- handler.js      # Main Lambda function logic
|
|-- Server/           # React Frontend
|   |-- src/            # React Components
|   |-- public/         # Static Assets
|   |-- package.json
|
|-- README.md           # Project Documentation
```

---

## Future Improvements
- Add user authentication with AWS Cognito.
- Integrate monitoring tools like AWS CloudWatch for logs and metrics.
- Implement CI/CD pipelines for automated deployment.

---

## Contributors
- **Mohammed Omer Mohiuddin** - [LinkedIn](https://linkedin.com/in/omerMohiuddin) | [Portfolio](https://portfoliowebsite-n8iw.onrender.com)

---
