import React from "react";

export default function SearchBar({ searchInput, setSearchInput, searchUrl }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = ({ target }) => {
    setSearchInput(target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={searchInput}
          onChange={handleChange}
        ></input>
        <button type="submit" name="submit">
          Search
        </button>
      </form>
    </div>
  );
}
