/* Aula 6 - Variáveis, Desafio 3 */

import React from 'react';
import {View, Text, Image} from 'react-native';

function App() {
  const corPrimaria = "#0052cc";
  const corSecundaria = "white";
  const corTercearia = "darkgray";
  const corFundo = "rgb(242, 242, 242)";

  let pagina = "Unidades";
  let titulo = "Unidades do Sesc Paraná em Curitiba";

  let unidade1, unidade2, unidade3, unidade4;
  unidade1 = "Sesc Água Verde";
  unidade2 = "Sesc Centro";
  unidade3 = "Sesc da Esquina";
  unidade4 = "Sesc Educação Infantil";

  let enderecoUN1, enderecoUN2, enderecoUN3, enderecoUN4;
  enderecoUN1 = "Av. República Argentina, 944";
  enderecoUN2 = "Rua José Loureiro, 578";
  enderecoUN3 = "Rua Visconde do Rio Branco, 969";
  enderecoUN4 = "Av. Sete de Setembro, 3219";

  let botao1, botao2, botao3, botao4;
  botao1 = "Início";
  botao2 = "Credencial Senac";
  botao3 = "Pagamentos";
  botao4 = "Refeições";

  let textoPesquisa = "Digite o nome da unidade...";

  let iconeVoltar, iconePesquisa, iconeBotao1, iconeBotao2, iconeBotao3, iconeBotao4;
  iconeVoltar = require('./img/arrow-left-solid.svg');
  iconePesquisa = require('./img/magnifying-glass-solid.svg');
  iconeBotao1 = require('./img/house-solid.svg');
  iconeBotao2 = require('./img/image-portrait-solid.svg');
  iconeBotao3 = require('./img/dollar-sign-solid.svg');
  iconeBotao4 = require('./img/utensils-solid.svg');

  let fotoCentro, fotoAgua, fotoEsquina, fotoInfantil;
  fotoCentro = require('./img/centro.jpg');
  fotoAgua = require('./img/agua.jpg');
  fotoEsquina = require('./img/esquina.jpg');
  fotoInfantil = require('./img/infantil.jpg');

  return (
    <View style={{ flex: 1, backgroundColor: corFundo }}>
      <View style={{ backgroundColor: corPrimaria, flexDirection: 'row', alignItems: 'center' }}>
        <Image source={ iconeVoltar } style={{ width: 20, height: 20, marginHorizontal: 20 }}></Image>

        <Text style={{ color: corSecundaria, fontSize: '1.4em', margin: '0.5em', fontWeight: 'bold' }}>
          {pagina}
        </Text>
      </View>

      <View style={{ backgroundColor: corSecundaria, flexDirection: 'row', margin: 16, padding: '0.5em', justifyContent: 'space-between', alignItems: 'center', borderRadius: 8 }}>
        <Text style={{ color: corTercearia }}>
          {textoPesquisa}
        </Text>

        <Image source={ iconePesquisa } style={{ width: 20, height: 20 }}></Image>
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ color: corPrimaria, fontSize: '1.4em' }}>
          {titulo}
        </Text>
      </View>

      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', padding: 10, marginBottom: 5, backgroundColor: corSecundaria }}>
          <View>
            <Image source={ fotoAgua } style={{ width: 100, height: 100 }}></Image>
          </View>

          <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'center' }}>
            <View>
              <Text style={{ fontSize: '1.2em', color: corPrimaria, fontWeight: 'bold' }}>
                {unidade1}
              </Text>
            </View>

            <View>
              <Text>{enderecoUN1}</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding: 10, marginBottom: 5, backgroundColor: corSecundaria }}>
          <View>
            <Image source={ fotoCentro } style={{ width: 100, height: 100 }}></Image>
          </View>

          <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'center' }}>
            <View>
              <Text style={{ fontSize: '1.2em', color: corPrimaria, fontWeight: 'bold' }}>
                {unidade2}
              </Text>
            </View>

            <View>
              <Text>{enderecoUN2}</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding: 10, marginBottom: 5, backgroundColor: corSecundaria }}>
          <View>
            <Image source={ fotoEsquina } style={{ width: 100, height: 100 }}></Image>
          </View>

          <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'center' }}>
            <View>
              <Text style={{ fontSize: '1.2em', color: corPrimaria, fontWeight: 'bold' }}>
                {unidade3}
              </Text>
            </View>

            <View>
              <Text>{enderecoUN3}</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding: 10, marginBottom: 5, backgroundColor: corSecundaria }}>
          <View>
            <Image source={ fotoInfantil } style={{ width: 100, height: 100 }}></Image>
          </View>

          <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'center' }}>
            <View>
              <Text style={{ fontSize: '1.2em', color: corPrimaria, fontWeight: 'bold' }}>
                {unidade4}
              </Text>
            </View>

            <View>
              <Text>{enderecoUN4}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: corPrimaria, flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={ iconeBotao1 } style={{ width: 20, height: 18.5 }}></Image>
            <Text style={{ color: corSecundaria, textAlign: 'center' }}>Início</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={ iconeBotao2 } style={{ width: 12.5, height: 18.5 }}></Image>
            <Text style={{ color: corSecundaria, textAlign: 'center' }}>Credencial Sesc</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={ iconeBotao3 } style={{ width: 12.5, height: 18.5 }}></Image>
            <Text style={{ color: corSecundaria, textAlign: 'center' }}>Pagamentos</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={ iconeBotao4 } style={{ width: 17.5, height: 18.5 }}></Image>
            <Text style={{ color: corSecundaria, textAlign: 'center' }}>Refeições</Text>
          </View>
        </View>
    </View>
    /* Também é possível importar o font awesome se você instalá-lo no seu projeto, pesquise mais depois. */
  )
}

export default App;