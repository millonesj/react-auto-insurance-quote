// import { Grid } from '@material-ui/core'
import User from './images/user.svg'

const LoginBanner = () => {
  return (
    <div className='LoginBanner'>
      <img src={User} alt="logo" />
      <div className="LoginBanner--text-container">
        <div>¡NUEVO!</div>
        <div className="title">Seguro<span className='title--red'> Vehicular</span></div>
        <div className='title title--red'>Tracking</div>
        <div>Cuentanos donde le haras seguimiento a tu seguro</div>
      </div>
      {/* </Grid> */}
    </div>
  )
}

export default LoginBanner