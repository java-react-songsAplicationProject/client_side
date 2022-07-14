import { Song } from "../model/Song";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import { useNavigate } from "react-router-dom";



const OneSong = (props:{song:Song,deleteSong:Function}) => {      
    const theme = useTheme();
    const navigate=useNavigate();
    const deleteS = ()=>{
      //פונקציה שבקומפפנת אבא שנשלחה כפרופס
      props.deleteSong(props.song.id);
    }

    const editSong =()=>{
      navigate(`/songs/edit/`+props.song.id);
    }

    const toHHMMSS = function (sec_num:number) {
        var hours:any   = Math.floor(sec_num / 3600);
        var minutes:any = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds:any = sec_num - (hours * 3600) - (minutes * 60);
    
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds;
    }
    return (  
        <Card sx={{ display: 'flex' ,width:510 ,marginTop:5 ,height:180 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' ,margin:0 ,width:140}}>
            <Typography component="div" variant="h5" width={200}>
              {props.song.title} 
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" width={200} >
            {props.song.artist}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">
             {toHHMMSS(props.song.length)}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          image={props.song.title+".jpg"}
          sx={{  marginLeft:10 ,height:180 }}
          alt="Live from space album cover"
        />
       <Box component="span" sx={{ p: 2, marginTop:5 }}>
       <IconButton onClick={deleteS} >
       <DeleteForeverTwoToneIcon/></IconButton>
       <IconButton onClick={editSong}> <ModeEditOutlineTwoToneIcon/></IconButton>
     </Box>
     </Card>
    );
}
 
export default OneSong;