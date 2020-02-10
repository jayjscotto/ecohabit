import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Radio, FormControlLabel, FormLabel, RadioGroup, Grid, Box } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: '10px'
	},
	question: {
		lineHeight: '1.5em',
		margin: '12px 20px',
		fontSize: '14x',
		fontWeight: 'bold'
	},
	answers: {
		// margin: '0px 20px'
	}
});

export default function RadioButtons(props) {
	const [ selectedValue, setSelectedValue ] = useState();

	const classes = useStyles();

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	useEffect(
		() => {
			props.updateAnswers(selectedValue);
		},
		// eslint-disable-next-line
		[ selectedValue ]
	);

	return (
		<div>
			<Grid container className={classes.root}>
				<Grid item lg={6} md={12}>
					<FormLabel className={classes.question} component="legend">
						{props.question}
					</FormLabel>
				</Grid>
				<Grid item lg={6} md={12}>
					<Box className={classes.answers}>
						<RadioGroup
							aria-label="position"
							name="position"
							value={props.index}
							onChange={handleChange}
							row
							className={classes.root}
						>
							<FormControlLabel
								value="Yes"
								style={{ display: 'inline' }}
								control={
									<Radio
										value={1}
										checked={selectedValue === '1'}
										color="success"
										index={props.index}
									/>
								}
								label="Yes"
								labelPlacement="top"
							/>
							<FormControlLabel
								value="No"
								style={{ display: 'inline' }}
								control={
									<Radio
										value={0}
										checked={selectedValue === '0'}
										color="success"
										index={props.index}
									/>
								}
								label="No"
								labelPlacement="top"
							/>
						</RadioGroup>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
}
