import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WritersList from '../components/writersList';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <WritersList />
  </Layout>
);

export default SecondPage;
