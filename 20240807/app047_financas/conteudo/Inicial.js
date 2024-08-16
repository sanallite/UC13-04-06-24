/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças */

import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { estilo } from '../estilo';

export default function Inicial() {
    const nav = useNavigation();

    const [ itemSelected, setItem ] = useState('');

    const alterarItem = (novo) => {
        setItem(novo);
    }

    const mudarTela = (selecionada) => {
        nav.navigate(selecionada);
    }

    let logo = require('./asset-management.png')

    return (
        <View style={[ estilo.fundo, { backgroundColor: 'orange' } ]}>
            <View style={ estilo.cabecalhoInicial }>
                <Image source={ logo } style={ estilo.logo } />

                <Text style={ estilo.descInicial }>Administre as finanças da sua empresa facilmente através desse aplicativo. Começe pela categoria que quiser e navegue livremente pelas telas.</Text>
            </View>

            <View style={ estilo.conteudoInicial }>
                <Picker selectedValue={ itemSelected } onValueChange={ alterarItem } style={ estilo.pickerInicial }>
                {/* Na chamada da função a cada mudança de valor, não deve-se coloca-lá numa função aero, nem definir um valor entre parênteses, com o parâmetro sendo enviado automáticamente */}

                    <Picker.Item label='Selecione Uma Categoria' value= '' />
                    <Picker.Item label='Vendas' value='Tela de Vendas' />
                    <Picker.Item label='Compras' value='Tela de Compras' />
                    <Picker.Item label='Pagamentos' value='Tela de Pagamentos' />
                </Picker>

                <View style={{ alignItems: 'center' }}>
                    <Pressable onPress={ () => mudarTela(itemSelected) } style={ estilo.pressable }>
                        <Text style={{ color: 'gray' }}>Continuar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}