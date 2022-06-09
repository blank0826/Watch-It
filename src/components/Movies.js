import React from "react";
import InputBox from "./InputBox";
import MoviesTable from "./MoviesTable";
import Pagination from "./Pagination";
import { useEffect } from "react";

function Movies(props) {
  let [name, setName] = React.useState("");
  let [count, setCount] = React.useState(4);
  const [isLoaded, setLoaded] = React.useState(true);
  const [content, setContent] = React.useState([]);

  // if written in useEffect then it runs only once after return statement is executed
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(function () {
    (async function () {
      // fetch is inbuilt feature of browser that makes the request to get dtaa -> prom,is ebased
      let response = await fetch(
        "https://react-backend101.herokuapp.com/movies"
      ); // retrieve data
      response = await response.json(); //see its json
      console.log(response);
      setLoaded(false);
      setContent(response); //store it in the content
    })();
  }, []);

  function getName(name) {
    // get name that needs to be searched
    setName(name);
    props.setCurrentPage(1);
  }

  function getCount(count) {
    // get count of movies to be shown
    setCount(count);
    props.setCurrentPage(1);
  }

  let filteredContent;
  let totalpagesWaliMovies;

  if (name) {
    // check if any name is entered then search all those movies that contain that name
    filteredContent = content.movies.filter((movie) => {
      if (movie.title.toLowerCase().includes(name.toLowerCase())) {
        return true;
      }
    });
  } else {
    filteredContent = content.movies;
  }

  console.log(count);

  console.log(count + ":" + props.currentPage);

  if (props.genre.trim()) {
    // if a specific genre is selected then filter to give only those movies
    filteredContent = filteredContent.filter((movie) => {
      if (movie.genre.name.trim() == props.genre.trim()) {
        return true;
      }
    });
  }

  if (content.movies) {
    totalpagesWaliMovies = filteredContent;
    //if any count is added then show that many movies
    let sidx = (props.currentPage - 1) * Number(count);
    let eidx = sidx + Number(count);
    console.log(sidx + ":" + eidx);
    filteredContent = filteredContent.slice(sidx, eidx);
  }

  return (
    <div>
      {/* function is passed so that input box gives the value */}
      <InputBox getName={getName} getCount={getCount}></InputBox>
      {/*value is then passed to the movies table so that they can show changes  */}
      <MoviesTable
        name={name}
        filteredContent={filteredContent}
        genre={props.genre}
        content={content}
        isLoaded={isLoaded}
        setContent={setContent}
        currentPage={props.currentPage}
      ></MoviesTable>
      <Pagination
        count={count}
        totalpagesWaliMovies={totalpagesWaliMovies}
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
      ></Pagination>
    </div>
  );
}

export default Movies;
