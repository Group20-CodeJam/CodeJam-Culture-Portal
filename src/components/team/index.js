import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import GitHub from './githubIcon';
import styles from './styles';

const Team = ({
  name,
  data,
  classes: {
    teamContainer, teamNickname, teamWrapper, icon, teamIcon, linkGit,
  },
}) => (
  <div className={teamWrapper}>
    {JSON.parse(JSON.stringify(data)).map(({
      src, nickname, gitHub,
    }, index) => (
      <div className={teamContainer} key={src}>
        <img src={src} alt="avatar" className={teamIcon} />
        <p>{name[index].name}</p>
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
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  name: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default withStyles(styles)(Team);
