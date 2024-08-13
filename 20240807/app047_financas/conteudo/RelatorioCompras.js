/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças - Componente do conteúdo da tela de compras */

import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function RelatorioCompras() {
    const categorias = [ {nome: 'Produtos', valor_investido: '200.999,00'},
        {nome: 'Equipamentos', valor_investido: '265.949,00'},
        {nome: 'Contratação de Serviços', valor_investido: '180.500,00'},
        {nome: 'Alimentação', valor_investido: '139.786,00'},
        {nome: 'Limpeza', valor_investido: '112.199,00'},
        {nome: 'Transporte', valor_investido: '87.633,00'}
    ];

    function renderizar({ item }) {
        return (
            <View>
                <View>
                    {/* <Text>{item.mome}</Text> */}
                </View>

                <View>
                    <Text>Valor Investido:</Text>

                    {/* <Text>{item.valor_investido}</Text> */}
                </View>
            </View>
        )
    }

    return (
        <View>
            <View>
                <Text>Valor Total Investido:</Text>
                <Text>R$ 987.066,00</Text>
            </View>

            <View>
                <Text>Categoria Com Maior Gasto:</Text>
                <Text>{ categorias[1] }</Text>
            </View>

            {/* <FlatList data={ categorias } keyExtractor={ (item) => item.nome } renderItem={ renderizar } /> */}
        </View>
    )
}