import React, {Component} from 'react';
import './body.css';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.category,
            array: [],
            index: props.index,
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
            category: nextProps.category,
            array: nextProps.arr,
            index: nextProps.index
        });
    }

    add() {
        let obj = {
            name: this.state.race,
            speed: this.state.speed,
            size: this.state.size,
            size_description: this.state.size_description,
            age: this.state.age,
            language_desc: this.state.language_desc,
            alignment: this.state.alignment,
        };
        this.props.add(obj);
    }

    edit() {
        let change = {name: this.state.editInput};
        this.props.edit(this.state.array[this.state.index]._id, change);
    }

    infoFilter() {
        if (this.state.category === 'races' && this.state.array.length > 0) {
            return (
                <div>
                    <h1>{this.state.array[this.state.index].name}</h1>
                    <h4>{`Speed: ${this.state.array[this.state.index].speed}`}</h4>
                    <h4>{`Size: ${this.state.array[this.state.index].size}`}</h4>
                    <h4>{`Languages: ${this.state.array[this.state.index].size_description}`}</h4>
                    <h4>{`Age: ${this.state.array[this.state.index].age}`}</h4>
                    <h4>{`${this.state.array[this.state.index].language_desc}`}</h4>
                    <h4>{`Alignment: ${this.state.array[this.state.index].alignment}`}</h4>
                    <button onClick={() => this.props.remove(this.state.array[this.state.index]._id)}>Delete</button>
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
                    <h4>Languages: <input onChange={(e) => this.setState({language_desc: e.target.value})}/></h4>
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
                <p>{JSON.stringify(this.state.array[this.state.index])}</p>
            </div>
        );
    }
}