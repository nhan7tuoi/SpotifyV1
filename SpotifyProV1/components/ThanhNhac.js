import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';


const ThanhNhac = ({ navigation }) => {
    return (
        <View style={{
            width: '95%', height: 70, backgroundColor: '#320026', borderRadius: 10, position: "absolute",
            justifyContent: "flex-end",
            bottom: 82,
            zIndex: 2,
            marginLeft: 10
        }}>
            <View style={{
                width: '95%', flexDirection: 'row'
            }}>
                <View style={{ width: '17%', justifyContent: 'center' }}>
                    <Image resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 10, marginLeft: 5 }} source={require('../assets/img/nhan.jpg')} />
                </View>
                <View style={{ width: '83%', height: 70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', height: 70 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Phía sau một Coder</Text>
                        <Text style={{ color: 'gray', fontSize: 16, fontWeight: '500' }}>Nhân Ka</Text>
                    </View>
                    <View style={{ marginRight: 25 }}>
                        <Entypo name="controller-paus" size={24} color="white" />
                        {/* <Entypo name="controller-play" size={24} color="white" /> */}
                    </View>
                </View>
            </View>
            {/* co data thi bo */}
            <View style={{height:2,width:'95%',backgroundColor:'#fff',alignSelf:'center',borderRadius:20}}></View>
        </View >

    )
}
export default ThanhNhac;