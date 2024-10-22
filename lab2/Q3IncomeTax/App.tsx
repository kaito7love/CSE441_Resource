/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import styles from './style'

const App = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState('');

  const caculateTax = () => {
    const incomeAmount = parseInt(income);

    if (isNaN(incomeAmount) || incomeAmount < 0) {
      setTax('Invalid income');
      return;
    }

    let taxAmount = 0;
    if (incomeAmount <= 10000000) {
      taxAmount = incomeAmount * 0.1;
    } else if (incomeAmount <= 50000000) {
      taxAmount = 10000000 * 0.1 + (incomeAmount - 10000000) * 0.2;
    } else {
      taxAmount =
        10000000 * 0.1 + 40000000 * 0.2 + (incomeAmount - 50000000) * 0.3;
    }
    setTax(`Income Tax: ${taxAmount.toFixed(2)}đ`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Income Tax Caculator</Text>
      <TextInput
        textAlign="left"
        style={styles.input}
        placeholder="Enter your income"
        value={income}
        onChangeText={text => setIncome(text)}></TextInput>
      <Button title="Caculate Tax" onPress={caculateTax}></Button>
      <Text style={styles.result}>${tax}</Text>
    </View>
  );
};
export default App;
