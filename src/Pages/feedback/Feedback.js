import React from 'react';
import styledComponent from 'styled-components';
import { TextField, Button, Select } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const TestFielsWithStyle = styled(TextField)({
    width: '400px',
})

const MainDiv = styledComponent.div`
    background-color: rgb(134, 134, 248);
    height: 100;
    padding: 0px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const InputDiv = styledComponent.div`
    background-color: rgb(238, 239, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
    align-items: center;
`


export default class Feedback extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectType: '',
            email: '',
            name: '',
            testimonials: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };
    onClick = () => {
        if(this.state.selectType === 'testimonials') {
            const data = {
                name: this.state.name,
                email: this.state.email,
                testimonials: this.state.testimonials,
            }

            const res = axios.post(`http://localhost:5000/api/testimonials/`, data).then(res => console.log(res))
        }
    }
    render(){
        return (
            <MainDiv>
                <InputDiv>
                    <TestFielsWithStyle name="email" onChange={this.handleChange} label="Ваш Email" />
                </InputDiv>
                <InputDiv>
                    <TestFielsWithStyle name="name" label="Ваше Имя" onChange={this.handleChange} />
                </InputDiv>
                <InputDiv>
                    <FormControl style={{width: '400px', backgroundColor: 'rgb(238, 239, 255)'}}>
                        <InputLabel id="demo-simple-select-label">Тип обращения</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.stateselectType}
                            onChange={this.handleChange}
                            name="selectType"
                            >
                            <MenuItem value="consultation">Консультация</MenuItem>
                            <MenuItem value='complaint'>Жалоба</MenuItem>
                            <MenuItem value='cooperation'>Сотрудничество</MenuItem>
                            <MenuItem value='testimonials'>Отзыв</MenuItem>
                        </Select>
                    </FormControl>
                </InputDiv>
                <InputDiv>
                    <TestFielsWithStyle
                        id="outlined-multiline-static"
                        label="Текст сообщения"
                        multiline
                        rows={4}
                        variant="outlined"
                        name="testimonials"
                        onChange={this.handleChange}
                    />
                </InputDiv>
                <InputDiv>
                    <Button onClick={() => this.onClick()}> Отправить</Button>
                </InputDiv>
            </MainDiv>
        )
    }
}