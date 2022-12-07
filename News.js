import React, { Component } from 'react'
import Loading from './Loading';
import Newsitem from './Newsitem'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&&category=${this.props.category}apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })
  }
  handlePrevClick = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }
  async updateNews() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    this.props.setProgress(30)
    let data = await fetch(url);
    this.props.setProgress(50)
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false, category: parsedData.category })
    this.props.setProgress(100)
  }
  fetchMoreData = async () => {
   
    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false, category: parsedData.category })
  }
  async componentDidMount() {
    this.updateNews();
  }
  render() {
    return (
      <>
        <h3 className="my-3" align="center">HeadLines</h3>
        {/* {this.state.loading  &&  <Loading></Loading>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading></Loading>}>
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4" align="center" key={element.url}>
                  {<Newsitem title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""} imageUrl={element.urlToImage}
                    newsUrl={element.url} publishedAt={element.publishedAt} author={element.author ? element.author : "Unknown"} source={element.source.name}></Newsitem>}
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className='container  d-flex justify-content-around' style={{position:"absolute",marginBottom:"10px"}}>
          <button  disabled={this.state.page <= 1} className='btn-secondary' onClick={this.handlePrevClick}>Previous</button>
          <button  disabled={(this.state.page) + 1 > Math.ceil((this.state.totalResults)/(this.props.pageSize))} className='btn-secondary' type="button" onClick={this.handleNextClick}>Next</button>
        </div> */}
      </>
    )
  }
}

export default News
