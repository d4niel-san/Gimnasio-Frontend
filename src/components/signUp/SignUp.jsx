import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { MenuItem, Snackbar } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useContext, useState } from "react";
import { ApiContext } from "../../context/apiContext";
import * as styles from "./SignUpStyles";
import suscriptionAlert from "./suscriptionAlert";
import paymentMethods from "./Suscriptions";

const SignUp = () => {

  const { SignUpSubmit } = useContext(ApiContext)
  const initialPayment = paymentMethods.filter(elem => elem.id===4)[0]
  const [paymentMethod, setPaymentMethod] = useState(initialPayment.value);
  const [cost, setCost] = useState(initialPayment.cash);
  const [open, setOpen] = useState(false);
  //const [toastText, setToastText] = useState('');

  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    const payment = paymentMethods.filter(elem => elem.value===event.target.value)[0]
    setPaymentMethod(payment.value);
    setCost(payment.cash);
    //setToastText(payment.toastText);
    setOpen(true);
  };

  return (
    <Container
      component='main'
      maxWidth='xs'
      sx={styles.Container}
    >
      <CssBaseline />
      <Box
        sx={styles.Box}
      >
        <Avatar sx={styles.Avatar}>
          <LockOutlinedIcon color='primary' />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box 
          component='form' 
          noValidate 
          onSubmit={SignUpSubmit} 
          sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
                size='small'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='family-name'
                size='small'

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                size='small'

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
                size='small'

              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='given-name'
                name='payment'
                required
                fullWidth
                id="paymentMethod"
                label='Payment Method'
                autoFocus
                select
                value={paymentMethod}
                onChange={handleChange}
                size='small'
              >
                {paymentMethods.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                disabled
                fullWidth
                id='cost'
                label='Cost'
                name='cost'
                autoComplete='family-name'
                value={cost}
                size='small'
              />
            </Grid>
          </Grid>
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
          >
          {suscriptionAlert(paymentMethods.filter(elem => elem.value===paymentMethod)[0].id , setOpen)}
          </Snackbar> 
          
          <Grid item xs={12}>
            <FormControlLabel
              sx={{marginTop: '1rem'}}
              control={
                <Checkbox 
                  name='allowExtraEmails'
                  value='allowExtraEmails'
                  color='primary'
                />
              }
              label={
                <Typography sx={{fontSize: '0.85rem'}}>
                  I want to receive inspiration, marketing promotions and updates via email.
                </Typography>
              }
            />
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={styles.Button}
          >
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item sx={{marginBottom: '0.5rem'}}>
              <Link href='/SignIn' variant='body2' sx={{fontSize: '0.75rem'}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};



export default SignUp;
