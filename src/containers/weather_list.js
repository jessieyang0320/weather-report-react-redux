import React, { Component } from 'react'; 
import { connect } from 'react-redux';

class WeatherList extends Component {


	render(){
		return (
			<table className="table talbe-hover">
				<thead>
					<tr>
						<th> City </th>
						<th> Temperature </th>
						<th> Pressure </th>
						<th> Humidity </th>
					</tr>
				</thead>

				<tbody>

				</tbody>
			</table>
			)
	}
}


function mapStateToProps({ weather }){
	// equal to const weather = state.weather 
	return { weather }; // {weather} === {weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList)