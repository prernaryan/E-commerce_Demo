import BottomTabNavigation from '../navigation/bottomTabNavigation';
import ConfirmPassword from '../screens/auth/confirmPassword';
import CreatePassword from '../screens/auth/createPassword';
import ForgotPassword from '../screens/auth/forgotPassword';
import Login from '../screens/auth/login';
import OtpScreen from '../screens/auth/otpScreen';
import SignUp from '../screens/auth/signup';
import CartScreen from '../screens/CartScreen';
import Category from '../screens/Category';
import Dashboard from '../screens/Dashboard';
import Favourite from '../screens/Favourite';
import LandingScreen from '../screens/landingScreen';
import LanguageSelect from '../screens/LanguageSelect';
import Profile from '../screens/Profile';

export enum RouteName {
  LOGIN = 'login',
  LANDING_SCREEN = 'landingScreen',
  SIGNUP = 'signup',
  CREATEPASSWORD = 'createPassword',
  FORGOTPASSWORD = 'forgotPassword',
  OTPSCREEN = 'otpScreen',
  CONFIRMPASSWORD = 'confirmPassword',
  DASHBOARD = 'dashboard',
  FAVOURITE = 'favourite',
  CART_SCREEN = 'cardScreen',
  PROFILE = 'profile',
  CATEGORY = 'category',
  BOTTOM_TAB_NAVIGATOR = 'bottomTabNavigation',
  LANGUAGE_SELECT = 'LanguageSelect',
}

export const SCREENS = {
  [RouteName.LOGIN]: Login,
  [RouteName.LANDING_SCREEN]: LandingScreen,
  [RouteName.SIGNUP]: SignUp,
  [RouteName.CREATEPASSWORD]: CreatePassword,
  [RouteName.FORGOTPASSWORD]: ForgotPassword,
  [RouteName.OTPSCREEN]: OtpScreen,
  [RouteName.CONFIRMPASSWORD]: ConfirmPassword,
  [RouteName.DASHBOARD]: Dashboard,
  [RouteName.FAVOURITE]: Favourite,
  [RouteName.CART_SCREEN]: CartScreen,
  [RouteName.PROFILE]: Profile,
  [RouteName.CATEGORY]: Category,
  [RouteName.BOTTOM_TAB_NAVIGATOR]: BottomTabNavigation,
  [RouteName.LANGUAGE_SELECT]: LanguageSelect,
  //   [RouteName.HOME]: Home,
};
