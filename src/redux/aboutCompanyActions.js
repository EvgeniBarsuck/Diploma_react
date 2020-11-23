import {getAboutCompany} from '../components/scripts'
import {GET_ABOUT_COMPANY} from './typesAboutCompany'

export function getAboutCompanyActions (){
    console.log("aboutCA work");
    return {
        type : GET_ABOUT_COMPANY,
        payload : getAboutCompany()
    }
}