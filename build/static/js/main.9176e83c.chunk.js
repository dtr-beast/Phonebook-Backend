(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(15),o=t.n(a),u=(t(20),t(6)),i=t(3),s=t(0);var l=function(e){var n=e.value,t=e.onChange;return Object(s.jsxs)("p",{children:["Filter Shown with ",Object(s.jsx)("input",{type:"text",value:n,onChange:t})]})};var j=function(e){var n=e.onSubmit,t=e.onNameChange,c=e.nameValue,r=e.onNumberChange,a=e.numValue;return Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:["Name: ",Object(s.jsx)("input",{onChange:t,value:c})]}),Object(s.jsxs)("div",{children:["Number: ",Object(s.jsx)("input",{onChange:r,value:a})]})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"Add"})})]})};var b=function(e){var n=e.name,t=e.number,c=e.onDelete;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("p",{children:[n,": ",t," ",Object(s.jsx)("button",{onClick:c,children:"Delete"})]})})};var d=function(e){var n=e.persons,t=e.onClick;return Object(s.jsx)(s.Fragment,{children:n.map((function(e){return Object(s.jsx)(b,{name:e.name,number:e.number,onDelete:function(){t(e.id,e.name,e.number)}},e.id)}))})},h=t(4),f=t.n(h),m="/api/persons";var O={getAll:function(){return f.a.get("".concat(m)).then((function(e){return e.data}))},createPerson:function(e){return f.a.post(m,e).then((function(e){return e.data}))},deletePerson:function(e){return f.a.delete("".concat(m,"/").concat(e))},updatePerson:function(e){return f.a.put("".concat(m,"/").concat(e.id),e).then((function(e){return e.data}))}};var v=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1];Object(c.useEffect)((function(){O.getAll().then((function(e){r(e),h(e)}))}),[]);var a=Object(c.useState)(t),o=Object(i.a)(a,2),b=o[0],h=o[1],f=Object(c.useState)(""),m=Object(i.a)(f,2),v=m[0],p=m[1],x=Object(c.useState)(""),g=Object(i.a)(x,2),C=g[0],w=g[1],S=Object(c.useState)(""),k=Object(i.a)(S,2),N=k[0],P=k[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(l,{value:N,onChange:function(e){var n=e.target.value.toLowerCase();P(n),h((function(){return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}))}}),Object(s.jsx)("h2",{children:"Add New "}),Object(s.jsx)(j,{onSubmit:function(e){e.preventDefault();var n={name:v,number:C},c=t.find((function(e){return e.name===n.name}));c?window.confirm("".concat(v," is already added to phonebook, replace the old number with new one?"))?O.updatePerson(Object(u.a)(Object(u.a)({},n),{},{id:c.id})).then((function(e){console.log(e);var n=t.filter((function(e){return e.id!==c.id}));n.push(e),r(n),h(n),alert("Phonebook entry: ".concat(v," Successfully Updated!"))})):alert("Request Cancelled!"):O.createPerson(n).then((function(e){var n=t.concat(e);r(n),h(n)})),p(""),w("")},onNameChange:function(e){p(e.target.value)},nameValue:v,onNumberChange:function(e){w(e.target.value)},numValue:C}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(d,{persons:b,onClick:function(e,n,c){window.confirm("Delete ".concat(n," (").concat(c,")?")).valueOf()?O.deletePerson(e).then((function(n){if(console.log(n.statusText),204===n.status){var c=t.filter((function(n){return n.id!==e}));console.log(c),r(c),h(c)}})):alert("Delete Request Cancelled")}})]})};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9176e83c.chunk.js.map