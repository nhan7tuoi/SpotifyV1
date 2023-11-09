import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const Profile = () => {
    return (
        <LinearGradient style={{flex:1}} colors={["#040306", "#131624"]}>
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Text>Profile</Text>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default Profile;
