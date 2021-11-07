import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    let { mode, togglemode, NewsMonkey } = this.props;
    // console.log(this.props);
    let mystyle = { color: "white" };

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <label className="navbar-brand" style={mystyle} href="/">
              {NewsMonkey}
            </label>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" aria-current="page" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" aria-current="page" href="/home">Home</a></li>
                <li className="nav-item"><a className="nav-link" aria-current="page" href="/business">Business</a></li>
                <li className="nav-item"><a className="nav-link" aria-current="page" href="/entertainment">Entertainment</a></li>
                <li className="nav-item"><a className="nav-link" aria-current="page" href="/general">General</a></li>
                <li className="nav-item"><a className="nav-link" aria-current="page" href="/health">Health</a></li>
                <li className="nav-item"><a className="nav-link" aria-current="page" href="/science">Science</a></li>
                <li className="nav-item"><a className="nav-link" aria-current="page" href="/sports">Sports</a></li>
                <li className="nav-item"><a className="nav-link" aria-current="page" href="/technology">Technology</a></li>

  
              </ul>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={togglemode}
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label "
                  style={mystyle}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable {mode} Mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
