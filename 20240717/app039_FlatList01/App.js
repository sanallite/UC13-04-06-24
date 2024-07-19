/* Aula 17 - Componente FlatList */

import React from 'react';
import { View, ScrollView, FlatList, Text, Image } from 'react-native';
import { estilos } from './estilos';

export default function App() {
  let fonte_de_dados = [ { nome: 'Márcio Teodoro', email: 'marcio.7997@aluno.pr.senac.br', curso: 'Técnico em Informática para Internet', foto: require('./img/Marcio.jpeg') },
    { nome: 'Davi Benny', email: 'davi.1951@aluno.pr.senac.br', curso: 'Técnico em Informática para Internet', foto: require('./img/naldo.jpg') },
    { nome: 'Maria Clara', email: 'maria.2007@aluno.pr.senac.br', curso: 'Técnico em Administração', foto: require('./img/maria.jpeg') },
    { nome: 'Tânia Marques', email: 'tania_marques@gmail.com', curso: 'Biologia', foto: require('./img/tania.webp') }
  ];

  function mostrarItem({item}) {
  /* Esse parâmetro precisa estar entre chaves, ele representa cada item do array usado como fonte de dados no componente FlatList */
    return (
      <View style={ estilos.itens }>
        <View>
          <Image source={ item.foto } resizeMode='contain' style={ estilos.fotos } ></Image>
        </View>

        <View style={ estilos.detalhes }>
          <Text>{item.nome}</Text>
          <Text style={{ color: 'gray' }}>{item.email}</Text>
          <Text style={{ color: 'darkgreen' }}>{item.curso}</Text>
        </View>
      </View>
    )
    /* Para cada item do vetor, essa função será chamada e renderizará uma View com um texto que tem o item atual */
  }

  return (
    <View style={ estilos.fundo }>
      <View style={ estilos.cabecalho }>
        <Image source={ require('./img/header_logo.svg') } resizeMode= 'contain' style={ estilos.logo }></Image>

        <View style={ estilos.areaTitulo }>
          <Text style={ estilos.titulo }>Aula 17 - Desafio 1</Text>

          <Text style={ estilos.subtitulo }>Componente FlatList</Text>
        </View>
      </View>
      
      <ScrollView style={ estilos.areaLista }>
        <Text style={ estilos.textoLista }>Lista de Alunos</Text>

        <FlatList data= { fonte_de_dados } renderItem= { mostrarItem } />
        { /* Atribuindo a prop data um vetor que contem os itens da nossa lista e para cada item será chamada uma função, também sendo possível renderizar os itens diretamente. Não esqueça de colocar chaves quando fizer comentários dentro do return! */ }
      </ScrollView>
    </View>
  )
}
