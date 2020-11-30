import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {randomInteger} from './src/randomExample';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.MassImg[randomInteger(0,item.MassImg.length-1)]}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={"/service/"+ item._id} >
            <Button size="small" color="primary">
            Подробнее
            </Button>
        </Link>
      </CardActions>
    </Card>
  );
}


