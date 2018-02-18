import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherGraph from '../components/WeatherGraph';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
	renderWeather(cityData) {
		if (cityData == undefined) {
			console.log("error");
		} else {
			const city = cityData.city;
			const list = cityData.list;
			const temps = list.map(weather => weather.main.temp - 273);
			const pressures = list.map(weather => weather.main.pressure);
			const humadities = list.map(weather => weather.main.humidity);
			const lon = city.coord.lon;
			const lat = city.coord.lat;
			return (
				<tr key={city.id}>
					<td><GoogleMap lat={lat} lon={lon} /></td>
					<td><WeatherGraph data={temps} color={'blue'} type={'ºC'} /></td>
					<td><WeatherGraph data={pressures} color={'red'} type={'hPa'} /></td>
					<td><WeatherGraph data={humadities} color={'orange'} type={'%'} /></td>
				</tr>
			);
		}
	}

	render() {
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temparature(ºC)</th>
						<th>Pressure(hPa)</th>
						<th>Humadity(%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps(state) {
	return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);