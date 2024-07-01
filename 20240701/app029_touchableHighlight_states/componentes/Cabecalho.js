/* Aula 11 - Touchable Highlight, States - Cabeçalho da tela. */

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../estilos';

function Cabeçalho() {
    return (
        <View style={ styles.header }>
            <Text style={ styles.titulo }>useState</Text>
        </View>
    )
}

export default Cabeçalho;