import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ApiContext } from "../../context/apiContext";
import * as styles from "./SignUpStyles"
import React, { useContext, useState } from "react";
import { MenuItem } from "@mui/material";
import paymentMethods from "./Suscriptions";
import suscriptionAlert from "./suscriptionAlert";

const SignUp = () => {

  const { SignUpSubmit } = useContext(ApiContext)
  const initialPayment = paymentMethods.filter(elem => elem.id===4)[0]
  const [paymentMethod, setPaymentMethod] = useState(initialPayment.value);
  const [cost, setCost] = useState(initialPayment.cash);

  const handleChange = (event) => {
    const payment = paymentMethods.filter(elem => elem.value===event.target.value)[0]
    setPaymentMethod(payment.value);
    setCost(payment.cash);
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
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name='allowExtraEmails' value='allowExtraEmails' color='primary'/>}
                label='I want to receive inspiration, marketing promotions and updates via email.'
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
              />
            </Grid>
          </Grid>
          
          <div>
            {suscriptionAlert(paymentMethods.filter(elem => elem.value===paymentMethod)[0].id)}
          </div>
          
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={styles.Button}
          >
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link href='/SignIn' variant='body2'>
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
