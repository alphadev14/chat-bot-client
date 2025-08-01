
# Chat Bot App – Fullstack Deployment

## 🔧 Tech Stack

- **Frontend:** React (Vercel)
- **Backend:** Node.js + Express (Render)

## 📁 Project Structure

```
chat-bot-app/
├── client/       # React App
├── server/       # Express API
└── README.md
```

---

## 🚀 Deploy Guide

### ✅ Frontend (React on Vercel)

1. Push toàn bộ project lên GitHub.
2. Truy cập [https://vercel.com](https://vercel.com), chọn **New Project**.
3. Import GitHub repo và chọn thư mục `client/`.
4. Vercel tự động build:
   - Build Command: `npm run build`
   - Output directory: `build`
5. Sau khi deploy, frontend sẽ có URL như: `https://chat-bot-client.vercel.app`

---

### ✅ Backend (Express on Render)

1. Truy cập [https://render.com](https://render.com), chọn **New > Web Service**.
2. Import GitHub repo, chọn thư mục `server/`.
3. Thiết lập:
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node
4. Add biến môi trường trong tab **Environment** nếu cần:
   ```
   PORT=10000
   YOUR_API_KEY=xxx
   ```
5. Sau khi deploy, backend có URL như: `https://chat-bot-server.onrender.com`

---

## 🔗 Connect frontend to backend

Trong file React (`client/src/...`):

```js
const API_BASE = "https://chat-bot-server.onrender.com";
axios.get(\`\${API_BASE}/api/route\`);
```

---

## ⚙️ CORS Setup in Express

Trong `index.js` của `server/`:

```js
const cors = require('cors');
app.use(cors({
  origin: 'https://chat-bot-client.vercel.app',
  methods: ['GET', 'POST']
}));
```

---

## 📦 Sample `package.json` for Express

```json
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^17.2.1"
  }
}
```

---

## ✅ Result

- ✅ Frontend URL: `https://chat-bot-client.vercel.app`
- ✅ Backend URL: `https://chat-bot-server.onrender.com`

Chúc bạn deploy thành công! 🚀

