import styled from "styled-components";

export const NavbarStyle = styled.div`
  padding: 2rem;
  font-size: 16pt;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 90px;
  color: #b8f500;
  text-shadow: 4px 1px 7px #993399;

  :hover {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #49ff18,
      0 0 30px #49ff18, 0 0 40px #49ff18, 0 0 55px #49ff18, 0 0 75px #49ff18,
      4px 1px 8px rgba(153, 51, 153, 0);
    transition: 0.5s;
    cursor: pointer;
  }
`;
