# 🧠 MindFlow Frontend


> **MindFlow** is an AI-powered app that converts unstructured text into an **interactive mind map**.  
> This repository contains the **React frontend** of the project.  
> 👉 The Flask + Google Gemini backend is maintained separately here: https://github.com/GoDxVictoryRR/mindflow-backend


---

## ✨ Features
- ⚡ Fast & responsive React UI  
- 🔌 Connects seamlessly with Flask backend  
- 🤖 AI-powered responses using Google Gemini API  
- 🌐 Easy to configure backend URL with `.env`  
- 🛠 Developer-friendly setup  

---

## 🛠 Tech Stack
- **Frontend**: React, JavaScript, HTML, CSS  
- **Backend**: Flask (separate repo)  
- **AI**: Google Gemini API  
- **Package Manager**: npm  

---

## 🚀 Getting Started

### 1. Clone repo
```bash
git clone https://github.com/GoDxVictoryRR/mindflow-frontend.git
cd mindflow-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure backend URL  
Create a `.env` file in the root directory and add:  

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

👉 Replace with your deployed backend URL if not running locally.

### 4. Start development server
```bash
npm start
```

App will be running at:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🎯 Usage
1. Run the backend (from the **mindflow-backend** repo).  
2. Start this frontend using:  
   ```bash
   npm start
   ```
3. Paste text into the input area and interact with the AI assistant.  

---

---

## 🤝 Contributing
Contributions are welcome!  
1. Fork this repo  
2. Create your feature branch (`git checkout -b feature-name`)  
3. Commit changes (`git commit -m 'Add some feature'`)  
4. Push to branch (`git push origin feature-name`)  
5. Open a Pull Request  

---

## 🌟 Acknowledgements
- [React](https://reactjs.org/)  
- [Flask](https://flask.palletsprojects.com/)  
- [Google Gemini API](https://ai.google/)  
