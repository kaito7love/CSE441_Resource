import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'gray',
    width: '100%',
    height: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  body: {
    width: '70%',
    height: '50%',
  },
  btnRow: {
    flexDirection: 'row',
    paddingTop: 10,
    gap: 30,
  },
  logo: {
    width: '33%',
    height: '50%',
  },
  button:{
    backgroundColor:'blue',
    color:'white'
  }
});
