import { Playlist } from "../components/commons/Playlist";
import { Scaffold } from "../components/layout/Scaffold";
import { SearchBox } from "../components/layout/SearchBox";


export default function Home() {
  return (
    <Scaffold title="Mais tocadas">
      <SearchBox />
      <Playlist />
    </Scaffold>
  )
}
