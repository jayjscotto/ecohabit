import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: '#5D675B',
    padding: '12px',
    color: '#ffffff',
    margin: '0 auto',
    position: 'fixed',
    bottom: '0',
    right: '0',
    left: '0'
  },
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
        inkBarStyle={{ background: '#ffffff' }}
        textColor="#ffffff"
        centered
      >
        <Tab label="Habits" />
        <Tab label="Education" />
        <Tab label="Do Better" />
      </Tabs>
    </Paper>
  );
}