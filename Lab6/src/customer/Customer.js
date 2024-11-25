import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Customer = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState([]);
  const filePath = 'https://kami-backend-5rs0.onrender.com/customers';

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (route.params?.refresh) {
      fetchData();
      navigation.setParams({refresh: false});
    }
  }, [route.params?.refresh]);

  const fetchData = () => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d);
      })
      .catch(error => {
        console.log(error);
      });
  };


  const goDetailService = item => {
    navigation.navigate('CustomerDetail', {service: item});
  };

  return (
    <View style={{flex: 1}}>
      <View style={{width: '95%', marginLeft: 'auto', marginRight: 'auto', height: '80%'}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
               onPress={() => goDetailService(item)}
              style={{
                borderColor: 'black',
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
                width: '100%',
                // flexDirection: 'column',
                // justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{fontSize: 20}}>
                    <Text style={{color: '#A0A0A0'}}>Customer: </Text>
                     {item.name} 
                  </Text>
                  <Text style={{fontSize: 20}}>
                    <Text style={{color: '#A0A0A0'}}>Phone: </Text>
                    {item.phone} 
                  </Text>
                  <Text style={{fontSize: 20, color: 'red'}}>
                    <Text style={{color: '#A0A0A0'}}>Total Money: </Text>
                     {item.totalSpent}đ 
                  </Text>
                </View>
                <Icon
                  name="paid"
                  style={{
                    color: '#E60861',
                    fontSize: 30,
                    marginTop: 10,
                    position: 'absolute',
                    marginLeft: 330,
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 320,
                    marginTop: '10%',
                    color: '#E60861',
                  }}>
                  {item.loyalty}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item._id.toString()}
        />
      </View>
      <View style={{ marginTop: 20,width:'95%'}}>
        <View>
        </View>
        <Icon
          name="add-circle"
          style={{
            // left: 290,
            color: '#E60861',
            fontSize: 50,
            textAlign:'right'
            // marginLeft: 50,
          }}
          onPress={() => navigation.navigate('AddCustomer')}
        />
      </View>
    </View>
  );
};

export default Customer;
