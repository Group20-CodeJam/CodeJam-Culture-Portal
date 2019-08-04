export default {
  searchBox: {
    display: 'flex',
    width: '80%',
    margin: 'auto',
    justifyContent: 'space-around',
    marginBottom: '1rem',
  },
  textField: {
    width: '80%',
    borderRadius: '100px',
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
    color: '#744b67',
    borderColor: '#744b67',
    textTransform: 'capitalize',
    textWeight: 'bold',
    fontSize: '1rem',
    borderRadius: '5px',
    borderWidth: '2px',
    '&:hover': {
      background: '#744b67',
      color: '#eeedff',
    },
  },
};
