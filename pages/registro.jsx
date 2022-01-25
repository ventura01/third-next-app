import React from "react";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";

const Registro = () => {
  return (
    <Layout
      title="Picky Store | Registro"
      description="Pagina de registro de usuario, descripcion de la empresa e historia."
    >
      <h1>Pagina de registro</h1>
      <Formulario />
    </Layout>
  );
};

export default Registro;
