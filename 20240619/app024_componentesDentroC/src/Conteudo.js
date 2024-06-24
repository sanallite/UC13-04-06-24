/* Aula 10 - Componentes dentro de componentes, criando meus próprios componentes. */

import React from 'react';
import {ScrollView, /* View, Text */} from 'react-native';
import { estilos } from './styleSheet/estilos';
import ItensConteudo from './ItensConteudo';
/* Para importar uma função, não precisa das chaves. */
/* Não esqueça de importar os componentes que for usar! */

function Conteudo() {
    /* let texto = "Olá mundo"; */

    let arrayNomes = ['Márcio', 'Luiz', 'David', 'Vanessa', 'Heitor', 'Gustavo'];
    let arrayCorFonte = ["orange", "darkblue", "blue", "red", "black", "green"];
    let arrayCorFundo = ["antiquewhite", "gray", "lightblue", "orange", "red", "yellow"];
    let arrayAltura = ["100", "70", "60", "65", "50", "51"];
    let arrayLargura = ["80%", "30%", "50%", "100%", "88%", "22%"];
    let arrayImgs = [ require("../img/gura.png"), require('../img/fuwawa.webp'), require('../img/fauna.png'), require('../img/bijou.webp'), require('../img/baelz.png'), require('../img/ame.png')];
    let arraySubtitulos = ["Primeiro texto", "Segundo texto", "Terceiro texto", "Quarto texto", "Quinto texto", "Sexto texto"];
    /* Colocando nossos dados em vetores. */

    let itemConteudo = [];
    /* Criando um vetor vazio que abrigará os componentes que serão criados através do loop abaixo. */

    for ( let i = 0; i < arrayNomes.length; i++ ) {
        itemConteudo.push(
            <ItensConteudo texto = {arrayNomes[i]} corFonte = {arrayCorFonte[i]} corFundo = {arrayCorFundo[i]} altura = {arrayAltura[i]} largura = {arrayLargura[i]} img = {arrayImgs[i]} subt = {arraySubtitulos[i]}/>
        );
    }
    /* Enquanto o valor da variável i for menor que o número de indíces no vetor de nomes, será inserido no vetor de itens de conteúdo a chamada do componente externo com seus parâmetros específicos. */

    return (
        <ScrollView style={ estilos.conteudo }>
            {itemConteudo}
            {/* Exibindo todo o conteúdo do vetor, que no caso são todas as chamadas de componentes com parâmetros, assim como os que foram criados manualmente abaixo. */}

            {/* <View style={ estilos.contTexto }>
                <Text style={{ color: 'white' }}>Conteúdo 1</Text>
            </View>

            <View style={ estilos.contTexto }>
                <Text style={{ color: 'white' }}>Conteúdo 2</Text>
            </View>

            <View style={ estilos.contTexto }>
                <Text style={{ color: 'white' }}>Conteúdo 3</Text>
            </View> 
            Conteúdo o que vamos exportar de outro componente. */}

            <ItensConteudo texto="Item conteúdo 1" corFundo="orange" corFonte="yellow" altura="50px"/>
            <ItensConteudo texto="Item conteúdo 2" corFundo="red" corFonte="white" altura="35px"/>
            <ItensConteudo texto="Item conteúdo 3" corFonte="blue" altura="60px"/>
            {/* Criando parâmetros, para que esses props tenham conteúdo e atributos diferentes. */}

            <ItensConteudo texto="Myth" corFundo="lightblue" corFonte="orange" altura="100px" largura="50%"/>
            <ItensConteudo texto="Council & Promise" corFundo="purple" corFonte="white" altura="50px" largura="60%"/>
            <ItensConteudo texto="Advent x Justice" corFundo="lightgreen" corFonte="red" altura="60px" largura="97%"/>
        </ScrollView>
    )
}

export default Conteudo;
/* Exportando a função, que tem o mesmo nome do arquivo, ambos precisam ter o nome com inicial maiúscula */