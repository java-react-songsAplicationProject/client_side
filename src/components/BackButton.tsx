import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function BackButton(props:{navigateTo:any}){
    const nav=useNavigate();
    let navigate=()=>{
       nav(`/${props.navigateTo}`)
    }
    return (
  
    <Button variant="outlined" endIcon= {props.navigateTo=="songs"?<ArrowBackIcon/>:  <AddIcon/>} onClick={navigate}>
    {props.navigateTo=="songs"?"back":"add"}
    </Button>
    )


}