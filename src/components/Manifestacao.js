import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Picker
} from 'react-native';
import { 
  Button, 
  Title, 
  Text, 
  Form, 
  Item, 
  Label, 
  Input 
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios'; // 0.17.0

var fundo = '#387188';
var branco = '#fff';

export default class Manifestacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "selected",
      place: 'Localizando endereço...',
      error: null,
      units: 'Obtendo dados...',
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  componentWillMount() {
    // Recebe dados da API do GOG
    axios.get('http://192.168.0.23/apiTeste/public/api/unidades')
    .then(response => {
      console.log(response);
        this.setState({
            units: response.data.data[0].nmunidade 
        })
    }).catch((error) => { 
      this.setState({ error: error.message })
    });

    // Retorna a geolocalização do cel
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        }, () => this.getGeocode());
      },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: true, timeout: 20000 },
     );

    }
    // Retorna o endereço a partir da geolocalização
    getGeocode() {
     axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ this.state.latitude +','+ this.state.longitude +'&key=AIzaSyDtQ0zsYr1c_V7UmlHFekeFIGM2nDwnDEA')
    .then(response => {
      console.log(response);
        this.setState({
            place: response.data.results[0].formatted_address
        })
     }).catch((error) => {
       this.setState({ error: error.message })
     });
  }

  render() {
    return (
      <View style={styles.geral}>
        <Text style={styles.titulo}>Dados da manifestação</Text>
        <ScrollView style={{ flex: 1 }}>

          <View style={{ marginRight: 15 }}>

            <Form style={{ width: 340 }}>
              <Item floatingLabel>
                <Label style={{ color: branco }}>E-mail para resposta</Label>
                <Input />
              </Item>
              <View style={{ marginLeft: 15, borderBottomColor: branco, borderBottomWidth: 0.8, paddingTop: 20 }}>
                <Picker
                  mode="dialog"
                  style={{ color: branco }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                  itemStyle={{ backgroundColor: 'red' }}
                >
                  <Item label="Selecione a unidade responsável" value="selected" />
                  <Item label={this.state.units.toString()} value="key0" />
                  <Item label="Dois" value="key1" />
                  <Item label="Tres" value="key2" />
                  <Item label="Quatro" value="key3" />
                  <Item label="Cinco" value="key4" />
                </Picker>
                <Text>{this.state.user}</Text>
              </View>
              <Item floatingLabel>
                <Label style={{ color: branco }}>Local da ocorrência</Label>
                <Input multiline={true} numberOfLines={2} value={this.state.place.toString()} />
              </Item>
              <Item floatingLabel>
                <Label style={{ color: branco }}>Sua manifestação*</Label>
                <Input multiline={true} numberOfLines={2}/>
              </Item>
            </Form>

          </View>  

          <Button 
            block 
            warning 
            style={{ margin: 35 }}
            onPress={() => { alert("Teste"); }}
            >
            <Text style={{ fontWeight: 'bold' }}>Enviar</Text>
          </Button>   
          
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    backgroundColor: fundo,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    top: 10,
    paddingBottom: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: branco,
    //justifyContent: 'flex-start',
  },
});
