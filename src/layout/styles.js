import styled from 'styled-components';

export const LazyContainer = styled.div`
  width: 100%;
  // height: 100vh;
  height: ${(props) => (props.height ? props.height : '100vh')};
  display: flex;
  align-items: center;
  justify-content: center;

  .lazy_image {
    width: 200px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;