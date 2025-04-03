import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function GameCard({ title, description, image }) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
