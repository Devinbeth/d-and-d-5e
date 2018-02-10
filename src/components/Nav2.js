import React, {Component} from 'react';
import './nav2.css';

export default class Nav2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: props.list,
            filteredList: props.list
        }
        this.updateNavList = this.updateNavList.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            navList: nextProps.list,
            filteredList: nextProps.list
        });
    }

    updateNavList(search) {
        let arr = this.state.navList.filter(e => {
            return e.name.toLowerCase().includes(search.toLowerCase());
        });
        this.setState({filteredList: arr});
    }

    render() {

        let list = this.state.filteredList.map(e => {
            return <button key={e.url} onClick={() => this.props.getNav2List(e.url)}>{e.name}</button>;
        });

        return (
            <div className="nav2">
                <h3>Search</h3>
                <input onChange={(e) => this.updateNavList(e.target.value)}/>
                {list}
            </div>
        )
    }
}