# 🏆 Scoreboard API Module

## 📘 Description

This module is responsible for managing the leaderboard on the website. It provides an API for updating and retrieving user scores in real-time.

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository_URL>
   cd path/to/project
   npm install
   npm start
   ```

2. **Run tests:**
   ```bash
   npm test
   ```

## 🔗 API Endpoints

### Get leaderboard
- **GET** `/api/leaderboard`

  - **Description:** Using this request, the backend server will return the top 10 users. If additional options are available, you can explicitly specify the top 10 users through the API.

  - **Response:**
    ```json
    [
      {
        "user_id": "123",
        "score": 1000
      },
      ...and the remaining 9 users in the top.
    ]
    ```

### Update user score
- **POST** `/api/leaderboard/update`

  - **Description:** This request will automatically update the top 10 users table in real time and display the results based on the changes since the last update.

  - **Request body:**
    ```json
    {
      "user_id": "123",
      "score": 100
    }
    ```

  - **Response:**
    ```json
    {
      "status": "200 OK",
      "message": "Score updated successfully."
    }
    ```

## 📈 Flow Diagram

![Flow Diagram](./diagram.png)

1. User performs an action on the website.
2. The action sends an API request to the server to update the score.
3. The server verifies the user's authorization.
4. If authorization is successful, the server updates the score in the database.
5. The leaderboard updates in real-time.

## 🛡️ Security Requirements

1. Use HTTPS to encrypt data.
2. Use JWT for user authorization and validate JWT tokens for all API requests.
3. Use WebSockets for real-time updates
4. Implement rate limiting to prevent DDoS attacks.
```