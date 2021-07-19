import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

const useStyles = makeStyles((theme) => ({
  button: {
    bgcolor: 'text.secondary',
    borderStyle: 'solid',
    border: 1,
  },
}));

const IconButtonBack = (props) => {
  const { onClick } = props;
  const classes = useStyles();

  return (
    <IconButton
      className={(classes.root, classes.button)}
      aria-label="delete"
      size="small"
      color="primary"
      onClick={onClick}
    >
      <ArrowBackIosOutlinedIcon fontSize="inherit" />
    </IconButton>
  );
};

export default IconButtonBack;
