import  {  useEffect } from "react";
import {  Song } from "../model/Song";
import BackButton from "../components/BackButton";
import Grid from '@mui/material/Grid';
import OneSong from "../components/oneSong";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function SongsLandingPage(props:{a:Song[],saveSongs:Function,deleteSong:Function,getSongsByArtist:Function}){
    let arr:Song[]=props.a;
    let artist:string="";
    useEffect(() => {
        if(!arr.length){
           props.saveSongs()
      }  }, []);


    const change=(e:any)=>{
      if(e.target.value=="")
      props.saveSongs();
      else if(e.key === "Enter"){
        props.getSongsByArtist(artist);
      }
      artist=e.target.value;
    }
    const search=(e:any)=>{
      if(artist=="")
         props.saveSongs();
      else props.getSongsByArtist(artist);
    }

    return (<> 
     <div>songs</div>
     <Paper
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
     <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search By Artist"
        inputProps={{ 'aria-label': 'search google maps' }}
        onKeyUp={change}
      />
      <IconButton onClick={search} sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      </Paper>
      <Grid container  columns={1} marginLeft={70} width={600}>
        {arr.map((song) => (
          <Grid item xs={1}  key={song.id}>
             <OneSong song={song} key={song.id} deleteSong={props.deleteSong}/>
          </Grid>
        ))}
      </Grid>
       <BackButton kind="add"/>
       
     </>)

}