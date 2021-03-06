import styled from "styled-components";

import codeBackground from "../../assets/background-geral.png";

export const Container = styled.section`
  background-color: #3a3335;
  background-image: url(${codeBackground});
  background-position: center;
`;

export const Loader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & img {
    width: 150px;
    position: relative;
    top: -50px;
    margin: 0 auto;
  }
`;
