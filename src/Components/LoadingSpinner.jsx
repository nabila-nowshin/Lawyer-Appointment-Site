import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
    <span className="loading loading-bars loading-xl text-red-600"></span>
  </div>
  );
};

export default LoadingSpinner;
