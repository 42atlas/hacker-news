import "./App.css";
import React, { useState, useEffect } from "react";
import NewsFeedContainer from "./components/NewsFeedContainer";
import SearchBar from "./components/SearchBar";
import axios from "axios";

const api = axios.create({
  baseURL: "http://hn.algolia.com/api/v1/",
});

function App() {
  const [newsFeed, setNewsFeed] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`search?tags=front_page`);
        setNewsFeed(response.data.hits);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // fetch(searchUrl)
    //   .then((res) => {
    //     if (res.status >= 200 && res.status <= 299) {
    //       return res.json();
    //     } else {
    //       throw Error(res.statusText);
    //     }
    //   })
    //   .then((news) => setNewsFeed(news.hits))
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <NewsFeedContainer newsFeed={newsFeed} />
    </>
  );
}
export default App;
