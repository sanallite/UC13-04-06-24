/* Aula 11 - Componentes de interface, Touchable Highlight - Desafio 3 - Componente dos itens que representam os serviços prestados pela prefeitura. */

import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { estilos } from '../estilos';

function alimentacao() {
    alert("Fome Zero");
}

function ItensServicos(props) {
    let nomeServ = props.nomeServ;
    let iconeServ = props.iconeServ;

    return(
        <View>
            <Text>{nomeServ}</Text>
            <Image source={ iconeServ } style={{ width: 20, height: 20 }}></Image>
        </View>
    )
}

export default ItensServicos;