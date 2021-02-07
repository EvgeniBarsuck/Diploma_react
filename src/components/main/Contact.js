import React from 'react';
import { Box } from '@material-ui/core'

const style = { 
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    text: {
        minWidth: '300px',
        marginLeft: '10px',
    },
    img: {
        alignItems: 'center',
        alignText: 'center',
    }
}


class Contacts extends React.Component{

    render() {
        const { item } = this.props;
        return (
            <div style={style.root}>
                <div style={style.img}>
                    <img width="130" height="90" src={item.img} alt="Not found"/>
                </div>
                <div style={style.text}>
                    <p><b>{item.name}</b></p>
                    <p>Должность: {item.position}</p>
                    <p>Номер: {item.phone}</p>
                    <p>Электронная почта: {item.email}</p>  
                </div>  
            </div>
        )
    }
}

export default Contacts;