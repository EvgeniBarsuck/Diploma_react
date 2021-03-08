import React from 'react';
import styledComponent from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
const TestFielsWithStyle = styled(TextField)({
    width: '400px',
})

const MainDiv = styledComponent.div`
    background-color: rgb(134, 134, 248);
    height: 100;
    padding: 0px;

`
const InputDiv = styledComponent.div`
    background-color: rgb(238, 239, 255);
    display: flex;
    justify-content: center;
    padding-top: 10px;
    align-items: center;
`



export default class Feedback extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectType: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
      };
    render(){
        return (
            <MainDiv>
                <InputDiv>
                    <TestFielsWithStyle  label="Ваш Email" />
                </InputDiv>
                <InputDiv>
                    <TestFielsWithStyle label="Ваше Имя"/>
                </InputDiv>
                <InputDiv>
                    <TestFielsWithStyle
                        id="outlined-multiline-static"
                        label="Текст сообщения"
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                </InputDiv>
                <InputDiv>
                    <Button> Отправить</Button>
                </InputDiv>
            </MainDiv>
        )
    }
}