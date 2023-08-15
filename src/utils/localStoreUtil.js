import AsyncStorage from '@react-native-async-storage/async-storage';

const localStoreUtil = {
  storeData: async (key, data) => {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  },
  getData: async key => {
    const item = await AsyncStorage.getItem(key);
    if (!item || item === undefined) return;

    return JSON.parse(item);
  },

  removeData: async key => {
    await AsyncStorage.removeItem(key);
    return true;
  },
  removeAll: async () => {
    await AsyncStorage.clear();
    return true;
  },
};

export const setToken = token => localStoreUtil.storeData('token', token);
export const getToken = () => localStoreUtil.getData('token');
export const saveUser = user => localStoreUtil.storeData('user', user);
export const getUser = () => localStoreUtil.storeData('user');

export default localStoreUtil;
