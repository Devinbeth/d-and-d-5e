import React, {Component} from 'react';
import './nav2.css';

export default class Nav2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: props.nav1Selection,
            filteredList: props.nav1Selection
        }
        this.filterList = this.filterList.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            navList: nextProps.nav1Selection,
            filteredList: nextProps.nav1Selection
        });
    }

    filterList(search) {
        let arr = this.state.navList.filter(e => {
            return e.name.toLowerCase().includes(search.toLowerCase());
        });
        this.setState({filteredList: arr});
    }

    render() {

        let list = this.state.filteredList.map(e => <button key={e.id + e.url} onClick={() => this.props.nav2(e)}>{e.name}</button>);

        return (
            <div className="nav2">
                <h3>Search</h3>
                <input onChange={(e) => this.filterList(e.target.value)}/>
                {list}
            </div>
        )
    }
}