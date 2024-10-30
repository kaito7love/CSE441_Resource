import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Item,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  Alert,
} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './style.js';

const ProductList = () => {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products';

  useEffect(() => {
    // Alert.alert(filePath)
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error(error);
      });
  });

  return (
    <View>
      <Text>Product List</Text>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <ScrollView>
                <View style={styles.container}>
                  <View style={styles.logo}>
                    {/* <Text>{item.thumbnail}</Text> */}
                    <Image
                      style={{width: '100%', height: '100%'}}
                      source={{uri: item.thumbnail}}
                    />
                  </View>
                  <View style={styles.body}>
                    <Text>Title: {item.title}</Text>
                    <Text>Description: {item.description}</Text>
                    <Text>Price: {item.price}</Text>
                    <Text>Discount: {item.discountPercentage}</Text>
                    <Text>Rating: {item.rating}</Text>
                    <Text>Stock: {item.stock}</Text>
                    <Text>Brand: {item.brand}</Text>
                    <View style={styles.btnRow}>
                      <Button title="Detail" />
                      <Button title="ADD" />
                      <Button title="DELETE" />
                    </View>
                  </View>
                </View>
              </ScrollView>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProductList;
