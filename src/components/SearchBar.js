import React from "react";
import { Box, TextField } from "@mui/material";


/* import SendIcon from "@mui/icons-material/Send";

import LoadingButton from "@mui/lab/LoadingButton"; */

export default function SearchBar({
  searchInput,
  setSearchInput,
  newsFeed,
  setNewsFeed,
}) {
  const handleSubmit = (e) => {
    // const filteredData = newsFeed.filter((item) => {


    //   if (item.title !== '' && item.title !== null){
    //     if (item.title.toLowerCase().includes(searchInput.toLowerCase()))
    //     {
    //       return item;
    //     }
    //   }else if (searchInput === ''){
    //     return item;

    //   }
    // })
    // setNewsFeed(filteredData);
    e.preventDefault();
  };

  const handleChange = ({ target }) => {
    // if (setSearchInput(target.value) === null) {
    //   return (
    //     <div>
    //       <p>error</p>
    //     </div>
    //   );
    // } else {
    return setSearchInput(target.value);
    // }

  };

  /*   const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  } */

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          width: "500px",
        }}
      >
        <TextField
          fullWidth
          label="Search"
          id="fullWidth"
          type="search"
          value={searchInput}
          onChange={handleChange}

        ></TextField>

        {/*       <LoadingButton
          type="submit"
          name="submit"
          onClick={handleClick}
          onChange={handleChange}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="center"
          variant="contained"
          style={{
            paddingRight: "26px",
          }}
        ></LoadingButton> */}
      </Box>
    </form>

  );
}
