import React from 'react';
import PropTypes from 'prop-types';

export const PrimaryButton = ({ label, onClick }) => {
  return (
    <button type="button" className="btn btn-[#250126] px-8 text-sm md:text-base normal-case" onClick={onClick}>
      {label}
    </button>
  );
};

PrimaryButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};