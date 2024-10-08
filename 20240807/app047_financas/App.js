/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicial from './conteudo/Inicial';
import Vendas from './conteudo/Vendas';
import Compras from './conteudo/Compras';
import Pagamentos from './conteudo/Pagamentos';

export default function App() {
  const Pilha = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName='Tela Inicial'>
        <Pilha.Screen name='Tela Inicial' component={ Inicial } options={{ title: 'Finanças Empresariais', headerStyle: { backgroundColor: 'orange' }, headerTintColor: 'white', headerShadowVisible: false, headerTitleAlign: 'center' }}   /* headerBackground= 'headerTransparent'  Pesquise depois! */ />

        <Pilha.Screen name='Tela de Vendas' component={ Vendas } options={{ title: 'Relatório de Vendas', headerStyle: { backgroundColor: '#5fddb9' }, headerTintColor: 'white', headerShadowVisible: false, headerTitleAlign: 'center' }} />
        {/* Telas com várias definições de estilo. */}
        
        <Pilha.Screen name='Tela de Compras' component={ Compras } options={{ title: 'Relatório de Compras e Gastos', headerStyle: { backgroundColor: '#f95858' }, headerTintColor: 'white', headerShadowVisible: false, headerTitleAlign: 'center' }}/>

        <Pilha.Screen name='Tela de Pagamentos' component={ Pagamentos } options={{ title: 'Folha de Pagamentos', headerStyle: { backgroundColor: '#7188ea' }, headerTintColor: 'white', headerShadowVisible: false, headerTitleAlign: 'center' }}/>
      </Pilha.Navigator>
    </NavigationContainer>
  )
}