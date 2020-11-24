
import {
    GET_ABOUT_START,
    GET_ABOUT_SUCCESS,
    GET_ABOUT_FAILURE    
} from './typesAboutCompany'

import axios from 'axios';

export function getAboutCompanyActions (){
    return dispatch =>{
        dispatch(getAboutCompanyStart());
        axios
        .get(`http://localhost:5000/api/aboutcompany`,)
        .then(res => {
            dispatch(addTodoSuccess(res.data));
        })
        .catch(err => {
            dispatch(aboutCompanyFailure(err.message));
        });
    }
}

const getAboutCompanyStart = () => ({
    type: GET_ABOUT_START
});
const addTodoSuccess = aboutCompany => ({
    type: GET_ABOUT_SUCCESS,
    payload: Array.from(aboutCompany)
});
const aboutCompanyFailure = error => ({
    type: GET_ABOUT_FAILURE,
    payload: {
      error
    }
});