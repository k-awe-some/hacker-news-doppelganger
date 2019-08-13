import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import NavBar from "./components/nav-bar/nav-bar.component";
import Loading from "./components/loading/loading.component";
import { ThemeProvider } from "./utils/contexts/theme";

const NewsFeed = React.lazy(() =>
  import("./components/news-feed/news-feed.component")
);
const User = React.lazy(() => import("./components/user/user.component"));
const Post = React.lazy(() => import("./components/post/post.component"));

class App extends React.Component {
  state = {
    theme: "light",
    toggleTheme: () =>
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light"
      }))
  };

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="App">
              <NavBar />
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <NewsFeed type="topstories" />}
                  />
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
                      <h1>
                        This page does not exist. Please enter a valid URL.
                      </h1>
                    )}
                  />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
