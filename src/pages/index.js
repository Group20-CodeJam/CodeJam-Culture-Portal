import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Description from '../components/description';
import AuthorOfTheDay from '../components/authtorOfTheDay';
import Team from '../components/team';
import Header from '../components/header';
import Footer from '../components/footer';

import dataDescription from '../../data/description';
import dataAuthorOfTheDay from '../../data/authors';
import dataHeaderInfo from '../../data/headerInfo';
import dataTeam from '../../data/infoTeam';
import dataNameTeam from '../../data/nameTeam';

const IndexPage = () => {
  let languageStorage = 'ru';
  if (typeof window !== 'undefined' && window) {
    if (localStorage.getItem('lang')) {
      languageStorage = localStorage.getItem('lang');
    }
  }

  const [headerInfo, setHeaderInfo] = useState(dataHeaderInfo[languageStorage]);
  const [description, setDescription] = useState(dataDescription[languageStorage]);
  const [authorOfDay, setAuthorOfDay] = useState(dataAuthorOfTheDay[languageStorage]);
  const [nameTeam, setNameTeam] = useState(dataNameTeam[languageStorage]);

  const сhangeLanguage = (languageValue) => {
    localStorage.setItem('lang', languageValue);
    setDescription(dataDescription[languageValue]);
    setAuthorOfDay(dataAuthorOfTheDay[languageValue]);
    setHeaderInfo(dataHeaderInfo[languageValue]);
    setNameTeam(dataNameTeam[languageValue]);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
    }}
    >
      <Header
        data={headerInfo}
        onSelect={сhangeLanguage}
      />
      <Layout>
        <SEO title="Писатели Беларуси" />
        <Description data={description} />
        <AuthorOfTheDay data={authorOfDay} />
        <Team
          name={nameTeam}
          data={dataTeam}
        />
      </Layout>
      <Footer />
    </div>
  );
};

export default withStyles(styles)(IndexPage);
