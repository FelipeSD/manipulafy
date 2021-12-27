import styled from "styled-components"
import { FiPlay } from "react-icons/fi"
import { FaDeezer } from "react-icons/fa"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"

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
`

export function Playlist() {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Música</th>
                    <th>Artista</th>
                    <th>Álbum</th>
                    <th>Duration</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Flex>
                            <img src="https://e-cdns-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/56x56-000000-80-0-0.jpg" />
                            <span>Song 1</span>
                        </Flex>
                    </td>
                    <td>Artist 1</td>
                    <td>Album 1</td>
                    <td>3:00</td>
                    <td>
                        <Flex className="mx-auto">
                            <RoundButton type="button">
                                <FaDeezer />
                            </RoundButton>
                            <RoundButton type="button">
                                <FiPlay />
                            </RoundButton>
                            <RoundButton type="button">
                                <MdFavoriteBorder />
                            </RoundButton>
                        </Flex>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}