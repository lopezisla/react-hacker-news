import { useState, useEffect, createContext } from "react";

const HackerNewsContext = createContext();


const HackerNewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [faves, setFaves] = useState(
    JSON.parse(localStorage.getItem("faves") ?? "[]")
  );
  
  const values = {
    news,
    faves
  };

  return (
    <HackerNewsContext.Provider value={values}>
      {children}
    </HackerNewsContext.Provider>
  );
};

export { HackerNewsProvider };
export default HackerNewsContext;
