/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças - Tela das compras */

import React, { useState } from 'react';
import { View, Text, Switch, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Compras() {
    const nav = useNavigation();

    const [ estadoSwitch1, mudarEstado1 ] = useState( 0 );
    const [ estadoSwitch2, mudarEstado2 ] = useState( 0 );
    const [ estadoSwitch3, mudarEstado3 ] = useState( 0 );

    const mudarTela = () => {
        if ( estadoSwitch1 === 1 ) {
            nav.navigate('Tela Inicial');
        }
    }

    return (
        <View>
            <View>
                <Text>Relatório de Compras</Text>
            </View>
            
            <View>
                <Switch value={ estadoSwitch1 } onValueChange={ (novoValor) => mudarEstado1(novoValor) } />
                <Switch value={ estadoSwitch2 } onValueChange={ (novoValor) => mudarEstado2(novoValor) } />
                <Switch value={ estadoSwitch3 } onValueChange={ (novoValor) => mudarEstado3(novoValor) } />
            </View>

            <Pressable onPress={ mudarTela }>
                <Text>Continuar</Text>
            </Pressable>
        </View>
    )
}