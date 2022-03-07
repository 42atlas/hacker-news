import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

import Typography from "@mui/material/Typography";

function NewsFeedContainer({ newsFeed, setNewsFeed }) {
  if (!newsFeed) return <p>No News</p>;
  return (
    <List sx={{ width: "100%" }}>
      {newsFeed.map((element) => {
        return (
          <ListItem
            alignItems="flex-start"
            key={element.objectID}
            component="a"
            href={element.url}
            target="_blank"
          >
            <ListItemText
              primary={element.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {`Created at: ${element.created_at}`}
                  </Typography>
                  <br></br>
                  {element.num_comments !== 0
                    ? `Comments: ${element.num_comments}`
                    : null}
                </React.Fragment>
              }
            />

            {/* a href={element.url}>
              <div>{element.title}</div>
            </a>
            <p style={{ fontSize: 12 }}>
              {element.created_at}{" "}
              {element.num_comments !== 0
                ? `|| comments: ${element.num_comments}`
                : null}

            </p> */}
          </ListItem>

        );
      })}
    </List>
  );
}

export default NewsFeedContainer;
