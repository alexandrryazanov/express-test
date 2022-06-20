import { NextFunction } from "express";

export function middleware() {
  return async function (req: any, res: any, next: NextFunction) {
    req.user.role = new Date();
    next();
  };
}
