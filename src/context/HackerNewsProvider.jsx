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
        setNewsForPaginate(filteredNews);
      };
      queryAPI();
    } else {
      setNewsForPaginate(faves);
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
        setNewsForPaginate(filteredNews);
      };
      queryAPI();
    }
  }, [languageSelect]);

  const newsForPaginateLimit = 10;
  const [pages, setPages] = useState(
    Math.ceil(newsForPaginate.length / newsForPaginateLimit)
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPages(Math.ceil(newsForPaginate.length / newsForPaginateLimit));
    setCurrentPage(1);
  }, [newsForPaginate]);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex =
      currentPage * newsForPaginateLimit - newsForPaginateLimit;
    const endIndex = startIndex + newsForPaginateLimit;
    return newsForPaginate.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pages) * pages;
    const arrayPages = new Array(pages).fill().map((_, idx) => start + idx + 1);
    return arrayPages
  };

  const values = {
    news,
    postsType,
    handleChangePostsType,
    languageSelect,
    setLanguageSelect,
    faves,
    setFaves,
    newsForPaginate,
    pages,
    currentPage,
    goToNextPage,
    goToPreviousPage,
    changePage,
    getPaginatedData,
    getPaginationGroup,
  };

  return (
    <HackerNewsContext.Provider value={values}>
      {children}
    </HackerNewsContext.Provider>
  );
};

export { HackerNewsProvider };
export default HackerNewsContext;
