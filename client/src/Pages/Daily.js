import React from 'react';
import { Container, Grid } from '@material-ui/core';
import LeftPane from '../Components/LeftPane';
import RightPane from '../Components/RightPane';

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

function Daily(props) {
    return (
        <Container style={{ marginTop: '6em' }}>
            <Grid container>
                <LeftPane style={style.leftpane} />
                <RightPane style={style.rightpane} />
            </Grid>
        </Container>
    )
}

export default Daily;