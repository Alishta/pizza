import{u as i,j as t,d as o,i as l,c as m,a as d}from"./index-Brk7N1Jh.js";const h="_cart__item_12yhp_1",u="_cart__heading_12yhp_16",p="_cart__counter_12yhp_23",x="_cart__button_12yhp_29",c={cart__item:h,cart__heading:u,cart__counter:p,cart__button:x},j=({item:e})=>{const{name:s,qty:r,id:a}=e,n=i();return t.jsxs("div",{className:c.cart__item,children:[t.jsx("h3",{className:c.cart__heading,children:s}),t.jsxs("div",{className:c.cart__counter,children:[t.jsx("button",{onClick:()=>n(o(a)),className:c.cart__button,children:"-"}),t.jsx("p",{children:r}),t.jsx("button",{onClick:()=>n(l(a)),className:c.cart__button,children:"+"})]}),t.jsx("button",{onClick:()=>n(m(a)),className:c.cart__button,children:"Delete"})]})},N="_cart_82857_1",b="_cart__heading_82857_9",g="_cart__totalitem_82857_14",y="_cart__totalprice_82857_18",C="_cart__items_82857_23",_={cart:N,cart__heading:b,cart__totalitem:g,cart__totalprice:y,cart__items:C},k=()=>{const{items:e,totalItems:s,totalPrice:r}=d(a=>a.pizza);return t.jsxs("div",{className:_.cart,children:[t.jsx("h1",{className:_.cart__heading,children:"Cart:"}),t.jsxs("h2",{className:_.cart__totalitem,children:["Total items: ",s]}),t.jsxs("h2",{className:_.cart__totalprice,children:["Total price: ",r,"$"]}),t.jsx("div",{className:_.cart__items,children:!!e.length&&e.map(a=>t.jsx(j,{item:a},a.id))})]})};export{k as default};