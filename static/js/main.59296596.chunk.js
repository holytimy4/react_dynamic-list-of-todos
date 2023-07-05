(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(8),l=c(2),i=c(1),r=(c(13),c(14),c(15),c(6)),d=c.n(r),o=c(0),j=function(e){var t=e.todos,c=e.onTodoSelect,s=e.selectedTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t&&t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":e===s}),children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("td",{className:"is-vcentered",children:Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:"has-text-success",children:e.title})})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("td",{className:"is-vcentered"}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:"has-text-danger",children:e.title})})]}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:d()("far",{"fa-eye":e!==s,"fa-eye-slash":e===s})})})})})]})}))})]})},b=function(e){var t=e.filter,c=e.setSearchQuery,s=e.searchQuery,a=e.clearSearch;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",onChange:t,children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:a})})]})]})},h=(c(17),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()})).then((function(e){return e}))}var m=function(e){var t=e.todo,c=e.clear,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],r=a[1];return Object(i.useEffect)((function(){var e;(e=t.userId,u("/users/".concat(e))).then(r)}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),t?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c()}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",n?Object(o.jsx)("a",{href:"mailto:".concat(n.email),children:n.name}):Object(o.jsx)(h,{})]})]})]}):Object(o.jsx)(h,{})]})},O=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(null),r=Object(l.a)(a,2),d=r[0],O=r[1],x=Object(i.useState)(""),f=Object(l.a)(x,2),N=f[0],p=f[1],v=Object(i.useState)(""),y=Object(l.a)(v,2),g=y[0],k=y[1];Object(i.useEffect)((function(){u("/todos").then(s)}),[]);var S=Object(n.a)(c);if(N)switch(N){case"all":S=c;break;case"active":S=S.filter((function(e){return!1===e.completed}));break;case"completed":S=S.filter((function(e){return!0===e.completed}))}if(g){var w=g.toLowerCase();S=S.filter((function(e){return e.title.toLowerCase().includes(w)}))}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(b,{filter:function(e){p(e.target.value)},setSearchQuery:k,searchQuery:g,clearSearch:function(){k("")}})}),0!==S.length?Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{todos:S,onTodoSelect:function(e){O(e)},selectedTodo:d})}):Object(o.jsx)(h,{})]})})}),d&&Object(o.jsx)(m,{todo:d,clear:function(){O(null)}})]})};a.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.59296596.chunk.js.map