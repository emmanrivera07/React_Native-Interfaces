import React from 'react';
import {View, Text} from 'react-native';

const View_ =({saludo})=>{
    return(
        <View
            style={{
            flexDirection:"row",
            height: 100,
            padding: 20
            }}>
            <Text>¡Hola Mundo!</Text>
        </View>
    );
}

export default View_;
