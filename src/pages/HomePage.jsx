import React from "react";
import { Container, Typography } from "@mui/material";
import CardGrid from "../components/CardGrid";

export default function HomePage() {
  return (
    <Container sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Home Page
      </Typography>
      <Typography variant="body1">
        This is the home page of the website. You can navigate to other sections
        using the menu.
      </Typography>
      <CardGrid></CardGrid>
    </Container>
  );
}
