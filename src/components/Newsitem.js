import React, { Component } from "react";


export default class Newsitem extends Component {
  render() {
    let { mode, title, description, imageurl, newsurl } = this.props;
    console.log("mode", this.props.mode);

    return (
      <div>
        <div
          className="card my-3"
          style={{
            width: "18rem",
            color: mode === "Light" ? "white" : "black",
            background: mode === "Light" ? "black" : "white",
          }}
        >
          <img
            src={
              imageurl
                ? imageurl
                : "https://st1.latestly.com/wp-content/uploads/2021/11/gvegvesgvfegfvefgh8ucroprdgjubvrjurrrrrrrrrrrrrrrrrr20210828163839f20210828172_kFaYcUR-588x441.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsurl}
              className="btn btn-sm btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
