import { Button, Text, View } from "react-native";

export default function Landing({navigation}) {
    return (
        <>
            <View>
                <Text>Getting started</Text>
            </View>
            <Button title="Next" onPress={()=>navigation.navigate("Personal")}></Button>
        </>
    )
}