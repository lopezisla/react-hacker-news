import Card from "./Card";
import "./CardsContainer.css";
import useHackerNews from "../hooks/useHackerNews";

const CardsContainer = () => {
  const { postsType, getPaginatedData } = useHackerNews();
  return (
    <>
      <div className="Container-Card">
        {getPaginatedData().map((newsItem) => (
          <Card key={newsItem.objectID} newsItem={newsItem}></Card>
        ))}
      </div>
    </>
  );
};

export default CardsContainer;
