import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Alert,
  TouchableOpacity
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
import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';

var azul = '#387188';

export default class ouvidoria extends Component {
  state = {
    visibleModal: null,
  };

  _renderButton1 = (text, onPress) => (
    <Button
      block
      warning
      onPress={onPress}
      style={{ width: 120, height: 40, marginLeft: 10, marginRight: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{text}</Text>
    </Button>
  );

  _renderButton2 = (text, onPress) => (
    <Button
      block
      warning
      onPress={onPress}
      style={{ width: 250, height: 40, marginBottom: 10, marginTop: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{text}</Text>
    </Button>
  );

  _renderModalContent1 = () => (
    <View style={styles.modalContent}>
      <Text style={styles.textModal}>Deseja se manifestar de forma anônima?</Text>
      <View style={styles.buttonContainer1}>
        {this._renderButton1('Sim', () => {this.setState({ visibleModal: null }), Actions.tipomanifestacao()} )}
        {this._renderButton1('Não', () => {this.setState({ visibleModal: null }), this.setState({ visibleModal: 2 })} )}
      </View>
    </View>
  );

  _renderModalContent2 = () => (
    <View style={styles.modalContent}>
      <Text style={styles.textModal}>Manifestar-se como?</Text>
      <View style={styles.buttonContainer2}>
        {this._renderButton2('Mateus', () => {this.setState({ visibleModal: null }), Actions.tipomanifestacao()} )}
        {this._renderButton2('Novo cadastro', () => {this.setState({ visibleModal: null }), this.setState({ visibleModal: 3 })} )}
      </View>
    </View>
  );

  _renderModalContent3 = () => (
    <View style={styles.modalContent}>
      <Text style={styles.textModal}>Tipo de pessoa?</Text>
      <View style={styles.buttonContainer2}>
        {this._renderButton2('Pessoa Física', () => {this.setState({ visibleModal: null }), Actions.cadastropessoafisica()} )}
        {this._renderButton2('Pessoa Jurídica', () => {this.setState({ visibleModal: null }), Actions.cadastropessoajuridica()} )}
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.geral}>
        
        <StatusBar 
          backgroundColor={azul}
        />

        <View style={styles.botao}>
          <Button
            block
            warning
            onPress={() => this.setState({ visibleModal: 1 })}
            style={{ width: 300, height: 50, margin: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Cadastrar Manifestação</Text>
          </Button>
        </View>

        <Modal
          isVisible={this.state.visibleModal === 1}
          animationIn={'slideInLeft'}
          animationOut={'slideOutRight'}
          >
          {this._renderModalContent1()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 2}
          animationIn={'slideInLeft'}
          animationOut={'slideOutRight'}
          >
          {this._renderModalContent2()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 3}
          animationIn={'slideInLeft'}
          animationOut={'slideOutRight'}
          >
          {this._renderModalContent3()}
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: azul,
  },
  modalContent: {
    backgroundColor: azul,
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    //borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  textModal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 10,
  },
  buttonContainer1: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  buttonContainer2: {
    paddingTop: 10,
    flexDirection: 'column',
  },
});
