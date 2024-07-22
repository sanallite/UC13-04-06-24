/* Aula 17 - Componente FlatList, Desafio 2 */

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { estilos } from './estilos';
import Lista from './components/Lista';


export default function App() {
  let titulo = "Top 10 Músicas da Mallu Magalhães*";
  let detalhe = "*Não necessariamente nessa ordem";

  return (
    <View style={ estilos.fundo }>
      <View style={ estilos.titulo }>
        <Text style={ estilos.textoTitulo }>{titulo}</Text>
      </View>

      <Lista />

      <View style={ estilos.detalhe }>
        <Text style={{ color: 'white' }}>{detalhe}</Text>
      </View>
    </View>
  )
}