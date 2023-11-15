import { configureStore } from '@reduxjs/toolkit'
import surveyRequestsReducer from '../slices/surveyRequestsSlice'
import surveyorReducer from '../slices/surveyorSlice'


export default configureStore({
    reducer:{
        surveyRequests: surveyRequestsReducer,
        surveyors:surveyorReducer,
    },
    devTools:true,
})
