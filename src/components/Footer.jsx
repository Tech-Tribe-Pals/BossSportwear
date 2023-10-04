import styled from "styled-components"

const FooterStyle = styled.footer`
    background-color: #000;
    color: #FFF;
    padding: 20px;
    margin-top: 20px;
`

const Footer = () => {
  return (
    <FooterStyle>
    <p>Hecho con tiendanube</p>
    </FooterStyle>
  )
}

export default Footer