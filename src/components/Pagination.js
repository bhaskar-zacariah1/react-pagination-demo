import React from "react";

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  return (
    <div>
      {pages.map((page) => (
        <button
          className="btn btn-primary mt-4 m-2"
          key={page}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
