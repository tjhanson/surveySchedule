import { createSlice } from '@reduxjs/toolkit'
import surveyor from '../services/surveyor.service';

const surveyorsSlice = createSlice({
    name: 'surveyors',
    initialState: {
        crewChiefs:[],
        chainmen:[]
    },
    reducers:{
        getSurveyors: (state,{payload}) => {
            state.crewChiefs = payload.crewChiefs
            state.chainmen = payload.chainmen
        },
     
        

    },
})

export default surveyorsSlice.reducer

export const { getSurveyors } = surveyorsSlice.actions

//export const currentSite = (state) => state.site.currentSite






    export const setSurveyors = () =>(dispatch) => {
        return surveyor.getSurveyors().then(
            (response) => {
                const sortedSurveyors = {
                    chainmen: response.filter(s => s.title === "chainman"),
                    crewChiefs: response.filter(s => s.title === "crewChief")
                }
            dispatch(getSurveyors(sortedSurveyors));
            return Promise.resolve()
            },
            (error) =>{
            console.log(error.response)
            return Promise.reject();
            });
        }
