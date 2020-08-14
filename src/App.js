import React, { Component } from "react";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import FilmList from "./components/film-list/film-list.component.jsx";
import { CssBaseline } from "@material-ui/core";

const font = "'Bungee', cursive";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    fontSize: 35,
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    const URL = "https://swapi.dev/api/films/";
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        const films = json.results.map((film) => {
          return {
            title: film.title,
            date: film.release_date,
            director: film.director,
            producer: film.producer,
            species: film.species,
            starships: film.starships,
            vehicles: film.vehicles,
            planets: film.planets,
            characters: film.characters,
            description: film.opening_crawl,
            id: film.episode_id,
          };
        });
        // console.log(films);
        this.setState({ films: films });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <h1 style={{ textAlign: "center" }}>Star Wars</h1>
        </ThemeProvider>
        <FilmList films={this.state.films} />
      </div>
    );
  }
}

export default App;
