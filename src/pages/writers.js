import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WritersList from '../containers/writersList';
import SearchBox from '../containers/searchBox';


const SecondPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Layout>
      <SEO title="Page two" />
      <SearchBox search={setSearchQuery} />
      <WritersList query={searchQuery} />
    </Layout>
  );
};

export default SecondPage;
