import "./App.css";
import React, { useState, useEffect } from "react";
import NewsFeedContainer from "./components/NewsFeedContainer";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

const api = axios.create({
  baseURL: "http://hn.algolia.com/api/v1/",
});

function App() {
  const [newsFeed, setNewsFeed] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [loading, setLoading] = useState(false);
  // const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get(
          `search?hitsPerPage=100&&tags=story&&query=${searchInput}`
        );
        setNewsFeed(response.data.hits);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        alert("an error has occurred");
        console.log(error);
        setLoading(false);
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
  }, [searchInput]);

  // get post per Page

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newsFeed.slice(indexOfFirstPost, indexOfLastPost);

  // Change the page

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const previousPage = () => {
    setCurrentPage((prev) => (currentPage === 1 ? prev : prev - 1));
  };
  const nextPage = (lastPage) => {
    setCurrentPage((prev) => (currentPage === lastPage ? prev : prev + 1));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: (theme) => alpha(theme.palette.primary.light, 0.08),
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: 1,
        justifyContent: "center",
        fontWeight: "bold",
        m: 3,
        minWidth: 350,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          m: 3,
          minWidth: 350,
        }}
      >
        <Box
          sx={{
            color: "primary.main",
            fontWeight: "medium",
            display: "flex",
            flexDirection: "column",
            fontSize: 20,
            alignItems: "center",
            justifyContent: "center",
            m: 3,
            minWidth: 350,
          }}
        >
          <h1>Search on Hacker News</h1>
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            newsFeed={newsFeed}
            // setNewsFeed={setFiltered}
          />
          <br></br>
          {loading ? (
            <BallTriangle
              heigth="300"
              width="300"
              color="grey"
              ariaLabel="loading-indicator"
            />
          ) : (
            <NewsFeedContainer newsFeed={currentPosts} />
          )}
          <br></br>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={newsFeed.length}
            changePage={changePage}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        </Box>
      </Box>
    </Box>
  );
}
export default App;
