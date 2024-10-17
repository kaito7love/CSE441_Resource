import React, {useState} from "react";
import {Text, Button, View} from "react-native"

export default () => {
    const [pressCount, setPressCount] = useState(0);

    return(
        <View>
            <text>You've pressed the button : {pressCount} time(s)</text>
            <Button title="Press me" onPress={() => setPressCount(pressCount + 1)}/>
        </View>
    )
}