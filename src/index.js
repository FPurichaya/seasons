import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { lat: null, errMessage: ''};

    componentDidMount () {
        window.navigator.geolocation.getCurrentPosition(
        //To update state object, we call setState. setState is automatically put on our app component when we extended React.Component
        //Anytime you want to update your state, you have to call setState
            position => this.setState ({ lat: position.coords.latitude }),
            err => this.setState ({ errMessage: err.message})
        //Single line code, no curry bracket nor semi-colon
            );
    }


    //React says we have to define render!! 
    render() {
        if(this.state.errMessage && !this.state.lat) {
            return <div>Error: {this.state.errMessage}</div>
        }

        if(!this.state.errMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} /> 
            //Taking the property from the states on the app component and passing it as a prop down into the SeasonDisplay
        }

        return <div>Loading... </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
