import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WritersList from '../containers/writersList';
import SearchBox from '../containers/searchBox';
import Header from '../components/header';

import dataHeaderInfo from '../../data/headerInfo';
import dataSearch from '../../data/dataSearch';
import dataAuthors from '../../data/authors';

const SecondPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [headerInfo, setHeaderInfo] = useState(dataHeaderInfo.ru);
  const [searchInfo, setSearchInfo] = useState(dataSearch.ru);
  const [authorsInfo, setAuthorsInfo] = useState(dataAuthors.ru);

  const сhangeLanguage = (languageValue) => {
    setHeaderInfo(dataHeaderInfo[languageValue]);
    setSearchInfo(dataSearch[languageValue]);
    setAuthorsInfo(dataAuthors[languageValue]);
  };

  return (
    <div>
      <Header
        data={headerInfo}
        onSelect={сhangeLanguage}
      />
      <Layout>
        <SEO title="Page two" />
        <SearchBox
          search={setSearchQuery}
          data={searchInfo}
        />
        <WritersList
          query={searchQuery}
          data={authorsInfo}
        />
      </Layout>
    </div>
  );
};

export default SecondPage;
