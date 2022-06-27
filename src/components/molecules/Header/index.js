import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICDropdown, ICLike, ICSun, ICUser} from '../../../assets';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity>
          <ICUser height={25} width={25} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <ICLike height={25} width={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <ICSun height={25} width={25} />
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.name}>Anya</Text>
          <ICDropdown height={10} width={10}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    color: '#011',
    fontWeight: '700',
    marginRight: 5
  },
});
