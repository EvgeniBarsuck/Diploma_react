import {combineReducers} from 'redux'
import {aboutCompanyReducer} from './aboutCompany/AboutCompanyReducer';
import {allExampleWorkReducer} from './exampleWork/ExampleWorkReducer';

export const rootReducer = combineReducers({
    aboutCompany : aboutCompanyReducer,
    exampleWork : allExampleWorkReducer
})