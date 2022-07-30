import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./Landing";
import Personal from "./Personal";
import Work from "./Work";

export default function Routes(){
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer initialState={Landing}>
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.screen name="Personal" component={Personal} />
            <Stack.screen name="Work" component={Work} />
        </NavigationContainer>
    );
}