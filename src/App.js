import React, { Component } from 'react';
import axios from 'axios';
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
      selectedList: [],
      item: [],
      formattedItem: []
    }
    this.getNav1List = this.getNav1List.bind(this);
    this.getNav2List = this.getNav2List.bind(this);
  }

  componentDidMount() {
    //axios.get(`http://www.dnd5eapi.co/api/races`).then(res => this.setState({races: res.data.results}));
    axios.get(`http://www.dnd5eapi.co/api/classes`).then(res => this.setState({classes: res.data.results}));
    axios.get(`http://www.dnd5eapi.co/api/spells`).then(res => this.setState({spells: res.data.results}));
    axios.get(`http://www.dnd5eapi.co/api/equipment`).then(res => this.setState({equipment: res.data.results}));

    axios.get(`http://www.dnd5eapi.co/api/equipment/1`).then(res => console.log(JSON.stringify(res.data.equipment_category)));

    for (let i = 1; i <= 9; i++) {
      axios.get(`http://www.dnd5eapi.co/api/races/${i}`).then(res => {
        let arr = Object.assign(this.state.races);
        arr.push(res.data);
        this.setState({races: arr});
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

  getNav1List(selection) {
    if(selection === 'races'){
      this.setState({selectedList: this.state.races});
    }
    if(selection === 'classes'){
      this.setState({selectedList: this.state.classes});
    }
    if(selection === 'spells'){
      this.setState({selectedList: this.state.spells});
    }
    if(selection === 'weapons'){
      this.setState({selectedList: this.state.weapons});
    }
    if(selection === 'armor'){
      this.setState({selectedList: this.state.armor});
    }
    if(selection === 'equipment'){
      this.setState({selectedList: this.state.equipment});
    }
  }

  getNav2List(url) {
    axios.get(url).then(res => {
      let arr = [];
      arr.push(res.data);
      this.setState({item: arr});
    });
    let arr1 = [];
    for (let key in this.state.item) {
      arr1.push(<div><h3>{`${key}: `}</h3><p>{this.state.item.key}</p></div>);
    }
    this.setState({formattedItem: arr1});
  }

  render() {
    return (
      <div className="App">
        <Nav1 getNav1List={this.getNav1List}/>
        <Nav2 getNav2List={this.getNav2List} list={this.state.selectedList}/>
        <Body item={this.state.formattedItem}/>
        <Footer />
      </div>
    );
  }
}
