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

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaPaciente' >
        <Stack.Screen name = "TelaUm" component={ TelaUm } />

        <Stack.Screen name = "TelaDois" component={ TelaDois } />

        <Stack.Screen name = "TelaTres" component={ TelaTres } />
        
        <Stack.Screen name = "TelaQuatro" component={ TelaQuatro } />
        {/* Não esqueça da diferença entre name e title! */}

        <Stack.Screen name = "TelaPaciente" component={ TelaPaciente } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}