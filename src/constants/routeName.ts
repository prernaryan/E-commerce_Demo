import Login from '../screens/auth/login';
import Gallery from '../screens/GalleryFeature/Gallery';
import ModalScreen from '../screens/GalleryFeature/ModalScreen';

export enum RouteName {
  LOGIN = 'login',
  GALLERY = 'gallery',
  MODAL_SCREEN = 'modalScreen',
}

export const SCREENS = {
  [RouteName.LOGIN]: Login,
  [RouteName.GALLERY]: Gallery,
  [RouteName.MODAL_SCREEN]: ModalScreen,
  //   [RouteName.HOME]: Home,
};
