/* Aula 19 - Navegação entre telas, Stack Navigation*/

import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from './src/estilos';
/* Agora o arquivo principal do app nem exibe esses componentes e nem usa o estilo, fazendo tudo pela navegação das telas */

import Tela_Principal from './src/Telas/Tela_Principal';
import Tela_Carnaval from './src/Telas/Tela_Carnaval';
import Tela_FestaJunina from './src/Telas/Tela_FestaJunina';
import Tela_Halloween from './src/Telas/Tela_Halloween';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* Importando as bibliotecas externas que serão responsáveis pela navegação das telas. */

export default function App() {
  const Pilha = createNativeStackNavigator();
  /* Importamos uma biblioteca de navegação por pilha, agora foi criado um objeto, armazenado em uma constante, que receberá todos os atributos e comportamentos da classe que importamos nessa biblioteca. */

  return (
    <NavigationContainer>
        <Pilha.Navigator initialRouteName='Tela_Principal'>
            <Pilha.Screen name='Tela_Principal'  component={ Tela_Principal } options={{ title: "Bem Vindo", headerStyle: { backgroundColor: "black" }, headerTintColor: "white" }}/>
            {/* No parâmetro options, temos um objeto que atributos que vão criar um cabeçalho para a tela, usando o JSX para também fazer estilização em linha. Esse cabeçalho também cria automáticamente um botão de voltar para a tela inicial. */}

            <Pilha.Screen name='Tela_Carnaval' component={ Tela_Carnaval } options={{ title: "Carnaval", headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }}/>
              
            <Pilha.Screen name='Tela_FestaJunina' component={ Tela_FestaJunina } options={{ title: "Festa Junina", headerStyle: { backgroundColor: 'blue' }, headerTintColor: 'white' }}/>
              
            <Pilha.Screen name='Tela_Halloween' component={ Tela_Halloween } options={{ title: 'Halloween', headerStyle: { backgroundColor: 'orange' }, headerTintColor: 'white' }}/>
            {/* Definindo quais serão as telas que poderemos navegar, utilizando o método Screen com seus parâmetros. */}
            
        </Pilha.Navigator>
        {/* Componente da constante Pilha, utilizando seu método Navigator, com um parâmetro que define qual vai ser a primeira tela a ser apresentada. */}
      
    </NavigationContainer>
    /* Esse componente vai funcionar como uma View, ou contâiner, que permite trabalhar com a biblioteca de navegação do React Native. */
  )
}