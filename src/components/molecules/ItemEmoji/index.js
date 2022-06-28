import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {emojiLaughing} from '../../../assets';

export const emoji = [
  {
    id: '1',
    emojiUrl:
      'https://cdn.iconscout.com/icon/premium/png-64-thumb/angry-1524736-1290543.png',
  },
];

const index = ({onPress, title, emoji}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14,
        marginLeft: 8,
      }}>
      <View
        style={{
          backgroundColor: '#c7d2fe',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10
        }}>
        <Image height={50} width={50} source={emoji} style={{ resizeMode: 'cover' }} />
      </View>
      <Text style={{marginTop: 5, fontSize: 12, color: '#011'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({});
