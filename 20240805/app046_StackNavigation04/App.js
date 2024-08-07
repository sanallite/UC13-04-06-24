/* Aula 19 - Navegação entre telas, Parte 2 - Desafios 4 e 5 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* import { estilo } from './src/estilos.js' */

import TelaUm from './src/TelaUm';
import TelaDois from './src/TelaDois';
import TelaTres from './src/TelaTres';
import TelaQuatro from './src/TelaQuatro';
import TelaPaciente from './src/TelaPaciente';
import TelaMedico from './src/TelaMedico';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaUm' >
        <Stack.Screen name = "TelaUm" component={ TelaUm } options={{ title: '' }}/>

        <Stack.Screen name = "TelaDois" component={ TelaDois } options={{ title: '' }}/>

        <Stack.Screen name = "TelaTres" component={ TelaTres } options={{ title: '' }}/>
        
        <Stack.Screen name = "TelaQuatro" component={ TelaQuatro } options={{ title: '' }}/>
        {/* Não esqueça da diferença entre name e title! */}

        <Stack.Screen name = "TelaPaciente" component={ TelaPaciente } options={{ title: 'Cadastro' }}/>

        <Stack.Screen name = "TelaMedico" component={ TelaMedico } options={{ title: '' }}/>
        {/* A tela precisa ser adicionada aqui para se possa usar os métodos de navegaçãos */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}