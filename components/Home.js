import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform, SafeAreaView, ScrollView, Button } from 'react-native';
import { useMediaQuery } from "react-responsive";
//import myData from '../data/mock-data.json';
import OtherSections from './OtherSections';
import WorkExp from './WorkExp';
import CommonStyles from '../styles/CommonStyles';
import Education from './Education';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faGlobe, faLocationDot, faMobileScreen } from '@fortawesome/free-solid-svg-icons'

import favicon from '../assets/favicon.png';
import { useEffect, useState } from 'react';
import Skills from './Skills';
import { useNavigation } from '@react-navigation/native';


export default function Home({ navigation }) {
  // const isMobileOrTablet = useMediaQuery({ maxDeviceWidth: 1024 });






  useEffect(() => {
    // // GET request using fetch with async/await
    // let d;
    // getData2().then(res => {
    //   d = res;
    //   console.log("mydata", d);
    //   setMyData(d);
    // });

  }, [])




  return (

    // <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
    <ScrollView>
      <View>
        <Button onPress={() => navigation.navigate("ViewCV")} title='View CV'></Button>
      </View>
      <View>
        <Button title="Create new CV" onPress={() => navigation.navigate("CreateCV")}></Button>
      </View>


    </ScrollView>
    // </SafeAreaView >

  );

}



async function getData() {

  let p = new Promise();
  fetch('https://docu-daddy-default-rtdb.firebaseio.com/xyz123456.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(function (response) {
    console.log(response)
    // p.resolve(response.json());
  }).then(function (myJson) {
    console.log(myJson);
    p.resolve(myJson);
  });


  return await p;

  // await fetch('https://docu-daddy-default-rtdb.firebaseio.com/xyz123456.json', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   }
  // }).then(function (response) {
  //   console.log(response)
  //   return Promise.resolve(response.json());
  // }).then(function (myJson) {
  //   console.log(myJson);
  // });
}

async function getData2() {
  const response = await fetch('https://docu-daddy-default-rtdb.firebaseio.com/xyz123456.json');
  const data = await response.json();
  return data;
}
const styles = StyleSheet.create(CommonStyles);
