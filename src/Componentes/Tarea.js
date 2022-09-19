import React, { useState } from "react";
import '../App.css';

const Tarea = (props) => {
    const [modoEdit, setModoEdit] = useState(false);
    const [editText, setEditText] = useState("");

    const editar = () => {
        setModoEdit(true);
    }
    
    const manejarEdit = (event) => {
        setEditText(event.target.value);
    }

    const submitEdit = (event) => {
        event.preventDefault();
        props.editar(props.id, editText);
        setEditText("");
        setModoEdit(false);
    }
  
    const borrarTarea = () => {
        props.borrar(props.id);
    }
    
    return (
        <div>
            {
                !modoEdit ?
                <div className="tarea">
                    <span>{props.tarea}</span>
                    <span onClick={editar}>Editar tarea</span>
                    <span onClick={borrarTarea}>Borrar tarea</span>
                </div>
                :
                <form className="formEdit" onSubmit={submitEdit}>
                    <input value={editText} onChange={manejarEdit}/> <button>Guardar</button>
                </form>
            }
        </div>
    )
}

export default Tarea;