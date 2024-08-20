/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças - Tela da folha de pagamentos. */

import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import RelatorioPagamentos from './RelatorioPagamentos';
import { estilo } from '../estilo';

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

        else {
            alert('Vamos Permanecer Nessa Tela');
            /* Caso a opção padrão ou alguma outra seja selecionada */
        }
    }

    return (
        <View style={[ estilo.fundo, { backgroundColor: '#7188ea' } ]}>
            <RelatorioPagamentos />

            <View style={ estilo.navegacao }>
                <Text style={ estilo.textoNavegacao }>Navegação</Text>

                <Slider minimumValue={ 1 } maximumValue={ 4 } step={ 1 } value={ valorSlider } onValueChange={ mudarValor }/>

                <ScrollView horizontal={ true } contentContainerStyle={ estilo.scrollViewContainer } >
                    <View style={ estilo.scrollNavegacao }>
                        <Text style={ estilo.itensNavegacao }>Pagamentos</Text>
                
                        <Text style={ estilo.itensNavegacao }>Compras</Text>
    
                        <Text style={ estilo.itensNavegacao }>Vendas</Text>

                        <Text style={ estilo.itensNavegacao }>Início</Text>
                        {/* Cada componente de texto ocupa um espaço flexível da View, com uma margin adicionado mais espaço para fazer a rolagem horizontal */}

                    </View>
                    {/* Contâiner View que ocupa 100% do espaço da ScrollView com os itens filhos alinhados em linha */}

                </ScrollView>
                {/* Erro: ScrollView child layout (["justifyContent"]) must be applied through the contentContainerStyle prop. */}
                {/* Algumas definição de estilo da ScrollView devem ser definidas pelo contentContainerStyle não pelo style. */}

                <View style={{ alignItems: 'center' }}>
                    <Pressable onPress={ () => mudarTela(valorSlider) } style={ estilo.pressable }>
                        <Text style={{ color: 'gray' }}>Continuar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}