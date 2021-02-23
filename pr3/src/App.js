//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

import Tablist from './Components/Tablist'
import Body from './Components/Body'
class App extends Component {
  constructor(){
    super();
    this.state = {
      activetab: 1
    };
    this.changetab = (id) =>{
      this.setState({
        activetab: id
      });
    }


    this.onScrollHandler = this.onScrollHandler.bind(this);
    this.scroll = this.scroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);

  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandler);
  }
  onScrollHandler(event) {
    this.scroll();
  }

  scroll() {
    var scrollBtn = document.getElementById("backBtn");
    var height = window.innerHeight / 4;

    if(document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        scrollBtn.style.display = "block";
    }
    else {
        scrollBtn.style.display = "none";
    }
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this.scroll();
  }
    
  


  render(){
    const tabs=[
    {
      id: 1,
      title:"Text"
    },
    {
      id: 2,
      title:"Image"
    },
    {
      id: 3,
      title:"Video"
    },
    {
      id: 4,
      title:"Table"
    },
    {
      id: 5,
      title:"Email"
    }
  ]
  

  return (
    <div >
        
        <div className="navbar">
          <Tablist tabs={tabs}
          activetab={this.state.activetab}
          ctab={this.changetab}/>
        </div>
        <div class="main-body">
          <Body activetab={this.state.activetab}/>
        </div>
        <button id="backBtn" onClick={this.scrollToTop}>Back to Top</button>
      </div>
  )
  }
}

export default App;
