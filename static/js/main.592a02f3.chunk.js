(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports={navigation:"Header_navigation__37SIu",navlink:"Header_navlink__1XN7H",active:"Header_active__RYuQN"}},,,function(e,a,t){e.exports={error:"Greeting_error__1mGMD",cntr:"Greeting_cntr__1hADC",inp:"Greeting_inp__3rf85",btn:"Greeting_btn__1Bvyg",nmb:"Greeting_nmb__1BUzp"}},,,function(e,a,t){e.exports={editableSpan:"hw6_editableSpan__W9XST",button:"hw6_button__CgMDl"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1R94w",errorInput:"SuperInputText_errorInput__2w1Tv",error:"SuperInputText_error__2kmnC"}},,function(e,a,t){e.exports={message:"Message_message__3PdPM",bg:"Message_bg__1_CoA",avatar:"Message_avatar__1rhm7"}},function(e,a,t){e.exports={default:"SuperButton_default__1_q0x",red:"SuperButton_red__3KgKx"}},,,,function(e,a,t){e.exports={blue:"HW4_blue__3KLz5",column:"HW4_column__1Cpm3",testSpanError:"HW4_testSpanError__3lTeD"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2jzwn",spanClassName:"SuperCheckbox_spanClassName__2ZJsc"}},,,,function(e,a,t){e.exports={App:"App_App__2aHIn"}},,,function(e,a,t){e.exports=t(41)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t.n(l),o=(t(35),t(27)),u=t.n(o),i=t(9),s=t(8),m=t.n(s);var E=function(){return r.a.createElement("div",{className:m.a.navigation},r.a.createElement("div",{className:m.a.navlink},r.a.createElement(i.b,{to:"/pre-junior",activeClassName:m.a.active}," ","pre-junior")),r.a.createElement("div",{className:m.a.navlink},r.a.createElement(i.b,{to:"/junior",activeClassName:m.a.active}," ","junior")),r.a.createElement("div",{className:m.a.navlink},r.a.createElement(i.b,{to:"/junior-plus",activeClassName:m.a.active},"junior plus")))},p=t(1);var d=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},v=t(3),h=t(4),f=function(e){e.options,e.onChange,e.onChangeOption;var a=Object(h.a)(e,["options","onChange","onChangeOption"]),t=[];return r.a.createElement("select",Object.assign({onChange:function(e){}},a),t)},b=function(e){e.type,e.name;var a=e.options,t=(e.value,e.onChange,e.onChangeOption,Object(h.a)(e,["type","name","options","value","onChange","onChangeOption"]),a?a.map((function(e,a){})):[]);return r.a.createElement(r.a.Fragment,null,t)},g=["x","y","z"];var _=function(){var e=Object(n.useState)(g[1]),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(f,{options:g,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(b,{name:"radio",options:g,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))};function C(){return r.a.createElement("div",null,r.a.createElement(_,null))}function k(){return r.a.createElement("div",null,r.a.createElement("div",null,"Hello, keep going to space"))}var N=t(17),j=t.n(N);var O=function(e){return r.a.createElement("div",{className:j.a.bg},r.a.createElement("div",null,r.a.createElement("img",{className:j.a.avatar,src:e.avatar,alt:"img"})),r.a.createElement("div",{className:j.a.message},r.a.createElement("h1",null," ",e.name," "),r.a.createElement("p",null," ",e.message),r.a.createElement("span",null," ",e.time)))},x="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",S="Nikita Skachkov",w="Hello, my friend",y="22:00";var T=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(O,{avatar:x,name:S,message:w,time:y}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var A=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var I=function(e){var a=e.data.map((function(a){return r.a.createElement(A,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{style:{marginLeft:"20px"}},a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},F=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var H=function(){var e=Object(n.useState)(F),a=Object(v.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(v.a)(c,2),u=o[0],i=o[1],s=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(I,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},B=t(29),P=t(43),D=t(11),M=t.n(D),W=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers;M.a.error;return r.a.createElement("div",{className:M.a.cntr},r.a.createElement("input",{value:a,onChange:t,className:M.a.inp}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n,className:M.a.btn},"ADD"),r.a.createElement("span",{className:M.a.nmb},c))},G=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(v.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(null),s=Object(v.a)(i,2),m=s[0],E=s[1],p=a.length;return r.a.createElement(W,{name:o,setNameCallback:function(e){u(e.currentTarget.value),E(null)},addUser:function(){var e=o.trim();e?(t(e),alert("Hello ".concat(o," !"))):alert("Title is requared"),u("")},error:m,totalUsers:p})};var U=function(){var e=Object(n.useState)([]),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(G,{users:t,addUserCallback:function(e){var a={_id:Object(P.a)(),name:e};l([].concat(Object(B.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},J=t(15),K=t.n(J),z=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(h.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(K.a.error," ").concat(u||""),m="".concat(K.a.input," ").concat(c?K.a.errorInput:K.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},X=t(22),q=t.n(X),L=t(18),R=t.n(L),Y=function(e){var a=e.red,t=e.className,n=Object(h.a)(e,["red","className"]),l="".concat(R.a.button," ").concat(a?R.a.red:R.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},Z=t(23),Q=t.n(Z),$=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(h.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(Q.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:Q.a.spanClassName},l))};var V=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(v.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:q.a.column},r.a.createElement(z,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(z,{className:q.a.blue}),r.a.createElement(Y,null,"default"),r.a.createElement(Y,{red:!0,onClick:o},"delete "),r.a.createElement(Y,{disabled:!0},"disabled"),r.a.createElement($,{checked:s,onChangeChecked:m},"some text "),r.a.createElement($,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null))},ee=t(14),ae=t.n(ee),te=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(h.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(v.a)(o,2),i=u[0],s=u[1],m=l||{},E=m.children,p=m.onDoubleClick,d=(m.className,Object(h.a)(m,["children","onDoubleClick","className"]));return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(z,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),a&&a(e)},onEnter:function(){s(!1),t&&t()}},c)):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),p&&p(e)},className:ae.a.editableSpan},d),r.a.createElement("svg",{width:"30",height:"30"},r.a.createElement("circle",{cx:"15",cy:"17",r:"3",stroke:"black","stroke-width":"1"})),E||c.value)))};function ne(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function re(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}ne("test",{x:"A",y:1});re("test",{x:"",y:0});var le=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(te,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(Y,{onClick:function(){ne("editable-span-value",t)},className:ae.a.button},"save"),r.a.createElement(Y,{onClick:function(){l(re("editable-span-value",""))},className:ae.a.button},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ce=function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(H,null),r.a.createElement(U,null),r.a.createElement(V,null),r.a.createElement(le,null))},oe="/pre-junior",ue="/junior",ie="/junior-plus";var se=function(){return r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,render:function(){return r.a.createElement(p.a,{to:oe})}}),r.a.createElement(p.b,{path:oe,render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(p.b,{path:ue,render:function(){return r.a.createElement(C,null)}}),r.a.createElement(p.b,{path:ie,render:function(){return r.a.createElement(k,null)}}),r.a.createElement(p.b,{render:function(){return r.a.createElement(d,null)}})))};var me=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(E,null),r.a.createElement(se,null)))};var Ee=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.592a02f3.chunk.js.map