import { createContext, useContext, useEffect, useState } from "react";

export type Track = {
    id: number;
    title: string;
    artist: {
        name: string;
    };
    album: {
        title: string;
        cover_small: string;
    };
    duration: string;
    link: string;
    preview: string;
}

type PreferencesProviderProps = {
    children: React.ReactNode;
}

type PreferencesContextData = {
    favorites: {
        [key: number]: Track;
    };
    addFavorite: (track: Track) => void;
    removeFavorite: (track: Track) => void;
}

const PreferencesContext = createContext({} as PreferencesContextData);

export function PreferencesProvider({ children }: PreferencesProviderProps) {
    const [favorites, setFavorites] = useState<Track[]>([]);

    async function addFavorite(track: Track) {
        const newFavorites = {
            ...favorites,
            [track.id]: track
        }
        setFavorites(newFavorites);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }

    async function removeFavorite(track: Track) {
        const newFavorites = {
            ...favorites
        }
        delete newFavorites[track.id];
        setFavorites(newFavorites);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }

    useEffect(() => {
        const favorites = localStorage.getItem("favorites");
        if (favorites) {
            setFavorites(JSON.parse(favorites));
        }
    }, []);

    return (
        <PreferencesContext.Provider value={{
            favorites,
            addFavorite,
            removeFavorite
        }}>
            {children}
        </PreferencesContext.Provider>
    )
}

export function usePreferences() {
    return useContext(PreferencesContext);
}