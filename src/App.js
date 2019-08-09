import React from "react";

import "./App.css";
import NewsFeed from "./components/news-feed/news-feed.component";

function App() {
  return (
    <div className="App">
      <NewsFeed type="topstories" />
    </div>
  );
}

export default App;
