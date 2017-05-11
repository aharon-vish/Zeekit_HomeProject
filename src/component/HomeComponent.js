import React,{Component} from 'react';
import Title from './common/TitleComponent';
import Grid from './common/GridComponent';


class HomeComponent extends Component {
    constructor(props) {
        super(props);
        const alphaBetArray = ("abcdefghijklmnopqrstuvwxyz").split("");
        this.state = {alphaBetArray};
    }

    onMouseEnter(e) {
        e.target.style.cursor = 'pointer';
        e.target.style.backgroundColor = '#f1c0d1';
    }

    onMouseLeave(e) {
        e.target.style.backgroundColor = '';
    }

    render() {
        return (
            <div className="homeStyle" style={this.props.styles}>
                <Title
                    text={'please select a char for Movie'}
                    styles={{color:'#653737'}}
                />
                <Grid
                    onGridItemClick={this.props.onGridCharClick}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    styles={styles}
                    items={this.state.alphaBetArray}/>
            </div>
        );
    }
}
const styles = {
    gridStyle: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 20px [col-start])",
        gridTemplateRows: "repeat(9, 20px [col-start])",
        gridGap: "10px",
        alignSelf: "center"
    },
    gridItem: {
        borderRadius: '50%',
        textTransform: 'capitalize'
    }
};

export default HomeComponent;