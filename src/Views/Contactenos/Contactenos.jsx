import style from "./Contactenos.module.css";
import FormularioContactenos  from "../../Components/formulariocontactenos/FormularioContactenos"

import Direccion from "../../components/Direccion/Direcion";


const Contactenos = () => {
  return (
    <div>
      <div className={style.header}>
      
      </div>
      <div className={style.contenedorprincipal}>
        <Direccion />
        <FormularioContactenos />
      </div>
    </div>
  );
};

export default Contactenos;
