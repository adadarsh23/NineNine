// import * as React from 'react';
import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{
      display: 'inline-block', mx: '2px', transform: 'scale(0.8)', minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      p: 2,
    }}
  >
    •
  </Box>


);

export default function BasicCard() {
  return (
    <Card sx={{
      minWidth: 275, boxShadow: 3,
      borderRadius: 2,
      p: 3,
      backgroundColor: '#ffffff',
    }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, textAlign: 'center', }}>
          Product
        </Typography>
        <Typography variant="h5" component="div"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 2,
          }}>
          Sales
        </Typography>
        <Typography sx={{
          color: 'text.secondary', mb: 1.5,
          textAlign: 'center',
        }}>Watches</Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.primary',
            textAlign: 'center',
          }}
        >
          Track the sales of premium watches and analyze trends to improve
          your strategy.
        </Typography>
      </CardContent>
    </Card>
  );
}