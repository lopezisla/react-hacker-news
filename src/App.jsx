import "./App.css";
import { HackerNewsProvider } from "./context/HackerNewsProvider";
import Header from "./components/Header";
import TogglePostsType from "./components/TogglePostsType";
import CardsContainer from "./components/CardsContainer";

function App() {
  return (
    <HackerNewsProvider>
      <div className="App">
        <Header></Header>
        <TogglePostsType></TogglePostsType>
        <CardsContainer></CardsContainer>
      </div>
    </HackerNewsProvider>
  );
}

export default App;
