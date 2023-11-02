import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MiniScrollMusic from "./MiniScrollMusic";
import MacroScrollMusic from "./MacroScrollMusic";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const HEIGHT = wHeight;
const MIN_HEIGHT = wHeight * 0.08;
const ThanhNhac = () => {
    const [isMinimize, setIsMinimize] = useState(true);
    const _onMinimizeClick = () => {
        setIsMinimize(true);
    };
    // const _onSettingsClick = () => {
    //     setIsMinimize(false);
    // };
    const _onDockClick = () => {
        setIsMinimize(false);
    };
    return (
        <View style={isMinimize ? styles.min : styles.max}>
            {isMinimize ? (
                <MiniScrollMusic click={_onDockClick} />
            ) : (
                <MacroScrollMusic click={_onMinimizeClick} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    min: {
        width: '95%', height: 70, backgroundColor: '#320026', borderRadius: 10, position: "absolute",
        justifyContent: "flex-end",
        bottom: 82,
        zIndex: 2,
        marginLeft: 10,
        height: MIN_HEIGHT,
    },
    max: {
        height: HEIGHT,
    }
});
export default ThanhNhac;