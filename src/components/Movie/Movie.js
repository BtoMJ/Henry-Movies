import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import { IoIosCalendar, IoIosClock, IoIosTrophy, IoMdCash, IoMdArrowRoundBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount(){
        this.props.getMovieDetail(this.props.id)
    }
    render() {
        return (
            <div className="movie-detail">
                <div className="Letrero"><h2>Detalle de la pelicula </h2></div>
                <div className="container">
                    <div className="PosterDetail">
                        <div><img src={this.props.movieDetail.Poster} alt={this.props.Title}/></div>
                    </div>
                    <div className="Info">
                        <div className="Nombre">{this.props.movieDetail.Title}</div>
                        <div className="Icono"><IoIosCalendar/></div>
                        <div className="Released">{this.props.movieDetail.Released}</div>
                        <div className="Icono"><IoIosClock/></div>
                        <div className="Runtime">{this.props.movieDetail.Runtime}</div>
                        <div className="Rated">{this.props.movieDetail.Rated}</div>
                        <div className="Genre">{this.props.movieDetail.Genre}</div>
                        <div className="Letrero2">Sinopsis</div>
                        <div className="Plot">{this.props.movieDetail.Plot}</div>
                        <div className="Letrero2">Créditos y reparto</div>
                        <div className="Actores">Actores: {this.props.movieDetail.Actors}</div>
                        <div className="Director">Director: {this.props.movieDetail.Director}</div>
                        <div className="Productora">Productora: {this.props.movieDetail.Production}</div>
                        <div className="Escritor">Escritor: {this.props.movieDetail.Writer}</div><br></br>
                        <div className="Icono"><IoIosTrophy/></div>
                        <div className="Premio">{this.props.movieDetail.Awards}</div><br></br>
                        <div className="Icono"><IoMdCash/></div>
                        <div className="Dinero">{this.props.movieDetail.BoxOffice}</div>
                    </div>
                    <div className="Regresar">
                        
                        <NavLink className="LinkRegresar" to="/favs"><IoMdArrowRoundBack style={{position: 'relative', top: 4}}/>regresar</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      movieDetail: state.movieDetail,
    };
  }

export default connect(mapStateToProps, {getMovieDetail})(Movie);
