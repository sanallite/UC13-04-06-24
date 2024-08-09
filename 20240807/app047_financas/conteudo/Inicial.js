/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças */

import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export default function Inicial() {
    const nav = useNavigation();

    const [ itemSelected, setItem ] = useState('');

    const alterarItem = (novo) => {
        setItem(novo);
    }

    const mudarTela = (selecionada) => {
        nav.navigate(selecionada);
    }

    return (
        <View>
            <View>
                <Text>Tela Inicial</Text>
            </View>

            <View>
                <Picker selectedValue={ itemSelected } onValueChange={ alterarItem }>
                {/* Na chamada da função a cada mudança de valor, não deve-se coloca-lá numa função aero, nem definir um valor entre parênteses, com o parâmetro sendo enviado automáticamente */}

                    <Picker.Item label='Selecione Uma Categoria' value= '' />
                    <Picker.Item label='Vendas' value='Tela de Vendas' />
                    <Picker.Item label='Compras' value='Tela de Compras' />
                </Picker>

                <Pressable onPress={ () => mudarTela(itemSelected) }>
                    <Text>Continuar</Text>
                </Pressable>
            </View>
        </View>
    )
}