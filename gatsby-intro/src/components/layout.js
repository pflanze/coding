import React from 'react';
import { Global, css } from '@emotion/core';

const layout = ({ children }) => (
  <>
    <Global
      styles={css`...`} />
      * {
      box - sizing: border-box;
      margin: 0;
      }
      *+*{
      margin - top: 1rem;

      }

      html,
      body{
      margin: 0;
        color: #555;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-size: 18px;
        line-height: 1.4;
      }
  /* remove margin for the main div that Gatsby mounts into */
  >div {
      margin - top: 0;
  }
  </>
);

export default layout;