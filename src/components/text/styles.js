import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};
  height: 48px;
  margin: 2rem 0 1.2rem 0;

  @media screen and (max-width: 768px) {
    height: 66.37px;
    max-width: 100%;
    margin: 1rem 0 0.6rem 0;
  }
`;

export const InputLabel = styled.label`
  font-weight: 400;
  font-size: 20px;
  color: '#000000';
  margin-bottom: 1rem;
  font-family: 'Space Grotesk', sans-serif;
  font-style: normal;
  line-height: 22px;

  @media screen and (max-width: 768px) {
    font-size: 10.8193px;
    line-height: 15px;
  }
`;

export const InputWrap = styled.div`
  border-bottom: 1px solid #A69999;
  /* border-radius: 3.64174px; */
  background-color: inherit;
  flex: none;
  flex-grow: 0;
  width: 100%;
  height: 30px;
  display: flex;
  // padding: 0 24px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row-reverse;
  position: relative;

  span {
    cursor: pointer;
  }

  .eye {
    width: 24px;
    height: 24px;
  }

  @media screen and (max-width: 768px) {
    // height: 40px;
    border-radius: 2.70483px;
    // padding: 0 12px;

    .eye {
      width: 16.23px;
      height: 16.23px;
    }
  }
`;

export const InputField = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  flex: none;
  order: 1;
  flex-grow: 0;
  width: 100%;
  // height: 50px;
  // padding: 16px;
  padding: '0px';
  font-weight: 400;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  line-height: 22px;
  color: '#000000';

  &::placeholder {
    // font-weight: 400;
    // font-size: 16px;
    // line-height: 22px;
    color: '#000000';
  }

  &:focus {
    border: none;
    border-color: none;
  }

  @media screen and (max-width: 768px) {
    padding: 12px;
    // height: 35px;
  }
`;

export const ButtonContainer = styled.div`
  width: 276.87px;
  height: 55.19px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15%;
  margin-top: 50pt;
`;

export const ErrorMessage = styled.span`
  color: red;
  width: 100%;
  position: relative;
  font-size: 16px;
  top: 0.5rem;
  left: 0;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const OTPGroup = styled.div`
  display: flex;
  width: 100%;
  max-width: 360px;
  flex-direction: column;
  margin: 1rem 0;

  .otp-group {
    display: flex;
    width: 100%;
    column-gap: 10px;

    .otp-input {
      width: 50px;
      height: 43px;
      background: #f8e2d3;
      border-radius: 5px;
      border: none;
      outline: none;
      text-align: center;
      font-family: 'Nunito', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 114.4%;
      color: #292929;
      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }

  .resend {
    display: flex;
    width: 100%;
    height: 17px;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 0.5rem;

    p {
      font-family: 'Nunito', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: #292929;
      flex: none;
      order: 0;
      flex-grow: 0;
      cursor: pointer;
      margin-top: 0;
    }
  }
  @media screen and (max-width: 768px) {
    .otp-group {
      column-gap: 5px;
      .otp-input {
        width: 15.3%;
      }
    }
  }
`;