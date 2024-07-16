/* Aula 16 - Meu desafio usando Slider e Switch */

import React, { useState } from 'react';
import { View, ScrollView, Text, Switch, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
/* Não é necessário usar chaves para importar componentes instalados manualmente */

export default function App() {
  const [ estiloAtual, setEstilo ] = useState(claro);
  const [ modoEscuro, ligarModo ] = useState(false);
  const [ textoSwitch, setTexto ] = useState('Alterar para modo escuro:');
  const [ tamanhoFonte, setTamanho ] = useState(14);

  function alterarModo(modo_atual) {
    if ( modo_atual === false ) {
      setTexto('Alterar para o modo claro:');
      ligarModo(true);
      setEstilo(escuro);
    }

    else {
      setTexto('Alterar para o modo escuro:');
      ligarModo(false);
      setEstilo(claro);
    }
  }

  function alterarTamanho(index) {
    if ( index > 14 ) {
      setTamanho(index);
    }

    else {
      setTamanho(14)
    }
  }

  let titulo = "Helena (1876)";
  let capitulo = "Capítulo 1";
  let textoSlider = "Deslize para mudar o tamanho da fonte";
  let intro = "O Conselheiro Vale morreu às 7 horas da noite de 25 de abril de 1859. Morreu de apoplexia fulminante, pouco depois de cochilar a sesta, —segundo costumava dizer, — e quando se preparava a ir jogar a usual partida de voltarete em casa de um desembargador, seu amigo. O Dr. Camargo, chamado à pressa, nem chegou a tempo de empregar os recursos da ciência; o Padre Melchior não pôde dar-lhe as consolações da religião: a morte fora instantânea.\n\nNo dia seguinte fez-se o enterro, que foi um dos mais concorridos que ainda viram os moradores do Andaraí. Cerca de duzentas pessoas acompanharam o finado até à morada última, achando-se representadas entre elas as primeiras classes da sociedade. O conselheiro, posto não figurasse em nenhum grande cargo do Estado, ocupava elevado lugar na sociedade, pelas relações adquiridas, cabedais, educação e tradições de família. Seu pai fora magistrado no tempo colonial, e figura de certa influência na corte do último vice-rei. Pelo lado materno descendia de uma das mais distintas famílias paulistas. Ele próprio exercera dois empregos, havendo-se com habilidade e decoro, do que lhe adveio a carta de conselho e a estima dos homens públicos. Sem embargo do ardor político do tempo, não estava ligado a nenhum dos dois partidos, conservando em ambos preciosas amizades, que ali se acharam na ocasião de o dar à sepultura. Tinha, entretanto, tais ou quais idéias políticas, colhidas nas fronteiras conservadoras e liberais, justamente no ponto em que os dois domínios podem confundir-se. Se nenhuma saudade partidária lhe deitou a última pá de terra, matrona houve, e não só uma, que viu ir a enterrar com ele a melhor página da sua mocidade.\n\nA família do conselheiro compunha-se de duas pessoas: um filho, o Dr. Estácio, e uma irmã, D. Úrsula. Contava esta cinqüenta e poucos anos; era solteira; vivera sempre com o irmão, cuja casa dirigia desde o falecimento da cunhada. Estácio tinha vinte e sete anos, e era formado em matemáticas. O conselheiro tentara encarreirá-lo na política, depois na diplomacia; mas nenhum desses projetos teve começo de execução.\n\nO Dr. Camargo, médico e velho amigo da casa, logo que regressou do enterro, foi ter com Estácio, a quem encontrou no gabinete particular do finado, em companhia de D. Úrsula. Também a dor tem suas volúpias; tia e sobrinho queriam nutri-la com a presença dos objetos pessoais do morto, no lugar de suas predileções quotidianas. Duas tristes luzes alumiavam aquela pequena sala. Alguns momentos correram de profundo silêncio entre os três. O primeiro que o rompeu, foi o médico.\n\n— Seu pai deixou testamento?\n\n— Não sei, respondeu Estácio.\n\nCamargo mordeu a ponta do bigode, duas ou três vezes, gesto que lhe era habitual quando fazia alguma reflexão.\n\n— É preciso procurá-lo, continuou ele. Quer que o ajude?\n\nEstácio apertou-lhe afetuosamente a mão.\n\n— A morte de meu pai, disse o moço, não alterou nada as nossas relações. Subsiste a confiança anterior, do mesmo modo que a amizade, já provada e antiga.";



  return (
    <View style={ estiloAtual.fundo }>
      <View style={ estiloAtual.cabecalho }>
        <Text style={ estiloAtual.textoSwitch }>{textoSwitch}</Text>

        <Switch value={ modoEscuro } onValueChange={ () =>  alterarModo(modoEscuro) }/>
      </View>

      <View style={ estiloAtual.titulo }>
        <Text style={ estiloAtual.tituloLivro }>{titulo}</Text>

        <Text style={ estiloAtual.numeroCapitulo }>{capitulo}</Text>
      </View>

      <ScrollView>
        <Text style={[ estiloAtual.introLivro, { fontSize: tamanhoFonte }]}>{intro}</Text>
      </ScrollView>

      <View style={ estiloAtual.fundoSlider }>
        <Slider minimumValue={ 14 } step={ 2 } maximumValue = { 48 } onValueChange={ alterarTamanho } style={ estiloAtual.slider } />

        <Text style={ estiloAtual.textoSlider }>{textoSlider}</Text>
      </View>
    </View>
  )
}

const claro = StyleSheet.create({
  fundo: {
    backgroundColor: 'antiquewhite',
    flex: 1,
    padding: '1rem'
  },

  titulo: {
    margin: '1rem',
    justifyContent: 'center',
  },

  tituloLivro: {
    fontFamily: 'Noto Serif',
    fontSize: '2rem',
    textAlign: 'center'
  },
  /* As definições de família de fonte devem estar no estilo dos componentes de texto, não views e semelhantes */

  numeroCapitulo: {
    textAlign: 'center',
    fontFamily: 'Noto Serif',
    fontSize: '1rem'
  },

  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  textoSwitch: {
    marginRight: 10
  },

  introLivro: {
    fontFamily: 'Noto Serif',
    textAlign: 'justify',
    margin: '0.5rem'
  },

  fundoSlider: {
    padding: '1rem',
    alignItems: 'center'
  },

  slider: {
    width: '100%'
  },

  textoSlider: {
    fontSize: '1rem',
    fontFamily: 'Noto Serif',
    // marginTop: 10
  }
});

const escuro = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#14151a',
    padding: '1rem'
  },

  titulo: {
    margin: '1rem',
    justifyContent: 'center',
  },

  tituloLivro: {
    fontFamily: 'Noto Serif',
    fontSize: '2rem',
    textAlign: 'center',
    color: 'white'
  },
  /* As definições de família de fonte devem estar no estilo dos componentes de texto, não views e semelhantes */

  numeroCapitulo: {
    textAlign: 'center',
    fontFamily: 'Noto Serif',
    color: 'white',
    fontSize: '1rem'
  },

  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  textoSwitch: {
    marginRight: 10,
    color: 'white'
  },

  introLivro: {
    fontFamily: 'Noto Serif',
    color: 'white',
    textAlign: 'justify',
    margin: '0.5rem'
  },

  fundoSlider: {
    padding: '1rem',
    alignItems: 'center'
  },

  slider: {
    width: '100%'
  },

  textoSlider: {
    color: 'white',
    fontSize: '1rem',
    // marginTop: 10,
    fontFamily: 'Noto Serif'
  }
})
