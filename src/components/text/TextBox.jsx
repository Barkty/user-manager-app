import React, { useState } from 'react';
import { ErrorMessage, InputContainer, InputField, InputLabel, InputWrap } from './styles';
import PropTypes from 'prop-types';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

export const TextBox = ({
  label,
  type,
  inputPlaceholder,
  error,
  value,
  onChange,
  onBlur,
  name,
  labelColor,
  color,
  maxWidth,
  touched,
}) => {
  const [pin, setPin] = useState(type);
  const handleChange = () => {
    pin === 'password' ? setPin('text') : setPin('password');
  };

  return (
    <InputContainer maxWidth={maxWidth}>
      {touched && <InputLabel labelColor={labelColor}>{label}</InputLabel>}
      <InputWrap>
        <InputField
          type={pin}
          placeholder={inputPlaceholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          color={color}
        />
        {type === 'password' && (
          <span onClick={handleChange} className="absolute right-5 -translate-y-[50%] top-[50%]">
            {pin === 'password' ? (
              <BsEye color="#8b8b8b" className="eye" />
            ) : (
              <BsEyeSlash color="#8b8b8b" className="eye" />
            )}
          </span>
        )}
      </InputWrap>
      {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

TextBox.propTypes = {
  label: PropTypes.string,
  inputType: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  labelColor: PropTypes.string,
  maxWidth: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  touched: PropTypes.bool,
};