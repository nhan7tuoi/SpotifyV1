import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const getSpotifyToken = async () => {
    try {
        const token = await AsyncStorage.getItem('spotifyToken');
        console.log('Token:', token);
        return token;
    } catch (error) {
        console.error('Error retrieving token from AsyncStorage:', error);
        return null;
    }
};
export default function App() {
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = await getSpotifyToken();
            if (token) {
                console.log('Đã có token:', token);
                try {
                    const response = await callSpotifyAPI(token);
                } catch (error) {
                    console.error('Error fetching data from Spotify API:', error);
                }
            }
        };
        fetchData();
    }, []);

    const callSpotifyAPI = async (accessToken) => {
        const apiURL = 'https://api.spotify.com/v1/me/player/recently-played?limit=2';
        console.log('Calling Spotify API:', accessToken);
        try {
            const response = await axios.get(apiURL, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
            if (response.status === 200) {
                setRecentlyPlayed(response.data.items);
                return response;
            } else {
                throw new Error('API request failed with status:', response.status);
            }
        } catch (error) {
            throw error;
        }
    };
    console.log('Recently played:', recentlyPlayed);
    return (
        <LinearGradient style={{ flex: 1 }} colors={["#040306", "#131624"]}>
            <SafeAreaView>
                <Text>Home</Text>
                <View>
                    <FlatList
                        data={recentlyPlayed}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Text style={{ color: '#fff' }}>{item.track.name}</Text>
                                </View>
                            );
                        }
                        }
                    />
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}