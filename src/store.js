/**
 * Redux store: holds client-side state for cart (items, totals) and user (auth, theme).
 * Used by React Router loaders/actions and by components via useSelector/useDispatch.
 */
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './features/cart/cartSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
