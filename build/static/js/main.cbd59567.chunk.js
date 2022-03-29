(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2QL4q",total:"Cart_total__3bxyy",actions:"Cart_actions__D1lEB","button--alt":"Cart_button--alt__Q3aVb",button:"Cart_button__1ft9Y"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__BPs2t",summary:"CartItem_summary__2CniD",price:"CartItem_price__uVCyM",amount:"CartItem_amount__30614",actions:"CartItem_actions__1B5Wo"}},,,,function(e,t,n){e.exports={meal:"MealsItem_meal__2Bp3k",description:"MealsItem_description__31l8s",price:"MealsItem_price__3r1zj"}},function(e,t,n){e.exports={button:"HeaderCartButton_button__2xWPm",icon:"HeaderCartButton_icon__1uMQS",badge:"HeaderCartButton_badge__3qS6G",bump:"HeaderCartButton_bump__2DFo4"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__isrjh",modal:"Modal_modal__3o7DF","slide-down":"Modal_slide-down__10g-E"}},,function(e,t,n){e.exports={header:"Header_header__FP6G5","main-image":"Header_main-image__3Up9c"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__9kUca"}},function(e,t,n){e.exports={card:"Card_card__6IUhl"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3-1BA","meals-appear":"AvailableMeals_meals-appear__32hF6"}},function(e,t,n){e.exports={form:"MealItemForm_form__3zUAX"}},function(e,t,n){e.exports={input:"Input_input__3zwO0"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n(15),l=n.n(o),m=n(0),d=function(){return Object(m.jsxs)("section",{className:l.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious food"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},u=n(16),j=n.n(u),b=function(e){return Object(m.jsx)("div",{className:j.a.card,children:e.children})},x=n(17),h=n.n(x),O=n(18),p=n.n(O),_=n(2),f=n(19),v=n.n(f),C=s.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:v.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(_.a)({ref:t},e.input))]})})),g=function(e){var t=Object(r.useRef)(),n=Object(r.useState)(!0),a=Object(i.a)(n,2),c=a[0],s=a[1];return Object(m.jsxs)("form",{className:p.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<1||c>5?s(!1):e.onAddToCart(c)},children:[Object(m.jsx)(C,{ref:t,label:"Amount",input:{id:"amount_".concat(e.meals.id),type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!c&&Object(m.jsx)("p",{children:" Please enter a valid amount"})]})},A=n(9),y=n.n(A),N=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),I=function(e){var t="$".concat(e.meals.price.toFixed(2)),n=Object(r.useContext)(N);return Object(m.jsxs)("li",{className:y.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.meals.name}),Object(m.jsx)("div",{className:y.a.description,children:e.meals.description}),Object(m.jsx)("div",{className:y.a.price,children:t})]}),Object(m.jsx)("div",{children:Object(m.jsx)(g,{meals:e.meals,onAddToCart:function(t){n.addItem({id:e.meals.id,name:e.meals.name,amount:t,price:e.meals.price}),console.log(t)}})})]})},M=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],H=function(){var e=M.map((function(e){return Object(m.jsx)(b,{children:Object(m.jsx)(I,{meals:e,id:e.id})})}));return Object(m.jsx)("section",{className:h.a.meals,children:Object(m.jsx)("ul",{children:e})})},w=function(){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsx)(d,{}),Object(m.jsx)(H,{})]})},B=n(13),k=n.n(B),F=n.p+"static/media/meals.2971f633.jpg",D=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},S=n(10),P=n.n(S),E=function(e){var t=Object(r.useContext)(N).items.reduce((function(e,t){return e+t.amount}),0);return Object(m.jsxs)("button",{className:P.a.button,onClick:function(){e.onPress()},children:[Object(m.jsx)("span",{className:P.a.icon,children:Object(m.jsx)(D,{})}),Object(m.jsx)("span",{children:" My Cart"}),Object(m.jsx)("span",{className:P.a.badge,children:t})]})},R=function(e){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsxs)("header",{className:k.a.header,children:[Object(m.jsx)("h1",{children:"React Meals"}),Object(m.jsx)(E,{onPress:function(){e.onShow()}})]}),Object(m.jsx)("div",{className:k.a["main-image"],children:Object(m.jsx)("img",{src:F,alt:"a table full of delicious food"})})]})},z=n(11),V=n.n(z),U=function(e){return Object(m.jsx)("div",{className:V.a.backdrop,onClick:e.onClose})},q=function(e){return Object(m.jsx)("div",{className:V.a.modal,children:Object(m.jsx)("div",{className:V.a.content,children:e.children})})},G=document.getElementById("overlay"),Q=function(e){return Object(m.jsxs)(s.a.Fragment,{children:[c.a.createPortal(Object(m.jsx)(U,{onClose:e.onHide}),G),c.a.createPortal(Object(m.jsx)(q,{children:e.children}),G)]})},T=n(4),$=n.n(T),J=n(5),W=n.n(J),L=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:W.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:W.a.summary,children:[Object(m.jsx)("span",{className:W.a.price,children:t}),Object(m.jsxs)("span",{className:W.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:W.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},X=function(e){var t=Object(r.useContext)(N),n=function(e){t.addItem(e)},a=function(e){t.removeItem(e)},c=Object(m.jsx)("ul",{className:$.a["cart-item"],children:t.items.map((function(e){return Object(m.jsx)(L,{id:e.id,name:e.name,amount:e.amount,price:e.price,onAdd:n.bind(null,e),onRemove:a.bind(null,e.id)})}))}),i="$".concat(t.totalAmount.toFixed(2)),s=t.items.length>0;return Object(m.jsxs)(Q,{onHide:e.onHide,children:[c,Object(m.jsxs)("div",{className:$.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:i})]}),Object(m.jsxs)("div",{className:$.a.actions,children:[Object(m.jsxs)("button",{className:$.a["button--alt"],onClick:function(){e.onHide()},children:[" ","close"]}),s&&Object(m.jsx)("button",{className:$.a.button,onClick:function(){alert("ordered")},children:"order"})]})]})},Y=n(14),K={items:[],totalAmount:0},Z=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(_.a)(Object(_.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(Y.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price,d=Object(_.a)(Object(_.a)({},l),{},{amount:l.amount-1});return 1===l.amount?s=e.items.filter((function(e){return e.id!==t.id})):(s=Object(Y.a)(e.items))[o]=d,{items:s,totalAmount:m}}return K},ee=function(e){var t=Object(r.useReducer)(Z,K),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){console.log(e),c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(m.jsx)(N.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(ee,{children:[n&&Object(m.jsx)(X,{onHide:function(){a(!1)}}),Object(m.jsx)(R,{onShow:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(w,{})})]})};c.a.render(Object(m.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.cbd59567.chunk.js.map