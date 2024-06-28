/* Aula 11 - Componentes de interface, Touchable Highlight - Desafio 3 - Componente dos itens que representam os serviços prestados pela prefeitura. */

import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from '../estilos';

function ItensServicos(props) {
    let nomeServ = props.nomeServ;
    let iconeServ = props.iconeServ;
    let idServ = props.id;

    return(
        <View style={ estilos.itensServicos }>
            <Text style={ estilos.nomeServico } >{nomeServ}</Text>
            <Image source={ iconeServ } style={{ width: '60%', height: '60%' }}></Image>
        </View>
    )
}

export default ItensServicos;