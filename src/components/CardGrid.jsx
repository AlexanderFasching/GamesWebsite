import React from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import GameCard from "./GameCard";
import image1 from "../assets/Placeholder_view_vector.svg.png";

// Sample card data
const cards = [
  {
    id: 1,
    title: "Game 1",
    description: "This is the first card",
    image: image1,
  },
  {
    id: 2,
    title: "Game 2",
    description: "This is the second card",
    image: image1,
  },
  {
    id: 3,
    title: "Game 3",
    description: "This is the third card",
    image: image1,
  },
  {
    id: 4,
    title: "Game 4",
    description: "This is the third card",
    image: image1,
  },
  {
    id: 5,
    title: "Game 5",
    description: "This is the third card",
    image: image1,
  },
  {
    id: 6,
    title: "Game 6",
    description: "This is the third card",
    image: image1,
  },
  {
    id: 7,
    title: "Game 7",
    description: "This is the third card",
    image: image1,
  },
  {
    id: 8,
    title: "Game 8",
    description: "This is the third card",
    image: image1,
  },
  {
    id: 9,
    title: "Game 9",
    description: "This is the third card",
    image: image1,
  },
];

export default function CardGrid() {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {cards.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <GameCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
