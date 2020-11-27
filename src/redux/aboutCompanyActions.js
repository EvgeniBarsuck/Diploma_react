
import {
    GET_ABOUT_COMPANY_START,
    GET_ABOUT_COMPANY_SUCCESS,
    GET_ABOUT_COMPANY_FAILURE
} from './typesAboutCompany'

import axios from 'axios';

export function getAboutCompanyActions (){
    return async dispatch =>{
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

export function getExampleWork (){
    return async dispatch =>{
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
    type: GET_ABOUT_COMPANY_START
});
const addTodoSuccess = aboutCompany => ({
    type: GET_ABOUT_COMPANY_SUCCESS,
    payload: Array.from(aboutCompany)
});



const aboutCompanyFailure = error => ({
    type: GET_ABOUT_COMPANY_FAILURE,
    payload: {
      error
    }
});