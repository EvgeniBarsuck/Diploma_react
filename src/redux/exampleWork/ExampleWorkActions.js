import {
    GET_EXAMPLE_WORK_START_ALL,
    GET_EXAMPLE_WORK_SUCCESS_ALL,
    GET_EXAMPLE_WORK_FAILURE_ALL,
    GET_EXAMPLE_WORK_START_ONE,
    GET_EXAMPLE_WORK_SUCCESS_ONE,
    GET_EXAMPLE_WORK_FAILURE_ONE
} from './typesExampleWork';

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

export function patchExampleWork(id, data) {
        
        axios
        .patch(`http://localhost:5000/api/exampleofwork/${id}`, data)
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
    
}

export function getOneExampleWork (id){
    return async dispatch =>{
        dispatch(getExamleWorkStartOne());
        axios
        .get(`http://localhost:5000/api/exampleofwork/${id}`,)
        .then(res => {
            dispatch(getExamleWorkSucccessOne(res.data));
        })
        .catch(err => {
            dispatch(getExamleWorkFailureOne(err.message));
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
const getExamleWorkStartOne = () => ({
    type: GET_EXAMPLE_WORK_START_ONE
});
const getExamleWorkSucccessOne = getExampleWork => ({
    type: GET_EXAMPLE_WORK_SUCCESS_ONE,
    payload: getExampleWork
});
const getExamleWorkFailureOne = error => ({
    type: GET_EXAMPLE_WORK_FAILURE_ONE,
    payload: {
      error
    }
});