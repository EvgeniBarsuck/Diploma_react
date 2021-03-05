import {
    SET_VALUE_CALC,
    SET_RESAULT_VALUE
} from './typesCalcolator';


const initialState = {
    value: '',
    focus: null,
    resault: 0,
}

export const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE_CALC: return {
            ...state,
            value: action.payload.value,
            focus: action.payload.focus,
        };
        
        case SET_RESAULT_VALUE: return {
            ...state,
            resault: action.payload,
        }
        default: return state;
    }
}