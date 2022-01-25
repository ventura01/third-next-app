import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

const Layout = ({ children, title, description, home }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
