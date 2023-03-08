import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, changeNumber, cartItemSelector, totalItemsSelector } from "../../redux/cart";
import Counter from "./Counter";

const Cart = ({onItemDeleted}) => {
  const counts = useSelector(cartItemSelector);
  const dispatch = useDispatch()

  const totalItems = useSelector(totalItemsSelector)
  const handleCountChange = (item, count) => {
    dispatch(changeNumber({id:item.id, number:count}))
  };

  const handleAdd = () => {
    dispatch(addItem())
  };

  const handleDelete = (item) => {
    dispatch(deleteItem(item))
    onItemDeleted(item)
  };
  return (
    <>
      {counts.map((item) => (
        <div key={item.id}>
          <Counter
            count={item.count}
            onCountChange={handleCountChange.bind(this, item)}
          />
          <span style={{ marginLeft: "15px" }}>
            <button
              style={{ backgroundColor: "green", color: "#fff" }}
              onClick={handleAdd}
            >
              Add
            </button>
            <button
              style={{
                backgroundColor: "red",
                color: "#fff",
                marginLeft: "5px",
              }}
              onClick={handleDelete.bind(this, item)}
            >
              Delete
            </button>
          </span>
        </div>
      ))}
      <div style={{ marginTop: "20px" }}>Total Items: {totalItems}</div>
    </>
  );
};

export default Cart;
