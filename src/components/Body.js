import React, {Component} from 'react';
import './body.css';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.nav1Selection,
            info: props.nav2Selection,
            race: '',
            speed: 30,
            size: '',
            size_description: '',
            age: '',
            language_desc: '',
            alignment: '',
            editInput: ''
        }
        this.infoFilter = this.infoFilter.bind(this);
        this.add = this.add.bind(this);
        this.edit = this.edit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            category: nextProps.nav1Selection,
            info: nextProps.nav2Selection,
        });
    }

    add() {
        this.props.add({
            name: this.state.race,
            speed: this.state.speed,
            size: this.state.size,
            size_description: this.state.size_description,
            age: this.state.age,
            languages: this.state.languages,
            language_desc: this.state.language_desc,
            traits: this.state.traits,
            alignment: this.state.alignment,
            subraces: this.state.subraces,
            ability_bonuses: this.state.ability_bonuses,
        });
    }

    edit() {
        let change = {name: this.state.editInput};
        this.props.edit(this.state.info._id, change);
    }

    infoFilter() {
        if (this.state.category === 'races') {
            return (
                <div>
                    <h1>{this.state.info.name}</h1>
                    <h4>{`Speed: ${this.state.info.speed}`}</h4>
                    <h4>{`Size: ${this.state.info.size}`}</h4>
                    <h4>{`${this.state.info.size_description}`}</h4>
                    <h4>{`Age: ${this.state.info.age}`}</h4>
                    <h4>{`${this.state.info.language_desc}`}</h4>
                    <h4>{`Alignment: ${this.state.info.alignment}`}</h4>
                    <button onClick={() => this.props.remove(this.state.info._id)}>Delete</button>
                </div>
            );
        }
        if (this.state.category === 'new') {
            return (
                <div>
                    <h1>Add New Race</h1>
                    <h4>Race: <input onChange={(e) => this.setState({race: e.target.value})}/></h4>
                    <h4>Speed: <input onChange={(e) => this.setState({speed: e.target.value})}/></h4>
                    <h4>Size: <input onChange={(e) => this.setState({size: e.target.value})}/></h4>
                    <h4>Size Description: <input onChange={(e) => this.setState({size_description: e.target.value})}/></h4>
                    <h4>Age: <input onChange={(e) => this.setState({age: e.target.value})}/></h4>
                    <h4>Language Description: <input onChange={(e) => this.setState({language_desc: e.target.value})}/></h4>
                    <h4>Alignment: <input onChange={(e) => this.setState({alignment: e.target.value})}/></h4>
                    <button onClick={() => this.add()}>Add</button>
                </div>
            );
        }
    }

    render() {

        return (
            <div className="body">
                {this.infoFilter()}
                <h4>Edit Race Name: <input onChange={(e) => this.setState({editInput: e.target.value})}/></h4>
                <button onClick={() => this.edit()}>Edit</button>
                <p>{JSON.stringify(this.state.info)}</p>
            </div>
        );
    }
}