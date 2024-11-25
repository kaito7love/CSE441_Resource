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

const Transaction = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState([]);
  const filePath = 'https://kami-backend-5rs0.onrender.com/transactions';

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
      navigation.navigate('TransactionDetail', {transaction: item});
    };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '95%',
          marginLeft: 'auto',
          marginRight: 'auto',
        //   height: '80%',
        }}>
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
                  <Text style={{fontWeight: 'bold'}}>
                    {item.id}-{new Date(item.createdAt).toLocaleString('en-US')}
                  </Text>
                  {item.services.slice(0, 2).map(service => (
                    <Text style={{fontSize: 15}}>
                      <Text style={{color: '#A0A0A0'}}>-</Text>
                      {service.name}
                    </Text>
                  ))}

                  <Text style={{fontSize: 15}}>
                    <Text style={{color: '#A0A0A0'}}>Customer: </Text>
                    {item.customer.name}
                  </Text>
                </View>
         
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 280,
                    marginTop: '10%',
                    color: '#E60861',
                  }}>
                  {item.services.slice(0, 1).map(service => (
                    <Text style={{fontSize: 15}}>
                      <Text style={{color: '#E60861'}}>{service.price} đ</Text>
                    </Text>
                  ))}

                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  );
};

export default Transaction;
