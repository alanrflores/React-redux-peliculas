import "./movieCard.css";

import React from "react";
import * as actions from '../../redux/actions/index'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.

const MovieCard = (props) => {
let dispatch = useDispatch()
const {id} = props;

const handleRemove = ()=> {
 dispatch(actions.deleteMovie(id))
}

  return (
    <div className="card">
      <div className="divButton">
        <button className='btn' onClick={handleRemove}>x</button>
        </div>
        <div className="divTitle">
       <Link to={`/movie/${props.id}`}>
        <h3 className="name">{props.name}</h3>
       </Link>
       </div>
       <img src={props.image} alt={props.name}/>
       <div className="divDescription">
       <p>ReleaseYear: {props.releaseYear}</p>
       <p>Director: {props.director}</p>
       </div>
    </div>
  );
};

export default MovieCard;
