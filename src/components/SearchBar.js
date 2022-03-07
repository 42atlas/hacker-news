import React from "react";

export default function SearchBar({ searchInput, setSearchInput, newsFeed, setNewsFeed }) {
 
 
  const handleSubmit = (e) => {
    const filteredData = newsFeed.filter((item) => {
      
      if (item.title !== '' && item.title !== null){
        if (item.title.toLowerCase().includes(searchInput.toLowerCase()))
        {
          return item;
        }
      }else if (searchInput === ''){
        return item;
      }  
    })
    setNewsFeed(filteredData);
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
