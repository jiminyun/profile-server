import express from "express";
import Image from "./image";
const router = express.Router();

router.use("/image", Image);

export default router;
