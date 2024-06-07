import { useState, useEffect } from 'react';

interface PersonDetails {
    backgroundImageUrl:string, 
    profilePictureUrl:string, 
    name:string, 
    title:string, 
    followers:string, 
    following:string 
  }
  
const usePersonDetailsLogger = (initialPersonDetails: PersonDetails, enableLogs:boolean) => {
  const [personDetails, setPersonDetails] = useState(initialPersonDetails);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (enableLogs) {
      console.log(`Person details: ${JSON.stringify(personDetails)}`);
      console.log(`time: ${currentTime.toLocaleTimeString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })}`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personDetails, enableLogs]);

  return [personDetails, setPersonDetails, currentTime] as [
    PersonDetails,
    React.Dispatch<React.SetStateAction<PersonDetails>>,
    Date
  ];;
};

export default usePersonDetailsLogger;
