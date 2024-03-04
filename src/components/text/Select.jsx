import React from 'react';
import PropTypes from 'prop-types';

export const SelectInput = ({
  label,
  placeholder,
  error,
  value,
  onChange,
  onBlur,
  name,
  touched,
  disabled,
  options,
}) => {
  return (
    <div className="space-y- h-fit">
      <label className="font-[500] text-sm md:text-base text-[#4F4F4F]">{label}</label>

      <div
        className={`relative mt-2 h-full w-full min-w-fit rounded-[4px] border border-[#bdbdbd] focus:border-primary transition-all duration-200 pr-4 cursor-pointer ${
          disabled && 'bg-[#eae9e9] cursor-not-allowed'
        }`}
      >
        <select
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          disabled={disabled}
          className="w-full h-full px-4 py-[18px] font-[300] outline-none placeholder:text-[#4F4F4F] disabled:bg-[#eae9e9] disabled:cursor-not-allowed placeholder:font-[300] cursor-pointer"
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options?.map(({ label, value, disabled }, i) => (
            <option value={value} key={i} disabled={disabled} defaultValue={placeholder}>
              {label}
            </option>
          ))}
        </select>

        {touched && error && <p className="text-red-500 text-sm absolute -bottom-6">{error}</p>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  touched: PropTypes.bool,
  disabled: PropTypes.bool,
};