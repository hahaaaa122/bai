import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Register = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fc2884'}}>
      <View style={styles.icon}>
        <MaterialCommunityIcons name="cart-variant" size={200} color={'#fff'} />
      </View>
      <View style={styles.title}>
        <Text style={styles.Text}>The store of your</Text>
        <Text style={styles.Text}>dreams. You will find</Text>
        <Text style={styles.Text}>here what you need</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.Start}>
          <Text style={styles.TextButton}>Start Shopping</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.TextBottom}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.Sign}>Sign in here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  icon: {
    marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: '13%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
  },
  button: {
    marginTop: '20%',
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Start: {
    backgroundColor: '#fff',
    paddingHorizontal: '20%',
    paddingVertical: '7%',
    borderRadius: 7,
  },
  TextButton: {
    color: '#fc2884',
    fontSize: 25,
    fontWeight: '600',
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextBottom: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 10,
  },
  Sign: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
});
