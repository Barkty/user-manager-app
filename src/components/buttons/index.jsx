import React from "react";
import PropTypes from "prop-types";

export const PrimaryButton = ({ children, type, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className="w-full h-[60px] rounded-md bg-[#250126] px-8 text-sm font-normal text-white md:text-base normal-case font-grotesk"
    >
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};
