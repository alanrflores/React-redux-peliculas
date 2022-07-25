import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions/index'
import  './moviedetail.css'

// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.
// TIP: Aqui seria un buen momento para utilizar el hook useSelector.

const MovieDetail = (props) => {
//console.log(props)
const {match: {params: {id}}} = props;
const dispatch = useDispatch();

const store = useSelector((state)=> state.movieDetail)

React.useEffect(()=> {
 dispatch(actions.getMovieDetail(id))
},[]);
// console.log(store && store.name)
  return (
    <>
      
       
         {
           store && (

           <div className="divDetail"> 
            
           <div className="divDes"> 
            <h2>{store.name}</h2>
            <h2>{store.director}</h2>
            <p>{store.description}</p>
            <p>{store.releaseYear}</p>
           
            </div>  
            <img src={store.image} />
           </div>
            

           )
         }
      
      
  </>
  );
};

export default MovieDetail;
