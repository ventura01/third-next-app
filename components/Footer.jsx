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
      <footer className="bg-light text-center">
        <div className="p-3">
          <h3>Picky Store</h3>
          <p>Todos los derechos reservados</p>
          <p>
            &copy;{months[month]}/{year}
          </p>
          <div className="footer_rrss_cont d-flex justify-content-center">
            <div className="social_media_meta mx-1">
              <i className="bi bi-meta"></i>
            </div>
            <div className="social_media_inst mx-1">
              <i className="bi bi-instagram"></i>
            </div>
            <div className="social_media_twitter mx-1">
              <i className="bi bi-twitter"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
