import express from "express";
import Project from "./project";
import User from "./user";

const router = express.Router();

router.use("/projects", Project);
router.use("/users", User);

export default router;
