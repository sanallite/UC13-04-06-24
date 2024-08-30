import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import { format } from 'date-fns';

export default function App() {
  const setores = [
    { nome: 'Celulares', resultados: '20', dia: new Date('2024-08-29Z-3') },
    { nome: 'Computadores', resultados: '19', dia: new Date('2024-09-01Z-3') }
    /* Definindo a data usando uma string, com o Z-3 indicando a diferença do fuso horário em relação ao horário UTC. */
  ]

  function renderizar({ item }) {
    return (
      <View>
        <Text>{item.nome}</Text>
        <Text>{item.resultados}</Text>
        <Text>{ format( item.dia, 'MMMM' ) }</Text>
        {/* Usando a biblioteca importada, com o nome do mês sendo exibido em inglês por enquanto */}

        <Text>{ item.dia.toLocaleDateString('pt-BR', { weekday: 'long' }) }</Text>
        <Text>{ item.dia.toLocaleDateString(undefined, { month: 'long' }) }</Text>
        {/* Exibindo a data usando a formatação de texto, colocadno um local e suas opções */}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text>Lista de Objetos</Text>
      <StatusBar style="auto" />

      <View>
        <FlatList data={ setores } renderItem={ renderizar } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
