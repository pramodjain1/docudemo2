import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useMediaQuery } from "react-responsive";
import Navigations from './components/Navigations';
import Profile from './components/Profile';


export default function App() {
  const isMobileOrTablet = useMediaQuery({ maxDeviceWidth: 1024 });
  return (

    // <SafeAreaView style={styles.container}>
    //   <ScrollView>
    //     <Navigations />
    //   </ScrollView>
    // </SafeAreaView>
    <Navigations />
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
