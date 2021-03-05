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
            C10: 181.9,
            C11: 59.00,
            D10: 1,
            D11: 1,
            F10: 1.2,
            F11: 1.75,
            
            C13: 181.9,
            C14: 59.00,
            D13: 1,
            D14: 1,
            E13: 0.5,
            E14: 0.5,
            F13: 1.2,
            F14: 1.75,
        
            I10: 0.00,
            I11: 0.00,
            J15: 31,
            J20: 0,
            K20: 0,
            I21: 8.75,
            I23: 6,
            K31: 5.15,
            K32: 9.83,
            J10: 0,
            J11: 0,
            K34: 0,
            I28: 1.731
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
            C10,
            C11,
            D10,
            D11,
            F10,
            F11,
            
            C13,
            C14,
            D13,
            D14,
            E13,
            E14,
            F13,
            F14,
    
            I10,
            I11,
            J15,
            J20,
            K20,
            I21,
            I23,
            K31,
            K32,
            K34,
            I28
        } = this.state;
        const currentFocus = this.props.focus === 1 ? true : false;
        const { O2 } = this.props;
        const I13 = (+O2).toFixed(3);
        const I14 = (+O2).toFixed(3);

        const J10 = (C10*F10*D10).toFixed(3);
        const K10 = (J10*I10).toFixed(3);

        const J11 = (C11*F11*D11).toFixed(3);
        const K11 = (J11*I11).toFixed(3);

        const J13 = (C13*F13*D13*E13).toFixed(3);
        const J14 = (C14*F14*D14*E14).toFixed(3);
        const K13 = (I13*J13).toFixed(3);
        const K14 = (I14*J14).toFixed(3);

        const K16 = (+(+K10+ +K13)).toFixed(2);
        const K17 = (+(+K11+ +K14+ +J15)).toFixed(2);

        const J21 = (+(K16+K20)).toFixed(3);
        const K21 = (K16*I21/100).toFixed(2);
        const J23 = (+(+K16+ +K20+ +K21)).toFixed(2);
        const K23 = (J23*I23/100*1.9).toFixed(2);

        const K26 = (+(+K16 + +K17 + +K20 + +K23 + +K21)).toFixed(2);

        const K28 = (K26 * I28).toFixed(2);
        const K30 = (+K28).toFixed(2);
        //const L31 = (((3.5 * K30)/100)*1.3).toFixed(2);
        //const M31 = (L31*20/100).toFixed(2);
        //const K31 = (((3.5*K30)/100)*1.4624+(+M31)).toFixed(2);
        // const K32 = ((5.6*1.4624)+((5.6*1.4624)*20/100)).toFixed(2);
        const K33 = (+(+K30 + +K31 + +K32)).toFixed(2); 
        const K35 = (((K34/100) * K33) + +K33).toFixed(2);
        console.log(this.props);
        if (currentFocus){
            this.props.setResaltValue(K35);
        }

        return (
            <TableContainer component={Paper}>
                <h1>СМЕТА (Топографическая сьемка)</h1>
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
                                    <TextField name='C10' value={C10} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                                </TableCell>
                                <TableCell align="left" width='80px'> 
                                    <TextField name='D10' value={D10} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                                </TableCell>
                                <TableCell align="left" width='80px'>

                                </TableCell>
                                <TableCell align="left" width='80px'>
                                    <TextField name='F10' value={F10} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                                </TableCell>
                            </TableCell>
                            <TableCell align="left">га</TableCell>
                            <TableCell align="left">
                                <TextField name='I10' value={I10} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                            <TableCell align="left">
                                {J10}
                            </TableCell>
                            <TableCell align="left">
                                {K10}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left" >
                                <TableCell align="left" width='100px'>
                                    к)
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
                            <TableCell align="left">га</TableCell>
                            <TableCell align="left">
                                <TextField name='I11' value={I11} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                            <TableCell align="left">
                                {J11}
                            </TableCell>
                            <TableCell align="left">
                                {K11}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell rowSpan={3} align="center">2</TableCell>
                            <TableCell>Обновление инженерно-топографических планов на застроенной территории М 1:500 сеч. 0,5м</TableCell>
                            <TableCell rowSpan={3}>ОП п.2.3  п.2.16(д) т.3.3 § 5  прим.3</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <TableCell align="left" width='100px'>
                                    {"2 кат. п)"}
                                </TableCell>
                                <TableCell align="left" width='80px'>
                                    <TextField name='C13' value={C13} onChange={ e => this.handlerChange(e)} width='80px'></TextField>
                                </TableCell>
                                <TableCell align="left" width='80px'>
                                    <TextField name='D13' value={D13} onChange={ e => this.handlerChange(e)} width='80px'></TextField>
                                </TableCell>
                                <TableCell align="left" width='80px'>
                                    <TextField name='E13' value={E13} onChange={ e => this.handlerChange(e)} width='80px'></TextField>
                                </TableCell>
                                <TableCell align="left" width='80px'>
                                    <TextField name='F13' value={F13} onChange={ e => this.handlerChange(e)} width='80px'></TextField>
                                </TableCell>
                            </TableCell>
                            <TableCell align="left">га</TableCell>
                            <TableCell align="left">
                                {I13}
                            </TableCell>
                            <TableCell align="left">
                                {J13}
                            </TableCell>
                            <TableCell align="left">
                                {K13}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <TableCell align="left" width='100px'>
                                    {"к)"}
                                </TableCell>
                                <TableCell align="left" width='80px'>
                                    <TextField name='C14' value={C14} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                                </TableCell>
                                <TableCell align="left" width='80px'>
                                    <TextField name='D14' value={D14} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                                </TableCell>
                                <TableCell align="left" width='80px'>
                                    <TextField name='E14' value={E14} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                                </TableCell>
                                <TableCell align="left" width='80px'>
                                    <TextField name='F14' value={F14} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                                </TableCell>
                            </TableCell>
                            <TableCell align="left">га</TableCell>
                            <TableCell align="left">    
                                {I14}
                            </TableCell>
                            <TableCell align="left">
                                {J14}
                            </TableCell>
                            <TableCell align="left">
                                {K14}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">5</TableCell>
                            <TableCell>Обновление инженерно-топографических планов на застроенной территории М 1:500 сеч. 0,5м</TableCell>
                            <TableCell>ОП т.4.62 прим. 3</TableCell>
                            <TableCell>1 организация</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>
                                <TextField name='J15' value={J15} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                            <TableCell>{J15}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell rowSpan={2} align="center">6</TableCell>
                            <TableCell rowSpan={2} colSpan={2}></TableCell>
                            <TableCell rowSpan={2} colSpan={2} align="right">ИТОГО</TableCell>
                            <TableCell>полевые</TableCell>
                            <TableCell>{K16}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>камеральные</TableCell>
                            <TableCell>{K17}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={11} align="center"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell rowSpan={2} align="center">7</TableCell>
                            <TableCell rowSpan={2}> Выполнении полевых изысканий в неблагоприятный период Полевые  </TableCell>
                            <TableCell rowSpan={2} colSpan={2}>ОП т.2.1 § 2</TableCell>
                            <TableCell rowSpan={2}></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <TextField name='J20' value={J20} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                            <TableCell>
                                <TextField name='K20' value={K20} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell rowSpan={2} align="center">8</TableCell>
                            <TableCell rowSpan={2}>Расходы по содержанию и эксплуатации внутреннего транспорта</TableCell>
                            <TableCell rowSpan={2}>ОП т.2.2,      § 7</TableCell>
                            <TableCell rowSpan={2}></TableCell>
                            <TableCell align="center">
                                <TextField name='I21' value={I21} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                            <TableCell align="center" rowSpan={2}>{J21}</TableCell>
                            <TableCell align="center">{K21}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">%</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell rowSpan={2} align="center">9</TableCell>
                            <TableCell rowSpan={2}>Организация и ликвидация работ % *1.9 от суммы (полевых работ+ внутренний транспорт)</TableCell>
                            <TableCell rowSpan={2}>ОП п.2.14 прим.1</TableCell>
                            <TableCell rowSpan={2}></TableCell>
                            <TableCell align="center">
                                <TextField name='I23' value={I23} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                            <TableCell align="center" rowSpan={2}>{J23}</TableCell>
                            <TableCell align="center">{K23}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">%</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">11</TableCell>
                            <TableCell align="left" colSpan={5}>Итого  работ, выполненных собственными силами </TableCell>
                            <TableCell align="center">{K26}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={11} align="center"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">12</TableCell>
                            <TableCell align="left" colSpan={3}>Итого с К  индексации- 1,5795</TableCell>
                            <TableCell align="center">
                                <TextField name='I28' value={I28} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center">{K28}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">13</TableCell>
                            <TableCell align="left" colSpan={5}>Итого  работ, выполненных собственными силами, без НДС</TableCell>
                            <TableCell align="center">{K30}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">14</TableCell>
                            <TableCell align="left" colSpan={5}>Регистрация и проверка качества инженерно-геодезических изыскани 3.5%*1,4624+20% </TableCell>
                            <TableCell align="center">
                                <TextField name='K31' value={K31} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">15</TableCell>
                            <TableCell align="left" colSpan={5}>Услуги архивного фонда (выдача во временное пользование материалов топографических съемок) Планшет, трапеция 1</TableCell>
                            <TableCell align="center">
                                <TextField name='K32' value={K32} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">16</TableCell>
                            <TableCell align="left" colSpan={5}>Итого по смете </TableCell>
                            <TableCell align="center">{K33}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">17</TableCell>
                            <TableCell align="left" colSpan={5}>НДС </TableCell>
                            <TableCell align="center">
                                <TextField name='K34' value={K34} onChange={ e => this.handlerChange(e)}  width='80px'></TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">18</TableCell>
                            <TableCell align="left" colSpan={5}>Итого к оплате </TableCell>
                            <TableCell align="center">{K35}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Аннотация</TableCell>
                            <TableCell align="left">Услуги архивного фонда (выдача во временное пользование материалов топографических съемок) Планшет, трапеция 1. Формула:    (стоимость в бел. Рубл)* каэф.+количество %</TableCell>
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