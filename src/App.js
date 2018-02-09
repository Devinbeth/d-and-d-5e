import React, { Component } from 'react';
import axios from 'axios';
import Nav1 from "./components/Nav1.js";
import Nav2 from "./components/Nav2.js";
import Footer from "./components/Footer.js";
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      races: [],
      classes: [],
      weapons: [],
      armor: [],
      spells: [],
      selectedList: []
    }
    this.getNav1List = this.getNav1List.bind(this);
    this.getNav2List = this.getNav2List.bind(this);
  }

  componentDidMount() {
    axios.get(`http://www.dnd5eapi.co/api/races`).then(res => this.setState({races: res.data.results}));
    axios.get(`http://www.dnd5eapi.co/api/classes`).then(res => this.setState({classes: res.data.results}));
    axios.get(`http://www.dnd5eapi.co/api/spells`).then(res => this.setState({spells: res.data.results}));
    axios.get(`http://www.dnd5eapi.co/api/equipment`).then(res => this.setState({equipment: res.data.results}));
    
  }

  getNav1List(selection) {
    if(selection === 'races'){
      this.setState({selectedList: this.state.races});
    }
    if(selection === 'classes'){
      this.setState({selectedList: this.state.classes});
    }
    if(selection === 'equipment'){
      this.setState({selectedList: this.state.equipment});
    }
    if(selection === 'spells'){
      this.setState({selectedList: this.state.spells});
    }
  }

  getNav2List(url) {

  }

  render() {
    return (
      <div className="App">
        <Nav1 getNav1List={this.getNav1List}/>
        <Nav2 getNav2List={this.getNav2List} selection={this.state.selectedList}/>

        <Footer />
        <div className="container">
          {JSON.stringify(this.state.equipment)}
        </div>
      </div>
    );
  }
}
