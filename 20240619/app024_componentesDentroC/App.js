/* Aula 10 - Componentes dentro de componentes */

import React from 'react';
import { View, /* Text,  Image */ } from 'react-native';
/* Importando a biblioteca e os componentes que usaremos. */

import { estilos } from './src/styleSheet/estilos';
/* Importanto o grupo de estilos que está num arquivo externo, não sendo necessário colocar a extensão, por se tratar de outro arquivo js. */

import Cabecalho from './src/Cabecalho';
import Conteudo from './src/Conteudo';
import Rodape from './src/Rodape';
/* Importando os componentes que criamos em outros arquivos. */
  
/* Criando a função do app */
function App() {
  /* let img = "https://www.pr.senac.br/images/topo_site_bl1_2018.png"; 
  Removendo coisas que agora estão em arquivo externo */

  /* let autor = "Márcio Teodoro";
  let data = "Junho de 2024"; */
  /* let titulo = "Desenvolvimento Mobile"; */
  /* Definindo variáveis. */

  /* Retornando o que será exibido na tela. */
  return (
    <View id="fundo" style={ estilos.fundo }>
      {/* <View id="cabecalho" style={ estilos.cabecalho }>
        <Text style={ estilos.cabTitulo }>{titulo}</Text>

        <Image source={{ uri: img }} style={ estilos.cabImagem }></Image>

        <Text style={ estilos.cabSubTitulo }>Fundamentos III</Text>
      </View> */}
      <Cabecalho img="https://hololive.hololivepro.com/wp-content/uploads/2024/06/JusticeKV.png"/>
      {/* Chamando o componente cabeçalho, com uma tag hibrida, de abertura e fechamento. */}
      {/* Criando parâmetros, pra que os itens tenham conteúdo e atributos diferentes, ainda não sei como fazer isso funcionar junto com a folha de estilo externa. */}

      {/* <View id="conteudo" style={ estilos.conteudo }>
        <Text>Conteúdo</Text>
      </View> */}
      <Conteudo />

      {/* <View id="rodape" style={ estilos.rodape }>
        <Text style={ estilos.rodAutor }>{autor}</Text>

        <Text style={ estilos.rodAutor }>{data}</Text>
      </View> */}
      <Rodape autor="Sanallite" data="20 de junho"/>
    </View>
  )
}

export default App;
/* Exportando o função principal do app, para que ele sejá exibido. */