import {Button, Grid} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TrainIcon from '@mui/icons-material/Train';
import ScheduleIcon from '@mui/icons-material/Schedule';

export const TrainCard = () => {
    return (<>
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <div className="Align">
                    <span>14:03 Bratislava <br/> 20:03 Košice</span>
                    <div className="TrainName"><TrainIcon/><br/>
                        <span>R 609</span>
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div className="BuyButton">
                    <Button variant="contained" fullWidth endIcon={<ShoppingCartIcon/>}>
                        <span>18.68 €<br/> Buy</span>
                    </Button>
                </div>
            </Grid>
            <Grid item xs={9}>
                <div className="AlignTime">
                    <div className="AlignClocks"><ScheduleIcon/>
                        <span>5 hrs. 50 min.</span>
                    </div>
                    <div>443 km</div>
                </div>
            </Grid>
            <Grid item xs={3}>
                <Button size="small" variant="outlined" endIcon={<ExpandMoreIcon/>}>
                    <span>Details</span>
                </Button>
            </Grid>
        </Grid></>);
}
