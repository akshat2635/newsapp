import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
export class Navbar extends Component {
  constructor(){
    super();
    this.state ={
      current:'/in'
    }
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">NewsBite</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li><Link className="nav-link " to={`${this.state.current}/business`}>Business</Link></li>
                <li><Link className="nav-link " to={`${this.state.current}/entertainment`}>Entertainment</Link></li>
                <li><Link className="nav-link " to={`${this.state.current}/general`}>General</Link></li>
                <li><Link className="nav-link " to={`${this.state.current}/health`}>Health</Link></li>
                <li><Link className="nav-link " to={`${this.state.current}/science`}>Science</Link></li>
                <li><Link className="nav-link " to={`${this.state.current}/sports`}>Sports</Link></li>
                <li><Link className="nav-link " to={`${this.state.current}/technology`}>Technology</Link></li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Region
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to='/in' onClick={(e)=>{this.setState({current:'/in'})}}>India</Link></li>
                  <li><Link className="dropdown-item" to='/us' onClick={(e)=>{this.setState({current:'/us'})}}>US</Link></li>
                  <li><Link className="dropdown-item" to='/jp' onClick={(e)=>{this.setState({current:'/jp'})}}>Japan</Link></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
      </>
    )
  }
}

export default Navbar
