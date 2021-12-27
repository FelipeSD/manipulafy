import { Playlist } from "../components/commons/Playlist";
import { Scaffold } from "../components/layout/Scaffold";
import { usePreferences } from "../hooks/usePreferences";

export default function Favorites() {
    const {favorites} = usePreferences();
    return (
        <Scaffold title="Minhas favoritas">
            <Playlist list={favorites} />
        </Scaffold>
    )
}