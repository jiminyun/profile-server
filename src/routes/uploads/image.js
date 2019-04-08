import express from "express";
import { uploadImage } from "../../middlewares";
const router = express.Router();

router.post("/", uploadImage, (req, res, next) => {
  res.send(req.file.location);
});

export default router;
