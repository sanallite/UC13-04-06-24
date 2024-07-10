/* Aula 14 - Meu desafio usando Picker */

import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { style } from './StyleSheet';
import Conteudo from './components/Conteudo'

function App() {
  let titulo = "Departamentos do Mercado";
  let logo = require('./assets/mercado.png');

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={ style.cabecalho }>
        <Image source={ logo } resizeMode='contain' style={ style.logo } ></Image>
        <Text style={ style.titulo }>{titulo}</Text>
      </View>

      <Conteudo />
    </ScrollView>
  )
}

export default App;
