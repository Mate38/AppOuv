import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Alert,
  ScrollView,
  Dimensions
} from 'react-native';
import { 
  Button, 
  Text,
  Icon
} from 'native-base';
import { Actions } from 'react-native-router-flux';

const screenWidth = Dimensions.get('window').width;

export default class TipoManifestacao extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <View style={styles.geral}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>

          <View style={{ width: screenWidth, alignItems: 'center' }}>

          <Text style={styles.titulo}>Escolha o tipo da manifestação</Text>

            <View style={styles.menuGrupo}>
            
              <Button 
                block 
                warning 
                style={ styles.botao }
                onPress={() => { Actions.manifestacao(); }}
                >
                <Text style={{ fontWeight: 'bold' }}>Denúncia</Text>
              </Button>

              <Button 
                block 
                warning 
                style={ styles.botao }
                onPress={() => { Actions.manifestacao(); }}
                >
                <Text style={{ fontWeight: 'bold' }}>Elogio</Text>
              </Button>

            </View>

            <View style={styles.menuGrupo}>
            
              <Button 
                block 
                warning 
                style={ styles.botao }
                onPress={() => { Actions.manifestacao(); }}
                >
                <Text style={{ fontWeight: 'bold' }}>Informação</Text>
              </Button>

              <Button 
                block 
                warning 
                style={ styles.botao }
                onPress={() => { Actions.manifestacao(); }}
                >
                <Text style={{ fontWeight: 'bold' }}>Reclamação</Text>
              </Button>

            </View>

            <View style={styles.menuGrupo}>
            
              <Button 
                block 
                warning 
                style={ styles.botao }
                onPress={() => { Actions.manifestacao(); }}
                >
                <Text style={{ fontWeight: 'bold' }}>Solicitação</Text>
              </Button>

              <Button 
                block 
                warning 
                style={ styles.botao }
                onPress={() => { Actions.manifestacao(); }}
                >
                <Text style={{ fontWeight: 'bold' }}>Sugestão</Text>
              </Button>

            </View>

          </View>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#387188',
  },
  titulo: {
    top: 10,
    paddingBottom: 30,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    //backgroundColor: '#1A6788',
    //justifyContent: 'flex-start',
  },
  botao: {
    width: 140, 
    height: 140, 
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  menuGrupo: {
    flexDirection: 'row',
  },
});
