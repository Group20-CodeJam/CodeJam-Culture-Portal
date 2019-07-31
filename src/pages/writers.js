import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WritersList from '../components/writersList';
import SearchBox from '../containers/searchBox';

const func = state => console.log(state);


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <SearchBox search={func} />
    <WritersList />
  </Layout>
);

export default SecondPage;
