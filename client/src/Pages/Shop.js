import React, {useEffect, useState} from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import products from '../Utils/products.json';
import Grow from '@material-ui/core/Grow';
import CardComponent from '../Components/cardComponent';

const styles = {
  root: {
    margin: '0em auto 3em auto',
    padding: '20px 20px',
    color: 'white',
    borderBottom: '5px solid white'
  },
  header: {
    marginBottom: '0.5em',
    color: 'white',
  },
  card: {
    margin: '1em',
    padding: '20px'
  }
};

const ShopContainer = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(prev => !prev)
  }, []);

  return (
    <Grow in={checked} unmountOnExit>
    <Container>
      <Grid container>
        <Grid item>
          <div style={styles.root}>
            <Box style={{ margin: '3em' }}>
              <Typography variant='h3' style={styles.header}>
                Habit-dashery
              </Typography>
              <Typography variant='body1'>
                One of the biggest challenges to creating eco-friendly daily
                habits is finding the items to help you do so! Items below are
                either completely reusable or completely compostable to ensure
                they are helping you on your quest for the best EcoHabits.
              </Typography>
            </Box>
          </div>
        </Grid>
        <Grid container spacing={7}>
          {products.products.map((product, index) => {
            return (
              <Grid item lg={4}>
                <CardComponent
                  key={index}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  link={product.link}
                  description={product.productsDescription}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
    </Grow>
  );
};

export default ShopContainer;
