/* Aula 15 - Componentes de Interface, Slider */

import React from 'react';
import { View } from 'react-native';
import { estilos } from './StyleSheet/estilos';
import Header from './componentes/Header';
import Main from './componentes/Main';
import Footer from './componentes/Footer';

export default function App() {
  return (
    <View style={ estilos.fundo }>
      <Header />
      <Main />
      {/* <Footer /> */}
    </View>
  )
}