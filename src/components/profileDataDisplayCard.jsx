import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275, bgcolor:'#f4f5f8',width:"fit-content",ml:"auto",mr:"auto",mt:3}}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{mb:2}}>
         {props.heading}
        </Typography>
        <Typography variant="h3">
         {props.value}
        </Typography>
      </CardContent>
     { props.link &&<CardActions>
        <Button size="small" component={Link} to={props.link}>View</Button>
      </CardActions>}
    </Card>
  );
}