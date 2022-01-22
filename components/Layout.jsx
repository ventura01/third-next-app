import Navbar from "./Navbar";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Navbar />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
