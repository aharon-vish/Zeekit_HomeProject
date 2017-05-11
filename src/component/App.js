import React,{Component} from 'react';
import HomeComponent from './HomeComponent';
require('../stylesheet.css');

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {charTerm: null, toggleScreen: false};
        this.onCharClick = this.onCharClick.bind(this);
    }

    onCharClick(e) {
        this.setState({charTerm: e.target.textContent, toggleScreen: true});

    };

    render() {
        if(!this.state.toggleScreen){
            return ( <HomeComponent onGridCharClick={this.onCharClick}/>)
        }else {
            return ( <div>sdfsdfsd</div>)
        }
    }
}

export default App;