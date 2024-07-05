/* Aula 13 - Componentes de Interface, TextInput - Desafio 2 */

import React from 'react';
import { estilos } from './estilos';
import { View, Text, ScrollView } from 'react-native';
import Corpo from './components/Corpo';

function App() {
  let titulo = "Aula 13";
  let subtitulo = "Componente de entrada de texto";

  return (
    <ScrollView style={ estilos.fundo }>
      <View style={ estilos.titulo }>
        <Text style={[ estilos.fonte, estilos.textoTitulo ]}>{titulo}</Text>

        <Text style={[ estilos.fonte, estilos.subtitulo ]}>{subtitulo}</Text>
      </View>

      <Corpo />
    </ScrollView>
  )
}

export default App;