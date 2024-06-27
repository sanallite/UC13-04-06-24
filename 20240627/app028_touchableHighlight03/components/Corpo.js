/* Aula 11 - Componentes de interface, Touchable Highlight - Desafio 3 - Componente corpo */

import React from 'react';
import { View } from 'react-native';
import ItensServicos from './ItensServicos';

function Corpo() {
    let servicos = [];
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

    for ( i = 0; i <= 12; i++ ) {
        servicos.push(
            <ItensServicos nomeServ={nomesServicos[i]} iconeServ={iconeServicos[i]}/>
        );
    }

    return (
        <View style={{ flex: 1 }}>
           {servicos} 
        </View>
        /* Para o conteúdo da array ser exibido na tela, ela precisa estar envolvivida num componente, como o View */
    )
}

export default Corpo;