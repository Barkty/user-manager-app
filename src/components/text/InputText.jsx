import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

export const InputText = ({
  label,
  inputType,
  inputPlaceholder,
  error,
  value,
  onChange,
  onBlur,
  name,
  touched,
  disabled,
  onFocus,
}) => {
  const [pin, setPin] = useState(inputType);
  const handleChange = () => {
    pin === 'password' ? setPin('text') : setPin('password');
  };

  return (
    <div>
      <label className="font-[500] text-sm md:text-base text-[#4F4F4F]">{label}</label>

      <div className="relative mt-2">
        <input
          type={pin}
          placeholder={inputPlaceholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          disabled={disabled}
          onFocus={onFocus}
          className="w-full p-4 border font-[300] rounded-[4px] text-black border-[#bdbdbd] focus:border-primary outline-none transition-all duration-200 placeholder:text-[#4F4F4F] disabled:bg-[#eae9e9] disabled:cursor-not-allowed placeholder:font-[300]"
        />
        {inputType === 'password' && (
          <span onClick={handleChange} className="absolute right-4 -translate-y-[50%] top-[50%] cursor-pointer">
            {pin === 'password' ? (
              <BsEye color="#bdbdbd" className="eye text-lg" />
            ) : (
              <BsEyeSlash color="#bdbdbd" className="eye text-lg" />
            )}
          </span>
        )}
        {touched && error && <p className="text-red-500 text-sm absolute -bottom-6">{error}</p>}
      </div>
    </div>
  );
};

InputText.propTypes = {
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
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  touched: PropTypes.bool,
  disabled: PropTypes.bool,
};