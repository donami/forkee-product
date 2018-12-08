import React from 'react';
// import Pricing from './Pricing';
import Layout from '../../components/Layout';

function action() {
  return {
    chunks: ['pricing'],
    title: 'Pricing',
    component: (
      <Layout>
        <div>hello</div>
      </Layout>
    ),
  };
}

export default action;
