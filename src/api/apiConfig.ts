import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.1Kjd4C5Pzx3HsUANg4WwbAzbXoBzyhN5wgrfHnyp1gPXBO9MMzAd7l9kotvY',
  },
});
