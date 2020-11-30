import {
    GET_EXAMPLE_WORK_START_ONE,
    GET_EXAMPLE_WORK_SUCCESS_ONE,
    GET_EXAMPLE_WORK_FAILURE_ONE
} from '../typesExampleWork';

import axios from 'axios';

export function getOneExampleWork (id){
    return async dispatch =>{
        dispatch(getExamleWorkStart());
        axios
        .get(`http://localhost:5000/api/exampleofwork/${id}`,)
        .then(res => {
            dispatch(getExamleWorkSucccess(res.data));
        })
        .catch(err => {
            dispatch(getExamleWorkFailure(err.message));
        });
    }
}

const getExamleWorkStart = () => ({
    type: GET_EXAMPLE_WORK_START_ONE
});
const getExamleWorkSucccess = getExampleWork => ({
    type: GET_EXAMPLE_WORK_SUCCESS_ONE,
    payload: getExampleWork
});
const getExamleWorkFailure = error => ({
    type: GET_EXAMPLE_WORK_FAILURE_ONE,
    payload: {
      error
    }
});