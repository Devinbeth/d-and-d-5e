import React, {Component} from 'react';
import './body.css';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.nav1Selection,
            info: props.nav2Selection
        }
        this.infoFilter = this.infoFilter.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            category: props.nav1Selection,
            info: props.nav2Selection
        });
    }

    infoFilter() {
        if (this.state.info.name) {
            if (this.state.category === 'races') {
                let languageArray = [];
                for (let i = 0; i < this.state.info.languages.length; i++){
                    languageArray.push(this.state.info.languages[i].name);
                }
                let traitArray = [];
                for (let i = 0; i < this.state.info.traits.length; i++){
                    traitArray.push(this.state.info.traits[i].name);
                }
                let subraceArray = [];
                for (let i = 0; i < this.state.info.subraces.length; i++){
                    subraceArray.push(this.state.info.subraces[i].name);
                }
                let abilitiesArray = [{Strength: `+${this.state.info.ability_bonuses[0]}`},{Dexterity: `+${this.state.info.ability_bonuses[1]}`},{Constitution: `+${this.state.info.ability_bonuses[2]}`},{Intelligence: `+${this.state.info.ability_bonuses[3]}`},{Wisdom: `+${this.state.info.ability_bonuses[4]}`},{Charisma: `+${this.state.info.ability_bonuses[5]}`}];
                return (
                    <div>
                        <h4>{`Speed: ${this.state.info.speed}`}</h4>
                        <h4>{`Size: ${this.state.info.size}`}</h4>
                        <h4>{`${this.state.info.size_description}`}</h4>
                        <h4>{`Age: ${this.state.info.age}`}</h4>
                        <h4>{`Languages: ${JSON.stringify(languageArray)}`}</h4>
                        <h4>{`${this.state.info.language_desc}`}</h4>
                        <h4>{`Traits: ${JSON.stringify(traitArray)}`}</h4>
                        <h4>{`Alignment: ${this.state.info.alignment}`}</h4>
                        <h4>{`Subraces: ${JSON.stringify(subraceArray)}`}</h4>
                        <h4>{`Ability Modifiers: ${JSON.stringify(abilitiesArray)}`}</h4>
                    </div>
                );
            }
        }
    }

    render() {

        return (
            <div className="body">
                <h1>{this.state.info.name}</h1>
                {this.infoFilter()}
            </div>
        );
    }
}