import React, { useState } from "react";

const Datos =()=>{
    //Estas son las variables en las que se va a guardar los datos que ingresemos:
    const [filtro,setFiltro] = useState("")

    
    //Aquí creamos la lista de los usuarios que vamos a mostrar en la tabla:
    const usuarios =[
        {
            id : 1,
            nombre : "Marta Basquez",
            descripcion : "Mi nombre es Marta"
        },
        {
            id : 2,
            nombre : "Cristopher Guengue",
            descripcion : "Mi nombre es Cristopher"
        },
        {
            id : 3,
            nombre : "Ruben Alvarez",
            descripcion : "Mi nombre es Ruben"
        },
        {
            id : 4,
            nombre : "Mauricio Fernandez",
            descripcion : "Mi nombre es Mauricio"
        },
        {
            id : 5,
            nombre : "Alex Jimenez",
            descripcion : "Mi nombre es Alex"
        }

    ];


    //Aquí creamos la funcion filtar y le decimos que pase todo a minuscula para poder hacer la comparacion con los datos de la tabla.
    const filtrar = usuarios.filter((usuario) =>
    usuario.nombre.toLowerCase().includes(filtro.toLowerCase())
    );   
 
    return(
        <div>

            {/* Aquí creamos un input para poder utilizar el filtro */}
           <div className="input-group input-group-sm mb-3">
                <input value ={filtro} onChange={(event)=> setFiltro(event.target.value)} ></input>
            </div>
            <div>
                <table> 
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                    </tr>
                    {/* Aquí cambiamos de usuarios a filtrar para que lo que ingresemos en el buscador modifique lo que vemos en la tabla */}
                        {filtrar.map((usuario)=>(
                        <tr key ={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.descripcion}</td>
                        </tr>
                        ))}
                </table>
            </div>
        </div>
    )
}

export default Datos