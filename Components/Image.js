import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Image_ = () => {
    return ( 
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{uri:"https://reactjs.org/logo-og.png"}}
            />
            <Image
                style={styles.logo}
                source={{uri:"https://reactjs.org/logo-og.png"}}
            />
            <Image
                style={styles.logo}
                source={{uri:"https://reactjs.org/logo-og.png"}}
            />

        </View>
     );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },
    logo:{
        width: 100,
        height: 100
    }
});
 
export default Image_;