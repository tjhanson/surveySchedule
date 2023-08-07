import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import projectsService from '../services/projects.service';

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        data:[],
        changeMade: false,
    },
    reducers:{
        getProjects: (state,{payload}) => {
            state.data = payload
        },
        switchChange: (state) => {
            state.changeMade = !state.changeMade
        }
        

    },
})




export default projectsSlice.reducer

export const { getProjects,switchChange } = projectsSlice.actions

//export const currentSite = (state) => state.site.currentSite





export const setProjectsbyList = (projects) =>(dispatch) => {
    return projectsService.getProjectsByList(projects).then(
        (response) => {
        dispatch(getProjects(response));
        console.log(response)
        return Promise.resolve()
        },
        (error) =>{
        console.log(error.response)
        return Promise.reject();
        });
    }

    export const setProjects = () =>(dispatch) => {
        return projectsService.getProjects().then(
            (response) => {
            dispatch(getProjects(response));
            return Promise.resolve()
            },
            (error) =>{
            console.log(error.response)
            return Promise.reject();
            });
        }
export const updateProjectByID = (id,updateData) =>(dispatch) => {
    console.log(updateData)
    return projectsService.updateProject(id,updateData).then(
        (response) => {
        console.log(response)
        return Promise.resolve()
        },
        (error) =>{
        console.log(error.response)
        return Promise.reject();
        });
    }

    export const addProject = (updateData) =>(dispatch) => {
        console.log(updateData)
        return projectsService.addProject(updateData).then(
            (response) => {
            console.log(response)
            return Promise.resolve()
            },
            (error) =>{
            console.log(error.response)
            return Promise.reject();
            });
        }