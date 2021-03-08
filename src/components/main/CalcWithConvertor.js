import React from 'react';
import { InputLabel, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setValueFirstCalc } from '../../redux/calculactor/calculatorActions';
const useStyles = makeStyles((theme) => ({
    root: {

    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));
  

export default function CalcWithConvertor({focus}) {
    const classes = useStyles();

    const dispatch = useDispatch();
    const selector = useSelector(state => state.calculator);
    
    console.log(selector)
    return (
        <div className={classes.root}>
            <div>
                <TextField label="Гектары(га)" value={selector.value/10000} onChange={(e) => dispatch(setValueFirstCalc(e.target.value*10000, focus))}/>
            </div>
            <div>
                <TextField label="Метры(м)" value={selector.value} onChange={(e) => dispatch(setValueFirstCalc(e.target.value, focus))}/>
            </div>
            <InputLabel>Общая стоимость: {selector.resault} бел.руб</InputLabel>
        </div>
    )
}