/* Aula 19 - Navegação de telas, Stack Navigation - Desafio 2 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* Importando as bibliotecas externas utilizadas para a navegação de telas, com o contâiner criando automáticamente um header para as telas  */

import Tela_Principal from './src/Tela_Principal';

export default function App() {
  const Stack = createNativeStackNavigator();
  /* Instânciando a função que adminstra a navegação em pilha pelas telas  */

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tela_Principal'>
        <Stack.Screen name='Tela_Principal' component={ Tela_Principal } />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}