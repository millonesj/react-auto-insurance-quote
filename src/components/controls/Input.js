import { TextField } from '@material-ui/core'

const Input = (props) => {

  const { name, label, value, error = '', onChange } = props;

  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error !== ""}
      helperText={error !== "" ? error : ''}

    />
  )
}

export default Input;