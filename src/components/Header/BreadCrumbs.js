import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const useStyle = makeStyles({
    root : {
        color : '#66aaed'
    },
    focused :{
        color : '#e0ddf0'
    }
})

export default function SimpleBreadcrumbs() {
  const classes = useStyle();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link className = {classes.root} href="/" onClick={handleClick}>
        Главная
      </Link>
      <Typography className = {classes.focused}>О компании</Typography>
    </Breadcrumbs>
  );
}