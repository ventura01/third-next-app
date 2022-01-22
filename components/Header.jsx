import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className="row">
        <div className="col-md-6">
          <h1 className="titulo">Menos es mas</h1>
          <p className="texto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            eos ea facilis, ipsa nihil porro maxime pariatur, incidunt ex iste,
            reprehenderit obcaecati consectetur iusto eum sit. Eius similique
            exercitationem praesentium inventore, animi rem corrupti, provident
            quaerat voluptas quasi fuga saepe nemo quisquam suscipit ex? Nulla,
            sunt. Iste beatae quas fugiat optio facere, unde ipsam.
          </p>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Header;
