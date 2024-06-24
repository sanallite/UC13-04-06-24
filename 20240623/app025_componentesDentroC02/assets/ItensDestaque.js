/* Aula 10 - Componentes dentro de componentes, Desafio 6 */

import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './estilos';

function ItensDestaque(props) {
    let titulo = props.titulo;
    let estilo = props.style;
    let imagem = props.img;
    let iconeVoltar = props.iconeVoltar;
    let novidade = props.novidade;
    /* Se o componente estiver marcado com uma prop indicando que o conteúdo é uma novidade, o retorno da View será diferente. */

    if ( !novidade ) {
        return (
            <View style={ estilo }>
                <View style={ estilos.destaqueLadoEsquerdo }>
                    <Image source={ imagem } style={ estilos.iconesDestaque }></Image>

                    <Text style={{ marginLeft: 20 }}>
                        {titulo}
                    </Text>
                </View>

                <View style={ estilos.destaqueLadoDireito }>
                    <Image source={ iconeVoltar } style={ estilos.iconesDestaque }></Image> 
                </View>
            </View>
        )
    }

    else {
        return (
            <View style={ estilo }>
                <View style={ estilos.destaqueLadoEsquerdo }>
                    <Image source={ imagem } style={ estilos.iconesDestaque }></Image>

                    <Text style={{ marginLeft: 20 }}>
                        {titulo}
                    </Text>
                </View>

                <View style={ estilos.destaqueLadoDireito }>
                    <Text style={{ backgroundColor: 'red', color: 'white', borderRadius: 25, padding: 6, textAlign: 'center' }}>
                        Novidade
                    </Text>

                    <Image source={ iconeVoltar } style={ estilos.iconesDestaque }></Image> 
                </View>
            </View>
        )
    }
}

export default ItensDestaque;