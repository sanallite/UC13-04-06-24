/* Aula 19 - Navegação entre telas, Stack Navigation - Desafios 4 e 5, Componente com a estrutura do conteúdo de cada tela */

import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { estilo } from './estilos';
import { useNavigation } from '@react-navigation/native';

export default function ConteudoTelas(props) {
    return (
        <View style={ estilo.fundo }>
            <View style={ estilo.banner }>
                <Image source={ props.imagem } style={ estilo.imagem } resizeMode='contain' />
            </View>

            <View style={ estilo.viewPrincipal }>
                <Text style={ estilo.titulo }>{ props.titulo }</Text>

                <Text style={ estilo.texto }>{props.texto}</Text>
            </View>

            <View style={ estilo.navegacao }>
                <Pressable style={[ estilo.pressionaveis, estilo.pular ]}>
                    <Text style={[ estilo.textoPress, { color: 'rgb(48, 111, 225)' } ]}>Pular</Text>
                </Pressable>

                <Pressable style={[ estilo.pressionaveis, estilo.proximo ]}>
                    <Text style={[ estilo.textoPress, { color: 'white' } ]}>Próximo</Text>
                </Pressable>
            </View>
        </View>
    )
}