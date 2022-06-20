import { useContext } from "react";
import HackerNewsContext from "../context/HackerNewsProvider";

const useHackerNews = () => {
    return useContext(HackerNewsContext)
}

export default useHackerNews