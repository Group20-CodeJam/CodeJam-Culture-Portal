import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default {
  root: {
    flexGrow: 1,
    margin: '40px',
    padding: '4%',
    borderRadius: '16px',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 168,
    height: 188,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '10px',
    justify: 'center',
  },
  subtitle: {
    marginLeft: '35%',
    fontSize: '20px',
    fontWeight: 'bold',
  },
};
