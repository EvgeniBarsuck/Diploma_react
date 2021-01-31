import {combineReducers} from 'redux'
import {aboutCompanyReducer} from './aboutCompany/aboutCompanyReducer';
import {allExampleWorkReducer} from './exampleWork/ExampleWorkReducer';
import {contactsReducer} from './Contacts/ContactsReducer'

export const rootReducer = combineReducers({
    aboutCompany : aboutCompanyReducer,
    exampleWork : allExampleWorkReducer,
    contacts : contactsReducer
})