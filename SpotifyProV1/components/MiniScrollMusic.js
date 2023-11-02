import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';

function MiniScrollMusic({click}){
    return (
        <Pressable
        style={{width:'100%'}}
        onPress={()=>{
            click();
        }}
        >
            <View style={{
                width: '95%', flexDirection: 'row'
            }}>
                <View style={{ width: '17%', justifyContent: 'center' }}>
                    <Image resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 10, marginLeft: 5 }} source={require('../assets/img/xindungnhacmay.jpg')} />
                </View>
                <View style={{ width: '83%', height: 70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', height: 70 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Xin Đừng Nhấc Máy</Text>
                        <Text style={{ color: 'gray', fontSize: 16, fontWeight: '500' }}>Nhân Ka</Text>
                    </View>
                    <View style={{ marginRight: 25 }}>
                        <Entypo name="controller-paus" size={24} color="white" />
                        {/* <Entypo name="controller-play" size={24} color="white" /> */}
                    </View>
                </View>
            </View>
            {/* co data thi bo */}
            <ProgressBar progress={0.5} color={'#fff'} style={{width:'95%',alignSelf:'center',borderRadius:20,backgroundColor:'gray'}} />
        </Pressable>
    )
}
export default MiniScrollMusic;