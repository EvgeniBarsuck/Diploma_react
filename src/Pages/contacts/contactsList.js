import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
const StylepButton = styled.button`
  padding: 0px;
  margin: 0px 10px 10px 5px;
  border: none;
  border-radius: 20px 20px 20px 20px;
`

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 752,
    width: 350
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(contacts) {
  return contacts.map((value) =>
    (<ListItem>
        <ListItemText
          primary={value}
        />
      </ListItem>)
  );
}

export default function InteractiveList({contacts, title, titleType}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid>
          <Typography variant={titleType} className={classes.title}>
            {title}
          </Typography>
          <div className={classes.demo}>
            <List>
              {generate(contacts)}
            </List>
            <StylepButton onClick={console.log('work')}>
              <img src="https://w7.pngwing.com/pngs/541/135/png-transparent-skype-for-business-windows-live-messenger-logo-line-skype-blue-text-skype-for-business.png" height="27px" width="48px" alt="Upload error"/>
            </StylepButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
