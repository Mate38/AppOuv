import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios'; // 0.17.0

export default class Teste extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      place: 'Localizando endereço...',
      error: null,
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        }, () => this.getGeocode()); // call the api after getCurrentPosition is finished
      },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: true, timeout: 20000 },
     );
    
    }
    getGeocode() {
     axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ this.state.latitude +','+ this.state.longitude +'&key=AIzaSyDtQ0zsYr1c_V7UmlHFekeFIGM2nDwnDEA') // be sure your api key is correct and has access to the geocode api
    .then(response => {
      console.log(response);
        this.setState({
            place: response.data.results[0].formatted_address // access from response.data.results[0].formatted_address
        })
     }).catch((error) => { // catch is called after then
       this.setState({ error: error.message })
     });
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        <Text>{this.state.place.toString()}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}
