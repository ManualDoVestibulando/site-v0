import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4em 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: center;

  * {
    max-width: 50em;
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  width: 100%;
`;

export const Title = styled.h2`
  align-self: flex-start;
  text-align: center;
`;

export const SubTitle = styled.h1`
  font-size: 1.8em;
  margin-top: 1em;
  margin-bottom: 0.5em;
  margin-left: 1em;
  align-self: flex-start;
`;

export const NotasWrapper = styled.article`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const WrapperTable = styled.div`
  @media (max-width: 600px) {
    font-size: 0.7em;
  }
`;

export const WrapperChart = styled.div`
  margin: 0 2em 3em 2em;
  max-width: 30em;
  max-height: 12em;
`
