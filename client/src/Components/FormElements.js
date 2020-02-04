import React from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@material-ui/core';

let style = {
    box: {
      margin: '0 auto'
    },
    input: {
      display: 'block',
      margin: '2em auto',
    },
    action: {
      color: '#5D675B'
    },
    button: {
      background: '#5D675B',
      color: '#f7f3c2',
      margin: '20px auto',
      display: 'block'
    }
}

function FormAction(props) {
    return (
        <Typography style={style.action} variant="h5">{props.children}</Typography>
    )
}

function FormInput(props) {
    return (
        <TextField style={style.input} variant="outlined" {...props} />
    )
}

function FormButton(props) {
    return (
        <Button style={style.button} variant="contained" {...props}>{props.children}</Button>
    )
}

function FormCard(props) {
    return (
        <Card style={style.box} className="container">{props.children}</Card>
    )
}

function FormCardContent(props) {
    return (
        <CardContent>{props.children}</CardContent>
    )
}

export { FormAction, FormInput, FormButton, FormCard, FormCardContent };