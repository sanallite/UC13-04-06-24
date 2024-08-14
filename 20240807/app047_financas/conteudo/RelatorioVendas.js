/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças - Componente do conteúdo da tela de vendas */

import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function RelatorioVendas() {
    let resultados = '2.020.565,22';
    let setores = [ 
        { nome: 'Celulares', resultados: '896.034,22', numero_vendas: 3000 }, 
        { nome: 'Computadores', resultados: '567.435,64', numero_vendas: 2145 },
        { nome: 'Assistência Técnica', resultados: '425.642,11', numero_vendas: 1459 },
        { nome: 'Acessórios', resultados: '131.453,25', numero_vendas: 1123 }
    ];

    return (
        <View>
            <View>
                <Text>Valor Bruto Recebido:</Text>
                <Text>R$ {resultados}</Text>
            </View>

            <View>
                <Text>Setor Mais Rentável:</Text>
                <Text>{setores[0].nome}</Text>
                {/* Você precisa extrair o valor da propriedade que quer exibir daquele item do array, porque um objeto inteiro não vai ser exibido, exceto se você torná-lo uma string com JSON.stringfy() */}
            </View>

            <View>
                <Text>Setores</Text>

                <FlatList data={ setores } keyExtractor={( item, index ) => item[index] } renderItem={ ({item}) => ( 
                    <View>
                        <View>
                            <Text>{item.nome}</Text>
                        </View>

                        <View>
                            <Text>Resultados Brutos: R$ {item.resultados}</Text>
                            
                            <Text>Número de Vendas: {item.numero_vendas}</Text>
                        </View>
                    </View>
                ) } />
                {/* Na renderização do item, é chamada uma função anônima, passado por parâmetro um objeto que contém o item, mas não apenas ele, também podendo conter o index do item por exemplo. Usando as chaves você extraí apenas o item, que é o valor do item no array fonte e envia para renderização, usando o return através dos parênteses. */}
            </View>
        </View>
    )
}
