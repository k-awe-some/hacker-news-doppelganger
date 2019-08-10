import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import NewsFeed from "./components/news-feed/news-feed.component";
import User from "./components/user/user.component";
import Post from "./components/post/post.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={() => <NewsFeed type="topstories" />} />
        <Route path="/user" component={User} />
        <Route path="/post" component={Post} />
      </div>
    </Router>
  );
}

export default App;
