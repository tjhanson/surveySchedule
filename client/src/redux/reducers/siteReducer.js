import {GET_SITE_BY_NAME} from '../actions/types'

const initialState = {
    currentSite:null
    
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_SITE_BY_NAME:
            return {
                ...state,
                currentSite: action.payload,
                
            };

        default:
            return state;

    }

}