import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import NavBar from "./components/nav-bar/nav-bar.component";
import NewsFeed from "./components/news-feed/news-feed.component";
import User from "./components/user/user.component";
import Post from "./components/post/post.component";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <NewsFeed type="topstories" />} />
          <Route
            exact
            path="/new"
            render={() => <NewsFeed type="newstories" />}
          />
          <Route
            exact
            path="/best"
            render={() => <NewsFeed type="beststories" />}
          />
          <Route path="/user" component={User} />
          <Route path="/post" component={Post} />
          <Route
            render={() => (
              <h1>This page does not exist. Please enter a valid URL.</h1>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
