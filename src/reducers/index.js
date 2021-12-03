import { GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE, CLEAR_MOVIES_DETAIL } from '../actions/index.js';

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

function rootReducer(state= initialState, {type, payload}) {    
    switch (type) {

        case GET_MOVIES:
            return{
                ...state,
                moviesLoaded: payload.Search
            }

        case GET_MOVIE_DETAIL:
            return{
                ...state,
                movieDetail: payload
            }

        case ADD_MOVIE_FAVORITE:{
            if(state.moviesFavourites){
                if(state.moviesFavourites.find(movie => movie.id === payload.id))
                    return state
                else return {...state, moviesFavourites: [...state.moviesFavourites, payload]}
            } else {
                 return{
                    ...state,
                    moviesFavourites: [payload]
                }
            }
        }

        case REMOVE_MOVIE_FAVORITE:{
            if(state.moviesFavourites){
                return {...state, moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== payload)}
            } else {
                return state
            }
        }

        case CLEAR_MOVIES_DETAIL:{
            if(state.moviesFavourites){
                return {...state, moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== payload)}
            } else {
                return state
            }
        }

        default:
            return state
            
    }
};

export default rootReducer;