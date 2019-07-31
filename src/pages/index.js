import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Description from '../components/description';
import AuthorOfTheDay from '../components/authtorOfTheDay';
import Team from '../components/team';

const IndexPage = () => (
  <Layout>
    <SEO title="Писатели Беларуси" />
    <Description />
    <AuthorOfTheDay />
    <Team />
  </Layout>
);

export default IndexPage;
