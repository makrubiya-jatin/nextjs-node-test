import React from 'react';
import { Skeleton } from 'primereact/skeleton';

const Loader: React.FC = () => {
  return (
    <div className="person-card">
      <div className="background-image">
        <Skeleton shape="circle" size="110px" className="skeloton-profile-picture" />
      </div>
      <div className="person-details">
        <h2 className="person-name">
          <Skeleton width="100%" height="1.5em" />
        </h2>
        <div className="person-title">
          <Skeleton width="100%" height="1.2em" />
        </div>
        <div className="person-stats">
          <div className="stat">
            <span className="label">
              <Skeleton width="50%" height="0.9em" />
            </span>
            <span className="number">
              <Skeleton width="50%" height="0.9em" />
            </span>
          </div>
          <div className="stat">
            <span className="label">
              <Skeleton width="50%" height="0.9em" />
            </span>
            <span className="number">
              <Skeleton width="50%" height="0.9em" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Loader;