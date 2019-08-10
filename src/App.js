import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import NewsFeed from "./components/news-feed/news-feed.component";
import User from "./components/user/user.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={() => <NewsFeed type="topstories" />} />
        <Route path="/user" component={User} />
      </div>
    </Router>
  );
}

export default App;
