import React from 'react';
import './PreLoader.scss';

const PreLoader = (): JSX.Element => {
  return (
    <div className="spinner">
      <span>Loading...</span>
      <div className="half-spinner" />
    </div>
  );
};

export default PreLoader;
