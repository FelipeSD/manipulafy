import styled from "styled-components"
import { useState } from "react"
import { FiPlay, FiPause } from "react-icons/fi"
import { FaDeezer } from "react-icons/fa"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { Track, usePreferences } from "../../hooks/usePreferences"
import Image from "next/image"

interface PlaylistProps {
    list: Track[]
}

const Table = styled.table`
    overflow: hidden;
    border: 1px solid #ddd;
    margin: 2rem;
    border: 0;
    border-collapse: collapse;

    th {
        text-align: left;
        padding: .5rem;
        border-bottom: .01rem solid #ddd;
        color: #fff;
    }

    tbody {
        tr {
            transition: all .2s ease-in-out;
            &:hover {
                background-color: #222;
            }
        }

        td {
            padding: .5rem;
        }
    }

    @media (max-width: 600px) {
        tr > :nth-child(2),
        tr > :nth-child(3),
        tr > :nth-child(4) {
            display: none;
        }
    }
`

const RoundButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: .8rem;
    border: none;
    border-radius: 2rem;

    background-color: var(--primary);
    color: #fff;

    cursor: pointer;
    transition: all .2s ease-in-out;

    &:active {
        transform: scale(.9);
    }
`

const Flex = styled.div`
    display: flex;
    align-items: center;

    & > * {
        margin-left: .5rem;
    }

    &.mx-auto {
        justify-content: center;
    }

    @media (max-width: 600px) {
        flex-direction: column;

        & > * {
            margin-top: .5rem;
        }
    }
`

export function Playlist({ list }: PlaylistProps) {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const { favorites, addFavorite, removeFavorite } = usePreferences();

    function openDeezer(url: string) {
        window.open(url, "_blank");
    }

    function playSound(url: string) {
        if (audio) {
            audio.pause();
        }

        const newAudio = new Audio(url);
        newAudio.play();
        setAudio(newAudio);
    }

    function stopSound() {
        if (audio) {
            audio.pause();
            setAudio(null);
        }
    }

    function favorite(track: Track) {
        addFavorite(track);
    }

    function unfavorite(track: Track) {
        removeFavorite(track);
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>Música</th>
                    <th>Artista</th>
                    <th>Álbum</th>
                    <th>Duração</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {list.map(track => (
                    <tr key={track.id}>
                        <td>
                            <Flex>
                                <Image
                                    src={track.album.cover_small}
                                    width={60} 
                                    height={60} 
                                    alt="cover" />
                                <span>{track.title}</span>
                            </Flex>
                        </td>
                        <td>{track.artist.name}</td>
                        <td>{track.album.title}</td>
                        <td>{track.duration}</td>
                        <td>
                            <Flex className="mx-auto">
                                <RoundButton type="button" onClick={() => openDeezer(track.link)}>
                                    <FaDeezer />
                                </RoundButton>
                                {audio && audio.src === track.preview
                                    ? <RoundButton type="button" onClick={() => stopSound()}>
                                        <FiPause />
                                    </RoundButton>
                                    : <RoundButton type="button" onClick={() => playSound(track.preview)}>
                                        <FiPlay />
                                    </RoundButton>
                                }

                                {favorites[track.id]
                                    ? <RoundButton type="button" onClick={() => unfavorite(track)}>
                                        <MdFavorite />
                                    </RoundButton>
                                    : <RoundButton type="button" onClick={() => favorite(track)}>
                                        <MdFavoriteBorder />
                                    </RoundButton>
                                }
                            </Flex>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}