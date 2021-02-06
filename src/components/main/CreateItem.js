import React, {useState} from 'react';
import { TextField, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import { createContact } from '../../redux/Contacts/saga'

export default function CreateItem (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [description, setDescription] = useState('');

    const date = {
        name,
        email,
        phone,
        position,
        description,
    }
    return (
        <div>
            <InputLabel id="demo-simple-select-label">Добавить контакта</InputLabel>
            <TextField id="standard-basic" value={name} onChange={(e) => setName(e.target.value)} label="Имя"/>
            <TextField id="standard-basic" value={email} onChange={(e) => setEmail(e.target.value)} label="Емаил"/>
            <TextField id="standard-basic" value={phone} onChange={(e) => setPhone(e.target.value)} label="Телефон"/>
            <TextField id="standard-basic" value={position} onChange={(e) => setPosition(e.target.value)} label="Должность"/>
            <TextField id="standard-basic" value={description} onChange={(e) => setDescription(e.target.value)} label="Описание"/>
            <div>
                <Button onClick={() => createContacts(date)}>Сохранить</Button>
            </div>
        </div>
    )
}

function createContacts(date) {
    console.log(date);
    createContact(date);
}