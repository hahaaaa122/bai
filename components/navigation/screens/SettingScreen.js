import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SettingScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Search />
      <Title />
      <Todo />
    </View>
  );
};

export default SettingScreen;

const Search = () => {
  return (
    <View>
      <Text>Say hi</Text>
    </View>
  );
};

const Title = () => {
  return (
    <View>
      <Text>bai</Text>
    </View>
  );
};

const Todo = () => {
  return (
    <View>
      <Text>ToDo</Text>
    </View>
  );
};
const styles = StyleSheet.create({});