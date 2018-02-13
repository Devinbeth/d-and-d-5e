import React, {Component} from 'react';
import './nav2.css';

export default class Nav2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullList: props.navList,
            filteredList: props.navList
        }
        this.filterList = this.filterList.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            fullList: nextProps.navList,
            filteredList: nextProps.navList
        });
    }

    filterList(search) {
        let filteredList = this.state.fullList.filter(e => {
            return e.name.toLowerCase().includes(search.toLowerCase());
        });
        this.setState({filteredList});
    }

    render() {
        
        let buttonList = [];
        if (!this.props.new) {
            buttonList = this.state.filteredList.map(e => <button key={e._id} onClick={() => this.props.nav2(e._id)}>{e.name}</button>);
        }
        
        return (
            <div className="nav2">
                <h3>Search</h3>
                <input onChange={(e) => this.filterList(e.target.value)}/>
                {buttonList}
            </div>
        )
    }
}