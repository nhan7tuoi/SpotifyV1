import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, FlatList, Pressable, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ListCard from '../components/ListCardYourTop';
import RecentlyPlayedCard from '../components/RecentlyPlayedCard';

export default function App({ navigation }) {
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);
    const [accessToken, setAccessToken] = useState(null);
    const [arrMusic, setArrMusic] = useState(listMusic);

    useEffect(() => {
        // Hàm để lấy access_token từ AsyncStorage khi component được mount
        const getAccessTokenFromStorage = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    console.log('Token Home', token)
                    setAccessToken(token);
                }
            } catch (error) {
                console.error('Error getting access token from AsyncStorage:', error);
            }
        }
        getAccessTokenFromStorage();
    }, []);
    const getRecentlyPlayedSongs = async (accessToken) => {
        try {
            const response = await axios({
                method: "GET",
                url: "https://api.spotify.com/v1/me/player/recently-played?limit=10",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const tracks = response.data.items;
            setRecentlyPlayed(tracks);
        } catch (err) {
            console.log(err.message);
        }
    };
    useEffect(() => {
        getRecentlyPlayedSongs(accessToken);
    }, [accessToken]);

    const greetingMessage = () => {
        const currentTime = new Date().getHours();
        if (currentTime < 12) {
            return "Good Morning";
        } else if (currentTime < 16) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    };
    const message = greetingMessage();
    console.log('recentlyPlayed', recentlyPlayed)
    return (
        <LinearGradient style={{ flex: 1 }} colors={["#040306", "#131624"]}>
            <SafeAreaView>
                <ScrollView horizontal={false}>
                    <View style={{ flex: 1, padding: 15 }}>
                        <View style={{ width: '100%', height: 70, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{message}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '30%', paddingTop: 5 }}>
                                <Pressable>
                                    <FontAwesome5 name="bell" size={24} color="white" />
                                </Pressable>
                                <Pressable>
                                    <FontAwesome name="clock-o" size={24} color="white" />
                                </Pressable>
                                <Pressable>
                                    <AntDesign name="setting" size={24} color="white" />
                                </Pressable>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                            <Pressable style={{ backgroundColor: '#282828', width: 60, height: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                                <Text style={{ color: '#fff', fontWeight: '500' }}>Nhạc</Text>
                            </Pressable>
                            <Pressable style={{ backgroundColor: '#282828', width: 180, height: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#fff', fontWeight: '500' }}>Podcast và chường trình</Text>
                            </Pressable>
                        </View>
                        {/* Top Track */}
                        <View style={{ width: '100%', height: 220, marginBottom: 20 }}>
                            {/* <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Đang phát gần đây</Text> */}
                            <View>
                                <FlatList
                                    data={arrTop}
                                    numColumns={2}
                                    renderItem={({ item }) => {
                                        return (
                                            <Pressable
                                                style={{ width: '48%', height: 50, marginTop: 10, marginRight: 15, backgroundColor: '#282828', borderRadius: 10, flexDirection: 'row' }}
                                                onPress={() => {
                                                    navigation.navigate('Album', {arrMusic,nameItem:item.name, imgItem: item.img})
                                                }}>
                                                <Image resizeMode='contain' source={item.img} style={{ width: '30%', height: '100%', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                                                <View style={{ width: '60%', height: '100%', justifyContent: 'center', marginLeft: 10 }}>
                                                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>{item.name}</Text>
                                                </View>
                                            </Pressable>
                                        )
                                    }}
                                />
                            </View>
                        </View>
                        {/* Mới phát gần đây */}
                        <RecentlyPlayedCard arr={recentlyPlayed} txtHeader='Mới phát gần đây' />
                        <ListCard arr={arrTuyenTap} txtHeader='Tuyển tập hàng đầu của bạn' />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

const arrTop = [
    { img: require('../assets/img/bray.jpg'), name: 'Bray' },
    { img: require('../assets/img/binz.jpg'), name: 'BinZ' },
    { img: require('../assets/img/den.jpg'), name: 'Đen Vâu' },
    { img: require('../assets/img/sonTung.jpg'), name: 'Sơn Tùng MTP' },
    { img: require('../assets/img/cfquanquen.jpg'), name: 'Cafe Quán Quen' },
    { img: require('../assets/img/top20nhacviet.jpg'), name: 'Top 20 Nhạc Việt' },
]
const arrTuyenTap = [
    { img: require('../assets/img/monstart.jpg'), title: 'B Ray, JSON và Đen' },
    { img: require('../assets/img/greyd.jpg'), title: 'JSON, B Ray và Đen' },
    { img: require('../assets/img/buon.jpg'), title: 'The Waltes, Conan Gray, Jeremy Zucker và nhiều hơn nữa' },
    { img: require('../assets/img/vuive.jpg'), title: 'Harry Styles, Ed Sheeran, Sabrina Carpenter,  và nhiều hơn nữa' },
    { img: require('../assets/img/pop.jpg'), title: 'Olivia Rodrigo, Ariana Grande, Doja Cat, và nhiều hơn nữa' },
    { img: require('../assets/img/hiphop.jpg'), title: 'Gill, Andree Right Hand, VSOUL, và nhiều hơn nữa' },
    { img: require('../assets/img/kpop.jpg'), title: 'FIFTY FIFTY, ROSÉ, Jung Kook, và nhiều hơn nữa' },
]
const listMusic = [
    {stt:1,img:require('../assets/img/anhluonnhuvay.jpg'),name:'Anh Luôn Như Vậy',view:'2.456.785'},
    {stt:2,img:require('../assets/img/khongphaigu.jpg'),name:'Không Phải Gu',view:'8.456.785'},
    {stt:3,img:require('../assets/img/lunglo.jpg'),name:'Lững Lơ',view:'3.456.785'},
    {stt:4,img:require('../assets/img/caooc20.jpg'),name:'Cao Ốc 20',view:'2.456.785'},
    {stt:5,img:require('../assets/img/hoanhao.jpg'),name:'Hoàn Hảo',view:'4.456.785'},
    {stt:6,img:require('../assets/img/thieuthan.jpg'),name:'Thiêu Thân',view:'7.456.785'},
    {stt:7,img:require('../assets/img/xindungnhacmay.jpg'),name:'Xin Đừng Nhấc Máy',view:'1.456.785'},
    {stt:8,img:require('../assets/img/anhluonnhuvay.jpg'),name:'Phía sau 1 CODER',view:'5.456.785'},
    {stt:9,img:require('../assets/img/nhan.jpg'),name:'Mãi Yêu Một Người',view:'3.456.785'},
    {stt:10,img:require('../assets/img/bigcityboi.jpg'),name:'Big CITY Boi',view:'3.456.785'},
    {stt:11,img:require('../assets/img/hitmyup.jpg'),name:'Hit My Up',view:'3.456.785'},
    {stt:12,img:require('../assets/img/lover.jpg'),name:'LOVER',view:'3.456.785'},
    {stt:13,img:require('../assets/img/9k.jpg'),name:'9K',view:'3.456.785'},
    {stt:14,img:require('../assets/img/cuoithoi.jpg'),name:'Cưới Thôi',view:'3.456.785'},
    {stt:15,img:require('../assets/img/bigcityboi.jpg'),name:'Big CITY Boi',view:'3.456.785'}
]