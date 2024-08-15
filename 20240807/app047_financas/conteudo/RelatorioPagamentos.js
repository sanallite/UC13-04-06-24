/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças - Componente do conteúdo da tela de pagamentos */

import React from 'react';
import { View, Text, SectionList } from 'react-native';

export default function RelatorioPagamentos() {
    const setores = [ [ 'Celulares', 120 ], [ 'Computadores', 108 ], [ 'Assistência Técnica', 97 ], [ 'Acessórios', 75 ] ];

    let total_funcionarios = setores[0][1] + setores[1][1] + setores[2][1] + setores[3][1];
    /* Não esqueça que os índices começam em zero... */

    let valor_pago = 2000000;

    let media_salarial = valor_pago / total_funcionarios;

    function exibirNumeroF({ item }) {
        return (
            <View>
                <Text>Número de Funcionários: {item}</Text>
            </View>
        )
    }

    function exibirTituloS({ section }) {
        return (
            <View>
                <Text>{section.title}</Text>
            </View>
        )
    }

    return (
        <View>
            <View>
                <Text>Valor Total Pago em Salários</Text>
                <Text>R$ {valor_pago}</Text>
            </View>

            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Número de Colaboradores:</Text>
                    <Text>{total_funcionarios}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text>Média Salarial:</Text>
                    <Text>{media_salarial}</Text>
                </View>
            </View>

            <View>
                <View>
                    <Text>Setores</Text>
                </View>

                <View>
                    <SectionList 
                        sections={[ 
                            { title: setores[0][0], data: [setores[0][1]] },
                            { title: setores[1][0], data: [setores[1][1]] },
                            { title: setores[2][0], data: [setores[2][1]] },
                            { title: setores[3][0], data: [setores[3][1]] },
                        ]}
                        /* A propriedade data precisa ser um vetor, pois ela percorre cada item das seções para exibir o conteúdo na tela, mesmo se tiver apenas um item, caso contrário ela retorna apenas um valor. A definição das seções também poderia ser feita utilizando a função map, para criar os objetos com title e data automáticamente, conforme o número de itens do vetor mapeado. Consulte o desafio 2 do SectionList para ver em ação. */
                        
                        renderItem={ exibirNumeroF }
                        renderSectionHeader={ exibirTituloS }
                    />
                </View>
            </View>
        </View>
    )
}