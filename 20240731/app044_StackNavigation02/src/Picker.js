/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio 2, Tela do app de departamentos */

import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { style } from './estilos/departamentos';
import Conteudo from './componentes/Conteudo';

function Picker() {
  let titulo = "Departamentos do Mercado";
  let logo = require('./img/mercado.png');

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={ style.cabecalho }>
        <Image source={ logo } resizeMode='contain' style={ style.logo } ></Image>
        <Text style={ style.titulo }>{titulo}</Text>
      </View>

      <Conteudo />
    </ScrollView>
  )
}

export default Picker;