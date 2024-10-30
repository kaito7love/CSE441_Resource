import React, {useState} from 'react';
import {Alert, ScrollView, TextInput, View, FlatList} from 'react-native';
import {Button, Text, Card} from 'react-native-paper';
import style from './style';

const Product_Search = () => {
  const [data, setData] = useState('');
  const [value, setValue] = useState('');

  let filePath = 'https://dummyjson.com/products';

  const searchProduct = () => {
    // Alert.alert(value)
    if (value != '')
      filePath = 'https://dummyjson.com/products/search?q=' + value;
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new console.error('Network response not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
        // console.log(d.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <View>
      <Text>Search Product</Text>
      <TextInput 
        placeholder="Search"
        value={value}
        onChangeText={setValue}
      />

      <Button style={[style.button,{color:'white'}]} onPress={searchProduct}>
        {/* <Text style={{color: 'white'}}>SEARCH</Text> */}
        SEARCH
      </Button>
      
      <View>
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
    </View>
  );
};

export default Product_Search;
