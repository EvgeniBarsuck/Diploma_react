import {
    GET_EXAMPLE_WORK_START_ONE,
    GET_EXAMPLE_WORK_SUCCESS_ONE,
    GET_EXAMPLE_WORK_FAILURE_ONE
} from '../TypesExampleWork';


const oneExampleOfWorkState = {
    oneExampleOfWork : {}
}

export const oneExampleWorkReducer = (state = oneExampleOfWorkState, action) => {
    switch (action.type){
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