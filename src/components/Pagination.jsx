import "./Pagination.css";
import useHackerNews from "../hooks/useHackerNews";

const Pagination = () => {
  const {
    pages,
    currentPage,
    goToNextPage,
    goToPreviousPage,
    changePage,
    getPaginationGroup,
  } = useHackerNews();

  return (
    <div className="Pagination">
      {/* previous button */}
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? "disabled" : ""}`}
      >
        {"<"}
      </button>

      {/* show page numbers */}
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`Pagination-Item ${currentPage === item ? "active" : null}`}
        >
          <span>{item}</span>
        </button>
      ))}

      {/* next button */}
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? "disabled" : ""}`}
      >
         {">"}
      </button>
    </div>
  );
};

export default Pagination;
