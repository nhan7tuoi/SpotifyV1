
import React from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native';


function ListCard({ txtHeader, arr,navigation}) {
    return (
        <View style={{ width: '100%', height: 230, marginBottom: 20 }}>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{txtHeader}</Text>
            <View>
                {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}> */}
                <View style={{ width: '100%' }}>
                    <FlatList data={arr}
                        horizontal={true}
                        renderItem={({ item }) => {
                            return (
                                <Pressable onPress={()=>{
                                    navigation.navigate('Album',{item})
                                }}
                                style={{ marginRight: 20 }}>
                                    <View style={{ width: 150, height: 150, marginTop: 10 }}>
                                        <Image resizeMode='contain' style={{ width: '100%', height: '100%' }} source={{uri:item.img}} />
                                    </View>
                                    <Text numberOfLines={2} style={{ color: 'gray', fontWeight: 500, marginTop: 10, width: 150 }}>{item.title}</Text>
                                </Pressable>
                            )
                        }}
                    />
                </View>
                {/* </ScrollView> */}
            </View>
        </View>
    )
}
export default ListCard;