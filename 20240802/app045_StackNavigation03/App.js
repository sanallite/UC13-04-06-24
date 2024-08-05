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
  /* Constante que recebe um objeto que contém os componentes e atributos usados para fazer a navegação de telas */

  return (
      <NavigationContainer>
          <pilha.Navigator initialRouteName='Principal'>
              <pilha.Screen component={ Principal } name='Principal' options={{ title: 'Bem Vindo' }} />
              {/* O name indica o nome dessa tela para a navegação, já o title é apenas o título exibido no header, pesquise mais sobre os atributos do NativeStackNavigator */}

              <pilha.Screen component={ ZeroUm } name='Um' />
              <pilha.Screen component={ ZeroDois } name='Dois' />
              <pilha.Screen component={ ZeroTres } name='Três'/>
          </pilha.Navigator>
          {/* Como o valor da constante retorna um componente, não é necessário nomea-lá com a primeira letra maiuscula, mas ainda é uma boa prática. */}
      </NavigationContainer>
      /* O navigator precisa estar envenvolido por um navigation contâiner, e uma screen precisa estar envolvida por um navigator */
  )
}