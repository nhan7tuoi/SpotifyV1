import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, SafeAreaView, View, Image, Pressable, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import AsyncStorage from "@react-native-async-storage/async-storage";


WebBrowser.maybeCompleteAuthSession();
const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};
export default function App({navigation}) {
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: '390d9192045b41de9380bed729d9e7c7',
            scopes: [
                'user-read-email',
                'playlist-modify-public',
                'playlist-read-private',
                'playlist-modify-private',
                'user-library-read',
                'user-library-modify',
                'user-read-playback-state',
                'user-modify-playback-state',
                'user-read-currently-playing',
                'user-read-recently-played',
            ],
            usePKCE: false,
            redirectUri: makeRedirectUri({
                scheme: 'your.app'
            }),
        },
        discovery
    );
    useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
            AsyncStorage.setItem('spotifyToken', code)
                .then(() => {
                    console.log('Token saved to AsyncStorage:', code);
                })
                .catch((error) => {
                    console.error('Error saving token to AsyncStorage:', error);
                });
        }
    }, [response]);
    return (
        <LinearGradient style={{ flex: 1 }} colors={["#040306", "#131624"]}>
            <SafeAreaView style={styles.container}>
                <View style={{ width: '100%', height: '30%' }}>
                </View>
                <View style={{ width: '100%', height: '70%', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Entypo name="spotify" size={80} color="white" />
                    <View style={{ width: '100%' }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff', alignSelf: 'center' }}>
                            Millions of songs.
                        </Text>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff', alignSelf: 'center' }}>
                            Free on Spotify.
                        </Text>
                    </View>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Pressable
                            onPress={() => {
                                promptAsync();
                            }}
                            style={{ width: '80%', height: 50, backgroundColor: '#1CDE43', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Login with Spotify
                            </Text>
                        </Pressable>
                        <Pressable style={styles.btn}>
                            <Image source={require('../assets/icon/iconPhone.png')} resizeMode='contain' style={{ width: 24, height: 24, position: 'absolute', left: 10 }} />
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', alignSelf: 'center' }}>
                                Continute with phone number
                            </Text>
                        </Pressable>
                        <Pressable style={styles.btn}>
                            <Image source={require('../assets/icon/iconGoogle.png')} resizeMode='contain' style={{ width: 24, height: 24, position: 'absolute', left: 10 }} />
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', alignSelf: 'center' }}>
                                Continute with Google
                            </Text>
                        </Pressable>
                        <Pressable style={styles.btn}>
                            <Image source={require('../assets/icon/iconFB.png')} resizeMode='contain' style={{ width: 24, height: 24, position: 'absolute', left: 10 }} />
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', alignSelf: 'center' }}>
                                Continute with Facebook
                            </Text>
                        </Pressable>
                        <Pressable style={styles.btn}>
                            <Image source={require('../assets/icon/VectorApple.png')} resizeMode='contain' style={{ width: 24, height: 24, position: 'absolute', left: 10 }} />
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', alignSelf: 'center' }}>
                                Continute with Apple
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => { navigation.navigate("Main"); }}
                            style={{ width: 200, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', alignSelf: 'center' }}>
                                Login
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        marginTop: 10,
        width: '80%',
        height: 50,
        backgroundColor: '#000',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        flexDirection: 'row',
    }
});