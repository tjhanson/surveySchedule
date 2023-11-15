import { createSlice } from '@reduxjs/toolkit'
import surveyRequests from '../services/surveyrequests.service';
import dayData from '../services/day.service';

const surveyRequestsSlice = createSlice({
    name: 'surveyRequests',
    initialState: {
        requests:[],
        currentDay:"",
    },
    reducers:{
        getRequestQueue: (state,{payload}) => {
            state.requestQueue = payload
        },
        addToRequests: (state,{payload}) => {
            state.requests = [...state.requests, ...payload]
        },
        removeFromRequestQueue: (state,{payload}) => {
            console.log(payload)
            state.requestQueue = state.requestQueue.filter(
                req => req._id !== payload
            )
        },
        updateRequest:(state,{payload}) => {
            console.log(payload)
            state.requests = state.requests.map(
                req => req._id === payload._id ? {...req, ...payload.updateData} : req
            )
        },
        setCurrentDay: (state,{payload}) => {
            console.log(payload)
            state.currentDay = payload
        },
        
        

    },
})

export default surveyRequestsSlice.reducer

export const { getRequestQueue,addToRequests,removeFromRequestQueue,updateRequest,setCurrentDay } = surveyRequestsSlice.actions

//export const currentSite = (state) => state.site.currentSite



export const updateCurrentDate = (day) =>(dispatch) => {
    return dayData.getDay(day).then(
        (response) => {
        //dispatch(addToRequests(response));
        dispatch(setCurrentDay(day))
        console.log(response)
        return Promise.resolve()
        },
        (error) =>{
        console.log(error.response)
        return Promise.reject();
        });
    }
    // return surveyRequests.getRequestsByDate(day).then(
    //     (response) => {
    //     dispatch(addToRequests(response));
    //     dispatch(setCurrentDay(day))
    //     console.log(response)
    //     return Promise.resolve()
    //     },
    //     (error) =>{
    //     console.log(error.response)
    //     return Promise.reject();
    //     });
    // }


export const setProjectsbyDate = (day) =>(dispatch) => {
    return surveyRequests.getRequestsByDate(day).then(
        (response) => {
        dispatch(addToRequests(response));
        console.log(response)
        return Promise.resolve()
        },
        (error) =>{
        console.log(error.response)
        return Promise.reject();
        });
    }

    export const setRequestQueue = () =>(dispatch) => {
        return surveyRequests.getRequestsNotScheduled().then(
            (response) => {
            dispatch(addToRequests(response));
            return Promise.resolve()
            },
            (error) =>{
            console.log(error.response)
            return Promise.reject();
            });
        }
export const updateRequestByID = (id,updateData) =>(dispatch) => {
    console.log(updateData)
    return surveyRequests.updateRequest(id,updateData).then(
        (response) => {
        console.log(response)
        dispatch(updateRequest({_id:id,updateData:updateData}))
        return Promise.resolve()
        },
        (error) =>{
        console.log(error.response)
        return Promise.reject();
        });
    }

    export const updateRequestOwner = (id,updateData) =>(dispatch) => {
        console.log(updateData)
        return surveyRequests.updateRequest(id,updateData).then(
            (response) => {
            console.log(response)
            // dispatch(removeFromRequestQueue(id))
            // dispatch(addToDayRequests(response))
            return Promise.resolve()
            },
            (error) =>{
            console.log(error.response)
            return Promise.reject();
            });
        }

