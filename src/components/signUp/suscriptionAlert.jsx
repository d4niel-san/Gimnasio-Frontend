import { Alert } from "@mui/material";
import { TextSize } from "./SignUpStyles";

function suscriptionAlert(id){
    
    switch(id){
        case 1: case 2: case 3:
            return(
                    <Alert variant="filled" severity="warning">
                    Switch to longer suscriptions for benefits and discounts!
                    </Alert>
                )
        case 4: 
            return(
                    <Alert variant="filled" severity="info" sx={TextSize} >
                    Switching to longer suscriptions will cost you less in the long term
                    </Alert>
                )
        case 5:
            return(
                    <Alert variant="filled" severity="success">
                    60% discount on daily fee
                    </Alert>
                )
        case 6:
            return(            
                    <Alert variant="filled" severity="success">
                    65% discount on daily fee and free nutritionist consultation
                    </Alert>
                )
        default:
            return(<></>)
    }
}

export default suscriptionAlert;