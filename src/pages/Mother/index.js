import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Mother = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text>Mother</Text>
    </SafeAreaView>
  );
};

export default Mother;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
