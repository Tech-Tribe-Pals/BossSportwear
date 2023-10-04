import styled from "styled-components";
// import Carousel from "../components/Carousel";
// import { Link } from "react-router-dom";
import { CardCategory, CardProd } from "../components/Cards";

const HomeStyle = styled.main`
  .brand {
    height: 50vh;
    display: flex;
    .img {
      background-repeat: no-repeat;
      background-position: left;
      background-size: cover;
      background-image: url("/img4.jpg");
      width: 50vw;
      height: auto;
    }
    .text {
      height: 100%;
      width: 50vw;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
    }
  }
  /* .btnFilter {
    justify-content: center;
    display: flex;
    gap: 20px;
    margin: 20px 0;
    article {
      width: 40%;
      padding: 20px;
      background-color: green;
      font-weight: bold;
      color: #fff;
    }
  }
  .btnPaletas {
    margin: 0 auto 20px auto;
    width: 80%;
    background-color: green;
    padding: 20px 50px;
    font-weight: bold;
    color: #fff;
  }
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  .prods {
    display: flex;
    gap: 20px;
    justify-content: center;
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 250px;
      }
    }
  } */
  .categories {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    h3 {
      margin: 20px 0;
    }
    .cards {
      display: flex;
      gap: 20px;
    }
  }
  .news {
    background-color: #83a38c;
    height: 60vh;
    width: 95vw;
    margin: 20px auto 20px auto;
    display: flex;
    overflow: hidden;
    .imgContainer {
      width: 50vw;
      display: flex;
      justify-content: center;
      transform: rotateZ(-30deg);
      position: relative;
      img {
        height: 100%;
        z-index: 2;
      }
      .line {
        width: 10px;
        height: 100%;
        background-color: #fff;
        position: absolute;
        transform: rotateZ(30deg);
      }
    }
    .info {
      width: 50vw;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      h3 {
        font-size: 44px;
      }
      button {
        width: 150px;
        padding: 10px;
        background-color: transparent;
        border: 2px solid #fff;
        color: #fff;
      }
    }
  }
  .newsTrue {
    margin-left: 20px;
    h3 {
      margin: 20px 0;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
  }
`;

const Home = () => {
  return (
    <HomeStyle>
      <section className="brand">
        <div className="img" />
        <div className="text">
          <h3>Indumentaria de Calidad</h3>
        </div>
      </section>
      <section className="categories">
        <h3>Categorias</h3>
        <article className="cards">
          <CardCategory />
          <CardCategory />
          <CardCategory />
        </article>
      </section>
      <section className="news">
        <article className="imgContainer">
          <img src="/paleta2.png" alt="producto" />
          <div className="line" />
        </article>
        <article className="info">
          <h3>Raqueta Boss</h3>
          <p>lorem lorem lorem</p>
          <button>Comprar</button>
        </article>
      </section>
      <section className="newsTrue">
        <h3>Novedades</h3>
        <article className="cards">
          <CardProd />
          <CardProd />
          <CardProd />
        </article>
      </section>
    </HomeStyle>
  );
};

export default Home;
