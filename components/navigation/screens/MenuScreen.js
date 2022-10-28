import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuScreen = ({navigation}) => {
  return (
    <View style={styles.top}>
      <View style={styles.header}>
        <View style={styles.all}>
          <FontAwesome5 name="user-circle" color={'#fff'} size={30} />
          <Text style={styles.text}>Hà Hùng</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="cart-variant"
            color={'#fff'}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#fc2884',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 50,
    flexDirection: 'row',
    marginHorizontal: 30,
    paddingTop: 20,
  },
  all: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
    color: '#fff',
  },
});
