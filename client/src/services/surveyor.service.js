import axios from "axios";

const API_URL = "http://10.1.2.208:8080/surveyor/";




const getSurveyors = () => {
  return axios
    .get(API_URL, {
      
      
    })
    .then((response) => {
        return response.data;
    });
};

const updateSurveyor = (id,updateData) => {
  return axios
    .put(API_URL+id, updateData, {
      
      
    })
    .then((response) => {
        return response.data;
    });
};
const addSurveyor = (newSurveyor) => {
  return axios
    .post(API_URL, newSurveyor, {
      
      
    })
    .then((response) => {
        return response.data;
    });
};

export default {
  getSurveyors,updateSurveyor,addSurveyor
  };