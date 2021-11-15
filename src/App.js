import React, { Component } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "Light",
      NewsMonkey: "NEWSMONKEY",
      alert: null,
    };
  }

  //for api 
  api = process.env.REACT_APP_NEWS_API;

  //for loader:
  state = {
    progress: 0,
  };
  setProgress = (no) => {
    this.setState({ progress: no });
  };

  //for first later uppercase
  UP = (word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  };

  showAlert = async (message, type) => {
    this.setState({
      alert: {
        msg: message,
        type: type,
      },
    });

    // if we dont setup timeout for our warning , then is begin a bug.
    // we want to reslove this bug, then use this timeout
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };

  togglemode = async () => {
    if (this.state.mode === "Light") {
      this.setState({ mode: "Dark" });
      document.body.style.background = "black";
      document.body.style.color = "white";
      this.setState(this.showAlert("Enable Dark Mode", "success"));
    } else {
      this.setState({ mode: "Light" });
      document.body.style.background = "white";
      document.body.style.color = "black";
      this.setState(this.showAlert("Enable Light Mode", "success"));
    }
  };

  render() {
    return (
      // <div>
      //   <Navbar
      //     mode={this.state.mode}
      //     togglemode={this.togglemode}
      //     NewsMonkey={this.state.NewsMonkey}
      //   />
      //   <Alert mode={this.state.mode} alert={this.state.alert} />

      //   <News api={this.state.api} api={this.state.api} api={this.state.api}
      //     mode={this.state.mode}
      //     pageSize={20}
      //     country="in"
      //     category="sports"
      //   />
      // </div>

      <div>
        <Router>
          <Navbar
            setProgress={this.setProgress}
            mode={this.state.mode}
            togglemode={this.togglemode}
            NewsMonkey={this.state.NewsMonkey}
          />
          <LoadingBar
            color="#3aeb34"
            progress={this.state.progress}
            height="3px"
          />
          <Alert mode={this.state.mode} alert={this.state.alert} UP={this.UP} />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News api={this.api} a
                  setProgress={this.setProgress}
                  key="sports"
                  mode={this.state.mode}
                  pageSize={20}
                  country="in"
                  category="general"
                  UP={this.UP}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News api={this.api} 
                  setProgress={this.setProgress}
                  key="business"
                  mode={this.state.mode}
                  pageSize={20}
                  country="in"
                  category="business"
                  UP={this.UP}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News api={this.api}
                  setProgress={this.setProgress}
                  key="entertainment"
                  mode={this.state.mode}
                  pageSize={20}
                  country="in"
                  category="entertainment"
                  UP={this.UP}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News api={this.api} 
                  setProgress={this.setProgress}
                  key="health"
                  mode={this.state.mode}
                  pageSize={20}
                  country="in"
                  category="health"
                  UP={this.UP}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News api={this.api} 
                  setProgress={this.setProgress}
                  key="science"
                  mode={this.state.mode}
                  pageSize={20}
                  country="in"
                  category="science"
                  UP={this.UP}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News api={this.api} 
                  setProgress={this.setProgress}
                  key="sports"
                  mode={this.state.mode}
                  pageSize={20}
                  country="in"
                  category="sports"
                  UP={this.UP}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News api={this.api} 
                  setProgress={this.setProgress}
                  key="technology"
                  mode={this.state.mode}
                  pageSize={20}
                  country="in"
                  category="technology"
                  UP={this.UP}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
