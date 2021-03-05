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
  

export default function FirstCalc({focus}) {
    const classes = useStyles();

    const dispatch = useDispatch();
    const selector = useSelector(state => state.calculator);
    
    console.log(selector)
    return (
        <div className={classes.root}>
            <div>
                <TextField label="Площадь" value={selector.value} onChange={(e) => dispatch(setValueFirstCalc(e.target.value, focus))}/>
            </div>
            <InputLabel>Общая стоимость: {selector.resault}</InputLabel>
        </div>
    )
}