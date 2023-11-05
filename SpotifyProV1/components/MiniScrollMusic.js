import React, { useContext } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import { Player } from '../PlayerContext';

function MiniScrollMusic({ click }) {
    const { currentTrack, setCurrentTrack } = useContext(Player);
    console.log(currentTrack)
    return (
        <Pressable
            style={{ width: '100%' }}
            onPress={() => {
                click();
            }}
        >
            <View style={{
                width: '95%', flexDirection: 'row'
            }}>
                <View style={{ width: '17%', justifyContent: 'center' }}>
                    <Image resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 10, marginLeft: 5 }} source={{
                        uri: currentTrack.track?.album?.images[1].url ? currentTrack.track?.album?.images[1].url : currentTrack.album?.images[1].url
                    }} />
                </View>
                <View style={{ width: '83%', height: 70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', height: 70 }}>
                        <Text numberOfLines={2} style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', width: 290 }}>
                            {currentTrack.track?.name ? currentTrack.track?.name : currentTrack.name}
                            </Text>
                        <Text style={{ color: 'gray', fontSize: 14, fontWeight: '500' }}>
                            {
                                currentTrack.track?.artists[0].name ? currentTrack.track?.artists[0].name : currentTrack.artists[0].name
                            }
                        </Text>
                    </View>
                    <View style={{ marginRight: 25 }}>
                        <Entypo name="controller-paus" size={24} color="white" />
                        {/* <Entypo name="controller-play" size={24} color="white" /> */}
                    </View>
                </View>
            </View>
            {/* co data thi bo */}
            {/* {Progressbar} */}
        </Pressable>
    )
}
export default MiniScrollMusic;