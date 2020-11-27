import {
    GET_ABOUT_COMPANY_SUCCESS,
    GET_ABOUT_COMPANY_START
} from './typesAboutCompany';


const initialState = {
    aboutCompany : [],
    fetchedAboutCompany : []
}

export const aboutCompanyReducer = (state = initialState, action) => {

    switch (action.type){
        case GET_ABOUT_COMPANY_START : return {
            ...state,
            loading: true
        };
        case GET_ABOUT_COMPANY_SUCCESS :{
        
            return { ...state, aboutCompany : action.payload }
        }     
        default : return state;
    }
}