import { Outlet, Route, Routes } from 'react-router-dom';
import SongsLandingPage from './SongsLandingPage';
import EditSong from './EditSong';
import AddSong from './AddSong';
import { Song } from '../model/Song';
import { useDispatch, useSelector } from 'react-redux';
import { addSongThunk, deleteSongThunk, getSongsByArtistThunk, getSongsThunk, updateSongThunk } from '../store/thunk';
import { AppDispatch, RootState } from '../store/store';

function ParentComponent() {
  let arr:Song[]=useSelector((state:RootState) => state.sng.songsArr);
  let dispatch=useDispatch<AppDispatch>();
  const saveSongs =()=>{
    dispatch(getSongsThunk());
  }
  const updateSong=(song:Song)=>{
    dispatch(updateSongThunk(song))
  }
  const addSong=(song:Song)=>{
    dispatch(addSongThunk(song))
  }
  const deleteSong=(songId:string)=>{
    dispatch(deleteSongThunk(songId))
  }
  const getSongsByArtist=(artist:string)=>{
    dispatch(getSongsByArtistThunk(artist));
  }

  return (<>
    <Routes>
    <Route path="songs" element={<SongsLandingPage a={arr} saveSongs={saveSongs} deleteSong={deleteSong} getSongsByArtist={getSongsByArtist}/>}/>
    <Route path="songs/add" element={<AddSong addSong={addSong} />}/>
    <Route path="songs/edit/:songId" element={<EditSong updateSong={updateSong}/>}/>
    <Route path="" element={<SongsLandingPage a={arr} saveSongs={saveSongs} deleteSong={deleteSong} getSongsByArtist={getSongsByArtist}/>}/>
    </Routes>
    <Outlet/>
    </>
  );
}

export default ParentComponent;
