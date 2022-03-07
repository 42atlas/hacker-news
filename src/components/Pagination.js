import React from "react";
import { Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const Buttonx = styled(Button)({
  "&:hover": {
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const Pagination = ({
  postsPerPage,
  totalPosts,
  changePage,
  previousPage,
  nextPage,
}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <nav>

      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2.5}
      >
        <Buttonx onClick={() => previousPage()}>Prev</Buttonx>
        {pages.map((page) => (
          <Buttonx key={page} onClick={() => changePage(page)}>
            {page}
          </Buttonx>
        ))}
        <Buttonx onClick={() => nextPage(pages.length)}>Next</Buttonx>
      </Stack>

    </nav>
  );
};
export default Pagination;
