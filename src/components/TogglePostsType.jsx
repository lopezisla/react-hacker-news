import "./TogglePostsType.css";
import useHackerNews from "../hooks/useHackerNews";

const TogglePostsType = () => {
  const { postsType, handleChangePostsType } = useHackerNews();

  return (
    <div className="Toggle" onChange={handleChangePostsType}>
      {postsType === "all" ? (
        <>
          <input
            type="radio"
            name="postsType"
            value="all"
            id="all"
            defaultChecked
          />
          <label htmlFor="all">All</label>
          <input type="radio" name="postsType" value="my-faves" id="my-faves" />
          <label htmlFor="my-faves">My faves</label>
        </>
      ) : (
        <>
          <input
            type="radio"
            name="postsType"
            value="all"
            id="all"
            />
          <label htmlFor="all">All</label>
          <input
            type="radio"
            name="postsType"
            value="my-faves"
            id="my-faves"
            defaultChecked
            />
          <label htmlFor="my-faves">My faves</label>
        </>
      )}
    </div>
  );
};

export default TogglePostsType;
