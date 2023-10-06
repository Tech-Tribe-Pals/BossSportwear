import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.header`
  position: sticky;
  background-color: white;
  padding: 20px;
  display: flex;
  justify-content: center;
  top: 0;
  z-index: 2;
  display: none;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    ul {
      display: flex;
      gap: 20px;
      li {
        list-style: none;
        a {
          text-decoration: none;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <nav>
        <Link to={"/"}>
          <img src="/icon.svg" alt="icon" />
        </Link>
        <ul>
          <li>
            <Link>Indumentaria</Link>
          </li>
          <li>Paletas</li>
          <li>Accesorios</li>
          <li>Nosotros</li>
        </ul>
        <ul>
        <li>Iniciar Sesión</li>
        <li>Registrarse</li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
