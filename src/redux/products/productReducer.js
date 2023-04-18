import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  page: 0,
  cartArr:[],
  cartCount:0
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    get_data(state, action) {
      state.data = action.payload.data;
      state.page = action.payload.page;
    },
    add_to_cart(state,action){
      state.cartCount = state.cartCount +1
    }
  },
});

export const fetchData = (page) => {
  return async (dispatch) => {
    const goFetch = async (page) => {

      const res = await fetch(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page="+page
      );
      if (!res.ok) {
        throw new Error("Not able to find Products");
      }
      const data = await res.json();

      return data;
    }

    try{
        const data = await goFetch(page);
        dispatch(productSlice.actions.get_data({data,page}));
    }catch(err){
        console.log(err);
    }

  };
};

export const productActions = productSlice.actions;
export default productSlice;
