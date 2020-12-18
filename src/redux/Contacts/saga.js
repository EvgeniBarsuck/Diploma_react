import axios from 'axios';
import {takeEvery, put, call} from 'redux-saga/effects';
import {REQUEST_CONTACTS} from './TypesContacts';
import {
    GET_CONTACTS_START,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAILURE,
    // PATCH_CONTACTS_START,
    // PATCH_CONTACTS_SUCCESS,
    // PATCH_CONTACTS_FAILURE
} from './TypesContacts';


export default function* sagaWatcher(){
    yield takeEvery(REQUEST_CONTACTS, sagaWorker);
}

function* sagaWorker() {
    try{
        yield put({type: GET_CONTACTS_START});
        const payloads = yield call(fetchContacts)
        yield put({type :  GET_CONTACTS_SUCCESS, payload : payloads.data});
    } catch (e){
        yield put({type : GET_CONTACTS_FAILURE, payload : e})
    }
}

async function fetchContacts (){
    const response = await axios.get(`http://localhost:5000/api/contacts`);
    return await response;
}



// const getContactsStart = () => ({
//     type: GET_CONTACTS_START
// });
// const getContactsSuccess = aboutCompany => ({
//     type: GET_CONTACTS_SUCCESS,
//     payload: aboutCompany
// });
// const getContactsFailure = error => ({
//     type: GET_CONTACTS_FAILURE,
//     payload: {
//       error
//     }
// });

// const patchContactsStart = () => ({
//     type: PATCH_CONTACTS_START
// });
// const patchContactsSuccess = aboutCompany => ({
//     type: PATCH_CONTACTS_SUCCESS,
//     payload: aboutCompany
// });
// const patchContactsFailure = error => ({
//     type: PATCH_CONTACTS_FAILURE,
//     payload: {
//       error
//     }
// });