(this["webpackJsonpFirst-Vk-App"]=this["webpackJsonpFirst-Vk-App"]||[]).push([[0],{125:function(e,t,c){},126:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(18),i=c.n(s),r=c(16),a=c.n(r),o=c(28),d=c(20),j=c(24),l=c.n(j),b=c(9),h=(c(123),c(5)),p=function(e){var t=e.id,c=e.go,n=e.fetchedUser;return Object(h.jsxs)(b.i,{id:t,children:[Object(h.jsx)(b.j,{children:"Example"}),n&&Object(h.jsx)(b.g,{header:Object(h.jsx)(b.h,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(h.jsx)(b.e,{before:n.photo_200?Object(h.jsx)(b.c,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:"",children:"".concat(n.first_name," ").concat(n.last_name)})}),Object(h.jsx)(b.g,{header:Object(h.jsx)(b.h,{mode:"secondary",children:"Navigation Example"}),children:Object(h.jsx)(b.f,{children:Object(h.jsx)(b.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:"Show me the Persik, please"})})})]})},u=c.p+"static/media/persik.ae9f0072.png",O=(c(125),function(e){return Object(h.jsxs)(b.i,{id:e.id,children:[Object(h.jsx)(b.j,{left:Object(h.jsx)(b.k,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(h.jsx)("img",{className:"Persik",src:u,alt:"Persik The Cat"})]})}),f=function(){var e=Object(n.useState)("home"),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(null),r=Object(d.a)(i,2),j=r[0],u=r[1],f=Object(n.useState)(Object(h.jsx)(b.l,{size:"large"})),m=Object(d.a)(f,2),x=m[0],g=m[1];Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,u(t),g(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var k=function(e){s(e.currentTarget.dataset.to)};return Object(h.jsx)(b.a,{children:Object(h.jsx)(b.b,{children:Object(h.jsxs)(b.m,{activePanel:c,popout:x,children:[Object(h.jsx)(p,{id:"home",fetchedUser:j,go:k}),Object(h.jsx)(O,{id:"persik",go:k})]})})})};a.a.send("VKWebAppInit"),i.a.render(Object(h.jsx)(f,{}),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.3f0db89a.chunk.js.map