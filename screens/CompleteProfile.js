import React, { Component } from 'react'
import { Text, View, SafeAreaView,  StyleSheet, ScrollView, Button } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';



export default class CompleteProfile extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.heading}> Complete Profile </Text>
                <Text style={styles.body}>Tell us even more about yourself and ensure that all details provided herein are valid and up to date.</Text>
            
                <ScrollView style={styles.scroll}>
                <View>
                <Text >Welcome Again</Text>
                <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
        />
                </View>
                </ScrollView>

                <Button onPress={() => doLoginStuff()} 
             style={styles.loginButton}
             title="NEXT"
            
     />
            
            </SafeAreaView>

            
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
      
    },
    heading: {
      width: "100%",
      color: "blue",
      marginTop: 70,
      fontSize: 40,
      fontWeight: "bold",
      
    },
    body: {
        fontSize: 15,
        justifyContent: 'center',
        margin: 10,
        color: "#6e6d6d",
        
      },

      scroll :{
        flex: 1,
        backgroundColor: 'red',
        marginTop: 20
      },
      loginButton: {
        backgroundColor: 'blue',
        color: 'white'
      }
  });
  