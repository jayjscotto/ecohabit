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


export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
        
      <GreenRadio
    
        checked={selectedValue === 'A'}
        onChange={handleChange}
        value='A'
        name='radio-button-demo'
        inputProps={{ 'aria-label': 'A' }}
      />
      <GreenRadio

        checked={selectedValue === 'B'}
        onChange={handleChange}
        value='B'
        name='radio-button-demo'
        inputProps={{ 'aria-label': 'B' }}
      />
      <GreenRadio
   
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value='c'
        name='radio-button-demo'
        inputProps={{ 'aria-label': 'C' }}
      />
      <GreenRadio
    
        checked={selectedValue === 'D'}
        onChange={handleChange}
        value='D'
        name='radio-button-demo'
        inputProps={{ 'aria-label': 'D' }}
      />
    </div>
  );
}
