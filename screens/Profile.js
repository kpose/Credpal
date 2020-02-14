import React from 'react';
import { StyleSheet, Text, Alert, View, Button, SectionList, Platform, SafeAreaView } from 'react-native';
import BasicSectionList from './BasicSectionList';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title}>Edit Profile</Text>
      <Button
          title="Save"
          color="#f194ff"
          onPress={() => Alert.alert('Profile Updated')}
        />
       <View style={styles.buttonContainer}>
<Text style={styles.button}>Personal</Text>
<Text style={styles.button}>Security</Text>
<Text style={styles.button}>Others</Text>
</View>
    <BasicSectionList />
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    
  },
  title: {
    width: "100%",
    marginTop: 50,
    fontSize: 40,
    fontWeight: "bold",
    margin: 20
    
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
  }
});
