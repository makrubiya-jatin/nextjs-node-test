import { createContext, useState, useContext } from 'react';

interface LogContextValue {
  enableLogs: boolean;
  toggleLogs: () => void;
}


type LogContextProps = {
    children?:React.ReactNode
  };
const LogContext = createContext<LogContextValue | null>(null);

const LogProvider: React.FC<LogContextProps> = ({ children }) => {
  const [enableLogs, setEnableLogs] = useState(false);

  const toggleLogs = () => {
    setEnableLogs((prevEnableLogs) =>!prevEnableLogs);
  };

  return (
    <LogContext.Provider value={{ enableLogs, toggleLogs }}>
      {children}
    </LogContext.Provider>
  );
};

export { LogProvider, LogContext };