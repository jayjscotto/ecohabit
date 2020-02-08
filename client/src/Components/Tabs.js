import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Tabs, Paper }  from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: '#6d8468',
    padding: '12px',
 
    margin: '0 auto',
    position: 'fixed',
    bottom: '0',
    right: '0',
    left: '0'
  },
  button: {
   color: '#ffffff',
  }
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        centered
      >
        <Button href='https://github.com/jayjscotto/ecohabit'>
            EcoHabit on GitHub!
        </Button>
      </Tabs>
    </Paper>
  );
}