/* Aula 10 - Componentes dentro de componentes, Desafio 6 */

import React from 'react';
import { ScrollView } from 'react-native';
import { estilos } from './estilos';
import ItensCorpo  from './ItensCorpo';

function Corpo() {
    /* Arrays para esse caso não se aplicam bem, pois quase todos os componentes tem caracteristicas diferentes, mas o exemplo abaixo mostra como seria. */
    /* let itensDestaque = ["Ver Carterinha", "Rede Amiga", "Barilife Plus"];
    let itensConteudo = ["Medidas", "Já fez a Cirurgia Bariátrica?", "Cirurgia", "Hospital"];
    const destaques = [];
    const conteudo = []; */

    /* for ( i = 0; i< itensConteudo.length; i++ ) {
        conteudo.push(
            <ItensCorpo titulo={itensConteudo[i]} style={ estilos.conteudo } subtitulo="A"/>
        )
    } */

    return (
        <ScrollView style={ estilos.corpo }>
            {/* {destaques}
            {conteudo} */}

            <ItensCorpo titulo="Ver carteirinha" style={ estilos.destaque } img={ require('../img/img3.png') }/>
            <ItensCorpo titulo="Medidas" style={ estilos.conteudo } />
        </ScrollView>
    )
}

export default Corpo;