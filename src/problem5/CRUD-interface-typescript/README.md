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

![Read || Postman](https://i.imgur.com/ev3cRdT.jpeg)

### Read by ID
- **GET** `/api/resources/:id`

![Read by ID || Postman](https://i.imgur.com/KsOdJmg.jpeg)

### Create
- **POST** `/api/resources`
  ```json
  {
    "name": "Resource",
    "description": "Test Description",
    "category": "Test category"
  }
  ```

![Create || Postman](https://i.imgur.com/n4o1ffj.jpeg)

![Create || Postman](https://i.imgur.com/CilNYnK.jpeg)

### Update
- **PUT** `/api/resources/:id`
  ```json
  {
    "name": "Resource",
    "description": "Test Description 1",
    "category": "Test category 1"
  }
  ```

![Update || Postman](https://example.com/expressjs-logo.png)


### Delete
- **DELETE** `/api/resources/:id`

![Delete || Postman](https://example.com/expressjs-logo.png)

```
This updated README file uses a more attractive and consistent Markdown style, making it easier to read and understand. The use of emojis adds visual appeal, and the code blocks for commands and JSON examples are clearly separated for better readability.