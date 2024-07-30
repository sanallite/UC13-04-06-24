/* Aula 19 - Navegação entre telas, Stack Navigation */

import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { estilos } from '../estilos';

export default function Tela_Principal() {
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
                <Pressable style={ estilos.pressionaveis }>
                    <Text style={ estilos.textoPress }>Carnaval</Text>
                </Pressable>
                <Pressable style={ estilos.pressionaveis }>
                    <Text style={ estilos.textoPress }>Festa Junina</Text>
                </Pressable>
                <Pressable style={ estilos.pressionaveis }>
                    <Text style={ estilos.textoPress }>Halloween</Text>
                </Pressable>
            </View>
            <View style={ estilos.rodape }>
                <Text>Márcio Teodoro</Text>
                <Text>Julho de 2024</Text>
            </View>
        </View>
    </View>
  )
}