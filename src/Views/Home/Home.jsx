import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import { getServicios } from "../../Redux/Actions";

const Home = () => {
  const dispatch = useDispatch(); // Usa useDispatch como una función
  useEffect(() => {
    dispatch(getServicios()); // Despacha la acción para obtener los servicios
  }, []);

  const servicios = useSelector((state) => state.servicios);
  console.log(servicios);

  return (
    <div className="home-container">
      <div>
        <Cards servicios={servicios} />
      </div>
    </div>
  );
};

export default Home;
