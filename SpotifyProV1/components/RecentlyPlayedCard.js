
import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

function RecentlyPlayedCard({ txtHeader, arr }) {
    return (
        <View style={{ width: '100%', height: 230, marginBottom: 20 }}>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{txtHeader}</Text>
            <View>
                <View style={{ width: '100%' }}>
                    <FlatList data={arr}
                        horizontal={true}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ marginRight: 20 }}>
                                    <View style={{ width: 150, height: 150, marginTop: 10 }}>
                                        <Image resizeMode='contain' style={{ width: '100%', height: '100%' }} source={{ uri: item.track.album.images[0].url }} />
                                    </View>
                                    <Text numberOfLines={2} style={{ color: 'gray', fontWeight: 500, marginTop: 10, width: 150 }}>{item.track.name}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        </View>
    )
}
export default RecentlyPlayedCard;