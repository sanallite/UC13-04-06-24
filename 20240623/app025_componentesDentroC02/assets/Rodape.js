/* Aula 10 - Componentes dentro de componetes, Desafio 6 */

import React from 'react';
import { estilos } from './estilos';
import { View, Image } from 'react-native';

function Rodape() {
    let botaoMidia = require('../img/img7.png');
    let botaoLocais = require('../img/img8.png');
    let botaoUsuario = require('../img/img9.png');
    let botaoAgenda = require('../img/img10.png');
    let botaoMenu = require('../img/img11.png');

    return (
        <View id="View4" style={ estilos.rodape }>
            <Image source={ botaoMidia } style={ estilos.botoesRodape }></Image>

            <Image source={ botaoLocais } style={ estilos.botoesRodape }></Image>

            <Image source={ botaoUsuario } style={{ width: 60, height: 60, resizeMode: 'contain', borderRadius: '50%' }}></Image>

            <Image source={ botaoAgenda } style={ estilos.botoesRodape }></Image>

            <Image source={ botaoMenu } style={ estilos.botoesRodape }></Image>
            {/* Não esqueça de chamar o grupo de estilo, nesse caso chamado de estilos. */}
        </View>
    )
}

export default Rodape;