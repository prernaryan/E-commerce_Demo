// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Set item in AsyncStorage
// export const setItemStored = async (key, value) => {
//   try {
//     await AsyncStorage.setItem(key, JSON.stringify(value));
//   } catch (error) {
//     console.error(`Error setting item with key ${key}:`, error);
//   }
// };

// // Get item from AsyncStorage
// export const getStoredItem = async key => {
//   try {
//     const value = await AsyncStorage.getItem(key);
//     if (value !== null) {
//       return JSON.parse(value);
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.error(`Error getting item with key ${key}:`, error);
//     return null;
//   }
// };

// // Remove item from AsyncStorage
// export const removeStoredItem = async key => {
//   try {
//     await AsyncStorage.removeItem(key);
//   } catch (error) {
//     console.error(`Error removing item with key ${key}:`, error);
//   }
// };
// export const removeAllStoredData = async () => {
//   try {
//     const allKeys = await AsyncStorage.getAllKeys();
//     await AsyncStorage.multiRemove(allKeys);
//   } catch (error) {
//     console.error('Error removing all data from AsyncStorage:', error);
//   }
// };
