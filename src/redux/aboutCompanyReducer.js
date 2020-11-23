import {GET_ABOUT_COMPANY} from './typesAboutCompany';


const initialState = {
    aboutCompany : [],
    fetchedAboutCompany : []
}

export const aboutCompanyReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type){
        case GET_ABOUT_COMPANY : 
            return { ...state, aboutCompany : action.payload }
        default : return state;
    }
}