import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MiniScrollMusic from "./MiniScrollMusic";
import MacroScrollMusic from "./MacroScrollMusic";


const randomColor = () => {
    while (true) {
        const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        if (color !== "#ffffff") {
            return color;
        }
    }
};
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const HEIGHT = wHeight;
const MIN_HEIGHT = wHeight * 0.07;
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
        width: '95%', height: 55, backgroundColor: '#11521c', borderRadius: 10, position: "absolute",
        justifyContent: "flex-end",
        bottom: 82,
        zIndex: 2,
        marginLeft: 10,
        // height: MIN_HEIGHT,
    },
    max: {
        height: HEIGHT,
    }
});
export default ThanhNhac;