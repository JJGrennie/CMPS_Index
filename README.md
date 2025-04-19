# 🎬 CMPS Film Index - Back-End

## 📌 What is CMPS Film Index?

A modern web application frontend that interacts with the [CMPS Film Index API](https://cmps-index.onrender.com/api/v1/film). Built using web technologies, this frontend allows users to **browse, create, and manage** a curated index of films.

---

## 💻 Development Platform

- Version 1.0 (API/V1/film) was developed on **Visual Studio 2022**

> _Note: While Visual Studio 2022 was used, this project is also fully compatible with Visual Studio Code._

---

## 🧠 Programming Languages & Technologies

- HTML  
- CSS  
- jQuery  
- SQL  
- JavaScript (Node.js for server-side integration)

---

## 📚 Table of Contents

- [What is CMPS Film Index?](#-what-is-cmps-film-index)
- [Development Platform](#-development-platform)
- [Programming Languages](#-programming-languages--technologies)
- [Installation & Setup](#-installation--setup)
- [Usage Instructions](#-usage-instructions)
- [API Integration](#-api-integration)
- [Contributing Guidelines](#-contributing-guidelines)
- [License](#-license)

---

## 🛠 Installation & Setup

### ✅ Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### 📦 Setup Steps

```
GitBash
npm init -y
npm install express
npm install pg
npm install cors
```

---

### 🗃️ Database Environment Setup

- Install [pgAdmin](https://www.pgadmin.org/)
- Install [PostgreSQL](https://www.postgresql.org/)

---

### 🔧 Configuration File Example (Node + Postgres)

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "your_username",
  password: "your_password",
  host: "localhost",
  database: "your_database",
  port: 5432,
});


---

### Schema Configuration

```
CREATE TABLE IF NOT EXISTS filmtype (
	id INTEGER GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
	genre VARCHAR(50),
	movie VARCHAR(50),
	year INTEGER
);
```

## 🚀 Usage Instructions

Deploy API Service Locally

-node server.js

### Test API Services

Install Postman for Testing API's

- Use https://www.postman.com/ to download and install Postman application.
- Postman application used to local test API


### Get / Filter Example in PostMan

- Filter by year
http://localhost:5000/api/v1/film/filter/search?year=1995
![image](https://github.com/user-attachments/assets/ab172597-5c3f-47e9-87d5-4131ba893adb)

- Filter by genre 
https://cmps-index.onrender.com/api/v1/film/filter/search?genre=comedy
![image](https://github.com/user-attachments/assets/b666154e-fe9c-4618-91f4-535acdf471fa)

- Filter by ID
https://cmps-index.onrender.com/api/v1/film/10
![image](https://github.com/user-attachments/assets/55ba51d0-b1bd-4567-8598-32fa2e502174)



### Put Example in PostMan
![image](https://github.com/user-attachments/assets/1302c662-16e6-4062-9787-f9525429688a)


 
### Post Example PostMan
![image](https://github.com/user-attachments/assets/b74a9ebb-2edc-43db-adf3-0b4a5f321fab)

##  Contributing Guidelines

1. Clone the repository  
2. Create a feature branch (`git checkout -b new-feature`)  
3. Commit your changes (`git commit -m "Added feature"`)  
4. Push to the branch (`git push origin new-feature`)  
5. Open a Pull Request

##  License

This project is licensed under the **MIT License**.
- https://opensource.org/license/mit
