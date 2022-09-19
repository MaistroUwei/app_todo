import React, { useState } from 'react'; 
import Tareaform from './Componentes/Tareaform';
import Tarea from './Componentes/Tarea';
import './App.css';

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  // Agregamos nueva taraea usanto el ... para copiar la lista anterior después del elemento nuevo
  const nuevaTarea = (tarea) => {
    setListaTareas([tarea, ...listaTareas])
  }

  // Para borrar tareas
  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id)
    setListaTareas(listaFiltrada);
  }

  /*Para actualizar tareas 
  Es necesario conocer qué tarea se edita (ID) 
  y el contenido de dicha tarea (tarea)*/

  const actualizarTarea = (id, tarea) => {
    const listaActualizada = listaTareas.map((e, index) => {
      if(index === id){
        e = tarea;
      }

      return e;
    })

    setListaTareas(listaActualizada)
  }
  return (
    <div className="App">
      <Tareaform 
      nuevaTarea={nuevaTarea}
      /> 

      <div className='lista'>
        {
          listaTareas.map((e, index) => <Tarea 
                                  tarea={e}
                                  borrar={borrar}
                                  id={index}
                                  editar={actualizarTarea}
                                  />
          )
        }
      </div>

    </div>
  );
}

export default App;
