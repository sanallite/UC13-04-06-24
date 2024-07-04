/* Aula 12 - Meu desafio usando states */

import React, { useState } from 'react';
import { styles } from './estilos';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
/* Importanto um novo componente, que ainda não aprendi bem. */

function App() {
  let talentos = [
    { nome: "Gawr Gura", imagem: require('./img/gura.png') },
    { nome: "Ninomae Ina'nis", imagem: require('./img/ina.png') },
    { nome: "Takanashi Kiara", imagem: require('./img/kiara.png') },
    { nome: 'Mori Calliope', imagem: require('./img/mori.png') },
    { nome: 'Amelia Watson', imagem: require('./img/ame.png') },
    { nome: 'Irys', imagem: require('./img/irys.png') },
    { nome: 'Tsukumo Sana', imagem: require('./img/sana.png') },
    { nome: 'Ceres Fauna', imagem: require('./img/fauna.png') },
    { nome: 'Ouro Kronni', imagem: require('./img/kronni.png') },
    { nome: 'Nanashi Mumei', imagem: require('./img/mumei.png') },
    { nome: 'Hakos Baelz', imagem: require('./img/baelz.png') },
    { nome: 'Shiori Novella', imagem: require('./img/shiori.webp') },
    { nome: 'Koseki Bijou', imagem: require('./img/bijou.webp') },
    { nome: 'Nerissa Ravencroft', imagem: require('./img/nerissa.webp') },
    { nome: 'Fuwawa Abyssguard', imagem: require('./img/fuwawa.webp') },
    { nome: 'Mococo Abyssguard', imagem: require('./img/mococo.webp') },
    { nome: 'Elizabeth Rose Bloodflame', imagem: require('./img/elizabeth.png') },
    { nome: 'Gigi Murin', imagem: require('./img/gigi.png') },
    { nome: 'Cecilia Immergreen', imagem: require('./img/cecilia.png') },
    { nome: 'Roara Panthera', imagem: require('./img/raora.png') },
  ];
  /* Criando objetos dentro do vetor para armazenar as personagens */

  const [ nomeTalento, setNome ] = useState('Venha, temos um sonho para realizar');
  const [ imagemTalento, setImagem ] = useState( require('./img/yagoo.jpg'));
  const [ textoBotao, setTextoBotao ] = useState('Jogar');
  /* Estado inicial */

  const [ numeroRodadas, setNumero ] = useState(0);
  const [ contadorSelecao, setContador ] = useState( Array(talentos.length).fill(0) );
  /* Variáveis de estado para os contadores, a de rodadas apenas começa com o número 0 e o da seleção cria um array com o mesmo tamanho do array de talentos e popula ele com o número 0, ou seja vai ser um vetor com vários números armazenados. */

  function gacha() {
    if ( textoBotao == "Jogar" ) {
      let numTalento = Math.floor( Math.random() * talentos.length );
      /* Utilizando a função floor que arredonda o número para o inteiro inferior mais próximo e utilizando a função random para escolher um número aleatório dentro do número de itens do array, devido ao número resultado da função ter sido multiplicado pelo tamanho da array, o que impede que o resultado seja um número maior */

      setNome(talentos[numTalento].nome);
      setImagem(talentos[numTalento].imagem);
      /* Definindo os valores atuais da variável como os atributos do item atual do array. */

      setTextoBotao('Mais uma rodada');
      setNumero(numeroRodadas + 1);
      /* Adicionando a contagem das rodadas */

      const novaSelecao = [...contadorSelecao];
      /* Criando uma cópia do array atual, através do operador spread, pesquise mais! */

      novaSelecao[numTalento]++;
      /* Adicionando 1 ao item atual do array cópia, que é o item correspondente do array de talentos */

      setContador(novaSelecao);
    }

    else {
      setTextoBotao('Jogar');
      setNome('Venha, temos um sonho para realizar');
      setImagem( require('./img/yagoo.jpg') );
    }
  }
  

  return (
    <ScrollView style={ styles.background }>
      <View style={ styles.viewTitle }>
        <Text style={ styles.title }>Hololive English</Text>
      </View>

      <View style={ styles.viewTalento }>
        <Text style={ styles.subtitulo }>Jogo das Idols</Text>

        <Image source={ imagemTalento } style={ styles.imagemTalento }></Image>
        <Text style={[ styles.textosDestaque, { fontWeight: 'bold' }]}>{nomeTalento}</Text>
      </View>

      <View style={ styles.viewBotao }>
        <TouchableOpacity onPress={ gacha } style={ styles.botaoJogar }>
          <Text>{textoBotao}</Text>
        </TouchableOpacity>
      </View>

      <View style={ styles.viewDetalhes }>
        <Text style={ styles.textosDestaque }>Número de Rodadas: {numeroRodadas}</Text>

        <Text style={ styles.textosDestaque }>Quantidade de Seleções:</Text>

        <FlatList
          data={contadorSelecao}

          keyExtractor={( item , index) => talentos[index].nome.toString()}

          renderItem={({ item, index }) => (
            <Text style={ styles.lista }>
              {talentos[index].nome}: 
              <Text style={{ fontWeight: 'bold' }}> {item} </Text>
              vezes.
            </Text>
          )}
        />
      </View>
    </ScrollView>
  )
}

export default App;