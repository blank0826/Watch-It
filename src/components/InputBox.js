import React from "react";
import { Link } from "react-router-dom";

function InputBox(props) {
  let [searchText, setSearchText] = React.useState("");
  let [numberOfItems, setNumberOfItems] = React.useState("");

  function handleCount(e) {
    // send the count of rows to be shown
    setNumberOfItems(e.target.value);
    props.getCount(e.target.value);
  }

  function handleText(e) {
    // send the name of movie to be shown
    setSearchText(e.target.value);
    props.getName(e.target.value);
  }

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/new">New</Link>
      </button>
      <input
        className="border rounded py-1 px-1 mx-2 font-bold "
        type="text"
        value={searchText}
        onChange={handleText}
      ></input>
      <input
        className="border rounded py-1 px-1 mx-2 font-bold "
        type="number"
        value={numberOfItems}
        onChange={handleCount}
      ></input>
    </div>
  );
}

export default InputBox;
