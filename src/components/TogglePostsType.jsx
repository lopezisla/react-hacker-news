import "./TogglePostsType.css";
const TogglePostsType = () => {
  return (
    <div className="Toggle">
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
    </div>
  );
};
export default TogglePostsType;
