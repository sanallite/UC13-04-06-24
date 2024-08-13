/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças - Componente do conteúdo da tela de vendas */

import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function RelatorioVendas() {
    let resultados = '1.340.875,00';
    let setores = [ 'Celulares', 'Computadores', 'Assistência Técnica', 'Acessórios' ];

    return (
        <View>
            <View>
                <Text>Valor Bruto Recebido:</Text>
                <Text>R$ {resultados}</Text>
            </View>

            <View>
                <Text>Setor Mais Rentável:</Text>
                <Text>{setores[0]}</Text>
            </View>

            <View>
                <Text>Setores</Text>

                <FlatList data={ setores } keyExtractor={( item, index ) => item[index] } renderItem={ ({item}) => ( 
                    <View>
                        <View>
                            <Text>{item}</Text>
                        </View>
                        {/* Por algum motivo não foi possível exibir os itens se eles sendo objetos, o que seria útil para mostrar nomes e resultados diferentes, eu poderia fazer a renderização ser uma função separada, mas quis deixar um exemplo de renderização em linha */}

                        <View>
                            <Text>Resultados Brutos: 99.999,00</Text>
                            
                            <Text>Número de Vendas: 300</Text>
                        </View>
                    </View>
                ) } />
                {/* Na renderização do item, é chamada uma função anônima, passado por parâmetro um objeto que contém o item, mas não apenas ele, também podendo conter o index do item por exemplo. Usando as chaves você extraí apenas o item, que é o valor do item no array fonte e envia para renderização, usando o return através dos parênteses. */}
            </View>
        </View>
    )
}
