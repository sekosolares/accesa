!function(e){var t={};function n(l){if(t[l])return t[l].exports;var s=t[l]={i:l,l:!1,exports:{}};return e[l].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(l,s,function(t){return e[t]}.bind(null,s));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function l(){}n.r(t);function s(e){return e()}function i(){return Object.create(null)}function a(e){e.forEach(s)}function o(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e){return 0===Object.keys(e).length}new Set;function d(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function f(e){e.parentNode.removeChild(e)}function v(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function p(){return m(" ")}function g(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}new Set;let b;function y(e){b=e}const $=[],x=[],C=[],w=[],j=Promise.resolve();let S=!1;function O(){S||(S=!0,j.then(k))}function T(e){C.push(e)}let z=!1;const E=new Set;function k(){if(!z){z=!0;do{for(let e=0;e<$.length;e+=1){const t=$[e];y(t),M(t.$$)}for($.length=0;x.length;)x.pop()();for(let e=0;e<C.length;e+=1){const t=C[e];E.has(t)||(E.add(t),t())}C.length=0}while($.length);for(;w.length;)w.pop()();S=!1,z=!1,E.clear()}}function M(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}const F=new Set;let N;function _(e,t){e&&e.i&&(F.delete(e),e.i(t))}function B(e,t,n,l){if(e&&e.o){if(F.has(e))return;F.add(e),N.c.push(()=>{F.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}}const q="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let H;function I(e){e&&e.c()}function R(e,t,n){const{fragment:l,on_mount:i,on_destroy:r,after_update:c}=e.$$;l&&l.m(t,n),T(()=>{const t=i.map(s).filter(o);r?r.push(...t):a(t),e.$$.on_mount=[]}),c.forEach(T)}function A(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function L(e,t,n,s,o,r,c=[-1]){const d=b;y(e);const u=t.props||{},v=e.$$={fragment:null,ctx:null,props:r,update:l,not_equal:o,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:i(),dirty:c,skip_bound:!1};let m=!1;if(v.ctx=n?n(e,u,(t,n,...l)=>{const s=l.length?l[0]:n;return v.ctx&&o(v.ctx[t],v.ctx[t]=s)&&(!v.skip_bound&&v.bound[t]&&v.bound[t](s),m&&function(e,t){-1===e.$$.dirty[0]&&($.push(e),O(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n}):[],v.update(),m=!0,a(v.before_update),v.fragment=!!s&&s(v.ctx),t.target){if(t.hydrate){const e=(p=t.target,Array.from(p.childNodes));v.fragment&&v.fragment.l(e),e.forEach(f)}else v.fragment&&v.fragment.c();t.intro&&_(e.$$.fragment),R(e,t.target,t.anchor),k()}var p;y(d)}"function"==typeof HTMLElement&&(H=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){A(this,1),this.$destroy=l}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!c(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class P{$destroy(){A(this,1),this.$destroy=l}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!c(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const{document:D}=q;function K(e){let t,n,s,i,o,r,c,m,b,y,$,x,C,w,j,S,O,T,z,E,k,M,F,N;return{c(){t=v("div"),n=v("ul"),s=v("li"),s.innerHTML='<img src="https://bit.ly/3c6fld6" alt="ACCESA LOGO" class="svelte-iba0ti">',i=p(),o=v("li"),r=v("i"),c=p(),m=v("nav"),b=v("li"),y=v("span"),y.textContent="×",$=p(),x=v("li"),x.innerHTML='<img src="https://bit.ly/3my1P6U" alt="LOGO CORTO" class="svelte-iba0ti">',C=p(),w=v("li"),w.innerHTML='<a href="#NOSOTROS" class="svelte-iba0ti">NOSOTROS</a>',j=p(),S=v("li"),S.innerHTML='<a href="#SERVICIOS" class="svelte-iba0ti">SERVICIOS</a>',O=p(),T=v("li"),T.innerHTML='<a href="#BENEFICIOS" class="svelte-iba0ti">BENEFICIOS</a>',z=p(),E=v("li"),E.innerHTML='<a href="#CONTACTO" class="svelte-iba0ti">CONTACTO</a>',k=p(),M=v("div"),h(s,"class","svelte-iba0ti"),h(r,"class","fas fa-bars svelte-iba0ti"),h(o,"class","svelte-iba0ti"),h(n,"class","Menubar-content svelte-iba0ti"),h(b,"id","close_menu"),h(b,"class","svelte-iba0ti"),h(x,"class","svelte-iba0ti"),h(w,"class","svelte-iba0ti"),h(S,"class","svelte-iba0ti"),h(T,"class","svelte-iba0ti"),h(E,"class","svelte-iba0ti"),h(m,"class","Menubar-bar svelte-iba0ti"),h(m,"data-show","0"),h(m,"id","Navbar"),h(t,"class","Menubar svelte-iba0ti"),h(M,"id","overlay"),h(M,"class","svelte-iba0ti")},m(e,l){u(e,t,l),d(t,n),d(n,s),d(n,i),d(n,o),d(o,r),d(t,c),d(t,m),d(m,b),d(b,y),d(m,$),d(m,x),d(m,C),d(m,w),d(m,j),d(m,S),d(m,O),d(m,T),d(m,z),d(m,E),u(e,k,l),u(e,M,l),F||(N=[g(r,"click",G),g(y,"click",G),g(M,"click",G)],F=!0)},p:l,i:l,o:l,d(e){e&&f(t),e&&f(k),e&&f(M),F=!1,a(N)}}}function G(){let e=document.querySelector("#Navbar").dataset.show;e=parseInt(e),0===e?(document.querySelector("#overlay").style.display="block",document.querySelector("#Navbar").style.right="0%",document.querySelector("#Navbar").dataset.show=1):(document.querySelector("#overlay").style.display="none",document.querySelector("#Navbar").style.right="-100%",document.querySelector("#Navbar").dataset.show=0)}var V=class extends P{constructor(e){var t;super(),D.getElementById("svelte-iba0ti-style")||((t=v("style")).id="svelte-iba0ti-style",t.textContent="div.Menubar.svelte-iba0ti.svelte-iba0ti,div.Menubar.svelte-iba0ti ul.svelte-iba0ti{display:grid;column-gap:4%;grid-template-columns:repeat(4, 1fr);grid-column:1 / 5}ul.svelte-iba0ti li.svelte-iba0ti{list-style:none;display:inline-flex}ul.svelte-iba0ti li.svelte-iba0ti:first-child{grid-column:1/3;font-size:1em;justify-content:flex-start;align-items:center}ul.svelte-iba0ti li.svelte-iba0ti:last-child{grid-column:4;justify-content:center;font-size:1.6em;padding:1em;align-items:center}ul.svelte-iba0ti li i.svelte-iba0ti{color:#03045E;cursor:pointer}ul.Menubar-content.svelte-iba0ti img.svelte-iba0ti{height:6.5em}nav.Menubar-bar.svelte-iba0ti.svelte-iba0ti{background-color:#0077B6;color:#F3F3F3;width:45%;height:100vh;position:fixed;right:-100%;top:0;padding:1em 2em;z-index:5;border-radius:2px}nav.Menubar-bar.svelte-iba0ti img.svelte-iba0ti{height:5em}nav.Menubar-bar.svelte-iba0ti li.svelte-iba0ti{list-style:none;text-align:center;padding-top:2.5em}nav.Menubar-bar.svelte-iba0ti li.svelte-iba0ti:first-child,nav.Menubar-bar.svelte-iba0ti li.svelte-iba0ti:nth-child(2){padding-top:0}nav.Menubar-bar.svelte-iba0ti li a.svelte-iba0ti{color:#F3F3F3;font-family:'Karla', Arial, Helvetica, sans-serif;font-size:1.25em;letter-spacing:0.3em;text-decoration:none}#close_menu.svelte-iba0ti.svelte-iba0ti{font-size:4em;text-align:right;cursor:pointer}#overlay.svelte-iba0ti.svelte-iba0ti{position:fixed;background-color:#3f3f3f5e;display:none;top:0;bottom:0;right:0;left:0;z-index:2}",d(D.head,t)),L(this,e,null,K,r,{})}};function J(e){let t,n,s,i,a,o,r,c,m;return n=new V({}),{c(){t=v("header"),I(n.$$.fragment),s=p(),i=v("div"),i.innerHTML='<h1 class="svelte-1aon57t">Accesa <span class="highlight-blue svelte-1aon57t">Reciclaje</span></h1>',a=p(),o=v("div"),o.innerHTML='<h2 class="svelte-1aon57t">Recolección y reciclaje de manera <span class="highlight-blue svelte-1aon57t">inteligente</span>.</h2>',r=p(),c=v("div"),c.innerHTML='<img src="#" alt="HERO">',h(i,"class","Header-title svelte-1aon57t"),h(o,"class","Header-subtitle svelte-1aon57t"),h(c,"class","Header-image svelte-1aon57t"),h(t,"class","Header svelte-1aon57t")},m(e,l){u(e,t,l),R(n,t,null),d(t,s),d(t,i),d(t,a),d(t,o),d(t,r),d(t,c),m=!0},p:l,i(e){m||(_(n.$$.fragment,e),m=!0)},o(e){B(n.$$.fragment,e),m=!1},d(e){e&&f(t),A(n)}}}var U=class extends P{constructor(e){var t;super(),document.getElementById("svelte-1aon57t-style")||((t=v("style")).id="svelte-1aon57t-style",t.textContent="@import url('https://fonts.googleapis.com/css2?family=Karla&family=Roboto&display=swap');header.Header.svelte-1aon57t.svelte-1aon57t{grid-column:1 / 5}div.Header-title.svelte-1aon57t h1.svelte-1aon57t{font-size:3em;color:#49484D;font-family:'Karla', sans-serif;font-weight:700}.highlight-blue.svelte-1aon57t.svelte-1aon57t{color:#0077B6}div.Header-subtitle.svelte-1aon57t h2.svelte-1aon57t{font-size:1.9em;color:#49484D;font-family:'Roboto', sans-serif;font-weight:400}div.Header-image.svelte-1aon57t.svelte-1aon57t{text-align:center}",d(document.head,t)),L(this,e,null,J,r,{})}};function Q(e){let t,n,s;return{c(){t=v("div"),n=v("h3"),s=m(e[0]),h(n,"style",e[1]),h(n,"class","svelte-xeka41"),h(t,"class","Title svelte-xeka41")},m(e,l){u(e,t,l),d(t,n),d(n,s)},p(e,[t]){var l,i;1&t&&(l=s,i=""+(i=e[0]),l.wholeText!==i&&(l.data=i)),2&t&&h(n,"style",e[1])},i:l,o:l,d(e){e&&f(t)}}}function W(e,t,n){let{content:l="NO CONTENT"}=t,{inlineStyle:s="display: initial;"}=t;return e.$$set=e=>{"content"in e&&n(0,l=e.content),"inlineStyle"in e&&n(1,s=e.inlineStyle)},[l,s]}var X=class extends P{constructor(e){var t;super(),document.getElementById("svelte-xeka41-style")||((t=v("style")).id="svelte-xeka41-style",t.textContent="@import url('https://fonts.googleapis.com/css2?family=Karla&family=Roboto&display=swap');div.Title.svelte-xeka41.svelte-xeka41{text-align:center;grid-column:1 / 5}div.Title.svelte-xeka41 h3.svelte-xeka41{grid-column:inherit;color:#03045E;font-family:'Karla', sans-serif;font-weight:400;font-size:2.3em;letter-spacing:0.3em}",d(document.head,t)),L(this,e,W,Q,r,{content:0,inlineStyle:1})}};function Y(e){let t,n,s,i,a;return n=new X({props:{content:"NOSOTROS"}}),{c(){t=v("section"),I(n.$$.fragment),s=p(),i=v("div"),i.innerHTML='<p class="svelte-hyezmp">Somos una empresa enfocada en detener el daño que se produce al medio ambiente por el desecho inadecuado del papel, plásticos y chatarras; por lo que damos a nuestros clientes un servicio de alta calidad en la recolección y reciclaje, supervisando el traslado de material a nuestro centro de reciclaje y de ahí, a su destino final.</p>',h(i,"class","About-content svelte-hyezmp"),h(t,"class","About svelte-hyezmp"),h(t,"id","NOSOTROS")},m(e,l){u(e,t,l),R(n,t,null),d(t,s),d(t,i),a=!0},p:l,i(e){a||(_(n.$$.fragment,e),a=!0)},o(e){B(n.$$.fragment,e),a=!1},d(e){e&&f(t),A(n)}}}var Z=class extends P{constructor(e){var t;super(),document.getElementById("svelte-hyezmp-style")||((t=v("style")).id="svelte-hyezmp-style",t.textContent="section.About.svelte-hyezmp.svelte-hyezmp{grid-column:1 / 5;margin-top:6em}div.About-content.svelte-hyezmp.svelte-hyezmp{font-family:'Roboto', sans-serif;color:#49484D}div.About-content.svelte-hyezmp p.svelte-hyezmp{font-family:inherit;font-weight:300;font-size:1.5em;text-align:justify;line-height:135%}",d(document.head,t)),L(this,e,null,Y,r,{})}};function ee(e){let t,n,s,i,a;return n=new X({props:{content:"TE APORTAMOS"}}),{c(){t=v("section"),I(n.$$.fragment),s=p(),i=v("div"),i.innerHTML='<ul><li class="svelte-j8iro5">Manejo de archivo muerto.</li> \n            <li class="svelte-j8iro5">7o\n                Reciclaje de cartón y plásticos:\n                <ul><li class="svelte-j8iro5">Nylon</li> \n                    <li class="svelte-j8iro5">Botellas Pet</li> \n                    <li class="svelte-j8iro5">Nylon strech film</li></ul></li> \n            <li class="svelte-j8iro5">Chatarra.</li> \n            <li class="svelte-j8iro5">Asesoría y gestión en: \n                <ul><li class="svelte-j8iro5">Recolección.</li> \n                    <li class="svelte-j8iro5">Clasificación.</li> \n                    <li class="svelte-j8iro5">Almacenaje.</li></ul></li> \n            <li class="svelte-j8iro5">Elaboración y gestión de procedimientos.</li> \n            <li class="svelte-j8iro5">Implementación de formatos.</li> \n            <li class="svelte-j8iro5">Elaboración de flujogramas.</li></ul> \n        <iframe width="560" height="315" title="Importancia del Reciclaje" src="https://www.youtube.com/embed/kr6J_xmbJk0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-j8iro5"></iframe>',h(i,"class","Services-content svelte-j8iro5"),h(t,"class","Services svelte-j8iro5"),h(t,"id","SERVICIOS")},m(e,l){u(e,t,l),R(n,t,null),d(t,s),d(t,i),a=!0},p:l,i(e){a||(_(n.$$.fragment,e),a=!0)},o(e){B(n.$$.fragment,e),a=!1},d(e){e&&f(t),A(n)}}}var te=class extends P{constructor(e){var t;super(),document.getElementById("svelte-j8iro5-style")||((t=v("style")).id="svelte-j8iro5-style",t.textContent="section.Services.svelte-j8iro5.svelte-j8iro5{grid-column:1 / 5;margin-top:6em}div.Services-content.svelte-j8iro5.svelte-j8iro5{font-family:'Roboto', sans-serif;color:#49484D}div.Services-content.svelte-j8iro5>ul li.svelte-j8iro5{font-family:inherit;font-weight:300;font-size:1.5em;text-align:left;line-height:130%;margin-bottom:1.5em}div.Services-content.svelte-j8iro5>ul li>ul li.svelte-j8iro5{font-size:1em;margin-bottom:auto;font-weight:normal}div.Services-content.svelte-j8iro5 iframe.svelte-j8iro5{align-self:stretch;width:100%}",d(document.head,t)),L(this,e,null,ee,r,{})}};function ne(e){let t,n,s,i,a;return n=new X({props:{content:"BENEFICIOS",inlineStyle:"color: #F3F3F3;"}}),{c(){t=v("section"),I(n.$$.fragment),s=p(),i=v("div"),i.innerHTML='<ul><li class="svelte-z15fg5">Manejo adecuado de los materiales de Reciclaje.</li> \n            <li class="svelte-z15fg5">Cumplimiento fiscal, por medio de factura para documentar la venta.</li> \n            <li class="svelte-z15fg5">Carta de Confidencialidad (documento de compromiso para garantizar la destrucción y reciclaje).</li> \n            <li class="svelte-z15fg5">Certificado de Buenas Prácticas en Gestión de Reciclaje</li></ul>',h(i,"class","Benefits-content svelte-z15fg5"),h(t,"class","Benefits svelte-z15fg5"),h(t,"id","BENEFICIOS")},m(e,l){u(e,t,l),R(n,t,null),d(t,s),d(t,i),a=!0},p:l,i(e){a||(_(n.$$.fragment,e),a=!0)},o(e){B(n.$$.fragment,e),a=!1},d(e){e&&f(t),A(n)}}}var le=class extends P{constructor(e){var t;super(),document.getElementById("svelte-z15fg5-style")||((t=v("style")).id="svelte-z15fg5-style",t.textContent="section.Benefits.svelte-z15fg5.svelte-z15fg5{grid-column:1 / 5;margin-top:6em;padding-top:2em;background-color:#0077B6}div.Benefits-content.svelte-z15fg5.svelte-z15fg5{font-family:'Roboto', sans-serif;padding:1em 2em 2em 1em;color:#F3F3F3}div.Benefits-content.svelte-z15fg5>ul li.svelte-z15fg5{font-family:inherit;font-weight:300;font-size:1.5em;text-align:left;line-height:130%;margin-bottom:1.5em}",d(document.head,t)),L(this,e,null,ne,r,{})}};function se(e){let t,n,s,i,a,o,r,c,m,b,y,$,x,C,w,j,S,O,T,z,E,k,M,F,N,q,H,L,P,D,K,G,V,J,U,Q,W;return n=new X({props:{content:"CONTACTO"}}),{c(){t=v("section"),I(n.$$.fragment),s=p(),i=v("div"),a=v("p"),a.textContent="¿Tienes interés? Puedes contactarnos por cualquiera de los siguientes medios:",o=p(),r=v("div"),r.innerHTML='<div><a href="https://api.whatsapp.com/send?phone=+502-4150-8421" target="_blank"><i class="fab fa-whatsapp svelte-u45d3f"></i></a></div> \n            \n            <div><a href="mailto:reciclaje@accesagroup.com"><i class="fas fa-envelope svelte-u45d3f"></i></a></div> \n            <div><a href="tel:+502-4150-8421"><i class="fas fa-phone-alt svelte-u45d3f"></i></a></div>',c=p(),m=v("p"),m.textContent="O puedes llenar el siguiente formulario:",b=p(),y=v("form"),$=v("input"),x=p(),C=v("label"),C.textContent="Nombre:",w=p(),j=v("input"),S=p(),O=v("label"),O.textContent="Apellido:",T=p(),z=v("input"),E=p(),k=v("label"),k.textContent="Email:",M=p(),F=v("input"),N=p(),q=v("label"),q.textContent="Teléfono:",H=p(),L=v("input"),P=p(),D=v("label"),D.textContent="Mensaje:",K=p(),G=v("textarea"),V=p(),J=v("button"),J.textContent="Enviar",h(a,"class","svelte-u45d3f"),h(r,"class","content-list svelte-u45d3f"),h(m,"class","svelte-u45d3f"),h($,"type","hidden"),h($,"name","form-name"),$.value="contact",h($,"class","svelte-u45d3f"),h(C,"for","inNombre"),h(C,"class","svelte-u45d3f"),h(j,"type","text"),h(j,"name","name"),h(j,"id","inNombre"),h(j,"placeholder","Tu Nombre"),j.required=!0,h(j,"class","svelte-u45d3f"),h(O,"for","inLastName"),h(O,"class","svelte-u45d3f"),h(z,"type","text"),h(z,"name","last_name"),h(z,"id","inLastName"),h(z,"placeholder","Tu Apellido"),z.required=!0,h(z,"class","svelte-u45d3f"),h(k,"for","inEmail"),h(k,"class","svelte-u45d3f"),h(F,"type","email"),h(F,"name","email"),h(F,"id","inEmail"),h(F,"placeholder","Tu correo electrónico"),h(F,"class","svelte-u45d3f"),h(q,"for","inPhone"),h(q,"class","svelte-u45d3f"),h(L,"type","tel"),L.value="",h(L,"maxlength","14"),h(L,"name","phone"),h(L,"id","inPhone"),h(L,"placeholder","Tu teléfono. (Ej. +502 1234 5678)"),L.required=!0,h(L,"class","svelte-u45d3f"),h(D,"for","inMessage"),h(D,"class","svelte-u45d3f"),h(G,"name","message"),h(G,"id","inMessage"),h(G,"placeholder","Tu mensaje"),G.required=!0,h(G,"class","svelte-u45d3f"),h(J,"type","submit"),h(J,"class","button-submit svelte-u45d3f"),h(y,"name","contact"),h(y,"method","POST"),h(y,"class","svelte-u45d3f"),h(i,"class","Contact-content svelte-u45d3f"),h(t,"class","Contact svelte-u45d3f"),h(t,"id","CONTACTO")},m(e,l){u(e,t,l),R(n,t,null),d(t,s),d(t,i),d(i,a),d(i,o),d(i,r),d(i,c),d(i,m),d(i,b),d(i,y),d(y,$),d(y,x),d(y,C),d(y,w),d(y,j),d(y,S),d(y,O),d(y,T),d(y,z),d(y,E),d(y,k),d(y,M),d(y,F),d(y,N),d(y,q),d(y,H),d(y,L),d(y,P),d(y,D),d(y,K),d(y,G),d(y,V),d(y,J),U=!0,Q||(W=g(L,"keydown",ie),Q=!0)},p:l,i(e){U||(_(n.$$.fragment,e),U=!0)},o(e){B(n.$$.fragment,e),U=!1},d(e){e&&f(t),A(n),Q=!1,W()}}}function ie(){let e=event.target.value.length;4===e&&(event.target.value+=" "),9===e&&(event.target.value+=" ")}var ae=class extends P{constructor(e){var t;super(),document.getElementById("svelte-u45d3f-style")||((t=v("style")).id="svelte-u45d3f-style",t.textContent="section.Contact.svelte-u45d3f.svelte-u45d3f{grid-column:1 / 5;margin-top:6em}div.Contact-content.svelte-u45d3f.svelte-u45d3f{font-family:'Roboto', sans-serif;color:#49484D}div.Contact-content.svelte-u45d3f p.svelte-u45d3f{font-family:inherit;font-weight:300;font-size:1.5em;text-align:left;line-height:135%}div.Contact-content.svelte-u45d3f form.svelte-u45d3f{grid-column:1 / 5;display:grid;font-size:1.5em}div.Contact-content.svelte-u45d3f form label.svelte-u45d3f{display:block;font-weight:300}div.Contact-content.svelte-u45d3f form input.svelte-u45d3f,div.Contact-content.svelte-u45d3f form textarea.svelte-u45d3f,div.Contact-content.svelte-u45d3f form button.svelte-u45d3f{border:1px solid #0077B6;border-radius:5px;padding:6px;grid-column:1 / 5;font-size:1em;font-weight:300;font-family:inherit;margin-bottom:1em}div.Contact-content.svelte-u45d3f form input.svelte-u45d3f{height:24px}div.Contact-content.svelte-u45d3f form textarea.svelte-u45d3f{height:3em}div.Contact-content.svelte-u45d3f form input.svelte-u45d3f::placeholder,div.Contact-content.svelte-u45d3f form textarea.svelte-u45d3f::placeholder{font-weight:300;font-size:0.8em}div.Contact-content.svelte-u45d3f form button.svelte-u45d3f{background-color:#0077B6;color:#F3F3F3;cursor:pointer}div.content-list.svelte-u45d3f.svelte-u45d3f{grid-column:1 / 5;display:grid;grid-template-columns:auto auto auto;text-align:center}div.content-list.svelte-u45d3f div i.svelte-u45d3f{font-size:47px;color:#0077B6}",d(document.head,t)),L(this,e,null,se,r,{})}};function oe(e){let t;return{c(){t=v("footer"),t.innerHTML='<div class="Footer-content svelte-1tus1ss"><div class="svelte-1tus1ss"><a href="sitemap" class="svelte-1tus1ss">Ver sitemap</a></div> \n        <div class="svelte-1tus1ss"><a href="politicas" class="svelte-1tus1ss">Políticas de Privacidad</a></div> \n        <div class="copyright svelte-1tus1ss">© Accesa Group 2020</div></div>',h(t,"class","Footer svelte-1tus1ss")},m(e,n){u(e,t,n)},p:l,i:l,o:l,d(e){e&&f(t)}}}var re=class extends P{constructor(e){var t;super(),document.getElementById("svelte-1tus1ss-style")||((t=v("style")).id="svelte-1tus1ss-style",t.textContent="footer.Footer.svelte-1tus1ss.svelte-1tus1ss{margin-top:6em;color:#F3F3F3;background-color:#49484D;position:relative;bottom:0;left:0;right:0;padding:1em;display:grid;grid-template-columns:repeat(4, 1fr)}div.Footer-content.svelte-1tus1ss.svelte-1tus1ss{font-family:'Roboto', sans-serif;grid-column:1 / 5;display:inherit;grid-template-columns:repeat(2, 1fr)}div.Footer-content.svelte-1tus1ss div.svelte-1tus1ss{display:inline-block;text-align:center;padding:0.5em 1em}div.Footer-content.svelte-1tus1ss div.copyright.svelte-1tus1ss{text-align:center;display:block;grid-column:1 / 3}a.svelte-1tus1ss.svelte-1tus1ss{color:inherit}",d(document.head,t)),L(this,e,null,oe,r,{})}};function ce(e){let t,n,s,i,a,o,r,c,m,g,b,y,$;return n=new U({}),i=new Z({}),o=new te({}),c=new le({}),g=new ae({}),y=new re({}),{c(){t=v("div"),I(n.$$.fragment),s=p(),I(i.$$.fragment),a=p(),I(o.$$.fragment),r=p(),I(c.$$.fragment),m=p(),I(g.$$.fragment),b=p(),I(y.$$.fragment),h(t,"class","main svelte-1x5lpqq")},m(e,l){u(e,t,l),R(n,t,null),d(t,s),R(i,t,null),d(t,a),R(o,t,null),d(t,r),R(c,t,null),d(t,m),R(g,t,null),u(e,b,l),R(y,e,l),$=!0},p:l,i(e){$||(_(n.$$.fragment,e),_(i.$$.fragment,e),_(o.$$.fragment,e),_(c.$$.fragment,e),_(g.$$.fragment,e),_(y.$$.fragment,e),$=!0)},o(e){B(n.$$.fragment,e),B(i.$$.fragment,e),B(o.$$.fragment,e),B(c.$$.fragment,e),B(g.$$.fragment,e),B(y.$$.fragment,e),$=!1},d(e){e&&f(t),A(n),A(i),A(o),A(c),A(g),e&&f(b),A(y,e)}}}const de=new class extends P{constructor(e){var t;super(),document.getElementById("svelte-1x5lpqq-style")||((t=v("style")).id="svelte-1x5lpqq-style",t.textContent="@import url('https://fonts.googleapis.com/css2?family=Karla&family=Roboto:wght@100;300;400;500;700&display=swap');body{background-color:#FFFFFF;margin:0;padding:0}div.main.svelte-1x5lpqq{display:grid;column-gap:4%;grid-template-columns:repeat(4, 1fr);margin:auto 4%;z-index:-2}",d(document.head,t)),L(this,e,null,ce,r,{})}}({target:document.querySelector("main")});t.default=de}]);