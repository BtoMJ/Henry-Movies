import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { removeMovieFavorite, getMovieDetail } from '../../actions';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul className="ListFavorite">
          {
            (this.props.moviesFavourites.map((movie)=>(

              <li key={movie.id} className="ListFavoriteItem">
                <div className="Titulo">
                  <NavLink className="TituloLink" to={`/movie/${movie.id}`} title="da click para ver los detalles">{movie.title}</NavLink>
                </div>
                <div className="PeliImagen"><img className="PosterFav"  src={movie.img} alt={movie.title} /></div>
                <div className="Botones">
                  <button className="FavBtn" onClick={() =>this.props.removeMovieFavorite(movie.id)}>Eliminar</button>
                  {/* <button className="FavBtn" onClick={() => this.props.getMovieDetail(movie.id)}>Detalles</button> */}
                </div>
              </li>
            )))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesFavourites: state.moviesFavourites
  };
}

export default connect(mapStateToProps, {removeMovieFavorite, getMovieDetail})(ConnectedList);

