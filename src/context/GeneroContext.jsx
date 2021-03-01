import React, { createContext, useState, useEffect } from "react";
import { GeneroService } from "./servicios/GeneroService";

export const GeneroContext = createContext();

const GeneroContextProvider = (props) => {
  //instanciamos un objeto para el consumo de los servicios
  const generoService = new GeneroService();

//useState maneja el estado de la lista de los libros
//la variable libros almacena el valor y setlibros lo modifica
  const [genero, setGenero] = useState([]);

  
  const [editarGenero, setEditarGenero] = useState(null);

  /*
	useEffects es el hook del ciclo de vida que se ejecutara 
	ante un cambio en la variable de estado q maneja.
	por esta razón estamos llamando dentro al método que lee 
	la lista de libros en bases de datos el estar 
	actualizando del lado del cliente ante cualquier cambio con 
	el setlibros y el valor que retorne el servidor finalmente 
	entre corchetes pasamos un arreglo con las variables involucradas*/
  useEffect(() => {
    generoService.listar().then((data) => setGenero(data));
  }, []);
  
  /*
	Funciones arrow para cada operación sobre los libros
  */
  
  // Codificamos la funcion para agregar un nuevo libro. Se conecta con  servicios(libroService) que  //a su vez se conecta con el servidor mediante la libreria axios y actualizamos el estado de la //lista con la respuesta del servidor
  const crearGenero = (libro) => {
    generoService
      .crear(genero)
      .then((data) => setGenero([...genero, data]));
  };

  // Eliminamos un libro pasando el parametro de id
  // y filtrando si encontro el libro a eliminar en el array.
  // Si el id coincide, se elimina el libro, sino se mantiene 
  // tal cual esta.
  const borrarGenero = (id) => {
    libroService
      .borrar(id)
      .then(() => setGenero(genero.filter((p) => p._id !== id)));
  };
  
  
// Creamos una función para encontrar un libro seleccionado 
// dentro de toda la lista. Además pondrá a dicho libro en 
// un estado de edición.
  const buscarGenero = (id) => {
    const genero = genero.find((p) => p._id === id);
    setEditarGenero(genero);
  };

  // Actualización del libro. Pasamos los nuevos datos del libro
  // mediante update y luego con map modificamos los datos
  const actualizarGenero = (genero) => {
    generoService
      .actualizar(genero)
      .then((data) =>
        setGenero(
          genero.map((p) => (p._id === genero._id ? data : genero))
        )
      );

    setEditarGenero(null);
  };

// Retornamos el contexto mediante su componente Provider
// para que los componentes que necesiten consumir estas variables de
// estado vean el contexto modificado.
// Los props son argumentos que se comparten ente componentes.
// Pasamos las funciones creadas mas la lista de libros.
  return (
    <GeneroContext.Provider
      value={{
        crearGenero,
        borrarGenero,
        buscarGenero,
        actualizarGenero,
        editarGenero,
        genero,
      }}
    >
      {props.children}
    </GeneroContext.Provider>
  );
};

export default GeneroContextProvider;
