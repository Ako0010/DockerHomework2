# DockerHomework1 🚀

This project is a full-stack web application consisting of a **React frontend**, **ASP.NET Core Web API backend**, and **SQL Server database**, fully containerized using Docker.

---

## 📌 Project Overview

- **Frontend:** React + Vite + Tailwind CSS v4  
- **Backend:** ASP.NET Core 8.0 Web API (EF Core + Identity)  
- **Database:** Microsoft SQL Server  
- **Orchestration:** Docker Compose (full app + database setup)

---

## 🌐 Services & URLs

| Service      | URL                      |
|--------------|--------------------------|
| Frontend     | http://localhost:3000    |
| Backend API  | http://localhost:5296    |
| Adminer      | http://localhost:8080    |
| SQL Server   | localhost,1433           |

---

## 🐳 Docker Setup

The project is fully containerized using `docker-compose.yml`, which runs:

- Frontend (React app)
- Backend API (ASP.NET Core)
- SQL Server database

### ▶️ Run the project

```bash
docker compose up --build
