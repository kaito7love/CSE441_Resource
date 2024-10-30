import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Button, Text, Card} from 'react-native-paper';

const Product_Detail = () => {
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
      <Text>Product Detail</Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View>
              <Card>
                <Card.Cover source={{uri: item.thumbnail}} />
                <Card.Title title={item.title} />
                <Card.Content>
                  <Text>Description: {item.description}</Text>
                  <Text>Price: {item.price}</Text>
                  <Text>Discount: {item.discountPercentage}</Text>
                  <Text>Rating: {item.rating}</Text>
                  <Text>Stock: {item.stock}</Text>
                  <Text>Brand: {item.brand}</Text>
                </Card.Content>
                <Card.Actions>
                  <Button>Delete</Button>
                  <Button>Cancel</Button>
                </Card.Actions>
              </Card>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Product_Detail;
