import axios from "axios";

const API_URL = "http://10.1.2.208:8080/surveyrequests/";


const getRequestsByDate = (day) => {
  console.log(day)
  return axios
    .get(API_URL+'/byDate', {
      params:{day:day},
      
    })
    .then((response) => {
        return response.data;
    });
};

const getRequestsNotScheduled = () => {
  return axios
    .get(API_URL, {
      
      
    })
    .then((response) => {
        return response.data;
    });
};

const updateRequest = (id,updateData) => {
  return axios
    .put(API_URL+id, updateData, {
      
      
    })
    .then((response) => {
        return response.data;
    });
};
const addRequest = (newRequest) => {
  return axios
    .post(API_URL, newRequest, {
      
      
    })
    .then((response) => {
        return response.data;
    });
};

export default {
  getRequestsByDate,getRequestsNotScheduled,updateRequest,addRequest
  };