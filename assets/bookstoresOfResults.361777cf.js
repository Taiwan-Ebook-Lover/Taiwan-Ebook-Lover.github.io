var p=Object.defineProperty,b=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var c=(e,o,r)=>o in e?p(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,a=(e,o)=>{for(var r in o||(o={}))B.call(o,r)&&c(e,r,o[r]);if(i)for(var r of i(o))_.call(o,r)&&c(e,r,o[r]);return e},u=(e,o)=>b(e,R(o));import{s as O,O as k}from"./index.27113e99.js";import{C as y,D as x,E as C}from"./vendor.fbb11802.js";const d=y({key:"searchResults",default:[]}),f=e=>e.books.map(o=>u(a({},o),{bookstoreId:e.bookstore.id,bookstoreName:e.bookstore.displayName})),l=(e,o)=>o===k.PRICE_ASC?e.sort((r,s)=>r.price-s.price):o===k.PRICE_DESC?e.sort((r,s)=>s.price-r.price):e,g=x({key:"BooksOfBookstore",get:e=>({get:o})=>{const r=o(d),s=o(O);if(!r||!e)return[];if(e==="all")return l(r.reduce((t,m)=>t.concat(f(m)),[]),s);const n=r.find(t=>t.bookstore.id===e);return n?l(f(n),s):[]}}),h=C({key:"BookstoresOfResults",get:({get:e})=>e(d).map(o=>o.bookstore)});export{g as a,h as b,d as s};