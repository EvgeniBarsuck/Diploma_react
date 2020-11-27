import {
    GET_EXAMPLE_WORK_START,
    GET_EXAMPLE_WORK_SUCCESS,
    GET_EXAMPLE_WORK_FAILURE
} from './typesExampleWork';

import axios from 'axios';

export function getExampleWork (){
    return async dispatch =>{
        dispatch(getExamleWorkStart());
        axios
        .get(`http://localhost:5000/api/exampleofwork`,)
        .then(res => {
            dispatch(examleWorkSucccess(res.data));
        })
        .catch(err => {
            dispatch(examleWorkFailure(err.message));
        });
    }
}

const getExamleWorkStart = () => ({
    type: GET_EXAMPLE_WORK_START
});
const examleWorkSucccess = getExampleWork => ({
    type: GET_EXAMPLE_WORK_SUCCESS,
    payload: getExampleWork
});
const examleWorkFailure = error => ({
    type: GET_EXAMPLE_WORK_FAILURE,
    payload: {
      error
    }
});