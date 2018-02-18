import React, { Component } from 'react';
// container
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render() {
    return (
    	<div>
    		<SearchBar></SearchBar>
    		<WeatherList></WeatherList>
    	</div>
    );
  }
}
