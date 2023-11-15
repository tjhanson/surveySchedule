import axios from "axios";

const API_URL = "http://10.1.2.208:8080/day/";




const getDay = (day) => {
  return axios
    .get(API_URL+'getOrCreate', {
        params:{day:day},
      
    })
    .then((response) => {
        return response.data;
    });
};

const updateDay = (id,updateData) => {
  return axios
    .put(API_URL+id, updateData, {
      
      
    })
    .then((response) => {
        return response.data;
    });
};

export default {
    getDay,updateDay
    };