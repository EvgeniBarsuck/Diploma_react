import {
    GET_EXAMPLE_WORK_START,
    GET_EXAMPLE_WORK_SUCCESS,
    GET_EXAMPLE_WORK_FAILURE
} from './typesExampleWork';


const ExampleWorkState = {
    exampleWork : []
}

export const exampleWorkReducer = (state = ExampleWorkState, action) => {
    switch (action.type){
        case GET_EXAMPLE_WORK_START : return {
            ...state,
            loading: true
        };
        case GET_EXAMPLE_WORK_SUCCESS : return{
            ...state, exampleWork : action.payload,
            loading: false
        }     
        case GET_EXAMPLE_WORK_FAILURE :{
            return {...state, exampleWork : action.error}
        }
        default : return state;
    }
}