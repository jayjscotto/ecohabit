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
		padding: '10px 70px',
	},
	rightpane: {
		color: '#5D675B',
		height: '285px',
		margin: '20px',
		textAlign: 'center',
		fontFamily: 'inherit',
		padding: '10px 70px',
	},
	header: {
		// padding: '5px',
		borderBottom: '0.5px solid #5D675B',
		marginBottom: '40px',
		letterSpacing: '-1px',
		fontSize: '32px',
		boxShadow: 'inset 0px -29px 25px -40px rgba(0,0,0,0.25)'
		// background: '#f7f3c2'

	}
}

class Daily extends Component {


	render() {
    	return (
        <Container style={{ marginTop: '6em' }}>
            <Grid container>
                <LeftPane style={style.leftpane} header={style.header}>
					<CheckIn></CheckIn>
				</LeftPane>
                <RightPane style={style.rightpane} header={style.header} />
            </Grid>
        </Container>
	)
	}
}

export default Daily;