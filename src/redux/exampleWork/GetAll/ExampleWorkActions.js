import {
    GET_EXAMPLE_WORK_START_ALL,
    GET_EXAMPLE_WORK_SUCCESS_ALL,
    GET_EXAMPLE_WORK_FAILURE_ALL
} from '../typesExampleWork';

import axios from 'axios';

export function getAllExampleWork (){
    return async dispatch =>{
        dispatch(getExamleWorkStart());
        axios
        .get(`http://localhost:5000/api/exampleofwork`,)
        .then(res => {
            dispatch(getExamleWorkSucccess(res.data));
        })
        .catch(err => {
            dispatch(getExamleWorkFailure(err.message));
        });
    }
}

const getExamleWorkStart = () => ({
    type: GET_EXAMPLE_WORK_START_ALL
});
const getExamleWorkSucccess = getExampleWork => ({
    type: GET_EXAMPLE_WORK_SUCCESS_ALL,
    payload: getExampleWork
});
const getExamleWorkFailure = error => ({
    type: GET_EXAMPLE_WORK_FAILURE_ALL,
    payload: {
      error
    }
});