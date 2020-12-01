import {combineReducers} from 'redux'
import {aboutCompanyReducer} from './aboutCompany/AboutCompanyReducer';
import {allExampleWorkReducer} from './exampleWork/GetAll/ExampleWorkReducer';
import {oneExampleWorkReducer} from './exampleWork/GetOne/OneExampleWorkReducer'

export const rootReducer = combineReducers({
    aboutCompany : aboutCompanyReducer,
    exampleWork : allExampleWorkReducer,
    oneExampleOfWork : oneExampleWorkReducer
})