/* Aula 14 - Componentes de Interface, Picker - Componente do rodapé */

import React from 'react';
import { View, Text, Image } from 'react-native';
/* Importando todos os componentes nativos que vamos usar */

import { estilos } from '../App';

function Rodape() {
    let logo2 = require('../assets/logo2.png');
    let autor = "Márcio Teodoro";
    let data = "Julho de 2024";

    return (
        <View id="rodape" style={ estilos.rodape }>
            <View style={ estilos.logoAutor }>
                <Image source={ logo2 } style={ estilos.logoRod } resizeMode='contain'></Image>

                <Text style={[ estilos.autorData, { marginLeft: 10 } ]}>{autor}</Text>
            </View>

            <Text style={ estilos.autorData }>{data}</Text>
        </View>
    )
}

export default Rodape;