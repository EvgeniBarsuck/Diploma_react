import React from "react";
import { TextField , Button } from '@material-ui/core';
import Tab from '../../components/main/Tab';
import ExecutiveSurveyWater from './ExecutiveSurveyWater';
import ExecutiveSurveyGas from './ExecutiveSurveyGas';
import TopographicSurvey from './TopographicSurvey';

const initialState = {
    in1: '',
    O2: 0,
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
                <Tab />
                <ExecutiveSurveyWater />
                <ExecutiveSurveyGas />
                <TopographicSurvey />
            </div>    
        )
    }
} 

export default Service;