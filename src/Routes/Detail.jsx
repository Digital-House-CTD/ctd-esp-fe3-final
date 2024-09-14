import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Styles from "../Styles/Detail.module.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams();
  const [dentist, setDentist] = useState({});
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        setDentist(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
        <>
        <main>
          <h1>Detail Dentist id </h1>
          {/* tabla que contenga Nombre del personaje
Email
Telefono
Sitio web */}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dentist.name}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>
          
        </main>
      
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail