import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const useServerTime = () => {
    const serverTime = new Date(Date.now()); // get server-side rendered time
    return serverTime;
};

const Header: React.FC = () => {
  const serverTime = useServerTime();
  const [currentTime, setCurrentTime] = useState(serverTime);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
    let day = currentTime.getDate();
    let month = currentTime.getMonth() + 1;
    let year = currentTime.getFullYear();
    let formattedDate = `${day}-${month}-${year}`

  const formattedTime = currentTime.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });


  return (
    <header className="header">
      <div className="logo">
        {}
      </div>
      <nav className="nav">
        <ul>
        {}
        </ul>
      </nav>
      <div className="time">
        <p>Time:  {formattedDate} : {formattedTime}</p>
      </div>
    </header>
  );
};

export default Header;