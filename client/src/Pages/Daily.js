import React, {useEffect} from 'react';
import { Container, Grid } from '@material-ui/core';
import LeftPane from '../Components/LeftPane';
import RightPane from '../Components/RightPane';
import CheckIn from '../Components/CheckIn';
import Grow from '@material-ui/core/Grow';

const style = {
	leftpane: {
		color: '#5D675B',
		height: '644px',
		margin: '10px',
		textAlign: 'left',
		fontFamily: 'inherit',
		padding: '5px 20px 20px 20px',
		background: 'f1f1f1',
		overflow: 'auto',
	},
	rightpane: {
		color: '#5D675B',
		height: '295px',
		margin: '10px 30px 30px 30px',
		textAlign: 'left',
		fontFamily: 'inherit',
		padding: '5px 20px 20px 20px',
	},
	header: {
		textTransform: 'uppercase',
		borderBottom: '0.5px solid #5D675B',
		margin: '10px',
		fontSize: '28px',
		boxShadow: 'inset 0px -29px 25px -40px rgba(0,0,0,0.25)',
		padding: '10px'
	}
};


const Daily = props => {
	const [checked, setChecked] = React.useState(false);
	
	useEffect(() => {
		setChecked(prev => !prev)
	}, [])

  return (
		<Grow in={checked} unmountOnExit>
    <Container style={{ marginTop: '2em' }}>
      <Grid container>
        <Grid item md={5} sm={12} xs={12}>
          <LeftPane style={style.leftpane} header={style.header}>
            <CheckIn />
          </LeftPane>
        </Grid>
        <Grid item md={7} sm={12} xs={12}>
          <RightPane style={style.rightpane} header={style.header} />
        </Grid>
      </Grid>
    </Container>
		</Grow>
  );
};

export default Daily;
