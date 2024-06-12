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
      <View style={{ backgroundColor: corPrimaria, flexDirection: 'row' }}>
        <Image source={ iconeVoltar } style={{ width: 20, height: 20 }}></Image>

        <Text style={{ color: corSecundaria }}>
          {pagina}
        </Text>
      </View>

      <View style={{ backgroundColor: corSecundaria, flexDirection: 'row' }}>
        <Text>
          {textoPesquisa}
        </Text>

        <Image source={ iconePesquisa } style={{ width: 20, height: 20 }}></Image>
      </View>

      <View>
        <Text style={{ color: corPrimaria }}>
          {titulo}
        </Text>
      </View>

      <View>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image source={ fotoAgua } style={{ width: 100, height: 100 }}></Image>
          </View>

          <View style={{ flexDirection: 'column' }}>
            <View>
              <Text>
                {unidade1}
              </Text>
            </View>

            <View>
              {enderecoUN1}
            </View>
          </View>

          
        </View>

        <View>

        </View>

        <View>

        </View>

        <View>

        </View>
      </View>
    </View>
    /* Também é possível importar o font awesome se você instalá-lo no seu projeto, pesquise mais depois. */
  )
}

export default App;