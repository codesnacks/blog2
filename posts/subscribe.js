import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Layout from '../components/Layout';
import Subscribe from '../components/Subscribe';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Subscribe />
      </Layout>
    );
  }
}
