import { Button, Text, View } from "react-native";

export default function Personal({navigation}) {
    return (
        <>
            <View>
                <Text>Personal Information</Text>
            </View>
            <Button title="Next" onPress={()=>navigation.navigate("Work")}></Button>
        </>
    )
}