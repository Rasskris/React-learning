/* eslint-disable prefer-destructuring */

// I can't use destructing at this file, because I use dotenv-webpack plugin
// issue: https://github.com/mrsteele/dotenv-webpack/issues/70

export const APP_ID = process.env.APP_ID;

export const APP_KEY = process.env.APP_KEY;

export const APP_URL = process.env.APP_URL;
