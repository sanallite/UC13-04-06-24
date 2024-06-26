/* Aula 11 - Componentes de interface, Touchable Highlight - Desafio 2 */

import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { estilos } from './estilos';

function proximo() {
  alert("Você clicou no botão próximo");
}

function anterior() {
  alert("Você clicou no botão anterior");
}

function App() {
  let desenho = require('./assets/celular.webp');
  let titulo = "Bem vindo(a) ao Aplicativo Barilife!";
  let introducao = "A Sociedade Brasileira de Cirurgia Bariatrica e Metabolica (SBCBM) desenvolveu o aplicativo pensando em você, paciente bariatrico. É um aplicativo inovador e gratuito.";

  return (
    <View style={ estilos.fundo }>
      <View style={ estilos.viewImagem }>
        <Image source={ desenho } style={ estilos.desenho }></Image>
      </View>

      <View style={ estilos.viewIntro }>
        <Text style={ estilos.titulo }>{titulo}</Text>

        <Text>{introducao}</Text>
      </View>
    </View>
  )
}

export default App;