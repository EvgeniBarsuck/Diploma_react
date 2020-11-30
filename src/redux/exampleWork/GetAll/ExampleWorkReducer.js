import {
    GET_EXAMPLE_WORK_START_ALL,
    GET_EXAMPLE_WORK_SUCCESS_ALL,
    GET_EXAMPLE_WORK_FAILURE_ALL
} from '../typesExampleWork';


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
        case GET_EXAMPLE_WORK_FAILURE_ALL :{
            return {...state, exampleWork : action.error}
        }
        default : return state;
    }
}