import React, { Component } from 'react'
import { Text, View,  SafeAreaView, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default class CustomEntry extends Component {
    render() {
        return (
            <SafeAreaView style ={styles.container}>
                <View style = {styles.titlebar}>
                <Ionicons name="ios-pizza" color="red" size={30} />
                <Text style = {styles.heading}>Welcome Again</Text>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}/>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },

    titlebar :{
        width: "100%",
        paddingLeft: 30
        
    },
    heading: {
        
        color: '#b8bece'
    }
  });
  