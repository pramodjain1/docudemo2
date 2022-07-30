import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform, SafeAreaView, ScrollView } from 'react-native';
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



export default function Profile() {
  // const isMobileOrTablet = useMediaQuery({ maxDeviceWidth: 1024 });
  const isMobileOrTablet = (Platform.OS === "android" || Platform.OS === "ios");
  console.log("check", isMobileOrTablet);

  const [myData, setMyData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const imageUrl = "https://www.seekpng.com/png/full/847-8474751_download-empty-profile.png";




  useEffect(() => {
    // GET request using fetch with async/await
    let d;
    getData2().then(res => {
      d = res;
      console.log("mydata", d);
      setMyData(d);
    });

  }, [])




  return (

    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
      <ScrollView>

        {/* <View style={styles.header}>
          <Text style={styles.h1}>CV</Text>
        </View> */}

        {/***Personal Information ***/}
        {myData

          ?
          <View style={{ display: "flex", flexWrap: "wrap", flex: 1, flexDirection: 'row' }}>

            <View style={{ flex: 1, backgroundColor: "#414141", flexBasis: 200 }}>
              <View style={{ padding: 10 }}>
                <Image

                  source={{ uri: imageUrl }}
                  style={{ height: 200, width: 200, borderRadius: 100 }}
                />
                <View style={{ padding: 10 }}>
                  <Text style={[styles.title, styles.fontWhite]}>
                    {myData.name}
                  </Text>

                  <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
                    <FontAwesomeIcon style={[styles.icon]} icon={faLocationDot} />
                    <Text style={[styles.fontWhite]}>
                      {myData.address}
                    </Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
                    <FontAwesomeIcon style={[styles.icon]} icon={faMobileScreen} />
                    <Text style={[styles.fontWhite]}>
                      {myData.mobile}
                    </Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
                    <FontAwesomeIcon style={[styles.icon]} icon={faEnvelope} />
                    <Text style={[styles.fontWhite]}>
                      {myData.email}
                    </Text>
                  </View>
                  {myData.website &&
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
                      <FontAwesomeIcon style={[styles.icon]} icon={faGlobe} />
                      <Text style={[styles.fontWhite]}>
                        {myData.website}
                      </Text>
                    </View>
                  }


                </View>

                <View style={{ padding: 10 }}>
                  <Text style={[styles.title, styles.fontWhite]}>About me</Text>
                  <Text style={styles.fontWhite}>{myData.objective}</Text>
                </View>

              </View>
            </View>
            <View style={{ flex: 5, flexBasis: 480, flexShrink: 1 }}>
              <View style={{ padding: 10 }}>
                <Skills data={myData} />
                <WorkExp data={myData}></WorkExp>
                <Education data={myData}></Education>
                <OtherSections data={myData}></OtherSections>
              </View>
            </View>
          </View>
          :
          <Text>Loading...</Text>
        }
      </ScrollView>
    </SafeAreaView >

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
