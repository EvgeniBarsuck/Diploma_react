import React, { useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { TextField } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {randomInteger} from './src/RandomExample';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin : 8
  },
  media: {
    height: 140,
  },

});

export default function MediaCard({item, getOneExampleWork}) {
  const classes = useStyles();
  const [name, setName] = useState(item.Name);
  const [description, setDescription] = useState(item.Description);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.MassImg[randomInteger(0,item.MassImg.length-1)]}
          
        >
            <image src={item.MassImg[randomInteger(0,item.MassImg.length-1)]} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <TextField value={name} onChange={(e) => setName(e.target.value)}/>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <TextField 
                id="outlined-textarea"
                placeholder="Placeholder"
                name="ShortDescription"
                multiline
                onChange={(e) => setDescription(e.target.value)}
                variant="outlined"
                defaultValue={description}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            Сохранить
        </Button>
        <Button size="small" color="secondary">
            Удалить
        </Button>
      </CardActions>
    </Card>
  );
}


