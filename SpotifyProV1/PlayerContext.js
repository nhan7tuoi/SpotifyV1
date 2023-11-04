import { createContext, useRef, useState } from "react";

const Player = createContext();

const PlayerContext = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [currentProgress, setCurrentProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSound, setCurrentSound] = useState(null);
    const value = useRef(0);
    const [listTrack, setListTrack] = useState([])
    return (
        <Player.Provider value={{
            currentTrack, setCurrentTrack,
            currentProgress, setCurrentProgress,
            currentTime, setCurrentTime,
            duration, setDuration,
            isPlaying, setIsPlaying,
            currentSound, setCurrentSound,
            value,
            listTrack, setListTrack
        }}>
            {children}
        </Player.Provider>
    )
}

export { PlayerContext, Player }