import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Formulario from './componentes/Formulario';
import Lista from './componentes/Lista';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Formulario'>
        <Stack.Screen name='Formulario' component={ Formulario }/>
        <Stack.Screen name='Lista' component={ Lista }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}