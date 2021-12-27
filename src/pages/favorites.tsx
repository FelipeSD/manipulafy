import { Playlist } from "../components/commons/Playlist";
import { Scaffold } from "../components/layout/Scaffold";

export default function Favorites() {
    return (
        <Scaffold title="Minhas favoritas">
            <Playlist />
        </Scaffold>
    )
}