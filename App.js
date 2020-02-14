import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from "./screens/Profile";
import BasicSectionList from './screens/BasicSectionList';
//import CompleteProfile from './screens/CompleteProfile';

//import CustomEntry from './CustomEntry'


export default function App() {
  return (
    <View>
      <BasicSectionList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1   
  },
});
