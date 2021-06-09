import React, { useState } from 'react';
import {StyleSheet, SafeAreaView, TextInput} from 'react-native';

const Inputs = () => {

    const [text, onChangeText]=useState(null);
    const [number, onChangeNumber]=useState(null);
    return (  
        <SafeAreaView>
            <TextInput
            
                autoCapitalize='words'
                style={styles.input}
                placeholder='Ingrese un texto'
                onChangeText={text=>onChangeText(text)}
                value={text}
            ></TextInput>
            <TextInput
            
                autoFocus={true}
                style={styles.input}
                placeholder='Ingrese un número'
                onChangeText={text=>onChangeNumber(number)}
                value={number}
                keyboardType='numeric'
            ></TextInput>
        </SafeAreaView>

    );
};

const styles=StyleSheet.create({
    input:{
        height: 40,
        margin: 12,
        borderWidth:1
    }
});
 
export default Inputs;
