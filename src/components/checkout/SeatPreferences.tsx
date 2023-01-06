import {
    Grid,
    Radio,
    RadioGroup,
    Typography,
  } from '@mui/material';
  import { ChangeEvent, useState } from 'react';
  import CreditCardIcon from '@mui/icons-material/CreditCard';
  import WifiIcon from '@mui/icons-material/Wifi';
  import './TrainTicketSelection.css';
  import Sheet from '@mui/joy/Sheet';
  import { Box,FormControlLabel, Checkbox, FormControl,FormLabel,FormGroup } from '@mui/material';







  export const SeatPreferences = () => {
const[preferences,setPreferences] =useState<string[]>([])
console.log({preferences})
const handleChangeSeatPreferences = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const index =preferences.indexOf(event.target.value)
    if(index=== -1){
        setPreferences([...preferences,event.target.value])}
    else{
        setPreferences(preferences.filter((preference)=> preference !== event.target.value))
    }
}

  
    return (

                <FormGroup sx={{
                    marginLeft: 1.37,
                  }}>
                <FormControlLabel
                    className="TrainSeatBox" 
                    label="Wifi"
                    control={<Checkbox value={"Wifi"} checked={preferences.includes("Wifi")} onChange={handleChangeSeatPreferences}/>}
                    />
                <FormControlLabel
                    className="TrainSeatBox"
                    label="Railway car with coupe"
                    control={<Checkbox value={"Railway car with coupe"} checked={preferences.includes("Railway car with coupe")} onChange={handleChangeSeatPreferences}/>}
                    />
                <FormControlLabel
                    className="TrainSeatBox" 
                    label="In direction of travel"
                    control={<Checkbox value={"In direction of travel"} checked={preferences.includes("In direction of travel")} onChange={handleChangeSeatPreferences}/>}
                    />
                <FormControlLabel 
                    className="TrainSeatBox"
                    label="Against direction of travel"
                    control={<Checkbox value={"Against direction of travel"} checked={preferences.includes("Against direction of travel")} onChange={handleChangeSeatPreferences}/>}
                    />
                <FormControlLabel 
                    className="TrainSeatBox"
                    label="With table"
                    control={<Checkbox value={"With table"} checked={preferences.includes("With table")} onChange={handleChangeSeatPreferences}/>}
                    />
                </FormGroup>

   

    );
  };