
import './App.css';

import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey=process.env.REACT_APP_API_KEY
  state={
    progress:0,
  }
  setProgress=(progress)=>{
      this.setState({progress:progress})
  }
  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar></Navbar>
            <LoadingBar color='#f11946' height={2} progress={this.state.progress}/>
            <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="all" pageSize={6} category="all" />}></Route>
              <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={6} category="business" />}></Route>
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={6} category="entertainment" />}></Route>
              <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} category="general" />}></Route>
              <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={6} category="health" />}></Route>
              <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={6} category="science" />}></Route>
              <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={6} category="sports" />}></Route>
              <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="techonology" pageSize={6} category="technology" />}></Route>
            </Routes>
          </Router>
        </div>
      </>
    )
  }
}
