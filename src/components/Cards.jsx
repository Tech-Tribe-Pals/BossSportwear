import { Link } from "react-router-dom";
import styled from "styled-components";

const CardProds = styled.div`
  .imgContainer {
    width: 100%;
    position: relative;
    background: #CCC;
    &:hover {
      background-color: red;
    }
    img {
      width: 100%;
    }
    p {
      position: absolute;
      bottom: 10px;
      color: #e8688e;
      background-color: #FFF;
      padding: 5px;
    }
  }
  p:nth-child(3) {
    opacity: 0.7;
  }
`;

const CardCubes = styled.div`
  img {
    object-fit: cover;
    width: 100%;
    height: 50vh;
  }
` 

export const CardCategory = () => {
  return (
    <div>
      <img src="/img5.jpg" />
      <p>Indumentaria Hombre</p>
      <Link to={""}>Ver mas</Link>
    </div>
  );
};

export const CardProd = () => {
  return (
    <CardProds>
      <div className="imgContainer">
        <img src="/paleta2.png" />
        <p>$5000</p>
      </div>
      <p>Paleta Boss</p>
      <p>Paleta</p>
      <Link to={""}>Ver mas</Link>
    </CardProds>
  );
};


// eslint-disable-next-line react/prop-types
export const CardCube = ({ image }) => {
  return (
    <CardCubes>
      <img src={ image } alt="imagen" />
    </CardCubes>
  );
};