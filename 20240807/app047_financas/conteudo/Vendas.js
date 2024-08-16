/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças - Tela das vendas */

import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

import RelatorioVendas from './RelatorioVendas';
import { estilo } from '../estilo';

export default function Vendas() {
    const [ valorAtual, setValor ] = useState( 0 );
    const nav = useNavigation();

    const alterarValor = (novo) => {
        setValor(novo);
    }

    const mudarTela = (selecionada) => {
        if ( selecionada === 1 ) {
            nav.navigate('Tela Inicial');
        }

        else if ( selecionada === 2 ) {
            nav.navigate('Tela de Compras');
        }

        console.log(selecionada);
    }

    return (
        <View style={[ estilo.fundo, { backgroundColor: '#5fddb9' } ]}>
            <RelatorioVendas />            

            <View>
                <Text>Navegação</Text>

                <Slider mininumValue={ valorAtual } maximumValue={ 2 } step={ 1 } onValueChange={ alterarValor } />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Ficar Nessa Tela</Text>
                    <Text>Tela Inicial</Text>
                    <Text>Tela de Compras</Text>
                </View>

                <View>
                    <Pressable onPress={ () => mudarTela(valorAtual) }>
                        <Text>Continuar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}