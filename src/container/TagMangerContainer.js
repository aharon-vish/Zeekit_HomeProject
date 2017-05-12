import React, {Component} from 'react';
import SelectedTag from '../component/common/SelectedTag';
import MetaTag from '../component/common/MetaTag';

class TagMangerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleSelection: true,
            tagMangerField: ['Your Selection:', 'Optional Tags:'],
            filterYear: ['','2017', '2016', '2015', '2014'],
            filterType: ['','movie', 'series', 'episode']
        };
        this.toggleSelectionTag = this.toggleSelectionTag.bind(this);
    }

    toggleSelectionTag() {
        this.props.resetSearch();
        this.setState({toggleSelection: !this.state.toggleSelection});
    }
    componentWillReceiveProps(nextProps){
        if(!this.state.toggleSelection) {
            this.setState({toggleSelection: !this.state.toggleSelection});
        }
    }
    render() {
        if(this.state.toggleSelection) {
            return (
                <div className="tagManger">
                    <MetaTag search={this.props.search} removeYourSelection={this.toggleSelectionTag}/>
                    <hr/>
                    <SelectedTag
                        filterYear={this.state.filterYear}
                        filterType={this.state.filterType}
                        onFilterChange={this.props.onFilterChange}/>
                </div>)
        }else {
            return (
                <div className="tagManger">
                    <hr/>
                    <SelectedTag
                        filterYear={this.state.filterYear}
                        filterType={this.state.filterType}
                        onFilterChange={this.props.onFilterChange}/>
                </div>)
        }
    }
}
export default TagMangerContainer;