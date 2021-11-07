import React, { Component } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "Light",
      NewsMonkey: "NEWSMONKEY",
      alert: null,
    };
  }
  //for first later uppercase
  UP = (word)=>{
    return word.slice(0,1).toUpperCase()+word.slice(1);
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
      // <div>
      //   <Navbar
      //     mode={this.state.mode}
      //     togglemode={this.togglemode}
      //     NewsMonkey={this.state.NewsMonkey}
      //   />
      //   <Alert mode={this.state.mode} alert={this.state.alert} />
      
      //   <News
      //     mode={this.state.mode}
      //     pageSize={20}
      //     country="in"
      //     category="sports"
      //   />
      // </div>
      
      <div>
        <Router>
          <Navbar
            mode={this.state.mode}
            togglemode={this.togglemode}
            NewsMonkey={this.state.NewsMonkey}
          />
          <Alert mode={this.state.mode} alert={this.state.alert} UP={this.UP}/>

          <Routes>
            <Route exact path="/" element ={<News key="sports" mode={this.state.mode} pageSize={20} country="in" category="general" UP={this.UP}/>} />
            <Route exact path="/business" element ={<News key="business" mode={this.state.mode} pageSize={20} country="in"category="business" UP={this.UP}/>} />
            <Route exact path="/entertainment" element ={<News key="entertainment" mode={this.state.mode} pageSize={20} country="in"category="entertainment" UP={this.UP}/>} />
            <Route exact path="/health" element ={<News key="health" mode={this.state.mode} pageSize={20} country="in"category="health" UP={this.UP}/>} />
            <Route exact path="/science" element ={<News key="science" mode={this.state.mode} pageSize={20} country="in"category="science" UP={this.UP}/>} />
            <Route exact path="/sports" element ={<News key="sports" mode={this.state.mode} pageSize={20} country="in"category="sports" UP={this.UP}/>} />
            <Route exact path="/technology" element ={<News key="technology" mode={this.state.mode} pageSize={20} country="in"category="technology" UP={this.UP}/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}
