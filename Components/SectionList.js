import React from 'react';
import {View, Text, StyleSheet,StatusBar, SafeAreaView, SectionList} from 'react-native';


const Data=[
    {
        title:'Frutas',
        data:['Manzana', 'Banano', 'Fresa']
    },

    {
        title:'Comidas',
        data:['Papas fritas', 'Pollo asado', 'Nachos']
    },

    {
        title:'Bebidas',
        data:['Agua', 'Cáfe', 'Gaseosa']
    }
];



const SectionList_ = () => {
    const Item=({title})=>(
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
    
        </View>
    );

    return(

        <SafeAreaView style={styles.container}>
            <SectionList
            
            sections={Data}
            keyExtractor={(item, index)=>item + index}
            renderItem={({item}) =><Item title={item}/>}
            renderSectionHeader={({section: {title}}) =>(
                <Text style={styles.header}>{title}</Text>
            )}
            />

        </SafeAreaView>

)};
 

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:StatusBar.currentHeight,
        marginHorizontal:16

    },

    item:{
        backgroundColor:'#f9c2ff',
        padding:20,
        marginVertical:8
    },

    header:{
        fontSize:32,
        backgroundColor:'#fff'
    },

    title:{
        fontSize:24
    }
});

export default SectionList_;