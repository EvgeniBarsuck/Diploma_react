import axios from 'axios';
import {
    GET_COMPANY_START,
    GET_COMPANY_SUCCESS,
    GET_COMPANY_FAILURE,
    PATCH_COMPANY_START,
    PATCH_COMPANY_SUCCESS,
    PATCH_COMPANY_FAILURE
} from './typesAboutCompany';

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

export function patchAboutCompanyActions (data){
    return async dispatch =>{
        try{
            dispatch(patchAboutCompanyStart());
            const response = await axios.patch(`http://localhost:5000/api/aboutcompany/5fb3cf0d0cefaf0714176ba3`, data);
            dispatch(patchAboutCompanySuccess(response));
        } catch (e){
            dispatch(patchaboutCompanyFailure(e));
        }
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

const patchAboutCompanyStart = () => ({
    type: PATCH_COMPANY_START
});
const patchAboutCompanySuccess = aboutCompany => ({
    type: PATCH_COMPANY_SUCCESS,
    payload: aboutCompany
});
const patchaboutCompanyFailure = error => ({
    type: PATCH_COMPANY_FAILURE,
    payload: {
      error
    }
});