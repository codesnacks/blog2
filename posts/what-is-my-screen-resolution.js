import React from 'react';
import Layout from '../components/Layout';
import get from 'lodash/get';
import { graphql } from 'gatsby';

import { useState, useEffect } from 'react';

const getWidth = (window, document) =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const getHeight = (window, document) =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

function useCurrentWitdhAndHeight() {
  // save current window width in the state object
  const myWindow = typeof window === 'undefined' ? { screen: {} } : window;
  const myDocument =
    typeof document === 'undefined'
      ? { documentElement: {}, body: {} }
      : document;
  let [width, setWidth] = useState(getWidth(myWindow, myDocument));
  let [height, setHeight] = useState(getHeight(myWindow, myDocument));

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => {
        setWidth(getWidth());
        setHeight(getHeight());
      }, 150);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);
    window.addEventListener('scroll', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
      window.removeEventListener('scroll', resizeListener);
    };
  }, []);

  return [width, height];
}

const Thanks = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const myWindow = typeof window === 'undefined' ? { screen: {} } : window;

  let [width, height] = useCurrentWitdhAndHeight();
  return (
    <Layout location={props.location} title={siteTitle}>
      <main>
        <h1>What's my screen resolution?</h1>
        <p>This is a small online tool to find your screen resolution.</p>

        <h2>Screen Size / Resolution</h2>
        <p>Width: {myWindow.screen.width}</p>
        <p>Height: {myWindow.screen.height}</p>

        <h2>Available Screen Size</h2>
        <p>Width: {myWindow.screen.availWidth}</p>
        <p>Height: {myWindow.screen.availHeight}</p>

        <h2>Browser Size</h2>
        <p>Browser Width: {width}</p>
        <p>Browser Height: {height}</p>
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  query WhatSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Thanks;
