import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WritersList from '../containers/writersList';
import SearchBox from '../containers/searchBox';
import Header from '../components/header';
import Footer from '../components/footer';

import dataHeaderInfo from '../../data/headerInfo';
import dataSearch from '../../data/dataSearch';
import dataAuthors from '../../data/authors';

const SecondPage = () => {
  let languageStorage = 'ru';
  if (typeof window !== 'undefined' && window) {
    if (localStorage.getItem('lang')) {
      languageStorage = localStorage.getItem('lang');
    }
  }

  const [searchQuery, setSearchQuery] = useState('');
  const [headerInfo, setHeaderInfo] = useState(dataHeaderInfo[languageStorage]);
  const [searchInfo, setSearchInfo] = useState(dataSearch[languageStorage]);
  const [authorsInfo, setAuthorsInfo] = useState(dataAuthors[languageStorage]);

  const сhangeLanguage = (languageValue) => {
    localStorage.setItem('lang', languageValue);
    setHeaderInfo(dataHeaderInfo[languageValue]);
    setSearchInfo(dataSearch[languageValue]);
    setAuthorsInfo(dataAuthors[languageValue]);
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
      <Footer />
    </div>
  );
};

export default SecondPage;
