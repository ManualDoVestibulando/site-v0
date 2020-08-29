import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 4em;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-image: url('/fundo_azul.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

// Show only to robot
export const Title = styled.h1`
  font-size: 1.5rem;
  display: none;
`;

export const WrapperSearch = styled.div`
  width: min(60rem, 100%);
`;
