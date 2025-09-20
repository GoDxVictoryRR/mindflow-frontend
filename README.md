# 🌐 MindFlow – Frontend

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)  
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)  
[![GitHub Stars](https://img.shields.io/github/stars/GoDxVictoryRR/mindflow-frontend)](#)  

---

> **MindFlow** is an AI-powered app that converts unstructured text into an **interactive mind map**.  
This repository contains the **React frontend**.  
👉 The Flask + Google Gemini backend is maintained separately: [mindflow-backend](https://github.com/GoDxVictoryRR/mindflow-backend)

---

## 🚀 Features

- 📝 Text input box for paragraphs/notes  
- 🌳 AI-generated **mind map visualization** (from backend API)  
- 🎨 Interactive UI: expand, collapse, drag nodes  
- ⚡ Responsive design (desktop + mobile)  
- 🔗 Communicates with Flask backend API  

---

## 🛠️ Tech Stack

- **React** (Frontend framework)  
- **JavaScript (ES6)**  
- **CSS / Tailwind (if you add it)**  
- **REST API** → Flask + Google Gemini (backend repo)  

---

## 📂 Project Structure

mindflow-frontend/
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable React components
│ ├── styles/ # CSS / styling
│ └── App.js # Entry point
├── package.json
├── .gitignore
└── README.md


---

## ⚙️ Setup & Installation

### 1. Clone repo
```bash
git clone https://github.com/GoDxVictoryRR/mindflow-frontend.git
cd mindflow-frontend

2. Install dependencies
npm install

3. Configure backend URL

Create a .env file in the root directory:

REACT_APP_BACKEND_URL=http://localhost:5000


(or the deployed backend URL)

4. Start development server
npm start


App runs at: http://localhost:3000

🎯 Usage

Run the backend (mindflow-backend
)

Start this frontend (npm start)

Paste text into the input area

Press Generate Map → See AI-generated mind map

🔭 Roadmap

 Dark mode 🎨

 Export mind maps (PNG/PDF)

 Animations for node transitions

 Better error handling if backend is offline

🤝 Contributing

Contributions are welcome!

Open issues for bugs/feature requests

Fork & PR with enhancements

📄 License

Licensed under the MIT License. See LICENSE
.

🔗 Related Repos

Backend: mindflow-backend
 (Flask + Gemini API)
