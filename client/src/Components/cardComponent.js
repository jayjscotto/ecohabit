import React, {useState} from 'react';
import Fade from '@material-ui/core/Fade';
import { FormButton } from './FormElements';
import {
  Card,
  // CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Paper,
  // BottomNavigation,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
  grow: {
    padding: '20px',
    display: 'none'
  },
  card: {
    width: '340px',
    color: 'rgb(93, 103, 91)',
    background: 'transparent'
  },
  image: {
    padding: '60px 20px',
    height: '200px',
  },
  action: {
    fontSize: '12px',
    display: 'block'
  },
  button: {
    padding: '4px 8px',
    position: 'absolute',
    right: '0',
    top: '0',
    fontSize: '12px'
  },
  link: {
    textDecoration: 'none',
  },
});

const CardComp = props => {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  const displayDetails = () => {
    setChecked(prev => !prev)
  }

  return (
      <div style={{ 
        borderRadius: '5px',
        background: '#ffffff', 
        textAlign: 'center', 
        position: 'relative',
        boxShadow: '10px 10px 20px -17px rgba(0,0,0,0.75)',
        paddingBottom: '20px' }}>

        <CardMedia>
        <img className={classes.image} src={props.image} alt={props.image} />
        <Fade in={checked} className={classes.grow}>
          <Paper>
            <Typography>
              {props.description}
            </Typography>
          </Paper>
        </Fade>
        </CardMedia>
        <CardContent>
        <div style={{ cursor: 'pointer' }} onClick={displayDetails}>
        <Typography style={{
            position: 'absolute',
            bottom: '0px',
            right: '0',
            left: '0',
            color: '#ffffff',
            background: '#404941b1',
            fontWeight: 'bold',
            padding: '16px',
          }} 
          variant='h6' component='h2' align='right'>
            {props.name}
          </Typography>
        <a
          className={classes.link}
          href={props.link}
          target='_blank'
          rel='noopener noreferrer'
        >
        <FormButton className={classes.button}> Buy for {props.price} </FormButton>
        </a>
        </div>
        </CardContent>
      </div>
  );
};

export default CardComp;
