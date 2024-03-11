import React, { useState } from "react";

const Datos =()=>{
    

    //Aquí creamos la lista de los usuarios que vamos a mostrar en la tabla
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
    

    return(
        <div>
           
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                    </tr>
                        {usuarios.map((usuario)=>(
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