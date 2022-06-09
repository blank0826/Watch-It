import React from "react";

function Pagination(props) {
  let count = props.count;
  let totalpagesWaliMovies = props.totalpagesWaliMovies;
  let pagesArr = [];
  console.log(totalpagesWaliMovies);

  if (totalpagesWaliMovies) {
    let noOfPages = Math.ceil(totalpagesWaliMovies.length / count);
    for (let i = 1; i <= noOfPages; i++) {
      pagesArr.push(i);
    }
  }

  return (
    <div>
      {pagesArr.map(function (pageNumber) {
        let css =
          pageNumber == props.currentPage
            ? "hover:bg-blue-500  border-2 py-2 px-3 rounded bg-blue-500 text-white"
            : "hover:bg-blue-500  border-2 py-2 px-3 rounded ";
        return (
          <button
            className={css}
            key={pageNumber}
            onClick={() => {
              props.setCurrentPage(pageNumber);
            }}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
