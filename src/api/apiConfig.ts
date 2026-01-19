import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.txsn5uEo-0c8CbH22ZpRaMZb-n_EvEoPHyAV44yKUBD7wqnL3ywTZOv7nuL4',
  },
});
