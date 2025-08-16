# 🚀 Full Stack React + Node.js + PostgreSQL + Redis (Dockerized)

A minimal **full-stack boilerplate** with:

- **React.js** frontend (client)
- **Node.js / Express** backend (server)
- **PostgreSQL** database
- **Redis** cache
- containerized with **Docker Compose**

---

## 📦 Tech Stack

- **Frontend:** React (JavaScript, Create React App)
- **Backend:** Node.js + Express
- **Database:** PostgreSQL
- **Cache:** Redis
- **Containerization:** Docker + Docker Compose

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

### 2️⃣ Start postgres and redis with Docker

```bash
docker-compose up --build
```

### 3️⃣ Setup backend (Node.js + Express)
```bash
cd server
npm install
npm start
```
### 4️⃣ Setup frontend (React)
``` bash
cd client
npm install
npm start
```

### 🔑 Environment Variables
```bash
Create a .env file inside the server/ folder with the following:
POSTGRES_HOST=localhost
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=mydatabase
POSTGRES_PORT=5432

REDIS_HOST=localhost
REDIS_PORT=6379
```

### 🌐 API Endpoints
GET / → Returns backend status, Postgres time, and Redis value
GET /set-redis → Sets a sample key in Redis

### 🧪 Testing
Visit backend: http://localhost:5000
Visit frontend: http://localhost:3000








