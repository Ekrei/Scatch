/**
 * @module WishlistSlice
 * @description Redux slice для управления списком желаемых товаров
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types/product';

/**
 * @interface WishlistState
 * @property {Product[]} items - Список товаров в избранном
 */
interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

/**
 * Slice для управления состоянием избранного
 * @example
 * ```ts
 * dispatch(addToWishlist(product));
 * dispatch(removeFromWishlist(productId));
 * ```
 */
export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    /**
     * Добавление товара в избранное
     * @param {WishlistState} state - Текущее состояние
     * @param {PayloadAction<Product>} action - Action с товаром
     */
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const exists = state.items.some(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    
    /**
     * Удаление товара из избранного
     * @param {WishlistState} state - Текущее состояние
     * @param {PayloadAction<string>} action - Action с ID товара
     */
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;