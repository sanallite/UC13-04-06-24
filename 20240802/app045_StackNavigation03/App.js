/* Aula 19 - Navegação entre telas - Stack Navigation Parte 2 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* Importando as bibliotecas para a navegação */

import Principal from './telas/Principal';
import ZeroUm from './telas/ZeroUm';
import ZeroDois from './telas/ZeroDois';
import ZeroTres from './telas/ZeroTres';
/* Importando as telas que serão usadas */

export default function App() {
  const pilha = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <pilha.Navigator initialRouteName='Principal'>
        <pilha.Screen component={ Principal } name='Principal'/>
        <pilha.Screen component={ ZeroUm } name='Um' />
        <pilha.Screen component={ ZeroDois } name='Dois' />
        <pilha.Screen component={ ZeroTres } name='Três'/>
      </pilha.Navigator>
    </NavigationContainer>
  )
}