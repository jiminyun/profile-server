// imports

import axios from "axios";

const API_URL = "http://localhost:4000/api/projects";
// actions
const ADD_PROJECT = "ADD_PROJECT";
const EDIT_PROJECT = "EDIT_PROJECT";
const DEL_PROJECT = "DEL_PROJECT";
const SET_EDIT = "SET_EDIT";
//Fetch data
const PROJECTS_HAS_ERRORED = "PROJECTS_HAS_ERRORED";
const PROJECTS_IS_LOADING = "PROJECTS_IS_LOADING";
const PROJECTS_LOADED = "PROJECTS_LOADED";

// action creatroes
function addProject(newProject) {
  //console.log("addProject", newProject);
  return {
    type: ADD_PROJECT,
    newProject
  };
}

function projectsLoaded(projects) {
  return {
    type: PROJECTS_LOADED,
    projects
  };
}

function projectsHasErrored(bool) {
  return {
    type: PROJECTS_HAS_ERRORED,
    hasErrored: bool
  };
}

function projectsIsLoading(bool) {
  return {
    type: PROJECTS_IS_LOADING,
    isLoading: bool
  };
}

function setEdit(project) {
  return {
    type: SET_EDIT,
    projectToEdit: project
  };
}

function editProject(id, uptProject) {
  return {
    type: EDIT_PROJECT,
    id,
    uptProject
  };
}

function delProject(id) {
  return {
    type: DEL_PROJECT,
    id
  };
}

// api call
function saveProject(project) {
  return (dispatch, getState) => {
    axios
      .post(API_URL, {
        project
      })
      //.then(res => console.log(res.data.project))
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(addProject(response.data.project));
      })
      .catch(err => console.log(err));
  };
}

export function errorAfterFiveSeconds() {
  // We return a function instead of an action object
  return dispatch => {
    setTimeout(() => {
      // This function is able to dispatch other action creators
      dispatch(projectsHasErrored(true));
    }, 5000);
  };
}

function projectFetchData() {
  return dispatch => {
    dispatch(projectsIsLoading(true));
    axios(API_URL)
      .then(response => {
        //console.log("response", response);
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(projectsIsLoading(false));
        return response;
      })
      //.then(response => response.json())
      .then(response => dispatch(projectsLoaded(response.data.projects)))
      .catch(() => dispatch(projectsHasErrored(true)));
  };
}

function updateProject(id, project) {
  return (dispatch, getState) => {
    axios
      .patch(API_URL + "/" + id, {
        project
      })
      //.then(res => console.log(res.data.project))
      .then(response => {
        const { id, project } = response.data;
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(editProject(id, project));
      })
      .catch(err => console.log(err));
  };
}

function deleteProject(id) {
  return (dispatch, getState) => {
    axios
      .delete(API_URL + "/" + id, {
        id
      })
      //.then(res => console.log(res.data.projects + "/" + res.data.projects._id))
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(delProject(id));
      })
      .catch(err => console.log(err));
  };
}
// initial state
const initialState = {
  projects: []
};
// reducer
const projects = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return applyAddProject(state, action);
    case PROJECTS_LOADED:
      return applyGetProjects(state, action);
    case SET_EDIT:
      return applySetEdit(state, action);
    case EDIT_PROJECT:
      return applyUpdate(state, action);
    case DEL_PROJECT:
      return applyDelProject(state, action);
    default:
      return state;
  }
};

const proHasErrored = (state = false, action) => {
  switch (action.type) {
    case "PROJECTS_HAS_ERRORED":
      return action.hasErrored;
    default:
      return state;
  }
};

const proIsLoading = (state = false, action) => {
  switch (action.type) {
    case "PROJECTS_ARE_LOADING":
      return action.isLoading;
    default:
      return state;
  }
};

// reducer functions
function applyAddProject(state, action) {
  //console.log("applyAddProject", action);
  return {
    ...state,
    projects: [action.newProject].concat(state.projects)
  };
}

function applyGetProjects(state, action) {
  return {
    ...state,
    projects: action.projects
  };
}

function applySetEdit(state, action) {
  return {
    ...state,
    projectToEdit: action.projectToEdit
  };
}

function applyUpdate(state, action) {
  //console.log(action.uptProject.id);
  return {
    ...state,
    projects: state.projects.map(project => {
      if (project._id === action.id) {
        console.log("updateProject", action.uptProject);
        return {
          ...action.uptProject
        };
      }
      return project;
    }),
    projectToEdit: undefined
  };
}

function applyDelProject(state, action) {
  return {
    ...state,
    projects: state.projects.filter(project => project._id !== action.id)
  };
}
//exports

const actionCreators = {
  saveProject,
  projectFetchData,
  setEdit,
  updateProject,
  deleteProject
};

export { actionCreators };
export { projects, proHasErrored, proIsLoading };
