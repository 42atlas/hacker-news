import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  changePage,
  previousPage,
  nextPage,
}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <nav>
      <span>
        <h3>Pages:</h3>
      </span>
      <button onClick={() => previousPage()}>Prev</button>
      {pages.map((page) => (
        <button key={page} onClick={() => changePage(page)}>
          {page}
        </button>
      ))}
      <button onClick={() => nextPage(pages.length)}>Next</button>
    </nav>
  );
};
export default Pagination;
