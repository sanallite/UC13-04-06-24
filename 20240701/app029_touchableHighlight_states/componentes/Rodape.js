/* Aula 11 - Touchable Highlight, States - Rodapé da tela. */

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../estilos';

function Rodape() {
    return (
        <View style={ styles.footer }>
            <Text style={ styles.autorData }>Márcio Teodoro</Text>
            <Text style={ styles.autorData }>Julho de 2024</Text>
        </View>
    )
}

export default Rodape;