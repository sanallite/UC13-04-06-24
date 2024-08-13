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
        <Pilha.Screen name='Tela Inicial' component={ Inicial } />

        <Pilha.Screen name='Tela de Vendas' component={ Vendas } options={{ title: 'Relatório de Vendas' }} />
        
        <Pilha.Screen name='Tela de Compras' component={ Compras } options={{ title: 'Relatório de Compras e Gastos' }}/>

        <Pilha.Screen name='Tela de Pagamentos' component={ Pagamentos } />
      </Pilha.Navigator>
    </NavigationContainer>
  )
}