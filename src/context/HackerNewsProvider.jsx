import { useState, useEffect, createContext } from "react";

const HackerNewsContext = createContext();


const HackerNewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  
  const values = {
    news
  };

  return (
    <HackerNewsContext.Provider value={values}>
      {children}
    </HackerNewsContext.Provider>
  );
};

export { HackerNewsProvider };
export default HackerNewsContext;
