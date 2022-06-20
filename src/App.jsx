import "./App.css";
import { HackerNewsProvider } from "./context/HackerNewsProvider";
import Header from "./components/Header";
import TogglePostsType from "./components/TogglePostsType";

function App() {
  return (
    <HackerNewsProvider>
      <div className="App">
        <Header></Header>
        <TogglePostsType></TogglePostsType>
      </div>
    </HackerNewsProvider>
  );
}

export default App;
