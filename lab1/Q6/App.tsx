import { View, Text, StyleSheet,ScrollView, Button, Alert } from "react-native";
// import data from './Data'
// import Square from './Q4ReactNative/Square'
// import styles from "./style";
import Sum2Number from "./Q6_2/Sum2Number";
import FindMinimum from "./Q6_3/findMinimum";
import HailStone from "./Q6_4/HailStone";
import Employee from "./Q6_1/employee";
import EmployeeDetail from "./Q6_1/employee_detail";

export default App = () => {
  return (

    <ScrollView >

      <Employee name="Nguyen Van A" age ="18" occupation="IT"/>
      <Employee name="Nguyen Van A" age ="18" occupation="IT"/>
      <EmployeeDetail/>

      
     {/* <Sum2Number /> */}

      {/* <DemoState/> */}

      {/* <FindMinimum/> */}

      {/* <HailStone/> */}
    </ScrollView>
  );
};