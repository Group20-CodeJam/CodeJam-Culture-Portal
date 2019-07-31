export default {
  searchBox: {
    display: 'flex',
    width: '80%',
    margin: 'auto',
    justifyContent: 'space-around',
    marginBottom: '1rem',
  },
  textField: {
    width: '60%',
    fontSize: '10px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#eeedff',
      },
      '&:hover fieldset': {
        borderColor: '#b3739f',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#744b67',
      },
    },
  },
  button: {
    background: '#744b67',
    color: '#eeedff',
    textTransform: 'capitalize',
    fontSize: '1rem',
    borderRadius: '10px',
  },
};
