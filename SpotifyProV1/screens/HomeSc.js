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
import DataAlbumTop from '../data/TracksBray';
import ItemCard from '../components/ItemCard';



// dấu phẩy = %2C
const idTracks = '5TzRsrN1CYRPlUyBagEB6b%2C5HEHl6EHbRulVVOE2FREB0%2C1vs3qUaKHWiY9p9Y9e9B8w%2C2cy0YoKwF55W5jL3VIzgm2%2C30NI55xIU2xpKQXcRZDUdQ%2C6ZJvCiXkwK6NFr85GhHD0f'
const idTamTrang = '0qxqn218fQaJMuRt5l4nmK%2C5DYg0OGm3Vg89wIo3COr52%2C6CM3MwvyVywmrIaU0TdV2q%2C1P1dtPn7zaZzFahKYJnYfH%2C4P7y3XkZ4pnfuAn1GM16jS%2C0hKmcs5NMfmQuyiuIf7XKn'
const idDuaTrenGanDay = '4uZs35Zm7ivjQCM7v5nQj8%2C0ReId5SRMspb6ISw0rBsBN%2C0hiQvlWSSTr7n1kc1X2Lus%2C4W2poMwGzKQHtpNCthoGhC%2C4Jp3HONKA2ztto0nDs8Qgt%2C3LlEZ4J1ORcgP1WmTF9pIX'
export default function App({ navigation }) {
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);
    const [listTracksYour, setListTrackYour] = useState([]);
    const [listTracksTamTrang, setListTrackTamTrang] = useState([]);
    const [listTracksDuaTrenGanDay, setListTrackDuaTrenGanDay] = useState([]);
    const [accessToken, setAccessToken] = useState(null);
    const [arrMusic, setArrMusic] = useState([]);

    useEffect(() => {
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
    const getTracksYour = async (accessToken) => {
        try {
            const response = await axios({
                method: "GET",
                url: `https://api.spotify.com/v1/tracks?ids=${idTracks}`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const tracksYour = response.data.tracks;
            setListTrackYour(tracksYour);
        } catch (err) {
            console.log(err.message);
        }
    };
    const getTracksTamTrang = async (accessToken) => {
        try {
            const response = await axios({
                method: "GET",
                url: `https://api.spotify.com/v1/tracks?ids=${idTamTrang}`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const tracksTamTrang = response.data.tracks;
            setListTrackTamTrang(tracksTamTrang);
        } catch (err) {
            console.log(err.message);
        }
    };
    const getTracksDuaGanDay = async (accessToken) => {
        try {
            const response = await axios({
                method: "GET",
                url: `https://api.spotify.com/v1/tracks?ids=${idDuaTrenGanDay}`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const tracksGanDay = response.data.tracks;
            setListTrackDuaTrenGanDay(tracksGanDay);
        } catch (err) {
            console.log(err.message);
        }
    };

    //get data
    useEffect(() => {
        getRecentlyPlayedSongs(accessToken);
        getTracksYour(accessToken);
        getTracksTamTrang(accessToken);
        getTracksDuaGanDay(accessToken);
    }, [accessToken]);



    const greetingMessage = () => {
        const currentTime = new Date().getHours();
        if (currentTime < 12) {
            return "Chào buổi sáng";
        } else if (currentTime < 16) {
            return "Chào buổi chiều";
        } else {
            return "Chào buổi tối";
        }
    };
    const message = greetingMessage();

    useEffect(() => {
        fetch("https://6545e7e8fe036a2fa954f228.mockapi.io/artists")
            .then((response) => response.json())
            .then((json) => {
                setArrMusic(json);
            })
    }, []);



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
                                    data={arrMusic}
                                    numColumns={2}
                                    renderItem={({ item }) => {
                                        return (
                                            <Pressable
                                                style={{ width: '48%', height: 50, marginTop: 10, marginRight: 15, backgroundColor: '#282828', borderRadius: 10, flexDirection: 'row' }}
                                                onPress={() => {
                                                    navigation.navigate('Album', { item })
                                                }}>
                                                <Image resizeMode='contain' source={{ uri: item.img }}
                                                    style={{ width: 50, height: 50, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                                                <View style={{ width: '60%', height: '100%', justifyContent: 'center', marginLeft: 10 }}>
                                                    <Text numberOfLines={1} style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>{item.name}</Text>
                                                </View>
                                            </Pressable>
                                        )
                                    }}
                                />
                            </View>
                        </View>
                        {/* Mới phát gần đây */}
                        <RecentlyPlayedCard arr={recentlyPlayed} txtHeader='Mới phát gần đây' />
                        <ListCard arr={arrTuyenTap} txtHeader='Tuyển tập hàng đầu của bạn' navigation={navigation} />
                        <ItemCard arr={listTracksYour} txtHeader='Dành cho bạn' navigation={navigation} />
                        <ItemCard arr={listTracksDuaTrenGanDay} txtHeader='Đưa trên gần đây' navigation={navigation} />
                        <ItemCard arr={listTracksTamTrang} txtHeader='Tâm trạng' navigation={navigation} />
                        <View style={{ height: 50 }} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

const arrTop = [
    { img: require('../assets/img/bray.jpg'), name: 'Bray', id: '37i9dQZF1EIUqm0nwTuH1o', follow: false },
    { img: require('../assets/img/binz.jpg'), name: 'BinZ', id: '37i9dQZF1DX35hqM16st8Y' },
    { img: require('../assets/img/den.jpg'), name: 'Đen Vâu', id: '10adSVUmsx40rX9N7G0VbJ' },
    { img: require('../assets/img/sonTung.jpg'), name: 'Sơn Tùng MTP', id: '37i9dQZF1DWYPc4oQ0ynkq' },
    { img: require('../assets/img/cfquanquen.jpg'), name: 'Cafe Quán Quen', id: '37i9dQZF1DX1e2VSJFudND' },
    { img: require('../assets/img/top20nhacviet.jpg'), name: 'Top 20 Nhạc Việt', id: '37i9dQZF1DX0DaTVvjIMEq' },
]
const arrTuyenTap = [
    { img: 'https://res.cloudinary.com/dskzzkovi/image/upload/v1699333967/TuyenTap/qj6sd1gewfkgfvz78rf4.jpg', title: 'B Ray, JSON và Đen', id: '37i9dQZF1EIY9s3GqwEtHW', name1: 'Truyển tập của MONSTART' },
    { img: 'https://res.cloudinary.com/dskzzkovi/image/upload/v1699334218/TuyenTap/db7xeweblhsknsd2qn5u.jpg', title: 'JSON, B Ray và Đen', id: '37i9dQZF1E4yTlMujiATpB', name1: 'Truyển tập của GREY D' },
    { img: 'https://res.cloudinary.com/dskzzkovi/image/upload/v1699334217/TuyenTap/ekcdriv0imp3v3amppjj.jpg', title: 'The Waltes, Conan Gray, Jeremy Zucker và nhiều hơn nữa', id: '37i9dQZF1EVKuMoAJjoTIw', name1: 'Truyển tập của Buồn' },
    { img: 'https://res.cloudinary.com/dskzzkovi/image/upload/v1699334036/TuyenTap/mtdhnbe4rl43xbtntua6.jpg', title: 'Harry Styles, Ed Sheeran, Sabrina Carpenter,  và nhiều hơn nữa', id: '37i9dQZF1EVJSvZp5AOML2', name1: 'Truyển tập của Vui Vẻ' },
    { img: 'https://res.cloudinary.com/dskzzkovi/image/upload/v1699334046/TuyenTap/jjqip1e7fmoxpmrlefpg.jpg', title: 'Olivia Rodrigo, Ariana Grande, Doja Cat, và nhiều hơn nữa', id: '37i9dQZF1EQncLwOalG3K7', name1: 'Truyển tập của Pop' },
    { img: 'https://res.cloudinary.com/dskzzkovi/image/upload/v1699334054/TuyenTap/j5jmsvlrx0mi9kuixydo.jpg', title: 'Gill, Andree Right Hand, VSOUL, và nhiều hơn nữa', id: '37i9dQZF1EQnqst5TRi17F', name1: 'Truyển tập của Hip-Hop' },
    { img: 'https://res.cloudinary.com/dskzzkovi/image/upload/v1699334049/TuyenTap/lty1lmanx9suzbpy5ubf.jpg', title: 'FIFTY FIFTY, ROSÉ, Jung Kook, và nhiều hơn nữa', id: '37i9dQZF1EQpesGsmIyqcW', name1: 'Truyển tập của K-Pop' },
]
const listMusic = [
    { stt: 1, img: require('../assets/img/anhluonnhuvay.jpg'), name: 'Anh Luôn Như Vậy', view: '2.456.785' },
    { stt: 2, img: require('../assets/img/khongphaigu.jpg'), name: 'Không Phải Gu', view: '8.456.785' },
    { stt: 3, img: require('../assets/img/lunglo.jpg'), name: 'Lững Lơ', view: '3.456.785' },
    { stt: 4, img: require('../assets/img/caooc20.jpg'), name: 'Cao Ốc 20', view: '2.456.785' },
    { stt: 5, img: require('../assets/img/hoanhao.jpg'), name: 'Hoàn Hảo', view: '4.456.785' },
    { stt: 6, img: require('../assets/img/thieuthan.jpg'), name: 'Thiêu Thân', view: '7.456.785' },
    { stt: 7, img: require('../assets/img/xindungnhacmay.jpg'), name: 'Xin Đừng Nhấc Máy', view: '1.456.785' },
    { stt: 8, img: require('../assets/img/anhluonnhuvay.jpg'), name: 'Phía sau 1 CODER', view: '5.456.785' },
    { stt: 9, img: require('../assets/img/nhan.jpg'), name: 'Mãi Yêu Một Người', view: '3.456.785' },
    { stt: 10, img: require('../assets/img/bigcityboi.jpg'), name: 'Big CITY Boi', view: '3.456.785' },
    { stt: 11, img: require('../assets/img/hitmyup.jpg'), name: 'Hit My Up', view: '3.456.785' },
    { stt: 12, img: require('../assets/img/lover.jpg'), name: 'LOVER', view: '3.456.785' },
    { stt: 13, img: require('../assets/img/9k.jpg'), name: '9K', view: '3.456.785' },
    { stt: 14, img: require('../assets/img/cuoithoi.jpg'), name: 'Cưới Thôi', view: '3.456.785' },
    { stt: 15, img: require('../assets/img/bigcityboi.jpg'), name: 'Big CITY Boi', view: '3.456.785' }
]

const arrDanhChoBan = [
    { stt: 10, img: require('../assets/img/bigcityboi.jpg'), title: 'Big CITY Boi', view: '3.456.785', id: '4wP8sb7bodcx8WJ2WdOr8t' },
    { stt: 11, img: require('../assets/img/hitmyup.jpg'), title: 'Hit My Up', view: '3.456.785' },
    { stt: 12, img: require('../assets/img/lover.jpg'), title: 'LOVER', view: '3.456.785' },
    { stt: 13, img: require('../assets/img/9k.jpg'), title: '9K', view: '3.456.785' },
    { stt: 14, img: require('../assets/img/cuoithoi.jpg'), title: 'Cưới Thôi', view: '3.456.785', id: '6RMCQsYaJfXrA3Xor56eoy' },
]

const arrDuatrenganDay = [
    { stt: 1, img: require('../assets/img/anhluonnhuvay.jpg'), title: 'Anh Luôn Như Vậy', view: '2.456.785', id: '0FhHxPbrVgqu8VCgAXnu6r' },
    { stt: 2, img: require('../assets/img/khongphaigu.jpg'), title: 'Không Phải Gu', view: '8.456.785', id: '6gmnN8bkcaO2JEZIIMHTdZ' },
    { stt: 3, img: require('../assets/img/lunglo.jpg'), title: 'Lững Lơ', view: '3.456.785', id: '6W7kYUzE4D2gcCzUfcUqEv' },
    { stt: 4, img: require('../assets/img/caooc20.jpg'), title: 'Cao Ốc 20', view: '2.456.785', id: '69ZVebCWOgaHzjUxDT5z9F' },
    { stt: 5, img: require('../assets/img/hoanhao.jpg'), title: 'Hoàn Hảo', view: '4.456.785', id: '6zx0rpqKLoi0Yfk92hB0lY' },
    { stt: 6, img: require('../assets/img/thieuthan.jpg'), title: 'Thiêu Thân', view: '7.456.785', id: '6Wit55JiLxH9WeS78v8Aa3' },
    { stt: 7, img: require('../assets/img/xindungnhacmay.jpg'), title: 'Xin Đừng Nhấc Máy', view: '1.456.785', id: '6LpSc1OaeW35Q9zKNDltYX' },
    { stt: 8, img: require('../assets/img/anhluonnhuvay.jpg'), title: 'Phía sau 1 CODER', view: '5.456.785' },
]
const arrTamTrang = [
    { stt: 14, img: require('../assets/img/cuoithoi.jpg'), title: 'Cưới Thôi', view: '3.456.785' },
    { stt: 15, img: require('../assets/img/bigcityboi.jpg'), title: 'Big CITY Boi', view: '3.456.785' },
    { stt: 5, img: require('../assets/img/hoanhao.jpg'), title: 'Hoàn Hảo', view: '4.456.785' },
    { stt: 6, img: require('../assets/img/thieuthan.jpg'), title: 'Thiêu Thân', view: '7.456.785' },
    { stt: 1, img: require('../assets/img/anhluonnhuvay.jpg'), title: 'Anh Luôn Như Vậy', view: '2.456.785' },
    { stt: 2, img: require('../assets/img/khongphaigu.jpg'), title: 'Không Phải Gu', view: '8.456.785' },
]