import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action() {
  return {
    title: 'Bookings made easy',
    chunks: ['home'],
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  };
}

export default action;
