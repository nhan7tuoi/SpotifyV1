import React,{useContext} from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Player } from "../PlayerContext";

function ItemMusic({ item,onPress,isPlaying }) {
    const { currentTrack, setCurrentTrack } = useContext(Player);
    const handlePress = () => {
        setCurrentTrack(item);
        onPress(item);
    }
    return (
        <Pressable onPress={handlePress}>
            <View style={{ width: '100%', height: 51, flexDirection: 'row', marginTop: 10 }}>
                <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>{item.track.stt}</Text>
                </View>
                <View style={{ width: '15%' }}>
                    <Image resizeMode="contain" style={{ width: 50, height: 50 }} source={{ uri: item.track.album.images[1].url }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '75%', padding: 8 }}>
                    <View>
                        <Text style={
                            isPlaying ? {
                                color: '#1DB954',
                                fontSize: 14,
                                fontWeight: 'bold'
                            } : {
                                color: '#fff',
                                fontSize: 14,
                                fontWeight: 'bold'
                            }
                        }>{item.track.name}</Text>
                        <Text style={{ color: 'gray', fontSize: 12, fontWeight: 'bold' }}>2.983.221</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="dots-horizontal"
                            size={30} color="white" />
                    </View>
                </View>
            </View>
        </Pressable>
    )
}
export default ItemMusic;