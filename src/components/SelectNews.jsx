import "./SelectNews.css";
import useHackerNews from "../hooks/useHackerNews";
import { useState } from "react";
const languagesArray = [
  { value: "angular", label: "Angular" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
];

const SelectNews = () => {
 
  const [languages, setLanguages] = useState(languagesArray);
  const { languageSelect, setLanguageSelect, postsType } = useHackerNews();
  return (
    <div className="Select-Div">
     
    </div>
  );
};

export default SelectNews;