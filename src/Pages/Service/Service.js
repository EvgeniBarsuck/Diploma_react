import React from "react";
import { TextField , Button, Paper, Typography } from '@material-ui/core';
import Tab from '../../components/main/Tab';
import ExecutiveSurveyWater from './ExecutiveSurveyWater';
import ExecutiveSurveyGas from './ExecutiveSurveyGas';
import TopographicSurvey from './TopographicSurvey';
import { styled } from '@material-ui/core/styles';
import styledComponent  from 'styled-components';

const Annotations = styled(Paper)({
    padding: '10px',
})

const LinkTo = styledComponent.a`
    text-decoration: none;
`

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
                <div>
                    <Tab />
                    <Annotations elevation={0}>
                        <Typography>
                            Расчет стоимости услуги осуществляется на основе рекомендаций установленных Министерством РБ.
                        </Typography>
                        <Typography paragraph='true'>
                            Итоговое значение складывается с учетом технических и географических факторов, а так же потребностей заказчика!
                        </Typography>
                        <Typography paragraph='true'>
                            Подробнее о стоимости инженерных изысканий  и Проектирования - узнайте позвонив нам по телефону: <LinkTo href="tel:+375298187738">+375 29 818-77-38</LinkTo>  
                        </Typography>
                        <Typography>
                            Или напишите: <LinkTo href="mailto:Andrey51184@mail.ru">Andrey51184@mail.ru</LinkTo>. Мы ответим Вам в самое ближайшее время!
                        </Typography>
                    </Annotations>
                </div>
                <ExecutiveSurveyWater />
                <ExecutiveSurveyGas />
                <TopographicSurvey />
            </div>    
        )
    }
} 


export default Service;