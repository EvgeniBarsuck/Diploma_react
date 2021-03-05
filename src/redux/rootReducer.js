import {combineReducers} from 'redux'
import {aboutCompanyReducer} from './aboutCompany/aboutCompanyReducer';
import {allExampleWorkReducer} from './exampleWork/ExampleWorkReducer';
import {contactsReducer} from './Contacts/ContactsReducer';
import { calculatorReducer } from './calculactor/calculatorReducer'

export const rootReducer = combineReducers({
    aboutCompany : aboutCompanyReducer,
    exampleWork : allExampleWorkReducer,
    contacts : contactsReducer,
    calculator: calculatorReducer,
})