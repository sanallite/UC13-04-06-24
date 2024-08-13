/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças - Tela da folha de pagamentos. */

import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

export default function Pagamentos() {
    const nav = useNavigation();
    /* Necessário usar os parênteses, descrição da função: Hook to access the navigation prop of the parent screen anywhere. */

    const [ valorSlider, setValor ] = useState( 0 );

    const mudarValor = (novo_valor) => {
        setValor(novo_valor);
    }

    const mudarTela = (valor) => {
        if ( valor === 2 ) {
            nav.navigate('Tela de Compras')
        }

        else if ( valor === 3 ) {
            nav.navigate('Tela de Vendas')
        }

        else if ( valor === 4 ) {
            nav.navigate('Tela Inicial')
        }
    }

    return (
        <View>
            <View>
                <Text>Folha de Pagamentos</Text>
            </View>

            <View>
                <Slider minimumValue={ 1 } maximumValue={ 4 } step={ 1 } value={ valorSlider } onValueChange={ mudarValor }/>

                <ScrollView horizontal={ true }>
                    <Text>Pagamentos</Text>
                    <Text>Compras</Text>
                    <Text>Vendas</Text>
                    <Text>Início</Text>
                </ScrollView>

                <Pressable onPress={ () => mudarTela(valorSlider) }>
                    <Text>Continuar</Text>
                </Pressable>
            </View>
        </View>
    )
}