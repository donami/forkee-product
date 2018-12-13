import React from 'react';

import Pricing from './Pricing';
import Layout from '../../components/Layout';

function action() {
  return {
    chunks: ['pricing'],
    title: 'Pricing',
    component: (
      <Layout>
        <Pricing />
      </Layout>
    ),
  };
}

export default action;
