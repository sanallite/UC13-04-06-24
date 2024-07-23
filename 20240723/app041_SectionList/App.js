/* Aula 18 - Componente SectionList */

import React from 'react';
import { View } from 'react-native';
import { style } from './style/StyleSheet'
import TelaHome from './components/TelaHome';

export default function App() {
  return (
    <View style={ style.background }>
      <TelaHome nome="Márcio Teodoro" data="Julho de 2024" />
      { /* Definindo propriedads customizadas para esse componente */ }
    </View>
  )
}
