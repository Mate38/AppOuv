import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Picker
} from 'react-native';
import { 
  Button, 
  Text, 
  Form, 
  Item, 
} from 'native-base';
 // 2.3.3
import axios from 'axios';
 // 0.17.0

var fundo = '#387188';
var branco = '#fff';

export default class Manifestacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "selected",
      error: null,
      units: [],
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
      //console.log(response);
        this.setState({
            units: response.data.data
        })
    }).catch((error) => { 
      this.setState({ error: error.message })
    });
  }

  render() {
    console.log(this.state.units)
    return (
      <View style={styles.geral}>
        <Text style={styles.titulo}>Dados da manifestação</Text>
        <ScrollView style={{ flex: 1 }}>

          <View style={{ marginRight: 15 }}>

            <Form style={{ width: 340 }}>

              <View style={styles.picker}>
                <Picker
                  mode="dialog"
                  style={{ color: branco }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                  itemStyle={{ backgroundColor: 'red' }}
                >
                  { this.state.units.map(unit => (
                    <Item key={unit.idunidade} label={unit.field1} value={unit.field2} />
                  )) }
                </Picker>
                <Text>{this.state.user}</Text>
              </View>

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
  picker: {
    marginLeft: 15, 
    borderBottomColor: branco, 
    borderBottomWidth: 0.8, 
    paddingTop: 20
  },
});
