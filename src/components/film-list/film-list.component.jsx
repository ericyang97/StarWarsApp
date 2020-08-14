import React from "react";
import { Grid } from "@material-ui/core";
import FilmCard from "../film-card/film-card.component";

export default function FilmList(props) {
  return (
    <Grid container spacing={2}>
      {props.films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </Grid>
  );
}
