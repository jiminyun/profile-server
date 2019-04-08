import express from "express";
import Project from "../../models/Project";
const router = express.Router();

router.post("/", (req, res, next) => {
  const { project } = req.body;

  if (!project.title) {
    return res.status(422).json({
      errors: {
        title: "is required"
      }
    });
  }

  const newProject = new Project(project);
  return newProject
    .save()
    .then(() => res.json({ project: newProject.toJSON() }))
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
  const { project } = req.body;
  const { id } = req.params;

  if (!project.title) {
    return res.status(422).json({
      errors: {
        title: "is required"
      }
    });
  }

  return Project.findByIdAndUpdate({ _id: id }, { ...project }, { new: true })
    .then(data => res.json({ id, project: data }))
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  return Project.findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(next);
});

export default router;
