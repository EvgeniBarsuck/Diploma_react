import React from "react";
import { TextField , Button } from '@material-ui/core';

const initialState = {
    in1: '',
}

class Service extends React.Component {
    constructor (props){
        super(props);
        this.state = initialState;
    }


    onHandlerChange = (event) =>{
        console.log(event.target.name, event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        this.setState(() => {
            return { [name]: value}
        })
    }

    onClick = () => {
        console.log(this.state);
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h2>Наши услуги</h2>
                <TextField name="in1" label="Standard" type="text" value={this.state.in1} onChange={(e) => this.onHandlerChange(e)} />
                <Button onClick={() => this.onClick()} >Click</Button>
            </div>    
        )
    }
} 

export default Service;