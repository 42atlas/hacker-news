import "./App.css";
import React, { useState, useEffect } from "react";
import NewsFeedContainer from "./components/NewsFeedContainer";
import SearchBar from "./components/SearchBar";

const url = "http://hn.algolia.com/api/v1/search?tags=front_page";

function App() {
  const [newsFeed, setNewsFeed] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const searchUrl = `http://hn.algolia.com/api/v1/search_by_date?query=${searchInput}`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then((news) => setNewsFeed(news.hits))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchUrl={searchUrl}
      />
      <NewsFeedContainer
        newsFeed={newsFeed}
        setNewsFeed={setNewsFeed}
        url={url}
      />
    </>
  );
}
export default App;
