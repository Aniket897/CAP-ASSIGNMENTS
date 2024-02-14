const Pagination = ({ next, prev, currentPage }) => {
  return (
    <div className="pagination">
      <button disabled={currentPage == 1} onClick={prev}>
        Previous
      </button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Pagination;
