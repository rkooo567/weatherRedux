import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMout() {
		console.log('refs: ', this.refs);
		new google.maps.Map(this.refs.maps, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		return (
			<div ref='map' />
		);
	}
}

export default GoogleMap;