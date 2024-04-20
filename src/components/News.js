import React, { Component } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
// import {
//   Outlet
// } from "react-router-dom";
export class News extends Component {
  static defaultProps={
    country:"in",
    pages:8,
    category:""
  }
  constructor(){
    super();
    this.state={
      articles: [],
      page:1,
      tot:100,
      loading:true
    }
  }
  // let {pageSize}=this.props;
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=605318e7f48b4c27971fad8466ca677e&pageSize=${this.props.pages}`
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedData=await data.json();
    this.setState({articles: parsedData.articles ,tot:parsedData.totalResults, page:1});
    // console.log(this.state);
  }
  handlen= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=605318e7f48b4c27971fad8466ca677e&pageSize=${this.props.pages}&page=${this.state.page+1}`
    // this.setState({loading:true})
    let data= await fetch(url);
    let parsedData=await data.json();
    this.setState({articles: this.state.articles.concat( parsedData.articles) , page:this.state.page+1,tot:this.state.tot, loading:false});
    console.log(this.state.tot);
  }
  // handlep= async()=>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a8dbb1f87924563a2014e29ac801acb&pageSize=${this.props.pages}&page=${this.state.page-1}`
  //   this.setState({loading:true})
  //   let data= await fetch(url);
  //   let parsedData=await data.json();
  //   this.setState({articles: this.state.articles.concat( parsedData.articles), page:this.state.page-1,tot:this.state.tot,loading:false});
  // }
  render() {
    return (
      <div className='my-3'>
        {console.log(this.props.country)}
        <h1 className='text-center toph'>News_Bite Top Headlines</h1>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
        dataLength={this.state.articles.length} //This is important field to render the next data
        next={this.handlen}
        hasMore={this.state.articles.length!==this.state.tot}
        loader={<Spinner/>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>That's It for Headlines</b>
          </p>
        }>
        <div className="row mx-5">
          { this.state.articles.map((i)=>{
            if(i.urlToImage && i.url){
              return(
                <div className="col-md-3 my-5" key={i.url}> 
                  <NewsItem title={i.title} description={i.description?i.description.slice(0,100):""} url={i.url} auth={i.author} pubat={i.publishedAt?i.publishedAt:""} urlToImage={i.urlToImage?i.urlToImage:"https://www.hindustantimes.com/ht-img/img/2023/05/11/550x309/breaking_news_1683766958384_1683766959113.jpeg  "} />
                </div>
              )
            }else{
              return "";
            }
          })}
        </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between mx-5 my-3">
          <button disabled={this.state.page===1} type="button" className="btn btn-primary" onClick={this.handlep}>Previous</button>
          <button disabled={Math.ceil(this.state.tot/this.props.pages)===this.state.page} type="button" className="btn btn-primary" onClick={this.handlen}>Next</button>
        </div> */}
      </div>
    )
  }
}

export default News
