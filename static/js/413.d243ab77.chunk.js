"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[413],{319:function(n,e,t){t.d(e,{Z:function(){return d}});var r,a,o=t(689),i=t(168),u=t(444),l=t(87),c=(0,u.ZP)(l.OL)(r||(r=(0,i.Z)(["\n    text-decoration: none;\n    color: black;\n    &:hover, &:focus {\n        color: red;\n    }\n"]))),s=t(184),f=function(n){var e=n.filmInf,t=n.state;return(0,s.jsx)("li",{children:(0,s.jsx)(c,{to:"/movies/".concat(e.id),end:!0,state:t,children:"".concat(void 0!==e.title?e.title:e.name)})})},p=u.ZP.ul(a||(a=(0,i.Z)(["\n    list-style: disc;\n    margin-left: 20px;\n    margin-top: 20px;\n    padding: 0px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n"]))),d=function(n){var e=n.arrayFilms,t=(0,o.TH)();return(0,s.jsx)(p,{children:0!==e.length&&e.map((function(n){return(0,s.jsx)(f,{filmInf:n,state:{from:t}},n.id)}))})}},413:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,o,i=t(433),u=t(861),l=t(439),c=t(757),s=t.n(c),f=t(597),p=t(319),d=t(791),x=t(168),m=t(444),h=m.ZP.form(r||(r=(0,x.Z)(["\n    display:flex;\n    align-items: center;\n    margin-top: 40px;\n"]))),b=m.ZP.input(a||(a=(0,x.Z)(["\n    padding: 8px;\n    font-size: 16px;\n    border-radius:0px;\n    border: 2px solid #ababab;\n    &:hover, &:focus {\n        border-color: #a6cdff;\n    }\n"]))),v=m.ZP.button(o||(o=(0,x.Z)(["\n    padding: 8px 10px;\n    font-size: 16px;\n    background-color:transparent;\n    cursor: pointer;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    border: none;\n    background-color: #ababab;\n    &:hover, &:focus {\n        background-color: #a6cdff;\n    }\n"]))),g=t(184),Z=function(n){var e=n.valueParams,t=n.onSubmit,r=(0,d.useState)(e),a=(0,l.Z)(r,2),o=a[0],i=a[1],u=function(n){n.preventDefault(),0!==o.length&&(t(o.toLowerCase()),i(""))};return(0,g.jsxs)(h,{onSubmit:function(n){u(n)},children:[(0,g.jsx)(b,{type:"text",value:o,placeholder:"Write title of film",onChange:function(n){return function(n){" "!==n.target.value&&i(n.target.value)}(n)}}),(0,g.jsx)(v,{type:"submit",onClick:function(n){},children:"Search"})]})},y=t(87),k=function(){var n,e=(0,y.lr)(),t=(0,l.Z)(e,2),r=t[0],a=t[1],o=(0,d.useState)([]),c=(0,l.Z)(o,2),x=c[0],m=c[1],h=(0,d.useState)(!1),b=(0,l.Z)(h,2),v=b[0],k=b[1],j=(0,d.useState)(null),S=(0,l.Z)(j,2)[1],w=null!==(n=r.get("query"))&&void 0!==n?n:"";return(0,d.useEffect)((function(){var n=new AbortController;function e(){return(e=(0,u.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),S(null),e.next=5,(0,f.NH)(w,n);case 5:t=e.sent,m((0,i.Z)(t.results)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),S(e.t0);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){return n.abort()}}),[w]),(0,g.jsxs)("main",{children:[v&&(0,g.jsx)("p",{children:"Loading..."}),!v&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Z,{valueParams:w,onSubmit:function(n){a(""!==n?{query:n}:{})}}),(0,g.jsx)(p.Z,{arrayFilms:x})]}),0===x.length&&0!==w.length&&(0,g.jsxs)("p",{children:["Sorry, we couldn't find films with title: ",w,", try another one"]})]})}}}]);
//# sourceMappingURL=413.d243ab77.chunk.js.map