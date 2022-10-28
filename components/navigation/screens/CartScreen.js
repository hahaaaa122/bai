import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Data = [
  {
    id: 1,
    day: 15,
    month: 'October',
  },
  {
    id: 2,
    day: 16,
    month: 'October',
  },
  {
    id: 3,
    day: 17,
    month: 'October',
  },
  {
    id: 4,
    day: 18,
    month: 'October',
  },
  {
    id: 5,
    day: 19,
    month: 'October',
  },
  {
    id: 6,
    day: 20,
    month: 'October',
  },
  {
    id: 7,
    day: 21,
    month: 'October',
  },
  {
    id: 8,
    day: 22,
    month: 'October',
  },
  {
    id: 9,
    day: 23,
    month: 'October',
  },
  {
    id: 10,
    day: 24,
    month: 'October',
  },
];
const CartScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.flat}>
          <Text style={{fontWeight: 'bold', marginRight: 3}}>{item.day}</Text>
          <Text style={{fontWeight: 'bold'}}>{item.month}</Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <View
        style={{
          backgroundColor: '#fc2884',
        }}>
        <View style={styles.header}>
          <View style={styles.headerST}>
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
      <View style={styles.viewMid}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
          TOTAL
        </Text>
        <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
          $ 250
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <TouchableOpacity style={{marginRight: 5}}>
          <AntDesign name="leftcircle" size={25} color={'#fc2884'} />
        </TouchableOpacity>

        <FlatList
          data={Data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal={true}
          pagingEnabled
        />
        <TouchableOpacity style={{marginLeft: 5}}>
          <AntDesign name="rightcircle" size={25} color={'#fc2884'} />
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 30, marginLeft: 25}}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Payment Method</Text>
      </View>
      <View style={styles.textBottom}>
        <TouchableOpacity>
          <View style={styles.childView}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Mobile banking
            </Text>
            <AntDesign name="right" color={'#fc2884'} size={15} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.textBottom}>
        <TouchableOpacity>
          <View style={styles.childView}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Internet banking
            </Text>
            <AntDesign name="right" color={'#fc2884'} size={15} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.textBottom}>
        <TouchableOpacity>
          <View style={styles.childView}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>SMS banking</Text>
            <AntDesign name="right" color={'#fc2884'} size={15} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.textBottom}>
        <TouchableOpacity>
          <View style={styles.childView}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>PawnShop</Text>
            <AntDesign name="right" color={'#fc2884'} size={15} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.textBottom}>
        <TouchableOpacity>
          <View style={styles.childView}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>PamPal</Text>
            <AntDesign name="right" color={'#fc2884'} size={15} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 30,
  },
  headerST: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
    color: '#fff',
  },
  viewMid: {
    justifyContent: 'center',
    backgroundColor: '#fc2884',
    paddingVertical: 30,
    paddingLeft: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textBottom: {
    borderWidth: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    borderColor: '#f5c542',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  childView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flat: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: '#f5c542',
  },
});
