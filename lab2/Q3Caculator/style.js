import {Button, StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  result: {
    textAlign: 'center',
    fontSize: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
  },
  buttonNum: {
    width: 60,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOperator: {
    width: 60,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  color: {
    color: 'orange',
    fontSize: 24,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center', // Space buttons evenly
    marginVertical: 5, // Add vertical
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 16,
  }
});
