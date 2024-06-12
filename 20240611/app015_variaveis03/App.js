/* Aula 6 - Variáveis, Desafio 2 */

import React from 'react';
import {View, Text, Image} from 'react-native';

function App() {
  const corFundo = "#331a00";
  const corFonteTitulo = "gray";
  const segundaCorFonteTitulo = "#005c99";
  const corBotoes = "#003d99";
  const tamanhoFonteTitulo = "1.6em";
  const tamanhoBotoes = "35%";
  const corFonteBotoes = "white";
  const corBordaBotoes = "#0066ff";
  const alinhamentoTextos = "center";
  const espacamento = 20;
  const espacamentoBotoes = "1em";
  const pesoFonteTitulo = "bold";
  const tamanhoBordaBotoes = 1;

  let titulo, destaqueTitulo, botaoJogar, botaoRegulamento;
  titulo = "Campanha de Prevenção à Dengue";
  destaqueTitulo = "Sesc Paraná";
  botaoJogar = "Comece a jogar";
  botaoRegulamento = "Regulamento";

  return (
    <View style={{ flex: 1, backgroundColor: corFundo }}>
      <View style={{ flexDirection: 'column', alignItems: 'center', flex: 0.5, justifyContent: 'flex-end', marginTop: 20 }}>
        <Text style={{ color: corFonteTitulo, fontSize: tamanhoFonteTitulo, fontWeight: pesoFonteTitulo, textAlign: alinhamentoTextos }}>
          {titulo}
        </Text>
        
        <Text style={{ color: segundaCorFonteTitulo, fontSize: tamanhoFonteTitulo, fontWeight: pesoFonteTitulo, textAlign: alinhamentoTextos }}>
          {destaqueTitulo}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', padding: espacamento }}>
        <Image source={ require('./img/imagem.png') } style={{ width: 342, height: 250 }}></Image>
      </View>

      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Text style={{ textAlign: alinhamentoTextos, backgroundColor: corBotoes, width: tamanhoBotoes, padding: espacamentoBotoes, color: corFonteBotoes, borderColor: corBordaBotoes, borderWidth: tamanhoBordaBotoes }}>
          {botaoJogar}
        </Text>

        <Text style={{ textAlign: alinhamentoTextos, backgroundColor: corBotoes, width: tamanhoBotoes, padding: espacamentoBotoes, color: corFonteBotoes, borderColor: corBordaBotoes, borderWidth: tamanhoBordaBotoes }}>
          {botaoRegulamento}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: espacamento }}>
        <Image source={ require('./img/apoio_02.png') } style={{ width: 116, height: 52 }}></Image>
      </View>
    </View>
  )
}

export default App;