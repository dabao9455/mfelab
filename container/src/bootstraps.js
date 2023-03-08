import {mount} from "product/productIndex"

const {addHandler} =  mount(document.querySelector("#root"),{onItemDeleted:console.log})

document.querySelector("#btnAdd").addEventListener("click",()=>addHandler())