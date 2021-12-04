import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  overflow-x: scroll;
  overflow: hidden;

  display: flexbox;
  align-items: center;
  justify-content: center;

  overflow-x: scroll;
  overflow-y: hidden;

  div {
    flex-direction: column;
    align-items: center;

    width: 200px;
    height: 300px;

    margin: 0 30px 0 30px;

    border-radius: 16px;
    
    & :hover {
      box-shadow: 0 6px 12px 0 black;
    }

    transition: 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  img {
    height: 300px;
    width: 200px;
  }

`;

export const Title = styled.strong`
  font-size: 20px;

  margin-top: 20px;
`;

export const FlatList = styled.div`
  width: 600px;

  display: flex;
  align-items: center;
  justify-content: center;


  img {
    width: 300px;
    height: 300px; 
    border-radius: 5px;
  }

`;

