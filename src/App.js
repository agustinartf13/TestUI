import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Route from './route';

const App = () => {
  return (
    <NavigationContainer>
      <Route/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})