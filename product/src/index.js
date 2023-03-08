
import ReactDOM from "react-dom"
import React from "react"
import App from "./App"
import store from "../redux/store"
import { Provider } from 'react-redux'
import { addItem } from "../redux/cart"

export const mount=(el,{onItemDeleted})=>{
   const addHandler=(item)=>store.dispatch(addItem(item))
   const component = <Provider store={store}><App onItemDeleted={onItemDeleted}/></Provider>
   ReactDOM.render(component,el)

   return {addHandler}

}