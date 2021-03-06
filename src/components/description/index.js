import React from 'react';

import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

const IndexPage = ({
  data, classes: { containerParagraph, paragraph },
}) => (
  <div>
    <h2 style={{ textAlign: 'center' }}>
      {data.tittle}
    </h2>
    <div className={containerParagraph}>
      <p className={paragraph}>{data.descrFirst}</p>
      <p className={paragraph}>{data.descrSecond}</p>
      <p className={paragraph}>{data.descrThird}</p>
    </div>
  </div>
);

IndexPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(IndexPage);
