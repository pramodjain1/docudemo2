import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { useMediaQuery } from "react-responsive";
//import myData from '../data/mock-data.json';
import CommonStyles from '../styles/CommonStyles';
import ProgressBar from 'react-native-progress/Bar';

const styles = StyleSheet.create(CommonStyles);

export default function Skills(props) {
    const isMobileOrTablet = (Platform.OS === "android" || Platform.OS === "ios");
    // if(props.data && props.data.workExperience){
    //     props.data.workExperience =  props.data.workExperience.sort((a,b)=>(a.toYear+''+a.toMonth)-(b.toYear+''+b.toMonth))
    // }
    const myData = props.data;
    const templateWeb = myData.skills.map((d,index) =>
        <View key={index} style={{ flexWrap:"wrap", flexDirection: "row", padding: 10 }}>
            <View style={{ flex: 1, flexBasis:200 }}>
                <View><Text>{d.name}</Text></View>
                <View><ProgressBar progress={d.rating/5}  width={null}  /></View>
                
            </View>


        </View>
    );
    return (
        <View style={{ padding: 10 }}>
            <Text style={styles.title}>Skills</Text>
            <View>
                {templateWeb}
            </View>
        </View>


    );
}


