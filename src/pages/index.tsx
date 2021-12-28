import { GetStaticPropsResult } from "next";
import { useEffect, useState } from "react";
import { Playlist } from "../components/commons/Playlist";
import { Scaffold } from "../components/layout/Scaffold";
import { SearchBox } from "../components/layout/SearchBox";
import { Track } from "../hooks/usePreferences";
import { api } from "../services/deezer";
import secondsToMinutes from "../utils/time";

interface HomeProps {
  tracks: Track[];
}

export default function Home({ tracks }: HomeProps) {
  const [trackList, setTrackList] = useState<Track[]>(tracks);
  const [searchData, setSearchData] = useState<string>("");

  useEffect(() => {
    if(!searchData){
      setTrackList(tracks);
      return;
    }
    
    const filteredTracks = trackList.filter(
      (track: Track) =>
        track.title.toLowerCase().includes(searchData.toLowerCase())
        || track.artist.name.toLowerCase().includes(searchData.toLowerCase())
        || track.album.title.toLowerCase().includes(searchData.toLowerCase())
    );

    setTrackList(filteredTracks);
  }, [searchData, trackList, tracks]);

  return (
    <Scaffold title="Mais tocadas">
      <SearchBox onSearch={setSearchData} />
      <Playlist list={trackList} />
    </Scaffold>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeProps>> {
  const res = await api.get("/chart/0/tracks");
  const tracks: Track[] = res.data.data;

  const songs = tracks.map(track => ({
    id: track.id,
    title: track.title,
    artist: track.artist,
    album: track.album,
    duration: secondsToMinutes(track.duration),
    link: track.link,
    preview: track.preview
  }));

  return {
    props: {
      tracks: songs
    }
  }
}
