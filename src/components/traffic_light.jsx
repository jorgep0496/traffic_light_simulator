import React from 'react';
import '../styles/traffic_light.scss';

class TrafficLight extends React.Component {

    constructor() {
        super();
        this.state = {
            lightClick: null
        };
    }

    render() {

        let redClass = '';
        if (this.state.lightClick == 'red') redClass = 'selectedRed';

        let yellowClass = '';
        if (this.state.lightClick == 'yellow') yellowClass = 'selectedYellow';

        let greenClass = '';
        if (this.state.lightClick == 'green') greenClass = 'selectedGreen';

        return <>
            <div id="topPost"></div>
            <div id="head">
                <div className={"red light " + redClass} onClick={() => this.setState({ lightClick: 'red' })}></div>
                <div className={"yellow light " + yellowClass} onClick={() => this.setState({ lightClick: 'yellow' })}></div>
                <div className={"green light " + greenClass} onClick={() => this.setState({ lightClick: 'green' })}></div>
            </div>
            <div id="text">
                <h4>Click any light to see the magic!</h4>
            </div>
        </>
    }
}

export default TrafficLight;