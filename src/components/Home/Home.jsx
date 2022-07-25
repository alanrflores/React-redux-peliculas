import "./home.css";

import React, { Component } from "react";

import { connect } from "react-redux";
import { getAllMovies } from "../../redux/actions";
// Importar las actions como Object Modules, sino los test no funcionarán!
import MovieCard from '../MovieCard/MovieCard'

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount() {
    this.props.getAllMovies()
  }
  render() {
    return (
      <div className="home">
        <div className="divTitle">
        <h1 className="title">Henry Movies</h1>
        </div>
        <div className="divBanner">
        <img />
        </div>
        <hr/>
        <section className="section">
        <div className="divSection">
        <h3>Movies</h3> 
        <h4>Checkpoint M2</h4>
        </div>
        </section>
        <section className="sectionCard">
          {
          this.props.movies ? this.props.movies.map( movie => (
             <MovieCard 
             key={movie.id}
             id={movie.id}
             name={movie.name}
             director={movie.director}
             releaseYear={movie.releaseYear}
             image={movie.image} 
             />
         )) : " "
         } 
         </section>
      </div>
    );
  }
}

export const mapStateToProps = (state)=> {
  return{
    
    movies:  state.movies,
  }
}

export const mapDispatchToProps = {getAllMovies}



export default connect(mapStateToProps, {getAllMovies})(Home);
