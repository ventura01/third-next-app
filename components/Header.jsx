import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/img/1.jpeg"
              className="d-block w-100"
              alt="img 1"
              width={480}
              height={352}
              layout="responsive"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/img/2.jpeg"
              className="d-block w-100"
              alt="img 2"
              width={1080}
              height={1316}
              layout="responsive"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/img/3.jpeg"
              className="d-block w-100"
              alt="img 3"
              width={640}
              height={640}
              layout="responsive"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
