import { AppDispatch } from "./store"
import {addSongApi, deleteSongApi, getAllSongsApi, getSongByArtistApi, updateSongApi} from "../api/songs.api" 
import { Song } from "../model/Song"
import { addSong, deleteSong, editSong, saveSongs } from "./actions/songs"

export const getSongsThunk=()=>{
    return async (dispatch:AppDispatch) =>{
        try{
            const songs:Song[]= await (await getAllSongsApi()).data;
            dispatch(saveSongs(songs))
        }
        catch(error){
           console.log(error)
        }
    } 
}
export const getSongsByArtistThunk=(artist:string)=>{
    return async (dispatch:AppDispatch) =>{
        try{
            const songs:Song[]= await (await getSongByArtistApi(artist)).data;
            dispatch(saveSongs(songs))
        }
        catch(error){
           console.log(error)
        }
    } 
}
export const updateSongThunk=(s:Song)=>{
    return async (dispatch:AppDispatch) =>{
        try{
            const song:Song= await (await updateSongApi(s)).data;
            dispatch(editSong(s.id,s))
        }
        catch(error){
           console.log(error)
        }
    } 
}
export const addSongThunk=(s:Song)=>{
    return async (dispatch:AppDispatch) =>{
        try{
            const song:Song= await (await addSongApi(s)).data;
            dispatch(addSong(song));
        }
        catch(error){
           console.log(error)
        }
    } 
}
export const deleteSongThunk=(songId:string)=>{
    return async (dispatch:AppDispatch) =>{
        try{
            const song= await (await deleteSongApi(songId)).data;
            dispatch(deleteSong(songId))
        }
        catch(error){
           console.log(error)
        }
    } 
}
