import {
    GET_COMPANY_START,
    GET_COMPANY_SUCCESS,
    GET_COMPANY_FAILURE,
    PATCH_COMPANY_START,
    PATCH_COMPANY_SUCCESS,
    PATCH_COMPANY_FAILURE
} from './typesAboutCompany';


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
            case GET_COMPANY_FAILURE : return {
                ...state, error : action.payload,
                loading: false
            }
            case PATCH_COMPANY_START : return {
                ...state,
                loading: true
            };
            case PATCH_COMPANY_SUCCESS : return {
                ...state, patchAboutCompany : action.payload,
                loading: false
            }
            case PATCH_COMPANY_FAILURE : return {
                ...state, error : action.payload,
                loading: false
            }
            default : return state;
        }
    
    
}