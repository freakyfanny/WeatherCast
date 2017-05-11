import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    render () {
        return (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
        );
    }
}


function mapStateToProps({weather}) { //(state) es5
    return { weather }; // { weather } es6 === { weather : weather } es5
}

export default connect(mapStateToProps)(WeatherList);
