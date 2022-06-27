import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/molecules/Header';

const Baby = () => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor="#f97316" />
      <Header />
      <View style={styles.container}>
        
      </View>
    </SafeAreaView>
  );
};

export default Baby;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
