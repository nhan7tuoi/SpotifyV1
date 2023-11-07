import React, { useState, useContext, useEffect } from "react";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    Pressable,
    FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import ItemMusic from "../components/ItemMusic";
import { Player } from "../PlayerContext";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

function AlbumSc({ navigation, route }) {
    const { item } = route?.params;
    const [idArtists, setIdArtists] = useState(item.id);
    const [listMusic, setListMusic] = useState([]);
    const [accessToken, setAccessToken] = useState(null);
    const [follow, setFollow] = useState(item.follow);
    const [arrArtists, setArrArtists] = useState([]);

    const [progress, setProgress] = useState(null);
    const { currentTrack, setCurrentTrack } = useContext(Player);
    const { currentProgress, setCurrentProgress } = useContext(Player);
    const { currentTime, setCurrentTime } = useContext(Player);
    const { duration, setDuration } = useContext(Player);
    const { isPlaying, setIsPlaying } = useContext(Player);
    const { currentSound, setCurrentSound } = useContext(Player);
    const { listTrack, setListTrack } = useContext(Player);
    const { value } = useContext(Player);

    useEffect(() => {
        fetch("https://6545ccbefe036a2fa954ce8f.mockapi.io/Library/1")
            .then((response) => response.json())
            .then((json) => {
                setArrArtists(json.artistID);
            });
    }, []);

    useEffect(() => {
        const getAccessTokenFromStorage = async () => {
            try {
                const token = await AsyncStorage.getItem("token");
                if (token) {
                    console.log("Token Home", token);
                    setAccessToken(token);
                }
            } catch (error) {
                console.error("Error getting access token from AsyncStorage:", error);
            }
        };
        getAccessTokenFromStorage();
    }, []);

    const getListTracksArtists = async (accessToken) => {
        try {
            const response = await axios({
                method: "GET",
                url: `https://api.spotify.com/v1/playlists/${idArtists}/tracks?limit=20`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const listTracks = response.data.items;
            setListMusic(listTracks);
        } catch (err) {
            console.log(err.message);
        }
    };
    useEffect(() => {
        getListTracksArtists(accessToken);
    }, [accessToken]);

    //
    setListTrack(listMusic);
    const PlayTrack = async () => {
        if (listMusic.length > 0) {
            setCurrentTrack(listMusic[0]);
        }
        await Play(listMusic[0]);
    };
    //
    const Play = async (nextTrack) => {
        const preview_url = nextTrack.track.preview_url;
        try {
            if (currentSound) {
                await currentSound.stopAsync();
            }
            await Audio.setAudioModeAsync({
                playsInSilentModeIOS: true,
                staysActiveInBackground: false,
                shouldDuckAndroid: false,
            });
            const { sound, status } = await Audio.Sound.createAsync(
                {
                    uri: preview_url,
                },
                {
                    shouldPlay: true,
                    isLooping: false,
                },
                onPlaybackStatusUpdate
            );
            onPlaybackStatusUpdate(status);
            setCurrentSound(sound);
            setIsPlaying(status.isLoaded);
            await sound.playAsync();
        } catch (error) {
            console.log(error);
        }
    };
    //
    const onPlaybackStatusUpdate = async (status) => {
        if (status.isLoaded && status.isPlaying) {
            const progress = status.positionMillis / status.durationMillis;
            setCurrentProgress(progress);
            setCurrentTime(status.positionMillis);
            setDuration(status.durationMillis);
        }
        if (status.didJustFinish === true) {
            setCurrentSound(null);
            handleNext();
        }
    };
    //
    const handleNext = async () => {
        if (currentSound) {
            await currentSound.stopAsync();
            setCurrentSound(null);
        }
        value.current += 1;
        if (value.current < listTrack.length) {
            const nextTrack = listTrack[value.current];
            setCurrentTrack(nextTrack);

            await Play(nextTrack);
        } else {
            console.log("Het bai hat");
        }
    };
    //
    const handlePlayPause = async () => {
        if (currentSound) {
            if (isPlaying) {
                await currentSound.pauseAsync();
            } else {
                await currentSound.playAsync();
            }
            setIsPlaying(!isPlaying);
        }
    };
    console.log(item);
    return (
        <LinearGradient style={{ flex: 1 }} colors={["#131624", "#040306"]}>
            <SafeAreaView>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: "row", width: "100%", height: 350 }}>
                            <View
                                style={{ position: "absolute", zIndex: 2, top: 20, left: 20 }}
                            >
                                <Pressable
                                    onPress={() => {
                                        navigation.goBack();
                                    }}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        backgroundColor: "gray",
                                        borderRadius: 15,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <AntDesign name="left" size={24} color="white" />
                                </Pressable>
                            </View>
                            <Image
                                style={{ width: "100%", height: "100%", alignSelf: "center" }}
                                source={{ uri: item.img }}
                            />
                            <Text
                                numberOfLines={1}
                                style={{
                                    width: 350,
                                    color: "#fff",
                                    fontSize: 50,
                                    fontWeight: "bold",
                                    position: "absolute",
                                    zIndex: 2,
                                    bottom: 0,
                                    left: 20,
                                }}
                            >
                                {item.name}
                            </Text>
                        </View>
                        <LinearGradient colors={["#131624", "#040306"]}>
                            <View
                                style={{
                                    width: "100%",
                                    height: 90,
                                    padding: 10,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <View style={{ width: "75%" }}>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            fontWeight: "bold",
                                            color: "gray",
                                        }}
                                    >
                                        {
                                            (item?.view) ? (
                                                `${item.view} người nghe hàng tháng`
                                            ) : (
                                                item?.name1
                                            )
                                        }
                                    </Text>
                                    {follow ? (
                                        <Pressable
                                            onPress={() => {
                                                fetch(
                                                    "https://6545ccbefe036a2fa954ce8f.mockapi.io/Library/1",
                                                    {
                                                        method: "PUT",
                                                        headers: {
                                                            "Content-Type": "application/json",
                                                        },
                                                        body: JSON.stringify({
                                                            artistID: arrArtists.filter(item => item !== idArtists),
                                                        }),
                                                    }
                                                ).then((response) => {
                                                    if (response.ok) {
                                                        fetch(
                                                            "https://6545e7e8fe036a2fa954f228.mockapi.io/artists/" +
                                                            idArtists,
                                                            {
                                                                method: "PUT",
                                                                headers: {
                                                                    "Content-Type": "application/json",
                                                                },
                                                                body: JSON.stringify({
                                                                    follow: !follow,
                                                                }),
                                                            }
                                                        ).then((response) => {
                                                            if (response.ok) {
                                                                console.log("ok");
                                                                setFollow(!follow);
                                                            }
                                                        });
                                                    }
                                                });
                                            }}
                                            style={{
                                                width: 120,
                                                height: 40,
                                                borderRadius: 20,
                                                borderWidth: 1,
                                                borderColor: "#fff",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginTop: 10,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    fontWeight: "bold",
                                                    color: "#fff",
                                                }}
                                            >
                                                Đang theo dõi
                                            </Text>
                                        </Pressable>
                                    ) : (
                                        <Pressable
                                            onPress={() => {
                                                fetch(
                                                    "https://6545ccbefe036a2fa954ce8f.mockapi.io/Library/1",
                                                    {
                                                        method: "PUT",
                                                        headers: {
                                                            "Content-Type": "application/json",
                                                        },
                                                        body: JSON.stringify({
                                                            artistID: [...arrArtists, idArtists],
                                                        }),
                                                    }
                                                ).then((response) => {
                                                    if (response.ok) {
                                                        fetch(
                                                            "https://6545e7e8fe036a2fa954f228.mockapi.io/artists/" +
                                                            idArtists,
                                                            {
                                                                method: "PUT",
                                                                headers: {
                                                                    "Content-Type": "application/json",
                                                                },
                                                                body: JSON.stringify({
                                                                    follow: !follow,
                                                                }),
                                                            }
                                                        ).then((response) => {
                                                            if (response.ok) {
                                                                console.log("ok");
                                                                setFollow(!follow);
                                                            }
                                                        });
                                                    }
                                                });
                                            }}
                                            style={{
                                                width: 120,
                                                height: 40,
                                                borderRadius: 20,
                                                borderWidth: 1,
                                                borderColor: "#fff",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginTop: 10,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    fontWeight: "bold",
                                                    color: "#fff",
                                                }}
                                            >
                                                Theo dõi
                                            </Text>
                                        </Pressable>
                                    )}
                                </View>
                                <View
                                    style={{
                                        width: "25%",
                                        height: 90,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <AntDesign name="retweet" size={24} color="green" />
                                    {isPlaying ? (
                                        <Pressable onPress={() => handlePlayPause()}>
                                            <AntDesign name="pause" size={50} color="green" />
                                        </Pressable>
                                    ) : (
                                        <Pressable onPress={() => PlayTrack()}>
                                            <AntDesign name="play" size={50} color="green" />
                                        </Pressable>
                                    )}
                                </View>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={{ color: "#fff" }}>Phổ biến</Text>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={listMusic}
                                    renderItem={({ item }) => (
                                        <ItemMusic
                                            item={item}
                                            onPress={Play}
                                            isPlaying={item === currentTrack}
                                        />
                                    )}
                                />
                            </View>
                        </LinearGradient>
                    </View>
                    {
                        (item.description) ? (
                            <View style={{ width: '100%', height: 400, padding: 10, marginTop: 10 }}>
                                <Text style={{ color: "#fff", marginBottom: 10 }}>Giới thiệu</Text>
                                <View>
                                    <Image style={{ width: '100%', height: '100%' }} source={{ uri: item.img }} />
                                    <View style={{ position: 'absolute', top: 5, left: 5, flexDirection: 'row', gap: 10, padding: 10 }}>
                                        <AntDesign name="checkcircle" size={24} color="blue" />
                                        <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>NGHỆ SĨ ĐƯỢC XÁC MINH</Text>
                                    </View>
                                    <View style={{ position: 'absolute', bottom: 5, left: 5, hap: 10, width: '97%' }}>
                                        <Text style={{ color: '#fff' }}>{item.view} người nghe hàng tháng</Text>
                                        <Text numberOfLines={5} style={{ color: '#fff' }}>{item.description}</Text>
                                    </View>
                                </View>
                            </View>
                        ) : (
                            <View></View>
                        )
                    }
                    <View style={{ height: 140 }} />
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}
export default AlbumSc;
