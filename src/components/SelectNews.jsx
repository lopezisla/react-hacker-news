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
      {postsType === "all" && (
        <select
          name="languagesNews"
          className="Select-News"
          onChange={(e) => setLanguageSelect(e.target.value)}
          value={languageSelect}
        >
          <option key="hidden" hidden>
            Select your news
          </option>
          {languages.map((language) => (
              <option key={language.value} value={language.value}>
                {language.label}
              </option>
            ))}
        </select>
      )}
    </div>
  );
};

export default SelectNews;
