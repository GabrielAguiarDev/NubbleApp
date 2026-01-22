import { createMMKV } from 'react-native-mmkv';

import { Storage } from '../storage';

export const MMVVInstance = createMMKV({
  id: `storage`,
});

export const MMKVStorage: Storage = {
  getItem: key => {
    const item = MMVVInstance.getString(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },
  setItem: async (key, value) => {
    MMVVInstance.set(key, JSON.stringify(value));
  },
  removeItem: async key => {
    MMVVInstance.remove(key);
  },
};
