import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
    return (
        <LinearGradient style={{ flex: 1 }} colors={["#040306", "#131624"]}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ padding: 20, width: '100%' }}>
                        <Pressable
                        onPress={()=>{
                            navigation.navigate('DetailProfileSc')
                        }}
                        style={{ flexDirection: 'row', marginBottom: 20 }}>
                            <View style={{ width: '20%' }}>
                                <Image resizeMode='contain' style={{ width: 52, height: 52, borderRadius: 26 }} source={require('../assets/img/nhan.jpg')} />
                            </View>
                            <View style={{ width: '60%', justifyContent: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Phamducnhan.it</Text>
                                <Text style={{ color: '#fff', fontSize: 13, color: 'gray' }}>Xem hồ sơ</Text>
                            </View>
                            <View style={{ width: '20%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <AntDesign name="right" size={24} color="white" />
                            </View>
                        </Pressable>
                        {arrSetting.map((item) => {
                            return (
                                <Pressable key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 600 }}>{item.name}</Text>
                                    <AntDesign name="right" size={24} color="white" />
                                </Pressable>
                            )
                        })}
                        <Pressable onPress={()=>{
                            AsyncStorage.removeItem('token');
                            navigation.navigate('Login')
                        }}
                            style={{ alignSelf: 'center', marginTop: 20, width: 130, height: 50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <Text style={{ color: '#000', fontSize: 16, fontWeight: 600, marginVertical: 10 }}>Đăng xuất</Text>
                        </Pressable>
                        <View style={{ height: 90 }} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default Profile;

const arrSetting = [
    { id: 1, name: 'Tài khoản' },
    { id: 2, name: 'Trình tiết kiệm dữ liệu' },
    { id: 3, name: 'Ngôn ngữ' },
    { id: 4, name: 'Phát lại' },
    { id: 5, name: 'Lựa chọn ưu tiên về nội dung' },
    { id: 6, name: 'Thiết bị' },
    { id: 7, name: 'Ô tô' },
    { id: 8, name: 'Quyền riêng tư và mạng xã hội' },
    { id: 9, name: 'Trợ lý thoại và ứng dụng' },
    { id: 10, name: 'Chất lượng ấm thanh' },
    { id: 11, name: 'Chất lượng video' },
    { id: 12, name: 'Không gian lưu trữ' },
    { id: 13, name: 'Thông báo' },
    { id: 14, name: 'Quảng cáo' },
    { id: 15, name: 'Tệp trên máy' },
    { id: 16, name: 'Giới thiệu' },

]
