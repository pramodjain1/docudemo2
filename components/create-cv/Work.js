import { Button, Text, View } from "react-native";

export default function Work({navigation}) {
    return (
        <>
            <View>
               <Text>Work Experience</Text> 
            </View>
            <Button title="Next" onPress={()=>navigation.navigate("Skills")}></Button>
        </>
    )
}