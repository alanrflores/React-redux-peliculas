import React from "react";
import { useDispatch } from "react-redux";
import * as actions from '../../redux/actions/index'
import './createmovie.css'

// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.
const initialState = {
  name: '',
  releaseYear: 0,
  description: '',
  director: '',
   }
const CreateMovie = () => {
   const [value, setValue] = React.useState(initialState);
   let dispatch = useDispatch()
   
   const handleSubmit= (e)=> {
    e.preventDefault()
    dispatch(actions.createMovie(value))
   }
  
   const handleChange = (e)=> {
     setValue({
       ...value,
       [e.target.name] : e.target.value,
     })
   }

  return (
    <>
    <div className="container">
    <h2 className="titulo1">Aqui podes crear tu propia pelicula</h2>
     <div className="divFormulario">
      <form className="formulario" onSubmit={handleSubmit}>
        <label>Name: </label>
        <input 
         type='text' 
         name='name'
         value={value.name}
         onChange={handleChange}
         className='inputName'
         />
        <label>ReleaseYear: </label>
        <input 
        type='number' 
        name='releaseYear'
        value={value.releaseYear}
        onChange={handleChange}
        className='inputReleaseYear'
        />
        <label>Description: </label>
        <textarea 
         name='description'
         value={value.description}
         onChange={handleChange}
         className='inputDescription'
         
         />
        <label>Director: </label>
        <input 
        type='text' 
        name='director' 
        value={value.director}
        onChange={handleChange}
        className='inputDirector'
        />
        <button
        type='submit' className="button">
          
          Create Movie
        </button>
      </form>
      </div>
      </div>
    </>
  );
};

export default CreateMovie;
