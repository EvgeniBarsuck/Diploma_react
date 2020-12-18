import {
    GET_CONTACTS_START,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAILURE,
    PATCH_CONTACTS_START,
    PATCH_CONTACTS_SUCCESS,
    PATCH_CONTACTS_FAILURE
} from './TypesContacts';


const initialState = {
    contacts : {}
}

export const contactsReducer = (state = initialState, action) => {
        
        switch (action.type){
            case GET_CONTACTS_START : return {
                ...state,
                loading: true
            };
            case GET_CONTACTS_SUCCESS : console.log("Туть"); return {
                ...state, contacts : action.payload,
                loading: false
            }
            case GET_CONTACTS_FAILURE : return {
                ...state, error : action.payload,
                loading: false
            }
            case PATCH_CONTACTS_START : return {
                ...state,
                loading: true
            };
            case PATCH_CONTACTS_SUCCESS : return {
                ...state, patchContacts : action.payload,
                loading: false
            }
            case PATCH_CONTACTS_FAILURE : return {
                ...state, error : action.payload,
                loading: false
            }
            default : return state;
        }
    
    
}