import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600]
    },
    margin: '0 2em',
  },

  checked: {},

})(props => <Radio color='default' {...props} />);


export default function RadioButtons(props) {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>

      {props.answerOne}  
      <GreenRadio
        checked={selectedValue === 'Yes'}
        onChange={handleChange}
        value='Yes'
        name='radio-button-demo'
        inputProps={{ 'aria-label': 'Yes' }}
      />
       {props.answerTwo }  
      <GreenRadio
        checked={selectedValue === 'No'}
        onChange={handleChange}
        value='No'
        name='radio-button-demo'
        inputProps={{ 'aria-label': 'No' }}
      />
    </div>
  );
}
