import React, { useEffect } from "react";

function Genre(props) {
  const [isLoaded, setLoaded] = React.useState(true);
  const [content, setContent] = React.useState("");

  // if written in useEffect then it runs only once after return statement is executedq
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(function () {
    (async function () {
      // fetch is inbuilt feature of browser that makes the request to get dtaa -> prom,is ebased
      let response = await fetch(
        "https://react-backend101.herokuapp.com/genres"
      );
      response = await response.json();
      console.log(response);
      setLoaded(false);
      setContent(response);
    })();
  }, []);

  function sendGenre(e) {
    // check if all genre then show all else hsow for that specific genre
    if (e.target.textContent == "All Genre") {
      props.getGenre("");
      props.setCurrentPage(1);
    } else {
      props.getGenre(e.target.textContent);
      props.setCurrentPage(1);
    }
  }

  return (
    <div className="Genre">
      <div
        className="mr-6 border-2 w-40 text-center h-10 font-bold"
        onClick={sendGenre}
      >
        All Genre
      </div>
      {isLoaded == true ? ( //check if data is loaded or not
        <div className="font-bold">Loading...</div>
      ) : (
        content.genres.map(function (genre) {
          return (
            <div
              className="mr-6 border-2 w-40 text-center h-10 border-t-0 font-bold"
              onClick={sendGenre} // on click to send value that these genres need to be shown
              key={genre.name}
            >
              {genre.name}
            </div>
          );
        })
      )}
    </div>
  );
}

export default Genre;
