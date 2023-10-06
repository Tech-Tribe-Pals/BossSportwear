import styled from "styled-components";
import { CardCube } from "../components/Cards";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const HomeStyle = styled.main`
  .gridImg {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }
  .carousel {
    ul {
        li {
            background-color: red;
            display: flex;
            flex-direction: column;
            align-items: center;
            &:nth-child(3) {
                background-color: greenyellow;
            }
        }
    }
  }
  .extra {
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    font-size: 35px;
    background-image: url('/img1.jpeg');
  }
  .ad {
    display: flex;
    height: 60vh;
    article {
        width: 50vw;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: left;
        img {
            height: 100%;
        }
    }
  }
  .newsletter {
    display: flex;
    background-color: #000;
    color: #FFF;
    article {
        width: 50vw;
        height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h3 {
            font-size: 48px;
        }
    }
  }
`;

const Home2 = () => {
  const splideOptions = {
    perPage: 2.5,
    gap: 5,
  };

  return (
    <HomeStyle>
      <section>
        <CardCube image={"/img1.jpeg"} />
        <article className="gridImg">
          <CardCube image={"/img5.jpg"} />
          <CardCube image={"/img5.jpg"} />
          <CardCube image={"/img5.jpg"} />
        </article>
      </section>
      <Splide className="carousel" options={splideOptions}>
        <SplideSlide>
          <img src="/paleta2.png" alt="paleta" />
          <p>Paleta</p>
        </SplideSlide>
        <SplideSlide>
          <img src="/paleta2.png" alt="paleta" />
          <p>Paleta</p>
        </SplideSlide>
        <SplideSlide>
          <img src="/paleta2.png" alt="paleta" />
          <p>Paleta</p>
        </SplideSlide>
        <SplideSlide>
          <img src="/paleta2.png" alt="paleta" />
        </SplideSlide>
      </Splide>
      <section className="extra">
      <h3>Accesorios</h3>
      </section>
      <section className="ad">
      <article>
      <h3>Nueva Paleta</h3>
      <p>info</p>
      <button>Ver mas</button>
      </article>
      <article>
      <img src="/paleta2.png" alt="paleta" />
      </article>
      </section>
      <section className="newsletter">  
      <article>
      <p>Email:</p>
      <div className="formField">
      <input /><input type="submit" />
      </div>
      </article>
      <article>
      <h3>NO TE PIERDAS NADA!</h3>
      <p>lorem</p>
      </article>
      </section>
    </HomeStyle>
  );
};

export default Home2;
