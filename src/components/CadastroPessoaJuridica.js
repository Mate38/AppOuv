import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
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

var fundo = '#387188';
var branco = '#fff';

export default class CadastroPessoaJuridica extends Component {
  render() {
    return (
      <View style={styles.geral}>
        <Text style={styles.titulo}>Dados do manifestante</Text>
        <ScrollView style={{ flex: 1 }}>

          <View style={{ marginRight: 15 }}>

            <Form style={{ width: 340 }}>
              <Item floatingLabel>
                <Label style={{ color: branco }}>CNPJ*</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label style={{ color: branco }}>Nome*</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label style={{ color: branco }}>Telefone</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label style={{ color: branco }}>Celular</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label style={{ color: branco }}>E-mail*</Label>
                <Input />
              </Item>
            </Form>

          </View>  

          <Button 
            block 
            warning 
            style={{ margin: 35 }}
            onPress={() => { alert("Teste"); }}
            >
            <Text style={{ fontWeight: 'bold' }}>Salvar</Text>
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
