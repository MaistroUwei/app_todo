import React, { useState } from 'react'
import '../App.css';

const Tareaform = (props) => {
    const [inputText, setInputText] = useState("");
    //Para que no te deje añadir nada si no hay nada escrito
    const [validacion, setValidacion] = useState(true);

    const manejarForm = (event) => {
        setInputText(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        //Verificamos si el input text está vacío
        if(inputText.trim() !== ""){
            props.nuevaTarea(inputText);
            setInputText("");
            setValidacion(true);
        } else {
            setValidacion(false);
        }
    }

  return (
    <div>
        <form className='form' onSubmit={submit}>
            <span>Agreagar tarea</span>
            <input value={inputText} onChange={manejarForm}/>
            <button>Agregar</button>
        </form>
        { //Si setValidación es false no te deja agregar nada
            !validacion &&
            <div className='validacion'>No puede agregar una tarea en blanco</div>
        }
    </div>
  )
}

export default Tareaform;