import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { useMediaQuery } from "react-responsive";
// import myData from '../data/mock-data.json';

import CommonStyles from '../styles/CommonStyles';

const styles = StyleSheet.create(CommonStyles);

export default function OtherSections(props) {
    const myData = props.data;
    const isMobileOrTablet = useMediaQuery({ maxDeviceWidth: 1024 });
    const sec = myData.sections.map((d,index) => 
    <View key={index} >
        <View>
            <Text style={[styles.h3]}>{d.title}</Text>
            <View style={{padding: 10}}>
                {d.content.map((c,index)=>
                                    <View style={{marginBottom : 5}} key={index}><Text>{c.text}</Text></View>
                            )}
            </View>
        </View>

        
        {/* <View>
            <Text style={{color: '#4d5', flexWrap : "wrap"}}>{d.content.map((c,index)=><View key={index}><Text>{c.text}</Text></View>)}</Text>
        </View> */}
        
    </View>
    );
    return (
        <View style={{ padding: 10 }}>
            {sec}
        </View>

    );
}
