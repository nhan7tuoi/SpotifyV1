import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ItemMusic({ arr }) {
    return (
        <View>
            <FlatList
                data={arr}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <View style={{ width: '100%', height: 51, flexDirection: 'row', marginTop: 10 }}>
                                <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontStyle: 20, fontWeight: 'bold', color: '#fff' }}>{item.track.stt}</Text>
                                </View>
                                <View style={{ width: '15%' }}>
                                    <Image resizeMode="contain" style={{ width: 50, height: 50 }} source={{uri:item.track.album.images[1].url}} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '75%', padding: 8 }}>
                                    <View>
                                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>{item.track.name}</Text>
                                        <Text style={{ color: 'gray', fontSize: 12, fontWeight: 'bold' }}>2.983.221</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'c' }}>
                                        <MaterialCommunityIcons name="dots-horizontal"
                                            size={30} color="white" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }
            }
            />
        </View>
    )
}
export default ItemMusic;