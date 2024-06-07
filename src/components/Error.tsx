import { Skeleton } from 'primereact/skeleton';
import React from 'react';

type ErrorProps = {
  message: string;
};

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="person-card">
      <div className="error-container">
        <div className="error-message">
          <h2>Oops, something went wrong!</h2>
          <p>
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;