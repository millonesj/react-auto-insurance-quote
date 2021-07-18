import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import Controls from '../../../components/controls/Controls';
import { useHistory } from 'react-router-dom';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const LoginData = (_, context) => {
  const history = useHistory();
  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const validatePhone = (val) => {
    setPhone(val);
    val?.length === 9
      ? setErrorPhone('')
      : setErrorPhone('Ingrese un número de 9 dígitos');
  };

  const handleQuote = () => {
    history.push('plan');
  };
  const URL_POLITICS =
    'https://www.rimac.com.pe/uploads/Ley29733_proteccion_de_datos_personales.pdf';

  return (
    <form noValidate autoComplete="off" className="LoginData">
      <div className="LoginData__container">
        <div className="LoginData__title">Déjanos tus datos</div>
        <div>
          <Controls.Input
            error={errorPhone}
            id="outlined-error"
            label="Celular"
            variant="outlined"
            onChange={(e) => validatePhone(e.target.value)}
          />
        </div>
        <div>
          <TextField
            error
            id="outlined-error"
            label="Placa"
            variant="outlined"
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox name="checkedG" />}
            label={
              <div>
                Acepto la{' '}
                <a href={URL_POLITICS} target="_blank" rel="noreferrer">
                  Política de Protecciòn de Datos Personales
                </a>{' '}
                y los
                <span>Términos y Condiciones.</span>
              </div>
            }
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleQuote()}
          >
            COTÍZALO
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginData;
