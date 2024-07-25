/* Aula 18 - Componente SectionList, Desafio 2 */

import React from 'react';
import { View, Text } from 'react-native';
import Lista from './components/Lista';
import { estilo } from './estilos.js';

export default function App() {
  return (
    <View style={ estilo.viewFundo }>
      <View>
        <Text>Alguns Países e Suas Capitais</Text>
      </View>

      <Lista />
    </View>
  )
}