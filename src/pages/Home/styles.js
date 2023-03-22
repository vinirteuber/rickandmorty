import styled from "styled-components";

export const Card = styled.div`
  border: 4px solid #49ff18;
  margin-bottom: 1rem;
  border-radius: 1rem;
  background-color: #000;
  display: flex;
  margin-left: 1rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  color: #fff;

  img {
    border-radius: 1rem 1rem 0 0;
  }

  .title h3 {
    margin-top: 10px;
    color: #49ff18;
    margin-bottom: 2rem;
    text-shadow: 4px 1px 7px #993399;
  }

  .btn button {
    width: 200px;
    height: 40px;
    font-size: 16pt;
    margin-bottom: 1rem;
    border-radius: 10px;
    cursor: pointer;
    background-color: #49ff18;
    color: #993399;
  }

  .btn button:hover {
    transition: 0.5s;
    filter: drop-shadow(0 0 20px #49ff18) contrast(2) brightness(2);
  }
`;
