import React from "react";
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = (props) => {
  const { itemCount, PageSize, onPageChange, currentPage } = props;
  //console.log(currentPage)
  const PageCount = Math.ceil(itemCount / PageSize);
  if (PageCount === 1) return null;
  const pages = _.range(1, PageCount + 1); // +1 iss liye kioki ye method n it self include nahi hota h

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemCount: propTypes.number.isRequired,
  PageSize :propTypes.number.isRequired,
  currentPage :propTypes.number.isRequired,
  onPageChange :propTypes.func.isRequired,
};

export default Pagination;
