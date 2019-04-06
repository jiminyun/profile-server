import React from "react";
import Presenter from "./presenter";

export default class extends React.Component {
  state = {
    title: "",
    git_link: "",
    image: "",
    video: "",
    description: "",
    detail_a: "",
    detail_b: "",
    category: "",
    status: "",
    usedTechs: [],
    // Set initial files, type 'local' means this is a file
    // that has already been uploaded to the server (see docs)
    files: []
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.projectToEdit) {
      this.setState({
        title: nextProps.projectToEdit.title,
        git_link: nextProps.projectToEdit.git_link,
        image: nextProps.projectToEdit.image,
        video: nextProps.projectToEdit.video,
        description: nextProps.projectToEdit.description,
        detail_a: nextProps.projectToEdit.detail_a,
        detail_b: nextProps.projectToEdit.detail_b,
        category: nextProps.projectToEdit.category,
        status: nextProps.projectToEdit.status,
        usedTechs: nextProps.projectToEdit.usedTechs
      });
    }
  }

  render() {
    const {
      title,
      git_link,
      image,
      video,
      description,
      detail_a,
      detail_b,
      category,
      status,
      usedTechs,
      files
    } = this.state;
    return (
      <Presenter
        title={title}
        git_link={git_link}
        image={image}
        video={video}
        description={description}
        detail_a={detail_a}
        detail_b={detail_b}
        category={category}
        status={status}
        usedTechs={usedTechs}
        files={files}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFile={this._handleFile}
      />
    );
  }

  _handleInputChange = event => {
    const target = event.target;
    const { value, name, checked } = target;

    const usedTechs = this.state.usedTechs;
    let index;

    if (checked) {
      //usedTechs.push(value);
      if (usedTechs.indexOf(value) === -1) {
        usedTechs.push(value);
      }
    } else {
      index = usedTechs.indexOf(value);
      usedTechs.splice(index, 1);
    }

    this.setState({
      [name]: value,
      usedTechs: usedTechs
    });

    console.log(this.state.usedTechs);
  };

  _handleSubmit = event => {
    //const { title, filePath, description, status } = this.state;
    const { saveProject, projectToEdit, updateProject } = this.props;
    event.preventDefault();
    console.log("submit");

    //create formData

    if (!projectToEdit) {
      saveProject(this.state);
    } else {
      updateProject(projectToEdit._id, this.state);
    }
    this._handleResetState();
  };

  _handleFile = (filename, type) => {
    console.log("upload", type);

    if (type === "image/png") this.setState({ image: filename });
    else this.setState({ video: filename });
  };
  _handleResetState = () => {
    this.setState({
      title: "",
      git_link: "",
      image: "",
      video: "",
      description: "",
      detail_a: "",
      detail_b: "",
      category: "",
      status: "",
      usedTechs: []
    });
  };
}
