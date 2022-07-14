import { Song } from "../../model/Song"

export const addSong = (song:Song) => {
    return {
        type: "ADD_SONG",
        payload: song
    }
}
export const deleteSong = (songId:string) => {
    return {
        type: "DELETE_SONG",
        payload: songId
    }
}
export const saveSongs = (songArr:Song[]) => {
    return {
        type: "SAVE_SONGS",
        payload: songArr
    }
}
export const editSong = (songId:string,song:Song) => {
    return {
        type: "EDIT_SONG",
        payload: {id:songId,s:song}
    }
}

