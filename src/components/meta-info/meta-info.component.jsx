import React from "react";

const MetaInfo = ({ title, url, by, time, descendants }) => (
  <div>
    <h4>
      <a href={url}>{title}</a>
    </h4>
    <p>
      by {by} on {time} with {descendants} comments
    </p>
  </div>
);

export default MetaInfo;
