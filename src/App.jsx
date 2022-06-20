import "./App.css";
import { HackerNewsProvider } from "./context/HackerNewsProvider";
import Header from "./components/Header";
import TogglePostsType from "./components/TogglePostsType";
import CardsContainer from "./components/CardsContainer";
import SelectNews from "./components/SelectNews";

function App() {
  return (
    <HackerNewsProvider>
      <div className="App">
        <Header></Header>
        <TogglePostsType></TogglePostsType>
        <SelectNews></SelectNews>
        <CardsContainer></CardsContainer>
      </div>
    </HackerNewsProvider>
  );
}

export default App;
