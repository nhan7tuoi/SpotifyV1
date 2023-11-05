
import React, { useContext } from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native';
import { Player } from "../PlayerContext";
import { Audio } from 'expo-av';

function ItemCard({ txtHeader, arr }) {
    const { currentTrack, setCurrentTrack } = useContext(Player);
    const { currentSound, setCurrentSound } = useContext(Player);
    const { currentProgress, setCurrentProgress } = useContext(Player);
    const { currentTime, setCurrentTime } = useContext(Player);
    const { duration, setDuration } = useContext(Player);
    const { isPlaying, setIsPlaying } = useContext(Player);
    const Play = async (preview_url) => {
        try {
            if (currentSound) {
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
        if (status.didJustFinish === true) {
            setCurrentSound(null);
            handleNext();
        }
    }
    return (
        <View style={{ width: '100%', height: 230, marginBottom: 20 }}>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{txtHeader}</Text>
            <View>
                <View style={{ width: '100%' }}>
                    <FlatList data={arr}
                        horizontal={true}
                        renderItem={({ item }) => {
                            return (
                                <Pressable onPress={() => {
                                    setCurrentTrack(item);
                                    Play(item?.preview_url);
                                }}
                                    style={{ marginRight: 20 }}>
                                    <View style={{ width: 150, height: 150, marginTop: 10 }}>
                                        <Image resizeMode='contain' style={{ width: '100%', height: '100%' }} source={{ uri: item?.album?.images[0].url }} />
                                    </View>
                                    <Text numberOfLines={2} style={{ color: 'gray', fontWeight: 500, marginTop: 10, width: 150 }}>{item?.name}</Text>
                                </Pressable>
                            )
                        }}
                    />
                </View>
            </View>
        </View>
    )
}
export default ItemCard;