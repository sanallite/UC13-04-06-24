/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças - Componente do conteúdo da tela de pagamentos */

import React from 'react';
import { View, Text, SectionList } from 'react-native';

export default function RelatorioPagamentos() {
    const setores = [ [ 'Celulares', 120 ], [ 'Computadores', 108 ], [ 'Assistência Técnica', 97 ], [ 'Acessórios', 75 ] ];

    let total_funcionarios = setores[0][1] + setores[1][1] + setores[2][1] + setores[3][1];
    /* Não esqueça que os índices começam em zero... */

    let valor_pago = 2000000;

    let media_salarial = valor_pago / total_funcionarios;

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
        </View>
    )
}