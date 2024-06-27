/* Aula 11 - Componentes de interface, Touchable Highlight - Desafio 3 - Componente cabeçalho */

import React from 'react';
import { estilos } from '../estilos';
/* Dois pontos no caminho da pasta, para indicar o caminho a partir da raiz do projeto. */
import { View, Text, Image, Pressable } from 'react-native';
/* Pressable é a versão atualizada do Touchable Highlight. */

function voltar() {
    alert("Não tem mais volta.");
}

function Cabecalho() {
    let pagina = "Serviços";
    let iconeVoltar = require('../assets/arrow-left-solid.svg');
    let iconePesquisar = require('../assets/pesquisar-claro.svg');

    return (
        <View>
            <View style={ estilos.cabecalho }>
            <Pressable onPress={ voltar }>
                <Image source={ iconeVoltar } style={ estilos.iconeVoltar }></Image>
            </Pressable>
            
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={ estilos.tituloPagina }>{pagina}</Text>
            </View>
        </View>

        <View style={ estilos.viewPesquisa }>
            <View style={{ flex: 1 }}>
                <Text style={{ color: "darkgray" }}>Pesquisar Serviços</Text>
            </View>

                <Image source={ iconePesquisar } style={{ width: 20, height: 20 }}></Image>
            </View>
        </View>
    )
}

export default Cabecalho;