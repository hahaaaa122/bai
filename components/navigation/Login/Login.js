import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{backgroundColor: '#fc2884'}}>
        <View style={styles.top}>
          <Text style={styles.TextTop}>Sign in</Text>
        </View>
      </View>

      <View style={styles.TextInput}>
        <LinearGradient
          colors={[
            '#d142f5',
            '#f542aa',
            '#ecf542',
            '#f5aa42',
            '#f56f42',
            '#f54e42',
          ]}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={styles.grediant}>
          <TextInput
            placeholder="E-mail"
            placeholderTextColor={'#1f2922'}
            style={styles.input1}
          />
        </LinearGradient>
        <View style={{height: 30}}></View>
        <LinearGradient
          colors={[
            '#d142f5',
            '#f542aa',
            '#ecf542',
            '#f5aa42',
            '#f56f42',
            '#f54e42',
          ]}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={styles.grediant}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={'#1f2922'}
            style={styles.input2}
          />
        </LinearGradient>
      </View>
      <View style={styles.mid}>
        <View style={{flexDirection: 'row'}}></View>
        <TouchableOpacity>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUp}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.textBottom}>Don't have Account?</Text>
        <Text style={styles.textBottom1}>Create Account</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  top: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  TextTop: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '500',
    marginBottom: 15,
  },
  TextInput: {
    marginTop: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input1: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 5,
    flex: 1.0,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '99%',
    margin: 2,
  },
  input2: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 5,
    flex: 1.0,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '99%',
    margin: 2,
  },
  mid: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  TextMid: {
    fontSize: 18,
    fontWeight: '500',
  },
  signUp: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  button: {
    backgroundColor: '#fc2884',
    paddingHorizontal: 65,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
  bottom: {
    marginTop: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  textBottom: {
    fontSize: 16,
    fontWeight: '500',
  },
  textBottom1: {
    fontSize: 16,
    color: '#fc2884',
    fontWeight: '500',
  },
  grediant: {
    height: 44,
    width: 350,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
