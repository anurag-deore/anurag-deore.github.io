import{s as J,c as M,d as X,r as z,n as K}from"../chunks/scheduler.a3aa4e4f.js";import{S as Y,i as Z,g as k,s as w,h as g,j as C,D as x,c as E,f as v,k as s,l as Q,a as I,x as _,F as D,I as W,d as V,t as O,b as $,J as T,G as N,p as ee,C as U,E as B}from"../chunks/index.d8a9351c.js";import{t as R}from"../chunks/tweened.99c9561d.js";import{a as G}from"../chunks/index.cd229674.js";const te="https://script.google.com/macros/s/AKfycbwn5tqa3qxikGj55gV5xZ7VAYt9PAECLi0tPEX2Lxb1G_8lvh2yvO_OFucsP7xhP5HC/exec";function H(f){let e,t,d,l,i,n,r,a,y,p;return{c(){e=k("div"),t=k("input"),d=w(),l=k("input"),i=w(),n=k("textarea"),this.h()},l(u){e=g(u,"DIV",{class:!0});var c=C(e);t=g(c,"INPUT",{type:!0,id:!0,placeholder:!0,name:!0,class:!0}),d=E(c),l=g(c,"INPUT",{type:!0,placeholder:!0,id:!0,name:!0,class:!0}),i=E(c),n=g(c,"TEXTAREA",{id:!0,rows:!0,placeholder:!0,name:!0,class:!0}),C(n).forEach(v),c.forEach(v),this.h()},h(){s(t,"type","text"),s(t,"id","name"),s(t,"placeholder","Enter your name"),s(t,"name","name"),t.required=!0,s(t,"class","svelte-1i02qta"),s(l,"type","email"),s(l,"placeholder","Enter your email"),s(l,"id","email"),s(l,"name","email"),l.required=!0,s(l,"class","svelte-1i02qta"),s(n,"id","message"),s(n,"rows","10"),s(n,"placeholder","Enter your message"),s(n,"name","message"),n.required=!0,s(n,"class","svelte-1i02qta"),s(e,"class","form svelte-1i02qta")},m(u,c){I(u,e,c),_(e,t),T(t,f[0]),_(e,d),_(e,l),T(l,f[1]),_(e,i),_(e,n),T(n,f[2]),a=!0,y||(p=[D(t,"input",f[9]),D(l,"input",f[10]),D(n,"input",f[11])],y=!0)},p(u,c){c&1&&t.value!==u[0]&&T(t,u[0]),c&2&&l.value!==u[1]&&T(l,u[1]),c&4&&T(n,u[2])},i(u){a||(u&&X(()=>{a&&(r||(r=N(e,G,{},!0)),r.run(1))}),a=!0)},o(u){u&&(r||(r=N(e,G,{},!1)),r.run(0)),a=!1},d(u){u&&v(e),u&&r&&r.end(),y=!1,z(p)}}}function se(f){let e,t,d,l,i,n;return{c(){e=k("div"),d=w(),l=U("svg"),i=U("path"),this.h()},l(r){e=g(r,"DIV",{class:!0,style:!0}),C(e).forEach(v),d=E(r),l=B(r,"svg",{fill:!0,viewBox:!0,"stroke-width":!0,style:!0,stroke:!0,class:!0});var a=C(l);i=B(a,"path",{fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),C(i).forEach(v),a.forEach(v),this.h()},h(){s(e,"class","spinner svelte-1i02qta"),s(e,"style",t=`opacity: ${f[4]};`),s(i,"fill","none"),s(i,"stroke-linecap","round"),s(i,"stroke-linejoin","round"),s(i,"d","M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"),s(l,"fill","none"),s(l,"viewBox","0 0 24 24"),s(l,"stroke-width","1.5"),s(l,"style",n=`opacity: ${f[5]};`),s(l,"stroke","currentColor"),s(l,"class","svelte-1i02qta")},m(r,a){I(r,e,a),I(r,d,a),I(r,l,a),_(l,i)},p(r,a){a&16&&t!==(t=`opacity: ${r[4]};`)&&s(e,"style",t),a&32&&n!==(n=`opacity: ${r[5]};`)&&s(l,"style",n)},d(r){r&&(v(e),v(d),v(l))}}}function le(f){let e,t="Send";return{c(){e=k("div"),e.textContent=t,this.h()},l(d){e=g(d,"DIV",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-1kkjoq2"&&(e.textContent=t),this.h()},h(){s(e,"class","svelte-1i02qta")},m(d,l){I(d,e,l)},p:K,d(d){d&&v(e)}}}function re(f){let e,t,d='<div class="title">Connect</div>',l,i,n=`Feel completely free to drop me a message if you've got questions, want to explore exciting
		opportunities, or just fancy a friendly chat. I'm all ears and up for making new friends!`,r,a,y,p,u,c,P="I'll get back within 1-2 days. Thanks for your understanding!",A,q,o=!f[3]&&H(f);function j(h,m){return h[3]?se:le}let S=j(f),b=S(f);return{c(){e=k("div"),t=k("div"),t.innerHTML=d,l=w(),i=k("div"),i.textContent=n,r=w(),a=k("form"),o&&o.c(),y=w(),p=k("button"),b.c(),u=w(),c=k("small"),c.textContent=P,this.h()},l(h){e=g(h,"DIV",{class:!0});var m=C(e);t=g(m,"DIV",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-107mkcl"&&(t.innerHTML=d),l=E(m),i=g(m,"DIV",{class:!0,"data-svelte-h":!0}),x(i)!=="svelte-u87gu8"&&(i.textContent=n),r=E(m),a=g(m,"FORM",{class:!0,id:!0});var L=C(a);o&&o.l(L),y=E(L),p=g(L,"BUTTON",{class:!0,type:!0});var F=C(p);b.l(F),F.forEach(v),L.forEach(v),u=E(m),c=g(m,"SMALL",{style:!0,"data-svelte-h":!0}),x(c)!=="svelte-8tguv7"&&(c.textContent=P),m.forEach(v),this.h()},h(){s(t,"class","header svelte-1i02qta"),s(i,"class","connect svelte-1i02qta"),s(p,"class","submit svelte-1i02qta"),s(p,"type","submit"),p.disabled=f[3],s(a,"class","contactForm svelte-1i02qta"),s(a,"id","contactForm"),Q(c,"text-align","center"),s(e,"class","container svelte-1i02qta")},m(h,m){I(h,e,m),_(e,t),_(e,l),_(e,i),_(e,r),_(e,a),o&&o.m(a,null),_(a,y),_(a,p),b.m(p,null),_(e,u),_(e,c),A||(q=D(a,"submit",W(f[8])),A=!0)},p(h,[m]){h[3]?o&&(ee(),O(o,1,1,()=>{o=null}),$()):o?(o.p(h,m),m&8&&V(o,1)):(o=H(h),o.c(),V(o,1),o.m(a,y)),S===(S=j(h))&&b?b.p(h,m):(b.d(1),b=S(h),b&&(b.c(),b.m(p,null))),m&8&&(p.disabled=h[3])},i(h){V(o)},o(h){O(o)},d(h){h&&v(e),o&&o.d(),b.d(),A=!1,q()}}}function ae(f,e,t){let d,l,i="",n="",r="",a=!1,y=R(0);M(f,y,q=>t(4,d=q));let p=R(0);M(f,p,q=>t(5,l=q));async function u(){const q={name:i,email:n,message:r};try{t(3,a=!0),y.set(1);const o=await fetch(te,{redirect:"follow",method:"POST",body:JSON.stringify(q),headers:{"Content-Type":"text/plain;charset=utf-8"}});o.ok?(y.set(0),p.set(1),t(0,i=t(2,r=t(1,n=""))),setTimeout(()=>{p.set(0),t(3,a=!1)},1e3)):console.error("Error sending data:",o.statusText)}catch(o){console.error("Network error:",o)}}function c(){i=this.value,t(0,i)}function P(){n=this.value,t(1,n)}function A(){r=this.value,t(2,r)}return[i,n,r,a,d,l,y,p,u,c,P,A]}class ce extends Y{constructor(e){super(),Z(this,e,ae,re,J,{})}}export{ce as component};
