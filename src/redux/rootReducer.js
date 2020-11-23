import {combineReducers} from 'redux'
import {aboutCompanyReducer} from './aboutCompanyReducer'

export const rootReducer = combineReducers({
    aboutCompany : aboutCompanyReducer
})