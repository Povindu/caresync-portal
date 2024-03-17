import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';





export default function OutlinedCard({type}) {

    const card = (
        <React.Fragment>
          <CardContent>
            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography> */}
            <Typography variant="h4" sx={{ textAlign: 'center'}} component="div">
            {type}
            </Typography>
            <Typography variant="h2" sx={{ textAlign: 'center'}} component="div">
              115 
            </Typography>
      
            {/* <Typography variant="body2">
      
            </Typography> */}
          </CardContent>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </React.Fragment>
      );


  return (
    <Box sx={{ minWidth: 275, maxWidth:400 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}