import express from "express";
const cors = require("cors");
import jwt from "jsonwebtoken";
import { adminMiddleware } from "./middlewares/adminMiddleware";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());

// Отдаем на фронт
app.get("/products", (req, res) => {
  res.send([
    { id: 1, name: "Tomato", price: 100 },
    { id: 2, name: "Potato", price: 50 },
  ]);
});
app.get("/users", adminMiddleware, (req, res) => {
  res.send([
    { id: 1, name: "Oleg", age: 23 },
    { id: 2, name: "Mike", age: 23 },
  ]);
});

//Проверяем логин/пароль и отдаем токен
app.post("/login", (req, res) => {
  if (req.body.login === "admin" && req.body.password === "admin") {
    const token = jwt.sign({ role: "admin" }, "secret-key");
    return res.status(200).send({ token });
  } else {
    return res.status(401).send("Неправильный логин/пароль");
  }
});

app.listen(PORT, () => console.log(`Сервер запущен на порту: ${PORT}`));
