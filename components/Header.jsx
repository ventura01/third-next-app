import styles from "../styles/Header.module.css";
// import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.bg_header}>
      <div className={styles.container}>
        <div className="row">
          <div className="col-md-4">
            <div className={styles.textos_header_cont}>
              <h1 className={styles.titulo}>Menos es más...</h1>
              <p className={styles.sub_titulo}>
                Muchos elementos dañan al buen diseño!
              </p>
              <p className={styles.texto}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda eos ea facilis, ipsa nihil porro maxime pariatur,
                incidunt ex iste, reprehenderit obcaecati consectetur iusto eum
                sit. Eius similique exercitationem praesentium inventore, animi
                rem corrupti, provident quaerat voluptas quasi fuga saepe nemo
                quisquam suscipit ex? Nulla, sunt. Iste beatae quas fugiat optio
                facere, unde ipsam.
              </p>
            </div>
            <Link href="/registro" passHref>
              <button className="btn btn-outline-secondary mb-3">
                Registrarse
              </button>
            </Link>
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
