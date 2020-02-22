import React from 'react';
import { FormButton } from './FormElements';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  BottomNavigation,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    width: '350px',
    minHeight: '500px',
    color: 'rgb(93, 103, 91)',

    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  image: {
    padding: '20px',
    height: '200px'
  },
  action: {
    position: 'absolute',
    bottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    padding: '16px'
  },
  link: {
    textDecoration: 'none',
  },

});

const CardComp = props => {
  const classes = useStyles();

  return (
    <Card justify='center' elevation={15} className={classes.card}>
      <div style={{ textAlign: 'center' }}>
        <img className={classes.image} src={props.image} alt={props.image} />
      </div>
      <CardContent>
        <Typography gutterBottom variant='h6' component='h2' align='center'>
          {props.name}
        </Typography>
        <Typography gutterBottom component='p' align='center'>
          {props.price}
        </Typography>
      </CardContent>
      <CardActionArea className={classes.action}>
        <a
          className={classes.link}
          href={props.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FormButton className={classes.button}> Buy on Amazon </FormButton>
        </a>
      </CardActionArea>
    </Card>
  );
};

export default CardComp;
