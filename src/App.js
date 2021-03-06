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
      monsters: [],
      new: false,
      nav1Selection: 'races',
      nav2Selection: 0
    }
    this.nav1 = this.nav1.bind(this);
    this.nav2 = this.nav2.bind(this);
    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    axios.get('/api/').then(res => this.setState(res.data));
  }

  nav1(selection) {
    if (selection === 'new') {
      this.setState({
        nav1Selection: selection,
        new: true
      });
    }
    else {
      this.setState({
        nav1Selection: selection,
        new: false
      });
    }
  }

  nav2(id) {
    let index = this.state[this.state.nav1Selection].findIndex((e) => e._id === id);
    this.setState({nav2Selection: index});
  }

  add(obj) {
    axios.post('/api/', obj).then(res => this.setState({
      races: res.data,
      nav1Selection: 'races',
      nav2Selection: 0
    }));
    alert(`Race has been successfully added!`);
}

  edit(id, change) {
    axios.put(`/api/${id}`, change).then(res => this.setState({races: res.data}));
    this.setState({
      nav1Selection: 'races',
      nav2Selection: this.state.races.findIndex((e) => e._id === id)
    });
    //let index = this.state.races.findIndex((e) => e._id === id);
    alert(`Race name has been successfully edited!`);
  }

  remove(id) {
    axios.delete(`/api/${id}`).then(res => this.setState({races: res.data}));
    this.setState({
      nav1Selection: 'races',
      nav2Selection: 0
    });
    //let index = this.state.races.findIndex((e) => e._id === id);
    alert(`Race has been successfully deleted!`);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav1 nav1={this.nav1}/>
        <Nav2 nav2={this.nav2} navList={this.state[this.state.nav1Selection]} new={this.state.new}/>
        <Body category={this.state.nav1Selection} arr={this.state[this.state.nav1Selection]} index={this.state.nav2Selection} add={this.add} edit={this.edit} remove={this.remove}/>
        <Footer />
      </div>
    );
  }
}
