import React from 'react';
import PropTypes from 'prop-types';

import './layout.css';

const Layout = ({ children }) => (
  <>
    <main
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        flex: '1 0 auto',
      }}
    >
      {children}
    </main>
  </>
);


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
