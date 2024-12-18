import {
  ParamListBase,
  Route,
  NavigationState,
  PartialRoute,
} from '@react-navigation/native';

export type RootStackParamList = {
  login: undefined;
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
