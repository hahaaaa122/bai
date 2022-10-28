import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native-gesture-handler';
import Hamburger from '../../assets/MenuHome/hamburger.svg';

const MockData = [
  {
    id: 1,
    name: 'Hamburger',
    URL: Hamburger,
  },
  {
    id: 2,
    name: 'Donut',
    URL: require('../../assets/MenuHome/donut.svg').default,
  },
  {
    id: 3,
    name: 'HotDog',
    URL: require('../../assets/MenuHome/hotdog.svg').default,
  },
  {
    id: 4,
    name: 'Drinks',
    URL: require('../../assets/MenuHome/drink.svg').default,
  },
  {
    id: 5,
    name: 'Ice',
    URL: require('../../assets/MenuHome/Ice.svg').default,
  },
  {
    id: 6,
    name: 'Pizza',
    URL: require('../../assets/MenuHome/pizza.svg').default,
  },
];
const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    const SVG = item.URL;

    return (
      <TouchableOpacity style={styles.Touch}>
        <SVG width={200} height={200} />
        <Text style={{fontSize: 20, fontWeight: '600'}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={styles.header}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={'gray'}
          style={styles.TextInput}
        />
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="search" color={'#gray'} size={20} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          numColumns={2}
          data={MockData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fc2884',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  TextInput: {
    height: 40,
    width: '80%',
    backgroundColor: '#edede8',
    paddingLeft: 45,
    borderRadius: 15,
  },
  icon: {
    position: 'absolute',
    left: 50,
    top: 88,
  },
  Touch: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.75,
    margin: '1%',
    width: '48%',
    backgroundColor: '#fff',
    borderColor: '#f5c542',
  },
});
