import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export default class News extends Component {

  static defaultProps = {
    country: "in", 
    pageSize : 20,
    category: "general"
  }

  PropTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  // articles = [
  //   {
  //     source: {
  //       id: "bbc-sport",
  //       name: "BBC Sport",
  //     },
  //     author: "BBC Sport",
  //     title: "Australian cricket mourns loss of greats",
  //     description:
  //       "Australian cricket is mourning the loss of Test greats Alan Davidson and Ashley Mallett.",
  //     url: "http://www.bbc.co.uk/sport/cricket/59101079",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/14B6F/production/_121274848_bodyleaguepic.png",
  //     publishedAt: "2021-10-30T21:22:46.6576745Z",
  //     content:
  //       "Alan Davidson played 44 Tests for Australia and was widely regarded as the worlds best left-arm fast bowler of his era\r\nAustralian cricket is mourning the deaths of Test greats Alan Davidson and Ashl… [+1954 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     description:
  //       "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     publishedAt: "2020-04-27T11:41:47Z",
  //     content:
  //       "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     description:
  //       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     publishedAt: "2020-03-30T15:26:05Z",
  //     content:
  //       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  //   },
  // ]

  // construtor run first & execute beacause he called in app.js, after that remaining fuctions execute

  constructor() {
    super();
    // console.log(
    //   "Hello, i am constructer from news item, this line executed when current/news class is called in another class"
    // );

    this.state = {
      // articles: this.articles,
      articles: [], //article not exists so we write normal list
      loading: false,
      page: 1,
      totalResults: 38,
    };
  }

  // componentDidMount run after randering
  async componentDidMount() {
    // console.log("coponentDidMount run after randering");
    // console.log(this.props.pageSize)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac342991e9e74c5fa8485d455c279937&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles, loading: false });
  }

  handlePrevClick = async () => {
    // console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac342991e9e74c5fa8485d455c279937&page=${this.state.page - 1
    }&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      // console.log(parsedData);
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
      // console.log("Next");
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac342991e9e74c5fa8485d455c279937&page=${
        this.state.page + 1
      }&pageSize=${this.state.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        // console.log(parsedData);
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    let { mode } = this.props;
    // console.log(mode);
    // console.log("randering jsx")
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
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
