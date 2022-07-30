import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { useMediaQuery } from "react-responsive";
//import myData from '../data/mock-data.json';
import CommonStyles from '../styles/CommonStyles';

const styles = StyleSheet.create(CommonStyles);

export default function WorkExp(props) {
    const isMobileOrTablet = (Platform.OS === "android" || Platform.OS === "ios");
    if(props.data && props.data.workExperience){
        props.data.workExperience =  props.data.workExperience.sort((a,b)=>(a.toYear+''+a.toMonth)-(b.toYear+''+b.toMonth))
    }
    const myData = props.data;
    const templateWeb = myData.workExperience.map((d,index) =>
        <View key={index} style={{ flexWrap:"wrap", flexDirection: "row", padding: 10 }}>
            <View style={{ flex: 2, flexBasis:200 }}>
                <View>
                    <Text style={styles.h4}>{d.company}</Text>
                    <Text style={styles.h5}>{d.fromMonth + '-' + d.fromYear + ' to ' + (d.current ? 'Present' : d.toMonth + '-' + d.toYear)}</Text>
                </View>
                <View><Text style={styles.h6}>{d.address}</Text></View>
            </View>
            <View style={{ flex: 4,flexBasis:200 }}>
                <Text style={styles.h4}>{d.designation}</Text>
                <View><Text>{d.description}</Text></View>
            </View>


        </View>
    );
    return (
        <View style={{ padding: 10 }}>
            <Text style={styles.title}>Work Experience</Text>
            <View>
                {templateWeb}
            </View>
        </View>


    );
}


