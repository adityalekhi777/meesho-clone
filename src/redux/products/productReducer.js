import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    get_data(state, action) {
      state.data = action.payload;
    },
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
        dispatch(productSlice.actions.get_data(data));
    }catch(err){
        console.log(err);
    }

  };
};

export const productActions = productSlice.actions;
export default productSlice;
