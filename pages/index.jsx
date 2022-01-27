import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import dbConnect from "../lib/dbConnect";
import Producto from "../models/Producto";

export default function Home({ productos }) {
  console.log(productos);
  return (
    <div>
      <Layout title="Picky Store | Inicio" description="Pagina de inicio." home>
        <div className="row">
          {productos.map(({ _id, title, description, price, ref, imgURL }) => (
            <div key={_id} className="card d-flex col-md-4">
              <Image
                src={imgURL}
                width={500}
                height={400}
                Layout="responsive"
                alt="img"
                priority
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title text-center">{title}</h4>
                <p className="card-text">{description}</p>
                <h3>Precio: US{price}</h3>
                <p className="card-text text-secondary">Ref: {ref}</p>
              </div>
              <Link href={"/"}>
                <a className="btn btn-outline-primary mb-2">Ver más...</a>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </div>
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
