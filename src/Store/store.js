
import { createStore } from "redux";

import { createSlice, configureStore } from "@reduxjs/toolkit";



const initialValues = {
  show: false,
  showModal: false,
  data: [],
  DATAMY: [],
  onCart: [],
  totalQuantity: 0,
  totalAmount: 0,
  currentAmt: 0,
  ItemDetail: [],
  page: 0
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialValues,
  reducers: {
    setDATA(state, action){
      state.DATAMY = action.payload
    },
    onLoadDATA(state){
state.data = state.DATAMY
    },
    
    showSideBar(state) {
      state.show = true;
    },
    hidSideBar(state) {
      state.show = false;
    },
    showModal(state) {
      state.showModal = true;
    },
    hideModal(state) {
      state.showModal = false;
    },
    handleFilter(state, action) {
      if (action.payload === "All") {
        state.data = state.DATAMY;
      } else {
        state.data = state.DATAMY.filter((item) => item.category === action.payload);
      }
    },
    handlePriceFilter(state, action) {
      state.data = state.DATAMY.filter((item) => item.price < action.payload);
    },
    handleSearchFilter(state, action) {
      state.data = state.DATAMY.filter((item) =>
        item.name.includes(action.payload.toLowerCase())
        );
        state.page = 0
    },

    handleCartAdd(state, action) {
      //get new item
      const newItem = action.payload;
      //check if item is already there
      const existingItem = state.onCart.find((item) => item.id === newItem.id);

      // if true increase total quantity

      state.totalQuantity++;

      if (!existingItem) {
        state.onCart.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: Number(newItem.price),
          name: newItem.name,
        });

        state.totalAmount = state.totalAmount + Number(newItem.price);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.totalPrice + Number(newItem.price);
        state.totalAmount = state.totalAmount + Number(existingItem.price);
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.onCart.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.onCart = state.onCart.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }
      state.totalAmount = state.totalAmount - Number(existingItem.price);
    },

    handleItemChange(state, action) {
      const id = action.payload.id;
      const amt = action.payload.amount;
      state.currentAmt = amt;

      console.log(id, amt);

      const existingItem = state.onCart.find((item) => item.id === id);

      existingItem.totalPrice = existingItem.price * Number(amt);

      existingItem.quantity = Number(amt);
      let itemsTotal = state.onCart.map((item) => Number(item.totalPrice));

      itemsTotal = itemsTotal.reduce((acc, curr) => {
        return acc + curr;
      }, 0);

      state.totalAmount = itemsTotal;

      let itemsTotalQuantity = state.onCart.map((item) =>
        Number(item.quantity)
      );

      itemsTotalQuantity = itemsTotalQuantity.reduce((acc, curr) => {
        return acc + curr;
      }, 0);

      state.totalQuantity = itemsTotalQuantity;
    },
    handleDetailPage(state, action){
      state.ItemDetail = state.DATAMY.find(item=> item.id === action.payload) 
    },
    handlePageByNumber(state,action){
      state.page = action.payload
    },
    handlePageByNext(state,action){
      state.page = state.page + 1
    },
    handlePageByPrevious(state,action){
      state.page = state.page - 1
    },
    handleSentOrder(state){
state.onCart = []
state.totalAmount = 0
state.totalQuantity = 0
    }
  },
});

const store = configureStore({
  reducer: {
    bar: sidebarSlice.reducer,
  },
});

export const sideBarActions = sidebarSlice.actions;
export default store;
