import{S as N,i as q,s as K,K as H,e as P,b as C,L as T,E as v,h as m,o as U,k,q as E,a as A,l as g,m as y,r as $,c as D,n as _,C as I,D as c,u as L,y as O,M as j,z,A as B,g as G,d as R,B as F}from"../chunks/index.c0436732.js";function J(o){return{c:v,l:v,m:v,p:v,d:v}}function Q(o){let t,a=o[2]!=null&&M(o);return{c(){a&&a.c(),t=P()},l(e){a&&a.l(e),t=P()},m(e,n){a&&a.m(e,n),C(e,t,n)},p(e,n){e[2]!=null?a?a.p(e,n):(a=M(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(e){a&&a.d(e),e&&m(t)}}}function M(o){let t,a,e=o[2].title+"",n,r,u,f,h=new Date(o[2].year,o[2].month-1,o[2].day).toLocaleDateString()+"",w,d,p,l;return{c(){t=k("section"),a=k("p"),n=E(e),r=A(),u=k("p"),f=E("Uploaded: "),w=E(h),d=A(),p=k("img"),this.h()},l(i){t=g(i,"SECTION",{});var s=y(t);a=g(s,"P",{id:!0,class:!0});var S=y(a);n=$(S,e),S.forEach(m),r=D(s),u=g(s,"P",{id:!0});var b=y(u);f=$(b,"Uploaded: "),w=$(b,h),b.forEach(m),d=D(s),p=g(s,"IMG",{id:!0,alt:!0,src:!0}),s.forEach(m),this.h()},h(){_(a,"id","comic_title"),_(a,"class","comic svelte-kghcah"),_(u,"id","comic_date"),_(p,"id","comic"),_(p,"alt","Comic placeholder"),I(p.src,l=o[2].img)||_(p,"src",l)},m(i,s){C(i,t,s),c(t,a),c(a,n),c(t,r),c(t,u),c(u,f),c(u,w),c(t,d),c(t,p)},p(i,s){s&1&&e!==(e=i[2].title+"")&&L(n,e),s&1&&h!==(h=new Date(i[2].year,i[2].month-1,i[2].day).toLocaleDateString()+"")&&L(w,h),s&1&&!I(p.src,l=i[2].img)&&_(p,"src",l)},d(i){i&&m(t)}}}function V(o){let t,a;return{c(){t=k("p"),a=E("...loading new comic")},l(e){t=g(e,"P",{});var n=y(t);a=$(n,"...loading new comic"),n.forEach(m)},m(e,n){C(e,t,n),c(t,a)},p:v,d(e){e&&m(t)}}}function W(o){let t,a,e={ctx:o,current:null,token:null,hasCatch:!1,pending:V,then:Q,catch:J,value:2};return H(a=o[0],e),{c(){t=P(),e.block.c()},l(n){t=P(),e.block.l(n)},m(n,r){C(n,t,r),e.block.m(n,e.anchor=r),e.mount=()=>t.parentNode,e.anchor=t},p(n,[r]){o=n,e.ctx=o,r&1&&a!==(a=o[0])&&H(a,e)||T(e,o,r)},i:v,o:v,d(n){n&&m(t),e.block.d(n),e.token=null,e=null}}}let X="a.artemeva@innopolis.university";async function Y(o){const t=new URLSearchParams([["email",o]]),e=await(await fetch("https://fwd.innopolis.app/api/hw2?"+t.toString())).text();return await(await fetch("https://getxkcd.vercel.app/api/comic?num="+e)).json()}function Z(o,t,a){let e;async function n(r){return a(0,e=await Y(r)),e}return U(async()=>{a(0,e=await n(X))}),[e]}class x extends N{constructor(t){super(),q(this,t,Z,W,K,{})}}function ee(o){let t,a,e,n,r,u,f,h,w,d,p;return d=new x({}),{c(){t=k("meta"),a=A(),e=k("section"),n=k("h1"),r=E("Hi there, I'm Alyona"),u=A(),f=k("p"),h=E("And this is (seems like) working SvelteKit application"),w=A(),O(d.$$.fragment),this.h()},l(l){const i=j("svelte-w99sya",document.head);t=g(i,"META",{name:!0,content:!0}),i.forEach(m),a=D(l),e=g(l,"SECTION",{class:!0});var s=y(e);n=g(s,"H1",{class:!0});var S=y(n);r=$(S,"Hi there, I'm Alyona"),S.forEach(m),u=D(s),f=g(s,"P",{});var b=y(f);h=$(b,"And this is (seems like) working SvelteKit application"),b.forEach(m),w=D(s),z(d.$$.fragment,s),s.forEach(m),this.h()},h(){document.title="Home",_(t,"name","description"),_(t,"content","Homework 5 App"),_(n,"class","svelte-182n12o"),_(e,"class","svelte-182n12o")},m(l,i){c(document.head,t),C(l,a,i),C(l,e,i),c(e,n),c(n,r),c(e,u),c(e,f),c(f,h),c(e,w),B(d,e,null),p=!0},p:v,i(l){p||(G(d.$$.fragment,l),p=!0)},o(l){R(d.$$.fragment,l),p=!1},d(l){m(t),l&&m(a),l&&m(e),F(d)}}}class ae extends N{constructor(t){super(),q(this,t,null,ee,K,{})}}export{ae as default};