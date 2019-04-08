import mongoose from "mongoose";

const ProjectShema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required"
  },
  git_link: {
    type: String
  },
  image: {
    type: String
  },
  video: {
    type: String
  },
  description: String,
  detail_a: String,
  detail_b: String,
  category: String,
  status: {
    type: String
  },
  usedTechs: {
    type: Array,
    default: [
      "react",
      "mongodb",
      "node",
      "graphql",
      "apollo",
      "vanila js",
      "react-naitive",
      "prisma",
      "aws",
      "s3",
      "express",
      "redux",
      "styled components",
      "axios"
    ]
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

ProjectShema.methods.toJSON = function() {
  return {
    _id: this._id,
    title: this.title,
    git_link: this.git_link,
    image: this.image,
    video: this.video,
    description: this.description,
    detail_a: this.detail_a,
    detail_b: this.detail_b,
    category: this.category,
    status: this.status,
    usedTechs: this.usedTechs,
    createAt: this.createAt
  };
};

const model = mongoose.model("Project", ProjectShema);
export default model;
