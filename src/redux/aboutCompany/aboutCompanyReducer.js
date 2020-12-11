import {
    GET_COMPANY_SUCCESS,
    GET_COMPANY_START
} from './TypesAboutCompany';


const initialState = {
    aboutCompany : {}
}

export const aboutCompanyReducer = (state = initialState, action) => {
        
        switch (action.type){
            case GET_COMPANY_START : return {
                ...state,
                loading: true
            };
            case GET_COMPANY_SUCCESS : return {
                ...state, aboutCompany : action.payload,
                loading: false
            }     
            default : return state;
        }
    
    
}