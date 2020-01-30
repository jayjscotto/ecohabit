import React, { Component }from 'react';
import { Container, Grid } from '@material-ui/core';
import LeftPane from '../Components/LeftPane';
import RightPane from '../Components/RightPane';
import CheckIn from '../Components/CheckIn';
import axios from 'axios';

const style = {
	leftpane: {
		color: '#5D675B',
		height: '650px',
		margin: '20px',
		textAlign: 'center',
		fontFamily: 'inherit',
		padding: '20px',
	},
	rightpane: {
		color: '#5D675B',
		height: '285px',
		margin: '20px',
		textAlign: 'center',
		fontFamily: 'inherit',
		padding: '20px',
	}
}

class Daily extends Component {


	render() {
    	return (
        <Container style={{ marginTop: '6em' }}>
            <Grid container>
                <LeftPane style={style.leftpane}>
					<CheckIn firstAnswer={'Yes'} secondAnswer={'No'}></CheckIn>
				</LeftPane>
                <RightPane style={style.rightpane} />
            </Grid>
        </Container>
	)
	}
}

export default Daily;