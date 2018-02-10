import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header.js';
import Nav1 from './components/Nav1.js';
import Nav2 from './components/Nav2.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      races: [],
      classes: [],
      spells: [],
      weapons: [],
      armor: [],
      equipment: [],
      nav1Selection: 'races',
      nav2Selection: []
    }
    this.nav1 = this.nav1.bind(this);
    this.nav2 = this.nav2.bind(this);
  }

  componentDidMount() {

    axios.get(`http://www.dnd5eapi.co/api/equipment`).then(res => this.setState({equipment: res.data.results}));

    for (let i = 1; i <= 9; i++) {
      axios.get(`http://www.dnd5eapi.co/api/races/${i}`).then(res => {
        let arr = Object.assign(this.state.races);
        arr.push(res.data);
        this.setState({races: arr});
      });
    }

    for (let i = 1; i <= 12; i++) {
      axios.get(`http://www.dnd5eapi.co/api/classes/${i}`).then(res => {
        let arr = Object.assign(this.state.classes);
        arr.push(res.data);
        this.setState({classes: arr});
      });
    }

    for (let i = 1; i <= 305; i++) {
      axios.get(`http://www.dnd5eapi.co/api/spells/${i}`).then(res => {
        let arr = Object.assign(this.state.spells);
        arr.push(res.data);
        this.setState({spells: arr});
      });
    }

    for (let i = 1; i <= 256; i++) {
      axios.get(`http://www.dnd5eapi.co/api/equipment/${i}`).then(res => {
        if(res.data.equipment_category === "Weapon"){
          let arr = Object.assign(this.state.weapons);
          arr.push(res.data);
          this.setState({weapons: arr});
        }
        if(res.data.equipment_category === "Armor"){
          let arr = Object.assign(this.state.armor);
          arr.push(res.data);
          this.setState({armor: arr});
        }
      });
    }
  }

  nav1(selection) {
    this.setState({nav1Selection: selection});
  }

  nav2(selection) {
    this.setState({nav2Selection: selection});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav1 nav1={this.nav1}/>
        <Nav2 nav2={this.nav2} nav1Selection={this.state[this.state.nav1Selection]}/>
        <Body nav1Selection={this.state.nav1Selection} nav2Selection={this.state.nav2Selection}/>
        <Footer />
      </div>
    );
  }
}
