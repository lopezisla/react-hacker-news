import "./Card.css";
import clock from "../assets/iconmonstr-time-2.png";
import fullHeart from "../assets/iconmonstr-favorite-3.png";
import voidHeart from "../assets/iconmonstr-favorite-2.png";
import useHackerNews from "../hooks/useHackerNews";

const Card = ({ newsItem }) => {
  const { author, story_title, story_url, created_at } = newsItem;
  const dateFormatted = created_at.substring(0, 10);
  const { faves, setFaves } = useHackerNews();

  const handleFaves = (e) => {
    const favIndex = faves.findIndex(
      (fav) => fav.objectID === newsItem.objectID
    );

    if (favIndex !== -1) {
      const filteredFaves = faves.filter(
        (fav) => fav.objectID !== newsItem.objectID
      );

      localStorage.setItem("faves", JSON.stringify(filteredFaves));
      setFaves(filteredFaves);
    } else {
      localStorage.setItem("faves", JSON.stringify([...faves, newsItem]));
      setFaves([...faves, newsItem]);
    }
  };
  const isFav = faves.some((fav) => fav.objectID === newsItem.objectID);
  const handleOnClick = () => window.open(story_url, "_blank");
  return (
    <div className="Card">
      <div
        className="Container-Info"
        onClick={handleOnClick}
      >
        <div className="Create-at-and-by">
          <img src={clock} className="CLOCK"></img>
          <span className="Author">
            {"Created at: " + dateFormatted + " by: " + author}
          </span>
        </div>
        <div className="Tittle">{story_title}</div>
      </div>

      <div className="Container-Heart">
        {faves.some((fav) => fav.objectID === newsItem.objectID) ? (
          <img src={fullHeart} className="HEART" onClick={handleFaves}></img>
        ) : (
          <img src={voidHeart} className="HEART" onClick={handleFaves}></img>
        )}
      </div>
    </div>
  );
};

export default Card;
