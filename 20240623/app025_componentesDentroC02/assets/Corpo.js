/* Aula 10 - Componentes dentro de componentes, Desafio 6 */

import React from 'react';
import { ScrollView } from 'react-native';
import { estilos } from './estilos';
import ItensCorpo  from './ItensCorpo';

function Corpo() {
    let itensDestaque = ["Ver Carterinha", "Rede Amiga", "Barilife Plus"];
    let itensConteudo = ["Medidas", "Já fez a Cirurgia Bariátrica?", "Cirurgia", "Hospital"];
    const destaques = [];
    const conteudo = [];

    for ( i = 0; i < itensDestaque.length; i++ ) {
        if ( itensDestaque[i] == "Barilife Plus" ) {
            destaques.push(
                <ItensCorpo titulo={itensDestaque[i]} style={ estilos.destaquePlus }/>
            )
        }

        else {
            destaques.push(
                <ItensCorpo titulo={itensDestaque[i]} style={ estilos.destaque }/>
            ) 
        }

    }

    for ( i = 0; i< itensConteudo.length; i++ ) {
        conteudo.push(
            <ItensCorpo titulo={itensConteudo[i]} style={ estilos.conteudo } subtitulo="A"/>
        )
    }

    return (
        <ScrollView style={ estilos.corpo }>
            {destaques}
            {conteudo}
        </ScrollView>
    )
}

export default Corpo;