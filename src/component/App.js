import React,{Component} from 'react';
import Home from './HomeComponent';
import Result from './ResultComponent';

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
            return ( <Home onGridCharClick={this.onCharClick}/>)
        }else {
            return ( <Result charTerm={this.state.charTerm}/>)
        }
    }
}

export default App;