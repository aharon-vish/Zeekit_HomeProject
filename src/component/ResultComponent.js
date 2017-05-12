import React, {Component} from 'react';
import Search from '../container/SerchBarContainer';
import TagManger from '../container/TagMangerContainer';
import Grid from './common/GridComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchMovie, clearState} from '../actions/index';

class ReasultComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: this.props.charTerm,
            year: null,
            type: null
        };

        this.onSearchChange = this.onSearchChange.bind(this);
        this.resetSearch = this.resetSearch.bind(this);
        this.filterChange = this.filterChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);

    }

    componentWillMount() {
        this.props.fetchMovie(this.state.search);
    }

    onSearchSubmit(event) {
        event.preventDefault();
        this.props.fetchMovie(this.state.search);
    }

    filterChange(e) {
        const filter = e.target.getAttribute('data-filter-type');
        const value = e.target.value;
        switch (filter) {
            case 'year':
                this.setState({year: value});
                this.props.fetchMovie(this.state.search,'y',value);
                break;
            case 'type':
                this.setState({type: value});
                this.props.fetchMovie(this.state.search,'type',value);
                break;
            default:
                console.log('error');
        }
    }

    resetSearch() {
        this.setState({search: ''});
    }

    onSearchChange(event) {
        this.setState({search: event.target.value});
    }

    renderMovie(movie) {
        if (movie[0]) {
            return <Grid styles={styles}
                         items={movie[0].Search}
            />
        }
    }

    render() {
        return (
            <div className="resultStyle" style={this.props.styles}>
                <Search value={this.state.search} onChange={this.onSearchChange} onSearchSubmit={this.onSearchSubmit}/>
                <TagManger
                    search={this.state.search}
                    resetSearch={this.resetSearch}
                    onFilterChange={this.filterChange}/>
                <div>
                    {this.renderMovie(this.props.movie)}
                </div>
            </div>
        );
    }
}
function mapStateToProps({movie}) {
    return {movie};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchMovie, clearState}, dispatch);
}

const styles = {
    gridStyle: {
        padding: "0",
        margin: "0",
        listStyle: "none",
        display: "flex",
        WebkitFlexFlow: "row wrap",
        justifyContent: "space-around"
    },
    gridItem: {
        padding: "5px",
        width: "200px",
        height: "150px",
        marginTop: "10px",
        lineHeight: "150px",
        color: "white",
        fontWeight: "bold",
        fontSize: "3em",
        textAlign: "center"
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReasultComponent);
