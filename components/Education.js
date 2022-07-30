import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { useMediaQuery } from "react-responsive";
import CommonStyles from '../styles/CommonStyles';

const styles = StyleSheet.create(CommonStyles);

export default function Education(props) {
    // const isMobileOrTablet = useMediaQuery({ maxDeviceWidth: 1024 });
    const isMobileOrTablet = (Platform.OS === "android" || Platform.OS === "ios");
    const myData = props.data;
    const templateWeb= myData.education.map((d,index) =>
        <View key={index} style={{flexWrap:"wrap", flexDirection: "row", padding: 10 }}>
            <View style={{ flex: 2, flexBasis:200 }}>
                <View>
                    <Text style={styles.h4}>{d.institute}</Text>
                    <View><Text style={styles.h6}>{d.address}</Text></View>
                    <Text style={styles.h5}>{d.fromMonth + '-' + d.fromYear + ' to ' + (d.current ? 'Present' : d.toMonth + '-' + d.toYear)}</Text>
                </View>
            </View>
            <View style={{ flex: 4,flexBasis:200 }}>
                <Text style={styles.h4}>{d.course}</Text>
                <View><Text>{d.description}</Text></View>
            </View>


        </View>
    );
    return (
        <View style={{ padding: 10 }}>
            <Text style={styles.title}>Education</Text>
            <View>
                {templateWeb}
            </View>
        </View>


    );
}


