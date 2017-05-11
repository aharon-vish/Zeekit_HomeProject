import React,{Component} from 'react';
import Title from './common/TitleComponent';
import Grid from './common/GridComponent';


class ReasultComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="resultStyle" style={this.props.styles}>
                <input/>
            </div>
        );
    }
}

export default ReasultComponent;