import { useState, useEffect, createContext } from "react";

const HackerNewsContext = createContext();


const HackerNewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [faves, setFaves] = useState(
    JSON.parse(localStorage.getItem("faves") ?? "[]")
  );

  const checkPostsType = localStorage.getItem("postsType") || "all";
  const [postsType, setPostsType] = useState(checkPostsType);

  useEffect(() => {
    if (postsType === "all") {
      const queryAPI = async () => {
        const url = `https://hn.algolia.com/api/v1/search_by_date?hitsPerPage=110`;
        const { data } = await axios(url).catch((err) => {
          console.error(err);
        });
        const filteredNews = filterNews(data.hits);
        setNews(filteredNews);
      };
      queryAPI();
    } 
  }, [postsType]);
  
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
