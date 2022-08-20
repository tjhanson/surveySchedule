import {GET_SITE_BY_NAME} from '../actions/types'
import axios from 'axios'


export const getSiteByName = (name) => dispatch => {
    axios
        .get(`/sites/${name}`)
        .then(res => 
            dispatch({
                type: GET_SITE_BY_NAME,
                payload: res.data
            })
            )
}