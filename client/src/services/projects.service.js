import axios from "axios";
import qs from "qs"

const API_URL = "http://127.0.0.1:8080/projects/";


const getProjectsByList = (projects) => {
  return axios
    .get(API_URL+'/bylist', {
      params:{projects:projects.reduce((f, s) => `${f},${s}`)},
      
    })
    .then((response) => {
        return response.data;
    });
};

const getProjects = () => {
  return axios
    .get(API_URL, {
      
      
    })
    .then((response) => {
        return response.data;
    });
};

const updateProject = (id,updateData) => {
  return axios
    .put(API_URL+id, updateData, {
      
      
    })
    .then((response) => {
        return response.data;
    });
};
const addProject = (newProject) => {
  return axios
    .post(API_URL, newProject, {
      
      
    })
    .then((response) => {
        return response.data;
    });
};

export default {
    getProjectsByList,getProjects,updateProject,addProject
  };