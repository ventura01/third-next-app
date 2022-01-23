import Layout from "../components/Layout";
import Image from "next/image";
import dbConnect from "../lib/dbConnect";
import Producto from "../models/Producto";

export default function Home({ productos }) {
  console.log(productos);
  return (
    <Layout title="Picky Store | Inicio" description="Pagina de inicio." home>
      <h1>Inicio</h1>
      {productos.map(({ _id, title, description, price, ref, imgURL }) => (
        <div key={_id} className="card">
          <Image
            src={imgURL}
            width={400}
            height={400}
            Layout="responsive"
            alt="img"
            priority
          />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <h3>{price}</h3>
            <p className="card-text text-secondary">{ref}</p>
          </div>
        </div>
      ))}
    </Layout>
  );
}
export async function getServerSideProps() {
  try {
    await dbConnect();
    const res = await Producto.find({});
    const productos = res.map((doc) => {
      const producto = doc.toObject();
      producto._id = `${producto._id}`;
      return producto;
    });
    console.log(res);
    return { props: { productos } };
  } catch (error) {
    console.log(error);
    return { props: { success: false, error: "Error" } };
  }
}
