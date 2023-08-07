import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../slices/projectsSlice.js'
import usersReducer from '../slices/userSlice.js'


export default configureStore({
    reducer:{
        projects: projectsReducer,
        users: usersReducer
    },
    devTools:true,
})
