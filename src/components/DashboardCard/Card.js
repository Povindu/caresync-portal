import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function OutlinedCard({ type, count, imgSrc }) {
  const card = (
    <React.Fragment>
      <CardContent>
        {imgSrc && (
          <img
            src={imgSrc}
            alt="image"
            width="100"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "30%",
            }}
          />
        )}
        <Typography
          variant="h6"
          sx={{ textAlign: "center", marginTop: "10px" }}
          component="div"
        >
          {type} {count}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275, maxWidth: 400 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
