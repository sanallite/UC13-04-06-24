/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio 2, Tela do app com a lista de músicas */

import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from '../src/estilos/flatlist';
import Lista from '../src/componentes/Lista';

export default function FlatList() {
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