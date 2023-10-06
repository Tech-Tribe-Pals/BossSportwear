import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  ul {
    li {
      list-style: none;
    }
  }
  .humo {
    border-top: 2px #FFF solid;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <img src="/logo.svg" alt="logo" />
      <div>
        <h4>Navegacion</h4>
        <ul>
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Indumentaria</li>
        </ul>
      </div>
      <div>
        <h4>Contacto</h4>
        <p>Tel: 11 1234-5678</p>
      </div>
      <article>
        <div>
          <h4>Redes</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div>
          <h4>Medios de Pago</h4>
          <ul>
            <li>Visa</li>
            <li>Mercapo gaco</li>
            <li>Mastercard</li>
          </ul>
        </div>
      </article>

      <p className="humo">Hecho por Adriel Camacho y Federico Massolo</p>
    </FooterStyle>
  );
};

export default Footer;
