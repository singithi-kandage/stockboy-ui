import React from "react";

const Pagination = () => {
  return (
    <div className="pagination">
      <span className="pagination_link">
        <i className="fas fa-caret-left"></i>
      </span>
      <span className="pagination_link">1</span>
      <span className="pagination_link">2</span>
      <span className="pagination_link">3</span>
      <span className="pagination_link">4</span>
      <span className="pagination_link">5</span>
      <span className="pagination_link">
        <i className="fas fa-caret-right"></i>
      </span>
    </div>
  );
};

export default Pagination;
