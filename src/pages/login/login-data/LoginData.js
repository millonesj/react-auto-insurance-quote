import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import Controls from '../../../components/controls/Controls';

// import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const LoginData = () => {

  const [phone, setPhone] = useState('')
  const [errorPhone, setErrorPhone] = useState('')
  const validatePhone = (val) => {
    setPhone(val)
    val?.length === 9 ? setErrorPhone('') : setErrorPhone('Ingrese un número de 9 dígitos')
  }

  return (

    <form noValidate autoComplete="off" className="LoginData" >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Déjanos tus datos {phone}
        </Grid>

        <Grid item xs={12} p={2}>
          <Controls.Input
            error={errorPhone}
            id="outlined-error"
            label="Celular"
            variant="outlined"
            p={2}
            onChange={e => validatePhone(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} m={2}>
          <TextField
            error
            id="outlined-error"
            label="Placa"
            variant="outlined"
          />

        </Grid>
        <Grid item xs={12} m={2}>
          <FormControlLabel
            control={<Checkbox name="checkedG" />}
            label="Custom color"
          />
          <div>
            Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.
          </div>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary">COTÍZALO</Button>

        </Grid>

      </Grid>


    </form>
  )
}

export default LoginData

/*

className={classes.root}

control={<Checkbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
*/