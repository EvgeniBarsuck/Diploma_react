import {
    SET_VALUE_CALC,
    SET_RESAULT_VALUE,
} from './typesCalcolator';

export const setValueFirstCalc = (value, focus) => {
    return {
        type: SET_VALUE_CALC,
        payload: {
            value,
            focus,
        }
    }
};

export const setResaltValue = (value) => ({
    type: SET_RESAULT_VALUE,
    payload: value
});