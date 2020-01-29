import React from 'react';
import { Container, Grid } from '@material-ui/core';
import LeftPane from '../Components/LeftPane';
import RightPane from '../Components/RightPane';

const style = {
	pane: {
		height: '500px',
		margin: '20px',
		textAlign: 'center',
		fontFamily: 'inherit',
		padding: '40px',
		color: 'FBFEF9',
		marginTop: '4em',
		// marginBottom: '4em'
	}
}

function Daily(props) {
    return (
        <Container>
            <Grid container>
                <LeftPane style={style.pane} />
                <RightPane style={style.pane} />
            </Grid>
        </Container>
    )
}

export default Daily;