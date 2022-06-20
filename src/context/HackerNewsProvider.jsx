import { useState, useEffect, createContext } from "react";
import axios from "axios";

const HackerNewsContext = createContext();
const fieldsToCheck = ["author", "story_title", "story_url", "created_at"];
const filterNews = (hits) =>
  hits.filter(
    (hit) =>
      hit &&
      fieldsToCheck
        .map((field) => hit[field] !== null && hit[field] !== "")
        .every((value) => value)
  );

const HackerNewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [faves, setFaves] = useState(
    JSON.parse(localStorage.getItem("faves") ?? "[]")
  );

  const checkPostsType = localStorage.getItem("postsType") || "all";
  const [postsType, setPostsType] = useState(checkPostsType);
  const [languageSelect, setLanguageSelect] = useState();

  const [newsForPaginate, setNewsForPaginate] = useState(
    checkPostsType === "all" ? news : faves
  );

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

  const handleChangePostsType = (e) => {
    setPostsType(e.target.value);
    localStorage.setItem("postsType", e.target.value);
  };

  useEffect(() => {
    if (!!languageSelect) {
      const queryAPI = async () => {
        const url = `https://hn.algolia.com/api/v1/search_by_date?query=${languageSelect}&hitsPerPage=110`;
        const { data } = await axios(url).catch((err) => {
          console.error(err);
        });
        const filteredNews = filterNews(data.hits);
        setNews(filteredNews);
      };
      queryAPI();
    }
  }, [languageSelect]);
  
  const values = {
    news,
    postsType,
    handleChangePostsType,
    languageSelect,
    setLanguageSelect,
    faves,
    setFaves
  };

  return (
    <HackerNewsContext.Provider value={values}>
      {children}
    </HackerNewsContext.Provider>
  );
};

export { HackerNewsProvider };
export default HackerNewsContext;
