import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { ICBabyActive, ICBabyInactive, ICDoctorActive, ICDoctorInactive, ICMotherActive, ICMotherInactive } from '../../../assets';


const TabItem = ({title, active}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <ICDoctorActive /> : <ICDoctorInactive />;
    }
    if (title === 'Baby') {
      return active ? <ICBabyActive /> : <ICBabyInactive />;
    }
    if (title === 'Mother') {
      return active ? <ICMotherActive /> : <ICMotherInactive />;
    }
    return <ICDoctorActive />;
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  text: active => ({
    fontSize: 11,
    marginTop: 4,
    color: active ? '#f97316' : '#011',
  }),
});