import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

const Sum2Number = () => {
  const [inputValue, setInputValue] = useState('');
  const [total, setTotal] = useState(0);

  const handleSum = () => {
    const inputArray = inputValue.split('');
    const firstDigit = parseInt(inputArray[0], 10);
    const lastDigit = parseInt(inputArray[inputArray.length - 1], 10);
    const sum = firstDigit + lastDigit;
    setTotal(sum);
    // Alert.alert(`The sum of the first and last digits is ${sum}`);
  };

  return (
    <View>
      <TextInput
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
      <Button onPress={handleSum} title="Calculate"></Button>
      <Text>The sum is: {total}</Text>
    </View>
  );
};

export default Sum2Number;
