/* Aula 19 - Navegação entre telas, Stack Navigation*/

import React from 'react';
import { View, Text } from 'react-native';
import Tela_Principal from './src/Telas/Tela_Principal';
import Tela_Carnaval from './src/Telas/Tela_Carnaval';
import Tela_FestaJunina from './src/Telas/Tela_FestaJunina';
import Tela_Halloween from './src/Telas/Tela_Halloween';

import { estilos } from './src/estilos';

export default function App() {
  return (
    <View style={ estilos.fundo }>
        <Tela_Principal />
    </View>
  )
}