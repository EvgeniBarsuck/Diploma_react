
import {
    GET_COMPANY_START,
    GET_COMPANY_SUCCESS,
    GET_COMPANY_FAILURE
} from './TypesAboutCompany';

import axios from 'axios';

export function getAboutCompanyActions (){
    return async dispatch =>{

        dispatch(getAboutCompanyStart());
        axios
        .get(`http://localhost:5000/api/aboutcompany`,)
        .then(res => {
            dispatch(getAboutCompanySuccess(res.data));
        })
        .catch(err => {
            dispatch(aboutCompanyFailure(err.message));
        });
    }
}



const getAboutCompanyStart = () => ({
    type: GET_COMPANY_START
});
const getAboutCompanySuccess = aboutCompany => ({
    type: GET_COMPANY_SUCCESS,
    payload: aboutCompany
});
const aboutCompanyFailure = error => ({
    type: GET_COMPANY_FAILURE,
    payload: {
      error
    }
});