/* Aula 11 - Componentes de interface, Touchable Highlight - Desafio 3 - Componente corpo */

import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import ItensServicos from './ItensServicos';
import { estilos } from '../estilos';

function alimentacao() {
    alert("Fome Zero");
}

function alvaras() {
    alert("Abra sua empresa em um dia!");
}

function assistencia() {
    alert("Ajudando quem precisa");
}

function capacitacao() {
    alert("Mais trabalhadores qualificados");
}

function cidadania() {
    alert("Respeitando uns aos outros");
}

function concursos() {
    alert("Estude estude estude");
}

function cultura() {
    alert("Cultura, a gente vê por aqui");
}

function direitos() {
    alert("Alguns tem mais direitos que outros");
}

function educacao() {
    alert("Trabalhando para o futuro da nação");
}

function emergencias() {
    alert("Alertas sobre situações de risco");
}

function esporte() {
    alert("Mais saúde e felicidade");
}

function habitacao() {
    alert("Minha casa, minha vida");
}

function Corpo() {
    let servicos = [];
    /* Nesse caso não foi possível colocar tudo num array, devido aos componentes estarem divididos em quatro linhas, preciso aprender isso depois */

    let nomesServicos = ["Alimentação", "Álvaras, Certidões...","Assistência Social", "Capacitação", "Cidadania", "Concursos Públicos", "Cultura", "Direitos Humanos", "Educação", "Emergências","Esporte e Lazer", "Habitação e Moradia"];

    let iconeServicos = [
        require('../assets/alimentacao.png'),
        require('../assets/alvaras.png'),
        require('../assets/assistencia.png'),
        require('../assets/capacitacao.png'),
        require('../assets/cidadania.png'),
        require('../assets/concursos.png'),
        require('../assets/cultura.png'),
        require('../assets/aviacao.png'),
        require('../assets/educacao.png'),
        require('../assets/emergencias.png'),
        require('../assets/esportes.png'),
        require('../assets/habitacao.png'),
    ];

    /* for ( i = 0; i <= 12; i++ ) {
        servicos.push(
            <View style={{ backgroundColor: 'blue', flexDirection: 'row' }}>
                <ItensServicos nomeServ={nomesServicos[]} iconeServ={iconeServicos[i]}/>
            </View>
        );
    } */

    return (
        <View style={{ flex: 1 }}>
            <View style={ estilos.linhaServicos }>
           {/* {servicos} Para o conteúdo da array ser exibido na tela, ela precisa estar envolvivida num componente, como o View */}

                <TouchableHighlight onPress={ alimentacao }>
                   <ItensServicos nomeServ={nomesServicos[0]} iconeServ={iconeServicos[0]}/> 
                </TouchableHighlight>
                
                <TouchableHighlight onPress={ alvaras }>
                    <ItensServicos nomeServ={nomesServicos[1]} iconeServ={iconeServicos[1]}/>
                </TouchableHighlight>

                <TouchableHighlight onPress= { assistencia }>
                    <ItensServicos nomeServ={nomesServicos[2]} iconeServ={iconeServicos[2]}/>
                </TouchableHighlight>
            </View>

            <View style={ estilos.linhaServicos }>
                <TouchableHighlight onPress= { capacitacao }>
                    <ItensServicos nomeServ={nomesServicos[3]} iconeServ={iconeServicos[3]}/>
                </TouchableHighlight>

                <TouchableHighlight onPress= { cidadania }>
                    <ItensServicos nomeServ={nomesServicos[4]} iconeServ={iconeServicos[4]}/>
                </TouchableHighlight>

                <TouchableHighlight onPress= { concursos }>
                    <ItensServicos nomeServ={nomesServicos[5]} iconeServ={iconeServicos[5]}/>
                </TouchableHighlight>
            </View>

            <View style={ estilos.linhaServicos }>
                <TouchableHighlight onPress= { cultura }>
                    <ItensServicos nomeServ={nomesServicos[6]} iconeServ={iconeServicos[6]}/>
                </TouchableHighlight>

                <TouchableHighlight onPress= { direitos }>
                    <ItensServicos nomeServ={nomesServicos[7]} iconeServ={iconeServicos[7]}/>
                </TouchableHighlight>

                <TouchableHighlight onPress= { educacao }>
                    <ItensServicos nomeServ={nomesServicos[8]} iconeServ={iconeServicos[8]}/>
                </TouchableHighlight>
            </View>

            <View style={ estilos.linhaServicos }>
                <TouchableHighlight onPress= { emergencias }>
                    <ItensServicos nomeServ={nomesServicos[9]} iconeServ={iconeServicos[9]}/>
                </TouchableHighlight>

                <TouchableHighlight onPress= { esporte }>
                    <ItensServicos nomeServ={nomesServicos[10]} iconeServ={iconeServicos[10]}/>
                </TouchableHighlight>

                <TouchableHighlight onPress= { habitacao }>
                    <ItensServicos nomeServ={nomesServicos[11]} iconeServ={iconeServicos[11]}/>
                </TouchableHighlight>
            </View>
        </View> 
    )
}

export default Corpo;