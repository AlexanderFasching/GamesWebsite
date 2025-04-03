import React from "react";
import { Container, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Container sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        About Page
      </Typography>
      <Typography variant="body1">About Page</Typography>
    </Container>
  );
}
