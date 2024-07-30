/* Aula 19 - Navegação entre telas, Stack Navigation*/

import React from 'react';
import { View, Text } from 'react-native';
import Tela_Principal from './src/Telas/Tela_Principal';
import Tela_Carnaval from './src/Telas/Tela_Carnaval';
import Tela_FestaJunina from './src/Telas/Tela_FestaJunina';
import Tela_Halloween from './src/Telas/Tela_Halloween';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* Importando as bibliotecas externas que serão responsáveis pela navegação das telas. */

import { estilos } from './src/estilos';

export default function App() {
  const Pilha = createNativeStackNavigator();
  /* Importamos uma biblioteca de navegação por pilha, agora foi criado um objeto que receberá todos os atributos e comportamentos da classe que importamos nessa biblioteca. */

  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName='Tela_Principal'>
        <Pilha.Screen name='Tela_Principal'  component={ Tela_Principal } options={{ title: "Bem Vindo", headerStyle: { backgroundColor: "black" }, headerTintColor: "white" }} />
        {/* No parâmetro options, temos um objeto que atributos que vão criar um cabeçalho para a tela, usando o JSX para também fazer estilização em linha */}

        <Pilha.Screen />
          
        <Pilha.Screen />
          
        <Pilha.Screen />
        {/* Definindo quais serão as telas que poderemos navegar, utilizando o método Screen com seus parâmetros. */}
      </Pilha.Navigator>
      {/* Componente da constante Pilha, utilizando seu método Navigator, com um parâmetro que define qual vai ser a primeira tela a ser apresentada. */}
      {/* <Tela_FestaJunina /> */}
    </NavigationContainer>
    /* Esse componente vai funcionar como uma View, ou contâiner, que permite trabalhar com a biblioteca de navegação do React Native. */
  )
}