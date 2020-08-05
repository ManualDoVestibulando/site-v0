import styled from 'styled-components';

export const WrapperText = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
  align-items: center;

  padding: 6em 2em;

  background: #ff6b6b;

  font-size: 1.2em;
  font-weight: 501;
`;

export const WrapperTimes = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  padding: 6em 2em;

  background: #556270;

  h1,
  h2 {
    align-self: flex-start;
  }
  h2 {
    padding-left: 1em;
  }
`;

export const Equipes = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const Colaborador = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  img {
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 50%;
    border-color: black;
    border-style: solid;
  }
`;
