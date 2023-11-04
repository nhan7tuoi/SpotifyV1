import React, { useContext } from "react";
import { View, ScrollView, Text, Dimensions, Pressable, Image, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Player } from '../PlayerContext';
import { Audio } from 'expo-av';

const { width: wWidth, height: wHeight } = Dimensions.get("window");

function MacroScrollMusic({ click }) {
    const { currentTrack, setCurrentTrack } = useContext(Player);
    const { currentProgress, setCurrentProgress } = useContext(Player);
    const { currentTime, setCurrentTime } = useContext(Player);
    const { duration, setDuration } = useContext(Player);
    const { isPlaying, setIsPlaying } = useContext(Player);
    const { currentSound, setCurrentSound } = useContext(Player);
    const { value } = useContext(Player);
    const { listTrack, setListTrack } = useContext(Player);
    const formatTime = (secs) => {
        let minutes = Math.floor(secs / 60000);
        let seconds = Math.floor(secs % 60000 / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    const handlePlayPause = async () => {
        if (currentSound) {
            if (isPlaying) {
                await currentSound.pauseAsync();
                console.log('Pause');
            } else {
                await currentSound.playAsync();
                console.log('Play');
            }
            setIsPlaying(!isPlaying);
        }
    }
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
            console.log('Het bai hat');
        }
    }
    const handleBack = async () => {
        if (currentSound) {
            await currentSound.stopAsync();
            setCurrentSound(null);
        }
        value.current -= 1;
        if (value.current < listTrack.length) {
            const nextTrack = listTrack[value.current];
            setCurrentTrack(nextTrack);

            await Play(nextTrack);
        } else {
            console.log('Het bai hat');
        }
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
        if(status.didJustFinish === true){
            setCurrentSound(null);
            handleNext();
        }
    };
    return (
        <LinearGradient style={{ flex: 1 }} colors={["#320026", "#29323c"]}>
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <View style={{ width: wWidth, height: 90, flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingTop: 20 }}>
                            <Pressable onPress={() => {
                                click();
                            }}>
                                <AntDesign name="down" size={24} color="white" />
                            </Pressable>
                            <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}>{currentTrack.track.name}</Text>
                            <Pressable>
                                <MaterialCommunityIcons name="dots-horizontal" size={24} color="white" />
                            </Pressable>
                        </View>
                        <View style={{ justifyContent: 'center', width: wWidth, alignItems: 'center' }}>
                            <Image style={{ width: wWidth - 40, height: wHeight * 0.4, borderRadius: 10 }} source={{ uri: currentTrack.track.album.images[0].url }} />
                        </View>
                        <View style={{ padding: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', paddingBottom: 5 }}>{currentTrack.track.name}</Text>
                                    <Text style={{ color: '#ccc', fontSize: 16, fontWeight: '500' }}>B Ray, Han Sara, Masew</Text>
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <AntDesign name="checkcircle" size={32} color="green" />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 15 }}>
                            <View style={{ width: '100%', backgroundColor: 'gray', height: 3, borderRadius: 10 }}>
                                <View style={{
                                    width: `${(currentProgress) * 100}%`,
                                    backgroundColor: '#fff', height: 3
                                }}
                                />
                                <View style={{
                                    position: 'absolute',
                                    top: -5,
                                    width: 12,
                                    height: 12,
                                    borderRadius: 6,
                                    backgroundColor: '#fff',
                                    left: `${(currentProgress) * 100}%`,
                                    marginLeft: -6
                                }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 15, width: wWidth, justifyContent: 'space-between', marginTop: -5 }}>
                            <Text style={{ color: '#fff' }}>
                                {formatTime(currentTime)}
                            </Text>
                            <Text style={{ color: '#fff' }}>
                                {formatTime(duration)}
                            </Text>
                        </View>
                        <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Pressable>
                                <AntDesign name="retweet" size={32} color="green" />
                            </Pressable>
                            <Pressable onPress={handleBack}>
                                <AntDesign name="stepbackward" size={32} color="white" />
                            </Pressable>
                            <Pressable onPress={() => {
                                handlePlayPause();
                                console.log(isPlaying)
                            }}>
                                {isPlaying ? (
                                    <AntDesign name="pausecircle" size={60} color="white" />
                                ) : (
                                    <AntDesign name="play" size={60} color="white" />
                                )}
                            </Pressable>
                            <Pressable onPress={handleNext}>
                                <AntDesign name="stepforward" size={32} color="white" />
                            </Pressable>
                            <Pressable>
                                <AntDesign name="minuscircleo" size={32} color="green" />
                            </Pressable>
                        </View>
                        <View style={{ padding: 15, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: wWidth - 30, height: 350, backgroundColor: 'gray', borderRadius: 20, padding: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Lời bài hát</Text>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '70%' }}>
                                    <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
                                        Không thể tải lời bài hát vì bạn chưa nâng cấp tài khoản Premium
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 100 }} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}
export default MacroScrollMusic;