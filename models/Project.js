import mongoose from "mongoose";

const ProjectShema = new mongoose.Schema({
  status: {
    type: String
  },
  filePath: {
    type: String,
    required: "FILE URL is required"
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
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
    description: this.description,
    filePath: this.filePath,
    status: this.status,
    createdAt: this.createdAt
  };
};

const model = mongoose.model("Project", ProjectShema);
export default model;
