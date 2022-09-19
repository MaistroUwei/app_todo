import React, { useEffect, useState } from 'react'; 
import Tareaform from './Componentes/Tareaform';
import Tarea from './Componentes/Tarea';
import './App.css';

const tareasDefault=[
  "Tarea 1",
  "Tarea 2",
  "Tarea 3",
  "Tarea 4"
]

function App() {
  const [listaTareas, setListaTareas] = useState(tareasDefault);
  const [buscaValor, setBuscaValor] = useState("");

  let tareasBuscadas = [];

  if (buscaValor.length<1){
    tareasBuscadas = listaTareas;
  } else {
    tareasBuscadas = listaTareas.filter(x => {
      const busqueda = x.toLowerCase();
      const busquedax = buscaValor.toLowerCase();
      return busqueda.includes(busquedax);
    })
  }

  const cambioValor = (event) => {
    setBuscaValor(event.target.value);
  };

  
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
      <input value = {buscaValor} onChange={cambioValor}
      
      //onChange={filtrandoTexto}
      placeholder='Buscar'
      ></input>
      <Tareaform 
      nuevaTarea={nuevaTarea}
      /> 

      <div className='lista'>
        {
          tareasBuscadas.map((e, index) => <Tarea 
                                  tarea={e}
                                  borrar={borrar}
                                  id={index}
                                  key={index}
                                  editar={actualizarTarea}
                                  />
          )
        }
      </div>

    </div>
  );
}

export default App;
