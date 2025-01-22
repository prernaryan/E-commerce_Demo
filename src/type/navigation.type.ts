import {
  ParamListBase,
  Route,
  NavigationState,
  PartialRoute,
} from '@react-navigation/native';

export type RootStackParamList = {
  login: undefined;
  onboarding: undefined;
  landingScreen: undefined;
  signup: undefined;
  createPassword: undefined;
  forgotPassword: undefined;
  otpScreen: undefined;
  confirmPassword: undefined;
  dashboard: undefined;
  favourite: undefined;
  cardScreen: undefined;
  profile: undefined;
  languageSelect: undefined;
};

export type MainNavigationType = {
  initialRouteName: keyof RootStackParamList | undefined;
};

export type PartialState<State extends NavigationState> = Partial<
  Omit<State, 'stale' | 'routes'>
> &
  Readonly<{
    stale?: true;
    routes: PartialRoute<Route<State['routeNames'][number]>>[];
  }>;

export type NavigationRoute<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> = Route<Extract<RouteName, string>, ParamList[RouteName]> & {
  state?: NavigationState | PartialState<NavigationState>;
};
