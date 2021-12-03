import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions";
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div className="Buscador">
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input className="txtMovie" type="text" id="title" autoComplete="off" value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button className="BtnGetMovie" type="submit" onClick={() =>this.props.getMovies(title)}>BUSCAR</button>
        </form>
        <ul className="movieList">
          {
            this.props.movies && this.props.movies.map((movie) =>(
              <li key={movie.imdbID}>
                <div className="ImagenPeli"><img className="Poster" src={movie.Poster} alt={movie.Title}></img></div>
                <div className="Peli"><NavLink className="Link" to={`/movie/${movie.imdbID}`}>{movie.Title}</NavLink></div>
                <div className="Btn"><button className="Fav" onClick={() =>this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID, img: movie.Poster})}>FAV</button></div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

export default connect(mapStateToProps, { getMovies, addMovieFavorite })(Buscador);
