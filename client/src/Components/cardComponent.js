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
    width: '350px',
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
  const classes = useStyles();

  return (
    // <Card justify='center' elevation={15} className={classes.card}>
      <div style={{ 
        borderRadius: '5px',
        background: '#ffffff', 
        textAlign: 'center', 
        position: 'relative',
        boxShadow: '10px 10px 20px -17px rgba(0,0,0,0.75)',
        paddingBottom: '20px' }}>
        <img className={classes.image} src={props.image} alt={props.image} />
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
            padding: '20px',
          }} variant='h6' component='h2' align='right'>
            {props.name}
            <span className={classes.action}>Click for description</span>
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
    //   <CardContent>
    //     <Typography gutterBottom variant='h6' component='h2' align='center'>
    //       {props.name}
    //     </Typography>
    //     <Typography gutterBottom component='p' align='center'>
    //       {props.price}
    //     </Typography>
    //   </CardContent>
    //   <CardActionArea className={classes.action}>
        
    //   </CardActionArea>
    // </Card>
  );
};

export default CardComp;
