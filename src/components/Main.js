import React from "react";
import Genre from "./Genre";
import Movies from "./Movies";

function Main() {
  const [genre, setGenre] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  function getGenre(name) {
    //recieve genre name from Genre.js
    setGenre(name);
  }

  return (
    <div>
      <div className="flex">
        {/* sends function to get the genre name to be shown */}
        <Genre getGenre={getGenre} setCurrentPage={setCurrentPage}></Genre>
        {/* sends genre name to be shown */}
        <Movies
          genre={genre}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Movies>
      </div>
    </div>
  );
}

export default Main;
