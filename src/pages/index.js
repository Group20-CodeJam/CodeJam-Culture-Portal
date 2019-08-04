import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Description from '../components/description';
import AuthorOfTheDay from '../components/authtorOfTheDay';
import Team from '../components/team';
import Header from '../components/header';

import dataDescription from '../../data/description';
import dataAuthorOfTheDay from '../../data/authors';
import dataHeaderInfo from '../../data/headerInfo';
import dataTeam from '../../data/infoTeam';
import dataNameTeam from '../../data/nameTeam';

const IndexPage = () => {
  const [headerInfo, setHeaderInfo] = useState(dataHeaderInfo.ru);
  const [description, setDescription] = useState(dataDescription.ru);
  const [authorOfDay, setAuthorOfDay] = useState(dataAuthorOfTheDay.ru);
  const [nameTeam, setNameTeam] = useState(dataNameTeam.ru);

  const сhangeLanguage = (languageValue) => {
    setDescription(dataDescription[languageValue]);
    setAuthorOfDay(dataAuthorOfTheDay[languageValue]);
    setHeaderInfo(dataHeaderInfo[languageValue]);
    setNameTeam(dataNameTeam[languageValue]);
  };

  return (
    <div>
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
    </div>
  );
};

export default IndexPage;
