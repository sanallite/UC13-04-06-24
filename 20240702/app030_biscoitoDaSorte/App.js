/* Aula 12 - Componentes de Interface, App Biscoito da Sorte */

import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
/* Utilizando um novo componente */
import { estilos } from './styleSheet';

function App() {
  const titulo = "App Biscoito da Sorte";

  let frases = ['Siga as boas pessoas e aprenda com elas',
   'O bom-senso vale mais do que muito conhecimento',
   'O riso é a maior distância entre duas pessoas',
   'Deixe de lado as preocupações eseja feliz',
   'Realize o óbvio, pense no improvável e conquiste o impossível',
   'Acredite em milagres, mas não dependa deles',
   'A maior barreira para o sucesso é o medo do fracasso'
  ];

  const [ textoBotao, setTextoBotao ] = useState('Quebrar Biscoito');
  const [ imgBiscoito, setImgBiscoito ] = useState( require('./img/BS02_biscoito.png') );
  const [ textoFrase, setTextoFrase ] = useState('');
  const [ corBotao, setCorBotao ] = useState('orange');
  /* Estado inicial das variáveis */

  function alteraStatusBiscoito() {
    if ( textoBotao == "Quebrar Biscoito" ) {
      let numFrase = Math.floor( Math.random() * frases.length );
      /* Utilizando a função floor que arredonda o número para o inteiro inferior mais próximo e utilizando a função random para escolher um número aleatório dentro do número de itens do array, devido ao número resultado da função ter sido multiplicado pelo tamanho da array, o que impede que o resultado seja um número maior */

      setTextoFrase( frases[numFrase] );
      /* Definindo a frase como sendo o item do array com o mesmo índice do número aleatóriamente escolhido. */

      setTextoBotao('Nova Tentativa');
      setImgBiscoito( require('./img/BS01_biscoitoAberto.png') );
      setCorBotao('green');
    }
  
    else {
      setTextoFrase('');
      setTextoBotao('Quebrar Biscoito');
      setImgBiscoito( require('./img/BS02_biscoito.png') );
      setCorBotao('orange');
      /* Voltando ao estado inicial. */
    }
  }

  return (
    <View style={ estilos.areaFundo }>
      <View style={ estilos.cabecalho }>
        <Text style={ estilos.titulo }>{titulo}</Text>
      </View>

      <View style={ estilos.viewBiscoito }>
        <Image source={ imgBiscoito } style={ estilos.imagemBiscoito }></Image>
      </View>

      <View style={ estilos.viewFrase }>
        <Text style={ estilos.fraseAleatoria }>{textoFrase}</Text>
        {/* Como a frase é escolhida aleatóriamente, temos que usar uma variável de estado para armazenar a frase que será exibida. */}

        <TouchableOpacity style={[ estilos.botao , { borderColor: corBotao } ]} onPress={ alteraStatusBiscoito }>
          <View style={ estilos.dentroDoBotao }>
            <Image source={ require('./img/android.png') } style={ estilos.iconeBotao }></Image>

            <Text style={[ estilos.textoBotao, { color: corBotao } ]}>{textoBotao}</Text>
            {/* Dois estilos para o botão, cor a cor sendo dinâmica */}
          </View>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default App;