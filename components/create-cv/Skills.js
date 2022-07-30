import { Button, Text, View } from "react-native";

export default function Skills({navigation}) {
    return (
        <>
            <View>
                <Text>Skills</Text>
            </View>
            <Button title="Next" onPress={()=>navigation.navigate("Education")}></Button>
        </>
    )
}