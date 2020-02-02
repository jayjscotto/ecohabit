import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import API from '../Utils/electric-api';

function DataDisplay(props) {

  return (
      props.results.map(res => {
        return (
          <div>
            <h1>{res.AddressInfo.Title}</h1>
            <p>{parseFloat(res.AddressInfo.Distance).toFixed(2)} miles away</p>
            <p>{res.AddressInfo.AddressLine1}</p>
            <p>{res.AddressInfo.Town}</p>
            <p>{res.AddressInfo.StateOrProvince}</p>
            <p>{res.AddressInfo.PostCode}</p>
            <p>{res.AddressInfo.ContactTelephone}</p>
            <p>{res.AddressInfo.AccessComments}</p>
          </div>
        )
      })
      <div>
      <h1>Title</h1>
      <p>Distance miles away</p>
      <p>AddressLine1</p>
      <p>Town</p>
      <p>StateOrProvince</p>
      <p>PostCode</p>
      <p>ContactTelephone</p>
      <p>AccessComments</p>
    </div>
  )

}

export default DataDisplay;