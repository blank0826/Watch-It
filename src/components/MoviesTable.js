import React from "react";

function MoviesTable(props) {
  let content = props.content;
  let isLoaded = props.isLoaded;
  let setContent = props.setContent;

  const deleteMovie = (deleteThisMovie) => {
    let restOfMovies = content.movies.filter(
      //get all those records which dont have the same movie id
      (movie) => movie._id != deleteThisMovie
    );
    let newObject = { movies: restOfMovies }; //update that in the content
    setContent(newObject); //updating the content with the movie deleted
  };

  return (
    <div>
      {isLoaded == true ? ( //check if the data is not loaded then show loading else show the content
        <div className="font-bold"> Loading ... </div>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th className="px-2 text-center">#</th>
                <th className="px-2 text-center">Title</th>
                <th className="px-2 text-center">Genre</th>
                <th className="px-2 text-center">Stock</th>
                <th className="px-2 text-center">Rate</th>
              </tr>
            </thead>
            <tbody>
              {props.filteredContent.map(function (movie, idx) {
                // dynamic entry for all movies
                return (
                  <tr key={idx}>
                    <td className="px-2 text-center">{idx + 1}</td>
                    <td className="px-2 text-center">{movie.title}</td>
                    <td className="px-2 text-center">{movie.genre.name}</td>
                    <td className="px-2 text-center">{movie.numberInStock}</td>
                    <td className="px-2 text-center">
                      {movie.dailyRentalRate}
                    </td>
                    <td className="px-2 text-center">
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                          deleteMovie(movie._id); // passing the id of the movie which will be deleted
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MoviesTable;
