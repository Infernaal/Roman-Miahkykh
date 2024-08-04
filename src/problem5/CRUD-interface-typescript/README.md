# 📦 ExpressJS TypeScript CRUD API

## ✨ Description

This is a CRUD API interface built with **ExpressJS** and **TypeScript**. It uses **SQLite** for data persistence.

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/Infernaal/Roman-Miahkykh.git>
   cd src/problem5/CRUD-interface-TypeScript
   npm install
   npx tsc
   npm start
   ```

2. **Test the CRUD functions using Postman:**
   Download the desktop version of Postman from [here](https://www.postman.com/downloads/).

## 🔗 API Endpoints

### Read
- **GET** `/api/resources`

### Read by ID
- **GET** `/api/resources/:id`

### Create
- **POST** `/api/resources`
  ```json
  {
    "name": "Resource",
    "description": "Test Description",
    "category": "Test category"
  }
  ```

### Update
- **PUT** `/api/resources/:id`
  ```json
  {
    "name": "Resource",
    "description": "Test Description 1",
    "category": "Test category 1"
  }
  ```

### Delete
- **DELETE** `/api/resources/:id`
```

This updated README file uses a more attractive and consistent Markdown style, making it easier to read and understand. The use of emojis adds visual appeal, and the code blocks for commands and JSON examples are clearly separated for better readability.