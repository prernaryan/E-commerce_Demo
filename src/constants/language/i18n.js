// import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import fr from './fr.json';
import hi from './hi.json';
import ge from './ge.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const resources = {
  en: en,
  fr: fr,
  hi: hi,
  ge: ge,
};

const initializeI18n = async () => {
  try {
    // Retrieve the stored language from AsyncStorage
    const storedLanguage = await AsyncStorage.getItem('selectedLanguage');
    const defaultLanguage = storedLanguage || 'en'; // Fallback to 'en' if no language is stored

    await i18n.use(initReactI18next).init({
      compatibilityJSON: 'v3',
      resources,
      lng: defaultLanguage, // Set the retrieved language
      fallbackLng: 'en', // Fallback language in case of errors
      interpolation: {
        escapeValue: false, // React already escapes text, no need to double escape
      },
    });
  } catch (error) {
    console.error('Error initializing i18next:', error);
  }
};

initializeI18n();

export default i18n;
