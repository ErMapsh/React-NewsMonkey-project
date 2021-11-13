import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 20,
    category: "general",
  };

  PropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      // articles: this.articles,
      articles: [], //article not exists so we write normal list
      loading: false,
      page: 1,
      totalResults: 38,
    };
    document.title = `NewsMonkey - ${this.props.UP(this.props.category === "general"?"home":this.props.category)}`;
  }

  // componentDidMount run after randering
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac342991e9e74c5fa8485d455c279937&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, loading: false });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=ac342991e9e74c5fa8485d455c279937&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=ac342991e9e74c5fa8485d455c279937&page=${
        this.state.page + 1
      }&pageSize=${this.state.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    let { mode } = this.props;
    return (
      <div className="container my-3">
        <h1 className="text-center">{`NewsMonkey - Top ${this.props.UP(
          this.props.category
        )} Headlines`}</h1>
        {this.state.loading && <Spinner />}
        <div className="row centering">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="container col-md-4 " key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    // title={element.title ? element.title.slice(0, 35) : ""}
                    // description= {element.description ? element.description.slice(0, 70) : ""}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    mode={mode}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className={`btn btn-${
              this.props.mode === "Light" ? "dark" : "primary"
            } m-3`}
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className={`btn btn-${
              this.props.mode === "Light" ? "dark" : "primary"
            } m-3`}
            onClick={this.handleNextClick}
          >
            {" "}
            &rarr; Next
          </button>
        </div>
      </div>
    );
  }
}
