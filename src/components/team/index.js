import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import GitHub from './githubIcon';
import styles from './styles';
import data from './info.json';

const Team = ({
  classes: {
    teamContainer, teamNickname, teamWrapper, icon, teamIcon, linkGit,
  },
}) => (
  <div className={teamWrapper}>
    {JSON.parse(JSON.stringify(data)).map(({
      src, name, nickname, gitHub,
    }) => (
      <div className={teamContainer} key={src}>
        <img src={src} alt="avatar" className={teamIcon} />
        <p>{name}</p>
        <p className={teamNickname}>{nickname}</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={gitHub}
          className={linkGit}
        >
          <GitHub className={icon} />
        </a>
      </div>
    ))}
  </div>
);

Team.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Team);
