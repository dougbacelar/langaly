import React, { memo } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import Icon from '@material-ui/core/Icon';
// import SaveIcon from '@material-ui/icons/Save';
const facebookLogo = require('../../../../assets/images/facebook-logo.png');
const useStyles = makeStyles({
  button: {
    backgroundColor: 'rgb(66, 103, 178)',
    color: 'white',
    fontWeight: '600',
    textTransform: 'none',
    '&:hover': { backgroundColor: 'rgb(66, 103, 178, 0.8)' },
  },
  image: { width: '1.5rem' },
  text: { padding: '0 1.5rem 0 1rem' },
});

const FacebookButton = memo(() => {
  const classes = useStyles();

  return (
    <Button variant='text' className={classes.button}>
      <img className={classes.image} src={facebookLogo} />
      <span className={classes.text}>Login with Facebook</span>
    </Button>
  );
});

export default FacebookButton;
