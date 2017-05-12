import React, {Component} from 'react';

class SearchBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: this.props.value};
    }
    render() {
        return (
            <form onSubmit={this.props.onSearchSubmit} className="search-wrapper cf">
                <input
                    type="text"
                    placeholder="Search"
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
                <button><span className="fontawesome-search"></span>
                </button>
            </form>
        );
    }
}

export default SearchBarComponent;
