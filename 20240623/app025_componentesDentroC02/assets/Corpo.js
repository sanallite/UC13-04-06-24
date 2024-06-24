/* Aula 10 - Componentes dentro de componentes, Desafio 6 */

import React from 'react';
import { ScrollView } from 'react-native';
import { estilos } from './estilos';
import ItensDestaque  from './ItensDestaque';
import ItensConteudo from './ItensConteudo';

function Corpo() {
    /* Arrays para esse caso não se aplicam bem, pois quase todos os componentes tem caracteristicas diferentes, mas o exemplo abaixo mostra como seria. */
    /* let itensDestaque = ["Ver Carterinha", "Rede Amiga", "Barilife Plus"];
    let itensConteudo = ["Medidas", "Já fez a Cirurgia Bariátrica?", "Cirurgia", "Hospital"];
    const destaques = [];
    const conteudo = []; */

    /* for ( i = 0; i< itensConteudo.length; i++ ) {
        conteudo.push(
            <ItensDestaque titulo={itensConteudo[i]} style={ estilos.conteudo } subtitulo="A"/>
        )
    } */

    return (
        <ScrollView style={ estilos.corpo }>
            {/* {destaques}
            {conteudo} */}

            <ItensDestaque titulo="Ver carteirinha" style={ estilos.destaque } img={ require('../img/img3.png') } iconeVoltar={ require('../img/img5.png') }/>

            <ItensDestaque titulo="Rede Amiga" style={ estilos.destaque } img={ require('../img/img4.png') } iconeVoltar={ require('../img/img5.png') } novidade />

            <ItensDestaque titulo="Barilife Plus" style={ estilos.destaquePlus } img={ require('../img/img6.png') } iconeVoltar={ require('../img/img51.png') }/>

            <ItensConteudo titulo="Medidas" img={ require('../img/altura.svg') } texto2="Peso: 152kg" texto3="Altura: 190cm"/>

            <ItensConteudo titulo="Já fez a Cirurgia Bariátrica?" img={ require('../img/hospital.svg') } texto1="Sim" />

            <ItensConteudo titulo="Cirurgia" img={ require('../img/hospital.svg') } texto1="Bypass/Gastroplastia em Y de Reux" texto2="02/2017"/>

            <ItensConteudo titulo="Hospital" img={ require('../img/hospital.svg') } texto1="HOSPITAL MARCELINO CAMPAGNAT" />
        </ScrollView>
    )
}

export default Corpo;