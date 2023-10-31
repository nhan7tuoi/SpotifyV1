import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
    return (
        <LinearGradient style={{flex:1}} colors={["#040306","#131624"]}>
            <SafeAreaView>
                <Text>Premium</Text>
            </SafeAreaView>
        </LinearGradient>
    );
  }