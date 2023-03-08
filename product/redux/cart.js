import { createSelector, createSlice } from "@reduxjs/toolkit";
import * as uuid from "uuid";

const slice = createSlice({
  name: "counter",
  initialState: {
    items: [{ count: 0, id: uuid.v4() }],
  },
  reducers: {
    addItem: (state, { payload = 0 }) => {
      state.items.push({ count: payload, id: uuid.v4() });
    },
    deleteItem: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
    },
    changeNumber: (state, { payload: { id, number } }) => {
      const index = state.items.findIndex((item) => item.id === id);
      state.items[index].count += number;
    },
  },
});

export const { addItem, deleteItem, changeNumber } = slice.actions;
const selectCurrent = (state) => state.cart;

export const cartItemSelector = createSelector(
  selectCurrent,
  (cart) => cart.items
);

export const totalItemsSelector = createSelector(selectCurrent, cart=>cart.items.reduce((acc,cur)=>acc+cur.count,0))
export default slice.reducer;
