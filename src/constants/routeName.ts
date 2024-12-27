import CreatePassword from '../screens/auth/createPassword';
import Login from '../screens/auth/login';
import SignUp from '../screens/auth/signup';
import LandingScreen from '../screens/landingScreen';

export enum RouteName {
  LOGIN = 'login',
  LANDING_SCREEN = 'landingScreen',
  SIGNUP = 'signup',
  CREATEPASSWORD = 'createPassword',
}

export const SCREENS = {
  [RouteName.LOGIN]: Login,
  [RouteName.LANDING_SCREEN]: LandingScreen,
  [RouteName.SIGNUP]: SignUp,
  [RouteName.CREATEPASSWORD]: CreatePassword,
  //   [RouteName.HOME]: Home,
};
