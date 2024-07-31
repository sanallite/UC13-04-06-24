/* Aula 19 - Navegação entre telas, Stack Navigation */

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { estilos } from '../estilos';

export default function Tela_Principal() {
    const nav = useNavigation();
    /* Instânciando numa constante o componente que permite disparar eventos de navegação dentro de um outro componente, assim podendo usar seus métodos. */
    const telas = ['Tela_Principal', 'Tela_Carnaval', 'Tela_FestaJunina', 'Tela_Halloween'];
    /* Arrays de todas as telas para fazer a verificação na função de navegação */

    function acessarTela(tela) {
        for ( i = 0; i < telas.length; i++ ) {
            if ( tela === telas[i] ) {
                nav.navigate(tela);
            }
        }
    }
    /* Função, que também poderia ser criada como constante, que percorre o array de telas e se caso o valor recebido por parâmetro seja igual a uma das telas do array, será feita a navegação para a tela escolhida. */

    return (
        <View style={ estilos.fundoPrincipal }>
            <View style={ estilos.telas }>
                <View style={ estilos.cabecalho }>
                    <Text style={{ fontSize: '1.4rem', marginTop: '0.625rem' }}>Tela Príncipal</Text>

                    <Text style={{ fontSize: '2rem', marginVertical: '0.625rem' }}>Navegação Entre Telas</Text>

                    <Text style={{ marginBottom: '0.625rem' }}>Stack Navigation - DEV Mobile</Text>

                    <Image source={ require('../figura.png') }></Image>
                </View>
                
                <View style={ estilos.corpo }>
                    <Text style={{ fontSize: '1.4rem', marginVertical: '0.625rem' }}>Curiosidades</Text>

                    <TouchableOpacity style={ estilos.pressionaveis } onPress={ () => acessarTela('Tela_Carnaval') }>
                        <Text style={ estilos.textoPress }>Carnaval</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ estilos.pressionaveis } onPress={ () => acessarTela('Tela_FestaJunina') }>
                        <Text style={ estilos.textoPress }>Festa Junina</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ estilos.pressionaveis } onPress={ () => acessarTela('Tela_Halloween') }>
                        <Text style={ estilos.textoPress }>Halloween</Text>
                    </TouchableOpacity>
                </View>

                <View style={ estilos.rodape }>
                    <Text>Márcio Teodoro</Text>
                    <Text>Julho de 2024</Text>
                </View>
            </View>
        </View>
    )
}