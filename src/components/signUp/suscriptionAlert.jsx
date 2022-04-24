import { Alert } from "@mui/material";
import { suscriptionTextSize } from "./SignUpStyles";

function suscriptionAlert(id, setOpen){
    
    switch(id){
        case 1: case 2: case 3:
            return(
                    <Alert 
                        onClose={() => setOpen(false)}
                        variant="filled" 
                        severity="warning" 
                        sx={suscriptionTextSize}>
                    Switch to longer suscriptions for benefits and discounts!
                    </Alert>
                )
        case 4: 
            return(
                    <Alert 
                        onClose={() => setOpen(false)} 
                        variant="filled" 
                        severity="info" 
                        sx={suscriptionTextSize} >
                    Switching to longer suscriptions will cost you less.
                    </Alert>
                )
        case 5:
            return(
                    <Alert 
                        onClose={() => setOpen(false)} 
                        variant="filled" 
                        severity="success" 
                        sx={suscriptionTextSize}>
                    60% discount on daily fee.
                    </Alert>
                )
        case 6:
            return(            
                    <Alert 
                        onClose={() => setOpen(false)} 
                        variant="filled" 
                        severity="success" 
                        sx={suscriptionTextSize}>
                    65% discount on daily fee and free nutritionist consultation.
                    </Alert>
                )
        default:
            return(<></>)
    }
}

export default suscriptionAlert;