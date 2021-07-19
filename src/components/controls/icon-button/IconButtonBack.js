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

const IconButtonBack = () => {
  const classes = useStyles();

  return (
    <div>
      <IconButton
        className={(classes.root, classes.button)}
        aria-label="delete"
        size="small"
        color="primary"
      >
        <ArrowBackIosOutlinedIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default IconButtonBack;
