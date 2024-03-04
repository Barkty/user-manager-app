import React from 'react';
import { LazyContainer } from './styles';
import ScaleLoader from 'react-spinners/ScaleLoader';

const Lazy = () => {
    return (
      <LazyContainer>
        <div className="lazy_image">
            <ScaleLoader color="#EB5757" loading={true} height={60} />
        </div>
      </LazyContainer>
    );
};

export default Lazy;
