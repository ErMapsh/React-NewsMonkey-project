import React, { Component } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "Light",
      NewsMonkey: "NEWSMONKEY",
      alert: null,
    };
  }

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
      <div>
          <Router>
          <Navbar
            mode={this.state.mode}
            togglemode={this.togglemode}
            NewsMonkey={this.state.NewsMonkey}
          />
          <Alert mode={this.state.mode} alert={this.state.alert} />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <News
                mode={this.state.mode}
                pageSize={20}
                country="in"
                category="sports"
              />
            </Route>

            <Route exact path="/">
              <News
                mode={this.state.mode}
                pageSize={20}
                country="in"
                category="business"
              />
            </Route>
          </Switch>
      </Router>
      </div>

    );
  }
}
