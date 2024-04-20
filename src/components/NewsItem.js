import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,url,urlToImage,pubat,auth}=this.props
    return (
        <div className=" mx-2 card h-100">
          <img src={urlToImage} className="card-img-top imgcd" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            {auth && <p className="card-text"><small className="text-muted my-1 mx-1">By: {auth}</small></p>}
            <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary my-2">Read More</a>
          </div>
            <div className="card-footer "><small className="text-muted ">Published On: {new Date(pubat).toGMTString().slice(0,-7)} </small></div>
        </div>
    )
  }
}

export default NewsItem
