import {combineReducers} from 'redux'
import {aboutCompanyReducer} from './aboutCompany/aboutCompanyReducer';
import {exampleWorkReducer} from './exampleWork/exampleWorkReducer'

export const rootReducer = combineReducers({
    aboutCompany : aboutCompanyReducer,
    exampleWork : exampleWorkReducer
})