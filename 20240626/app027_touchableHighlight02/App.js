/* Aula 11 - Componentes de interface, Touchable Highlight - Desafio 2 */

import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { estilos } from './estilos';

function proximo() {
  alert("Você clicou no botão próximo");
}

function anterior() {
  alert("Você clicou no botão pular");
}

function App() {
  let desenho = require('./assets/celular.webp');
  let titulo = "Bem vindo(a) ao Aplicativo Barilife!";
  let introducao = "A Sociedade Brasileira de Cirurgia Bariatrica e Metabolica (SBCBM) desenvolveu o aplicativo pensando em você, paciente bariatrico. É um aplicativo inovador e gratuito.";
  let botaoEsq = 'Pular';
  let botaoDir = "Próximo";

  return (
    <View style={ estilos.fundo }>
      <View style={{ flex: 1 }}>
        <View style={ estilos.viewImagem }>
          <Image source={ desenho } style={ estilos.desenho }></Image>
        </View>

        <View style={ estilos.viewIntro }>
          <Text style={ estilos.titulo }>{titulo}</Text>

          <Text style={ estilos.textoIntro }>{introducao}</Text>
        </View>

        <View style={ estilos.viewBotoes }>
          <TouchableHighlight onPress={ anterior } style={ estilos.botoes }>

            <Text style={[ estilos.textoBotoes, { color: '#2560be' } ]}>{botaoEsq}</Text>
            {/* Usando um array para usar mais de um estilo para o componente, inclusive juntando o inline com o estilo externo. */}
          </TouchableHighlight>

          <TouchableHighlight onPress={ proximo } style={[ estilos.botoes, estilos.botaoDir ]}>
          {/* Utilizando dois estilos externos. */}

            <Text style={[ estilos.textoBotoes, { textAlign: 'center', color: 'white' } ]}>{botaoDir}</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={ estilos.viewPontos }>
        <View style={ estilos.pontoAzul }></View>
        <View style={ estilos.pontoCinza }></View>
        <View style={ estilos.pontoCinza }></View>
      </View>
    </View>
  )
}

export default App;