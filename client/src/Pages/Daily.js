import React, { Component, useState, useEffect, useMemo } from 'react';
import { Container, Grid } from '@material-ui/core';
import LeftPane from '../Components/LeftPane';
import RightPane from '../Components/RightPane';
import CheckIn from '../Components/CheckIn';
import API from '../Utils/clientauth';
import CheckinContextProvider from '../Components/CheckinContext';

const style = {
  leftpane: {
    color: '#5D675B',
    height: '644px',
    margin: '10px',
    textAlign: 'left',
    fontFamily: 'inherit',
    padding: '5px 20px 20px 20px',
    backgroundImage: 'linear-gradient(30deg, #fff2ed, #fffde9)',
    overflow: 'auto'
  },
  rightpane: {
    color: '#5D675B',
    height: '300px',
    margin: '10px',
    textAlign: 'left',
    fontFamily: 'inherit',
    padding: '5px 20px 20px 20px',
    backgroundImage: 'linear-gradient(30deg, #fff2ed, #fffde9)'
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
  return (
    <Container style={{ marginTop: '2em' }}>
      <Grid container>
          <LeftPane style={style.leftpane} header={style.header}>
            <CheckIn />
          </LeftPane>
          <RightPane style={style.rightpane} header={style.header} />
      </Grid>
    </Container>
  );
};

export default Daily;
