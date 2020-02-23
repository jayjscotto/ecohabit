import React, {useState, Fragment} from 'react';
import Slide from '@material-ui/core/Slide';
import { FormButton } from './FormElements';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Paper,
  BottomNavigation,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
  grow: {
    background: '#f1f1f1f4',
    textAlign: 'center',
    fontFamily: 'Nanum Gothic, sans-serif',
    height: '100%',
    // width: '100%',
    zIndex: '1',
    padding: '20px'
  },
  card: {
    width: '300px',
    minHeight: '500px',
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
    console.log('clicked');
    console.log(props);
    setChecked(prev => !prev)
  }

  return (
    // <Card justify='center' elevation={15} className={classes.card}>
      <div style={{ 
        borderRadius: '5px',
        background: '#ffffff', 
        textAlign: 'center', 
        position: 'relative',
        boxShadow: '10px 10px 20px -17px rgba(0,0,0,0.75)',
        paddingBottom: '20px' }}>
        {/* <Slide direction="up" in={checked} className={classes.grow}>
          <Paper>
            <Typography>
              {props.description}
            </Typography>
          </Paper>
        </Slide> */}
        <img className={classes.image} src={props.image} alt={props.image} />
        <div style={{ cursor: 'pointer' }} onClick={displayDetails}>
        <Typography style={{
            position: 'absolute',
            // top: '20px',
            bottom: '0px',
            right: '0',
            left: '0',
            color: '#ffffff',
            background: '#404941b1',
            height: 'auto',
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
        
      </div>
    // </Card>
  );
};

export default CardComp;
