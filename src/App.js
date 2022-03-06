import "./App.css";
import React, { useState, useEffect } from "react";
import NewsFeedContainer from "./components/NewsFeedContainer";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import axios from "axios";

const api = axios.create({
  baseURL: "http://hn.algolia.com/api/v1/",
});

function App() {
  const [newsFeed, setNewsFeed] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`search?hitsPerPage=100&&`);
        setNewsFeed(response.data.hits);
        console.log(response.data);
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

  // get post per Page

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newsFeed.slice(indexOfFirstPost, indexOfLastPost);

  // Change the page

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <NewsFeedContainer newsFeed={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={newsFeed.length}
        changePage={changePage}
      />
    </>
  );
}
export default App;
