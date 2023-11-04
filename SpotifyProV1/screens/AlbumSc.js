import React, { useState, useContext } from "react";
import { View, Text, SafeAreaView, ScrollView, Image, Pressable, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import ItemMusic from "../components/ItemMusic";
import { Player } from "../PlayerContext";
import { Audio } from 'expo-av';




function AlbumSc({ navigation, route }) {
    const { alBumRay, nameItem, imgItem } = route?.params;
    const [listMusic, setListMusic] = useState(alBumRay);
    const [progress, setProgress] = useState(null);
    const { currentTrack, setCurrentTrack } = useContext(Player);
    const { currentProgress, setCurrentProgress } = useContext(Player);
    const { currentTime, setCurrentTime } = useContext(Player);
    const { duration, setDuration } = useContext(Player);
    const { isPlaying, setIsPlaying } = useContext(Player);
    const { currentSound, setCurrentSound } = useContext(Player);
    const { listTrack, setListTrack } = useContext(Player);

    setListTrack(listMusic);


    // console.log(listMusic)
    const PlayTrack = async () => {
        if (listMusic.length > 0) {
            setCurrentTrack(listMusic[0]);
        }
        await Play(listMusic[0]);
    }
    const Play = async (nextTrack) => {
        // console.log(nextTrack);
        const preview_url = nextTrack.track.preview_url;
        try {
            if(currentSound){
                await currentSound.stopAsync();
            }
            await Audio.setAudioModeAsync({
                playsInSilentModeIOS: true,
                staysActiveInBackground: false,
                shouldDuckAndroid: false,
            })
            const { sound, status } = await Audio.Sound.createAsync(
                {
                    uri: preview_url
                },
                {
                    shouldPlay: true,
                    isLooping: false
                },
                onPlaybackStatusUpdate
            )
            onPlaybackStatusUpdate(status);
            setCurrentSound(sound);
            setIsPlaying(status.isLoaded)
            await sound.playAsync();
        } catch (error) {
            console.log(error);
        }
    };
    const onPlaybackStatusUpdate = async (status) => {
        if (status.isLoaded && status.isPlaying) {
            const progress = status.positionMillis / status.durationMillis;
            setCurrentProgress(progress);
            setCurrentTime(status.positionMillis);
            setDuration(status.durationMillis);
        }
    }
    const handlePlayPause = async () => {
        if (currentSound) {
            if (isPlaying) {
                await currentSound.pauseAsync();
            } else {
                await currentSound.playAsync();
            }
            setIsPlaying(!isPlaying);
        }
    }

    return (
        <LinearGradient style={{ flex: 1 }} colors={["#131624", "#040306"]}>
            <SafeAreaView>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', width: '100%', height: 350 }}>
                            <View style={{ position: 'absolute', zIndex: 2, top: 20, left: 20 }}>
                                <Pressable onPress={() => {
                                    navigation.goBack();
                                }}>
                                    <AntDesign name="left" size={24} color="white" />
                                </Pressable>
                            </View>
                            <Image style={{ width: '100%', height: '100%', alignSelf: 'center' }} source={imgItem} />
                            <Text numberOfLines={1} style={{ width: 350, color: '#fff', fontSize: 50, fontWeight: 'bold', position: 'absolute', zIndex: 2, bottom: 0, left: 20 }}>{nameItem}</Text>
                        </View>
                        <LinearGradient colors={["#131624", "#040306"]}>
                            <View style={{ width: '100%', height: 90, padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '75%' }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'gray' }}>999,9 N người nghe hàng tháng</Text>
                                    <View style={{ width: 120, height: 40, borderRadius: 20, borderWidth: 1, borderColor: '#fff', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#fff' }}>Đang theo dõi</Text>
                                    </View>
                                </View>
                                <View style={{ width: '25%', height: 90, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
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
                                <Text style={{ color: '#fff' }}>Phổ biến</Text>
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
                                <View style={{ height: 50 }} />
                            </View>
                        </LinearGradient>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}
export default AlbumSc;