import "./App.css";
import { HackerNewsProvider } from "./context/HackerNewsProvider";
import Header from "./components/Header";
import TogglePostsType from "./components/TogglePostsType";
import SelectNews from "./components/SelectNews";
import CardsContainer from "./components/CardsContainer";
import Pagination from "./components/Pagination";

function App() {
  return (
    <HackerNewsProvider>
      <div className="App">
        <Header></Header>
        <TogglePostsType></TogglePostsType>
        <SelectNews></SelectNews>
        <CardsContainer></CardsContainer>
        <Pagination></Pagination>
      </div>
    </HackerNewsProvider>
  );
}

export default App;
