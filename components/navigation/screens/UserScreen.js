import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserScreen = ({navigation}) => {
  return (
    <>
      <View style={{backgroundColor: '#fc2884'}}>
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
      <View style={{height: 3, backgroundColor: 'yellow'}}></View>
      <View style={styles.member}>
        <View style={styles.all}>
          <MaterialCommunityIcons
            name="message-processing-outline"
            color={'#fff'}
            size={30}
          />
          <Text style={styles.text}>Message</Text>
        </View>
        <View style={styles.cicrle}>
          <Text>5</Text>
        </View>
      </View>
      <View style={styles.member}>
        <View style={styles.all}>
          <MaterialCommunityIcons name="bell" color={'#fff'} size={30} />
          <Text style={styles.text}>Notification</Text>
        </View>
        <View style={styles.cicrle}>
          <Text>5</Text>
        </View>
      </View>
      <View style={styles.member}>
        <View style={styles.all}>
          <FontAwesome5 name="user-alt" color={'#fff'} size={30} />
          <Text style={styles.text}>Account Detail</Text>
        </View>
        <View style={styles.cicrle}>
          <Text>5</Text>
        </View>
      </View>
      <View style={styles.member}>
        <View style={styles.all}>
          <MaterialCommunityIcons name="cart" color={'#fff'} size={30} />
          <Text style={styles.text}>My Purchase</Text>
        </View>
        <View style={styles.cicrle}>
          <Text>5</Text>
        </View>
      </View>
      <View style={[styles.member]}>
        <View style={styles.all}>
          <Ionicons name="ios-settings-sharp" color={'#fff'} size={30} />
          <Text style={styles.text}>Settings</Text>
        </View>
        <View style={styles.cicrle}>
          <Text>5</Text>
        </View>
      </View>
      <View style={styles.icon}>
        <Ionicons name="fast-food-sharp" color={'#fff'} size={200} />
      </View>
    </>
  );
};

export default UserScreen;
const styles = StyleSheet.create({
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
  cicrle: {
    height: 25,
    width: 25,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  member: {
    backgroundColor: '#fc2884',
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fc2884',
    paddingBottom: 20,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
