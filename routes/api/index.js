import express from "express";
import Project from "./project";
const router = express.Router();

router.use("/projects", Project);

export default router;
