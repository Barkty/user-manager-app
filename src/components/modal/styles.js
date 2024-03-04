import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: ${(props) => (props.display === 'true' ? 'block' : 'none')};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  // background: #000;
`;

export const ModalWrap = styled.div`
  width: auto;
  height: auto;
  border-radius: 20px;
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  text-align: center;

  .close__modal {
    position: relative;
    top: 2.5em;
    z-index: 1;
    float: left;
    right: -1.5em;
    color: grey;
    cursor: pointer;

    p {
      font-family: 'Nunito', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18.446px;
      line-height: 30px;
      color: #292929;
      margin-top: 0;
    }
  }

  .back {
    width: 69.57px;
    height: 18.57px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 17px;
  }
`;

export const ModalContent = styled.div`
  height: auto;
  padding: 0;
  margin: 0;
  position: relative;
`;