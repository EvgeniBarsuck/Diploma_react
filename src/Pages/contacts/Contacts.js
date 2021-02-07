import React from 'react';
import { Paper, Box } from '@material-ui/core'
import Card from '../../components/main/productCard';
import axios from 'axios';
import Contact from '../../components/main/Contact';

class Contacts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: [],
        }
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:5000/api/contacts/');
        this.setState({
            contacts: res.data,
        });
    }

    render() {
        console.log(this.state.contacts);
        if(this.state.contacts.length ===0){
            return (<div>Загрузка</div>)
        }
        return (
            <div>
                <h1>
                    Контакты
                </h1>
                <Box>
                    {this.state.contacts.map(item => <Contact item={item} />)}
                </Box>
                
                <Card item={ { Name: 'names', Description: 'ass', MassImg: [] }} />
            </div>
        )
    }
}

export default Contacts;