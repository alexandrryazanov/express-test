import { NextFunction } from "express";
import jwt from "jsonwebtoken";

export async function adminMiddleware(req: any, res: any, next: NextFunction) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).send("Нет токена");
  }

  jwt.verify(token, "secret-key", (err: any, decoded: any) => {
    if (err) {
      return res.status(403).send("Ошибка верификации токена");
    }

    if (decoded.role === "admin") {
      return next();
    } else {
      return res.status(403).send("Вы не админ");
      console.log();
    }
  });
}
