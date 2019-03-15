import mongoose from "mongoose";
import express from "express";
import Project from "../../models/Project";

const router = express.Router();

router.post("/", (req, res, next) => {
  const { body } = req;

  if (!body.title) {
    return res.status(422).json({
      errors: {
        title: "is required"
      }
    });
  }

  if (!body.description) {
    return res.status(422).json({
      errors: {
        description: "is required"
      }
    });
  }

  const newProject = new Project(body);
  return newProject
    .save()
    .then(() => res.json({ projects: newProject.toJSON() }))
    .catch(next);
});

router.get("/", (req, res, next) => {
  return Project.find()
    .sort({ createdAt: "descending" })
    .then(projects =>
      res.json({ projects: projects.map(projects => projects.toJSON()) })
    )
    .catch(next);
});

router.patch("/:id", (req, res, next) => {
  const {
    body: { id, title, description, filePath, status }
  } = req;

  const editProject = new Project(req.body);
  return Project.findByIdAndUpdate(
    { _id: id },
    { title, description, filePath, status }
  )
    .then(() => res.json({ project: editProject.toJSON() }))
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  return Project.findByIdAndRemove(req.project._id)
    .then(() => res.sendStatus(200))
    .catch(next);
});

export default router;
