import React from 'react';

import Layout from '../../components/Layout';
import privacy from './privacy.md';

function action() {
  return {
    chunks: ['privacy'],
    title: privacy.title,
    component: (
      <Layout>
        <h3>Privacy</h3>
      </Layout>
    ),
  };
}

export default action;
