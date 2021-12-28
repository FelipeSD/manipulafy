import { useEffect, useState } from "react";
import { Playlist } from "../components/commons/Playlist";
import { Scaffold } from "../components/layout/Scaffold";
import { Track, usePreferences } from "../hooks/usePreferences";

export default function Favorites() {
    const {favorites} = usePreferences();
    const [trackList, setTrackList] = useState<Track[]>([]);

    useEffect(() => {
        setTrackList(Object.values(favorites));
    }, [favorites]);

    return (
        <Scaffold title="Minhas favoritas">
            <Playlist list={trackList} />
        </Scaffold>
    )
}