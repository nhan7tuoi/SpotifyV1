import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, FlatList, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        // Hàm để lấy access_token từ AsyncStorage khi component được mount
        const getAccessTokenFromStorage = async () => {
            try {
                const token = await AsyncStorage.getItem('spotifyAccessToken');
                if (token) {
                    setAccessToken(token);
                }
            } catch (error) {
                console.error('Error getting access token from AsyncStorage:', error);
            }
        }
        getAccessTokenFromStorage();
    }, []);

    useEffect(() => {
        // Sử dụng access_token để gọi Spotify API sau khi có nó
        if (accessToken) {
            // Gọi Spotify API ở đây sử dụng axios hoặc thư viện HTTP khác
            // Ví dụ: Lấy danh sách bài hát đã phát gần đây
            axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=10', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                }
            })
                .then((response) => {
                    // Xử lý dữ liệu từ Spotify API và cập nhật state
                    setRecentlyPlayed(response.data.items);
                })
                .catch((error) => {
                    console.error('Error fetching recently played tracks:', error);
                });
        }
    }, [accessToken]);


    console.log(recentlyPlayed);

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
    return (
        <LinearGradient style={{ flex: 1 }} colors={["#040306", "#131624"]}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ width: '100%', height: 70, flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
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
                <View style={{width:'100%',height:50,flexDirection:'row'}}>
                    <Pressable style={{backgroundColor:'gray',width:60,height:30,borderRadius:20,justifyContent:'center',alignItems:'center',marginRight:20}}>
                        <Text style={{color:'#fff',fontWeight:'500'}}>Nhạc</Text>
                    </Pressable>
                    <Pressable style={{backgroundColor:'gray',width:180,height:30,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'#fff',fontWeight:'500'}}>Podcast và chường trình</Text>
                    </Pressable>
                </View>
                <View style={{width:'100%',height:200,backgroundColor:'red'}}>
                    <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Đang phát gần đây</Text>
                    <View>

                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}