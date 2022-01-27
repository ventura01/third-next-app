import Navbar from "./Navbar";
import Header from "../components/Header";
import Head from "next/head";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

const Layout = ({ children, title, description, header = true }) => {
  return (
    <div>
      <Navbar />
      {header && <Header />}
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
