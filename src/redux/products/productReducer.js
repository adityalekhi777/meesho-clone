import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../firebaseConfig';
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

const initialState = {
  data: null,
  page: 0,
  items: [],
  totalQuantity: 0,
  cartTotal:0
};

const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    get_data(state, action) {
      state.data = action.payload.data;
      state.page = action.payload.page;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.cartTotal += Number(newItem.price)
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.cartTotal -= Number(existingItem.price);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const fetchData = (page) => {
  return async (dispatch) => {
    const colRef = collection(db, 'products');
    const data = [];
    const querySnapshot = await getDocs(colRef);
    querySnapshot.forEach((doc) => {
      data.push({ uui: doc.id, ...doc.data() });
    });

    dispatch(productSlice.actions.get_data({ data, page: 1 }));
  };
};

export const fetchKeyWordData = (keyword) => {
  return async (dispatch) => {
    const colRef = collection(db, 'products');
    const q = query(colRef, where('title', '==', keyword));
    const data = [];
    onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), uui: doc.id });
      });
      dispatch(productSlice.actions.get_data({ data, page: 1 }));
    });
  };
};

export const productActions = productSlice.actions;
export default productSlice;
