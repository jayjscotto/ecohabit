import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Slide,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// transition for help modal
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function HelpModal(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  // expansion open and closing
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleClose}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle id='alert-dialog-slide-title'>
        {'EcoHabit: How Does It Work?'}
      </DialogTitle>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography className={classes.heading}>General Info</Typography>
          <Typography className={classes.secondaryHeading}>
            About EcoHabit
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            EcoHabit was created to inform and educate our users on building
            environmentally friendly habits. Adjusting daily habits such as using a refillable waterbottle, remembering to bring reusable grocery bags and carpooling to work, can add up to create a positive effect on the environment 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'
        >
          <Typography className={classes.heading}>Daily Tests</Typography>
          <Typography className={classes.secondaryHeading}>
            How do they work?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Simply sign in each day, and fill out the 'Check In' to be evaluated
            on a 1 - 5 scale. Check back in at the end of every week to reflect
            on the past week's results and see yourself building habits in real
            time!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3bh-content'
          id='panel3bh-header'
        >
          <Typography className={classes.heading}>Utilities</Typography>
          <Typography className={classes.secondaryHeading}>
            EcoHabit Utilities for an easier, eco-friendly life
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            EcoHabit offers utilities such as a electric car charging station
            locator, and (coming soon) informational recycling utilities.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel4bh-content'
          id='panel4bh-header'
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            This project and it's creators assure that data is kept secure and
            will not be sold or processed in any way other than the utilization
            of the Utilities inside of this application.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <DialogActions>
        <Button onClick={props.close} color='inherit'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
