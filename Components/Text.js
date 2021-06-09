import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Text_ =()=>{ 
    const [titletext, setTittle]=useState('¡Hola Mundo!');

    const bodyText=useState('Este es una anidación de textos');

    const onPressTitle=()=>{
        setTittle('Has presionado el texto');
    }
    return (    
        <View style={styles.container}>
            <Text style={styles.baseText}>
                <Text style={styles.titleText} onPress={onPressTitle}>
                    {titletext}
                    {"\n"}
                    {"\n"}
                </Text>
                <Text numberOfLines={2}>{bodyText}</Text>

            </Text>

        </View>
    );

};

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        alignItems:'center'
    },
    baseText:{
        textAlign:'center'
    },
    titleText:{
        fontSize:20,
        fontWeight:"bold"
    }
});
 
export default Text_;