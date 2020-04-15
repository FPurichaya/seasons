import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import "semantic-ui-css/semantic.min.css";

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

    renderContent() {
        if(this.state.errMessage && !this.state.lat) {
            return <div>Error: {this.state.errMessage}</div>;
        }

        if(!this.state.errMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
            //Taking the property from the states on the app component and passing it as a prop down into the SeasonDisplay
        }

        return <Spinner message='Please accept the location request.' />;
    }


    //React says we have to define render!! 
    render() {
        return <div className="border red">{this.renderContent()}</div>;
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));
