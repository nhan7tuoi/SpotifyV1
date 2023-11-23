import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const DetailProfileSc = () => {
    return (
        <SafeAreaView style={{ flex: 1, padding: 10 }}>
            <LinearGradient style={{ height: '28%', width: '100%' }} colors={["#969596", "#212021"]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={{ width: '30%' }}>
                        <Image source={require('../assets/img/nhan.jpg')}
                            style={{ width: 120, height: 120, borderRadius: 60, alignSelf: 'center', marginTop: 20 }}
                        />
                    </View>
                    <View style={{ width: '55%' }}>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Phamducnhan.it</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#fff' }}> 0 </Text>
                            <Text style={{ fontSize: 12, color: 'gray' }}>Người theo dõi</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#fff' }}> - </Text>
                            <Text style={{ fontSize: 12, color: 'gray' }}>Đang theo dõi</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#fff' }}> 4 </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20, width: '50%', justifyContent: 'space-around' }}>
                    <Pressable style={{ borderRadius: 20, width: 100, height: 35, borderColor: '#fff', justifyContent: 'center', alignItems: 'center', borderWidth: 1 }}>
                        <Text style={{ color: '#fff' }}>Chỉnh sửa</Text>
                    </Pressable>
                    <Ionicons name="ios-share-outline" size={28} color="white" />
                    <Entypo name="dots-three-horizontal" size={28} color="white" />
                </View>
            </LinearGradient>
            <View style={{ backgroundColor: '#212021', height: '66%', alignItems: 'center' }}>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
                    <Text style={{fontSize:24,fontWeight:'bold',color:'#fff'}}>
                        Không có hoạt động gần đây.
                    </Text>
                    <Text style={{fontSize:14,fontWeight:700,color:'gray',marginTop:15}}>
                        Hãy khám phá them nhạc mới ngay
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default DetailProfileSc;
