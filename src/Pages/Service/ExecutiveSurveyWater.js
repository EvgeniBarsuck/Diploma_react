import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { setResaltValue } from '../../redux/calculactor/calculatorActions';

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

class SpanningTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            C11: 42.8,
            D11: 0,
            F11: 0,

            C12: 28.6,
            D12: 0,
            F12: 0,
            I18: 1.7142,
            K21: 0,
            K23: 0
        }
    }

    handlerChange = (e) => {
        this.setState( state => {
            return {
            [e.target.name]: e.target.value,
        }})
    }
    
    render(){
        const {
            C11,
            D11,
            F11,
            C12,
            D12,
            F12,
            I18,
            K21,
            K23,
        } = this.state;
        const currentFocus = this.props.focus === 3 ? true : false;
        console.log(currentFocus,this.props.focus)
        const { O2 } = this.props;
        const I11 = O2;
        const I12 = O2;
        const K11 = (C11/100*I11).toFixed(2);
        const K12 = (C12/100*I12).toFixed(2);
        const K13 = K11;
        const K14 = K12;
        const K16 = (+ K13 + +K14).toFixed(2)
        const K18 = (K16*I18).toFixed(2);
        const K20 = K18;
        const K22 = (+K20+ +K21).toFixed(2);
        const D24 = (((K23/100) * K23) + +K22).toFixed(2);
        if (currentFocus){
            console.log('water')
            this.props.setResaltValue(D24);
        }

        return (
            <TableContainer component={Paper}>
                <h1>СМЕТА (исполнительная съёмка)   ВОДА и КАНАЛИЗАЦИЯ</h1>
                <Table aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">
                                N п.п
                            </TableCell>
                            <TableCell align="left">Виды изыскательских работ</TableCell>
                            <TableCell align="left">N табл. Пар</TableCell>
                            <TableCell align="left">Единицы измерения</TableCell>
                            <TableCell align="left">Объем работ V</TableCell>
                            <TableCell align="left">Стоим. Един. Работ, С</TableCell>
                            <TableCell align="left">Стоимость V*С</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={7}>СБЦ 19-2012 (3-е издание) (Сборник базовых цен на выполнение инженерных изысканий для строительства).    Утвержден Приказом Министерства архитектуры и строительства РБ № 474 от 26.12.2013 г. И № 477 от 27.12.2013 г. Письмо МАиС РБ от 04.05.2016 г. </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCell rowSpan={3} align="center">1</TableCell>
                            <TableCell>Создание инженерно-топографических планов М 1:500  на застроенных территориях, сеч 0,5 м</TableCell>
                            <TableCell rowSpan={3}> т.3.3 § 5  4,6</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <TableCell align="left" width='100px'>
                                    {'2 кат. п)'}
                                </TableCell>
                                <TableCell align="left" width='80px'>
                                    <TextField name='C11' value={C11} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                                </TableCell>
                                <TableCell align="left" width='80px'> 
                                    <TextField name='D11' value={D11} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                                </TableCell>
                                <TableCell align="left" width='80px'>

                                </TableCell>
                                <TableCell align="left" width='80px'>
                                    <TextField name='F11' value={F11} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                                </TableCell>
                            </TableCell>
                            <TableCell align="left">м</TableCell>
                            <TableCell align="left">
                                <TextField name='I11' value={I11} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                            <TableCell align="left">
                                {C11}
                            </TableCell>
                            <TableCell align="left">
                                {K11}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left" >
                                <TableCell align="left" width='100px'>
                                    к)
                                </TableCell>
                                <TableCell align="left" width='80px'>
                                    <TextField name='C12' value={C12} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                                </TableCell>
                                <TableCell align="left" width='80px'>
                                    <TextField name='D12' value={D12} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                                </TableCell>
                                <TableCell align="left" width='80px'> 
                                    
                                </TableCell>
                                <TableCell align="left" width='80px'> 
                                    <TextField name='F12' value={F12} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                                </TableCell>
                            </TableCell>
                            <TableCell align="left">м</TableCell>
                            <TableCell align="left">
                                <TextField name='I12' value={I12} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                            <TableCell align="left">
                                {C12}
                            </TableCell>
                            <TableCell align="left">
                                {K12}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell rowSpan={2} align="center">6</TableCell>
                            <TableCell rowSpan={2} colSpan={2}></TableCell>
                            <TableCell rowSpan={2} colSpan={2} align="right">ИТОГО</TableCell>
                            <TableCell>полевые</TableCell>
                            <TableCell>{K13}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>камеральные</TableCell>
                            <TableCell>{K14}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={11} align="center"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">11</TableCell>
                            <TableCell align="left" colSpan={5}>Итого  работ, выполненных собственными силами </TableCell>
                            <TableCell align="center">{K16}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={11} align="center"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">12</TableCell>
                            <TableCell align="left" colSpan={3}>Итого с К  индексации- 1,5795</TableCell>
                            <TableCell align="center">
                                <TextField name='I18' value={I18} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center">{K18}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">13</TableCell>
                            <TableCell align="left" colSpan={5}>Итого  работ, выполненных собственными силами, без НДС</TableCell>
                            <TableCell align="center">{K20}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">14</TableCell>
                            <TableCell align="left" colSpan={5}>Услуги архитектуры</TableCell>
                            <TableCell align="center">
                                <TextField name='K21' value={K21} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">15</TableCell>
                            <TableCell align="left" colSpan={5}>Итого по смете </TableCell>
                            <TableCell align="center">
                                <TextField name='K22' value={K22} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">16</TableCell>
                            <TableCell align="left" colSpan={5}>НДС </TableCell>
                            <TableCell align="center">
                                <TextField name='K23' value={K23} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">18</TableCell>
                            <TableCell align="left" colSpan={5}>Итого к оплате </TableCell>
                            <TableCell align="center">{D24}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        O2: state.calculator.value,
        focus: state.calculator.focus,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setResaltValue: (value) => dispatch(setResaltValue(value)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SpanningTable);