import React, { useContext } from 'react';
import Loader from '@/components/Loader';
import Error from '@/components/Error';
import usePersonDetailsLogger from './usePersonDetailsLogger';
import { LogContext } from '@/contexts/LogContext';

type PersonCardProps ={
  backgroundImageUrl:string, 
  profilePictureUrl:string, 
  name:string, 
  title:string, 
  followers:string, 
  following:string 
}

type PersonProps = {
  loading: boolean;
  error: string | null;
  data: PersonCardProps;
};

const PersonCard: React.FC<PersonCardProps> = (data) => {

  const { enableLogs, toggleLogs } = useContext(LogContext) ?? {};
  const [personDetails, setPersonDetails, currentTime] = usePersonDetailsLogger(
    data, enableLogs ?? true
  );
  const { backgroundImageUrl, profilePictureUrl, name, title, followers, following } = data;
  const handleUpdatePersonDetails = () => {
    setPersonDetails(data);
    toggleLogs&&toggleLogs()
  };

  return (
    <div className='person-card'>
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <img src={profilePictureUrl} alt={name} className="profile-picture" />
      </div>
      <div className="person-details">
        <h2 className="person-name">{name}</h2>
        <p className="person-title">{title}</p>
        <div className="person-stats">
          <div className="stat">
            <span className="label">Followers : </span>
            <span className="number">{followers}</span>
          </div>
          <div className="stat">
            <span className="label">Following : </span>
            <span className="number">{following}</span>
          </div>
        </div>
        <button className='update-person-details-button' onClick={handleUpdatePersonDetails}>Update Person Details</button>
      </div>
    </div>
  );
};


const Person: React.FC<PersonProps> = ({ loading, error, data }) => {

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!data) {
    return null;
  }

  return <PersonCard {...data}/>;
};

export default Person;