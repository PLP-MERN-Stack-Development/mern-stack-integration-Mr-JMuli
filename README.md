# CARB0N COD3
### Climate Monitoring MERN Stack Application

Carb0n Code is a full-stack climate monitoring system built with the MERN stack. It enables users to record, visualize, categorize, and manage climate-related data such as temperature changes, emissions, humidity, and environmental alerts. This project demonstrates seamless front-end and back-end integration, full REST API design, and advanced MERN stack features.

---

##  Tech Stack

### **Frontend**
- React.js  
- Vite  
- React Router  
- Context API  
- Axios  
This assignment focuses on building a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that demonstrates seamless integration between front-end and back-end components.

### **Backend**
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  

### **Other Tools**
- JSON Web Tokens (JWT)  
- Multer (image uploads)  
- express-validator  
- dotenv  

---
## Features

### **Core Features**
- Submit climate posts (CRUD)
- Categorize climate readings or events
- REST API with proper routing and error handling
- Mongoose models for posts and categories
- Form validation (client + server)
- Global state management using React Context API
- Custom hook for API calls

### **Advanced Features**
- User authentication (register, login, protected routes)
- Image upload for climate reports
- Search and filtering (category, keywords, dates)
- Pagination for posts list
- Comments for climate observations
- Optimistic UI updates
- Loading and error handling states

---


## Assignment Overview

You will build a blog application with the following features:
1. RESTful API with Express.js and MongoDB
2. React front-end with component architecture
3. Full CRUD functionality for blog posts
4. User authentication and authorization
5. Advanced features like image uploads and comments

## Project Structure

```
CARB0N COD3/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

---

## API Documentation

### **Posts API**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Fetch all posts |
| GET | `/api/posts/:id` | Fetch a single post |
| POST | `/api/posts` | Create a new post |
| PUT | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |

### **Categories API**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | Get all categories |
| POST | `/api/categories` | Create a new category |

### **Auth API**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Authenticate user |
| GET | `/api/auth/me` | Fetch logged-in user profile |

---


### **Requirements**
- Node.js v18+
- MongoDB (local or cloud/Atlas)

---
## Author

Carb0n Code – Climate Monitoring MERN Stack Application
Developed by John Muli

