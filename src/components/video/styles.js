export default {
  button: {
    color: '#744b67',
    borderColor: '#744b67',
    textTransform: 'capitalize',
    textWeight: 'bold',
    fontSize: '1rem',
    borderRadius: '5px',
    borderWidth: '2px',
    background: '#fff',

    position: 'fixed',
    width: '1%',
    top: '1%',
    right: '1%',
    '&:hover': {
      background: '#744b67',
      color: '#eeedff',
    },
  },
  video: {
    minHeight: '80vh',
    maxHeight: '80vh',
    minWidth: '80vw',
    maxWidth: '80vw',
  },
  iframe: {
    height: '80vh',
    marginBottom: '0',
  },
};
