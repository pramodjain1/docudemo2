import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useMediaQuery } from "react-responsive";
import Profile from './Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateCV from './create-cv/CreateCV';
import Home from './Home';

import Landing from './create-cv/Landing';
import Personal from './create-cv/Personal';
import Work from './create-cv/Work';
import Skills from './create-cv/Skills';
import Education from './create-cv/Education';
import Others from './create-cv/Others';


export default function Navigations() {
    const isMobileOrTablet = useMediaQuery({ maxDeviceWidth: 1024 });
    const Stack = createNativeStackNavigator();
    return (




        <NavigationContainer>

            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ title: 'Home', headerShown : true }} />
                <Stack.Screen name="ViewCV" component={Profile} options={{ title: 'View CV' }} />
                <Stack.Screen name="CreateCV" component={Landing} options={{ title: 'Create CV' }} />
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="Personal" component={Personal} />
                <Stack.Screen name="Work" component={Work} />
                <Stack.Screen name="Skills" component={Skills} />
                <Stack.Screen name="Education" component={Education} />
                <Stack.Screen name="Others" component={Others} />

            </Stack.Navigator>
        </NavigationContainer>



        // SafeAreaView style = { styles.container } >
        //         <ScrollView>
        //             <Stack.Screen name="Profile" component={Profile} />
        //         </ScrollView>
        // </SafeAreaView >


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        alignSelf: 'center',
        maxWidth: 1140,
        paddingTop: 20
    }
});
