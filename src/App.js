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
  const [postsPerPage] = useState(10);
  const [filtered,setFiltered] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`search?hitsPerPage=100&&`);
        setNewsFeed(response.data.hits);
        setFiltered(response.data.hits);
        
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
  const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);
  // Change the page

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    
  };
  const previousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  
 
  //console.log(filtered);
  return (
    <>
      <SearchBar searchInput={searchInput}  setSearchInput={setSearchInput} newsFeed={newsFeed} setNewsFeed={setFiltered}/>
      <NewsFeedContainer  newsFeed={currentPosts}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filtered.length}
        changePage={changePage}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </>
  );
}
export default App;
