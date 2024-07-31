/* Aula 19 - Navegação de telas, Stack Navigation - Desafio 2 */

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Tela_Principal() {
    const nav = useNavigation();

    let titulo = "Desenvolvimento Mobile";
    let descricao = "Alguns projetos feitos até agora";
    let opcoes = ['Switch e Slider', 'FlatList', 'UseState'];

    return (
        <View>
            <View>
                <Text>{titulo}</Text>
                <Text>{descricao}</Text>
            </View>

            <View>
                <Pressable>
                    <Text>{opcoes[0]}</Text>
                </Pressable>

                <Pressable>
                    <Text>{opcoes[1]}</Text>
                </Pressable>

                <Pressable>
                    <Text>{opcoes[2]}</Text>
                </Pressable>
            </View>
        </View>
    )
}