import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="textos_header_cont">
            <h1 className={styles.titulo}>Menos es más...</h1>
            <p className={styles.sub_titulo}>
              Muchos elementos cargan al buen diseño!
            </p>
            <p className={styles.texto}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              eos ea facilis, ipsa nihil porro maxime pariatur, incidunt ex
              iste, reprehenderit obcaecati consectetur iusto eum sit. Eius
              similique exercitationem praesentium inventore, animi rem
              corrupti, provident quaerat voluptas quasi fuga saepe nemo
              quisquam suscipit ex? Nulla, sunt. Iste beatae quas fugiat optio
              facere, unde ipsam.
            </p>
          </div>
        </div>
        <div className="col-md-8">
          <div className="image_header_cont">
            <Image
              src="/img/3.jpg"
              width={1920}
              height={1280}
              alt="Image 1"
              priority
              layout="responsive"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
