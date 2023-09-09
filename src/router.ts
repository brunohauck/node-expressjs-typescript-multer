//Express [Router, multer]
import { Router } from "express";
import multer from "multer";

//Controller Usado para Aula
import { userController } from "./app/controller/UserController";

//Middleware de Upload para o Avatar
import { uploadAvatar } from "./app/middleware/upload/avatar";

const router: Router = Router();

router.post(
    "/",
    multer(uploadAvatar.getConfig).single("avatar"),userController.uploadAvatar
)

router.get("/aula-node", userController.get);

export {router};