import { Button, Text, View } from "react-native";

export default function Education({navigation}) {
    return (
        <>
            <View>
            <Text>Education</Text>
            </View>
            <Button title="Next" onPress={()=>navigation.navigate("Others")}></Button>
        </>
    )
}