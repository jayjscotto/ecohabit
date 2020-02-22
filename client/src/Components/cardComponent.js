import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CardComp = (props) => {};

return (
	<Card justify="center" style={{ maxWidth: '300', color: 'rgb(93, 103, 91)' }}>
		<CardActionArea>
			<div style={{ textAlign: 'center' }}>
				<img
					src={'image link will go here '}
					alt="something here"
					width="150"
					style={{ padding: '20px 20px 0px 20px' }}
				/>
			</div>
			<CardContent>
				<Typography gutterBottom variant="h3" component="h2" style={{ textAlign: 'center' }}>
					{/* Product Name  */}
				</Typography>
				<Typography gutterBottom component="p" style={{ textAlign: 'center' }}>
					{/* Product Description */}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="button" style={{ textAlign: 'center' }}>
					{/*Link to Product here (shopping cart icon in a button)  */}
				</Typography>
			</CardContent>
		</CardActionArea>
	</Card>
);

export default CardComp;
