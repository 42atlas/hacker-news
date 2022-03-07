import React from "react";

function NewsFeedContainer({ newsFeed, setNewsFeed }) {
  if (!newsFeed) return <p>Loading...</p>;
  return (
    <ol>
      {newsFeed.map((element) => {
        return (
          <li key={element.objectID}>
            <a href={element.url}>
              <div>{element.title}</div>
            </a>
            <p style={{ fontSize: 12 }}>
              {element.created_at}{" "}
              {element.num_comments !== 0
                ? `|| comments: ${element.num_comments}`
                : null}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

export default NewsFeedContainer;
