import React, {useState} from 'react';
import { InputLabel, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));
  

export default function FirstCalc() {
    const classes = useStyles();
    const [firstPlace, setFirstPlace] = useState('');
    const [secondPlace, setSecondPlace] = useState('');
    const [thrityPlace, setThrityPlace] = useState('');

    const [result, setResult] = useState(firstPlace + secondPlace + thrityPlace);

    return (
        <div className={classes.root}>
            <div>
                <TextField label="Первое поле" value={firstPlace} onChange={(e) => { setFirstPlace(e.target.value); setResult(+e.target.value + +secondPlace + +thrityPlace)}}/>
            </div>
            <div>
                <TextField label="Первое поле" value={secondPlace} onChange={(e) => { setSecondPlace(e.target.value); setResult(+firstPlace + +e.target.value + +thrityPlace)}}/>
            </div>
            <div>
                <TextField label="Первое поле" value={thrityPlace} onChange={(e) => { setThrityPlace(e.target.value); setResult(+firstPlace + +secondPlace + +e.target.value)}}/>
            </div>
            <InputLabel>Общая стоимость: {result}</InputLabel>
        </div>
    )
}