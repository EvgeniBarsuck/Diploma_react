import {
    GET_EXAMPLE_WORK_START_ALL,
    GET_EXAMPLE_WORK_SUCCESS_ALL,
    GET_EXAMPLE_WORK_FAILURE_ALL,
    GET_EXAMPLE_WORK_START_ONE,
    GET_EXAMPLE_WORK_SUCCESS_ONE,
    GET_EXAMPLE_WORK_FAILURE_ONE
} from './TypesExampleWork';


const ExampleWorkState = {
    exampleWork : []
}

export const allExampleWorkReducer = (state = ExampleWorkState, action) => {
    switch (action.type){
        case GET_EXAMPLE_WORK_START_ALL : return {
            ...state,
            loading: true
        };
        case GET_EXAMPLE_WORK_SUCCESS_ALL : return{
            ...state, exampleWork : action.payload,
            loading: false
        }     
        case GET_EXAMPLE_WORK_FAILURE_ALL : return {
            ...state, exampleWork : action.error
        };
        case GET_EXAMPLE_WORK_START_ONE : return {
            ...state,
            loading: true
        };
        case GET_EXAMPLE_WORK_SUCCESS_ONE : return{
            ...state, oneExampleOfWork : action.payload,
            loading: false
        }     
        case GET_EXAMPLE_WORK_FAILURE_ONE :{
            return {...state, exampleWork : action.error}
        }
        default : return state;
    }
}