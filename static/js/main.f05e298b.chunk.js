(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],{39:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n(6),a=n.n(s),o=n(5),i=n(3),l=n(21),u=(n(39),n(22)),d=n(23),j=n(27),p=n(26),h=function(e){var t,n=Object(i.c)((function(e){return e.selectedEmployees}));return t=e.employees?e.employees.map((function(t){return Object(c.jsxs)("div",{children:[t.lastName," ",t.firstName," ",Object(c.jsx)("input",{type:"checkbox",onChange:e.toggleChange,checked:n.includes(t.id),id:t.id})]},t.id)})):"-----",Object(c.jsxs)("div",{className:"Letter",children:[Object(c.jsx)("h2",{children:e.letter}),t]})},b=n(11),m=n.n(b),O=n(24),f=n(25),y=n.n(f),v=function(){try{var e=localStorage.getItem("selectedEmployees");return null===e?[]:JSON.parse(e)}catch(t){return void console.error(t)}},E=function(e){try{var t=JSON.stringify(e);localStorage.setItem("selectedEmployees",t)}catch(n){console.error(n)}},x="SELECT_EMPLOYEE",g="UNSELECT_EMPLOYEE",N="GET_EMPLOYEES",S=function(e){return{type:N,employees:e}};var _=function(){var e=Object(i.c)((function(e){return e.alphabet})),t=Object(i.c)((function(e){return e.employeesFetched})),n=Object(i.b)();function s(e){e.target.checked?n(function(e){var t,n=v();return n.includes(e)?t=n:(t=n.concat(e),E(t)),{type:x,updatedEmployees:t}}(e.target.id)):n(function(e){var t,n=v();if(n.includes(e)){var c=n.indexOf(e);n.splice(c,1),E(t=n)}else t=n;return{type:g,updatedEmployees:t}}(e.target.id))}if(Object(r.useEffect)((function(){n(function(){var e=Object(O.a)(m.a.mark((function e(t){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users");case 3:n=e.sent,c=n.data.sort((function(e,t){return e.lastName<t.lastName?-1:1})),t(S(c)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[n]),!t)return Object(c.jsx)("div",{});var a=[];if(t){var o=t.reduce((function(e,t){var n=t.lastName[0];return e[n]||(e[n]=[]),e[n].push(t),e}),{});a=e.map((function(e){return Object(c.jsx)(h,{letter:e,toggleChange:s,employees:o[e]?o[e]:null},e)}))}return Object(c.jsxs)("div",{className:"employees-list",children:[Object(c.jsx)("h2",{children:"Employees "}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"Letters",children:a})]})},k=n(4),L=function(){var e=Object(i.c)((function(e){return e.months})),t=Object(i.c)((function(e){return e.selectedEmployees})),n=Object(i.c)((function(e){return e.employeesFetched})),r=[];if(t.length&&n.length){var s=n.filter((function(e){return t.includes(e.id)})).map((function(t){var n=new Date(t.dob),c=n.getDate()+" "+e[n.getMonth()]+", "+n.getFullYear();return Object(k.a)(Object(k.a)({},t),{},{month:n.getMonth(),birthday:c})})).sort((function(e,t){return e.dob<t.dob?-1:1})).reduce((function(e,t){var n=t.month;return e[n]||(e[n]=[]),e[n].push(t),e}),{});r=e.map((function(t,n){return s[n]?Object(c.jsxs)("div",{className:"month",children:[Object(c.jsx)("h3",{children:e[n]}),Object(c.jsx)("ul",{children:s[n].map((function(e){return Object(c.jsxs)("li",{children:[e.lastName," ",e.firstName," - ",e.birthday," ","year"]},e.id)}))})]},t):null}))}return Object(c.jsxs)("div",{className:"employees-birthdays",children:[Object(c.jsx)("h2",{children:"Employees birthday "}),Object(c.jsx)("hr",{}),r.length?Object(c.jsx)("div",{className:"months",children:r}):Object(c.jsx)("p",{children:"No selected employees"})]})},M=(n(58),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(_,{}),Object(c.jsx)(L,{})]})}}]),n}(r.Component)),w=function(e,t){switch(t.type){case x:case g:return Object(k.a)(Object(k.a)({},e),{},{selectedEmployees:t.updatedEmployees});case N:return Object(k.a)(Object(k.a)({},e),{},{employeesFetched:t.employees});default:return e}},C={alphabet:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],selectedEmployees:v(),employeesFetched:[]},J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,F=Object(o.d)(w,C,J(Object(o.a)(l.a)));a.a.render(Object(c.jsx)(i.a,{store:F,children:Object(c.jsx)(M,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.f05e298b.chunk.js.map