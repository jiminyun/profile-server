import express from "express";
import api from "./api";
import uploads from "./uploads";
const router = express.Router();

router.use("/api", api);
router.use("/uploads", uploads);

export default router;
