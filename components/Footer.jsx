import React from "react";

const year = new Date().getFullYear();
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const month = new Date().getMonth();

const Footer = () => {
  return (
    <div>
      <p>
        Todos los derechos reservados ©{months[month]} / {year}
      </p>
    </div>
  );
};

export default Footer;
