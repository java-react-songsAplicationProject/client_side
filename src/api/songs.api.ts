import axios, { AxiosResponse } from "axios"
import { Song } from "../model/Song"


    export async function getAllSongsApi() :Promise<AxiosResponse<Song[]>>{
        return await axios.get<Song[]>(`http://localhost:8080/songs`)
    }
    export async function addSongApi(song:Song) :Promise<AxiosResponse<Song>>{
        return await axios.post(`http://localhost:8080/songs`,song)
    }
    export async function updateSongApi(song:Song) :Promise<AxiosResponse<any>>{
        return await axios.put(`http://localhost:8080/songs`,song)
    }
    export async function deleteSongApi(id:string) :Promise<AxiosResponse<any>>{
        return await axios.delete(`http://localhost:8080/songs/`+id)
    }
    export async function getSongByArtistApi(artist:string) :Promise<AxiosResponse<Song[]>>{
        return await axios.get(`http://localhost:8080/songs/byArtistName/`+artist)
    }
    export async function getSongByIdApi(id:string) :Promise<AxiosResponse<Song>>{
        return await axios.get(`http://localhost:8080/songs/`+id)
    }

