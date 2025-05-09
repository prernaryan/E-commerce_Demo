import Login from '../screens/auth/login';
import NotesList from '../screens/Notes/NotesList';
import AddToCart from '../screens/Shopping/AddToCart';
import AllProducts from '../screens/Shopping/AllProducts';
import DetailProduct from '../screens/Shopping/DetailProduct';
import ProductList from '../screens/Shopping/ProductList';

export enum RouteName {
  LOGIN = 'login',
  NOTES_LIST = 'notesList',
  ADD_PRODUCT = 'addProduct',
  PRODUCT_LIST = 'productList',
  ALL_PRODUCTS = 'allProducts',
  ADD_TO_CART = 'addToCart',
  DETAIL_PRODUCT = 'detailProduct',
}

export const SCREENS = {
  [RouteName.LOGIN]: Login,
  [RouteName.NOTES_LIST]: NotesList,
  [RouteName.PRODUCT_LIST]: ProductList,
  [RouteName.ADD_TO_CART]: AddToCart,
  [RouteName.DETAIL_PRODUCT]: DetailProduct,
  [RouteName.ALL_PRODUCTS]: AllProducts,
  //   [RouteName.HOME]: Home,
};
