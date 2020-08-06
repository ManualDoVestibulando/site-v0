import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 4em;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-image: url('/usp.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;

// Show only to robot
export const Title = styled.h1`
  font-size: 1.5rem;
  display: none;
`

export const WrapperSearch = styled.div`
  width: min(50rem, 100%);
`