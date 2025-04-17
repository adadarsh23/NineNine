
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          p: 1,
        }}
      >
        {/* Card 1 */}
        <Card
          sx={{
            minWidth: 275,
            maxWidth: 345,
            boxShadow: 3,
            borderRadius: 2,
            p: 1,
            backgroundColor: '#f9fafb',
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: 'text.secondary', fontSize: 14 }}
            >
              Product
            </Typography>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              Sales
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              Watches
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary' }}>
              Track the sales of premium watches and analyze trends to improve
              your strategy.
            </Typography>
          </CardContent>
          <CardActions>
          <Button variant="contained" href="#contained-buttons">
              Learn more
            </Button>
          </CardActions>
        </Card>

        {/* Card 2 */}
        <Card
          sx={{
            minWidth: 275,
            maxWidth: 345,
            boxShadow: 3,
            borderRadius: 2,
            p: 1,
            backgroundColor: '#f9fafb',
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: 'text.secondary', fontSize: 14 }}
            >
              Revenue
            </Typography>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              Growth
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              Electronics
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary' }}>
              Monitor revenue growth in the electronics category and identify key
              opportunities.
            </Typography>
          </CardContent>
          <CardActions>
          <Button variant="contained" href="#contained-buttons">
              Learn more
            </Button>
          </CardActions>
        </Card>

        {/* Card 3 */}
        <Card
          sx={{
            minWidth: 275,
            maxWidth: 345,
            boxShadow: 3,
            borderRadius: 2,
            p: 1,
            backgroundColor: '#f9fafb',
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: 'text.secondary', fontSize: 14 }}
            >
              Customers
            </Typography>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              Engagement
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              Apparel
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary' }}>
              Understand customer behavior in the apparel category and improve
              engagement.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" href="#contained-buttons">
              Learn more
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}