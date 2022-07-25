// Importa las action types acá

import { CREATE_MOVIE, DELETE_MOVIE, GET_ALL_MOVIES, GET_MOVIE_DETAILS, SEND_EMAIL } from "../actions";


const initialState = {
  movies: [],
  movieDetail: {},
  email: {},
};

const rootReducer = (state = initialState, action) => {
  if(action.type === GET_ALL_MOVIES ){
    // Acá va tu código:
    return {
       ...state,
       movies: action.payload
    }}
  if(action.type === GET_MOVIE_DETAILS){
      // Acá va tu código:
      return {
         ...state,
         movieDetail: action.payload,
      }}
  if(action.type === CREATE_MOVIE){
    return{
      ...state,
      movies: [...state.movies, action.payload]
    }
  }
  if(action.type === DELETE_MOVIE){
        // Acá va tu código:
        return {
           ...state,
           movies: state.movies.filter((movie)=> movie.id !== action.payload)
        }}   
      
  if(action.type === SEND_EMAIL){
        // Acá va tu código:
        return {
           ...state,
           email: action.payload,
        }}
      
        return state;
};

export default rootReducer;
