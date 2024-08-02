/* Aula 19 - Navegação de telas, Stack Navigation - Desafio 2 */

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilo } from './estilos/principal';

export default function Tela_Principal() {
    const nav = useNavigation();

    let titulo = "Desenvolvimento Mobile";
    let descricao = "Alguns projetos feitos até agora";
    let opcoes = ['Switch_Slider', 'FlatList', 'UseState'];

    const acessarTelas = (tela) => {
        for ( i = 0; i < opcoes.length; i++ ) {
            if ( tela === opcoes[i] ) {
                nav.navigate(tela)
            }
        }
    }
    return (
        <View style={ estilo.fundo }>
            <View style={ estilo.cabecalho }>
                <Text>{titulo}</Text>
                <Text>{descricao}</Text>
            </View>

            <View style={ estilo.opcoes }>
                <Pressable onPress={ () => acessarTelas('Switch_Slider') } style={ estilo.pressionaveis }>
                    <Text>Switch e Slider</Text>
                </Pressable>

                <Pressable onPress={ () => acessarTelas('FlatList') } style={ estilo.pressionaveis }>
                    <Text>FlatList</Text>
                </Pressable>

                <Pressable onPress={ () => acessarTelas('UseState') } style={ estilo.pressionaveis }>
                    <Text>UseState</Text>
                </Pressable>
            </View>
        </View>
    )
}