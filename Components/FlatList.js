import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, FlatList} from 'react-native';

const Data=[
    {id:'1', 
    title:'Primer elemento'
    },

    {id:'2', 
    title:'Segundo elemento'
    },

    {id:'3', 
    title:'Tercer elemento'
    }
];

const Item=({title})=>(
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>

    </View>
);


const FlatList_ = () => {

    const renderItem=({item})=>(
        <Item
        title={item.title}
        />
    );
    return (  
        <SafeAreaView stye={styles.container}>
            <FlatList
            
            data={Data}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            />

        </SafeAreaView>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight || 0,
    },

    item:{
        backgroundColor:'#f9c2ff',
        padding: 20,
        marginVertical:8,
        marginHorizontal:16
    },
    title:{
        fontSize:32,

    }
})
 
export default FlatList_;