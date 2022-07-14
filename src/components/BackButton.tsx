import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function BackButton(props:any){
    const nav=useNavigate();
    let navigate=()=>{
        if(props.kind=="home")
          nav('/songs');
        else
        nav('/songs/add')
    }
    return (
    
    <Button variant="outlined" endIcon= {props.kind=="add"?<AddIcon/>:<ArrowBackIcon/>} onClick={navigate}>
    {props.kind=="add"?"add":"back"}
    </Button>
    )


}