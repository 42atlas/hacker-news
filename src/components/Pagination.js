import React from "react";

const Pagination = ({ postsPerPage, totalPosts, changePage }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <nav>
      <span>
        <h3>Pages:</h3>
      </span>
      {pages.map((page) => (
        <button key={page} onClick={() => changePage(page)}>
          {page}
        </button>
      ))}
    </nav>
  );
};
export default Pagination;
