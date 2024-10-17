import { TextInput, View ,Button ,Text} from "react-native";

export default function Employee (props)
{
    return(
        <View> 
            <Text>Full Name:</Text>
            <TextInput>{props.name}</TextInput>
            <Text>Age:</Text>
            <TextInput>{props.age}</TextInput>
            <Text>Occupation:</Text>
            <TextInput>{props.occupation}</TextInput>
            <Button title="Update"></Button>
        </View>
    );
}