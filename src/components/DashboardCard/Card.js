import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';






export default function OutlinedCard({type,count}) {


    const card = (
        <React.Fragment>
          <CardContent>
            <Typography variant="h6" sx={{ textAlign: 'left'}} component="div">
            {type}
            </Typography>
            <Typography variant="h2" sx={{ textAlign: 'center'}} component="div">
              {count}
            </Typography>
          </CardContent>
        </React.Fragment>
      );


  return (
    <Box sx={{ minWidth: 275, maxWidth:400 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}