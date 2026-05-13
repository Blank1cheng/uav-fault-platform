(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,ee=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),te=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ne=/-\w/g,T=te(e=>e.replace(ne,e=>e.slice(1).toUpperCase())),re=/\B([A-Z])/g,E=te(e=>e.replace(re,`-$1`).toLowerCase()),ie=te(e=>e.charAt(0).toUpperCase()+e.slice(1)),ae=te(e=>e?`on${ie(e)}`:``),D=(e,t)=>!Object.is(e,t),oe=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},O=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},se=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ce,le=()=>ce||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ue(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?me(r):ue(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var de=/;(?![^(]*\))/g,fe=/:([^]+)/,pe=/\/\*[^]*?\*\//g;function me(e){let t={};return e.replace(pe,``).split(de).forEach(e=>{if(e){let n=e.split(fe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function he(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=he(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var ge=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,_e=e(ge);ge+``;function ve(e){return!!e||e===``}function ye(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=be(e[r],t[r]);return n}function be(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?ye(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!be(e[n],t[n]))return!1}}return String(e)===String(t)}var xe=e=>!!(e&&e.__v_isRef===!0),k=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?xe(e)?k(e.value):JSON.stringify(e,Se,2):String(e),Se=(e,t)=>xe(t)?Se(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Ce(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ce(e))}:_(t)?Ce(t):v(t)&&!d(t)&&!C(t)?String(t):t,Ce=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,A,we=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=A,!e&&A&&(this.index=(A.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=A;try{return A=this,e()}finally{A=t}}}on(){++this._on===1&&(this.prevScope=A,A=this)}off(){this._on>0&&--this._on===0&&(A=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Te(){return A}var j,Ee=new WeakSet,De=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,A&&A.active&&A.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ee.has(this)&&(Ee.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||je(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,We(this),Pe(this);let e=j,t=Be;j=this,Be=!0;try{return this.fn()}finally{Fe(this),j=e,Be=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Re(e);this.deps=this.depsTail=void 0,We(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ee.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ie(this)&&this.run()}get dirty(){return Ie(this)}},Oe=0,ke,Ae;function je(e,t=!1){if(e.flags|=8,t){e.next=Ae,Ae=e;return}e.next=ke,ke=e}function Me(){Oe++}function Ne(){if(--Oe>0)return;if(Ae){let e=Ae;for(Ae=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;ke;){let t=ke;for(ke=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Pe(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Fe(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Re(r),ze(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ie(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Le(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Le(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ge)||(e.globalVersion=Ge,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ie(e))))return;e.flags|=2;let t=e.dep,n=j,r=Be;j=e,Be=!0;try{Pe(e);let n=e.fn(e._value);(t.version===0||D(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{j=n,Be=r,Fe(e),e.flags&=-3}}function Re(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Re(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ze(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Be=!0,Ve=[];function He(){Ve.push(Be),Be=!1}function Ue(){let e=Ve.pop();Be=e===void 0?!0:e}function We(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=j;j=void 0;try{t()}finally{j=e}}}var Ge=0,Ke=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},qe=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!j||!Be||j===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==j)t=this.activeLink=new Ke(j,this),j.deps?(t.prevDep=j.depsTail,j.depsTail.nextDep=t,j.depsTail=t):j.deps=j.depsTail=t,Je(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=j.depsTail,t.nextDep=void 0,j.depsTail.nextDep=t,j.depsTail=t,j.deps===t&&(j.deps=e)}return t}trigger(e){this.version++,Ge++,this.notify(e)}notify(e){Me();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ne()}}};function Je(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Je(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Ye=new WeakMap,Xe=Symbol(``),Ze=Symbol(``),Qe=Symbol(``);function M(e,t,n){if(Be&&j){let t=Ye.get(e);t||Ye.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new qe),r.map=t,r.key=n),r.track()}}function $e(e,t,n,r,i,a){let o=Ye.get(e);if(!o){Ge++;return}let s=e=>{e&&e.trigger()};if(Me(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Qe||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Qe)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Xe)),f(e)&&s(o.get(Ze)));break;case`delete`:i||(s(o.get(Xe)),f(e)&&s(o.get(Ze)));break;case`set`:f(e)&&s(o.get(Xe));break}}Ne()}function et(e){let t=P(e);return t===e?t:(M(t,`iterate`,Qe),N(e)?t:t.map(Ht))}function tt(e){return M(e=P(e),`iterate`,Qe),e}function nt(e,t){return zt(e)?Ut(Rt(e)?Ht(t):t):Ht(t)}var rt={__proto__:null,[Symbol.iterator](){return it(this,Symbol.iterator,e=>nt(this,e))},concat(...e){return et(this).concat(...e.map(e=>d(e)?et(e):e))},entries(){return it(this,`entries`,e=>(e[1]=nt(this,e[1]),e))},every(e,t){return ot(this,`every`,e,t,void 0,arguments)},filter(e,t){return ot(this,`filter`,e,t,e=>e.map(e=>nt(this,e)),arguments)},find(e,t){return ot(this,`find`,e,t,e=>nt(this,e),arguments)},findIndex(e,t){return ot(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return ot(this,`findLast`,e,t,e=>nt(this,e),arguments)},findLastIndex(e,t){return ot(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return ot(this,`forEach`,e,t,void 0,arguments)},includes(...e){return ct(this,`includes`,e)},indexOf(...e){return ct(this,`indexOf`,e)},join(e){return et(this).join(e)},lastIndexOf(...e){return ct(this,`lastIndexOf`,e)},map(e,t){return ot(this,`map`,e,t,void 0,arguments)},pop(){return lt(this,`pop`)},push(...e){return lt(this,`push`,e)},reduce(e,...t){return st(this,`reduce`,e,t)},reduceRight(e,...t){return st(this,`reduceRight`,e,t)},shift(){return lt(this,`shift`)},some(e,t){return ot(this,`some`,e,t,void 0,arguments)},splice(...e){return lt(this,`splice`,e)},toReversed(){return et(this).toReversed()},toSorted(e){return et(this).toSorted(e)},toSpliced(...e){return et(this).toSpliced(...e)},unshift(...e){return lt(this,`unshift`,e)},values(){return it(this,`values`,e=>nt(this,e))}};function it(e,t,n){let r=tt(e),i=r[t]();return r!==e&&!N(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var at=Array.prototype;function ot(e,t,n,r,i,a){let o=tt(e),s=o!==e&&!N(e),c=o[t];if(c!==at[t]){let t=c.apply(e,a);return s?Ht(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,nt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function st(e,t,n,r){let i=tt(e),a=i!==e&&!N(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=nt(e,t)),n.call(this,t,nt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?nt(e,c):c}function ct(e,t,n){let r=P(e);M(r,`iterate`,Qe);let i=r[t](...n);return(i===-1||i===!1)&&Bt(n[0])?(n[0]=P(n[0]),r[t](...n)):i}function lt(e,t,n=[]){He(),Me();let r=P(e)[t].apply(e,n);return Ne(),Ue(),r}var ut=e(`__proto__,__v_isRef,__isVue`),dt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function ft(e){_(e)||(e=String(e));let t=P(this);return M(t,`has`,e),t.hasOwnProperty(e)}var pt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?jt:At:i?kt:Ot).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=rt[t]))return e;if(t===`hasOwnProperty`)return ft}let o=Reflect.get(e,t,F(e)?e:n);if((_(t)?dt.has(t):ut(t))||(r||M(e,`get`,t),i))return o;if(F(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?It(e):e}return v(o)?r?It(o):Pt(o):o}},mt=class extends pt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=zt(i);if(!N(n)&&!zt(n)&&(i=P(i),n=P(n)),!a&&F(i)&&!F(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,F(e)?e:r);return e===P(r)&&(o?D(n,i)&&$e(e,`set`,t,n,i):$e(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&$e(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!dt.has(t))&&M(e,`has`,t),n}ownKeys(e){return M(e,`iterate`,d(e)?`length`:Xe),Reflect.ownKeys(e)}},ht=class extends pt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},gt=new mt,_t=new ht,vt=new mt(!0),yt=e=>e,bt=e=>Reflect.getPrototypeOf(e);function xt(e,t,n){return function(...r){let i=this.__v_raw,a=P(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?yt:t?Ut:Ht;return!t&&M(a,`iterate`,l?Ze:Xe),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function St(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Ct(e,t){let n={get(n){let r=this.__v_raw,i=P(r),a=P(n);e||(D(n,a)&&M(i,`get`,n),M(i,`get`,a));let{has:o}=bt(i),s=t?yt:e?Ut:Ht;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&M(P(t),`iterate`,Xe),t.size},has(t){let n=this.__v_raw,r=P(n),i=P(t);return e||(D(t,i)&&M(r,`has`,t),M(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=P(a),s=t?yt:e?Ut:Ht;return!e&&M(o,`iterate`,Xe),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:St(`add`),set:St(`set`),delete:St(`delete`),clear:St(`clear`)}:{add(e){let n=P(this),r=bt(n),i=P(e),a=!t&&!N(e)&&!zt(e)?i:e;return r.has.call(n,a)||D(e,a)&&r.has.call(n,e)||D(i,a)&&r.has.call(n,i)||(n.add(a),$e(n,`add`,a,a)),this},set(e,n){!t&&!N(n)&&!zt(n)&&(n=P(n));let r=P(this),{has:i,get:a}=bt(r),o=i.call(r,e);o||=(e=P(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?D(n,s)&&$e(r,`set`,e,n,s):$e(r,`add`,e,n),this},delete(e){let t=P(this),{has:n,get:r}=bt(t),i=n.call(t,e);i||=(e=P(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&$e(t,`delete`,e,void 0,a),o},clear(){let e=P(this),t=e.size!==0,n=e.clear();return t&&$e(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=xt(r,e,t)}),n}function wt(e,t){let n=Ct(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var Tt={get:wt(!1,!1)},Et={get:wt(!1,!0)},Dt={get:wt(!0,!1)},Ot=new WeakMap,kt=new WeakMap,At=new WeakMap,jt=new WeakMap;function Mt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Nt(e){return e.__v_skip||!Object.isExtensible(e)?0:Mt(S(e))}function Pt(e){return zt(e)?e:Lt(e,!1,gt,Tt,Ot)}function Ft(e){return Lt(e,!1,vt,Et,kt)}function It(e){return Lt(e,!0,_t,Dt,At)}function Lt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=Nt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function Rt(e){return zt(e)?Rt(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function N(e){return!!(e&&e.__v_isShallow)}function Bt(e){return e?!!e.__v_raw:!1}function P(e){let t=e&&e.__v_raw;return t?P(t):e}function Vt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&O(e,`__v_skip`,!0),e}var Ht=e=>v(e)?Pt(e):e,Ut=e=>v(e)?It(e):e;function F(e){return e?e.__v_isRef===!0:!1}function Wt(e){return Gt(e,!1)}function Gt(e,t){return F(e)?e:new Kt(e,t)}var Kt=class{constructor(e,t){this.dep=new qe,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:P(e),this._value=t?e:Ht(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||N(e)||zt(e);e=n?e:P(e),D(e,t)&&(this._rawValue=e,this._value=n?e:Ht(e),this.dep.trigger())}};function I(e){return F(e)?e.value:e}var qt={get:(e,t,n)=>t===`__v_raw`?e:I(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return F(i)&&!F(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Jt(e){return Rt(e)?e:new Proxy(e,qt)}var Yt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new qe(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ge-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&j!==this)return je(this,!0),!0}get value(){let e=this.dep.track();return Le(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Xt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new Yt(r,i,n)}var Zt={},Qt=new WeakMap,$t=void 0;function en(e,t=!1,n=$t){if(n){let t=Qt.get(n);t||Qt.set(n,t=[]),t.push(e)}}function tn(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:N(e)||o===!1||o===0?nn(e,1):nn(e),m,g,_,v,y=!1,b=!1;if(F(e)?(g=()=>e.value,y=N(e)):Rt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Rt(e)||N(e)),g=()=>e.map(e=>{if(F(e))return e.value;if(Rt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){He();try{_()}finally{Ue()}}let t=$t;$t=m;try{return f?f(e,3,[v]):e(v)}finally{$t=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>nn(e(),t)}let x=Te(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill(Zt):Zt,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let e=m.run();if(o||y||(b?e.some((e,t)=>D(e,C[t])):D(e,C))){_&&_();let t=$t;$t=m;try{let t=[e,C===Zt?void 0:b&&C[0]===Zt?[]:C,v];C=e,f?f(n,3,t):n(...t)}finally{$t=t}}}else m.run()};return u&&u(w),m=new De(g),m.scheduler=l?()=>l(w,!1):w,v=e=>en(e,!1,m),_=m.onStop=()=>{let e=Qt.get(m);if(e){if(f)f(e,4);else for(let t of e)t();Qt.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function nn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,F(e))nn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)nn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{nn(e,t,n)});else if(C(e)){for(let r in e)nn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&nn(e[r],t,n)}return e}function rn(e,t,n,r){try{return r?e(...r):e()}catch(e){on(e,t,n)}}function an(e,t,n,r){if(h(e)){let i=rn(e,t,n,r);return i&&y(i)&&i.catch(e=>{on(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(an(e[a],t,n,r));return i}}function on(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){He(),rn(o,null,10,[e,i,a]),Ue();return}}sn(e,r,a,i,s)}function sn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var L=[],cn=-1,ln=[],un=null,dn=0,fn=Promise.resolve(),pn=null;function mn(e){let t=pn||fn;return e?t.then(this?e.bind(this):e):t}function hn(e){let t=cn+1,n=L.length;for(;t<n;){let r=t+n>>>1,i=L[r],a=xn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function gn(e){if(!(e.flags&1)){let t=xn(e),n=L[L.length-1];!n||!(e.flags&2)&&t>=xn(n)?L.push(e):L.splice(hn(t),0,e),e.flags|=1,_n()}}function _n(){pn||=fn.then(Sn)}function vn(e){d(e)?ln.push(...e):un&&e.id===-1?un.splice(dn+1,0,e):e.flags&1||(ln.push(e),e.flags|=1),_n()}function yn(e,t,n=cn+1){for(;n<L.length;n++){let t=L[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;L.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function bn(e){if(ln.length){let e=[...new Set(ln)].sort((e,t)=>xn(e)-xn(t));if(ln.length=0,un){un.push(...e);return}for(un=e,dn=0;dn<un.length;dn++){let e=un[dn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}un=null,dn=0}}var xn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Sn(e){try{for(cn=0;cn<L.length;cn++){let e=L[cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),rn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;cn<L.length;cn++){let e=L[cn];e&&(e.flags&=-2)}cn=-1,L.length=0,bn(e),pn=null,(L.length||ln.length)&&Sn(e)}}var Cn=null,wn=null;function Tn(e){let t=Cn;return Cn=e,wn=e&&e.type.__scopeId||null,t}function En(e,t=Cn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Oi(-1);let i=Tn(t),a;try{a=e(...n)}finally{Tn(i),r._d&&Oi(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Dn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(He(),an(c,n,8,[e.el,s,e,t]),Ue())}}function On(e,t){if(K){let n=K.provides,r=K.parent&&K.parent.provides;r===n&&(n=K.provides=Object.create(r)),n[e]=t}}function kn(e,t,n=!1){let r=Ji();if(r||Nr){let i=Nr?Nr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var An=Symbol.for(`v-scx`),jn=()=>kn(An);function Mn(e,t,n){return Nn(e,t,n)}function Nn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(ea){if(c===`sync`){let e=jn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=K;u.call=(e,t,n)=>an(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{z(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():gn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=tn(e,n,u);return ea&&(f?f.push(h):d&&h()),h}function Pn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Fn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=Zi(this),s=Nn(i,a.bind(r),n);return o(),s}function Fn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var In=Symbol(`_vte`),Ln=e=>e.__isTeleport,Rn=Symbol(`_leaveCb`);function zn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,zn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Bn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function Vn(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Hn=new WeakMap;function Un(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>Un(e,n&&(d(n)?n[t]:n),r,a,o));return}if(Gn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Un(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?la(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=P(v),b=v===t?i:e=>Vn(_,e)?!1:u(y,e),x=(e,t)=>!(t&&Vn(_,t));if(m!=null&&m!==p){if(Wn(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(F(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))rn(p,f,12,[l,_]);else{let t=g(p),n=F(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Hn.delete(e)};t.id=-1,Hn.set(e,t),z(t,r)}else Wn(e),i()}}}function Wn(e){let t=Hn.get(e);t&&(t.flags|=8,Hn.delete(e))}le().requestIdleCallback,le().cancelIdleCallback;var Gn=e=>!!e.type.__asyncLoader,Kn=e=>e.type.__isKeepAlive;function qn(e,t){Yn(e,`a`,t)}function Jn(e,t){Yn(e,`da`,t)}function Yn(e,t,n=K){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Zn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Kn(e.parent.vnode)&&Xn(r,t,n,e),e=e.parent}}function Xn(e,t,n,r){let i=Zn(t,e,r,!0);ir(()=>{c(r[t],i)},n)}function Zn(e,t,n=K,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{He();let i=Zi(n),a=an(t,n,e,r);return i(),Ue(),a};return r?i.unshift(a):i.push(a),a}}var Qn=e=>(t,n=K)=>{(!ea||e===`sp`)&&Zn(e,(...e)=>t(...e),n)},$n=Qn(`bm`),er=Qn(`m`),tr=Qn(`bu`),nr=Qn(`u`),rr=Qn(`bum`),ir=Qn(`um`),ar=Qn(`sp`),or=Qn(`rtg`),sr=Qn(`rtc`);function cr(e,t=K){Zn(`ec`,e,t)}var lr=Symbol.for(`v-ndc`);function ur(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Rt(e),r=!1,s=!1;n&&(r=!N(e),s=zt(e),e=tt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Ut(Ht(e[n])):Ht(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var dr=e=>e?$i(e)?la(e):dr(e.parent):null,fr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>dr(e.parent),$root:e=>dr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>xr(e),$forceUpdate:e=>e.f||=()=>{gn(e.update)},$nextTick:e=>e.n||=mn.bind(e.proxy),$watch:e=>Pn.bind(e)}),pr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),mr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(pr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else gr&&(s[n]=0)}let d=fr[n],f,p;if(d)return n===`$attrs`&&M(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return pr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||pr(n,c)||u(o,c)||u(i,c)||u(fr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function hr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var gr=!0;function _r(e){let t=xr(e),n=e.proxy,i=e.ctx;gr=!1,t.beforeCreate&&yr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:ee,renderTracked:te,renderTriggered:ne,errorCaptured:T,serverPrefetch:re,expose:E,inheritAttrs:ie,components:ae,directives:D,filters:oe}=t;if(u&&vr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Pt(t))}if(gr=!0,o)for(let e in o){let t=o[e],a=da({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)br(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{On(t,e[t])})}f&&yr(f,e,`c`);function O(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(O($n,p),O(er,m),O(tr,g),O(nr,_),O(qn,y),O(Jn,b),O(cr,T),O(sr,te),O(or,ne),O(rr,S),O(ir,w),O(ar,re),d(E))if(E.length){let t=e.exposed||={};E.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};ee&&e.render===r&&(e.render=ee),ie!=null&&(e.inheritAttrs=ie),ae&&(e.components=ae),D&&(e.directives=D),re&&Bn(e)}function vr(e,t,n=r){d(e)&&(e=Er(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?kn(r.from||n,r.default,!0):kn(r.from||n):kn(r),F(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function yr(e,t,n){an(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function br(e,t,n,r){let i=r.includes(`.`)?Fn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&Mn(i,n)}else if(h(e))Mn(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>br(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&Mn(i,r,e)}}function xr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Sr(c,e,o,!0)),Sr(c,t,o)),v(t)&&a.set(t,c),c}function Sr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Sr(e,a,n,!0),i&&i.forEach(t=>Sr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Cr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Cr={data:wr,props:Or,emits:Or,methods:Dr,computed:Dr,beforeCreate:R,created:R,beforeMount:R,mounted:R,beforeUpdate:R,updated:R,beforeDestroy:R,beforeUnmount:R,destroyed:R,unmounted:R,activated:R,deactivated:R,errorCaptured:R,serverPrefetch:R,components:Dr,directives:Dr,watch:kr,provide:wr,inject:Tr};function wr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Tr(e,t){return Dr(Er(e),Er(t))}function Er(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function R(e,t){return e?[...new Set([].concat(e,t))]:t}function Dr(e,t){return e?s(Object.create(null),e,t):t}function Or(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),hr(e),hr(t??{})):t}function kr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=R(e[r],t[r]);return n}function Ar(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var jr=0;function Mr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Ar(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:jr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:fa,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||G(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,la(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(an(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Nr;Nr=l;try{return e()}finally{Nr=t}}};return l}}var Nr=null,Pr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${T(t)}Modifiers`]||e[`${E(t)}Modifiers`];function Fr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Pr(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(se)));let c,l=i[c=ae(n)]||i[c=ae(T(n))];!l&&o&&(l=i[c=ae(E(n))]),l&&an(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,an(u,e,6,a)}}var Ir=new WeakMap;function Lr(e,t,n=!1){let r=n?Ir:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Lr(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Rr(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,E(t))||u(e,t))}function zr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Tn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Bi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Bi(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Br(c)}}catch(t){Ti.length=0,on(t,e,1),v=G(Ci)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=Vr(y,a)),b=Li(b,y,!1,!0))}return n.dirs&&(b=Li(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&zn(b,n.transition),v=b,Tn(_),v}var Br=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},Vr=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Hr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ur(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Wr(o,r,n)&&!Rr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ur(r,o,l):!0:!!o;return!1}function Ur(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Wr(t,e,a)&&!Rr(n,a))return!0}return!1}function Wr(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!be(r,i):r!==i}function Gr({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Kr={},qr=()=>Object.create(Kr),Jr=e=>Object.getPrototypeOf(e)===Kr;function Yr(e,t,n,r=!1){let i={},a=qr();e.propsDefaults=Object.create(null),Zr(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Ft(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Xr(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=P(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Rr(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=T(o);i[t]=Qr(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{Zr(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=E(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Qr(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&$e(e.attrs,`set`,``)}function Zr(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(ee(t))continue;let l=n[t],d;a&&u(a,d=T(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Rr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=P(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=Qr(a,n,s,i[s],e,!u(i,s))}}return s}function Qr(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Zi(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===E(n))&&(r=!0))}return r}var $r=new WeakMap;function ei(e,r,i=!1){let a=i?$r:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=ei(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=T(c[e]);ti(n)&&(l[n]=t)}else if(c)for(let e in c){let t=T(e);if(ti(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function ti(e){return e[0]!==`$`&&!ee(e)}var ni=e=>e===`_`||e===`_ctx`||e===`$stable`,ri=e=>d(e)?e.map(Bi):[Bi(e)],ii=(e,t,n)=>{if(t._n)return t;let r=En((...e)=>ri(t(...e)),n);return r._c=!1,r},ai=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ni(n))continue;let i=e[n];if(h(i))t[n]=ii(n,i,r);else if(i!=null){let e=ri(i);t[n]=()=>e}}},oi=(e,t)=>{let n=ri(t);e.slots.default=()=>n},si=(e,t,n)=>{for(let r in t)(n||!ni(r))&&(e[r]=t[r])},ci=(e,t,n)=>{let r=e.slots=qr();if(e.vnode.shapeFlag&32){let e=t._;e?(si(r,t,n),n&&O(r,`_`,e,!0)):ai(t,r)}else t&&oi(e,t)},li=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:si(a,n,r):(o=!n.$stable,ai(n,a)),s=n}else n&&(oi(e,n),s={default:1});if(o)for(let e in a)!ni(e)&&s[e]==null&&delete a[e]},z=xi;function ui(e){return di(e)}function di(e,i){let a=le();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Mi(e,t)&&(r=be(e),he(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Si:y(e,t,n,r);break;case Ci:b(e,t,n,r);break;case wi:e??x(t,n,r,o);break;case B:ae(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?D(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Se)}u!=null&&i?Un(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Un(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),re(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&T(e.children,d,null,r,i,fi(e,a),s,u),_&&Dn(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!ee(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Wi(f,r,e)}_&&Dn(e,null,r,`beforeMount`);let v=mi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&z(()=>{try{f&&Wi(f,r,e),v&&g.enter(d),_&&Dn(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||bi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},T=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?Vi(e[l]):Bi(e[l]),t,n,r,i,a,o,s)},re=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&pi(r,!1),(g=h.onVnodeBeforeUpdate)&&Wi(g,r,n,e),f&&Dn(n,e,r,`beforeUpdate`),r&&pi(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?E(e.dynamicChildren,d,l,r,i,fi(n,a),o):s||de(e,n,l,null,r,i,fi(n,a),o,!1),u>0){if(u&16)ie(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&ie(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&z(()=>{g&&Wi(g,r,n,e),f&&Dn(n,e,r,`updated`)},i)},E=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===B||!Mi(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},ie=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!ee(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(ee(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ae=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),T(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(E(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&hi(e,t,!0)):de(e,t,n,f,i,a,s,c,l)},D=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):O(t,n,r,i,a,o,c):se(e,t,c)},O=(e,t,n,r,i,a,o)=>{let s=e.component=qi(e,r,i);if(Kn(e)&&(s.ctx.renderer=Se),ta(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ce,o),!e.el){let r=s.subTree=G(Ci);b(null,r,t,n),e.placeholder=r.el}}else ce(s,e,t,n,i,a,o)},se=(e,t,n)=>{let r=t.component=e.component;if(Hr(e,t,n))if(r.asyncDep&&!r.asyncResolved){ue(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},ce=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=_i(e);if(n){t&&(t.el=c.el,ue(e,t,o)),n.asyncDep.then(()=>{z(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;pi(e,!1),t?(t.el=c.el,ue(e,t,o)):t=c,n&&oe(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Wi(d,s,t,c),pi(e,!0);let f=zr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),be(p),e,i,a),t.el=f.el,u===null&&Gr(e,f.el),r&&z(r,i),(d=t.props&&t.props.onVnodeUpdated)&&z(()=>Wi(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Gn(t);if(pi(e,!1),l&&oe(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Wi(o,d,t),pi(e,!0),s&&A){let t=()=>{e.subTree=zr(e),A(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=zr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&z(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;z(()=>Wi(o,d,e),i)}(t.shapeFlag&256||d&&Gn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&z(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new De(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>gn(u),pi(e,!0),l()},ue=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Xr(e,t.props,r,n),li(e,t.children,n),He(),yn(e),Ue()},de=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){pe(l,d,n,r,i,a,o,s,c);return}else if(f&256){fe(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ye(l,i,a),d!==l&&p(n,d)):u&16?m&16?pe(l,d,n,r,i,a,o,s,c):ye(l,i,a,!0):(u&8&&p(n,``),m&16&&T(d,n,r,i,a,o,s,c))},fe=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?Vi(t[p]):Bi(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ye(e,a,o,!0,!1,f):T(t,r,i,a,o,s,c,l,f)},pe=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?Vi(t[u]):Bi(t[u]);if(Mi(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?Vi(t[p]):Bi(t[p]);if(Mi(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Vi(t[u]):Bi(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)he(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Vi(t[u]):Bi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){he(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Mi(n,t[_])){i=_;break}i===void 0?he(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?gi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||yi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?me(n,r,p,2):_--)}}},me=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){me(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,Se);return}if(c===B){o(a,t,n);for(let e=0;e<u.length;e++)me(u[e],t,n,r);o(e.anchor,t,n);return}if(c===wi){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.beforeEnter(a),o(a,t,n),z(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[Rn](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},he=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(He(),Un(s,null,n,e,!0),Ue()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Gn(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Wi(_,t,e),u&6)ve(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Dn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Se,r):l&&!l.hasOnce&&(a!==B||d>0&&d&64)?ye(l,t,n,!1,!0):(a===B&&d&384||!i&&u&16)&&ye(c,t,n),r&&ge(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&z(()=>{_&&Wi(_,t,e),h&&Dn(e,null,t,`unmounted`),v&&(e.el=null)},n)},ge=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===B){_e(n,r);return}if(t===wi){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},_e=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ve=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;vi(c),vi(l),r&&oe(r),i.stop(),a&&(a.flags|=8,he(o,e,t,n)),s&&z(s,t),z(()=>{e.isUnmounted=!0},t)},ye=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)he(e[o],t,n,r,i)},be=e=>{if(e.shapeFlag&6)return be(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[In];return n?h(n):t},xe=!1,k=(e,t,n)=>{let r;e==null?t._vnode&&(he(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,xe||=(xe=!0,yn(r),bn(),!1)},Se={p:v,um:he,m:me,r:ge,mt:O,mc:T,pc:de,pbc:E,n:be,o:e},Ce,A;return i&&([Ce,A]=i(Se)),{render:k,hydrate:Ce,createApp:Mr(k,Ce)}}function fi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function pi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function mi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function hi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Vi(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&hi(t,a)),a.type===Si&&(a.patchFlag===-1&&(a=i[e]=Vi(a)),a.el=t.el),a.type===Ci&&!a.el&&(a.el=t.el)}}function gi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function _i(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:_i(t)}function vi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function yi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?yi(t.subTree):null}var bi=e=>e.__isSuspense;function xi(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):vn(e)}var B=Symbol.for(`v-fgt`),Si=Symbol.for(`v-txt`),Ci=Symbol.for(`v-cmt`),wi=Symbol.for(`v-stc`),Ti=[],V=null;function H(e=!1){Ti.push(V=e?null:[])}function Ei(){Ti.pop(),V=Ti[Ti.length-1]||null}var Di=1;function Oi(e,t=!1){Di+=e,e<0&&V&&t&&(V.hasOnce=!0)}function ki(e){return e.dynamicChildren=Di>0?V||n:null,Ei(),Di>0&&V&&V.push(e),e}function U(e,t,n,r,i,a){return ki(W(e,t,n,r,i,a,!0))}function Ai(e,t,n,r,i){return ki(G(e,t,n,r,i,!0))}function ji(e){return e?e.__v_isVNode===!0:!1}function Mi(e,t){return e.type===t.type&&e.key===t.key}var Ni=({key:e})=>e??null,Pi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||F(e)||h(e)?{i:Cn,r:e,k:t,f:!!n}:e);function W(e,t=null,n=null,r=0,i=null,a=e===B?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ni(t),ref:t&&Pi(t),scopeId:wn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Cn};return s?(Hi(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Di>0&&!o&&V&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&V.push(c),c}var G=Fi;function Fi(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===lr)&&(e=Ci),ji(e)){let r=Li(e,t,!0);return n&&Hi(r,n),Di>0&&!a&&V&&(r.shapeFlag&6?V[V.indexOf(e)]=r:V.push(r)),r.patchFlag=-2,r}if(ua(e)&&(e=e.__vccOpts),t){t=Ii(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=he(e)),v(n)&&(Bt(n)&&!d(n)&&(n=s({},n)),t.style=ue(n))}let o=g(e)?1:bi(e)?128:Ln(e)?64:v(e)?4:h(e)?2:0;return W(e,t,n,r,i,o,a,!0)}function Ii(e){return e?Bt(e)||Jr(e)?s({},e):e:null}function Li(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Ui(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ni(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Pi(t)):[a,Pi(t)]:Pi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==B?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Li(e.ssContent),ssFallback:e.ssFallback&&Li(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&zn(u,c.clone(u)),u}function Ri(e=` `,t=0){return G(Si,null,e,t)}function zi(e=``,t=!1){return t?(H(),Ai(Ci,null,e)):G(Ci,null,e)}function Bi(e){return e==null||typeof e==`boolean`?G(Ci):d(e)?G(B,null,e.slice()):ji(e)?Vi(e):G(Si,null,String(e))}function Vi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Li(e)}function Hi(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Hi(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!Jr(t)?t._ctx=Cn:r===3&&Cn&&(Cn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:Cn},n=32):(t=String(t),r&64?(n=16,t=[Ri(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ui(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=he([t.class,r.class]));else if(e===`style`)t.style=ue([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Wi(e,t,n,r=null){an(e,t,7,[n,r])}var Gi=Ar(),Ki=0;function qi(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||Gi,o={uid:Ki++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new we(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ei(i,a),emitsOptions:Lr(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Fr.bind(null,o),e.ce&&e.ce(o),o}var K=null,Ji=()=>K||Cn,Yi,Xi;{let e=le(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Yi=t(`__VUE_INSTANCE_SETTERS__`,e=>K=e),Xi=t(`__VUE_SSR_SETTERS__`,e=>ea=e)}var Zi=e=>{let t=K;return Yi(e),e.scope.on(),()=>{e.scope.off(),Yi(t)}},Qi=()=>{K&&K.scope.off(),Yi(null)};function $i(e){return e.vnode.shapeFlag&4}var ea=!1;function ta(e,t=!1,n=!1){t&&Xi(t);let{props:r,children:i}=e.vnode,a=$i(e);Yr(e,r,a,t),ci(e,i,n||t);let o=a?na(e,t):void 0;return t&&Xi(!1),o}function na(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,mr);let{setup:r}=n;if(r){He();let n=e.setupContext=r.length>1?ca(e):null,i=Zi(e),a=rn(r,e,0,[e.props,n]),o=y(a);if(Ue(),i(),(o||e.sp)&&!Gn(e)&&Bn(e),o){if(a.then(Qi,Qi),t)return a.then(n=>{ra(e,n,t)}).catch(t=>{on(t,e,0)});e.asyncDep=a}else ra(e,a,t)}else oa(e,t)}function ra(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Jt(t)),oa(e,n)}var ia,aa;function oa(e,t,n){let i=e.type;if(!e.render){if(!t&&ia&&!i.render){let t=i.template||xr(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=ia(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,aa&&aa(e)}{let t=Zi(e);He();try{_r(e)}finally{Ue(),t()}}}var sa={get(e,t){return M(e,`get`,``),e[t]}};function ca(e){return{attrs:new Proxy(e.attrs,sa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function la(e){return e.exposed?e.exposeProxy||=new Proxy(Jt(Vt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in fr)return fr[n](e)},has(e,t){return t in e||t in fr}}):e.proxy}function ua(e){return h(e)&&`__vccOpts`in e}var da=(e,t)=>Xt(e,t,ea),fa=`3.5.32`,pa=void 0,ma=typeof window<`u`&&window.trustedTypes;if(ma)try{pa=ma.createPolicy(`vue`,{createHTML:e=>e})}catch{}var ha=pa?e=>pa.createHTML(e):e=>e,ga=`http://www.w3.org/2000/svg`,_a=`http://www.w3.org/1998/Math/MathML`,va=typeof document<`u`?document:null,ya=va&&va.createElement(`template`),ba={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?va.createElementNS(ga,e):t===`mathml`?va.createElementNS(_a,e):n?va.createElement(e,{is:n}):va.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>va.createTextNode(e),createComment:e=>va.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>va.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{ya.innerHTML=ha(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=ya.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},xa=Symbol(`_vtc`);function Sa(e,t,n){let r=e[xa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Ca=Symbol(`_vod`),wa=Symbol(`_vsh`),Ta=Symbol(``),Ea=/(?:^|;)\s*display\s*:/;function Da(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??ka(r,t,``)}else for(let e in t)n[e]??ka(r,e,``);for(let e in n)e===`display`&&(a=!0),ka(r,e,n[e])}else if(i){if(t!==n){let e=r[Ta];e&&(n+=`;`+e),r.cssText=n,a=Ea.test(n)}}else t&&e.removeAttribute(`style`);Ca in e&&(e[Ca]=a?r.display:``,e[wa]&&(r.display=`none`))}var Oa=/\s*!important$/;function ka(e,t,n){if(d(n))n.forEach(n=>ka(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Ma(e,t);Oa.test(n)?e.setProperty(E(r),n.replace(Oa,``),`important`):e[r]=n}}var Aa=[`Webkit`,`Moz`,`ms`],ja={};function Ma(e,t){let n=ja[t];if(n)return n;let r=T(t);if(r!==`filter`&&r in e)return ja[t]=r;r=ie(r);for(let n=0;n<Aa.length;n++){let i=Aa[n]+r;if(i in e)return ja[t]=i}return t}var Na=`http://www.w3.org/1999/xlink`;function Pa(e,t,n,r,i,a=_e(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Na,t.slice(6,t.length)):e.setAttributeNS(Na,t,n):n==null||a&&!ve(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Fa(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?ha(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ve(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Ia(e,t,n,r){e.addEventListener(t,n,r)}function La(e,t,n,r){e.removeEventListener(t,n,r)}var Ra=Symbol(`_vei`);function za(e,t,n,r,i=null){let a=e[Ra]||(e[Ra]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Va(t);r?Ia(e,n,a[t]=Ga(r,i),s):o&&(La(e,n,o,s),a[t]=void 0)}}var Ba=/(?:Once|Passive|Capture)$/;function Va(e){let t;if(Ba.test(e)){t={};let n;for(;n=e.match(Ba);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):E(e.slice(2)),t]}var Ha=0,Ua=Promise.resolve(),Wa=()=>Ha||=(Ua.then(()=>Ha=0),Date.now());function Ga(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;an(Ka(e,n.value),t,5,[e])};return n.value=e,n.attached=Wa(),n}function Ka(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var qa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ja=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Sa(e,r,c):t===`style`?Da(e,n,r):a(t)?o(t)||za(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Ya(e,t,r,c))?(Fa(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Pa(e,t,r,c,s,t!==`value`)):e._isVueCE&&(Xa(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Fa(e,T(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Pa(e,t,r,c))};function Ya(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&qa(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return qa(t)&&g(n)?!1:t in e}function Xa(e,t){let n=e._def.props;if(!n)return!1;let r=T(t);return Array.isArray(n)?n.some(e=>T(e)===r):Object.keys(n).some(e=>T(e)===r)}var Za=s({patchProp:Ja},ba),Qa;function $a(){return Qa||=ui(Za)}var eo=((...e)=>{let t=$a().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=no(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,to(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function to(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function no(e){return g(e)?document.querySelector(e):e}var ro=`<header>
  <div class="logo">
    <div class="logo-badge">GZ</div>
    <div class="logo-name">故障注入平台</div>
  </div>

  <div class="header-project" aria-label="当前项目">
    <div class="header-project__copy">
      <span class="header-project__label">当前项目</span>
      <strong class="header-project__name">飞控系统仿真项目</strong>
    </div>
    <span class="header-project__favorite">☆</span>
    <span class="header-project__state">已保存</span>
  </div>

  <div class="stepbar">
    <div class="step-item active" data-s="1" id="s1">
      <div class="step-pill">
        <div class="step-num" id="sn1">1</div>
        <div class="step-lbl">系统建模</div>
      </div>
    </div>
    <div class="step-arrow"></div>
    <div class="step-item" data-s="2" id="s2">
      <div class="step-pill">
        <div class="step-num" id="sn2">2</div>
        <div class="step-lbl">故障注入</div>
      </div>
    </div>
    <div class="step-arrow"></div>
    <div class="step-item" data-s="3" id="s3">
      <div class="step-pill">
        <div class="step-num" id="sn3">3</div>
        <div class="step-lbl">仿真分析</div>
      </div>
    </div>
  </div>

  <div class="toolbar">
    <button class="tbtn tbtn-imp-sys" onclick="doImportSys()" id="btn-imp-sys">导入系统模型</button>
    <button class="tbtn tbtn-new-sys" onclick="doCreateBlankWorkspace()" id="btn-new-sys">新建空白模型</button>
    <button class="tbtn tbtn-imp-flt tbtn-disabled" onclick="doImportFault()" id="btn-imp-flt">注入故障</button>
    <div class="tbtn-divider"></div>
    <button class="tbtn tbtn-reset-sys" onclick="doResetWorkspace()" id="btn-reset-sys">重置画布</button>
    <button class="tbtn tbtn-save-sys tbtn-disabled" onclick="doSaveSys()" id="btn-save-sys">保存系统模型</button>
    <button class="tbtn tbtn-save-res tbtn-disabled" onclick="doSaveRes()" id="btn-save-res">保存仿真结果</button>
  </div>
</header>
`,io=[`innerHTML`],ao={__name:`WorkbenchHeader`,setup(e){return(e,t)=>(H(),U(`div`,{class:`gz-shell-fragment`,"data-testid":`header-bar`,innerHTML:I(ro)},null,8,io))}},oo=`<aside class="lpanel">
  <div class="lscroll">
    <div class="lgroup-head lgroup-head--system" onclick="toggleGroup('g1')">
      <span class="lgroup-icon">系</span>
      <span>系统建模组件</span>
      <span class="lgroup-arrow open" id="arr-g1">&#9654;</span>
    </div>
    <div class="lgroup-body" id="g1">
      <div class="citem citem-draggable" draggable="true" data-component="signal_source">
        <span class="citem-icon-badge citem-icon-badge--source">S</span>
        <span class="citem-label">信号源</span>
      </div>
      <div class="citem citem-draggable" draggable="true" data-component="flow_block" title="统一输入输出的数据类型和格式">
        <span class="citem-icon-badge citem-icon-badge--flow">F</span>
        <span class="citem-label">信号适配块</span>
      </div>
      <div class="citem citem-draggable" draggable="true" data-component="gain_block" title="对输入信号做比例缩放">
        <span class="citem-icon-badge citem-icon-badge--gain">&times;</span>
        <span class="citem-label">增益块</span>
      </div>
      <div class="citem citem-draggable" draggable="true" data-component="sum_block" title="显式汇入多路输入并进行求和">
        <span class="citem-icon-badge citem-icon-badge--sum">+</span>
        <span class="citem-label">求和块</span>
      </div>
      <div class="citem citem-draggable" draggable="true" data-component="mux_block" title="将多路输入打包为向量输出">
        <span class="citem-icon-badge citem-icon-badge--mux">M</span>
        <span class="citem-label">Mux 块</span>
      </div>
      <div class="citem citem-draggable" draggable="true" data-component="simulation_block">
        <span class="citem-icon-badge citem-icon-badge--simulation">P</span>
        <span class="citem-label">仿真块</span>
      </div>
      <div class="citem citem-draggable" draggable="true" data-component="subsystem_block" title="双击进入子系统画布">
        <span class="citem-icon-badge citem-icon-badge--subsystem">子</span>
        <span class="citem-label">子系统块</span>
      </div>
      <div class="citem citem-draggable" draggable="true" data-component="middle_var_assign">
        <span class="citem-icon-badge citem-icon-badge--middle">中</span>
        <span class="citem-label">中间变量赋值块</span>
      </div>
    </div>

    <div class="lgroup-head lgroup-head--fault" onclick="toggleGroup('g2')">
      <span class="lgroup-icon">故</span>
      <span>故障注入组件</span>
      <span class="lgroup-arrow open" id="arr-g2">&#9654;</span>
    </div>
    <div class="lgroup-body" id="g2">
      <div class="citem citem-fault citem-draggable" draggable="true" data-component="fault_bias">
        <span class="citem-icon-badge citem-icon-badge--fault">B</span>
        <span class="citem-label">偏置叠加块</span>
      </div>
      <div class="citem citem-fault citem-draggable" draggable="true" data-component="fault_noise">
        <span class="citem-icon-badge citem-icon-badge--noise">N</span>
        <span class="citem-label">噪声注入块</span>
      </div>
    </div>

    <div class="lgroup-head lgroup-head--instrument" onclick="toggleGroup('g3')">
      <span class="lgroup-icon">测</span>
      <span>测量仪器组件</span>
      <span class="lgroup-arrow open" id="arr-g3">&#9654;</span>
    </div>
    <div class="lgroup-body" id="g3">
      <div class="citem citem-scope citem-draggable" draggable="true" data-component="instrument_scope" title="接入信号后可双击查看波形">
        <span class="citem-icon-badge citem-icon-badge--scope">波</span>
        <span class="citem-label">示波器</span>
      </div>
      <div class="citem citem-draggable" draggable="true" data-component="instrument_spectrum" style="color:var(--teal);border:1px solid #a5f3fc;background:#ecfeff;">
        <span class="citem-icon-badge citem-icon-badge--spectrum">谱</span>
        <span class="citem-label">频谱分析仪</span>
      </div>
      <div class="citem citem-draggable" draggable="true" data-component="instrument_logger" style="color:var(--blue);border:1px solid #93c5fd;background:#eff6ff;">
        <span class="citem-icon-badge citem-icon-badge--logger">记</span>
        <span class="citem-label">数据记录仪</span>
      </div>
      <div class="citem citem-draggable" draggable="true" data-component="instrument_signal_flow" style="color:#174ea6;border:1px solid #bfdbfe;background:#f8fbff;">
        <span class="citem-icon-badge citem-icon-badge--logger">流</span>
        <span class="citem-label">多信号流图</span>
      </div>
    </div>

    <div class="lgroup-head lgroup-head--link" onclick="toggleGroup('g4')">
      <span class="lgroup-icon">线</span>
      <span>连接线组件</span>
      <span class="lgroup-arrow open" id="arr-g4">&#9654;</span>
    </div>
    <div class="lgroup-body" id="g4">
      <div class="citem citem-line-tool active" data-line-type="normal" onclick="setConnectionTool('normal')" style="color:var(--text2);">
        <div style="width:18px;height:2px;background:var(--border-dark);border-radius:1px;flex-shrink:0;"></div>
        普通连接线
      </div>
      <div class="citem citem-can citem-line-tool" data-line-type="can" onclick="setConnectionTool('can')">
        <div style="width:18px;height:3px;background:var(--purple);border-radius:1px;flex-shrink:0;border:1px solid var(--purple);"></div>
        CAN 总线
      </div>
    </div>
  </div>
</aside>
`,so=[`innerHTML`],co={__name:`LeftPalette`,setup(e){return(e,t)=>(H(),U(`div`,{class:`gz-shell-fragment`,"data-testid":`left-palette`,innerHTML:I(oo)},null,8,so))}},lo=`<div class="canvas-wrap" id="cw">
  <div class="canvas-grid"></div>

  <div class="canvas-chrome" aria-label="画布工具栏">
    <div class="canvas-sim-dock" aria-label="仿真任务控制">
      <div class="simbar" id="simbar">
        <div class="simbar-title">
          <span class="simbar-title__kicker">任务控制</span>
          <span class="simbar-title__name">仿真参数</span>
        </div>
        <div class="simbar-params">
          <div class="sim-field">
            <span class="sim-field-lbl">数据集名称</span>
            <input class="sim-field-inp" id="sim-name" value="test" style="width:68px;text-align:left;">
          </div>
          <div class="sim-field">
            <span class="sim-field-lbl">仿真时长</span>
            <input class="sim-field-inp" id="sim-dur" value="1000" type="number" min="1">
          </div>
          <div class="sim-field" style="border-right:none;margin-right:0;">
            <span class="sim-field-lbl">仿真步长</span>
            <input class="sim-field-inp" id="sim-step" value="0.1" type="number" min="0.001" step="0.01">
          </div>
        </div>
        <div class="simbar-rt">
          <span class="simbar-rt-lbl">实时模式</span>
          <label class="toggle-wrap">
            <input type="checkbox" id="sim-rt" onchange="onRtToggle(this)">
            <div class="toggle-track"></div>
            <div class="toggle-thumb"></div>
          </label>
        </div>
        <div class="simbar-btns">
          <button class="sim-btn sim-btn-disabled" id="sbtn-init" onclick="simInit()" title="初始化">
            <span class="sim-btn-icon">&#8635;</span>
            <span class="sim-btn-lbl">初始化</span>
          </button>
          <button class="sim-btn sim-btn-run sim-btn-disabled" id="sbtn-run" onclick="simRun()" title="运行">
            <span class="sim-btn-icon" id="run-icon">&#9654;</span>
            <span class="sim-btn-lbl" id="run-lbl">运行</span>
          </button>
          <button class="sim-btn sim-btn-disabled" id="sbtn-step" onclick="simStep()" title="步进">
            <span class="sim-btn-icon">&#9197;</span>
            <span class="sim-btn-lbl">步进</span>
          </button>
          <button class="sim-btn sim-btn-disabled" id="sbtn-pause" onclick="simPause()" title="暂停">
            <span class="sim-btn-icon">&#10074;&#10074;</span>
            <span class="sim-btn-lbl" id="pause-lbl">暂停</span>
          </button>
          <button class="sim-btn sim-btn-stop sim-btn-disabled" id="sbtn-stop" onclick="simStop()" title="终止">
            <span class="sim-btn-icon">&#9632;</span>
            <span class="sim-btn-lbl">终止</span>
          </button>
        </div>
      </div>
    </div>
    <div class="canvas-tabs">
      <button type="button" class="canvas-tab is-active" data-canvas-view="canvas">画布</button>
      <button type="button" class="canvas-tab" data-canvas-view="components">组件视图</button>
      <button type="button" class="canvas-tab" data-canvas-view="dataflow">多信号流图</button>
      <button type="button" class="canvas-tab" data-canvas-view="dmatrix">D矩阵</button>
    </div>
    <div class="canvas-tools">
      <button type="button" class="canvas-tool is-active" title="选择" data-canvas-command="select">⌖</button>
      <button type="button" class="canvas-tool" title="平移" data-canvas-command="pan">✥</button>
      <button type="button" class="canvas-tool" title="放大" data-canvas-command="zoom-in">＋</button>
      <button type="button" class="canvas-tool" title="缩小" data-canvas-command="zoom-out">－</button>
      <span class="canvas-tools__divider"></span>
      <button type="button" class="canvas-tool" title="自动整理" data-canvas-command="auto-arrange">⇄</button>
      <button type="button" class="canvas-tool" title="模型检查" data-canvas-command="model-check">✓</button>
      <span class="canvas-tools__spacer"></span>
      <button type="button" class="canvas-tool" title="撤销" data-canvas-command="undo" disabled>↶</button>
      <button type="button" class="canvas-tool" title="重做" data-canvas-command="redo" disabled>↷</button>
      <div class="canvas-tools__zoom">
        <button type="button" onclick="handleCanvasZoomOut()">－</button>
        <span id="canvas-toolbar-zoom">100%</span>
        <button type="button" onclick="handleCanvasZoomIn()">＋</button>
      </div>
      <button type="button" class="canvas-tool" title="全屏" data-canvas-command="fullscreen">⛶</button>
    </div>
  </div>

    <div class="canvas-breadcrumbs" id="canvas-breadcrumbs" data-testid="canvas-breadcrumbs"></div>
    <div class="dataflow-panel" id="dataflow-panel" aria-live="polite">
      <div class="dataflow-panel__empty">切换到数据流视图后，将显示多信号流图、边状态和故障传播指标。</div>
    </div>
    <div class="d-matrix-panel" id="d-matrix-panel" aria-live="polite">
      <div class="d-matrix-panel__empty">切换到D矩阵后，将显示故障类型与固定测点的可检测关系。</div>
    </div>

    <div class="empty-state" id="empty">
    <div class="empty-icon">模型</div>
    <div class="empty-txt">可导入系统模型，也可新建空白模型后开始建模</div>
    <div class="empty-sub">点击右上角“导入系统模型”或“新建空白模型”开始。</div>
  </div>

  <div class="diagram" id="diagram">
    <div class="diagram-guide">
      <div class="diagram-guide-title">系统故障传播建模画布</div>
      <div class="diagram-guide-sub">拖拽组件进入画布后可移动节点；通过端口连线建立信号流；支持画布缩放、节点拖动以及节点和连线的单独删除。</div>
    </div>
    <div class="diagram-placeholder" id="diagram-placeholder">
      <div class="diagram-placeholder-card">
        <div class="diagram-placeholder-icon">拖入</div>
        <div class="diagram-placeholder-title">将组件拖拽到此处</div>
        <div class="diagram-placeholder-sub">建议先放置信号源、流程块和仿真块，再通过输出端口与输入端口完成连线。</div>
      </div>
    </div>
    <div class="canvas-floating">
      <div class="canvas-group-actions">
        <button type="button" class="canvas-wrap__button" id="canvas-wrap-selection" onclick="wrapSelectionIntoSubsystem()" disabled>封装为子系统</button>
        <button type="button" class="canvas-arrange__button" onclick="autoArrangeCanvas()">一键整理</button>
        <button type="button" class="canvas-check__button" onclick="runModelCheck()">模型检查</button>
      </div>
      <div class="canvas-mode">
        <span class="canvas-mode__label">当前连接</span>
        <span class="canvas-mode__chip" id="line-mode-chip">普通连接线</span>
      </div>
      <div class="canvas-zoom">
        <button type="button" class="canvas-zoom__button" onclick="handleCanvasZoomOut()">-</button>
        <div class="canvas-zoom__track">
          <span class="canvas-zoom__fill" id="canvas-zoom-fill" style="width:100%"></span>
        </div>
        <button type="button" class="canvas-zoom__button" onclick="handleCanvasZoomIn()">+</button>
        <button type="button" class="canvas-zoom__reset" id="canvas-zoom-reset" onclick="handleCanvasZoomReset()">100%</button>
      </div>
    </div>
    <div class="canvas-viewport" id="canvas-viewport">
      <div class="canvas-stage" id="canvas-stage">
        <div class="canvas-stage-grid"></div>
        <svg class="edge-layer" id="edge-layer" viewBox="0 0 1600 980" preserveAspectRatio="none">
          <defs>
            <marker id="edge-arrow-normal" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
              <path d="M1 1L8 5L1 9" fill="none" stroke="#84aee0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </marker>
            <marker id="edge-arrow-can" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
              <path d="M1 1L8 5L1 9" fill="none" stroke="#8c7cf6" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
            </marker>
            <marker id="edge-arrow-fault" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
              <path d="M1 1L8 5L1 9" fill="none" stroke="#dc2626" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            </marker>
          </defs>
          <g id="edge-group"></g>
          <path id="edge-preview" class="edge-preview" d="" style="display:none"></path>
        </svg>
        <div class="node-layer" id="node-layer"></div>
        <div class="scope-window-layer" id="scope-window-layer" aria-live="polite"></div>
      </div>
    </div>
  </div>
</div>
`,uo=[`innerHTML`],fo={__name:`CanvasWorkbench`,setup(e){return(e,t)=>(H(),U(`div`,{class:`gz-shell-fragment`,"data-testid":`canvas-workbench`,innerHTML:I(lo)},null,8,uo))}},po=`<aside class="rpanel">
  <div class="ph">
    <div class="ph-title">属性面板</div>
    <div class="ph-sub">当前选择 · 配置参数</div>
  </div>
  <div class="props-tabs" aria-label="属性面板标签">
    <button type="button" class="props-tab is-active" data-props-tab="overview">属性</button>
    <button type="button" class="props-tab" data-props-tab="parameters">参数配置</button>
    <button type="button" class="props-tab" data-props-tab="faults">故障设置</button>
    <button type="button" class="props-tab" data-props-tab="outputs">输出配置</button>
  </div>
  <div class="props-body">
    <div class="props-empty" id="pe">
      <div style="font-size:24px;opacity:0.22">属性</div>
      <div>点击组件或连线查看属性</div>
      <div style="font-size:11px;color:var(--textd)">信号源、仿真块、仪器和 CAN 边会显示不同的配置项</div>
    </div>
    <div id="pd" style="display:none"></div>
  </div>
</aside>
`,mo=[`innerHTML`],ho={__name:`RightInspector`,setup(e){return(e,t)=>(H(),U(`div`,{class:`gz-shell-fragment`,"data-testid":`right-inspector`,innerHTML:I(po)},null,8,mo))}},go=`<div class="sbar">
  <section class="sbar-log">
    <div class="sbar-log-head">
      <div class="sbar-tabs">
        <button type="button" class="sbar-tab is-active" data-status-tab="log" aria-pressed="true">日志</button>
        <button type="button" class="sbar-tab" data-status-tab="alerts" aria-pressed="false">告警</button>
        <button type="button" class="sbar-tab" data-status-tab="results" aria-pressed="false">仿真结果</button>
        <button type="button" class="sbar-tab" data-status-tab="performance" aria-pressed="false">性能趋势</button>
      </div>
      <div class="sbar-actions">
        <button type="button" class="sbar-action" data-status-action="clear">清空</button>
        <button type="button" class="sbar-action" data-status-action="level" data-level="all">全部级别</button>
        <button type="button" class="sbar-action" data-status-action="export">导出日志</button>
      </div>
    </div>
    <div class="sbar-log-table">
      <div class="sbar-row sbar-row--head">
        <span>时间</span>
        <span>级别</span>
        <span>来源</span>
        <span>消息</span>
      </div>
      <div class="sbar-row" data-log-entry data-level="info" data-view="log">
        <span>10:24:31</span>
        <span class="sbar-badge sbar-badge--info">信息</span>
        <span>系统</span>
        <span id="stxt">就绪 · 可导入系统模型或新建空白模型</span>
      </div>
      <div class="sbar-row" data-log-entry data-level="ok" data-view="log">
        <span>10:24:18</span>
        <span class="sbar-badge sbar-badge--ok">成功</span>
        <span>建模</span>
        <span>画布与组件库已加载</span>
      </div>
      <div class="sbar-empty is-hidden" data-status-empty>暂无匹配记录</div>
    </div>
  </section>
  <section class="sbar-metrics">
    <div class="sbar-card">
      <span class="sbar-card__accent"></span>
      <span class="sbar-card__label">组件</span>
      <span class="sbar-card__value sbar-metric-line" id="sblk" data-metric="components">
        <span class="sbar-metric-number">0</span><span class="sbar-metric-unit">组件</span>
        <span class="sbar-metric-sep">·</span>
        <span class="sbar-metric-number">0</span><span class="sbar-metric-unit">连线</span>
      </span>
    </div>
    <div class="sbar-card">
      <span class="sbar-card__accent"></span>
      <span class="sbar-card__label">故障模型</span>
      <span class="sbar-card__value sbar-metric-line" id="sflt" data-metric="faults">
        <span class="sbar-metric-number">0</span><span class="sbar-metric-unit">故障</span>
      </span>
    </div>
    <div class="sbar-card sbar-card--status">
      <span class="sbar-card__accent"></span>
      <span class="sbar-card__label">仿真状态</span>
      <span class="sbar-state"><span class="sdot" id="sdot"></span>待机</span>
    </div>
    <div class="sbar-card">
      <span class="sbar-card__accent"></span>
      <span class="sbar-card__label">时间</span>
      <span class="sbar-time">00:00:00</span>
    </div>
  </section>
</div>
`,_o=[`innerHTML`],vo={__name:`WorkbenchStatusBar`,setup(e){return(e,t)=>(H(),U(`div`,{class:`gz-shell-fragment`,"data-testid":`status-bar`,innerHTML:I(go)},null,8,_o))}},yo=`<div class="overlay" id="ov-ifm">
  <div class="modal ifm-modal">
    <div class="mhead">
      <div>
        <div class="mtitle" style="color:var(--red)">注入故障</div>
        <div class="ifm-modal-sub">按当前系统模型筛选匹配的故障库，可选择一个或多个故障并配置参数后注入到画布组件或 CAN 边。</div>
      </div>
      <button class="mclose" onclick="closeOv('ov-ifm')">×</button>
    </div>
    <div class="mbody ifm-modal-body">
      <div class="ifm-body">
        <div class="ifm-catalog-head">
          <div>
            <div class="ifm-kicker">fault-types/fault-type-catalog.json</div>
            <div class="ifm-head-title">无人机飞控故障类型库</div>
            <div class="ifm-head-desc">覆盖物理层、电气层、协议层故障，包含定量公式、默认参数、推荐模块和观测信号。</div>
          </div>
          <div class="ifm-summary" id="ifm-summary">
            <div class="ifm-summary-card">
              <span>总数</span>
              <strong id="ifm-total-count">0</strong>
            </div>
            <div class="ifm-summary-card">
              <span>物理</span>
              <strong id="ifm-physical-count">0</strong>
            </div>
            <div class="ifm-summary-card">
              <span>电气</span>
              <strong id="ifm-electrical-count">0</strong>
            </div>
            <div class="ifm-summary-card">
              <span>协议</span>
              <strong id="ifm-protocol-count">0</strong>
            </div>
          </div>
        </div>

        <div class="ifm-toolbar">
          <div class="ifm-filters" role="tablist" aria-label="故障层级筛选">
            <button class="ifm-filter on" type="button" data-fault-layer="all" onclick="setFaultCatalogLayerFilter('all')">全部</button>
            <button class="ifm-filter" type="button" data-fault-layer="physical" onclick="setFaultCatalogLayerFilter('physical')">物理层</button>
            <button class="ifm-filter" type="button" data-fault-layer="electrical" onclick="setFaultCatalogLayerFilter('electrical')">电气层</button>
            <button class="ifm-filter" type="button" data-fault-layer="protocol" onclick="setFaultCatalogLayerFilter('protocol')">协议层</button>
          </div>
          <input class="ifm-search" id="fault-catalog-search" type="search" placeholder="搜索故障名称、参数或推荐模块" oninput="setFaultCatalogSearch(this.value)" />
        </div>

        <div class="ifm-content-grid">
          <section class="ifm-list">
            <div class="ifm-list-head">
              <span>可注入故障</span>
              <b id="ifm-visible-count">0</b>
            </div>
            <div id="ifm-list-container"></div>
          </section>
          <section class="ifm-detail" id="fault-type-detail">
            <div class="ifm-detail-empty">选择一个故障类型查看定量模型和平台实现方式。</div>
          </section>
        </div>
      </div>
      <div class="ifm-build-row">
        <div class="ifm-build-hint">当前库为无人机飞控系统故障库，仅在导入兼容飞控模型后可注入；其他系统需单独设计故障库。</div>
        <button class="btn-build-fault" onclick="openFaultBuild()">故障建模</button>
      </div>
    </div>
    <div class="mfoot">
      <div style="flex:1;font-size:11px;color:var(--textm)" id="ifm-sel-hint">已选：未选择故障模型</div>
      <button class="btn-cancel" onclick="closeOv('ov-ifm')">取消</button>
      <button class="btn-ok btn-ok-r" onclick="confirmImportFault()">确认注入</button>
    </div>
  </div>
</div>
`,bo=[`innerHTML`],xo={__name:`FaultLibraryDialog`,setup(e){return(e,t)=>(H(),U(`div`,{class:`gz-shell-fragment`,"data-testid":`fault-library-dialog`,innerHTML:I(yo)},null,8,bo))}},So=`<div class="overlay" id="ov-tpl">
  <div class="modal" style="width:820px;height:530px">
    <div class="mhead">
      <div class="mtitle" style="color:var(--purple)">故障建模 · 模板库</div>
      <button class="mclose" onclick="closeOv('ov-tpl')">×</button>
    </div>
    <div class="mbody">
      <div class="tpl-cats">
        <div class="tcat-head">故障层级</div>
        <div class="tpl-cat on" onclick="setCat(this,'physical')"><span>物理</span><span>物理层</span><span class="tpl-cnt">5</span></div>
        <div class="tpl-cat" onclick="setCat(this,'electrical')"><span>电气</span><span>电气层</span><span class="tpl-cnt">4</span></div>
        <div class="tpl-cat" onclick="setCat(this,'protocol')"><span>协议</span><span>协议层</span><span class="tpl-cnt">4</span></div>
        <div style="height:1px;background:var(--border);margin:8px 4px"></div>
        <div class="tcat-head">已选模板</div>
        <div id="sel-list"><div style="font-size:10px;color:var(--textd);text-align:center;margin-top:6px">暂无</div></div>
      </div>
      <div class="tpl-grid" id="tgrid"></div>
      <div class="tpl-detail" id="tdetail"><div class="tdph">选择模板查看详情</div></div>
    </div>
    <div class="mfoot">
      <div style="flex:1;font-size:11px;color:var(--textm)" id="sel-cnt">已选 0 个故障模板</div>
      <button class="btn-cancel" onclick="backToImport()">返回导入</button>
      <button class="btn-ok btn-ok-p" onclick="confirmFM()">确认建模</button>
    </div>
  </div>
</div>
`,Co=[`innerHTML`],wo={__name:`TemplateDialog`,setup(e){return(e,t)=>(H(),U(`div`,{class:`gz-shell-fragment`,"data-testid":`template-dialog`,innerHTML:I(So)},null,8,Co))}},To=`<div class="overlay" id="ov-elec">
  <div class="modal" style="width:860px;height:540px">
    <div class="mhead">
      <div class="mtitle" style="color:var(--red)">电气层故障注入</div>
      <button class="mclose" onclick="closeOv('ov-elec')">×</button>
    </div>
    <div class="mbody einj-body">
      <div class="einj-side">
        <div class="einj-side-head">
          <div class="einj-side-title">已导入模型</div>
          <div class="einj-side-sub">这里显示通过“导入故障模型”进入工作区的电气层故障。</div>
        </div>
        <div class="einj-import-list" id="einj-import-list"></div>
      </div>
      <div class="einj-main">
        <div class="einj-target" id="einj-target"></div>
        <div class="einj-grid" id="einj-template-grid"></div>
      </div>
      <div class="einj-detail">
        <div class="einj-detail-head">
          <div class="einj-detail-title">模型详情</div>
          <div class="einj-detail-sub">可从已导入模型中选择，也可直接从电气层模板库导入并注入。</div>
        </div>
        <div class="einj-detail-body" id="einj-detail-body"></div>
      </div>
    </div>
    <div class="mfoot">
      <div style="flex:1;font-size:11px;color:var(--textm)" id="einj-foot-hint">请选择一个电气层故障模型。</div>
      <button class="btn-cancel" onclick="closeOv('ov-elec')">取消</button>
      <button class="btn-ok btn-ok-r" onclick="confirmElectricalFaultInjection()">导入并注入</button>
    </div>
  </div>
</div>
`,Eo=[`innerHTML`],Do={__name:`ElectricalFaultDialog`,setup(e){return(e,t)=>(H(),U(`div`,{class:`gz-shell-fragment`,"data-testid":`electrical-fault-dialog`,innerHTML:I(To)},null,8,Eo))}},Oo=`<div class="overlay" id="ov-proto">
  <div class="modal" style="width:860px;height:540px">
    <div class="mhead">
      <div class="mtitle" style="color:var(--blue)">CAN 协议层故障注入</div>
      <button class="mclose" onclick="closeOv('ov-proto')">×</button>
    </div>
    <div class="mbody einj-body einj-protocol">
      <div class="einj-side">
        <div class="einj-side-head">
          <div class="einj-side-title">已导入模型</div>
          <div class="einj-side-sub">这里显示通过“导入故障模型”进入工作区的 CAN 协议层故障。</div>
        </div>
        <div class="einj-import-list" id="pinj-import-list"></div>
      </div>
      <div class="einj-main">
        <div class="einj-target" id="pinj-target"></div>
        <div class="einj-grid" id="pinj-template-grid"></div>
      </div>
      <div class="einj-detail">
        <div class="einj-detail-head">
          <div class="einj-detail-title">模型详情</div>
          <div class="einj-detail-sub">当前仅支持对 CAN 总线注入协议层故障。</div>
        </div>
        <div class="einj-detail-body" id="pinj-detail-body"></div>
      </div>
    </div>
    <div class="mfoot">
      <div style="flex:1;font-size:11px;color:var(--textm)" id="pinj-foot-hint">请选择一个 CAN 协议层故障模型。</div>
      <button class="btn-cancel" onclick="closeOv('ov-proto')">取消</button>
      <button class="btn-ok btn-ok-b" onclick="confirmProtocolFaultInjection()">导入并注入</button>
    </div>
  </div>
</div>
`,ko=[`innerHTML`],Ao={__name:`ProtocolFaultDialog`,setup(e){return(e,t)=>(H(),U(`div`,{class:`gz-shell-fragment`,"data-testid":`protocol-fault-dialog`,innerHTML:I(Oo)},null,8,ko))}},jo=`<div class="overlay" id="ov-cfg">
  <div class="modal" style="width:680px;height:490px">
    <div class="mhead">
      <div class="mtitle" style="color:var(--red)">故障配置 · 注入参数</div>
      <button class="mclose" onclick="closeOv('ov-cfg')">×</button>
    </div>
    <div class="mbody">
      <div class="cfg-form">
        <div class="cfg-sec">
          <div class="cfg-sec-title">目标组件</div>
          <div class="cfg-grid">
            <div class="cfg-f"><label>注入位置</label><select id="cftgt" onchange="upPrev()"></select></div>
            <div class="cfg-f"><label>故障模型</label><select id="cfmdl" onchange="upPrev()"></select></div>
          </div>
        </div>
        <div class="cfg-sec">
          <div class="cfg-sec-title">注入层级</div>
          <div class="layer-sel">
            <div class="lbtn on" onclick="setLayer(this,'物理层')">物理层</div>
            <div class="lbtn" onclick="setLayer(this,'电气层')">电气层</div>
            <div class="lbtn" onclick="setLayer(this,'协议层')">协议层</div>
          </div>
        </div>
        <div class="cfg-sec">
          <div class="cfg-sec-title">故障模式</div>
          <div class="cfg-grid">
            <div class="cfg-f"><label>故障类型</label>
              <select id="cftype" onchange="upPrev()">
                <option>固定偏差 (Bias)</option><option>随机噪声 (Noise)</option>
                <option>卡死 (Stuck-at)</option><option>缓变漂移 (Drift)</option><option>增益错误 (Gain)</option>
              </select>
            </div>
            <div class="cfg-f"><label>持续方式</label>
              <select id="cfpers" onchange="upPrev()">
                <option>永久性 (Permanent)</option><option>间歇性 (Intermittent)</option><option>瞬态 (Transient)</option>
              </select>
            </div>
          </div>
        </div>
        <div class="cfg-sec">
          <div class="cfg-sec-title">时序参数</div>
          <div class="cfg-grid">
            <div class="cfg-f"><label>注入起始时间 (s)</label><input type="number" id="cfs" value="5.0" step="0.5" min="0" oninput="upPrev()"></div>
            <div class="cfg-f"><label>持续时长 (s)</label><input type="number" id="cfd" value="3.0" step="0.5" min="0.1" oninput="upPrev()"></div>
            <div class="cfg-f"><label>故障幅值</label><input type="number" id="cfmag" value="0.5" step="0.1" oninput="upPrev()"></div>
            <div class="cfg-f"><label>仿真总时长 (s)</label><input type="number" id="cftot" value="20.0" step="1" min="1" oninput="upPrev()"></div>
          </div>
        </div>
      </div>
      <div class="cfg-prev">
        <div class="cprev-title">配置预览</div>
        <div style="font-size:9px;color:var(--textm);margin-bottom:4px">时序示意</div>
        <div class="cfg-tl"><svg id="ctlsvg" width="100%" height="100%">
          <polyline id="tln" points="" stroke="#c2d6ea" stroke-width="1" fill="none"/>
          <rect id="tlr" x="0" y="0" width="0" height="100%" fill="rgba(220,38,38,0.07)"/>
          <polyline id="tlf" points="" stroke="#dc2626" stroke-width="1.5" fill="none"/>
          <line id="tll" x1="0" y1="0" x2="0" y2="72" stroke="#dc2626" stroke-width="1" stroke-dasharray="3,2" opacity="0.6"/>
        </svg></div>
        <div id="csumm" style="display:flex;flex-direction:column;gap:2px"></div>
      </div>
    </div>
    <div class="mfoot">
      <button class="btn-cancel" onclick="closeOv('ov-cfg')">取消</button>
      <button class="btn-ok btn-ok-r" onclick="confirmFC()">保存配置</button>
    </div>
  </div>
</div>
`,Mo=[`innerHTML`],No={__name:`ConfigDialog`,setup(e){return(e,t)=>(H(),U(`div`,{class:`gz-shell-fragment`,"data-testid":`config-dialog`,innerHTML:I(jo)},null,8,Mo))}},Po=`<div class="scope-dialog-stub" id="ov-scope" hidden data-scope-dialog-stub="true"></div>
`,Fo=[`innerHTML`],Io={__name:`ScopeDialog`,setup(e){return(e,t)=>(H(),U(`div`,{class:`gz-shell-fragment`,"data-testid":`scope-dialog`,innerHTML:I(Po)},null,8,Fo))}},q=Pt({scope:!1,template:!1,faultLibrary:!1,electricalFault:!1,protocolFault:!1,config:!1,pythonBinding:{open:!1,targetNode:null,parsedInterface:null,parseError:``,boundSnapshot:null}});function Lo(){function e(e={}){q.pythonBinding.open=!0,q.pythonBinding.targetNode=e.targetNode??null,q.pythonBinding.parsedInterface=e.parsedInterface??null,q.pythonBinding.boundSnapshot=e.boundSnapshot??null,q.pythonBinding.parseError=e.parseError??``}function t(){q.pythonBinding.open=!1,q.pythonBinding.targetNode=null,q.pythonBinding.parsedInterface=null,q.pythonBinding.boundSnapshot=null,q.pythonBinding.parseError=``}function n(e){q.pythonBinding.parsedInterface=e,q.pythonBinding.parseError=``}function r(e){q.pythonBinding.parseError=e}return{dialogsState:q,openPythonBindingDialog:e,closePythonBindingDialog:t,setPythonBindingPreview:n,setPythonBindingError:r}}var Ro=[{type:`signal_source`,label:`信号源`},{type:`flow_block`,label:`信号适配块`},{type:`gain_block`,label:`增益块`},{type:`sum_block`,label:`求和块`},{type:`mux_block`,label:`Mux 块`},{type:`simulation_block`,label:`仿真块`},{type:`subsystem_block`,label:`子系统块`}],zo=[{type:`fault_bias`,label:`偏置叠加块`},{type:`fault_noise`,label:`噪声注入块`}],Bo=[{type:`instrument_scope`,label:`示波器`},{type:`instrument_spectrum`,label:`频谱分析仪`},{type:`instrument_logger`,label:`数据记录仪`}],Vo=[{type:`normal`,label:`普通连接线`},{type:`can`,label:`CAN 总线`}];function Ho(){return{title:`故障注入平台`,tabs:[`系统建模`,`故障注入`,`仿真分析`],topActions:[`导入系统模型`,`导入故障模型`,`保存系统模型`,`保存仿真结果`],palette:{systemModeling:Ro,faultInjection:zo,instruments:Bo,edges:Vo}}}var Uo=Pt(Ho()),Wo=Wt(!1),Go=Wt(null);function Ko(e){return e.displayName??e.comment??e.name}function qo(){return{bound:!1,moduleId:null,fileName:null,moduleName:null,moduleCategory:null,sourcePackageId:null,sourcePackageName:null,description:``,entryFunction:null,parsedInterface:null,rawSource:``,executionMode:`mock`,executionConfig:{endpoint:`http://127.0.0.1:8765/api/python-flow/execute`,timeoutMs:3e3},portMapping:{inputs:[],outputs:[],middleVars:[]}}}function Jo(e,t={}){let n=t.moduleId??e.moduleName??(typeof e.fileName==`string`?e.fileName.replace(/\.py$/i,``):null);return{...qo(),bound:!0,moduleId:n,moduleCategory:t.moduleCategory??`uncategorized`,sourcePackageId:t.sourcePackageId??null,sourcePackageName:t.sourcePackageName??null,fileName:e.fileName,moduleName:e.moduleName,description:e.description,entryFunction:e.entryFunction,parsedInterface:e,rawSource:e.rawSource,executionMode:t.executionMode??`mock`,portMapping:{inputs:(e.inputs??[]).map((e,t)=>({portId:`input-${t}`,varName:e.name,displayName:Ko(e),type:e.type??`any`,default:e.default??null,comment:e.comment??``,connected:!1})),outputs:(e.outputs??[]).map((e,t)=>({portId:`output-${t}`,varName:e.name,displayName:Ko(e),type:e.type??`any`,comment:e.comment??``})),middleVars:(e.middleVars??[]).map((e,t)=>({portId:`middle-${t}`,varName:e.name,displayName:Ko(e),type:e.type??`any`,comment:e.comment??``}))}}}function Yo(){function e(){Wo.value=!0}function t(e){Go.value=e}return{shellState:Uo,runtimeReady:Wo,selectedNodeBinding:Go,markReady:e,setSelectedNodeBinding:t}}function Xo(e,t=null){let n=Error(`PYTHON_PARSE_ERROR: ${e}`);return n.code=`PYTHON_PARSE_ERROR`,n.line=t,n}function Zo(e){return e.replace(/\r\n/g,`
`)}function Qo(e,t){let n=e.match(/("""|''')([\s\S]*?)\1/)?.[2]??``;return{moduleName:n.match(/Module:\s*([A-Za-z0-9_]+)/)?.[1]??t.replace(/\.py$/i,``),description:n.match(/Description:\s*(.+)/)?.[1]?.trim()??``}}function $o(e){let t=/(^|\n)([ \t]*)(#\s*@entry\s*\n)?([ \t]*)def\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(([\s\S]*?)\)\s*(?:->\s*([^\n:]+))?:[ \t]*(?:#\s*(.*))?/g,n=[],r;for(;r=t.exec(e);){if((r[4]??``).length!==0)continue;let t=r.index+r[1].length,i=e.slice(0,t).split(`
`).length;n.push({startIndex:t,line:i,isEntry:!!r[3],name:r[5],paramsSource:r[6],returnAnnotation:r[7]?.trim()??``,headerComment:r[8]?.trim()??``})}return n.sort((e,t)=>e.startIndex-t.startIndex).map((t,n,r)=>({...t,endIndex:r[n+1]?.startIndex??e.length}))}function es(e){if(e.length===0)throw Xo(`未找到可识别的入口函数`);let t=e.find(e=>e.isEntry);if(t)return t;let n=e.find(e=>e.name===`process`);if(n)return n;if(e.length===1)return e[0];throw Xo(`找到多个顶层函数，但没有 @entry 或 process 入口`)}function ts(e){let t=[],n=``,r=0;for(let i of e){if((i===`(`||i===`[`||i===`{`)&&(r+=1),(i===`)`||i===`]`||i===`}`)&&(r=Math.max(0,r-1)),i===`,`&&r===0){n.trim()&&t.push(n.trim()),n=``;continue}n+=i}return n.trim()&&t.push(n.trim()),t}function ns(e){return String(e??``).trim().replace(/^(输入|输出|中间变量|观测变量|可观测变量)\s*[:：]\s*/u,``).trim()}function rs({name:e,comment:t}){return ns(t)||e}function is(e){let t=ns(e);return t?ts(t):[]}function as(e){let t=e.indexOf(`#`);return t<0?{signature:e.trim().replace(/,$/,``),comment:``}:{signature:e.slice(0,t).trim().replace(/,$/,``),comment:e.slice(t+1).trim()}}function os(e,t,n=``){let r=is(n),i=[];return e.includes(`#`)?e.split(`
`).map(e=>e.trim()).filter(Boolean).forEach(e=>{let{signature:t,comment:n}=as(e),r=ts(t.replace(/,$/,``)).filter(Boolean),a=is(n);r.forEach((e,t)=>{i.push({signature:e,comment:a[t]??(r.length===1?ns(n):``)})})}):ts(e).filter(Boolean).forEach((e,t)=>{i.push({signature:e,comment:r[t]??``})}),i.map((e,n)=>{let{signature:i,comment:a}=typeof e==`string`?as(e):e,o=i.trim().match(/^([A-Za-z_][A-Za-z0-9_]*)(?:\s*:\s*([^=]+?))?(?:\s*=\s*(.+))?$/);if(!o)throw Xo(`无法解析参数定义: ${i}`,t+n);let s=ns(a||r[n]||``);return{name:o[1],displayName:rs({name:o[1],comment:s}),type:o[2]?.trim()??`any`,default:o[3]?.trim()??null,comment:s}})}function ss(e,t){let n=e.slice(t.startIndex,t.endIndex),r=n.indexOf(`
`);return r===-1?``:n.slice(r+1)}function cs(e,t){let n=[...e.split(`
`)].reverse().find(e=>e.trim().startsWith(`return `))?.match(/return\s+(.+?)(?:\s*#\s*(.+))?$/),r=is(n?.[2]??``),i=1;return n?.[1]?i=ts(n[1]).length:/Tuple?\[/.test(t)&&(i=ts(t.replace(/^Tuple?\[/,``).replace(/\]$/,``)).length),Array.from({length:Math.max(1,i)},(e,t)=>{let n=`output_${t}`,i=ns(r[t]??``);return{name:n,displayName:rs({name:n,comment:i}),type:`float`,comment:i}})}function ls(e){let t=e.split(`
`),n=[];for(let e=0;e<t.length;e+=1)if(t[e].includes(`@observable`))for(let r=e+1;r<t.length;r+=1){let e=t[r].trim();if(!e)continue;let i=e.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=.*?(?:#\s*(.+))?$/);if(i){let e=ns(i[2]??``);n.push({name:i[1],displayName:rs({name:i[1],comment:e}),type:`float`,comment:e})}break}return n}function us({fileName:e,source:t}){let n=Zo(t),{moduleName:r,description:i}=Qo(n,e),a=es($o(n)),o=ss(n,a);return{fileName:e,moduleName:r,description:i,entryFunction:a.name,inputs:os(a.paramsSource,a.line,a.headerComment),outputs:cs(o,a.returnAnnotation),middleVars:ls(o),rawSource:n}}var ds=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},fs={key:0,class:`overlay overlay--vue open`,"data-testid":`python-binding-dialog`},ps={class:`modal python-binding-modal`},ms={class:`mhead`},hs={class:`python-binding-modal__sub`},gs={class:`mbody python-binding-modal__body`},_s={class:`python-binding-modal__panel python-binding-modal__panel--left`},vs={class:`python-binding-modal__toolbar`},ys={key:0,class:`python-binding-modal__error`},bs={key:1,class:`python-binding-modal__summary`},xs={class:`python-binding-modal__file`},Ss={class:`python-binding-modal__meta`},Cs={class:`python-binding-modal__desc`},ws={key:2,class:`python-binding-modal__groups`},Ts={class:`python-binding-group`},Es=[`value`,`onInput`],Ds={class:`python-binding-row__type`},Os={class:`python-binding-row__note`},ks={class:`python-binding-group`},As=[`value`,`onInput`],js={class:`python-binding-row__type`},Ms={class:`python-binding-row__note`},Ns={class:`python-binding-group`},Ps=[`value`,`onInput`],Fs={class:`python-binding-row__type`},Is={class:`python-binding-row__note`},Ls={class:`python-binding-modal__panel python-binding-modal__panel--right`},Rs={class:`python-binding-modal__code`},zs={class:`mfoot`},Bs=[`disabled`],Vs=ds({__name:`PythonBindingDialog`,props:{open:{type:Boolean,default:void 0},targetNode:{type:Object,default:void 0},parsedInterface:{type:Object,default:void 0}},emits:[`close`,`confirm`,`unbind`,`pick-file`],setup(e,{emit:t}){let n=e,r=t,{dialogsState:i,closePythonBindingDialog:a,openPythonBindingDialog:o,setPythonBindingError:s,setPythonBindingPreview:c}=Lo(),l=Wt(null),u=Wt(null),d=da(()=>n.open??i.pythonBinding.open),f=da(()=>n.targetNode??i.pythonBinding.targetNode),p=da(()=>n.parsedInterface??i.pythonBinding.parsedInterface),m=da(()=>i.pythonBinding.parseError);function h(e){if(!e){u.value=null;return}u.value={...e,inputs:(e.inputs??[]).map(e=>({...e,displayName:e.displayName??e.comment??e.name})),outputs:(e.outputs??[]).map(e=>({...e,displayName:e.displayName??e.comment??e.name})),middleVars:(e.middleVars??[]).map(e=>({...e,displayName:e.displayName??e.comment??e.name}))}}function g(){a(),r(`close`)}function _(){l.value?.click(),r(`pick-file`)}async function v(e){let t=e.target.files?.[0];if(t)try{let e=await t.text(),n=us({fileName:t.name,source:e});c(n),h(n)}catch(e){s(e?.message??`解析 Python 文件失败`)}finally{e.target.value=``}}function y(e,t,n){u.value&&(u.value[e][t].displayName=n)}function b(){if(!u.value||!f.value?.id)return;let e={nodeId:f.value.id,binding:Jo(u.value)};window.dispatchEvent(new CustomEvent(`gz:python-binding-confirm`,{detail:e})),r(`confirm`,e),g()}function x(){if(!f.value?.id)return;let e={nodeId:f.value.id};window.dispatchEvent(new CustomEvent(`gz:python-binding-unbind`,{detail:e})),r(`unbind`,e),g()}function S(e){o(e.detail??{}),h(e.detail?.parsedInterface??e.detail?.boundSnapshot?.parsedInterface??null)}return Mn(p,e=>{h(e)},{immediate:!0}),er(()=>{window.addEventListener(`gz:open-python-binding`,S)}),rr(()=>{window.removeEventListener(`gz:open-python-binding`,S)}),(e,t)=>d.value?(H(),U(`div`,fs,[W(`div`,ps,[W(`div`,ms,[W(`div`,null,[t[0]||=W(`div`,{class:`mtitle python-binding-modal__title`},`绑定 Python 文件`,-1),W(`div`,hs,k(f.value?.label??f.value?.props?.name??`未选择仿真块`),1)]),W(`button`,{class:`mclose`,onClick:g},`×`)]),W(`div`,gs,[W(`section`,_s,[W(`div`,vs,[W(`button`,{class:`btn-ok btn-ok-b`,type:`button`,onClick:_},`选择 .py 文件`),W(`input`,{ref_key:`fileInput`,ref:l,class:`python-binding-modal__input`,type:`file`,accept:`.py`,onChange:v},null,544)]),m.value?(H(),U(`div`,ys,k(m.value),1)):zi(``,!0),u.value?(H(),U(`div`,bs,[W(`div`,xs,k(u.value.fileName),1),W(`div`,Ss,k(u.value.moduleName)+` · `+k(u.value.entryFunction),1),W(`div`,Cs,k(u.value.description||`未提供模块说明。`),1)])):zi(``,!0),u.value?(H(),U(`div`,ws,[W(`div`,Ts,[t[1]||=W(`div`,{class:`python-binding-group__head`},`输入变量`,-1),(H(!0),U(B,null,ur(u.value.inputs,(e,t)=>(H(),U(`div`,{key:`input-${e.name}`,class:`python-binding-row`},[W(`input`,{value:e.displayName,class:`python-binding-row__name`,onInput:e=>y(`inputs`,t,e.target.value)},null,40,Es),W(`span`,Ds,k(e.type),1),W(`span`,Os,k(e.name)+` · `+k(e.comment||`无注释`),1)]))),128))]),W(`div`,ks,[t[2]||=W(`div`,{class:`python-binding-group__head`},`输出变量`,-1),(H(!0),U(B,null,ur(u.value.outputs,(e,t)=>(H(),U(`div`,{key:`output-${e.name}`,class:`python-binding-row`},[W(`input`,{value:e.displayName,class:`python-binding-row__name`,onInput:e=>y(`outputs`,t,e.target.value)},null,40,As),W(`span`,js,k(e.type),1),W(`span`,Ms,k(e.name)+` · `+k(e.comment||`无注释`),1)]))),128))]),W(`div`,Ns,[t[3]||=W(`div`,{class:`python-binding-group__head`},`中间变量`,-1),(H(!0),U(B,null,ur(u.value.middleVars,(e,t)=>(H(),U(`div`,{key:`middle-${e.name}`,class:`python-binding-row`},[W(`input`,{value:e.displayName,class:`python-binding-row__name`,onInput:e=>y(`middleVars`,t,e.target.value)},null,40,Ps),W(`span`,Fs,k(e.type),1),W(`span`,Is,k(e.name)+` · `+k(e.comment||`无注释`),1)]))),128))])])):zi(``,!0)]),W(`section`,Ls,[t[4]||=W(`div`,{class:`python-binding-group__head python-binding-modal__code-head`},`源码预览`,-1),W(`pre`,Rs,k(u.value?.rawSource??`尚未选择 Python 文件。`),1)])]),W(`div`,zs,[W(`button`,{class:`btn-cancel`,type:`button`,onClick:g},`取消`),W(`button`,{class:`btn-ok btn-ok-r`,type:`button`,onClick:x},`解除绑定`),W(`button`,{class:`btn-ok btn-ok-b`,type:`button`,disabled:!u.value,onClick:b},`确认绑定`,8,Bs)])])])):zi(``,!0)}},[[`__scopeId`,`data-v-1e025653`]]),Hs=`<div class="toast" id="toast"><span id="ti"></span><span id="tm"></span></div>`,Us=[`innerHTML`],Ws={__name:`ToastHost`,setup(e){return(e,t)=>(H(),U(`div`,{class:`gz-shell-fragment`,"data-testid":`toast-host`,innerHTML:I(Hs)},null,8,Us))}},Gs=`// --- 状态 ---\r
const S={\r
  step:1,\r
  sysLoaded:false,\r
  systemSaved:false,\r
  faultLoaded:false,\r
  faultModels:0,\r
  availableFaultModels:[],\r
  importedFaultModels:[],\r
  selectedFaultCatalogId:'',\r
  simDone:false,\r
  selBlk:null,\r
  selEdge:null,\r
  selTpls:[],\r
  faultedBlks:[],\r
  activeModelPackage:null,\r
  cmpMode:false,\r
  activeLayer:'物理层',\r
  modelNodes:[],\r
  modelEdges:[],\r
  nodeSeq:0,\r
  edgeSeq:0,\r
  dragType:null,\r
  activeLineType:'normal',\r
  canvasScale:1,\r
  canvasOffsetX:0,\r
  canvasOffsetY:0,\r
  pendingConnection:null,\r
  injectTargetId:'',\r
  injectSelectionMode:'',\r
  injectSelectionId:'',\r
  protocolInjectTargetId:'',\r
  protocolInjectSelectionMode:'',\r
  protocolInjectSelectionId:'',\r
  measurementScenario:null,\r
  measurementResponse:null,\r
  measurementResponseFilter:'all',\r
  selectedMeasurementPointId:'',\r
  installedDiagnosticTestPointIds:[],\r
  selectedDiagnosticTestPointId:'',\r
  testPointDiagnosis:null,\r
  confirmedDiagnosticFaults:{}\r
};\r
\r
S.rootCanvasId='canvas-root';\r
S.activeCanvasId='canvas-root';\r
S.canvasTrail=['canvas-root'];\r
S.canvases={};\r
\r
const CANVAS_STAGE={width:1600,height:980,minScale:0.6,maxScale:1.8,nodePadding:24,nodeMinY:118};\r
const POINTER_DRAG_THRESHOLD=6;\r
const SCOPE_WINDOW_LAYOUT={defaultWidth:560,estimatedHeight:356,gutter:16,reservedTop:96,cascadeX:36,cascadeY:32};\r
const NODE_DRAG={active:false,engaged:false,pointerId:null,nodeId:'',startX:0,startY:0,originX:0,originY:0,clickSuppressUntil:0};\r
const CANVAS_PAN={active:false,engaged:false,clearSelectionOnPointerUp:false,pointerId:null,startX:0,startY:0,originX:0,originY:0};\r
const NODE_DOUBLE_CLICK={nodeId:'',timestamp:0};\r
const SCOPE_WINDOW_DRAG={active:false,engaged:false,pointerId:null,scopeId:'',startX:0,startY:0,originX:0,originY:0};\r
\r
const PORT_FORMATS=['标量','向量','矩阵','布尔','事件'];\r
const SIM_MODULE_TYPES=['一阶函数','微分','积分'];\r
const SIM_INTERFACE_LIMITS={inputs:[1,6],outputs:[1,6],middleVars:[0,6]};\r
const SUBSYSTEM_INTERFACE_LIMITS={inputs:[0,6],outputs:[0,6]};\r
\r
const COMPONENT_LIBRARY={\r
  signal_source:{\r
    label:'信号源',\r
    badge:'信号',\r
    className:'b-source',\r
    width:164,\r
    height:84,\r
    defaults:{name:'信号源',waveType:'正弦',amplitude:'1.0',frequency:'1.0',outputFormat:'标量'}\r
  },\r
  flow_block:{\r
    label:'流程块',\r
    badge:'流程',\r
    className:'b-flow',\r
    width:168,\r
    height:88,\r
    defaults:{name:'流程块',inputName:'输入信号',inputFormat:'标量',outputName:'输出信号',outputFormat:'标量'}\r
  },\r
  simulation_block:{\r
    label:'仿真块',\r
    badge:'仿真',\r
    className:'b-sim',\r
    width:174,\r
    height:92,\r
    defaults:{\r
      name:'仿真块',\r
      moduleType:'一阶函数',\r
      inputs:[{name:'输入 1',type:'标量'}],\r
      outputs:[{name:'输出 1',type:'标量'}],\r
      middleVars:[{name:'中间量 1',type:'标量'}],\r
      ffunctionNote:'当前预留 Python 函数接口，可在后续导入函数定义。'\r
    }\r
  },\r
  fault_bias:{\r
    label:'偏置叠加块',\r
    badge:'故障',\r
    className:'b-fault',\r
    width:156,\r
    height:74,\r
    defaults:{name:'偏置叠加块',faultType:'偏置叠加',layer:'物理层',trigger:'持续'}\r
  },\r
  fault_noise:{\r
    label:'噪声注入块',\r
    badge:'故障',\r
    className:'b-fault',\r
    width:156,\r
    height:74,\r
    defaults:{name:'噪声注入块',faultType:'随机噪声',layer:'物理层',trigger:'持续'}\r
  },\r
  fault_stuck:{\r
    label:'卡死注入块',\r
    badge:'故障',\r
    className:'b-fault',\r
    width:156,\r
    height:74,\r
    defaults:{name:'卡死注入块',faultType:'卡死',layer:'电气层',trigger:'持续'}\r
  },\r
  fault_drift:{\r
    label:'漂移注入块',\r
    badge:'故障',\r
    className:'b-fault',\r
    width:156,\r
    height:74,\r
    defaults:{name:'漂移注入块',faultType:'漂移',layer:'协议层',trigger:'渐变'}\r
  },\r
  instrument_scope:{\r
    label:'示波器',\r
    badge:'仪器',\r
    className:'b-inst',\r
    width:150,\r
    height:74,\r
    defaults:{name:'示波器',instrumentType:'波形监测',sampleRate:'64kHz',signal:'流程块输出'}\r
  },\r
  instrument_spectrum:{\r
    label:'频谱分析仪',\r
    badge:'仪器',\r
    className:'b-inst',\r
    width:158,\r
    height:74,\r
    defaults:{name:'频谱分析仪',instrumentType:'频谱分析',sampleRate:'32kHz',signal:'仿真块输出'}\r
  },\r
  instrument_logger:{\r
    label:'数据记录仪',\r
    badge:'仪器',\r
    className:'b-inst',\r
    width:158,\r
    height:74,\r
    defaults:{name:'数据记录仪',instrumentType:'数据记录',sampleRate:'10Hz',signal:'系统总线'}\r
  },\r
  link_normal:{\r
    label:'普通连接线',\r
    badge:'连接',\r
    className:'b-link',\r
    width:154,\r
    height:64,\r
    defaults:{name:'普通连接线',linkType:'普通连接线',sourcePort:'源端口',targetPort:'目标端口'}\r
  },\r
  link_can:{\r
    label:'CAN 总线',\r
    badge:'连接',\r
    className:'b-link',\r
    width:154,\r
    height:64,\r
    defaults:{name:'CAN 总线',linkType:'CAN 总线',sourcePort:'节点 A',targetPort:'节点 B'}\r
  }\r
};\r
\r
COMPONENT_LIBRARY.subsystem_block={\r
  label:'子系统块',\r
  badge:'子系统',\r
  className:'b-subsystem',\r
  width:180,\r
  height:92,\r
  defaults:{name:'子系统块',description:'',targetCanvasId:''}\r
};\r
COMPONENT_LIBRARY.subsystem_in_port={\r
  label:'子系统输入口',\r
  badge:'IN',\r
  className:'b-subsystem-port-in',\r
  width:132,\r
  height:72,\r
  defaults:{name:'子系统输入口'}\r
};\r
COMPONENT_LIBRARY.subsystem_out_port={\r
  label:'子系统输出口',\r
  badge:'OUT',\r
  className:'b-subsystem-port-out',\r
  width:132,\r
  height:72,\r
  defaults:{name:'子系统输出口'}\r
};\r
\r
const TPLS={\r
  physical:[\r
    {id:'ph1',name:'传感器偏差注入',desc:'叠加固定偏置，模拟安装误差或校准失效',tags:['Bias','永久性'],c:'#6d28d9'},\r
    {id:'ph2',name:'随机噪声扰动',desc:'注入白噪声，模拟电磁干扰效应',tags:['Noise','连续'],c:'#6d28d9'},\r
    {id:'ph3',name:'卡死故障',desc:'输出锁定固定值，模拟传感器完全失效',tags:['Stuck','永久性'],c:'#6d28d9'},\r
    {id:'ph4',name:'缓变漂移',desc:'输出随时间偏移，模拟热漂移或老化',tags:['Drift','渐变'],c:'#6d28d9'},\r
    {id:'ph5',name:'增益倍率错误',desc:'幅值异常缩放，模拟放大器故障',tags:['Gain','乘性'],c:'#6d28d9'}\r
  ],\r
  electrical:[\r
    {id:'el1',name:'电源电压扰动',desc:'注入纹波或瞬时压降，模拟电源管理失效',tags:['电压','瞬态'],c:'#b45309'},\r
    {id:'el2',name:'信号线短路',desc:'模拟两路信号线短接导致数据混叠',tags:['短路','永久性'],c:'#b45309'},\r
    {id:'el3',name:'断路 / 开路',desc:'导线断裂或接头松动引发信号中断',tags:['断路','间歇'],c:'#b45309'},\r
    {id:'el4',name:'过流保护触发',desc:'模拟电机过载导致 ESC 过流保护切断',tags:['过流','响应'],c:'#b45309'}\r
  ],\r
  protocol:[\r
    {id:'pr1',name:'CAN 帧丢包',desc:'按设定概率丢失 CAN 帧，模拟总线竞争或链路退化。',tags:['丢包','CAN'],faultKind:'丢包',faultCode:'loss',c:'#1d6fbf'},\r
    {id:'pr2',name:'CAN 帧延迟',desc:'为目标 CAN 帧引入额外传输延迟，模拟总线拥塞。',tags:['延迟','CAN'],faultKind:'延迟',faultCode:'delay',c:'#1d6fbf'},\r
    {id:'pr3',name:'CAN 位翻转',desc:'翻转 CAN 帧中的关键位，模拟电磁干扰造成的比特错误。',tags:['位翻转','CAN'],faultKind:'位翻转',faultCode:'bitflip',c:'#1d6fbf'},\r
    {id:'pr4',name:'CAN 帧重放',desc:'重放历史 CAN 帧，模拟异常重发或回放攻击。',tags:['重放','CAN'],faultKind:'重放',faultCode:'replay',c:'#1d6fbf'}\r
  ]\r
};\r
\r
const LAYER_LABELS={\r
  physical:'物理层',\r
  electrical:'电气层',\r
  protocol:'协议层'\r
};\r
\r
const FAULT_CATALOG_SEED=[\r
  {id:'fm-imu-bias',name:'IMU 偏差故障模型',layer:'physical',desc:'通过恒定偏置模拟传感器安装误差与校准漂移。',tags:['Bias','物理层'],createdAt:'2024-03-12',origin:'file'},\r
  {id:'fm-esc-overcurrent',name:'ESC 过流保护模型',layer:'electrical',desc:'在控制模块内触发过流保护逻辑，模拟电气保护动作。',tags:['Overcurrent','电气层'],createdAt:'2024-03-10',origin:'file'},\r
  {id:'fm-can-loss',name:'CAN 总线丢包模型',layer:'protocol',desc:'对 CAN 总线施加帧丢失，模拟协议层链路退化。',tags:['丢包','协议层'],faultKind:'丢包',faultCode:'loss',createdAt:'2024-03-08',origin:'file'},\r
  {id:'fm-can-delay',name:'CAN 总线延迟模型',layer:'protocol',desc:'为 CAN 帧增加额外时延，模拟总线拥塞和优先级等待。',tags:['延迟','协议层'],faultKind:'延迟',faultCode:'delay',createdAt:'2024-03-09',origin:'file'},\r
  {id:'fm-can-bitflip',name:'CAN 总线位翻转模型',layer:'protocol',desc:'对 CAN 帧注入位翻转，模拟 EMI 引发的位错误。',tags:['位翻转','协议层'],faultKind:'位翻转',faultCode:'bitflip',createdAt:'2024-03-11',origin:'file'},\r
  {id:'fm-can-replay',name:'CAN 总线重放模型',layer:'protocol',desc:'对历史 CAN 帧进行重放，模拟协议层异常重发或回放攻击。',tags:['重放','协议层'],faultKind:'重放',faultCode:'replay',createdAt:'2024-03-13',origin:'file'}\r
];\r
let curCat='physical';\r
initializeFaultCatalog();\r
renderTpls('physical');\r
renderFaultCatalogList();\r
initPaletteDrag();\r
initCanvasDrop();\r
bindCanvasInteractions();\r
syncConfigTargets();\r
renderModelNodes();\r
setConnectionTool('normal');\r
handleCanvasZoomReset();\r
\r
function getLoadedSystemNodeCount(){\r
  const seen=new Set();\r
  const append=(items)=>{\r
    if(!Array.isArray(items)){return;}\r
    items.forEach((node)=>{\r
      if(node?.id){seen.add(node.id);}\r
    });\r
  };\r
  append(S.modelNodes);\r
  if(S.canvases&&typeof S.canvases==='object'){\r
    Object.values(S.canvases).forEach((canvas)=>append(canvas?.nodes));\r
  }\r
  return seen.size;\r
}\r
\r
function canOpenFaultInjectionEntry(){\r
  return Boolean(S.sysLoaded&&getLoadedSystemNodeCount()>0);\r
}\r
\r
// ─── UI 更新 ───\r
function updateUI(){\r
  [1,2,3].forEach(i=>{\r
    const el=document.getElementById('s'+i);\r
    const nm=document.getElementById('sn'+i);\r
    el.classList.remove('active','done');\r
    if(i<S.step){el.classList.add('done');nm.textContent='✓';}\r
    else if(i===S.step){el.classList.add('active');nm.textContent=i;}\r
    else nm.textContent=i;\r
  });\r
\r
  const impFlt=document.getElementById('btn-imp-flt');\r
  const savSys=document.getElementById('btn-save-sys');\r
  const savRes=document.getElementById('btn-save-res');\r
  const setTopButtonReady=(button,ready)=>{\r
    if(!button){return;}\r
    button.classList.toggle('tbtn-disabled',!ready);\r
    button.classList.toggle('ready',!!ready);\r
    button.disabled=!ready;\r
    button.setAttribute('aria-disabled',ready?'false':'true');\r
  };\r
\r
  setTopButtonReady(savSys,Boolean(S.sysLoaded));\r
  setTopButtonReady(impFlt,canOpenFaultInjectionEntry());\r
  setTopButtonReady(savRes,Boolean(S.simDone));\r
\r
  let statusText='就绪 · 等待导入系统模型';\r
  if(S.sysLoaded && S.step===1){\r
    if(!S.modelNodes.length){\r
      statusText='系统建模中 · 请拖拽组件到画布';\r
    }else if(canInitializeSimulation()){\r
      statusText='系统建模中 · 当前链路已可运行，可直接初始化仿真';\r
    }else{\r
      statusText='系统建模中 · 单击模块后可在右侧保存设置';\r
    }\r
  }else if(S.step===2){\r
    statusText=hasSimulationFaults()\r
      ?'系统模型已保存 · 当前包含故障注入，可继续仿真分析'\r
      :'系统模型已保存 · 故障注入为可选，可直接初始化仿真';\r
  }else if(S.step===3){\r
    statusText=hasSimulationFaults()\r
      ?'故障配置完成 · 仿真分析'\r
      :'仿真分析阶段 · 当前为无故障基线仿真';\r
  }\r
  if(typeof SIM!=='undefined'){\r
    if(SIM.running&&!SIM.paused){\r
      statusText=\`仿真运行中 · t = \${SIM.time.toFixed(2)}s / \${SIM.duration.toFixed(2)}s\`;\r
    }else if(SIM.paused){\r
      statusText=\`仿真已暂停 · t = \${SIM.time.toFixed(2)}s / \${SIM.duration.toFixed(2)}s\`;\r
    }else if(SIM.hasSamples&&S.step===3){\r
      statusText=\`仿真结果就绪 · \${SIM.datasetName} · 已采样 \${SIM.stepIndex} 步\`;\r
    }\r
  }\r
  document.getElementById('stxt').textContent=statusText;\r
  const sd=document.getElementById('sdot');\r
  sd.className='sdot'+['','sdot-b','sdot-r','sdot-g'][S.step];\r
  document.getElementById('sblk').textContent=\`组件: \${S.modelNodes.length} · 连线: \${S.modelEdges.length}\`;\r
  document.getElementById('sflt').textContent=\`故障模型: \${S.faultModels}\`;\r
  updateSimbarEnabled();\r
}\r
// --- 基础工具 ---\r
function clamp(value,min,max){return Math.min(Math.max(value,min),max);}\r
\r
function cloneDefaults(value){\r
  return JSON.parse(JSON.stringify(value));\r
}\r
\r
function createEmptyCanvasRecord(id,name,parentSubsystemNodeId=null){\r
  return {\r
    id,\r
    name,\r
    parentSubsystemNodeId,\r
    viewport:{scale:1,offsetX:0,offsetY:0},\r
    nodes:[],\r
    edges:[]\r
  };\r
}\r
\r
function ensureWorkbenchCanvasState(){\r
  if(!S.canvases||typeof S.canvases!=='object'){\r
    S.canvases={};\r
  }\r
  if(!S.canvases[S.rootCanvasId]){\r
    S.canvases[S.rootCanvasId]=createEmptyCanvasRecord(S.rootCanvasId,'顶层',null);\r
  }\r
  if(!S.activeCanvasId||!S.canvases[S.activeCanvasId]){\r
    S.activeCanvasId=S.rootCanvasId;\r
  }\r
  if(!Array.isArray(S.canvasTrail)||S.canvasTrail.length===0){\r
    S.canvasTrail=[S.rootCanvasId];\r
  }\r
  if(S.canvasTrail[0]!==S.rootCanvasId){\r
    S.canvasTrail=[S.rootCanvasId,...S.canvasTrail.filter(Boolean).filter(canvasId=>canvasId!==S.rootCanvasId)];\r
  }\r
  if(S.canvasTrail[S.canvasTrail.length-1]!==S.activeCanvasId){\r
    S.canvasTrail=[...S.canvasTrail.filter(Boolean),S.activeCanvasId];\r
  }\r
  if(!S.canvases[S.activeCanvasId]){\r
    S.canvases[S.activeCanvasId]=createEmptyCanvasRecord(\r
      S.activeCanvasId,\r
      S.activeCanvasId===S.rootCanvasId?'顶层':'未命名画布',\r
      null\r
    );\r
  }\r
}\r
\r
function getCanvasRecord(canvasId=S.activeCanvasId){\r
  ensureWorkbenchCanvasState();\r
  return S.canvases[canvasId]||null;\r
}\r
\r
function getActiveCanvasRecord(){\r
  return getCanvasRecord(S.activeCanvasId);\r
}\r
\r
function syncActiveCanvasViewportFromState(){\r
  ensureWorkbenchCanvasState();\r
  const canvas=getActiveCanvasRecord();\r
  if(!canvas){return;}\r
  canvas.viewport={\r
    scale:S.canvasScale,\r
    offsetX:S.canvasOffsetX,\r
    offsetY:S.canvasOffsetY\r
  };\r
}\r
\r
function restoreActiveCanvasViewport(canvasId=S.activeCanvasId){\r
  ensureWorkbenchCanvasState();\r
  const viewport=getCanvasRecord(canvasId)?.viewport||{};\r
  S.canvasScale=Number.isFinite(viewport.scale)?viewport.scale:1;\r
  S.canvasOffsetX=Number.isFinite(viewport.offsetX)?viewport.offsetX:0;\r
  S.canvasOffsetY=Number.isFinite(viewport.offsetY)?viewport.offsetY:0;\r
}\r
\r
function setActiveCanvasRecord(canvasId,trail=null){\r
  ensureWorkbenchCanvasState();\r
  if(!S.canvases[canvasId]){\r
    return false;\r
  }\r
  syncActiveCanvasViewportFromState();\r
  S.activeCanvasId=canvasId;\r
  if(Array.isArray(trail)&&trail.length){\r
    const normalizedTrail=trail.filter(Boolean);\r
    if(normalizedTrail[0]!==S.rootCanvasId){\r
      normalizedTrail.unshift(S.rootCanvasId);\r
    }\r
    S.canvasTrail=normalizedTrail;\r
  }else{\r
    S.canvasTrail=canvasId===S.rootCanvasId?[S.rootCanvasId]:[S.rootCanvasId,canvasId];\r
  }\r
  restoreActiveCanvasViewport(canvasId);\r
  return true;\r
}\r
\r
function getSubsystemCanvasId(nodeId){\r
  return \`canvas-\${nodeId}\`;\r
}\r
\r
function createSubsystemCanvas(node){\r
  const canvasId=getSubsystemCanvasId(node.id);\r
  if(!S.canvases[canvasId]){\r
    S.canvases[canvasId]=createEmptyCanvasRecord(canvasId,node.props?.name||'子系统',node.id);\r
  }\r
  node.targetCanvasId=canvasId;\r
  return S.canvases[canvasId];\r
}\r
\r
function openCanvasRecord(canvasId,trail=null){\r
  if(!setActiveCanvasRecord(canvasId,trail)){\r
    return false;\r
  }\r
  S.selBlk=null;\r
  S.selEdge=null;\r
  clearPendingConnection();\r
  renderModelNodes();\r
  clampCanvasOffset();\r
  applyCanvasTransform();\r
  renderPropertyPanel(null);\r
  syncConfigTargets('');\r
  updateUI();\r
  return true;\r
}\r
\r
function openSubsystemCanvas(nodeId){\r
  const node=getNode(nodeId);\r
  if(!node||node.type!=='subsystem_block'||!node.targetCanvasId){\r
    return false;\r
  }\r
  const trail=S.activeCanvasId===S.rootCanvasId\r
    ?[S.rootCanvasId,node.targetCanvasId]\r
    :[...S.canvasTrail.filter(Boolean),node.targetCanvasId];\r
  return openCanvasRecord(node.targetCanvasId,trail);\r
}\r
\r
function goToRootCanvas(){\r
  return openCanvasRecord(S.rootCanvasId,[S.rootCanvasId]);\r
}\r
\r
function navigateToCanvas(canvasId){\r
  const trailIndex=S.canvasTrail.indexOf(canvasId);\r
  if(trailIndex===-1){\r
    return false;\r
  }\r
  return openCanvasRecord(canvasId,S.canvasTrail.slice(0,trailIndex+1));\r
}\r
\r
function renderCanvasBreadcrumbs(){\r
  const host=document.getElementById('canvas-breadcrumbs');\r
  if(!host){return;}\r
  ensureWorkbenchCanvasState();\r
  const trail=S.canvasTrail.filter(Boolean);\r
  host.innerHTML=trail.map((canvasId,index)=>{\r
    const canvas=getCanvasRecord(canvasId);\r
    const label=canvasId===S.rootCanvasId?'顶层':(canvas?.name||canvasId);\r
    const isLast=index===trail.length-1;\r
    return \`\r
      <button type="button" class="canvas-breadcrumbs__item\${isLast?' is-active':''}" data-canvas-id="\${canvasId}" \${canvasId===S.rootCanvasId?'data-breadcrumb-root="true"':''} \${isLast?'aria-current="page"':''}>\r
        \${escapeHtml(label)}\r
      </button>\r
      \${!isLast?'<span class="canvas-breadcrumbs__sep">/</span>':''}\`;\r
  }).join('');\r
  host.querySelectorAll('[data-canvas-id]').forEach(btn=>{\r
    btn.addEventListener('click',()=>{\r
      const canvasId=btn.dataset.canvasId||S.rootCanvasId;\r
      if(canvasId===S.activeCanvasId){return;}\r
      navigateToCanvas(canvasId);\r
    });\r
  });\r
}\r
\r
function ensureSubsystemCanvasNode(node){\r
  if(!node||node.type!=='subsystem_block'){\r
    return null;\r
  }\r
  const canvas=createSubsystemCanvas(node);\r
  if(canvas&&canvas.parentSubsystemNodeId!==node.id){\r
    canvas.parentSubsystemNodeId=node.id;\r
  }\r
  return canvas;\r
}\r
\r
Object.defineProperty(S,'modelNodes',{\r
  configurable:true,\r
  enumerable:true,\r
  get(){\r
    return getActiveCanvasRecord()?.nodes||[];\r
  },\r
  set(value){\r
    const canvas=getActiveCanvasRecord();\r
    if(canvas){\r
      canvas.nodes=Array.isArray(value)?value:[];\r
    }\r
  }\r
});\r
\r
Object.defineProperty(S,'modelEdges',{\r
  configurable:true,\r
  enumerable:true,\r
  get(){\r
    return getActiveCanvasRecord()?.edges||[];\r
  },\r
  set(value){\r
    const canvas=getActiveCanvasRecord();\r
    if(canvas){\r
      canvas.edges=Array.isArray(value)?value:[];\r
    }\r
  }\r
});\r
\r
ensureWorkbenchCanvasState();\r
\r
const WORKBENCH_STORAGE_KEY='gz-workbench-system-model';\r
\r
function getRuntimeListenerStore(){\r
  if(!window.__GZ_RUNTIME_LISTENERS__){\r
    window.__GZ_RUNTIME_LISTENERS__={};\r
  }\r
  return window.__GZ_RUNTIME_LISTENERS__;\r
}\r
\r
function getWorkbenchSnapshotApi(){\r
  return window.__GZ_WORKBENCH_SNAPSHOT__||null;\r
}\r
\r
function createSystemModelSnapshot(){\r
  const api=getWorkbenchSnapshotApi();\r
  return api?.createWorkbenchSnapshot?api.createWorkbenchSnapshot(S):cloneDefaults({\r
    version:1,\r
    modelNodes:S.modelNodes,\r
    modelEdges:S.modelEdges,\r
    nodeSeq:S.nodeSeq,\r
    edgeSeq:S.edgeSeq,\r
    rootCanvasId:S.rootCanvasId,\r
    activeCanvasId:S.activeCanvasId,\r
    canvasTrail:S.canvasTrail,\r
    canvases:S.canvases,\r
    activeLineType:S.activeLineType,\r
    faultedBlks:S.faultedBlks,\r
    importedFaultModels:S.importedFaultModels\r
  });\r
}\r
\r
function restoreSystemModelSnapshot(snapshot){\r
  const api=getWorkbenchSnapshotApi();\r
  const restored=api?.restoreWorkbenchSnapshot?api.restoreWorkbenchSnapshot(snapshot):cloneDefaults(snapshot);\r
  S.canvases=restored.canvases||{};\r
  S.rootCanvasId=restored.rootCanvasId||'canvas-root';\r
  S.activeCanvasId=restored.activeCanvasId||S.rootCanvasId;\r
  S.canvasTrail=Array.isArray(restored.canvasTrail)&&restored.canvasTrail.length\r
    ?restored.canvasTrail\r
    :[S.rootCanvasId];\r
  ensureWorkbenchCanvasState();\r
  S.modelNodes=restored.modelNodes||[];\r
  S.modelEdges=restored.modelEdges||[];\r
  S.nodeSeq=restored.nodeSeq||0;\r
  S.edgeSeq=restored.edgeSeq||0;\r
  S.activeLineType=restored.activeLineType||'normal';\r
  S.workspaceSource=typeof restored.workspaceSource==='string'?restored.workspaceSource:(S.workspaceSource||'');\r
  S.faultedBlks=restored.faultedBlks||[];\r
  S.importedFaultModels=restored.importedFaultModels||[];\r
  S.faultModels=S.importedFaultModels.length;\r
  S.selBlk=null;\r
  S.selEdge=null;\r
  restoreActiveCanvasViewport(S.activeCanvasId);\r
  applyCanvasTransform();\r
  clearPendingConnection();\r
  renderCanvasBreadcrumbs();\r
  syncAllPythonInputConnectionState();\r
  renderModelNodes();\r
  renderPropertyPanel(null);\r
  setConnectionTool(S.activeLineType);\r
  syncConfigTargets('');\r
}\r
\r
function escapeHtml(value){\r
  return String(value ?? '')\r
    .replace(/&/g,'&amp;')\r
    .replace(/</g,'&lt;')\r
    .replace(/>/g,'&gt;')\r
    .replace(/"/g,'&quot;')\r
    .replace(/'/g,'&#39;');\r
}\r
\r
function clampInterfaceCount(value,[min,max]){\r
  const parsed=Number.parseInt(value,10);\r
  if(!Number.isFinite(parsed)){return min;}\r
  return clamp(parsed,min,max);\r
}\r
\r
function normalizeSimulationInterfaceList(items,prefix,fallbackType,minCount=0){\r
  const base=Array.isArray(items)?items:[];\r
  const normalized=base\r
    .map((item,index)=>({\r
      name:String(item?.name||\`\${prefix} \${index+1}\`).trim()||\`\${prefix} \${index+1}\`,\r
      type:PORT_FORMATS.includes(item?.type)?item.type:(fallbackType||'标量')\r
    }))\r
    .filter(Boolean);\r
  while(normalized.length<minCount){\r
    normalized.push({\r
      name:\`\${prefix} \${normalized.length+1}\`,\r
      type:fallbackType||'标量'\r
    });\r
  }\r
  return normalized;\r
}\r
\r
function normalizeSimulationInterfaces(props){\r
  const inputFallback=PORT_FORMATS.includes(props?.inputFormat)?props.inputFormat:'标量';\r
  const outputFallback=PORT_FORMATS.includes(props?.outputFormat)?props.outputFormat:'标量';\r
  props.inputs=normalizeSimulationInterfaceList(props?.inputs,'输入',inputFallback,1);\r
  props.outputs=normalizeSimulationInterfaceList(props?.outputs,'输出',outputFallback,1);\r
  props.middleVars=normalizeSimulationInterfaceList(props?.middleVars,'中间量',outputFallback,0);\r
  if(!props.middleVars.length&&props?.inputFormat){\r
    props.middleVars=[{name:'中间量 1',type:outputFallback}];\r
  }\r
  if(!props.ffunctionNote){\r
    props.ffunctionNote='当前预留 Python 函数接口，可在后续导入函数定义。';\r
  }\r
  delete props.inputFormat;\r
  delete props.outputFormat;\r
  return props;\r
}\r
\r
function getSimulationPortSets(props){\r
  normalizeSimulationInterfaces(props);\r
  return {\r
    inputs:props.inputs,\r
    outputs:props.outputs,\r
    middleVars:props.middleVars\r
  };\r
}\r
\r
function getSimulationNodeSize(props){\r
  const groups=getSimulationPortSets(props);\r
  const leftCount=Math.max(groups.inputs.length,1);\r
  const rightCount=Math.max(groups.outputs.length,1);\r
  const topCount=groups.middleVars.length;\r
  const verticalDominant=Math.max(leftCount,rightCount);\r
  return {\r
    width:clamp(196+Math.max(0,topCount-2)*28,196,336),\r
    height:clamp(116+Math.max(0,verticalDominant-2)*22+(topCount?18:0),116,312)\r
  };\r
}\r
\r
function applyNodeGeometry(node){\r
  if(!node){return;}\r
  if(node.type==='flow_block'&&isPythonBoundFlowBlock(node)){\r
    const size=getPythonBindingNodeSize(node);\r
    node.w=size.width;\r
    node.h=size.height;\r
  }else if(node.type==='simulation_block'){\r
    normalizeSimulationInterfaces(node.props);\r
    const size=getSimulationNodeSize(node.props);\r
    node.w=size.width;\r
    node.h=size.height;\r
  }else{\r
    const meta=COMPONENT_LIBRARY[node.type];\r
    if(meta){\r
      node.w=meta.width;\r
      node.h=meta.height;\r
    }\r
  }\r
  node.x=clamp(node.x,CANVAS_STAGE.nodePadding,CANVAS_STAGE.width-node.w-CANVAS_STAGE.nodePadding);\r
  node.y=clamp(node.y,CANVAS_STAGE.nodeMinY,CANVAS_STAGE.height-node.h-CANVAS_STAGE.nodePadding);\r
}\r
\r
function pruneInvalidEdgesForNode(node){\r
  const ports=getNodePorts(node);\r
  const outputCount=ports.outputs.length;\r
  const inputCount=ports.inputs.length;\r
  const removed=S.modelEdges.filter(edge=>{\r
    if(edge.sourceNodeId===node.id&&(edge.sourcePortIndex||0)>=outputCount){return true;}\r
    if(edge.targetNodeId===node.id&&(edge.targetPortIndex||0)>=inputCount){return true;}\r
    return false;\r
  });\r
  if(!removed.length){return 0;}\r
  const removedIds=new Set(removed.map(edge=>edge.id));\r
  S.modelEdges=S.modelEdges.filter(edge=>!removedIds.has(edge.id));\r
  syncAllPythonInputConnectionState();\r
  if(S.selEdge&&removedIds.has(S.selEdge)){S.selEdge=null;}\r
  if(S.protocolInjectTargetId&&removedIds.has(S.protocolInjectTargetId)){\r
    S.protocolInjectTargetId='';\r
    S.protocolInjectSelectionMode='';\r
    S.protocolInjectSelectionId='';\r
  }\r
  return removed.length;\r
}\r
\r
function getSimulationFlatOutputs(props){\r
  const groups=getSimulationPortSets(props);\r
  return [\r
    ...groups.outputs.map((item,index)=>({kind:'output',name:item.name,type:item.type,index,side:'right'})),\r
    ...groups.middleVars.map((item,index)=>({kind:'middle',name:item.name,type:item.type,index,side:'top'}))\r
  ];\r
}\r
\r
function buildSimulationInterfaceRows(items,prefix){\r
  return items.map((item,index)=>\`\r
    <div class="sim-intf-row" data-role="\${prefix}" data-index="\${index}">\r
      <div class="props-field">\r
        <label>\${prefix}名称 \${index+1}</label>\r
        <input data-sim-field="name" value="\${escapeHtml(item.name)}">\r
      </div>\r
      <div class="props-field">\r
        <label>\${prefix}类型</label>\r
        <select data-sim-field="type">\${buildSelectOptions(PORT_FORMATS,item.type)}</select>\r
      </div>\r
    </div>\`).join('');\r
}\r
\r
function buildSimulationBlockFields(node){\r
  normalizeSimulationInterfaces(node.props);\r
  return \`\r
    <div class="pgroup">\r
      <div class="pglbl">仿真接口</div>\r
      <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
      <div class="props-field"><label>模块类型</label><select id="prop-moduleType">\${buildSelectOptions(SIM_MODULE_TYPES,node.props.moduleType)}</select></div>\r
      <div class="sim-intf-toolbar">\r
        <div class="sim-intf-counts">\r
          <div class="props-field"><label>输入数量</label><input id="sim-input-count" type="number" min="\${SIM_INTERFACE_LIMITS.inputs[0]}" max="\${SIM_INTERFACE_LIMITS.inputs[1]}" value="\${node.props.inputs.length}"></div>\r
          <div class="props-field"><label>输出数量</label><input id="sim-output-count" type="number" min="\${SIM_INTERFACE_LIMITS.outputs[0]}" max="\${SIM_INTERFACE_LIMITS.outputs[1]}" value="\${node.props.outputs.length}"></div>\r
          <div class="props-field"><label>中间变量数量</label><input id="sim-middle-count" type="number" min="\${SIM_INTERFACE_LIMITS.middleVars[0]}" max="\${SIM_INTERFACE_LIMITS.middleVars[1]}" value="\${node.props.middleVars.length}"></div>\r
        </div>\r
        <button class="props-secondary" type="button" onclick="syncSimulationInterfaceCounts()">同步接口数量</button>\r
        <div class="sim-intf-note">中间变量当前位于模块上方，作为辅助观测端口使用；输入仍在左侧，主输出仍在右侧。</div>\r
      </div>\r
    </div>\r
    <div class="sim-intf-group">\r
      <div class="sim-intf-head">\r
        <div class="sim-intf-title">输入端口</div>\r
        <div class="sim-intf-meta">\${node.props.inputs.length} 个左侧端口</div>\r
      </div>\r
      <div class="sim-intf-list">\${buildSimulationInterfaceRows(node.props.inputs,'输入')}</div>\r
    </div>\r
    <div class="sim-intf-group">\r
      <div class="sim-intf-head">\r
        <div class="sim-intf-title">输出端口</div>\r
        <div class="sim-intf-meta">\${node.props.outputs.length} 个右侧主输出</div>\r
      </div>\r
      <div class="sim-intf-list">\${buildSimulationInterfaceRows(node.props.outputs,'输出')}</div>\r
    </div>\r
    <div class="sim-intf-group">\r
      <div class="sim-intf-head">\r
        <div class="sim-intf-title">中间变量</div>\r
        <div class="sim-intf-meta">\${node.props.middleVars.length} 个顶部观测端口</div>\r
      </div>\r
      <div class="sim-intf-list">\${node.props.middleVars.length?buildSimulationInterfaceRows(node.props.middleVars,'中间量'):'<div class="sim-intf-note">当前没有暴露的中间变量端口，可先调整数量后再同步。</div>'}</div>\r
    </div>\r
    <div class="props-field"><label>函数说明</label><textarea id="prop-ffunctionNote">\${escapeHtml(node.props.ffunctionNote)}</textarea></div>\r
    <div class="props-help">后续这里会接入 Python 函数导入能力。当前版本先支持接口编排、端口连线和基础模块运行时。</div>\`;\r
}\r
\r
function readSimulationInterfaceRows(role){\r
  return [...document.querySelectorAll(\`.sim-intf-row[data-role="\${role}"]\`)].map((row,index)=>({\r
    name:(row.querySelector('[data-sim-field="name"]')?.value||\`\${role} \${index+1}\`).trim()||\`\${role} \${index+1}\`,\r
    type:row.querySelector('[data-sim-field="type"]')?.value||'标量'\r
  }));\r
}\r
\r
function syncSimulationInterfaceCounts(){\r
  const node=getNode(S.selBlk);\r
  if(!node||node.type!=='simulation_block'){return;}\r
  const nextProps=cloneDefaults(node.props);\r
  nextProps.inputs=readSimulationInterfaceRows('输入');\r
  nextProps.outputs=readSimulationInterfaceRows('输出');\r
  nextProps.middleVars=readSimulationInterfaceRows('中间量');\r
  normalizeSimulationInterfaces(nextProps);\r
  const inputCount=clampInterfaceCount(document.getElementById('sim-input-count')?.value,SIM_INTERFACE_LIMITS.inputs);\r
  const outputCount=clampInterfaceCount(document.getElementById('sim-output-count')?.value,SIM_INTERFACE_LIMITS.outputs);\r
  const middleCount=clampInterfaceCount(document.getElementById('sim-middle-count')?.value,SIM_INTERFACE_LIMITS.middleVars);\r
  nextProps.inputs=normalizeSimulationInterfaceList(nextProps.inputs.slice(0,inputCount),'输入',nextProps.inputs[0]?.type||'标量',inputCount);\r
  nextProps.outputs=normalizeSimulationInterfaceList(nextProps.outputs.slice(0,outputCount),'输出',nextProps.outputs[0]?.type||'标量',outputCount);\r
  nextProps.middleVars=normalizeSimulationInterfaceList(nextProps.middleVars.slice(0,middleCount),'中间量',nextProps.middleVars[0]?.type||'标量',middleCount);\r
  const preview={...node,props:nextProps};\r
  renderPropertyPanel(preview);\r
}\r
\r
function isSubsystemBoundaryNodeType(type){\r
  return type==='subsystem_in_port'||type==='subsystem_out_port';\r
}\r
\r
function normalizeSubsystemInterfaceList(items,prefix,minCount=0){\r
  const base=Array.isArray(items)?items:[];\r
  const normalized=base\r
    .map((item,index)=>({\r
      id:String(item?.id||\`\${prefix.toLowerCase()}-\${index+1}\`).trim()||\`\${prefix.toLowerCase()}-\${index+1}\`,\r
      name:String(item?.name||\`\${prefix} \${index+1}\`).trim()||\`\${prefix} \${index+1}\`,\r
      type:PORT_FORMATS.includes(item?.type)?item.type:'标量',\r
      order:Number.isFinite(Number(item?.order))?Number(item.order):index\r
    }))\r
    .filter(Boolean);\r
  while(normalized.length<minCount){\r
    normalized.push({\r
      id:\`\${prefix.toLowerCase()}-\${normalized.length+1}\`,\r
      name:\`\${prefix} \${normalized.length+1}\`,\r
      type:'标量',\r
      order:normalized.length\r
    });\r
  }\r
  return normalized.map((item,index)=>({\r
    ...item,\r
    order:index\r
  }));\r
}\r
\r
function ensureSubsystemInterface(nodeOrProps){\r
  const props=nodeOrProps?.props||nodeOrProps||{};\r
  if(!props.interface||typeof props.interface!=='object'){\r
    props.interface={};\r
  }\r
  props.interface.inputs=normalizeSubsystemInterfaceList(props.interface.inputs,'输入',0);\r
  props.interface.outputs=normalizeSubsystemInterfaceList(props.interface.outputs,'输出',0);\r
  return props.interface;\r
}\r
\r
function buildSubsystemInterfaceRows(items,role){\r
  return items.map((item,index)=>\`\r
    <div class="sim-intf-row subsystem-intf-row" data-subsystem-role="\${role}" data-index="\${index}" data-port-id="\${escapeHtml(item.id)}">\r
      <div class="props-field">\r
        <label>\${role==='input'?'输入':'输出'}名称 \${index+1}</label>\r
        <input data-subsystem-field="name" value="\${escapeHtml(item.name)}">\r
      </div>\r
      <div class="props-field">\r
        <label>\${role==='input'?'输入':'输出'}类型</label>\r
        <select data-subsystem-field="type">\${buildSelectOptions(PORT_FORMATS,item.type)}</select>\r
      </div>\r
    </div>\`).join('');\r
}\r
\r
function buildSubsystemBlockFields(node){\r
  const canvas=ensureSubsystemCanvasNode(node);\r
  const intf=ensureSubsystemInterface(node);\r
  return \`\r
    <div class="pgroup">\r
      <div class="pglbl">子系统设置</div>\r
      <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
      <div class="props-field"><label>模块说明</label><textarea id="prop-description" rows="3" placeholder="可填写子系统职责、输入输出说明">\${escapeHtml(node.props.description||'')}</textarea></div>\r
      <div class="prow"><span class="pk">子画布 ID</span><span class="pv">\${escapeHtml(node.targetCanvasId||canvas?.id||'--')}<</span></div>\r
    </div>\r
    <div class="sim-intf-toolbar">\r
      <div class="sim-intf-counts">\r
        <div class="props-field"><label>输入数量</label><input id="subsystem-input-count" type="number" min="\${SUBSYSTEM_INTERFACE_LIMITS.inputs[0]}" max="\${SUBSYSTEM_INTERFACE_LIMITS.inputs[1]}" value="\${intf.inputs.length}"></div>\r
        <div class="props-field"><label>输出数量</label><input id="subsystem-output-count" type="number" min="\${SUBSYSTEM_INTERFACE_LIMITS.outputs[0]}" max="\${SUBSYSTEM_INTERFACE_LIMITS.outputs[1]}" value="\${intf.outputs.length}"></div>\r
      </div>\r
      <button class="props-secondary" type="button" onclick="syncSubsystemInterfaceCounts()">同步接口数量</button>\r
      <div class="sim-intf-note">父层子系统块显示这些稳定端口；进入子系统后会自动同步为内部边界输入/输出节点。</div>\r
    </div>\r
    <div class="sim-intf-group">\r
      <div class="sim-intf-head">\r
        <div class="sim-intf-title">输入接口</div>\r
        <div class="sim-intf-meta">\${intf.inputs.length} 个父层输入</div>\r
      </div>\r
      <div class="sim-intf-list">\${intf.inputs.length?buildSubsystemInterfaceRows(intf.inputs,'input'):'<div class="sim-intf-note">当前没有输入接口。</div>'}</div>\r
    </div>\r
    <div class="sim-intf-group">\r
      <div class="sim-intf-head">\r
        <div class="sim-intf-title">输出接口</div>\r
        <div class="sim-intf-meta">\${intf.outputs.length} 个父层输出</div>\r
      </div>\r
      <div class="sim-intf-list">\${intf.outputs.length?buildSubsystemInterfaceRows(intf.outputs,'output'):'<div class="sim-intf-note">当前没有输出接口。</div>'}</div>\r
    </div>\`;\r
}\r
\r
function readSubsystemInterfaceRows(role){\r
  return [...document.querySelectorAll(\`.subsystem-intf-row[data-subsystem-role="\${role}"]\`)].map((row,index)=>({\r
    id:row.dataset.portId||\`\${role}-\${index+1}\`,\r
    name:(row.querySelector('[data-subsystem-field="name"]')?.value||\`\${role==='input'?'输入':'输出'} \${index+1}\`).trim()||\`\${role==='input'?'输入':'输出'} \${index+1}\`,\r
    type:row.querySelector('[data-subsystem-field="type"]')?.value||'标量',\r
    order:index\r
  }));\r
}\r
\r
function getSubsystemBoundaryNodeId(subsystemNodeId,role,portId){\r
  return \`node-\${subsystemNodeId}-\${role}-\${portId}\`;\r
}\r
\r
function createSubsystemBoundaryNode(subsystemNode,role,item,index,existingNode=null){\r
  const type=role==='input'?'subsystem_in_port':'subsystem_out_port';\r
  const meta=COMPONENT_LIBRARY[type];\r
  const defaultX=role==='input'?64:(CANVAS_STAGE.width-meta.width-64);\r
  const defaultY=160+(index*92);\r
  return {\r
    id:existingNode?.id||getSubsystemBoundaryNodeId(subsystemNode.id,role,item.id),\r
    type,\r
    x:existingNode?.x ?? defaultX,\r
    y:existingNode?.y ?? defaultY,\r
    w:meta.width,\r
    h:meta.height,\r
    props:{\r
      ...(existingNode?.props||{}),\r
      name:item.name,\r
      interfacePortId:item.id,\r
      interfaceRole:role,\r
      portType:item.type,\r
      order:item.order\r
    },\r
    pythonBinding:null\r
  };\r
}\r
\r
function syncSubsystemBoundaryNodes(node){\r
  if(!node||node.type!=='subsystem_block'){return null;}\r
  const canvas=ensureSubsystemCanvasNode(node);\r
  const intf=ensureSubsystemInterface(node);\r
  canvas.name=node.props.name;\r
  const existingBoundaryByKey=new Map(\r
    (canvas.nodes||[])\r
      .filter(item=>isSubsystemBoundaryNodeType(item.type))\r
      .map(item=>[\`\${item.props?.interfaceRole||'input'}:\${item.props?.interfacePortId||item.id}\`,item])\r
  );\r
  const nextBoundaryNodes=[\r
    ...intf.inputs.map((item,index)=>createSubsystemBoundaryNode(node,'input',item,index,existingBoundaryByKey.get(\`input:\${item.id}\`))),\r
    ...intf.outputs.map((item,index)=>createSubsystemBoundaryNode(node,'output',item,index,existingBoundaryByKey.get(\`output:\${item.id}\`)))\r
  ];\r
  const nextBoundaryIds=new Set(nextBoundaryNodes.map(item=>item.id));\r
  const removedBoundaryIds=(canvas.nodes||[])\r
    .filter(item=>isSubsystemBoundaryNodeType(item.type)&&!nextBoundaryIds.has(item.id))\r
    .map(item=>item.id);\r
\r
  canvas.nodes=[\r
    ...nextBoundaryNodes,\r
    ...(canvas.nodes||[]).filter(item=>!isSubsystemBoundaryNodeType(item.type))\r
  ];\r
  if(removedBoundaryIds.length){\r
    canvas.edges=(canvas.edges||[]).filter(edge=>!removedBoundaryIds.includes(edge.sourceNodeId)&&!removedBoundaryIds.includes(edge.targetNodeId));\r
  }\r
  return canvas;\r
}\r
\r
function syncSubsystemInterfaceCounts(){\r
  const node=getNode(S.selBlk);\r
  if(!node||node.type!=='subsystem_block'){return;}\r
  const nextProps=cloneDefaults(node.props);\r
  ensureSubsystemInterface(nextProps);\r
  nextProps.interface.inputs=readSubsystemInterfaceRows('input');\r
  nextProps.interface.outputs=readSubsystemInterfaceRows('output');\r
  const inputCount=clampInterfaceCount(document.getElementById('subsystem-input-count')?.value,SUBSYSTEM_INTERFACE_LIMITS.inputs);\r
  const outputCount=clampInterfaceCount(document.getElementById('subsystem-output-count')?.value,SUBSYSTEM_INTERFACE_LIMITS.outputs);\r
  nextProps.interface.inputs=normalizeSubsystemInterfaceList(nextProps.interface.inputs.slice(0,inputCount),'输入',inputCount);\r
  nextProps.interface.outputs=normalizeSubsystemInterfaceList(nextProps.interface.outputs.slice(0,outputCount),'输出',outputCount);\r
  const preview={...node,props:nextProps};\r
  renderPropertyPanel(preview);\r
}\r
\r
function getNode(id){\r
  return S.modelNodes.find(node=>node.id===id);\r
}\r
\r
function getEdge(id){\r
  return S.modelEdges.find(edge=>edge.id===id);\r
}\r
\r
function getLayerLabel(layer){\r
  return LAYER_LABELS[layer]||layer||'未分类';\r
}\r
\r
function isPhysicalFaultNodeType(type){\r
  return type==='fault_bias'||type==='fault_noise';\r
}\r
\r
function isElectricalInjectableType(type){\r
  return type==='flow_block'||type==='simulation_block';\r
}\r
\r
function isProtocolInjectableEdge(edge){\r
  return !!edge&&edge.lineType==='can';\r
}\r
\r
function isFaultNodeType(type){\r
  return isPhysicalFaultNodeType(type);\r
}\r
\r
function hasActiveRuntimeFault(target){\r
  if(!target){return false;}\r
  const api=window.__GZ_FAULT_INJECTION_RUNTIME__;\r
  if(api?.hasActiveFaultBinding?.(target)){return true;}\r
  return Array.isArray(target.faultBindings)&&target.faultBindings.some(binding=>binding&&binding.active!==false);\r
}\r
\r
function isFaultNode(node){\r
  return !!node&&(isFaultNodeType(node.type)||Boolean(node.injectedFault)||hasActiveRuntimeFault(node));\r
}\r
\r
function getMutationScopeForType(type){\r
  return isFaultNodeType(type)?'fault':'system';\r
}\r
\r
function getMutationScopeForEdge(edge){\r
  const sourceNode=getNode(edge?.sourceNodeId);\r
  const targetNode=getNode(edge?.targetNodeId);\r
  return (sourceNode&&isFaultNodeType(sourceNode.type))||(targetNode&&isFaultNodeType(targetNode.type))?'fault':'system';\r
}\r
\r
function syncFaultModelCount(){\r
  S.faultModels=S.importedFaultModels.length;\r
  S.faultLoaded=S.faultModels>0;\r
}\r
\r
function initializeFaultCatalog(){\r
  S.availableFaultModels=cloneDefaults(FAULT_CATALOG_SEED);\r
  S.importedFaultModels=[];\r
  syncFaultModelCount();\r
  S.selectedFaultCatalogId=S.availableFaultModels[0]?.id||'';\r
}\r
\r
function buildFaultCatalogMeta(model){\r
  return \`\${model.tags?.[0]||'Fault'} · \${getLayerLabel(model.layer)} · \${model.createdAt||'未记录'}\`;\r
}\r
\r
function getFaultCatalogModel(id){\r
  return S.availableFaultModels.find(model=>model.id===id);\r
}\r
\r
function getImportedFaultModel(id){\r
  return S.importedFaultModels.find(model=>model.id===id);\r
}\r
\r
function ensureImportedFaultModel(model){\r
  if(!model){return null;}\r
  const existed=S.importedFaultModels.find(item=>item.id===model.id);\r
  if(existed){\r
    syncFaultModelCount();\r
    return existed;\r
  }\r
  const copy=cloneDefaults(model);\r
  S.importedFaultModels.unshift(copy);\r
  syncFaultModelCount();\r
  return copy;\r
}\r
\r
function upsertAvailableFaultModel(model){\r
  if(!model){return null;}\r
  const existed=S.availableFaultModels.find(item=>item.id===model.id||(item.name===model.name&&item.layer===model.layer));\r
  if(existed){\r
    Object.assign(existed,model);\r
    return existed;\r
  }\r
  S.availableFaultModels.unshift(cloneDefaults(model));\r
  return S.availableFaultModels[0];\r
}\r
\r
function renderFaultCatalogList(){\r
  const container=document.getElementById('ifm-list-container');\r
  if(!container){return;}\r
  if(!S.selectedFaultCatalogId&&S.availableFaultModels.length){\r
    S.selectedFaultCatalogId=S.availableFaultModels[0].id;\r
  }\r
  container.innerHTML='';\r
  if(S.availableFaultModels.length===0){\r
    container.innerHTML='<div class="ifm-empty">当前没有可导入的故障模型，请先从模板库新建。</div>';\r
  }else{\r
    S.availableFaultModels.forEach(model=>{\r
      const item=document.createElement('div');\r
      const imported=S.importedFaultModels.some(entry=>entry.id===model.id);\r
      item.className=\`ifm-item\${S.selectedFaultCatalogId===model.id?' on':''}\${imported?' is-imported':''}\`;\r
      item.dataset.faultId=model.id;\r
      item.innerHTML=\`\r
        <div class="ifm-icon">\${model.layer==='electrical'?'电':model.layer==='physical'?'物':'协'}</div>\r
        <div style="min-width:0;flex:1">\r
          <div class="ifm-name">\${escapeHtml(model.name)}</div>\r
          <div class="ifm-meta">\${escapeHtml(buildFaultCatalogMeta(model))}</div>\r
        </div>\r
        \${imported?'<span class="ifm-state">已导入</span>':''}\`;\r
      item.addEventListener('click',()=>selectFaultCatalogModel(model.id));\r
      container.appendChild(item);\r
    });\r
  }\r
  const selected=getFaultCatalogModel(S.selectedFaultCatalogId);\r
  document.getElementById('ifm-sel-hint').textContent=selected\r
    ?\`已选：\${selected.name} · \${getLayerLabel(selected.layer)}\`\r
    :'已选：未选择故障模型';\r
}\r
\r
function selectFaultCatalogModel(id){\r
  S.selectedFaultCatalogId=id;\r
  renderFaultCatalogList();\r
}\r
\r
function getElectricalInjectableNodes(){\r
  return S.modelNodes.filter(node=>isElectricalInjectableType(node.type));\r
}\r
\r
function clearCanvasSelection(){\r
  S.selBlk=null;\r
  S.selEdge=null;\r
  renderModelNodes();\r
  renderPropertyPanel(null);\r
}\r
\r
function findNearestEdgeIdByClientPoint(clientX,clientY,threshold=14){\r
  const paths=[...document.querySelectorAll('.edge-path[data-edge-id]')];\r
  if(paths.length===0){return '';}\r
  const point=clientToStagePoint(clientX,clientY);\r
  const stageThreshold=threshold/Math.max(S.canvasScale,0.001);\r
  let nearestId='';\r
  let nearestDistance=Infinity;\r
\r
  paths.forEach(path=>{\r
    const total=path.getTotalLength();\r
    const sampleStep=Math.max(8,total/18);\r
    for(let cursor=0;cursor<=total;cursor+=sampleStep){\r
      const pos=path.getPointAtLength(Math.min(cursor,total));\r
      const distance=Math.hypot(pos.x-point.x,pos.y-point.y);\r
      if(distance<nearestDistance){\r
        nearestDistance=distance;\r
        nearestId=path.dataset.edgeId||'';\r
      }\r
    }\r
    const last=path.getPointAtLength(total);\r
    const lastDistance=Math.hypot(last.x-point.x,last.y-point.y);\r
    if(lastDistance<nearestDistance){\r
      nearestDistance=lastDistance;\r
      nearestId=path.dataset.edgeId||'';\r
    }\r
  });\r
\r
  return nearestDistance<=stageThreshold?nearestId:'';\r
}\r
\r
function getConfigurableNodes(){\r
  return S.modelNodes.filter(node=>node.type==='flow_block'||node.type==='simulation_block');\r
}\r
\r
function getNodeTypeCount(type){\r
  return S.modelNodes.filter(node=>node.type===type).length+1;\r
}\r
\r
function getCanvasViewport(){\r
  return document.getElementById('canvas-viewport');\r
}\r
\r
function getCanvasStage(){\r
  return document.getElementById('canvas-stage');\r
}\r
\r
function getEdgeLabel(edge){\r
  if(edge.lineType==='can'&&edge.injectedFault?.faultKind){\r
    return \`CAN · \${edge.injectedFault.faultKind}\`;\r
  }\r
  return edge.lineType==='can'?'CAN':'LINK';\r
}\r
\r
function createDefaultPythonBinding(){\r
  return {\r
    bound:false,\r
    fileName:null,\r
    moduleName:null,\r
    description:'',\r
    entryFunction:null,\r
    parsedInterface:null,\r
    rawSource:'',\r
    executionMode:'mock',\r
    executionConfig:{endpoint:'/api/python-flow/execute',timeoutMs:3000},\r
    portMapping:{inputs:[],outputs:[],middleVars:[]}\r
  };\r
}\r
\r
function ensureFlowNodePythonBinding(node){\r
  if(!node||node.type!=='simulation_block'){return createDefaultPythonBinding();}\r
  if(!node.pythonBinding){\r
    node.pythonBinding=createDefaultPythonBinding();\r
  }\r
  if(!node.pythonBinding.portMapping){\r
    node.pythonBinding.portMapping={inputs:[],outputs:[],middleVars:[]};\r
  }\r
  return node.pythonBinding;\r
}\r
\r
function isPythonBoundFlowBlock(node){\r
  return !!node&&node.type==='simulation_block'&&ensureFlowNodePythonBinding(node).bound;\r
}\r
\r
function getPythonBindingNodeSize(node){\r
  const binding=ensureFlowNodePythonBinding(node);\r
  const inputCount=Math.max(binding.portMapping.inputs.length,1);\r
  const outputCount=Math.max(binding.portMapping.outputs.length,1);\r
  const middleCount=binding.portMapping.middleVars.length;\r
  const verticalDominant=Math.max(inputCount,outputCount);\r
  return {\r
    width:clamp(210+Math.max(0,middleCount-1)*34,210,360),\r
    height:clamp(102+Math.max(0,verticalDominant-2)*24+(middleCount?22:0),102,320)\r
  };\r
}\r
\r
function getPythonBindingSummary(node){\r
  const binding=ensureFlowNodePythonBinding(node);\r
  return \`\${binding.portMapping.inputs.length} 输入 / \${binding.portMapping.outputs.length} 输出 / \${binding.portMapping.middleVars.length} 中间变量\`;\r
}\r
\r
function buildPythonPortTooltip(meta,kind='input'){\r
  if(!meta){return '';}\r
  const parts=[meta.displayName||meta.varName||'端口'];\r
  if(meta.type){parts.push(\`类型: \${meta.type}\`);}\r
  if(kind==='input'&&meta.default!==null&&meta.default!==undefined&&meta.default!==''){\r
    parts.push(\`默认值: \${meta.default}\`);\r
  }\r
  if(meta.comment){parts.push(meta.comment);}\r
  return parts.join('\\\\n');\r
}\r
\r
function buildEdgePortMeta(port){\r
  return {\r
    kind:port.kind||'output',\r
    varName:port.meta?.varName||null,\r
    displayName:port.meta?.displayName||port.label||'',\r
    type:port.meta?.type||'any',\r
    default:port.meta?.default??null\r
  };\r
}\r
\r
function normalizePortType(type){\r
  if(!type){return 'any';}\r
  return String(type).trim().toLowerCase();\r
}\r
\r
function arePortTypesCompatible(sourceMeta,targetMeta){\r
  const sourceType=normalizePortType(sourceMeta?.type);\r
  const targetType=normalizePortType(targetMeta?.type);\r
  if(sourceType==='any'||targetType==='any'){return true;}\r
  if(sourceType===targetType){return true;}\r
  if(sourceType==='int'&&targetType==='float'){return true;}\r
  return false;\r
}\r
\r
function getPortDisplayName(port){\r
  if(port?.meta?.displayName){return port.meta.displayName;}\r
  if(port?.meta?.varName){return port.meta.varName;}\r
  return '';\r
}\r
\r
function getPortTooltip(port,direction='input'){\r
  if(port?.meta){\r
    return buildPythonPortTooltip(port.meta,direction==='input'?'input':(port.kind||'output'));\r
  }\r
  return port?.label||'';\r
}\r
\r
function isPortConnected(nodeId,direction,index){\r
  if(direction==='input'){\r
    return S.modelEdges.some(edge=>edge.targetNodeId===nodeId&&(edge.targetPortIndex||0)===index);\r
  }\r
  return S.modelEdges.some(edge=>edge.sourceNodeId===nodeId&&(edge.sourcePortIndex||0)===index);\r
}\r
\r
function getPortTone(node,port,direction){\r
  if(direction==='input'){\r
    return port?.meta?.connected?'#1d6fbf':'#6f8fb8';\r
  }\r
  if(port?.kind==='middle'){\r
    return '#27808f';\r
  }\r
  if(node.type==='signal_source'){\r
    return '#4f86e7';\r
  }\r
  return '#6da0ff';\r
}\r
\r
function appendPortLabel(portEl,port){\r
  const label=getPortDisplayName(port);\r
  if(!label){return;}\r
  const labelEl=document.createElement('span');\r
  labelEl.className='node-port__label';\r
  labelEl.textContent=label;\r
  portEl.appendChild(labelEl);\r
}\r
\r
function syncPythonInputConnectionState(nodeId){\r
  const node=getNode(nodeId);\r
  if(!isPythonBoundFlowBlock(node)){return;}\r
  node.pythonBinding.portMapping.inputs.forEach((port,index)=>{\r
    port.connected=S.modelEdges.some(edge=>edge.targetNodeId===nodeId&&(edge.targetPortIndex||0)===index);\r
  });\r
}\r
\r
function syncAllPythonInputConnectionState(){\r
  S.modelNodes.forEach(node=>{\r
    if(isPythonBoundFlowBlock(node)){\r
      syncPythonInputConnectionState(node.id);\r
    }\r
  });\r
}\r
\r
function openPythonBindingDialog(nodeId=''){\r
  const target=getNode(nodeId||S.selBlk);\r
  if(!target||target.type!=='simulation_block'){\r
    toast('请先选中一个仿真块以绑定 Python 文件','w');\r
    return;\r
  }\r
  const binding=ensureFlowNodePythonBinding(target);\r
  window.dispatchEvent(new CustomEvent('gz:open-python-binding',{\r
    detail:{\r
      targetNode:{id:target.id,label:target.props.name,props:cloneDefaults(target.props)},\r
      parsedInterface:binding.bound?cloneDefaults(binding.parsedInterface):null,\r
      boundSnapshot:binding.bound?cloneDefaults(binding):null\r
    }\r
  }));\r
}\r
\r
function applyPythonBindingToNode(nodeId,binding){\r
  const node=getNode(nodeId);\r
  if(!node||node.type!=='simulation_block'){return;}\r
  node.pythonBinding=cloneDefaults(binding);\r
  applyNodeGeometry(node);\r
  const removedEdges=pruneInvalidEdgesForNode(node);\r
  syncAllPythonInputConnectionState();\r
  markTopologyDirty('system');\r
  renderModelNodes();\r
  selectNode(node.id);\r
  syncConfigTargets(node.id);\r
  updateUI();\r
  toast(\`已为 \${node.props.name} 绑定 \${binding.fileName}\${removedEdges?\`，并移除 \${removedEdges} 条无效连线\`:''}\`,'s');\r
}\r
\r
function unbindPythonBinding(nodeId=''){\r
  const node=getNode(nodeId||S.selBlk);\r
  if(!node||node.type!=='simulation_block'){return;}\r
  const binding=ensureFlowNodePythonBinding(node);\r
  if(!binding.bound){\r
    toast('当前仿真块尚未绑定 Python 文件','w');\r
    return;\r
  }\r
  node.pythonBinding=createDefaultPythonBinding();\r
  applyNodeGeometry(node);\r
  const removedEdges=pruneInvalidEdgesForNode(node);\r
  syncAllPythonInputConnectionState();\r
  markTopologyDirty('system');\r
  renderModelNodes();\r
  selectNode(node.id);\r
  syncConfigTargets(node.id);\r
  updateUI();\r
  toast(\`已解除 \${node.props.name} 的 Python 绑定\${removedEdges?\`，并移除 \${removedEdges} 条无效连线\`:''}\`,'s');\r
}\r
\r
function getNodePorts(node){\r
  if(!node){return {inputs:[],outputs:[]};}\r
  if(node.type==='flow_block'&&isPythonBoundFlowBlock(node)){\r
    const binding=ensureFlowNodePythonBinding(node);\r
    return {\r
      inputs:binding.portMapping.inputs.map((item,index)=>({\r
        key:\`input-\${index}\`,\r
        label:item.displayName||item.varName||\`input_\${index}\`,\r
        kind:'input',\r
        side:'left',\r
        meta:item\r
      })),\r
      outputs:[\r
        ...binding.portMapping.outputs.map((item,index)=>({\r
          key:\`output-\${index}\`,\r
          label:item.displayName||item.varName||\`output_\${index}\`,\r
          kind:'output',\r
          side:'right',\r
          meta:item\r
        })),\r
        ...binding.portMapping.middleVars.map((item,index)=>({\r
          key:\`middle-\${index}\`,\r
          label:item.displayName||item.varName||\`middle_\${index}\`,\r
          kind:'middle',\r
          side:'top',\r
          meta:item\r
        }))\r
      ]\r
    };\r
  }\r
  if(node.type==='signal_source'){\r
    return {\r
      inputs:[],\r
      outputs:[{key:'signal',label:node.props.outputFormat||'输出'}]\r
    };\r
  }\r
  if(node.type==='flow_block'){\r
    return {\r
      inputs:[{key:'input',label:node.props.inputName||'输入'}],\r
      outputs:[{key:'output',label:node.props.outputName||'输出'}]\r
    };\r
  }\r
  if(node.type==='simulation_block'){\r
    const groups=getSimulationPortSets(node.props);\r
    return {\r
      inputs:groups.inputs.map((item,index)=>({\r
        key:\`input-\${index}\`,\r
        label:\`输入 \${index+1} · \${item.name} / \${item.type}\`,\r
        kind:'input',\r
        side:'left'\r
      })),\r
      outputs:getSimulationFlatOutputs(node.props).map((item,index)=>({\r
        key:\`\${item.kind}-\${item.index}\`,\r
        label:\`\${item.kind==='middle'?'中间量':'输出'} \${item.index+1} · \${item.name} / \${item.type}\`,\r
        kind:item.kind,\r
        side:item.side,\r
        portIndex:index\r
      }))\r
    };\r
  }\r
  if(node.type.startsWith('fault_')){\r
    return {\r
      inputs:[{key:'input',label:'故障输入'}],\r
      outputs:[{key:'output',label:'故障输出'}]\r
    };\r
  }\r
  if(node.type.startsWith('instrument_')){\r
    return {\r
      inputs:[{key:'input',label:'观测输入'}],\r
      outputs:[]\r
    };\r
  }\r
  return {inputs:[],outputs:[]};\r
}\r
\r
function canvasNumber(value,fallback=0){\r
  const numeric=Number(value);\r
  return Number.isFinite(numeric)?numeric:fallback;\r
}\r
\r
function isFiniteCanvasPoint(point){\r
  return Boolean(point)&&Number.isFinite(point.x)&&Number.isFinite(point.y);\r
}\r
\r
function getPortInfo(node,direction,index=0){\r
  const ports=getNodePorts(node)[direction==='input'?'inputs':'outputs'];\r
  const port=ports[index];\r
  if(!port){return null;}\r
  const side=port.side||(direction==='input'?'left':'right');\r
  const meta=COMPONENT_LIBRARY[node.type]||{};\r
  const nodeW=canvasNumber(node.w,canvasNumber(meta.width,120));\r
  const nodeH=canvasNumber(node.h,canvasNumber(meta.height,70));\r
  const nodeX=canvasNumber(node.x,0);\r
  const nodeY=canvasNumber(node.y,0);\r
  let localX=direction==='input'?0:nodeW;\r
  let localY=Math.round(nodeH/2);\r
  if(side==='top'){\r
    const topPorts=ports.filter(item=>(item.side||'right')==='top');\r
    const topIndex=topPorts.findIndex(item=>item.key===port.key);\r
    const topGap=nodeW/(Math.max(topPorts.length,1)+1);\r
    localX=Math.round(topGap*(topIndex+1));\r
    localY=0;\r
  }else{\r
    const sidePorts=ports.filter(item=>(item.side||(direction==='input'?'left':'right'))===side);\r
    const sideIndex=sidePorts.findIndex(item=>item.key===port.key);\r
    const gap=nodeH/(Math.max(sidePorts.length,1)+1);\r
    localY=Math.round(gap*(sideIndex+1));\r
    localX=side==='left'?0:nodeW;\r
  }\r
  return {\r
    ...port,\r
    direction,\r
    side,\r
    index,\r
    localX,\r
    localY,\r
    x:nodeX+localX,\r
    y:nodeY+localY\r
  };\r
}\r
\r
function buildEdgePath(start,end){\r
  if(!isFiniteCanvasPoint(start)||!isFiniteCanvasPoint(end)){\r
    return 'M 0 0 C 0 0, 0 0, 0 0';\r
  }\r
  const deltaX=Math.max(64,Math.abs(end.x-start.x)*0.42);\r
  const deltaY=Math.max(48,Math.abs(end.y-start.y)*0.38);\r
  const cp1={\r
    x:start.side==='right'?start.x+deltaX:(start.side==='left'?start.x-deltaX:start.x),\r
    y:start.side==='top'?start.y-deltaY:start.y\r
  };\r
  const cp2={\r
    x:end.side==='right'?end.x+deltaX:(end.side==='left'?end.x-deltaX:end.x),\r
    y:end.side==='top'?end.y-deltaY:end.y\r
  };\r
  return \`M \${start.x} \${start.y} C \${cp1.x} \${cp1.y}, \${cp2.x} \${cp2.y}, \${end.x} \${end.y}\`;\r
}\r
\r
function clientToStagePoint(clientX,clientY){\r
  const viewport=getCanvasViewport();\r
  const rect=viewport.getBoundingClientRect();\r
  return {\r
    x:(clientX-rect.left-S.canvasOffsetX)/S.canvasScale,\r
    y:(clientY-rect.top-S.canvasOffsetY)/S.canvasScale\r
  };\r
}\r
\r
function movedBeyondPointerThreshold(startX,startY,currentX,currentY,threshold=POINTER_DRAG_THRESHOLD){\r
  return Math.hypot((currentX||0)-(startX||0),(currentY||0)-(startY||0))>=threshold;\r
}\r
\r
function clampCanvasOffset(){\r
  const viewport=getCanvasViewport();\r
  if(!viewport){return;}\r
  const scaledWidth=CANVAS_STAGE.width*S.canvasScale;\r
  const scaledHeight=CANVAS_STAGE.height*S.canvasScale;\r
  const width=viewport.clientWidth;\r
  const height=viewport.clientHeight;\r
  const edgeGap=72;\r
\r
  if(scaledWidth<=width-edgeGap*2){\r
    S.canvasOffsetX=Math.round((width-scaledWidth)/2);\r
  }else{\r
    S.canvasOffsetX=clamp(S.canvasOffsetX,width-scaledWidth-edgeGap,edgeGap);\r
  }\r
\r
  if(scaledHeight<=height-edgeGap*2){\r
    S.canvasOffsetY=Math.round((height-scaledHeight)/2);\r
  }else{\r
    S.canvasOffsetY=clamp(S.canvasOffsetY,height-scaledHeight-edgeGap,edgeGap);\r
  }\r
}\r
\r
function applyCanvasTransform(){\r
  const stage=getCanvasStage();\r
  if(stage){\r
    stage.style.transform=\`translate(\${S.canvasOffsetX}px,\${S.canvasOffsetY}px) scale(\${S.canvasScale})\`;\r
  }\r
  const fill=document.getElementById('canvas-zoom-fill');\r
  const reset=document.getElementById('canvas-zoom-reset');\r
  const percent=Math.round(S.canvasScale*100);\r
  if(fill){\r
    const ratio=clamp((S.canvasScale-CANVAS_STAGE.minScale)/(CANVAS_STAGE.maxScale-CANVAS_STAGE.minScale),0,1);\r
    fill.style.width=\`\${Math.round(28+ratio*72)}%\`;\r
  }\r
  if(reset){\r
    reset.textContent=\`\${percent}%\`;\r
  }\r
  syncActiveCanvasViewportFromState();\r
}\r
\r
function setCanvasZoom(nextScale,pivotClientX,pivotClientY){\r
  const viewport=getCanvasViewport();\r
  if(!viewport){return;}\r
  const rect=viewport.getBoundingClientRect();\r
  const oldScale=S.canvasScale;\r
  const clampedScale=clamp(nextScale,CANVAS_STAGE.minScale,CANVAS_STAGE.maxScale);\r
  const pivotX=(pivotClientX ?? (rect.left+rect.width/2))-rect.left;\r
  const pivotY=(pivotClientY ?? (rect.top+rect.height/2))-rect.top;\r
  const stageX=(pivotX-S.canvasOffsetX)/oldScale;\r
  const stageY=(pivotY-S.canvasOffsetY)/oldScale;\r
  S.canvasScale=clampedScale;\r
  S.canvasOffsetX=pivotX-stageX*S.canvasScale;\r
  S.canvasOffsetY=pivotY-stageY*S.canvasScale;\r
  clampCanvasOffset();\r
  applyCanvasTransform();\r
}\r
\r
function handleCanvasZoomIn(){\r
  setCanvasZoom(S.canvasScale+0.1);\r
}\r
\r
function handleCanvasZoomOut(){\r
  setCanvasZoom(S.canvasScale-0.1);\r
}\r
\r
function handleCanvasZoomReset(){\r
  S.canvasScale=1;\r
  S.canvasOffsetX=0;\r
  S.canvasOffsetY=0;\r
  clampCanvasOffset();\r
  applyCanvasTransform();\r
}\r
\r
function setConnectionTool(type){\r
  S.activeLineType=type==='can'?'can':'normal';\r
  document.querySelectorAll('.citem-line-tool').forEach(item=>{\r
    item.classList.toggle('active',item.dataset.lineType===S.activeLineType);\r
  });\r
  const chip=document.getElementById('line-mode-chip');\r
  if(chip){\r
    chip.textContent=S.activeLineType==='can'?'CAN 总线':'普通连接线';\r
    chip.classList.toggle('can',S.activeLineType==='can');\r
  }\r
  if(S.pendingConnection){\r
    S.pendingConnection.lineType=S.activeLineType;\r
    renderEdges();\r
  }\r
}\r
\r
function clearPendingConnection(){\r
  S.pendingConnection=null;\r
  renderEdges();\r
}\r
\r
function markTopologyDirty(scope='system'){\r
  if(scope==='system'){\r
    S.systemSaved=false;\r
  }\r
  S.simDone=false;\r
  if(typeof SIM!=='undefined'){\r
    if(typeof clearSimLoop==='function'){clearSimLoop();}\r
    SIM.inited=false;\r
    SIM.running=false;\r
    SIM.paused=false;\r
    SIM.hasSamples=false;\r
    SIM.time=0;\r
    SIM.stepIndex=0;\r
  }\r
  if(scope==='system'){\r
    if(S.step!==1){S.step=1;}\r
    return;\r
  }\r
  if(S.systemSaved){\r
    S.step=2;\r
  }\r
}\r
\r
function buildSelectOptions(options,selected){\r
  return options.map(option=>\`<option value="\${escapeHtml(option)}"\${option===selected?' selected':''}>\${escapeHtml(option)}</option>\`).join('');\r
}\r
\r
function buildNodeSubtitle(node){\r
  const props=node.props;\r
  const faultNote=node.injectedFault?' · 电气故障':''; \r
  switch(node.type){\r
    case 'signal_source':\r
      return \`\${props.waveType} · 幅值\${props.amplitude} · \${props.outputFormat}\`;\r
    case 'flow_block':\r
      return \`\${props.inputName} / \${props.inputFormat} → \${props.outputName} / \${props.outputFormat}\${faultNote}\`;\r
    case 'simulation_block':\r
      normalizeSimulationInterfaces(props);\r
      return \`\${props.inputs.length}输入 · \${props.outputs.length}输出 · \${props.middleVars.length}中间量 · \${props.moduleType}\${faultNote}\`;\r
    case 'fault_bias':\r
    case 'fault_noise':\r
    case 'fault_stuck':\r
    case 'fault_drift':\r
      return \`\${props.faultType} · \${props.layer}\`;\r
    case 'instrument_scope':\r
      return \`\${props.instrumentType} · 双击查看波形\`;\r
    case 'instrument_spectrum':\r
    case 'instrument_logger':\r
      return \`\${props.instrumentType} · \${props.sampleRate}\`;\r
    case 'link_normal':\r
    case 'link_can':\r
      return \`\${props.sourcePort} → \${props.targetPort}\`;\r
    default:\r
      return '';\r
  }\r
}\r
\r
function renderEdges(){\r
  const edgeGroup=document.getElementById('edge-group');\r
  const preview=document.getElementById('edge-preview');\r
  if(!edgeGroup||!preview){return;}\r
  edgeGroup.innerHTML='';\r
\r
  S.modelEdges.forEach(edge=>{\r
    const sourceNode=getNode(edge.sourceNodeId);\r
    const targetNode=getNode(edge.targetNodeId);\r
    if(!sourceNode||!targetNode){return;}\r
    const sourcePort=getPortInfo(sourceNode,'output',edge.sourcePortIndex||0);\r
    const targetPort=getPortInfo(targetNode,'input',edge.targetPortIndex||0);\r
    if(!sourcePort||!targetPort||!isFiniteCanvasPoint(sourcePort)||!isFiniteCanvasPoint(targetPort)){return;}\r
    const selected=S.selEdge===edge.id;\r
    const faulted=Boolean(edge.injectedFault);\r
    const edgePath=buildEdgePath(sourcePort,targetPort);\r
\r
    const hit=document.createElementNS('http://www.w3.org/2000/svg','path');\r
    hit.setAttribute('d',edgePath);\r
    hit.setAttribute('class','edge-hit');\r
    hit.dataset.edgeId=edge.id;\r
    hit.addEventListener('click',event=>{\r
      event.stopPropagation();\r
      selectEdge(edge.id);\r
    });\r
    edgeGroup.appendChild(hit);\r
\r
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');\r
    path.setAttribute('d',edgePath);\r
    path.setAttribute('class',\`edge-path edge-path--\${edge.lineType}\${selected?' is-selected':''}\${faulted?' is-faulted':''}\`);\r
    path.setAttribute('marker-end',faulted?'url(#edge-arrow-fault)':\`url(#edge-arrow-\${edge.lineType})\`);\r
    path.dataset.edgeId=edge.id;\r
    path.addEventListener('click',event=>{\r
      event.stopPropagation();\r
      selectEdge(edge.id);\r
    });\r
    edgeGroup.appendChild(path);\r
\r
    const label=document.createElementNS('http://www.w3.org/2000/svg','text');\r
    label.setAttribute('class',\`edge-label\${selected?' is-selected':''}\${faulted?' is-faulted':''}\`);\r
    label.setAttribute('x',String(Math.round((sourcePort.x+targetPort.x)/2)));\r
    label.setAttribute('y',String(Math.round((sourcePort.y+targetPort.y)/2)-10));\r
    label.setAttribute('text-anchor','middle');\r
    label.dataset.edgeId=edge.id;\r
    label.textContent=getEdgeLabel(edge);\r
    label.addEventListener('click',event=>{\r
      event.stopPropagation();\r
      selectEdge(edge.id);\r
    });\r
    edgeGroup.appendChild(label);\r
  });\r
\r
  if(S.pendingConnection){\r
    const sourceNode=getNode(S.pendingConnection.sourceNodeId);\r
    const sourcePort=sourceNode?getPortInfo(sourceNode,'output',S.pendingConnection.sourcePortIndex||0):null;\r
    if(sourcePort){\r
      preview.style.display='block';\r
      preview.setAttribute('d',buildEdgePath(sourcePort,{\r
        x:S.pendingConnection.x,\r
        y:S.pendingConnection.y\r
      }));\r
      preview.setAttribute('stroke',S.pendingConnection.lineType==='can'?'#8c7cf6':'#7ab7ff');\r
      preview.setAttribute('stroke-width',S.pendingConnection.lineType==='can'?'2.8':'2');\r
    }else{\r
      preview.style.display='none';\r
      preview.setAttribute('d','');\r
    }\r
  }else{\r
    preview.style.display='none';\r
    preview.setAttribute('d','');\r
  }\r
}\r
\r
function updateNodePositionDOM(node){\r
  const element=document.getElementById(\`b-\${node.id}\`);\r
  if(!element){return;}\r
  element.style.left=\`\${node.x}px\`;\r
  element.style.top=\`\${node.y}px\`;\r
}\r
\r
function beginNodeDrag(event,nodeId){\r
  if(event.button!==0||event.target.closest('.node-port')){return;}\r
  const node=getNode(nodeId);\r
  if(!node){return;}\r
  selectNode(nodeId);\r
  NODE_DRAG.active=true;\r
  NODE_DRAG.engaged=false;\r
  NODE_DRAG.pointerId=event.pointerId;\r
  NODE_DRAG.nodeId=nodeId;\r
  NODE_DRAG.startX=event.clientX;\r
  NODE_DRAG.startY=event.clientY;\r
  NODE_DRAG.originX=node.x;\r
  NODE_DRAG.originY=node.y;\r
}\r
\r
function handlePortClick(event,nodeId,direction,index){\r
  event.stopPropagation();\r
  const node=getNode(nodeId);\r
  if(!node){return;}\r
  const port=getPortInfo(node,direction,index);\r
  if(!port){return;}\r
\r
  if(direction==='output'){\r
    S.pendingConnection={\r
      sourceNodeId:nodeId,\r
      sourcePortIndex:index,\r
      lineType:S.activeLineType,\r
      x:port.x,\r
      y:port.y\r
    };\r
    renderEdges();\r
    return;\r
  }\r
\r
  if(!S.pendingConnection){\r
    toast('请先从输出端口开始连线','w');\r
    return;\r
  }\r
\r
  if(S.pendingConnection.sourceNodeId===nodeId){\r
    toast('请连接到其他模块的输入端口','w');\r
    clearPendingConnection();\r
    return;\r
  }\r
\r
  const sourceNode=getNode(S.pendingConnection.sourceNodeId);\r
  const sourcePort=getPortInfo(sourceNode,'output',S.pendingConnection.sourcePortIndex||0);\r
  const sourceMeta=buildEdgePortMeta(sourcePort);\r
  const targetMeta=buildEdgePortMeta(port);\r
  if(!arePortTypesCompatible(sourceMeta,targetMeta)){\r
    toast(\`端口类型不兼容：\${sourceMeta.type||'any'} -> \${targetMeta.type||'any'}\`,'w');\r
    clearPendingConnection();\r
    return;\r
  }\r
\r
  const duplicate=S.modelEdges.some(edge=>\r
    edge.sourceNodeId===S.pendingConnection.sourceNodeId &&\r
    edge.targetNodeId===nodeId &&\r
    (edge.sourcePortIndex||0)===(S.pendingConnection.sourcePortIndex||0) &&\r
    (edge.targetPortIndex||0)===index\r
  );\r
  if(duplicate){\r
    toast('该连线已存在','w');\r
    clearPendingConnection();\r
    return;\r
  }\r
\r
  const occupiedTarget=S.modelEdges.some(edge=>\r
    edge.targetNodeId===nodeId &&\r
    (edge.targetPortIndex||0)===index\r
  );\r
  if(occupiedTarget){\r
    toast('该输入端口已有连线，请先删除原连线，避免信号耦合','w');\r
    clearPendingConnection();\r
    return;\r
  }\r
\r
  const newEdge={\r
    id:\`edge-\${++S.edgeSeq}\`,\r
    lineType:S.pendingConnection.lineType,\r
    sourceNodeId:S.pendingConnection.sourceNodeId,\r
    targetNodeId:nodeId,\r
    sourcePortIndex:S.pendingConnection.sourcePortIndex||0,\r
    targetPortIndex:index,\r
    sourcePort:{\r
      index:S.pendingConnection.sourcePortIndex||0,\r
      varName:sourceMeta.varName,\r
      displayName:sourceMeta.displayName,\r
      type:sourceMeta.type\r
    },\r
    targetPort:{\r
      index,\r
      varName:targetMeta.varName,\r
      displayName:targetMeta.displayName,\r
      type:targetMeta.type\r
    },\r
    sourcePortMeta:sourceMeta,\r
    targetPortMeta:targetMeta\r
  };\r
  S.modelEdges.push(newEdge);\r
  syncAllPythonInputConnectionState();\r
  markTopologyDirty(getMutationScopeForEdge(newEdge));\r
  S.selEdge=newEdge.id;\r
  S.selBlk=null;\r
  clearPendingConnection();\r
  renderPropertyPanel(newEdge);\r
  updateUI();\r
  toast('连线已创建','s');\r
}\r
\r
function renderModelNodes(){\r
  const layer=document.getElementById('node-layer');\r
  if(!layer){return;}\r
  layer.innerHTML='';\r
  S.modelNodes.forEach(node=>{\r
    applyNodeGeometry(node);\r
    const meta=COMPONENT_LIBRARY[node.type];\r
    const faulted=S.faultedBlks.includes(node.id)||Boolean(node.injectedFault);\r
    const pythonBound=isPythonBoundFlowBlock(node);\r
    const el=document.createElement('div');\r
    el.id=\`b-\${node.id}\`;\r
    el.className=\`blk \${meta.className}\${S.selBlk===node.id?' sel':''}\${faulted?' faulted':''}\${pythonBound?' python-bound':''}\`;\r
    el.style.left=\`\${node.x}px\`;\r
    el.style.top=\`\${node.y}px\`;\r
    el.style.width=\`\${node.w}px\`;\r
    el.style.height=\`\${node.h}px\`;\r
    if(node.type==='simulation_block'||pythonBound){\r
      const topPortCount=node.type==='simulation_block'\r
        ?(node.props.middleVars?.length||0)\r
        :(node.pythonBinding?.portMapping?.middleVars?.length||0);\r
      el.style.paddingTop=\`\${topPortCount?18:10}px\`;\r
      el.style.paddingBottom='10px';\r
    }else{\r
      el.style.paddingTop='';\r
      el.style.paddingBottom='';\r
    }\r
    const nodeTitle=pythonBound?(node.pythonBinding?.fileName||node.props.name):node.props.name;\r
    const nodeSubtitle=pythonBound?\`流程块 · \${getPythonBindingSummary(node)}\`:buildNodeSubtitle(node);\r
    el.innerHTML=\`\r
      <div class="fbadge">F</div>\r
      \${pythonBound?'<div class="node-card__python-chip">Py</div>':''}\r
      <div class="blk-kicker">\${pythonBound?'已绑定 Python':(faulted&&!isFaultNodeType(node.type)?\`\${meta.badge} 故障\` : meta.badge)}</div>\r
      <div class="blk-lbl">\${escapeHtml(nodeTitle)}</div>\r
      <div class="blk-sub">\${escapeHtml(nodeSubtitle)}</div>\`;\r
    el.addEventListener('pointerdown',event=>beginNodeDrag(event,node.id));\r
    el.addEventListener('click',event=>{\r
      if(event.target.closest('.node-port')){return;}\r
      selectNode(node.id);\r
      if(node.type==='instrument_scope'||node.type==='instrument_logger'||node.type==='instrument_spectrum'||node.type==='flow_block'){\r
        const now=Date.now();\r
        if(NODE_DOUBLE_CLICK.nodeId===node.id&&(now-NODE_DOUBLE_CLICK.timestamp)<320){\r
          NODE_DOUBLE_CLICK.nodeId='';\r
          NODE_DOUBLE_CLICK.timestamp=0;\r
          if(node.type==='instrument_scope'){\r
            openScope(node.id);\r
          }else if(node.type==='flow_block'){\r
            openPythonBindingDialog(node.id);\r
          }else{\r
            renderPropertyPanel(node);\r
          }\r
          return;\r
        }\r
        NODE_DOUBLE_CLICK.nodeId=node.id;\r
        NODE_DOUBLE_CLICK.timestamp=now;\r
      }\r
    });\r
    if(node.type==='instrument_scope'){\r
      el.title='双击查看示波器';\r
      el.addEventListener('dblclick',event=>{\r
        event.stopPropagation();\r
        openScope(node.id);\r
      });\r
    }\r
\r
    if(node.type==='instrument_logger'||node.type==='instrument_spectrum'){\r
      el.title='双击查看仪器采样与分析面板';\r
      el.addEventListener('dblclick',event=>{\r
        event.stopPropagation();\r
        selectNode(node.id);\r
        renderPropertyPanel(node);\r
      });\r
    }\r
\r
    if(node.type==='flow_block'){\r
      el.title=pythonBound\r
        ?\`已绑定 Python：\${node.pythonBinding?.fileName||'unknown.py'}\\n双击可重新绑定\`\r
        :'双击绑定 Python 文件';\r
      el.addEventListener('dblclick',event=>{\r
        event.stopPropagation();\r
        openPythonBindingDialog(node.id);\r
      });\r
    }\r
\r
\r
    const ports=getNodePorts(node);\r
    ports.inputs.forEach((port,index)=>{\r
      const info=getPortInfo(node,'input',index);\r
      const portEl=document.createElement('button');\r
      portEl.type='button';\r
      portEl.className='node-port node-port--input';\r
      portEl.style.left=\`\${info.localX}px\`;\r
      portEl.style.top=\`\${info.localY}px\`;\r
      portEl.style.color=getPortTone(node,port,'input');\r
      portEl.title=getPortTooltip(port,'input');\r
      if(isPortConnected(node.id,'input',index)){\r
        portEl.classList.add('is-connected');\r
      }\r
      if(S.pendingConnection){\r
        portEl.classList.add('node-port--active');\r
      }\r
      portEl.innerHTML='<span class="node-port__inner"><</span>';\r
      appendPortLabel(portEl,port);\r
      portEl.addEventListener('click',event=>handlePortClick(event,node.id,'input',index));\r
      el.appendChild(portEl);\r
    });\r
    ports.outputs.forEach((port,index)=>{\r
      const info=getPortInfo(node,'output',index);\r
      const portEl=document.createElement('button');\r
      portEl.type='button';\r
      portEl.className=\`node-port node-port--output\${info.side==='top'?' node-port--top':''}\`;\r
      portEl.style.left=\`\${info.localX}px\`;\r
      portEl.style.top=\`\${info.localY}px\`;\r
      portEl.style.color=getPortTone(node,port,'output');\r
      portEl.title=getPortTooltip(port,'output');\r
      if(isPortConnected(node.id,'output',index)){\r
        portEl.classList.add('is-connected');\r
      }\r
      if(S.pendingConnection&&S.pendingConnection.sourceNodeId===node.id&&(S.pendingConnection.sourcePortIndex||0)===index){\r
        portEl.classList.add('node-port--active');\r
      }\r
      portEl.innerHTML='<span class="node-port__inner"><</span>';\r
      appendPortLabel(portEl,port);\r
      portEl.addEventListener('click',event=>handlePortClick(event,node.id,'output',index));\r
      el.appendChild(portEl);\r
    });\r
\r
    layer.appendChild(el);\r
  });\r
  document.getElementById('diagram-placeholder').style.display=S.modelNodes.length?'none':'flex';\r
  renderEdges();\r
}\r
\r
function selectNode(id){\r
  const node=getNode(id);\r
  if(!node){return;}\r
  S.selBlk=id;\r
  S.selEdge=null;\r
  S.propertyPanelTab='overview';\r
  renderModelNodes();\r
  renderPropertyPanel(node);\r
  document.querySelectorAll('.props-tab').forEach(button=>{\r
    const tab=button.dataset.propsTab||'overview';\r
    button.classList.toggle('is-active',tab==='overview');\r
    button.setAttribute('aria-selected',tab==='overview'?'true':'false');\r
  });\r
}\r
\r
function selBlk(id){selectNode(id);}\r
\r
function selectEdge(id){\r
  const edge=getEdge(id);\r
  if(!edge){return;}\r
  if(S.pendingConnection){\r
    S.pendingConnection=null;\r
  }\r
  S.selEdge=id;\r
  S.selBlk=null;\r
  S.propertyPanelTab='overview';\r
  renderModelNodes();\r
  renderPropertyPanel(edge);\r
  document.querySelectorAll('.props-tab').forEach(button=>{\r
    const tab=button.dataset.propsTab||'overview';\r
    button.classList.toggle('is-active',tab==='overview');\r
    button.setAttribute('aria-selected',tab==='overview'?'true':'false');\r
  });\r
}\r
\r
function deleteSelectedNode(){\r
  const node=getNode(S.selBlk);\r
  if(!node){return;}\r
  const removedName=node.props.name;\r
  const removedEdges=S.modelEdges.filter(edge=>edge.sourceNodeId===node.id||edge.targetNodeId===node.id).length;\r
  const protocolEdgeAffected=S.protocolInjectTargetId&&S.modelEdges.some(edge=>edge.id===S.protocolInjectTargetId&&(edge.sourceNodeId===node.id||edge.targetNodeId===node.id));\r
\r
  S.modelNodes=S.modelNodes.filter(item=>item.id!==node.id);\r
  S.modelEdges=S.modelEdges.filter(edge=>edge.sourceNodeId!==node.id&&edge.targetNodeId!==node.id);\r
  S.faultedBlks=S.faultedBlks.filter(id=>id!==node.id);\r
  if(S.injectTargetId===node.id){\r
    S.injectTargetId='';\r
  }\r
  if(protocolEdgeAffected){\r
    S.protocolInjectTargetId='';\r
  }\r
  if(S.pendingConnection&&S.pendingConnection.sourceNodeId===node.id){\r
    S.pendingConnection=null;\r
  }\r
  S.selBlk=null;\r
  markTopologyDirty(getMutationScopeForType(node.type));\r
  syncAllPythonInputConnectionState();\r
  renderModelNodes();\r
  renderPropertyPanel(null);\r
  syncConfigTargets();\r
  updateUI();\r
  toast(\`模块“\${removedName}”已删除\${removedEdges?\`，并移除 \${removedEdges} 条连线\`:''}\`,'s');\r
}\r
\r
function deleteSelectedEdge(){\r
  const edge=getEdge(S.selEdge);\r
  if(!edge){return;}\r
  const edgeName=edge.lineType==='can'?'CAN 总线':'普通连接线';\r
  S.modelEdges=S.modelEdges.filter(item=>item.id!==edge.id);\r
  if(S.protocolInjectTargetId===edge.id){\r
    S.protocolInjectTargetId='';\r
    S.protocolInjectSelectionMode='';\r
    S.protocolInjectSelectionId='';\r
  }\r
  S.selEdge=null;\r
  syncAllPythonInputConnectionState();\r
  markTopologyDirty(getMutationScopeForEdge(edge));\r
  renderModelNodes();\r
  renderPropertyPanel(null);\r
  updateUI();\r
  toast(\`连线“\${edgeName}”已删除\`,'s');\r
}\r
\r
function deleteCurrentSelection(){\r
  if(S.selEdge){\r
    deleteSelectedEdge();\r
    return;\r
  }\r
  if(S.selBlk){\r
    deleteSelectedNode();\r
  }\r
}\r
\r
function syncConfigTargets(preferredId=''){\r
  const sel=document.getElementById('cftgt');\r
  if(!sel){return;}\r
  const currentValue=preferredId||sel.value;\r
  const nodes=getConfigurableNodes();\r
  if(nodes.length===0){\r
    sel.innerHTML='<option value="">请先创建系统建模组件</option>';\r
    return;\r
  }\r
  sel.innerHTML=nodes.map(node=>\`<option value="\${node.id}">\${escapeHtml(node.props.name)} · \${COMPONENT_LIBRARY[node.type].label}</option>\`).join('');\r
  sel.value=nodes.some(node=>node.id===currentValue)?currentValue:nodes[0].id;\r
}\r
\r
function markFaultTarget(targetId){\r
  S.faultedBlks=targetId?[targetId]:[];\r
  renderModelNodes();\r
  if(S.selBlk&&getNode(S.selBlk)){renderPropertyPanel(getNode(S.selBlk));}\r
  else if(S.selEdge&&getEdge(S.selEdge)){renderPropertyPanel(getEdge(S.selEdge));}\r
}\r
\r
function createNode(type,rawX,rawY){\r
  const meta=COMPONENT_LIBRARY[type];\r
  if(!meta){return;}\r
  const props=cloneDefaults(meta.defaults);\r
  const count=getNodeTypeCount(type);\r
  if(type==='signal_source'){props.name=\`信号源 \${count}\`;}\r
  if(type==='flow_block'){props.name=\`流程块 \${count}\`;}\r
  if(type==='simulation_block'){props.name=\`仿真块 \${count}\`;}\r
  if(type.startsWith('fault_')){props.name=\`\${meta.label} \${count}\`;}\r
  if(type.startsWith('instrument_')){props.name=\`\${meta.label} \${count}\`;}\r
  if(type.startsWith('link_')){props.name=\`\${meta.label} \${count}\`;}\r
\r
  if(type==='simulation_block'){\r
    normalizeSimulationInterfaces(props);\r
  }\r
  const size=type==='simulation_block'?getSimulationNodeSize(props):{width:meta.width,height:meta.height};\r
  const point={\r
    x:clamp(Math.round(rawX-size.width/2),CANVAS_STAGE.nodePadding,CANVAS_STAGE.width-size.width-CANVAS_STAGE.nodePadding),\r
    y:clamp(Math.round(rawY-size.height/2),CANVAS_STAGE.nodeMinY,CANVAS_STAGE.height-size.height-CANVAS_STAGE.nodePadding)\r
  };\r
  S.modelNodes.push({\r
    id:\`node-\${++S.nodeSeq}\`,\r
    type,\r
    x:point.x,\r
    y:point.y,\r
    w:size.width,\r
    h:size.height,\r
    props,\r
    pythonBinding:type==='simulation_block'?createDefaultPythonBinding():null\r
  });\r
  markTopologyDirty(getMutationScopeForType(type));\r
  const node=S.modelNodes[S.modelNodes.length-1];\r
  renderModelNodes();\r
  syncConfigTargets(node.id);\r
  selectNode(node.id);\r
  updateUI();\r
  toast(\`\${meta.label} 已加入画布\`,'s');\r
}\r
\r
function initPaletteDrag(){\r
  document.querySelectorAll('.citem-draggable').forEach(item=>{\r
    item.addEventListener('dragstart',event=>{\r
      const type=item.dataset.component||'';\r
      S.dragType=type;\r
      item.classList.add('citem-dragging');\r
      event.dataTransfer.effectAllowed='copy';\r
      event.dataTransfer.setData('text/plain',type);\r
    });\r
    item.addEventListener('dragend',()=>{\r
      S.dragType=null;\r
      item.classList.remove('citem-dragging');\r
      document.getElementById('diagram').classList.remove('dragover');\r
    });\r
  });\r
}\r
\r
function initCanvasDrop(){\r
  const diagram=document.getElementById('diagram');\r
  const viewport=getCanvasViewport();\r
  if(!viewport){return;}\r
  viewport.addEventListener('dragover',event=>{\r
    if(!S.sysLoaded){return;}\r
    event.preventDefault();\r
    diagram.classList.add('dragover');\r
    event.dataTransfer.dropEffect='copy';\r
  });\r
  viewport.addEventListener('dragleave',event=>{\r
    if(event.target===viewport){diagram.classList.remove('dragover');}\r
  });\r
  viewport.addEventListener('drop',event=>{\r
    event.preventDefault();\r
    diagram.classList.remove('dragover');\r
    if(!S.sysLoaded){toast('请先导入系统模型','w');return;}\r
    const type=event.dataTransfer.getData('text/plain')||S.dragType;\r
    if(!COMPONENT_LIBRARY[type]){return;}\r
    const point=clientToStagePoint(event.clientX,event.clientY);\r
    createNode(type,point.x,point.y);\r
  });\r
}\r
\r
function bindCanvasInteractions(){\r
  const viewport=getCanvasViewport();\r
  if(!viewport){return;}\r
\r
  viewport.addEventListener('wheel',event=>{\r
    if(!S.sysLoaded){return;}\r
    event.preventDefault();\r
    setCanvasZoom(S.canvasScale+(event.deltaY<0?0.08:-0.08),event.clientX,event.clientY);\r
  },{passive:false});\r
\r
  viewport.addEventListener('pointerdown',event=>{\r
    if(event.button!==0){return;}\r
    const target=event.target;\r
    const edgeInteractive=target?.closest?.('.edge-hit, .edge-path, .edge-label');\r
    const edgeId=edgeInteractive?.dataset?.edgeId||findNearestEdgeIdByClientPoint(event.clientX,event.clientY);\r
    if(target.closest('.blk')||target.closest('.node-port')||edgeInteractive){return;}\r
    if(edgeId){\r
      selectEdge(edgeId);\r
      return;\r
    }\r
    if(S.pendingConnection){\r
      clearPendingConnection();\r
      return;\r
    }\r
    CANVAS_PAN.active=true;\r
    CANVAS_PAN.engaged=false;\r
    CANVAS_PAN.clearSelectionOnPointerUp=Boolean(S.selBlk||S.selEdge);\r
    CANVAS_PAN.pointerId=event.pointerId;\r
    CANVAS_PAN.startX=event.clientX;\r
    CANVAS_PAN.startY=event.clientY;\r
    CANVAS_PAN.originX=S.canvasOffsetX;\r
    CANVAS_PAN.originY=S.canvasOffsetY;\r
    if(viewport.setPointerCapture){\r
      viewport.setPointerCapture(event.pointerId);\r
    }\r
  });\r
\r
  viewport.addEventListener('pointermove',event=>{\r
    if(S.pendingConnection){\r
      const point=clientToStagePoint(event.clientX,event.clientY);\r
      S.pendingConnection.x=point.x;\r
      S.pendingConnection.y=point.y;\r
      renderEdges();\r
    }\r
\r
    if(NODE_DRAG.active&&NODE_DRAG.pointerId===event.pointerId){\r
      const node=getNode(NODE_DRAG.nodeId);\r
      if(!node){return;}\r
      if(!NODE_DRAG.engaged){\r
        if(!movedBeyondPointerThreshold(NODE_DRAG.startX,NODE_DRAG.startY,event.clientX,event.clientY)){return;}\r
        NODE_DRAG.engaged=true;\r
        const dragEl=document.getElementById(\`b-\${NODE_DRAG.nodeId}\`);\r
        if(dragEl){\r
          dragEl.classList.add('is-dragging');\r
          if(dragEl.setPointerCapture){\r
            dragEl.setPointerCapture(event.pointerId);\r
          }\r
        }\r
      }\r
      const deltaX=(event.clientX-NODE_DRAG.startX)/S.canvasScale;\r
      const deltaY=(event.clientY-NODE_DRAG.startY)/S.canvasScale;\r
      node.x=clamp(Math.round(NODE_DRAG.originX+deltaX),CANVAS_STAGE.nodePadding,CANVAS_STAGE.width-node.w-CANVAS_STAGE.nodePadding);\r
      node.y=clamp(Math.round(NODE_DRAG.originY+deltaY),CANVAS_STAGE.nodeMinY,CANVAS_STAGE.height-node.h-CANVAS_STAGE.nodePadding);\r
      updateNodePositionDOM(node);\r
      renderEdges();\r
      return;\r
    }\r
\r
    if(CANVAS_PAN.active&&CANVAS_PAN.pointerId===event.pointerId){\r
      if(!CANVAS_PAN.engaged){\r
        if(!movedBeyondPointerThreshold(CANVAS_PAN.startX,CANVAS_PAN.startY,event.clientX,event.clientY)){return;}\r
        CANVAS_PAN.engaged=true;\r
        viewport.classList.add('panning');\r
      }\r
      S.canvasOffsetX=CANVAS_PAN.originX+(event.clientX-CANVAS_PAN.startX);\r
      S.canvasOffsetY=CANVAS_PAN.originY+(event.clientY-CANVAS_PAN.startY);\r
      clampCanvasOffset();\r
      applyCanvasTransform();\r
    }\r
  });\r
\r
  const endPointerInteraction=event=>{\r
    if(NODE_DRAG.active&&NODE_DRAG.pointerId===event.pointerId){\r
      const draggedNode=getNode(NODE_DRAG.nodeId);\r
      const draggedEl=document.getElementById(\`b-\${NODE_DRAG.nodeId}\`);\r
      const wasDragging=NODE_DRAG.engaged;\r
      if(draggedEl){\r
        draggedEl.classList.remove('is-dragging');\r
      }\r
      NODE_DRAG.active=false;\r
      NODE_DRAG.engaged=false;\r
      NODE_DRAG.pointerId=null;\r
      NODE_DRAG.nodeId='';\r
      NODE_DRAG.clickSuppressUntil=wasDragging?Date.now()+220:0;\r
      if(draggedNode&&wasDragging){renderEdges();}\r
    }\r
\r
    if(CANVAS_PAN.active&&CANVAS_PAN.pointerId===event.pointerId){\r
      if(!CANVAS_PAN.engaged&&CANVAS_PAN.clearSelectionOnPointerUp){\r
        clearCanvasSelection();\r
      }\r
      CANVAS_PAN.active=false;\r
      CANVAS_PAN.engaged=false;\r
      CANVAS_PAN.clearSelectionOnPointerUp=false;\r
      CANVAS_PAN.pointerId=null;\r
      viewport.classList.remove('panning');\r
    }\r
  };\r
\r
  viewport.addEventListener('pointerup',endPointerInteraction);\r
  viewport.addEventListener('pointercancel',endPointerInteraction);\r
\r
  const runtimeListeners=getRuntimeListenerStore();\r
  if(runtimeListeners.canvasWindowKeydown){\r
    window.removeEventListener('keydown',runtimeListeners.canvasWindowKeydown);\r
  }\r
  runtimeListeners.canvasWindowKeydown=event=>{\r
    if(event.key==='Escape'&&S.pendingConnection){\r
      clearPendingConnection();\r
      return;\r
    }\r
    const active=document.activeElement;\r
    const editing=active&&(\r
      active.tagName==='INPUT'||\r
      active.tagName==='TEXTAREA'||\r
      active.tagName==='SELECT'||\r
      active.isContentEditable\r
    );\r
    if((event.key==='Delete'||event.key==='Backspace')&&!editing&&!document.querySelector('.overlay.open')&&(S.selBlk||S.selEdge)){\r
      event.preventDefault();\r
      deleteCurrentSelection();\r
    }\r
  };\r
  window.addEventListener('keydown',runtimeListeners.canvasWindowKeydown);\r
\r
  if(runtimeListeners.canvasWindowResize){\r
    window.removeEventListener('resize',runtimeListeners.canvasWindowResize);\r
  }\r
  runtimeListeners.canvasWindowResize=()=>{\r
    clampCanvasOffset();\r
    applyCanvasTransform();\r
  };\r
  window.addEventListener('resize',runtimeListeners.canvasWindowResize);\r
}\r
\r
function buildPythonBindingPortRows(items,kind){\r
  if(!items.length){\r
    return '<div class="props-help">当前没有可用端口</div>';\r
  }\r
  return items.map(item=>{\r
    const status=kind==='inputs'\r
      ?(item.connected?'<span class="pv pv-ok">已连接</span>':'<span class="pv pv-fault">未连接</span>')\r
      :'<span class="pv pv-ok">已暴露</span>';\r
    const title=escapeHtml(item.displayName||item.varName||'-');\r
    const type=escapeHtml(item.type||'any');\r
    const note=item.comment?\`<div class="props-help">\${escapeHtml(item.comment)}</div>\`:'';\r
    const defaultRow=kind==='inputs'&&item.default!==null&&item.default!==undefined&&item.default!==''\r
      ?\`<div class="prow"><span class="pk">默认值<</span><span class="pv">\${escapeHtml(item.default)}<</span></div>\`\r
      :'';\r
    return \`\r
      <div class="pgroup pgroup--compact">\r
        <div class="prow"><span class="pk">\${title}<</span>\${status}</div>\r
        <div class="prow"><span class="pk">类型<</span><span class="pv">\${type}<</span></div>\r
        \${defaultRow}\r
        \${note}\r
      </div>\`;\r
  }).join('');\r
}\r
\r
function buildFlowBlockFields(node){\r
  const binding=ensureFlowNodePythonBinding(node);\r
  const bound=binding.bound;\r
  const bindingSummary=bound\r
    ?\`\r
      <div class="pgroup">\r
        <div class="pglbl">Python 绑定</div>\r
        <div class="prow"><span class="pk">文件<</span><span class="pv">\${escapeHtml(binding.fileName||'-')}<</span></div>\r
        <div class="prow"><span class="pk">模块<</span><span class="pv">\${escapeHtml(binding.moduleName||'-')}<</span></div>\r
        <div class="prow"><span class="pk">入口函数<</span><span class="pv">\${escapeHtml(binding.entryFunction||'process')}<</span></div>\r
        <div class="prow"><span class="pk">端口摘要<</span><span class="pv">\${escapeHtml(getPythonBindingSummary(node))}<</span></div>\r
        \${binding.description?\`<div class="props-help">\${escapeHtml(binding.description)}</div>\`:''}\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">输入端口</div>\r
        \${buildPythonBindingPortRows(binding.portMapping.inputs,'inputs')}\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">输出端口</div>\r
        \${buildPythonBindingPortRows(binding.portMapping.outputs,'outputs')}\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">中间变量</div>\r
        \${buildPythonBindingPortRows(binding.portMapping.middleVars,'middleVars')}\r
      </div>\`\r
    :\`\r
      <div class="pgroup">\r
        <div class="pglbl">Python 绑定</div>\r
        <div class="props-help">当前流程块尚未绑定 Python 文件。绑定后将按函数输入、输出和 @observable 中间变量自动生成端口。</div>\r
      </div>\`;\r
  const legacyFields=bound?\`\r
      <div style="display:none">\r
        <input id="prop-inputName" value="\${escapeHtml(node.props.inputName)}">\r
        <select id="prop-inputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.inputFormat)}</select>\r
        <input id="prop-outputName" value="\${escapeHtml(node.props.outputName)}">\r
        <select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat)}</select>\r
      </div>\`:\`\r
      <div class="props-field"><label>输入名称</label><input id="prop-inputName" value="\${escapeHtml(node.props.inputName)}"></div>\r
      <div class="props-row">\r
        <div class="props-field"><label>输入类型</label><select id="prop-inputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.inputFormat)}</select></div>\r
        <div class="props-field"><label>输出类型</label><select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat)}</select></div>\r
      </div>\r
      <div class="props-field"><label>输出名称</label><input id="prop-outputName" value="\${escapeHtml(node.props.outputName)}"></div>\r
      <div class="props-help">未绑定 Python 时，流程块按单输入单输出直通模块工作。</div>\`;\r
  return \`\r
    <div class="pgroup">\r
      <div class="pglbl">流程块设置</div>\r
      <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
      \${legacyFields}\r
    </div>\r
    \${bindingSummary}\`;\r
}\r
\r
function renderPropertyPanel(node){\r
  const pe=document.getElementById('pe');\r
  const pd=document.getElementById('pd');\r
  if(!node){\r
    pe.style.display='flex';\r
    pd.style.display='none';\r
    pd.innerHTML='';\r
    return;\r
  }\r
\r
  if(node.sourceNodeId&&node.targetNodeId&&!node.type){\r
    const sourceNode=getNode(node.sourceNodeId);\r
    const targetNode=getNode(node.targetNodeId);\r
    const edgeLabel=node.lineType==='can'?'CAN 总线':'普通连接线';\r
    const sourceName=sourceNode?.props?.name||node.sourceNodeId;\r
    const targetName=targetNode?.props?.name||node.targetNodeId;\r
    const sourcePortName=node.sourcePort?.displayName||node.sourcePort?.varName||\`#\${(node.sourcePortIndex||0)+1}\`;\r
    const targetPortName=node.targetPort?.displayName||node.targetPort?.varName||\`#\${(node.targetPortIndex||0)+1}\`;\r
    const protocolFault=node.injectedFault?.layer==='protocol'?node.injectedFault:null;\r
    pe.style.display='none';\r
    pd.style.display='block';\r
    pd.innerHTML=\`\r
      <div class="pgroup">\r
        <div class="props-title">\${edgeLabel}</div>\r
        <div class="props-sub">画布连线 \${node.id.replace('edge-','#')}</div>\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">连接信息</div>\r
        <div class="prow"><span class="pk">连线类型<</span><span class="pv">\${edgeLabel}<</span></div>\r
        <div class="prow"><span class="pk">源节点<</span><span class="pv">\${escapeHtml(sourceName)}<</span></div>\r
        <div class="prow"><span class="pk">源端口<</span><span class="pv">\${escapeHtml(sourcePortName)}<</span></div>\r
        <div class="prow"><span class="pk">目标节点<</span><span class="pv">\${escapeHtml(targetName)}<</span></div>\r
        <div class="prow"><span class="pk">目标端口<</span><span class="pv">\${escapeHtml(targetPortName)}<</span></div>\r
        <div class="prow"><span class="pk">协议状态<</span><span class="pv \${protocolFault?'pv-fault':'pv-ok'}">\${protocolFault?'已注入协议故障':'正常'}<</span></div>\r
        \${protocolFault?\`<div class="prow"><span class="pk">协议故障<</span><span class="pv pv-fault">\${escapeHtml(protocolFault.name)}<</span></div>\`:''}\r
      </div>\r
      <div class="props-form">\r
        <div class="pgroup">\r
          <div class="props-help">\${isProtocolInjectableEdge(node)?'当前连线为 CAN 总线，可在此导入协议层故障；普通连接线暂不支持协议注入。':'当前选中的是一条独立连线，可直接删除，不影响其他模块。'}</div>\r
        </div>\r
        <div class="props-actions">\r
          \${isProtocolInjectableEdge(node)?\`<button class="props-secondary props-protocol-action" onclick="openProtocolFaultImport()">\${protocolFault?'更换协议故障':'导入协议故障'}</button>\`:''}\r
          <button class="props-danger" onclick="deleteSelectedEdge()">删除连线</button>\r
        </div>\r
      </div>\`;\r
    return;\r
  }\r
\r
  const meta=COMPONENT_LIBRARY[node.type];\r
  const fault=S.faultedBlks.includes(node.id)||Boolean(node.injectedFault);\r
  const pythonBound=isPythonBoundFlowBlock(node);\r
  const simulationPackageRows=pythonBound\r
    ?buildSimulationBlockPackageRows(node)\r
    :'';\r
  let fields='';\r
\r
  if(node.type==='signal_source'){\r
    fields=\`\r
      <div class="pgroup">\r
        <div class="pglbl">信号瀹氫箟</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>信号类型</label><select id="prop-waveType">\${buildSelectOptions(['正弦','阶跃','常值'],node.props.waveType)}</select></div>\r
          <div class="props-field"><label>输出鏍煎紡</label><select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat)}</select></div>\r
        </div>\r
        <div class="props-row">\r
  }else if(node.type==='flow_block'){\r
    fields=buildFlowBlockFields(node);\r
          <div class="props-field"><label>输出鏍煎紡</label><select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat)}</select></div>\r
        </div>\r
        <div class="props-field"><label>输出名称</label><input id="prop-outputName" value="\${escapeHtml(node.props.outputName)}"></div>\r
        <div class="props-help">流程块用于定义系统中的输入、输出以及接口格式。</div>\r
      </div>\`;\r
  }else if(node.type==='simulation_block'){\r
    fields=buildSimulationBlockFields(node);\r
  }else if(node.type.startsWith('fault_')){\r
    fields=\`\r
      <div class="pgroup">\r
        <div class="pglbl">故障参数</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-field"><label>故障类型</label><input id="prop-faultType" value="\${escapeHtml(node.props.faultType)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>作用层级</label><select id="prop-layer">\${buildSelectOptions(['物理层','电气层','协议层'],node.props.layer)}</select></div>\r
          <div class="props-field"><label>触发方式</label><select id="prop-trigger">\${buildSelectOptions(['持续','渐变','瞬态','间歇'],node.props.trigger)}</select></div>\r
        </div>\r
      </div>\`;\r
  }else if(node.type.startsWith('instrument_')){\r
    fields=\`\r
      <div class="pgroup">\r
        <div class="pglbl">观测配置</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-field"><label>观测类型</label><input id="prop-instrumentType" value="\${escapeHtml(node.props.instrumentType)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>采样率</label><input id="prop-sampleRate" value="\${escapeHtml(node.props.sampleRate)}"></div>\r
          <div class="props-field"><label>观测信号</label><input id="prop-signal" value="\${escapeHtml(node.props.signal)}"></div>\r
        </div>\r
      </div>\`;\r
  }else{\r
    fields=\`\r
      <div class="pgroup">\r
        <div class="pglbl">杩炴帴瀹氫箟</div>\r
        <div class="props-field"><label>缁勪欢名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-field"><label>杩炴帴类型</label><input id="prop-linkType" value="\${escapeHtml(node.props.linkType)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>璧风偣端口</label><input id="prop-sourcePort" value="\${escapeHtml(node.props.sourcePort)}"></div>\r
          <div class="props-field"><label>缁堢偣端口</label><input id="prop-targetPort" value="\${escapeHtml(node.props.targetPort)}"></div>\r
        </div>\r
      </div>\`;\r
  }\r
\r
  pe.style.display='none';\r
  pd.style.display='block';\r
  const faultSummary=node.injectedFault\r
    ?\`<div class="prow"><span class="pk">电气故障<</span><span class="pv pv-fault">\${escapeHtml(node.injectedFault.name)}<</span></div>\`\r
    :'';\r
\r
  pd.innerHTML=\`\r
    <div class="pgroup">\r
      <div class="props-title">\${escapeHtml(node.props.name)}</div>\r
      <div class="props-sub">\${pythonBound?(escapeHtml(node.pythonBinding?.fileName||'')+' - '):''}\${meta.label} - Node \${node.id.replace('node-','#')}</div>\r
    </div>\r
    <div class="pgroup">\r
      <div class="pglbl">当前状态</div>\r
      <div class="prow"><span class="pk">鑺傜偣绫诲埆<</span><span class="pv">\${meta.label}<</span></div>\r
      <div class="prow"><span class="pk">状态<</span><span class="pv \${fault?'pv-fault':'pv-ok'}">\${fault?'已绑定故障':'正常'}<</span></div>\r
      \${pythonBound?\`<div class="prow"><span class="pk">Python<</span><span class="pv pv-ok">\${escapeHtml(getPythonBindingSummary(node))}<</span></div>\`:''}\r
      \${simulationPackageRows}\r
      \${faultSummary}\r
    </div>\r
    <div class="props-form">\r
      \${fields}\r
      <div class="props-actions">\r
        \${node.type==='flow_block'?\`<button class="props-secondary" onclick="openPythonBindingDialog('\${node.id}')">\${pythonBound?'Rebind Python':'Bind Python File'}</button>\`:''}\r
        \${node.type==='flow_block'&&pythonBound?\`<button class="props-secondary" onclick="unbindPythonBinding('\${node.id}')">Unbind Python</button>\`:''}\r
        \${isElectricalInjectableType(node.type)?\`<button class="props-secondary props-fault-action" onclick="openElectricalFaultImport()">\${node.injectedFault?'更换故障':'导入故障'}</button>\`:''}\r
        <button class="props-save" onclick="saveSelectedNode()">保存设置</button>\r
        <button class="props-danger" onclick="deleteSelectedNode()">删除模块</button>\r
      </div>\r
    </div>\`;\r
}\r
\r
function saveSelectedNode(){\r
  const node=getNode(S.selBlk);\r
  if(!node){return;}\r
  if(node.type==='signal_source'){\r
    node.props.name=document.getElementById('prop-name').value.trim()||node.props.name;\r
    node.props.waveType=document.getElementById('prop-waveType').value;\r
    node.props.outputFormat=document.getElementById('prop-outputFormat').value;\r
    node.props.amplitude=document.getElementById('prop-amplitude').value.trim()||node.props.amplitude;\r
    node.props.frequency=document.getElementById('prop-frequency').value.trim()||node.props.frequency;\r
  }else if(node.type==='flow_block'){\r
    node.props.name=document.getElementById('prop-name').value.trim()||node.props.name;\r
    if(!isPythonBoundFlowBlock(node)){\r
      node.props.inputName=document.getElementById('prop-inputName').value.trim()||'\\u8f93\\u5165\\u4fe1\\u53f7';\r
      node.props.inputFormat=document.getElementById('prop-inputFormat').value;\r
      node.props.outputName=document.getElementById('prop-outputName').value.trim()||'\\u8f93\\u51fa\\u4fe1\\u53f7';\r
      node.props.outputFormat=document.getElementById('prop-outputFormat').value;\r
    }\r
  }else if(node.type==='simulation_block'){\r
    node.props.name=document.getElementById('prop-name').value.trim()||node.props.name;\r
    node.props.moduleType=document.getElementById('prop-moduleType').value;\r
    node.props.inputs=readSimulationInterfaceRows('\\u8f93\\u5165');\r
    node.props.outputs=readSimulationInterfaceRows('\\u8f93\\u51fa');\r
    node.props.middleVars=readSimulationInterfaceRows('\\u4e2d\\u95f4\\u91cf');\r
    normalizeSimulationInterfaces(node.props);\r
    node.props.inputs=normalizeSimulationInterfaceList(\r
      node.props.inputs.slice(0,clampInterfaceCount(document.getElementById('sim-input-count')?.value,SIM_INTERFACE_LIMITS.inputs)),\r
      '\\u8f93\\u5165',\r
      node.props.inputs[0]?.type||'\\u6807\\u91cf',\r
      clampInterfaceCount(document.getElementById('sim-input-count')?.value,SIM_INTERFACE_LIMITS.inputs)\r
    );\r
    node.props.outputs=normalizeSimulationInterfaceList(\r
      node.props.outputs.slice(0,clampInterfaceCount(document.getElementById('sim-output-count')?.value,SIM_INTERFACE_LIMITS.outputs)),\r
      '\\u8f93\\u51fa',\r
      node.props.outputs[0]?.type||'\\u6807\\u91cf',\r
      clampInterfaceCount(document.getElementById('sim-output-count')?.value,SIM_INTERFACE_LIMITS.outputs)\r
    );\r
    node.props.middleVars=normalizeSimulationInterfaceList(\r
      node.props.middleVars.slice(0,clampInterfaceCount(document.getElementById('sim-middle-count')?.value,SIM_INTERFACE_LIMITS.middleVars)),\r
      '\\u4e2d\\u95f4\\u91cf',\r
      node.props.middleVars[0]?.type||'\\u6807\\u91cf',\r
      clampInterfaceCount(document.getElementById('sim-middle-count')?.value,SIM_INTERFACE_LIMITS.middleVars)\r
    );\r
    node.props.ffunctionNote=document.getElementById('prop-ffunctionNote').value.trim()||'\\u5f53\\u524d\\u9884\\u7559 Python \\u51fd\\u6570\\u63a5\\u53e3\\uff0c\\u53ef\\u5728\\u540e\\u7eed\\u5bfc\\u5165\\u51fd\\u6570\\u5b9a\\u4e49\\u3002';\r
    applyNodeGeometry(node);\r
    pruneInvalidEdgesForNode(node);\r
  }else if(node.type.startsWith('fault_')){\r
    node.props.name=document.getElementById('prop-name').value.trim()||node.props.name;\r
    node.props.faultType=document.getElementById('prop-faultType').value.trim()||node.props.faultType;\r
    node.props.layer=document.getElementById('prop-layer').value;\r
    node.props.trigger=document.getElementById('prop-trigger').value;\r
  }else if(node.type.startsWith('instrument_')){\r
    node.props.name=document.getElementById('prop-name').value.trim()||node.props.name;\r
    node.props.instrumentType=document.getElementById('prop-instrumentType').value.trim()||node.props.instrumentType;\r
    node.props.sampleRate=document.getElementById('prop-sampleRate').value.trim()||node.props.sampleRate;\r
    node.props.signal=document.getElementById('prop-signal').value.trim()||node.props.signal;\r
  }else{\r
    node.props.name=document.getElementById('prop-name').value.trim()||node.props.name;\r
    node.props.linkType=document.getElementById('prop-linkType').value.trim()||node.props.linkType;\r
    node.props.sourcePort=document.getElementById('prop-sourcePort').value.trim()||node.props.sourcePort;\r
    node.props.targetPort=document.getElementById('prop-targetPort').value.trim()||node.props.targetPort;\r
  }\r
  markTopologyDirty(getMutationScopeForType(node.type));\r
  renderModelNodes();\r
  renderPropertyPanel(node);\r
  syncConfigTargets(node.id);\r
  updateUI();\r
  toast(\`模块「\${node.props.name}」设置已保存\`,'s');\r
}\r
\r
// ─── 鍒嗙粍折叠 ───\r
function toggleGroup(id){\r
  const body=document.getElementById(id);\r
  const arr=document.getElementById('arr-'+id);\r
  const open=body.style.display!=='none';\r
  body.style.display=open?'none':'block';\r
  arr.classList.toggle('open',!open);\r
}\r
\r
// ─── 右上角按钮 ───\r
function doImportSys(){\r
  const btn=document.getElementById('btn-imp-sys');\r
  btn.textContent='导入中…';\r
  btn.disabled=true;\r
  setTimeout(()=>{\r
    let restored=false;\r
    btn.textContent='导入系统模型';\r
    btn.disabled=false;\r
    S.sysLoaded=true;\r
    S.step=1;\r
    document.getElementById('empty').style.display='none';\r
    document.getElementById('diagram').classList.add('on');\r
    handleCanvasZoomReset();\r
    try{\r
      const raw=window.localStorage?.getItem(WORKBENCH_STORAGE_KEY);\r
      if(raw){\r
        restoreSystemModelSnapshot(JSON.parse(raw));\r
        S.systemSaved=true;\r
        S.step=S.modelNodes.length?2:1;\r
        restored=S.modelNodes.length>0;\r
      }else{\r
        clearPendingConnection();\r
        renderModelNodes();\r
        renderPropertyPanel(null);\r
      }\r
    }catch(error){\r
      console.warn('Failed to restore saved system model',error);\r
      clearPendingConnection();\r
      renderModelNodes();\r
      renderPropertyPanel(null);\r
    }\r
    toast(restored?'已恢复已保存的系统模型':'系统建模画布已就绪，请拖拽组件开始建模','s');\r
    updateUI();\r
  },1000);\r
}\r
\r
function doSaveSys(){\r
  if(!S.sysLoaded){toast('请先导入系统模型','w');return;}\r
  if(S.modelNodes.length===0){toast('请至少添加一个组件后再保存','w');return;}\r
  try{\r
    const snapshot=createSystemModelSnapshot();\r
    window.localStorage?.setItem(WORKBENCH_STORAGE_KEY,JSON.stringify(snapshot));\r
  }catch(error){\r
    console.warn('Failed to persist system model snapshot',error);\r
    toast('系统模型保存失败，请稍后重试','w');\r
    return;\r
  }\r
  S.systemSaved=true;\r
  S.step=2;\r
  toast('系统模型已保存','s');\r
  updateUI();\r
}\r
\r
function doImportFault(){\r
  if(!S.sysLoaded){toast('请先导入系统模型','w');return;}\r
  if(getLoadedSystemNodeCount()===0){toast('请先在系统建模页拖入组件','w');return;}\r
  renderFaultCatalogList();\r
  openOv('ov-ifm');\r
}\r
\r
\r
function doSaveRes(){\r
  if(!S.simDone){toast('请先完成仿真后再保存结果','w');return;}\r
  toast('仿真结果已保存','s');\r
}\r
\r
// ─── 导入故障妯″瀷弹窗 ───\r
function simulateFileImport(){\r
  toast('本地故障模型文件导入口已预留，当前可先使用模板库和示例模型完成流程。','w');\r
}\r
\r
function selectFaultFile(el){\r
  const id=el?.dataset?.faultId;\r
  if(id){selectFaultCatalogModel(id);}\r
}\r
\r
function updateSelectedTplSummary(){\r
  document.getElementById('sel-cnt').textContent=\`已选 \${S.selTpls.length} 个故障模板\`;\r
  document.getElementById('sel-list').innerHTML=S.selTpls.length===0\r
    ?'<div style="font-size:10px;color:var(--textd);text-align:center;margin-top:6px">暂无</div>'\r
    :S.selTpls.map(item=>\`<div style="font-size:10px;color:var(--purple);padding:3px 6px;border-radius:3px;background:var(--purple-bg);margin-bottom:2px;border:1px solid #ddd6fe">• \${item.name}</div>\`).join('');\r
}\r
\r
function openFaultBuild(defaultLayer='physical'){\r
  curCat=defaultLayer;\r
  document.querySelectorAll('.tpl-cat').forEach((el,index)=>{\r
    const cat=index===0?'physical':index===1?'electrical':'protocol';\r
    el.classList.toggle('on',cat===curCat);\r
  });\r
  renderTpls(curCat);\r
  closeOv('ov-ifm');\r
  openOv('ov-tpl');\r
}\r
\r
function backToImport(){\r
  closeOv('ov-tpl');\r
  renderFaultCatalogList();\r
  openOv('ov-ifm');\r
}\r
\r
function confirmImportFault(){\r
  const selected=getFaultCatalogModel(S.selectedFaultCatalogId);\r
  if(!selected){toast('请先选择一个故障模型','w');return;}\r
  ensureImportedFaultModel(selected);\r
  closeOv('ov-ifm');\r
  renderFaultCatalogList();\r
  toast(\`故障模型“\${selected.name}”已导入工作区\`,'s');\r
  updateUI();\r
}\r
\r
// ─── 模板库 ───\r
function setCat(el,cat){\r
  document.querySelectorAll('.tpl-cat').forEach(e=>e.classList.remove('on'));\r
  el.classList.add('on');curCat=cat;renderTpls(cat);\r
}\r
\r
function renderTpls(cat){\r
  const g=document.getElementById('tgrid');g.innerHTML='';\r
  (TPLS[cat]||[]).forEach(t=>{\r
    const sel=S.selTpls.some(s=>s.id===t.id);\r
    const d=document.createElement('div');\r
    d.className='tcard'+(sel?' on':'');\r
    d.innerHTML=\`<div class="tcard-name">\${t.name}</div>\r
      <div class="tcard-desc">\${t.desc}</div>\r
      <div class="tcard-tags">\${t.tags.map(tag=>\`<span class="ttag" style="background:color-mix(in srgb,\${t.c} 10%,#fff);color:\${t.c};border:1px solid color-mix(in srgb,\${t.c} 20%,#e5e7eb)">\${tag}<</span>\`).join('')}</div>\`;\r
    d.onclick=()=>toggleTpl({...t,layer:cat},d);\r
    g.appendChild(d);\r
  });\r
  showTplDetail({...((TPLS[cat]||[])[0]||{}),layer:cat});\r
}\r
\r
function toggleTpl(t,card){\r
  const i=S.selTpls.findIndex(s=>s.id===t.id);\r
  if(i>=0){S.selTpls.splice(i,1);card.classList.remove('on');}\r
  else{S.selTpls.push(t);card.classList.add('on');}\r
  updateSelectedTplSummary();\r
  showTplDetail(t);\r
}\r
\r
function showTplDetail(t){\r
  if(!t?.id){\r
    document.getElementById('tdetail').innerHTML='<div class="tdph">→ 选择模板查看详情</div>';\r
    return;\r
  }\r
  document.getElementById('tdetail').innerHTML=\`\r
    <div class="tdtitle">\${t.name}</div>\r
    <div style="font-size:10px;color:var(--text2);line-height:1.5;margin-bottom:10px">\${t.desc}</div>\r
    <div class="tdlbl">故障层级</div><div class="tdval">\${getLayerLabel(t.layer)}</div>\r
    <div class="tdlbl">故障类别</div><div class="tdval">\${t.tags[0]}</div>\r
    <div class="tdlbl">持续特性</div><div class="tdval">\${t.tags[1]||'—'}</div>\r
    <div class="tdlbl">适用场景</div>\r
    <div style="font-size:10px;color:var(--text2);margin-top:3px;line-height:1.5">系统建模模块 / 信号链路<br>故障传播与退化仿真</div>\r
    <div class="tdlbl">骞呭害鑼冨洿</div><div class="tdval">卤0.01 ~ 卤10.0</div>\`;\r
}\r
\r
function confirmFM(){\r
  if(S.selTpls.length===0){toast('请至少选择一个故障模板','w');return;}\r
  const createdModels=S.selTpls.map(item=>{\r
    const model={\r
      id:\`fm-\${item.layer}-\${item.id}\`,\r
      name:item.name,\r
      layer:item.layer,\r
      desc:item.desc,\r
      tags:item.tags,\r
      createdAt:new Date().toLocaleDateString('zh-CN'),\r
      origin:'template',\r
      templateId:item.id\r
    };\r
    return upsertAvailableFaultModel(model);\r
  });\r
  if(createdModels[0]){\r
    S.selectedFaultCatalogId=createdModels[0].id;\r
  }\r
  renderFaultCatalogList();\r
  closeOv('ov-tpl');\r
  openOv('ov-ifm');\r
  toast(\`已新建\${S.selTpls.length}个故障模型，返回导入页面继续入库\`,'s');\r
  S.selTpls=[];\r
  updateSelectedTplSummary();\r
  updateUI();\r
}\r
\r
function getCurrentElectricalSelection(){\r
  if(S.injectSelectionMode==='imported'){\r
    return getImportedFaultModel(S.injectSelectionId);\r
  }\r
  if(S.injectSelectionMode==='template'){\r
    return (TPLS.electrical||[]).find(item=>item.id===S.injectSelectionId)||null;\r
  }\r
  return null;\r
}\r
\r
function selectElectricalInject(mode,id){\r
  S.injectSelectionMode=mode;\r
  S.injectSelectionId=id;\r
  renderElectricalInjectModal();\r
}\r
\r
function renderElectricalInjectModal(){\r
  const target=getNode(S.injectTargetId);\r
  const importedList=document.getElementById('einj-import-list');\r
  const targetCard=document.getElementById('einj-target');\r
  const grid=document.getElementById('einj-template-grid');\r
  const detail=document.getElementById('einj-detail-body');\r
  const hint=document.getElementById('einj-foot-hint');\r
  if(!importedList||!targetCard||!grid||!detail||!hint){return;}\r
\r
  if(!target){\r
    importedList.innerHTML='';\r
    targetCard.innerHTML='';\r
    grid.innerHTML='';\r
    detail.innerHTML='<div class="einj-empty">未选择目标模块。</div>';\r
    hint.textContent='请选择一个流程块或仿真块。';\r
    return;\r
  }\r
\r
  const importedElectrical=S.importedFaultModels.filter(model=>model.layer==='electrical');\r
  if(importedElectrical.length===0){\r
    importedList.innerHTML='<div class="ifm-empty">当前还没有已导入的电气层故障模型。可先从右上角导入，或直接在右侧模板库中选择并注入。</div>';\r
  }else{\r
    importedList.innerHTML=importedElectrical.map(model=>\`\r
      <div class="ifm-item\${S.injectSelectionMode==='imported'&&S.injectSelectionId===model.id?' on':''}" onclick="selectElectricalInject('imported','\${model.id}')">\r
        <div class="ifm-icon">⚡</div>\r
        <div style="min-width:0;flex:1">\r
          <div class="ifm-name">\${escapeHtml(model.name)}</div>\r
          <div class="ifm-meta">\${escapeHtml(buildFaultCatalogMeta(model))}</div>\r
        </div>\r
        <span class="ifm-state">已导入</span>\r
      </div>\`).join('');\r
  }\r
\r
  targetCard.innerHTML=\`\r
    <div class="einj-target-kicker">目标模块</div>\r
    <div class="einj-target-name">\${escapeHtml(target.props.name)}</div>\r
    <div class="einj-target-sub">电气层故障将以模块内部编辑的形式作用在当前 \${COMPONENT_LIBRARY[target.type].label} 上，无需额外拖拽故障块。</div>\r
    \${target.injectedFault?\`<div class="einj-current">已注入：\${escapeHtml(target.injectedFault.name)}</div>\`:''}\`;\r
\r
  grid.innerHTML=(TPLS.electrical||[]).map(template=>\`\r
    <div class="einj-card\${S.injectSelectionMode==='template'&&S.injectSelectionId===template.id?' on':''}" onclick="selectElectricalInject('template','\${template.id}')">\r
      <div class="einj-card-name">\${escapeHtml(template.name)}</div>\r
      <div class="einj-card-desc">\${escapeHtml(template.desc)}</div>\r
      <div class="einj-tags">\${template.tags.map(tag=>\`<span class="einj-tag">\${escapeHtml(tag)}<</span>\`).join('')}</div>\r
    </div>\`).join('');\r
\r
  const selected=getCurrentElectricalSelection();\r
  if(!selected){\r
    detail.innerHTML='<div class="einj-empty">先从左侧已导入模型或中间模板库中选择一个电气层故障，再执行导入并注入。</div>';\r
    hint.textContent='请选择一个电气层故障模型。';\r
    return;\r
  }\r
\r
  const selectedName=selected.name;\r
  const selectedDesc=selected.desc||'未提供说明';\r
  const selectedTags=selected.tags||[];\r
  const selectedLayer=S.injectSelectionMode==='imported'?getLayerLabel(selected.layer):'电气层模板';\r
  const sourceLabel=S.injectSelectionMode==='imported'?'已导入模型':'模板直注';\r
  detail.innerHTML=\`\r
    <div class="tdtitle">\${escapeHtml(selectedName)}</div>\r
    <div style="font-size:10px;color:var(--text2);line-height:1.6;margin-bottom:10px">\${escapeHtml(selectedDesc)}</div>\r
    <div class="einj-row"><span>来源<</span><span>\${sourceLabel}<</span></div>\r
    <div class="einj-row"><span>层级<</span><span>\${selectedLayer}<</span></div>\r
    <div class="einj-row"><span>作用对象<</span><span>\${escapeHtml(target.props.name)}<</span></div>\r
    <div class="tdlbl">标签</div>\r
    <div class="einj-tags" style="margin-top:6px">\${selectedTags.map(tag=>\`<span class="einj-tag">\${escapeHtml(tag)}<</span>\`).join('')}</div>\r
    <div class="tdlbl">注入璇存槑</div>\r
    <div style="font-size:10px;color:var(--text2);line-height:1.7;margin-top:4px">确认后将把该电气层故障绑定到当前模块，模块卡片会标红，并纳入后续仿真分析。</div>\`;\r
  hint.textContent=\`已选：\${selectedName}，确认后将注入到 \${target.props.name}\`;\r
}\r
\r
function openElectricalFaultImport(){\r
  const node=getNode(S.selBlk);\r
  if(!node||!isElectricalInjectableType(node.type)){return;}\r
  S.injectTargetId=node.id;\r
  if(node.injectedFault&&getImportedFaultModel(node.injectedFault.modelId)){\r
    S.injectSelectionMode='imported';\r
    S.injectSelectionId=node.injectedFault.modelId;\r
  }else{\r
    S.injectSelectionMode='';\r
    S.injectSelectionId='';\r
  }\r
  renderElectricalInjectModal();\r
  openOv('ov-elec');\r
}\r
\r
function confirmElectricalFaultInjection(){\r
  const target=getNode(S.injectTargetId);\r
  if(!target){toast('当前没有可注入的目标模块','w');return;}\r
  const selected=getCurrentElectricalSelection();\r
  if(!selected){toast('请先选择一个电气层故障模型','w');return;}\r
\r
  let faultModel=selected;\r
  if(S.injectSelectionMode==='template'){\r
    const existing=S.availableFaultModels.find(model=>model.layer==='electrical'&&(model.templateId===selected.id||model.name===selected.name));\r
    faultModel=existing||upsertAvailableFaultModel({\r
      id:\`fm-electrical-\${selected.id}\`,\r
      name:selected.name,\r
      layer:'electrical',\r
      desc:selected.desc,\r
      tags:selected.tags,\r
      createdAt:new Date().toLocaleDateString('zh-CN'),\r
      origin:'template',\r
      templateId:selected.id\r
    });\r
  }\r
\r
  const importedModel=ensureImportedFaultModel(faultModel);\r
  target.injectedFault={\r
    modelId:importedModel.id,\r
    name:importedModel.name,\r
    layer:'electrical',\r
    tags:cloneDefaults(importedModel.tags||[]),\r
    desc:importedModel.desc||''\r
  };\r
  if(!S.faultedBlks.includes(target.id)){\r
    S.faultedBlks.push(target.id);\r
  }\r
  renderFaultCatalogList();\r
  markTopologyDirty('fault');\r
  closeOv('ov-elec');\r
  renderModelNodes();\r
  renderPropertyPanel(target);\r
  updateUI();\r
  toast(\`已将电气层故障「\${importedModel.name}」注入到 \${target.props.name}\`,'s');\r
}\r
\r
function getCurrentProtocolSelection(){\r
  if(S.protocolInjectSelectionMode==='imported'){\r
    return getImportedFaultModel(S.protocolInjectSelectionId);\r
  }\r
  if(S.protocolInjectSelectionMode==='template'){\r
    return (TPLS.protocol||[]).find(item=>item.id===S.protocolInjectSelectionId)||null;\r
  }\r
  return null;\r
}\r
\r
function selectProtocolInject(mode,id){\r
  S.protocolInjectSelectionMode=mode;\r
  S.protocolInjectSelectionId=id;\r
  renderProtocolInjectModal();\r
}\r
\r
function renderProtocolInjectModal(){\r
  const target=getEdge(S.protocolInjectTargetId);\r
  const importedList=document.getElementById('pinj-import-list');\r
  const targetCard=document.getElementById('pinj-target');\r
  const grid=document.getElementById('pinj-template-grid');\r
  const detail=document.getElementById('pinj-detail-body');\r
  const hint=document.getElementById('pinj-foot-hint');\r
  if(!importedList||!targetCard||!grid||!detail||!hint){return;}\r
\r
  if(!target||!isProtocolInjectableEdge(target)){\r
    importedList.innerHTML='';\r
    targetCard.innerHTML='';\r
    grid.innerHTML='';\r
    detail.innerHTML='<div class="einj-empty">未选择可注入的 CAN 总线。</div>';\r
    hint.textContent='请选择一条 CAN 总线。';\r
    return;\r
  }\r
\r
  const sourceNode=getNode(target.sourceNodeId);\r
  const targetNode=getNode(target.targetNodeId);\r
  const sourceName=sourceNode?.props?.name||target.sourceNodeId;\r
  const targetName=targetNode?.props?.name||target.targetNodeId;\r
  const importedProtocol=S.importedFaultModels.filter(model=>model.layer==='protocol');\r
\r
  if(importedProtocol.length===0){\r
    importedList.innerHTML='<div class="ifm-empty">当前还没有已导入的CAN 协议层故障模型。可先从右上角导入，或直接在右侧模板库中选择并注入。</div>';\r
  }else{\r
    importedList.innerHTML=importedProtocol.map(model=>\`\r
      <div class="ifm-item\${S.protocolInjectSelectionMode==='imported'&&S.protocolInjectSelectionId===model.id?' on':''}" onclick="selectProtocolInject('imported','\${model.id}')">\r
        <div class="ifm-icon">协</div>\r
        <div style="min-width:0;flex:1">\r
          <div class="ifm-name">\${escapeHtml(model.name)}</div>\r
          <div class="ifm-meta">\${escapeHtml(buildFaultCatalogMeta(model))}</div>\r
        </div>\r
        <span class="ifm-state">已导入</span>\r
      </div>\`).join('');\r
  }\r
\r
  targetCard.innerHTML=\`\r
    <div class="einj-target-kicker">目标连线</div>\r
    <div class="einj-target-name">CAN 总线</div>\r
    <div class="einj-target-sub">连接 \${escapeHtml(sourceName)} → \${escapeHtml(targetName)}。协议层故障会直接作用在这条 CAN 通信链路上。</div>\r
    \${target.injectedFault?\`<div class="einj-current">已注入：\${escapeHtml(target.injectedFault.name)}</div>\`:''}\`;\r
\r
  grid.innerHTML=(TPLS.protocol||[]).map(template=>\`\r
    <div class="einj-card\${S.protocolInjectSelectionMode==='template'&&S.protocolInjectSelectionId===template.id?' on':''}" onclick="selectProtocolInject('template','\${template.id}')">\r
      <div class="einj-card-name">\${escapeHtml(template.name)}</div>\r
      <div class="einj-card-desc">\${escapeHtml(template.desc)}</div>\r
      <div class="einj-tags">\${template.tags.map(tag=>\`<span class="einj-tag">\${escapeHtml(tag)}<</span>\`).join('')}</div>\r
    </div>\`).join('');\r
\r
  const selected=getCurrentProtocolSelection();\r
  if(!selected){\r
    detail.innerHTML='<div class="einj-empty">先从左侧已导入模型或中间模板库中选择一个CAN 协议层故障，再执行导入并注入。</div>';\r
    hint.textContent='请选择一个 CAN 协议层故障模型。';\r
    return;\r
  }\r
\r
  const selectedName=selected.name;\r
  const selectedDesc=selected.desc||'未提供说明';\r
  const selectedTags=selected.tags||[];\r
  const selectedKind=selected.faultKind||selected.tags?.[0]||'协议层故障';\r
  const sourceLabel=S.protocolInjectSelectionMode==='imported'?'已导入模型':'模板直注';\r
  detail.innerHTML=\`\r
    <div class="tdtitle">\${escapeHtml(selectedName)}</div>\r
    <div style="font-size:10px;color:var(--text2);line-height:1.6;margin-bottom:10px">\${escapeHtml(selectedDesc)}</div>\r
    <div class="einj-row"><span>来源<</span><span>\${sourceLabel}<</span></div>\r
    <div class="einj-row"><span>层级<</span><span>协议层</span></div>\r
    <div class="einj-row"><span>故障类型<</span><span>\${escapeHtml(selectedKind)}<</span></div>\r
    <div class="einj-row"><span>作用对象<</span><span>CAN 总线<</span></div>\r
    <div class="tdlbl">标签</div>\r
    <div class="einj-tags" style="margin-top:6px">\${selectedTags.map(tag=>\`<span class="einj-tag">\${escapeHtml(tag)}<</span>\`).join('')}</div>\r
    <div class="tdlbl">注入璇存槑</div>\r
    <div style="font-size:10px;color:var(--text2);line-height:1.7;margin-top:4px">确认后将把该协议层故障绑定到当前 CAN 总线上，连线会标红并切换为虚线，用于后续仿真分析。</div>\`;\r
  hint.textContent=\`已选：\${selectedName}，确认后将注入到当前 CAN 总线\`;\r
}\r
\r
function openProtocolFaultImport(){\r
  const edge=getEdge(S.selEdge);\r
  if(!isProtocolInjectableEdge(edge)){\r
    toast('当前仅支持对 CAN 总线导入协议层故障','w');\r
    return;\r
  }\r
  S.protocolInjectTargetId=edge.id;\r
  if(edge.injectedFault&&getImportedFaultModel(edge.injectedFault.modelId)){\r
    S.protocolInjectSelectionMode='imported';\r
    S.protocolInjectSelectionId=edge.injectedFault.modelId;\r
  }else{\r
    S.protocolInjectSelectionMode='';\r
    S.protocolInjectSelectionId='';\r
  }\r
  renderProtocolInjectModal();\r
  openOv('ov-proto');\r
}\r
\r
function confirmProtocolFaultInjection(){\r
  const target=getEdge(S.protocolInjectTargetId);\r
  if(!isProtocolInjectableEdge(target)){\r
    toast('当前没有可注入的 CAN 总线','w');\r
    return;\r
  }\r
  const selected=getCurrentProtocolSelection();\r
  if(!selected){\r
    toast('请先选择一个 CAN 协议层故障模型','w');\r
    return;\r
  }\r
\r
  let faultModel=selected;\r
  if(S.protocolInjectSelectionMode==='template'){\r
    const existing=S.availableFaultModels.find(model=>model.layer==='protocol'&&(model.templateId===selected.id||model.name===selected.name));\r
    faultModel=existing||upsertAvailableFaultModel({\r
      id:\`fm-protocol-\${selected.id}\`,\r
      name:selected.name,\r
      layer:'protocol',\r
      desc:selected.desc,\r
      tags:selected.tags,\r
      faultKind:selected.faultKind||selected.tags?.[0]||'协议层故障',\r
      faultCode:selected.faultCode||'',\r
      createdAt:new Date().toLocaleDateString('zh-CN'),\r
      origin:'template',\r
      templateId:selected.id\r
    });\r
  }\r
\r
  const importedModel=ensureImportedFaultModel(faultModel);\r
  target.injectedFault={\r
    modelId:importedModel.id,\r
    name:importedModel.name,\r
    layer:'protocol',\r
    tags:cloneDefaults(importedModel.tags||[]),\r
    desc:importedModel.desc||'',\r
    faultKind:importedModel.faultKind||importedModel.tags?.[0]||'协议层故障',\r
    faultCode:importedModel.faultCode||''\r
  };\r
  renderFaultCatalogList();\r
  markTopologyDirty('fault');\r
  closeOv('ov-proto');\r
  renderEdges();\r
  renderPropertyPanel(target);\r
  updateUI();\r
  toast(\`已将协议层故障「\${importedModel.name}」注入到当前 CAN 总线\`,'s');\r
}\r
\r
// ─── 故障配置 ───\r
function setLayer(el,l){\r
  document.querySelectorAll('.lbtn').forEach(e=>e.classList.remove('on'));\r
  el.classList.add('on');S.activeLayer=l;upPrev();\r
}\r
\r
function upPrev(){\r
  const s=parseFloat(document.getElementById('cfs')?.value)||5;\r
  const d=parseFloat(document.getElementById('cfd')?.value)||3;\r
  const tot=parseFloat(document.getElementById('cftot')?.value)||20;\r
  const mag=parseFloat(document.getElementById('cfmag')?.value)||0.5;\r
  const typ=document.getElementById('cftype')?.value||'';\r
  const svg=document.getElementById('ctlsvg');if(!svg)return;\r
  const W=svg.clientWidth||170,H=72,mid=H/2;\r
  const tx=t=>(t/tot)*W;\r
  const sx=tx(s),ex=tx(Math.min(s+d,tot));\r
  document.getElementById('tlr').setAttribute('x',sx);\r
  document.getElementById('tlr').setAttribute('width',ex-sx);\r
  document.getElementById('tll').setAttribute('x1',sx);document.getElementById('tll').setAttribute('x2',sx);\r
  let np=[],fp=[];\r
  for(let i=0;i<=60;i++){\r
    const t=(i/60)*tot,x=tx(t),y=mid+Math.sin(t*2)*10;\r
    np.push(\`\${x},\${y}\`);\r
    let fy=y;\r
    if(t>=s&&t<=s+d){\r
      if(typ.includes('卡死'))fy=mid+18;\r
      else if(typ.includes('婕傜Щ'))fy=y+(t-s)*mag*4;\r
      else fy=y+mag*18;\r
    }\r
    fp.push(\`\${x},\${Math.max(4,Math.min(H-4,fy))}\`);\r
  }\r
  document.getElementById('tln').setAttribute('points',np.join(' '));\r
  document.getElementById('tlf').setAttribute('points',fp.join(' '));\r
  const tgt=document.getElementById('cftgt')?.selectedOptions?.[0]?.textContent||'未选择目标';\r
  document.getElementById('csumm').innerHTML=\`\r
    <div class="srow"><span class="sk">目标<</span><span class="sv">\${tgt.split('路')[0].trim()}<</span></div>\r
    <div class="srow"><span class="sk">层级<</span><span class="sv">\${S.activeLayer}<</span></div>\r
    <div class="srow"><span class="sk">类型<</span><span class="sv">\${typ.split('(')[0].trim()}<</span></div>\r
    <div class="srow"><span class="sk">起始<</span><span class="sv">\${s}s<</span></div>\r
    <div class="srow"><span class="sk">鏃堕暱<</span><span class="sv">\${d}s<</span></div>\r
    <div class="srow"><span class="sk">骞呭害<</span><span class="sv">\${mag}<</span></div>\`;\r
}\r
\r
function confirmFC(){\r
  const targetId=document.getElementById('cftgt')?.value||'';\r
  markFaultTarget(targetId);\r
  S.simDone=false;\r
  S.step=3;\r
  closeOv('ov-cfg');\r
  toast('故障配置已保存，可以开始运行仿真','s');\r
  updateUI();\r
}\r
\r
// ─── 示波器与仿真运行时 ───\r
function getScopeNodes(){\r
  return S.modelNodes.filter(node=>node.type==='instrument_scope');\r
}\r
\r
function getAuxInstrumentNodes(){\r
  return S.modelNodes.filter(node=>node.type==='instrument_logger'||node.type==='instrument_spectrum');\r
}\r
\r
function getConnectedScopeNodes(){\r
  return getScopeNodes().filter(node=>getIncomingEdgesForNode(node.id).length>0);\r
}\r
\r
function getIncomingEdgesForNode(nodeId){\r
  return S.modelEdges\r
    .filter(edge=>edge.targetNodeId===nodeId)\r
    .sort((a,b)=>(a.targetPortIndex||0)-(b.targetPortIndex||0)||a.id.localeCompare(b.id));\r
}\r
\r
function getOutgoingEdgesForNode(nodeId){\r
  return S.modelEdges.filter(edge=>edge.sourceNodeId===nodeId);\r
}\r
\r
function createRuntimeBucket(){\r
  return {nodeStates:{},edgeStates:{},scopeSamples:{},instrumentSamples:{}};\r
}\r
\r
const SIM = {\r
  inited:false,\r
  running:false,\r
  paused:false,\r
  hasSamples:false,\r
  timer:null,\r
  time:0,\r
  stepIndex:0,\r
  duration:10,\r
  stepSize:0.1,\r
  datasetName:'test',\r
  realtime:false,\r
  activeScopeId:'',\r
  scopeWindows:{},\r
  scopeWindowZ:10,\r
  actual:createRuntimeBucket(),\r
  reference:createRuntimeBucket()\r
};\r
\r
function clearSimLoop(){\r
  if(SIM.timer){\r
    clearInterval(SIM.timer);\r
    SIM.timer=null;\r
  }\r
}\r
\r
function getNodeSeed(id){\r
  return Number(String(id||'').replace(/\\D/g,''))||1;\r
}\r
\r
function noiseAt(seed,stepIndex,time){\r
  const raw=Math.sin(seed*12.9898+stepIndex*78.233+time*5.173)*43758.5453;\r
  const frac=raw-Math.floor(raw);\r
  return frac*2-1;\r
}\r
\r
function parseScalar(value,fallback=0){\r
  const parsed=Number.parseFloat(String(value).replace(/[^\\d+\\-.eE]/g,''));\r
  return Number.isFinite(parsed)?parsed:fallback;\r
}\r
\r
function ensureScopeSelection(preferredId=''){\r
  if(preferredId&&getNode(preferredId)?.type==='instrument_scope'){\r
    SIM.activeScopeId=preferredId;\r
    return;\r
  }\r
  if(getNode(SIM.activeScopeId)?.type==='instrument_scope'){return;}\r
  SIM.activeScopeId=getScopeNodes()[0]?.id||'';\r
}\r
\r
function ensureScopeWindowStore(){\r
  if(!SIM.scopeWindows){SIM.scopeWindows={};}\r
  if(!Number.isFinite(SIM.scopeWindowZ)){SIM.scopeWindowZ=10;}\r
}\r
\r
function getScopeWindowHostMetrics(){\r
  const host=document.getElementById('scope-window-layer');\r
  const viewport=getCanvasViewport();\r
  const target=host||viewport;\r
  const rect=target?.getBoundingClientRect?.();\r
  return {\r
    width:Math.max(\r
      host?.clientWidth||0,\r
      viewport?.clientWidth||0,\r
      Math.round(rect?.width||0),\r
      window.innerWidth||0,\r
      320\r
    ),\r
    height:Math.max(\r
      host?.clientHeight||0,\r
      viewport?.clientHeight||0,\r
      Math.round(rect?.height||0),\r
      window.innerHeight||0,\r
      240\r
    )\r
  };\r
}\r
\r
function clampScopeWindowPosition(scopeWindow){\r
  if(!scopeWindow){return scopeWindow;}\r
  const hostMetrics=getScopeWindowHostMetrics();\r
  const maxX=Math.max(SCOPE_WINDOW_LAYOUT.gutter,hostMetrics.width-SCOPE_WINDOW_LAYOUT.defaultWidth-SCOPE_WINDOW_LAYOUT.gutter);\r
  const maxY=Math.max(SCOPE_WINDOW_LAYOUT.reservedTop,hostMetrics.height-SCOPE_WINDOW_LAYOUT.estimatedHeight-SCOPE_WINDOW_LAYOUT.gutter);\r
  scopeWindow.x=clamp(Math.round(scopeWindow.x),SCOPE_WINDOW_LAYOUT.gutter,maxX);\r
  scopeWindow.y=clamp(Math.round(scopeWindow.y),SCOPE_WINDOW_LAYOUT.reservedTop,maxY);\r
  return scopeWindow;\r
}\r
\r
function listOpenScopeWindows(){\r
  ensureScopeWindowStore();\r
  return Object.values(SIM.scopeWindows).filter(scopeWindow=>scopeWindow.open!==false&&getNode(scopeWindow.scopeId));\r
}\r
\r
function ensureScopeWindow(scopeId){\r
  ensureScopeWindowStore();\r
  const existing=SIM.scopeWindows[scopeId];\r
  if(existing){\r
    existing.open=true;\r
    return existing;\r
  }\r
  const index=Object.keys(SIM.scopeWindows).length;\r
  const created={\r
    scopeId,\r
    open:true,\r
    mode:'overlay',\r
    x:SCOPE_WINDOW_LAYOUT.gutter+index*SCOPE_WINDOW_LAYOUT.cascadeX,\r
    y:SCOPE_WINDOW_LAYOUT.reservedTop+index*SCOPE_WINDOW_LAYOUT.cascadeY,\r
    z:++SIM.scopeWindowZ\r
  };\r
  SIM.scopeWindows[scopeId]=clampScopeWindowPosition(created);\r
  return created;\r
}\r
\r
function focusScopeWindow(scopeId){\r
  const scopeWindow=ensureScopeWindow(scopeId);\r
  scopeWindow.z=++SIM.scopeWindowZ;\r
  SIM.activeScopeId=scopeId;\r
  return scopeWindow;\r
}\r
\r
function closeScopeWindow(scopeId){\r
  ensureScopeWindowStore();\r
  if(SIM.scopeWindows[scopeId]){\r
    SIM.scopeWindows[scopeId].open=false;\r
  }\r
  renderScopeWindows();\r
}\r
\r
function renderScopeWindows(){\r
  const host=document.getElementById('scope-window-layer');\r
  if(!host){return;}\r
  host.innerHTML=listOpenScopeWindows()\r
    .sort((left,right)=>left.z-right.z)\r
    .map(scopeWindow=>{\r
      const node=getNode(scopeWindow.scopeId);\r
      return \`\r
        <section class="scope-window" data-scope-id="\${scopeWindow.scopeId}" style="left:\${scopeWindow.x}px;top:\${scopeWindow.y}px;z-index:\${scopeWindow.z}">\r
          <header class="scope-window__header" data-scope-drag-handle="\${scopeWindow.scopeId}" onmousedown="startScopeWindowDrag(event,'\${scopeWindow.scopeId}')" onpointerdown="startScopeWindowDrag(event,'\${scopeWindow.scopeId}')">\r
            <div class="scope-window__title">\${escapeHtml(node?.props?.name||node?.name||'示波器')}</div>\r
            <button type="button" class="scope-window__close" data-scope-close="\${scopeWindow.scopeId}">关闭</button>\r
          </header>\r
          <div class="scope-window__plot">\r
            <canvas data-scope-role="wave-canvas"></canvas>\r
          </div>\r
        </section>\`;\r
    })\r
    .join('');\r
  host.querySelectorAll('.scope-window').forEach(el=>{\r
    el.addEventListener('pointerdown',()=>{\r
      focusScopeWindow(el.dataset.scopeId||'');\r
      renderScopeWindows();\r
    });\r
  });\r
  host.querySelectorAll('[data-scope-drag-handle]').forEach(header=>{\r
    header.addEventListener('mousedown',event=>{\r
      startScopeWindowDrag(event,header.dataset.scopeDragHandle||'');\r
    });\r
  });\r
  host.querySelectorAll('[data-scope-close]').forEach(btn=>{\r
    btn.addEventListener('click',event=>{\r
      event.stopPropagation();\r
      closeScopeWindow(btn.dataset.scopeClose||'');\r
    });\r
  });\r
}\r
\r
function ensureNodeRuntime(bucket,node){\r
  if(!bucket.nodeStates[node.id]){\r
    bucket.nodeStates[node.id]={\r
      lastOutput:0,\r
      lastInput:0,\r
      lastOutputs:[0],\r
      lastInputValues:[],\r
      lastMiddleValues:[],\r
      prevInput:0,\r
      prevAggregateInput:0,\r
      integrator:0,\r
      firstOrder:0\r
    };\r
  }\r
  return bucket.nodeStates[node.id];\r
}\r
\r
function ensureEdgeRuntime(bucket,edge){\r
  if(!bucket.edgeStates[edge.id]){\r
    bucket.edgeStates[edge.id]={lastOutput:0,delayQueue:[],history:[]};\r
  }\r
  return bucket.edgeStates[edge.id];\r
}\r
\r
function pushLimitedSample(list,sample,limit=720){\r
  list.push(sample);\r
  if(list.length>limit){\r
    list.splice(0,list.length-limit);\r
  }\r
}\r
\r
function hasSimulationFaults(){\r
  return S.modelNodes.some(node=>node.type.startsWith('fault_')||Boolean(node.injectedFault))\r
    || S.modelEdges.some(edge=>Boolean(edge.injectedFault));\r
}\r
\r
function canInitializeSimulation(){\r
  if(!S.sysLoaded){return false;}\r
  if(!S.modelNodes.some(node=>node.type==='signal_source')){return false;}\r
  if(getConnectedScopeNodes().length===0){return false;}\r
  if(findInputCouplingConflicts().length>0){return false;}\r
  return true;\r
}\r
\r
function resetSimulationRuntime(){\r
  clearSimLoop();\r
  SIM.time=0;\r
  SIM.stepIndex=0;\r
  SIM.hasSamples=false;\r
  SIM.actual=createRuntimeBucket();\r
  SIM.reference=createRuntimeBucket();\r
  getScopeNodes().forEach(node=>{\r
    SIM.actual.scopeSamples[node.id]=[];\r
    SIM.reference.scopeSamples[node.id]=[];\r
  });\r
  ensureScopeSelection();\r
  S.simDone=false;\r
  if(S.systemSaved&&S.step===3){\r
    S.step=2;\r
  }\r
}\r
\r
function getSimulationLoopInterval(){\r
  if(SIM.realtime){\r
    return clamp(Math.round(SIM.stepSize*1000),80,400);\r
  }\r
  return 40;\r
}\r
\r
function updateSimbarVisualState(){\r
  const runBtn=document.getElementById('sbtn-run');\r
  if(runBtn){\r
    runBtn.classList.toggle('active',SIM.running&&!SIM.paused);\r
  }\r
  document.getElementById('run-icon').textContent='▶';\r
  document.getElementById('run-lbl').textContent=SIM.running&&!SIM.paused?'运行中':'运行';\r
  document.getElementById('pause-lbl').textContent=SIM.paused?'继续':'鏆傚仠';\r
}\r
\r
function simEnableButtons(init,run,step,pause,stop){\r
  const ids=['sbtn-init','sbtn-run','sbtn-step','sbtn-pause','sbtn-stop'];\r
  const vals=[init,run,step,pause,stop];\r
  ids.forEach((id,i)=>{\r
    const el=document.getElementById(id);\r
    if(vals[i]) el.classList.remove('sim-btn-disabled');\r
    else el.classList.add('sim-btn-disabled');\r
  });\r
  updateSimbarVisualState();\r
}\r
\r
function updateSimbarEnabled(){\r
  if(!S.sysLoaded){simEnableButtons(false,false,false,false,false);return;}\r
  if(!SIM.inited){\r
    simEnableButtons(canInitializeSimulation(),false,false,false,false);\r
    return;\r
  }\r
  if(SIM.running&&!SIM.paused){simEnableButtons(false,false,false,true,true);return;}\r
  if(SIM.paused){simEnableButtons(false,true,true,true,true);return;}\r
  simEnableButtons(true,true,true,false,false);\r
}\r
\r
function findInputCouplingConflicts(){\r
  const seen=new Map();\r
  const conflicts=[];\r
  S.modelEdges.forEach(edge=>{\r
    const key=\`\${edge.targetNodeId}:\${edge.targetPortIndex||0}\`;\r
    if(seen.has(key)){\r
      conflicts.push(seen.get(key),edge);\r
    }else{\r
      seen.set(key,edge);\r
    }\r
  });\r
  return [...new Map(conflicts.map(edge=>[edge.id,edge])).values()];\r
}\r
\r
function validateSimulationTopology(){\r
  if(!S.sysLoaded){toast('请先导入系统模型','w');return false;}\r
  if(!S.modelNodes.some(node=>node.type==='signal_source')){\r
    toast('请至少放置一个信号源','w');\r
    return false;\r
  }\r
  if(getScopeNodes().length===0){\r
    toast('请至少放置一个示波器用于观察信号','w');\r
    return false;\r
  }\r
  if(getConnectedScopeNodes().length===0){\r
    toast('请至少让一个示波器接入信号链路，才能查看波形','w');\r
    return false;\r
  }\r
  const conflicts=findInputCouplingConflicts();\r
  if(conflicts.length){\r
    selectEdge(conflicts[0].id);\r
    toast('检测到同一输入端口存在多条连线，请先删除多余连线以避免信号耦合','w');\r
    return false;\r
  }\r
  return true;\r
}\r
\r
function computeSourceSignal(node,time){\r
  const amplitude=parseScalar(node.props.amplitude,1);\r
  const frequency=parseScalar(node.props.frequency,1);\r
  if(node.props.waveType==='闃惰穬'){\r
    const stepTime=Math.max(0.2,frequency);\r
    return time>=stepTime?amplitude:0;\r
  }\r
  if(node.props.waveType==='常值'){\r
    return amplitude;\r
  }\r
  return amplitude*Math.sin(2*Math.PI*frequency*time);\r
}\r
\r
function applyElectricalFault(node,inputValue,outputValue,time){\r
  if(!node.injectedFault){return outputValue;}\r
  const modelId=node.injectedFault.modelId||'';\r
  const importedModel=modelId?getImportedFaultModel(modelId):null;\r
  const faultValue=parseScalar(importedModel?.defaultValue,0);\r
  if(modelId==='motor_efficiency_loss'){\r
    const efficiency=faultValue>0?faultValue:0.55;\r
    return outputValue*efficiency;\r
  }\r
  if(modelId==='motor_lock'){\r
    return 0;\r
  }\r
  if(modelId==='motor_thrust_saturation'){\r
    const saturation=faultValue>0?faultValue:8;\r
    return Math.max(-saturation,Math.min(saturation,outputValue));\r
  }\r
  const name=node.injectedFault.name||'';\r
  if(name.includes('过流')){\r
    return Math.abs(inputValue)>1.2?0:outputValue*0.78;\r
  }\r
  if(name.includes('短路')||name.includes('断路')||name.includes('开路')){\r
    return 0;\r
  }\r
  if(name.includes('电压')){\r
    return outputValue*(0.94+0.08*Math.sin(time*7.4));\r
  }\r
  return outputValue*0.85;\r
}\r
\r
function applyPhysicalFaultNode(node,inputValue,time,modeKey){\r
  if(modeKey==='reference'){return inputValue;}\r
  if(node.type==='fault_bias'){\r
    return inputValue+0.5;\r
  }\r
  if(node.type==='fault_noise'){\r
    return inputValue+noiseAt(getNodeSeed(node.id),SIM.stepIndex,time)*0.22;\r
  }\r
  return inputValue;\r
}\r
\r
function flipBitValue(value){\r
  const scaled=Math.round(value*256);\r
  return (scaled^0b1000)/256;\r
}\r
\r
function transmitEdgeSignal(edge,value,modeKey,time){\r
  const bucket=modeKey==='reference'?SIM.reference:SIM.actual;\r
  const edgeState=ensureEdgeRuntime(bucket,edge);\r
  const base=Array.isArray(value)\r
    ?value.map(sanitizeSignalValue)\r
    :(Number.isFinite(value)?value:0);\r
  let nextValue=base;\r
\r
  if(modeKey==='actual'&&edge.injectedFault?.layer==='protocol'&&!Array.isArray(base)){\r
    const kind=edge.injectedFault.faultKind||'';\r
    const faultCode=edge.injectedFault.faultCode||'';\r
    const held=Number.isFinite(edgeState.lastOutput)?edgeState.lastOutput:0;\r
    if(faultCode==='loss'||kind==='丢包'){\r
      nextValue=noiseAt(getNodeSeed(edge.id),SIM.stepIndex,time)>0.55?held:base;\r
    }else if(faultCode==='delay'||kind==='延迟'){\r
      const delaySteps=clamp(Math.round(0.35/Math.max(SIM.stepSize,0.001)),1,8);\r
      edgeState.delayQueue.push(base);\r
      nextValue=edgeState.delayQueue.length>delaySteps?edgeState.delayQueue.shift():held;\r
    }else if(faultCode==='bitflip'||kind==='位翻转'){\r
      nextValue=flipBitValue(base);\r
    }else if(faultCode==='replay'||kind==='重放'){\r
      if(edgeState.history.length>6&&SIM.stepIndex>6&&SIM.stepIndex%10===0){\r
        nextValue=edgeState.history[Math.max(0,edgeState.history.length-6)];\r
      }else{\r
        nextValue=base;\r
      }\r
    }\r
  }\r
\r
  edgeState.lastOutput=nextValue;\r
  pushLimitedSample(edgeState.history,Array.isArray(base)?sanitizeSignalValue(base[0]??0):base,40);\r
  return nextValue;\r
}\r
\r
function sanitizeSignalValue(value){\r
  if(Array.isArray(value)){\r
    return value.map(sanitizeSignalValue);\r
  }\r
  return Number.isFinite(value)?value:0;\r
}\r
\r
function resolveNodeInputValues(node,modeKey,time,dt,cache,visiting){\r
  const inputPorts=getNodePorts(node).inputs;\r
  if(!inputPorts.length){return [];}\r
  const incoming=getIncomingEdgesForNode(node.id);\r
  return inputPorts.map((_,portIndex)=>{\r
    const edge=incoming.find(item=>(item.targetPortIndex||0)===portIndex);\r
    if(!edge){return 0;}\r
    const upstream=resolveNodeOutput(edge.sourceNodeId,edge.sourcePortIndex||0,modeKey,time,dt,cache,visiting);\r
    return transmitEdgeSignal(edge,upstream,modeKey,time);\r
  });\r
}\r
\r
function buildSimulationResult(node,nodeState,inputValues,modeKey,time,dt){\r
  normalizeSimulationInterfaces(node.props);\r
  const primaryInput=sanitizeSignalValue(inputValues[0]||0);\r
  const aggregateInput=inputValues.length\r
    ?inputValues.reduce((sum,value)=>sum+sanitizeSignalValue(value),0)\r
    :0;\r
  const activeInput=inputValues.length>1?aggregateInput:primaryInput;\r
  let coreOutput=0;\r
  let stateValue=0;\r
\r
  if(node.props.moduleType==='微分'){\r
    coreOutput=(activeInput-(nodeState.prevAggregateInput||0))/Math.max(dt,0.001);\r
    stateValue=activeInput;\r
  }else if(node.props.moduleType==='积分'){\r
    nodeState.integrator=(nodeState.integrator||0)+activeInput*dt;\r
    coreOutput=nodeState.integrator;\r
    stateValue=nodeState.integrator;\r
  }else{\r
    const tau=1;\r
    const previous=nodeState.firstOrder||0;\r
    const alpha=dt/(tau+dt);\r
    coreOutput=previous+alpha*(activeInput-previous);\r
    nodeState.firstOrder=coreOutput;\r
    stateValue=nodeState.firstOrder;\r
  }\r
\r
  nodeState.prevInput=primaryInput;\r
  nodeState.prevAggregateInput=activeInput;\r
  if(modeKey==='actual'){\r
    coreOutput=applyElectricalFault(node,activeInput,coreOutput,time);\r
  }\r
\r
  const outputValues=node.props.outputs.map((_,index)=>{\r
    if(index===0){return sanitizeSignalValue(coreOutput);}\r
    if(index===1){return sanitizeSignalValue(stateValue);}\r
    if(index===2){return sanitizeSignalValue(aggregateInput);}\r
    return sanitizeSignalValue(coreOutput+(index*0.12*aggregateInput));\r
  });\r
\r
  const middleValues=node.props.middleVars.map((_,index)=>{\r
    if(index===0){return sanitizeSignalValue(primaryInput);}\r
    if(index===1){return sanitizeSignalValue(aggregateInput);}\r
    if(index===2){return sanitizeSignalValue(stateValue);}\r
    if(index===3){return sanitizeSignalValue(coreOutput);}\r
    return sanitizeSignalValue((coreOutput+aggregateInput+primaryInput)/(index+1));\r
  });\r
\r
  return {outputs:outputValues,middleValues};\r
}\r
\r
function getPythonBindingDefaultValue(port){\r
  return window.__GZ_PYTHON_RUNTIME__?.getPythonBindingDefaultValue\r
    ?window.__GZ_PYTHON_RUNTIME__.getPythonBindingDefaultValue(port)\r
    :0;\r
}\r
\r
function readPythonExecutionValue(collection,item,index){\r
  if(Array.isArray(collection)){\r
    return collection[index];\r
  }\r
  if(!collection||typeof collection!=='object'){\r
    return undefined;\r
  }\r
  if(item?.varName&&Object.prototype.hasOwnProperty.call(collection,item.varName)){\r
    return collection[item.varName];\r
  }\r
  if(item?.displayName&&Object.prototype.hasOwnProperty.call(collection,item.displayName)){\r
    return collection[item.displayName];\r
  }\r
  return undefined;\r
}\r
\r
function executeBoundFlowBlock(node,nodeState,inputValues,modeKey,time,dt){\r
  const binding=ensureFlowNodePythonBinding(node);\r
  const runtime=window.__GZ_PYTHON_RUNTIME__;\r
  if(!binding.bound||typeof runtime?.executeFlowBlockPythonBindingSync!=='function'){\r
    const passthrough=sanitizeSignalValue(inputValues[0]||0);\r
    return {outputs:[passthrough],middleValues:[]};\r
  }\r
\r
  const execution=runtime.executeFlowBlockPythonBindingSync({\r
    nodeId:node.id,\r
    binding,\r
    inputValues,\r
    mode:modeKey,\r
    time,\r
    dt,\r
    adapterMode:binding.executionMode||'mock',\r
    adapterEndpoint:binding.executionConfig?.endpoint,\r
    applyElectricalFault:value=>applyElectricalFault(node,inputValues[0]||0,value,time)\r
  });\r
\r
  nodeState.lastPythonPayload=execution.payload||null;\r
  nodeState.lastPythonResult=execution.response||null;\r
  return {\r
    outputs:(execution.outputs||[]).map(sanitizeSignalValue),\r
    middleValues:(execution.middleValues||[]).map(sanitizeSignalValue)\r
  };\r
}\r
\r
function resolveNodeOutputs(nodeId,modeKey,time,dt,cache,visiting){\r
  if(cache.has(nodeId)){return cache.get(nodeId);}\r
  const node=getNode(nodeId);\r
  if(!node){\r
    return {outputs:[0],middleValues:[]};\r
  }\r
  const bucket=modeKey==='reference'?SIM.reference:SIM.actual;\r
  const nodeState=ensureNodeRuntime(bucket,node);\r
  if(visiting.has(nodeId)){\r
    return {\r
      outputs:nodeState.lastOutputs?.length?nodeState.lastOutputs:[nodeState.lastOutput||0],\r
      middleValues:nodeState.lastMiddleValues||[]\r
    };\r
  }\r
  visiting.add(nodeId);\r
  const inputValues=resolveNodeInputValues(node,modeKey,time,dt,cache,visiting);\r
  let resolved={outputs:[0],middleValues:[]};\r
\r
  if(node.type==='signal_source'){\r
    resolved={outputs:[computeSourceSignal(node,time)],middleValues:[]};\r
  }else if(node.type==='flow_block'){\r
    resolved=isPythonBoundFlowBlock(node)\r
      ?executeBoundFlowBlock(node,nodeState,inputValues,modeKey,time,dt)\r
      :{outputs:[sanitizeSignalValue(inputValues[0]||0)],middleValues:[]};\r
  }else if(node.type==='simulation_block'){\r
    resolved=buildSimulationResult(node,nodeState,inputValues,modeKey,time,dt);\r
  }else if(node.type.startsWith('fault_')){\r
    resolved={outputs:[applyPhysicalFaultNode(node,sanitizeSignalValue(inputValues[0]||0),time,modeKey)],middleValues:[]};\r
  }else if(node.type.startsWith('instrument_')){\r
    resolved={outputs:[sanitizeSignalValue(inputValues[0]||0)],middleValues:[]};\r
  }else{\r
    resolved={outputs:[sanitizeSignalValue(inputValues[0]||0)],middleValues:[]};\r
  }\r
\r
  resolved.outputs=(resolved.outputs||[0]).map(sanitizeSignalValue);\r
  resolved.middleValues=(resolved.middleValues||[]).map(sanitizeSignalValue);\r
  nodeState.lastInputValues=inputValues.slice();\r
  nodeState.lastInput=inputValues[0]||0;\r
  nodeState.lastOutputs=resolved.outputs.slice();\r
  nodeState.lastMiddleValues=resolved.middleValues.slice();\r
  nodeState.lastOutput=nodeState.lastOutputs[0]||0;\r
  visiting.delete(nodeId);\r
  cache.set(nodeId,resolved);\r
  return resolved;\r
}\r
\r
function resolveNodeOutput(nodeId,outputIndex,modeKey,time,dt,cache,visiting){\r
  const node=getNode(nodeId);\r
  const resolved=resolveNodeOutputs(nodeId,modeKey,time,dt,cache,visiting);\r
  if(!node){return 0;}\r
  if(node.type==='simulation_block'||(node.type==='flow_block'&&isPythonBoundFlowBlock(node))){\r
    const mainCount=node.type==='simulation_block'\r
      ?(normalizeSimulationInterfaces(node.props),node.props.outputs.length)\r
      :(node.pythonBinding?.portMapping?.outputs?.length||0);\r
    if(outputIndex<mainCount){\r
      return sanitizeSignalValue(resolved.outputs[outputIndex]??resolved.outputs[0]??0);\r
    }\r
    return sanitizeSignalValue(resolved.middleValues[outputIndex-mainCount]??resolved.outputs[0]??0);\r
  }\r
  return sanitizeSignalValue(resolved.outputs[outputIndex]??resolved.outputs[0]??0);\r
}\r
\r
function resolveNodeInput(node,modeKey,time,dt,cache,visiting){\r
  return resolveNodeInputValues(node,modeKey,time,dt,cache,visiting)[0]||0;\r
}\r
\r
function resolveNodeSignal(nodeId,modeKey,time,dt,cache,visiting){\r
  return resolveNodeOutput(nodeId,0,modeKey,time,dt,cache,visiting);\r
}\r
\r
function recordScopeSamples(time,dt){\r
  const actualCache=new Map();\r
  const referenceCache=new Map();\r
  const actualVisiting=new Set();\r
  const referenceVisiting=new Set();\r
  getScopeNodes().forEach(scopeNode=>{\r
    const actualValue=resolveNodeSignal(scopeNode.id,'actual',time,dt,actualCache,actualVisiting);\r
    const referenceValue=resolveNodeSignal(scopeNode.id,'reference',time,dt,referenceCache,referenceVisiting);\r
    pushLimitedSample(SIM.actual.scopeSamples[scopeNode.id],{t:time,v:actualValue});\r
    pushLimitedSample(SIM.reference.scopeSamples[scopeNode.id],{t:time,v:referenceValue});\r
  });\r
}\r
\r
function runSimulationTick(){\r
  if(!SIM.inited){return false;}\r
  if(SIM.time>=SIM.duration){return true;}\r
  const time=SIM.time;\r
  const dt=SIM.stepSize;\r
  recordScopeSamples(time,dt);\r
  SIM.stepIndex+=1;\r
  SIM.time=Number((SIM.time+dt).toFixed(6));\r
  SIM.hasSamples=true;\r
  S.step=3;\r
  if(document.getElementById('ov-scope').classList.contains('open')){\r
    drawScope();\r
  }\r
  updateUI();\r
  return SIM.time>=SIM.duration;\r
}\r
\r
function startSimulationLoop(){\r
  clearSimLoop();\r
  SIM.timer=setInterval(()=>{\r
    if(!SIM.running||SIM.paused){return;}\r
    const completed=runSimulationTick();\r
    if(completed){\r
      simStop('completed');\r
    }\r
  },getSimulationLoopInterval());\r
}\r
\r
function getScopeSignalName(scopeNode){\r
  const incoming=getIncomingEdgesForNode(scopeNode.id)[0];\r
  if(!incoming){return '未接入信号';}\r
  const sourceNode=getNode(incoming.sourceNodeId);\r
  if(!sourceNode){return '上游信号';}\r
  const outputPort=getNodePorts(sourceNode).outputs[incoming.sourcePortIndex||0];\r
  if(outputPort){\r
    return \`\${sourceNode.props?.name||'上游信号'} · \${outputPort.label}\`;\r
  }\r
  return sourceNode.props?.name||'上游信号';\r
}\r
\r
function updateScopeChrome(){\r
  ensureScopeSelection();\r
  const scopeNode=getNode(SIM.activeScopeId);\r
  const scopeTitle=document.getElementById('scope-title');\r
  const scopeMeta=document.getElementById('scope-meta');\r
  const sc1Lbl=document.getElementById('sc1-lbl');\r
  const sc2Lbl=document.getElementById('sc2-lbl');\r
  if(!scopeNode){\r
    scopeTitle.textContent='示波器 · 波形查看';\r
    scopeMeta.textContent='当前没有示波器模块';\r
    sc1Lbl.textContent='CH1 · 时域波形';\r
    sc2Lbl.textContent='CH2 · 频谱';\r
    return null;\r
  }\r
  const signalName=getScopeSignalName(scopeNode);\r
  scopeTitle.textContent=\`示波器 · \${scopeNode.props.name}\`;\r
  scopeMeta.textContent=SIM.hasSamples\r
    ?\`\${SIM.datasetName} · t=\${SIM.time.toFixed(2)}s / \${SIM.duration.toFixed(2)}s · Δt=\${SIM.stepSize.toFixed(3)}s · \${signalName}\`\r
    :\`\${SIM.datasetName} · 等待仿真数据 · \${signalName}\`;\r
  sc1Lbl.textContent=\`CH1 · \${signalName}\`;\r
  sc2Lbl.textContent=\`CH2 · \${scopeNode.props.name} 频谱\`;\r
  return scopeNode;\r
}\r
\r
function drawScopeGrid(ctx,width,height){\r
  ctx.clearRect(0,0,width,height);\r
  ctx.fillStyle='#f9fbfe';\r
  ctx.fillRect(0,0,width,height);\r
  ctx.strokeStyle='#eaf2fb';\r
  ctx.lineWidth=0.5;\r
  for(let x=0;x<width;x+=40){\r
    ctx.beginPath();\r
    ctx.moveTo(x,0);\r
    ctx.lineTo(x,height);\r
    ctx.stroke();\r
  }\r
  ctx.strokeStyle='#e2eef8';\r
  for(let y=0;y<height;y+=25){\r
    ctx.beginPath();\r
    ctx.moveTo(0,y);\r
    ctx.lineTo(width,y);\r
    ctx.stroke();\r
  }\r
}\r
\r
function drawScopeEmpty(ctx,width,height,message){\r
  drawScopeGrid(ctx,width,height);\r
  ctx.fillStyle='#b3c8da';\r
  ctx.font='12px "Microsoft YaHei UI","Segoe UI",sans-serif';\r
  ctx.textAlign='center';\r
  ctx.fillText(message,width/2,height/2);\r
  ctx.textAlign='left';\r
}\r
\r
function drawWaveSeries(ctx,width,height,series,color,getX,getY){\r
  if(series.length<1){return;}\r
  ctx.strokeStyle=color;\r
  ctx.lineWidth=1.7;\r
  ctx.beginPath();\r
  series.forEach((sample,index)=>{\r
    const x=getX(sample.t,index,series.length);\r
    const y=getY(sample.v);\r
    if(index===0){ctx.moveTo(x,y);}else{ctx.lineTo(x,y);}\r
  });\r
  ctx.stroke();\r
}\r
\r
function buildSpectrum(values,binCount=24){\r
  if(values.length<4){return new Array(binCount).fill(0);}\r
  const bins=[];\r
  for(let k=1;k<=binCount;k++){\r
    let real=0;\r
    let imag=0;\r
    values.forEach((value,index)=>{\r
      const angle=2*Math.PI*k*index/values.length;\r
      real+=value*Math.cos(angle);\r
      imag-=value*Math.sin(angle);\r
    });\r
    bins.push(Math.sqrt(real*real+imag*imag)/values.length);\r
  }\r
  const maxValue=Math.max(...bins,1e-6);\r
  return bins.map(value=>value/maxValue);\r
}\r
\r
function openScope(scopeId=''){\r
  ensureScopeSelection(scopeId||S.selBlk);\r
  if(!SIM.activeScopeId){\r
    toast('当前没有可打开的示波器模块','w');\r
    return;\r
  }\r
  openOv('ov-scope');\r
  setTimeout(drawScope,60);\r
}\r
\r
function focusScopeLatest(){\r
  drawScope();\r
}\r
\r
function togCmp(){\r
  S.cmpMode=!S.cmpMode;\r
  document.getElementById('scmp').classList.toggle('on',S.cmpMode);\r
  document.getElementById('sleg-f').style.display=S.cmpMode?'flex':'none';\r
  drawScope();\r
}\r
\r
function drawScope(){\r
  const scopeNode=updateScopeChrome();\r
  const ch1=document.getElementById('sc1');\r
  const ch2=document.getElementById('sc2');\r
  if(!ch1||!ch2){return;}\r
  ch1.width=ch1.offsetWidth;\r
  ch1.height=ch1.offsetHeight;\r
  ch2.width=ch2.offsetWidth;\r
  ch2.height=ch2.offsetHeight;\r
  const ctx1=ch1.getContext('2d');\r
  const ctx2=ch2.getContext('2d');\r
  if(!scopeNode){\r
    drawScopeEmpty(ctx1,ch1.width,ch1.height,'请先在画布中放置示波器');\r
    drawScopeEmpty(ctx2,ch2.width,ch2.height,'等待频谱数据');\r
    return;\r
  }\r
\r
  const actualSeries=(SIM.actual.scopeSamples[scopeNode.id]||[]).slice(-240);\r
  const referenceSeries=(SIM.reference.scopeSamples[scopeNode.id]||[]).slice(-240);\r
  if(actualSeries.length===0){\r
    drawScopeEmpty(ctx1,ch1.width,ch1.height,'双击示波器后，开始仿真即可看到波形');\r
    drawScopeEmpty(ctx2,ch2.width,ch2.height,'暂无频谱数据');\r
    return;\r
  }\r
\r
  drawScopeGrid(ctx1,ch1.width,ch1.height);\r
  const visibleSeries=S.cmpMode&&referenceSeries.length?referenceSeries.concat(actualSeries):actualSeries;\r
  let minValue=Math.min(...visibleSeries.map(item=>item.v));\r
  let maxValue=Math.max(...visibleSeries.map(item=>item.v));\r
  if(Math.abs(maxValue-minValue)<1e-6){\r
    maxValue+=1;\r
    minValue-=1;\r
  }else{\r
    const padding=(maxValue-minValue)*0.18;\r
    maxValue+=padding;\r
    minValue-=padding;\r
  }\r
  const startTime=actualSeries[0].t;\r
  const endTime=actualSeries[actualSeries.length-1].t||startTime+SIM.stepSize;\r
  const span=Math.max(endTime-startTime,SIM.stepSize);\r
  const getX=time=>18+((time-startTime)/span)*(ch1.width-36);\r
  const getY=value=>12+(maxValue-value)/(maxValue-minValue)*(ch1.height-24);\r
  const zeroY=getY(0);\r
  if(zeroY>=8&&zeroY<=ch1.height-8){\r
    ctx1.strokeStyle='#c2d6ea';\r
    ctx1.lineWidth=0.8;\r
    ctx1.beginPath();\r
    ctx1.moveTo(0,zeroY);\r
    ctx1.lineTo(ch1.width,zeroY);\r
    ctx1.stroke();\r
  }\r
  if(S.cmpMode&&referenceSeries.length){\r
    drawWaveSeries(ctx1,ch1.width,ch1.height,referenceSeries,'#1d6fbf',getX,getY);\r
    drawWaveSeries(ctx1,ch1.width,ch1.height,actualSeries,'#dc2626',getX,getY);\r
  }else{\r
    drawWaveSeries(ctx1,ch1.width,ch1.height,actualSeries,'#1d6fbf',getX,getY);\r
  }\r
  ctx1.fillStyle='#94b4cc';\r
  ctx1.font='8px JetBrains Mono,monospace';\r
  ctx1.fillText(\`\${startTime.toFixed(1)}s\`,4,ch1.height-4);\r
  ctx1.fillText(\`\${endTime.toFixed(1)}s\`,ch1.width-32,ch1.height-4);\r
\r
  drawScopeGrid(ctx2,ch2.width,ch2.height);\r
  const actualSpectrum=buildSpectrum(actualSeries.map(item=>item.v));\r
  const referenceSpectrum=buildSpectrum(referenceSeries.map(item=>item.v));\r
  const binWidth=ch2.width/actualSpectrum.length;\r
  actualSpectrum.forEach((value,index)=>{\r
    const x=index*binWidth;\r
    const height=value*(ch2.height-18);\r
    const gradient=ctx2.createLinearGradient(x,ch2.height-height,x,ch2.height);\r
    gradient.addColorStop(0,S.cmpMode?'rgba(220,38,38,0.85)':'rgba(29,111,191,0.88)');\r
    gradient.addColorStop(1,'rgba(74,158,255,0.08)');\r
    ctx2.fillStyle=gradient;\r
    ctx2.fillRect(x+1,ch2.height-height,Math.max(binWidth-2,2),height);\r
    if(S.cmpMode&&referenceSpectrum[index]!=null){\r
      const refHeight=referenceSpectrum[index]*(ch2.height-18);\r
      ctx2.fillStyle='rgba(29,111,191,0.24)';\r
      ctx2.fillRect(x+1,ch2.height-refHeight,Math.max(binWidth-2,2),refHeight);\r
    }\r
  });\r
  ctx2.fillStyle='#94b4cc';\r
  ctx2.font='8px JetBrains Mono,monospace';\r
  ctx2.fillText('0Hz',3,ch2.height-4);\r
  ctx2.fillText(\`\${(0.5/Math.max(SIM.stepSize,0.001)).toFixed(1)}Hz\`,Math.max(ch2.width-42,3),ch2.height-4);\r
}\r
\r
// ─── 仿真控制栏 ───\r
function simInit(silent=false){\r
  if(!validateSimulationTopology()){return;}\r
  const autoSaved=!S.systemSaved;\r
  if(autoSaved){\r
    S.systemSaved=true;\r
    if(S.step<2){S.step=2;}\r
  }\r
  SIM.datasetName=document.getElementById('sim-name').value.trim()||'test';\r
  SIM.duration=Math.max(parseScalar(document.getElementById('sim-dur').value,10),0.1);\r
  SIM.stepSize=Math.max(parseScalar(document.getElementById('sim-step').value,0.1),0.001);\r
  SIM.realtime=document.getElementById('sim-rt').checked;\r
  SIM.inited=true;\r
  SIM.running=false;\r
  SIM.paused=false;\r
  resetSimulationRuntime();\r
  updateSimbarEnabled();\r
  updateUI();\r
  if(document.getElementById('ov-scope').classList.contains('open')){\r
    drawScope();\r
  }\r
  if(!silent){\r
    if(autoSaved){\r
      toast(\`系统模型已自动保存，并完成仿真初始化：\${SIM.datasetName} · 时长 \${SIM.duration}s · 步长 \${SIM.stepSize}s\`,'s');\r
      return;\r
    }\r
    toast(\`仿真初始化完成：\${SIM.datasetName} · 时长 \${SIM.duration}s · 步长 \${SIM.stepSize}s\`,'s');\r
  }\r
}\r
\r
function simRun(){\r
  if(!SIM.inited){\r
    simInit();\r
    if(!SIM.inited){return;}\r
  }\r
  if(SIM.time>=SIM.duration){\r
    simInit(true);\r
  }\r
  SIM.realtime=document.getElementById('sim-rt').checked;\r
  SIM.running=true;\r
  SIM.paused=false;\r
  startSimulationLoop();\r
  updateSimbarEnabled();\r
  updateUI();\r
  toast('仿真开始运行','s');\r
}\r
\r
function simStep(){\r
  if(!SIM.inited){\r
    simInit();\r
    if(!SIM.inited){return;}\r
  }\r
  if(SIM.time>=SIM.duration){\r
    toast('当前仿真已经结束，请重新初始化后再步进','w');\r
    return;\r
  }\r
  const completed=runSimulationTick();\r
  updateSimbarEnabled();\r
  if(completed){\r
    simStop('completed');\r
  }else{\r
    toast(\`步进完成 · t = \${SIM.time.toFixed(2)}s\`,'s');\r
  }\r
}\r
\r
function simPause(){\r
  if(!SIM.running){return;}\r
  SIM.paused=!SIM.paused;\r
  if(SIM.paused){\r
    clearSimLoop();\r
    toast('仿真已暂停','w');\r
  }else{\r
    startSimulationLoop();\r
    toast('仿真继续运行','s');\r
  }\r
  updateSimbarEnabled();\r
  updateUI();\r
}\r
\r
function simStop(mode='manual'){\r
  clearSimLoop();\r
  const hasData=SIM.hasSamples;\r
  SIM.running=false;\r
  SIM.paused=false;\r
  S.simDone=hasData;\r
  if(hasData){\r
    S.step=3;\r
  }\r
  updateSimbarEnabled();\r
  updateUI();\r
  if(mode==='completed'){\r
    toast('仿真已完成，结果可保存','s');\r
  }else{\r
    toast(hasData?'仿真已终止，结果可保存':'仿真已终止','s');\r
  }\r
}\r
\r
function onRtToggle(el){\r
  SIM.realtime=el.checked;\r
  if(SIM.running&&!SIM.paused){\r
    startSimulationLoop();\r
  }\r
  toast(el.checked?'实时模式已开启':'实时模式已关闭', el.checked?'s':'w');\r
}\r
function ensurePythonBindingRuntimeStyles(){\r
  if(document.getElementById('python-binding-runtime-style')){return;}\r
  const style=document.createElement('style');\r
  style.id='python-binding-runtime-style';\r
  style.textContent=\`\r
    .blk.python-bound{border-color:rgba(49,114,222,0.92);box-shadow:0 16px 28px rgba(40,102,196,0.18);}\r
    .node-card__python-chip{position:absolute;left:10px;top:8px;z-index:2;display:inline-flex;align-items:center;justify-content:center;min-width:22px;height:22px;padding:0 6px;border-radius:999px;background:linear-gradient(135deg,#387dff 0%,#63a7ff 100%);color:#fff;font:700 10px/1 "JetBrains Mono","Consolas",monospace;box-shadow:0 8px 18px rgba(56,125,255,0.22);}\r
    .node-port.is-connected .node-port__inner{background:currentColor;box-shadow:0 0 0 2px rgba(255,255,255,0.9),0 0 0 4px rgba(56,125,255,0.18);}\r
    .node-port__label{position:absolute;font:600 10px/1.15 "JetBrains Mono","Consolas",monospace;color:#365a84;white-space:nowrap;pointer-events:none;}\r
    .node-port--input .node-port__label{right:100%;margin-right:9px;top:50%;transform:translateY(-50%);text-align:right;}\r
    .node-port--output .node-port__label{left:100%;margin-left:9px;top:50%;transform:translateY(-50%);}\r
    .node-port--top .node-port__label{left:50%;bottom:100%;margin-bottom:8px;transform:translateX(-50%);}\r
    .pgroup--compact{padding:10px 12px;gap:8px;}\r
  \`;\r
  document.head.appendChild(style);\r
}\r
\r
if(!window.__GZ_PYTHON_BINDING_EVENTS__){\r
  window.__GZ_PYTHON_BINDING_EVENTS__=true;\r
  const runtimeListeners=getRuntimeListenerStore();\r
  runtimeListeners.pythonBindingConfirm=event=>{\r
    if(event?.detail?.nodeId&&event?.detail?.binding){\r
      applyPythonBindingToNode(event.detail.nodeId,event.detail.binding);\r
    }\r
  };\r
  runtimeListeners.pythonBindingUnbind=event=>{\r
    unbindPythonBinding(event?.detail?.nodeId||'');\r
  };\r
  window.addEventListener('gz:python-binding-confirm',runtimeListeners.pythonBindingConfirm);\r
  window.addEventListener('gz:python-binding-unbind',runtimeListeners.pythonBindingUnbind);\r
}\r
\r
function buildPythonBindingPortRows(items,kind){\r
  if(!items.length){\r
    return '<div class="props-help">?????????</div>';\r
  }\r
  return items.map(item=>{\r
    const status=kind==='inputs'\r
      ?(item.connected?'<span class="pv pv-ok">???</span>':'<span class="pv pv-fault">???</span>')\r
      :'<span class="pv pv-ok">已暴露</span>';\r
    const title=escapeHtml(item.displayName||item.varName||'-');\r
    const type=escapeHtml(item.type||'any');\r
    const note=item.comment?\`<div class="props-help">\${escapeHtml(item.comment)}</div>\`:'';\r
    const defaultRow=kind==='inputs'&&item.default!==null&&item.default!==undefined&&item.default!==''\r
      ?\`<div class="prow"><span class="pk">???</span><span class="pv">\${escapeHtml(item.default)}<</span></div>\`\r
      :'';\r
    return \`\r
      <div class="pgroup pgroup--compact">\r
        <div class="prow"><span class="pk">\${title}<</span>\${status}</div>\r
        <div class="prow"><span class="pk">类型<</span><span class="pv">\${type}<</span></div>\r
        \${defaultRow}\r
        \${note}\r
      </div>\`;\r
  }).join('');\r
}\r
\r
function buildFlowBlockFields(node){\r
  const binding=ensureFlowNodePythonBinding(node);\r
  const bound=binding.bound;\r
  const bindingSummary=bound\r
    ?\`\r
      <div class="pgroup">\r
        <div class="pglbl">Python 绑定</div>\r
        <div class="prow"><span class="pk">文件<</span><span class="pv">\${escapeHtml(binding.fileName||'-')}<</span></div>\r
        <div class="prow"><span class="pk">模块<</span><span class="pv">\${escapeHtml(binding.moduleName||'-')}<</span></div>\r
        <div class="prow"><span class="pk">鍏ュ彛鍑芥暟<</span><span class="pv">\${escapeHtml(binding.entryFunction||'process')}<</span></div>\r
        <div class="prow"><span class="pk">????<</span><span class="pv">\${escapeHtml(getPythonBindingSummary(node))}<</span></div>\r
        \${binding.description?\`<div class="props-help">\${escapeHtml(binding.description)}</div>\`:''}\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">输入端口</div>\r
        \${buildPythonBindingPortRows(binding.portMapping.inputs,'inputs')}\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">输出端口</div>\r
        \${buildPythonBindingPortRows(binding.portMapping.outputs,'outputs')}\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">中间变量</div>\r
        \${buildPythonBindingPortRows(binding.portMapping.middleVars,'middleVars')}\r
      </div>\`\r
    :\`\r
      <div class="pgroup">\r
        <div class="pglbl">Python 绑定</div>\r
        <div class="props-help">当前流程块尚未绑定 Python 文件。绑定后会根据函数输入、输出和 @observable 中间变量自动生成端口。</div>\r
      </div>\`;\r
\r
  const legacyFields=bound?\`\r
      <div style="display:none">\r
        <input id="prop-inputName" value="\${escapeHtml(node.props.inputName)}">\r
        <select id="prop-inputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.inputFormat)}</select>\r
        <input id="prop-outputName" value="\${escapeHtml(node.props.outputName)}">\r
        <select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat)}</select>\r
      </div>\`:\`\r
      <div class="props-field"><label>输入名称</label><input id="prop-inputName" value="\${escapeHtml(node.props.inputName)}"></div>\r
      <div class="props-row">\r
        <div class="props-field"><label>输入鏍煎紡</label><select id="prop-inputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.inputFormat)}</select></div>\r
        <div class="props-field"><label>输出鏍煎紡</label><select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat)}</select></div>\r
      </div>\r
      <div class="props-field"><label>输出名称</label><input id="prop-outputName" value="\${escapeHtml(node.props.outputName)}"></div>\r
      <div class="props-help">未绑定Python 时，流程块按单输入单输出的直通模块工作。</div>\`;\r
\r
  return \`\r
    <div class="pgroup">\r
      <div class="pglbl">流程块设置</div>\r
      <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
      \${legacyFields}\r
    </div>\r
    \${bindingSummary}\`;\r
}\r
\r
function renderPropertyPanel(node){\r
  const pe=document.getElementById('pe');\r
  const pd=document.getElementById('pd');\r
  if(!node){\r
    pe.style.display='flex';\r
    pd.style.display='none';\r
    pd.innerHTML='';\r
    return;\r
  }\r
\r
  if(node.sourceNodeId&&node.targetNodeId&&!node.type){\r
    const sourceNode=getNode(node.sourceNodeId);\r
    const targetNode=getNode(node.targetNodeId);\r
    const edgeLabel=node.lineType==='can'?'CAN 总线':'普通连接线';\r
    const sourceName=sourceNode?.props?.name||node.sourceNodeId;\r
    const targetName=targetNode?.props?.name||node.targetNodeId;\r
    const sourcePortName=node.sourcePort?.displayName||node.sourcePort?.varName||\`#\${(node.sourcePortIndex||0)+1}\`;\r
    const targetPortName=node.targetPort?.displayName||node.targetPort?.varName||\`#\${(node.targetPortIndex||0)+1}\`;\r
    const protocolFault=node.injectedFault?.layer==='protocol'?node.injectedFault:null;\r
    pe.style.display='none';\r
    pd.style.display='block';\r
    pd.innerHTML=\`\r
      <div class="pgroup">\r
        <div class="props-title">\${edgeLabel}</div>\r
        <div class="props-sub">画布连线 \${node.id.replace('edge-','#')}</div>\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">连接信息</div>\r
        <div class="prow"><span class="pk">连线类型<</span><span class="pv">\${edgeLabel}<</span></div>\r
        <div class="prow"><span class="pk">源节点<</span><span class="pv">\${escapeHtml(sourceName)}<</span></div>\r
        <div class="prow"><span class="pk">源端口<</span><span class="pv">\${escapeHtml(sourcePortName)}<</span></div>\r
        <div class="prow"><span class="pk">目标节点<</span><span class="pv">\${escapeHtml(targetName)}<</span></div>\r
        <div class="prow"><span class="pk">目标端口<</span><span class="pv">\${escapeHtml(targetPortName)}<</span></div>\r
        <div class="prow"><span class="pk">协议状态<</span><span class="pv \${protocolFault?'pv-fault':'pv-ok'}">\${protocolFault?'已注入协议故障':'正常'}<</span></div>\r
        \${protocolFault?\`<div class="prow"><span class="pk">协议故障<</span><span class="pv pv-fault">\${escapeHtml(protocolFault.name)}<</span></div>\`:''}\r
      </div>\r
      <div class="props-form">\r
        <div class="pgroup">\r
          <div class="props-help">\${isProtocolInjectableEdge(node)?'当前连线为 CAN 总线，可在此导入协议层故障；普通连接线暂不支持协议注入。':'当前选中的是一条独立连线，可直接删除，不影响其他模块。'}</div>\r
        </div>\r
        <div class="props-actions">\r
          \${isProtocolInjectableEdge(node)?\`<button class="props-secondary props-protocol-action" onclick="openProtocolFaultImport()">\${protocolFault?'更换协议故障':'导入协议故障'}</button>\`:''}\r
          <button class="props-danger" onclick="deleteSelectedEdge()">删除连线</button>\r
        </div>\r
      </div>\`;\r
    return;\r
  }\r
\r
  const meta=COMPONENT_LIBRARY[node.type];\r
  const fault=S.faultedBlks.includes(node.id)||Boolean(node.injectedFault);\r
  const pythonBound=isPythonBoundFlowBlock(node);\r
  const simulationPackageRows=pythonBound\r
    ?buildSimulationBlockPackageRows(node)\r
    :'';\r
  let fields='';\r
\r
  if(node.type==='signal_source'){\r
    fields=\`\r
      <div class="pgroup">\r
        <div class="pglbl">信号瀹氫箟</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>信号类型</label><select id="prop-waveType">\${buildSelectOptions(['正弦','阶跃','常值'],node.props.waveType)}</select></div>\r
          <div class="props-field"><label>输出鏍煎紡</label><select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat)}</select></div>\r
        </div>\r
        <div class="props-row">\r
          <div class="props-field"><label>幅值</label><input id="prop-amplitude" value="\${escapeHtml(node.props.amplitude)}"></div>\r
          <div class="props-field"><label>频率 / 周期</label><input id="prop-frequency" value="\${escapeHtml(node.props.frequency)}"></div>\r
        </div>\r
        <div class="props-help">信号源用于提供系统建模阶段的输入激励，可在后续继续扩展波形编辑。</div>\r
      </div>\`;\r
  }else if(node.type==='flow_block'){\r
    fields=buildFlowBlockFields(node);\r
  }else if(node.type==='simulation_block'){\r
    fields=buildSimulationBlockFields(node);\r
  }else if(node.type.startsWith('fault_')){\r
    fields=\`\r
      <div class="pgroup">\r
        <div class="pglbl">故障参数</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-field"><label>故障类型</label><input id="prop-faultType" value="\${escapeHtml(node.props.faultType)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>作用层级</label><select id="prop-layer">\${buildSelectOptions(['物理层','电气层','协议层'],node.props.layer)}</select></div>\r
          <div class="props-field"><label>触发方式</label><select id="prop-trigger">\${buildSelectOptions(['持续','渐变','瞬态','间歇'],node.props.trigger)}</select></div>\r
        </div>\r
      </div>\`;\r
  }else if(node.type.startsWith('instrument_')){\r
    fields=\`\r
      <div class="pgroup">\r
        <div class="pglbl">观测配置</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-field"><label>观测类型</label><input id="prop-instrumentType" value="\${escapeHtml(node.props.instrumentType)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>采样率</label><input id="prop-sampleRate" value="\${escapeHtml(node.props.sampleRate)}"></div>\r
          <div class="props-field"><label>观测信号</label><input id="prop-signal" value="\${escapeHtml(node.props.signal)}"></div>\r
        </div>\r
      </div>\`;\r
  }else{\r
    fields=\`\r
      <div class="pgroup">\r
        <div class="pglbl">杩炴帴瀹氫箟</div>\r
        <div class="props-field"><label>缁勪欢名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-field"><label>杩炴帴类型</label><input id="prop-linkType" value="\${escapeHtml(node.props.linkType)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>璧风偣端口</label><input id="prop-sourcePort" value="\${escapeHtml(node.props.sourcePort)}"></div>\r
          <div class="props-field"><label>缁堢偣端口</label><input id="prop-targetPort" value="\${escapeHtml(node.props.targetPort)}"></div>\r
        </div>\r
      </div>\`;\r
  }\r
\r
  pe.style.display='none';\r
  pd.style.display='block';\r
  const faultSummary=node.injectedFault\r
    ?\`<div class="prow"><span class="pk">电气故障<</span><span class="pv pv-fault">\${escapeHtml(node.injectedFault.name)}<</span></div>\`\r
    :'';\r
\r
  pd.innerHTML=\`\r
    <div class="pgroup">\r
      <div class="props-title">\${escapeHtml(node.props.name)}</div>\r
      <div class="props-sub">\${pythonBound?(escapeHtml(node.pythonBinding?.fileName||'')+' · '):''}\${meta.label} · 节点 \${node.id.replace('node-','#')}</div>\r
    </div>\r
    <div class="pgroup">\r
      <div class="pglbl">当前状态</div>\r
      <div class="prow"><span class="pk">鑺傜偣绫诲埆<</span><span class="pv">\${meta.label}<</span></div>\r
      <div class="prow"><span class="pk">状态<</span><span class="pv \${fault?'pv-fault':'pv-ok'}">\${fault?'已绑定故障':'正常'}<</span></div>\r
      \${pythonBound?\`<div class="prow"><span class="pk">Python<</span><span class="pv pv-ok">\${escapeHtml(getPythonBindingSummary(node))}<</span></div>\`:''}\r
      \${simulationPackageRows}\r
      \${faultSummary}\r
    </div>\r
    <div class="props-form">\r
      \${fields}\r
      <div class="props-actions">\r
        \${node.type==='instrument_scope'?\`<button class="props-secondary" onclick="openScope('\${node.id}')">查看波形</button>\`:''}\r
        \${node.type==='flow_block'?\`<button class="props-secondary" onclick="openPythonBindingDialog('\${node.id}')">\${pythonBound?'重新绑定 Python':'绑定 Python 文件'}</button>\`:''}\r
        \${node.type==='flow_block'&&pythonBound?\`<button class="props-secondary" onclick="unbindPythonBinding('\${node.id}')">解除 Python 绑定</button>\`:''}\r
        \${isElectricalInjectableType(node.type)?\`<button class="props-secondary props-fault-action" onclick="openElectricalFaultImport()">\${node.injectedFault?'更换故障':'导入故障'}</button>\`:''}\r
        <button class="props-save" onclick="saveSelectedNode()">保存设置</button>\r
        <button class="props-danger" onclick="deleteSelectedNode()">删除模块</button>\r
      </div>\r
    </div>\`;\r
}\r
\r
ensurePythonBindingRuntimeStyles();\r
syncAllPythonInputConnectionState();\r
\r
Object.assign(window,{\r
  __GZ_STATE__:S,\r
  createNode,\r
  selectNode,\r
  openPythonBindingDialog,\r
  unbindPythonBinding,\r
  doImportSys,\r
  doSaveSys,\r
  doImportFault,\r
  simInit,\r
  simRun,\r
  simStep,\r
  simPause,\r
  simStop\r
});\r
\r
\r
updateUI();\r
\r
\r
// ─── 弹窗控制 ───\r
function openOv(id){document.getElementById(id).classList.add('open');if(id==='ov-scope')setTimeout(drawScope,50);if(id==='ov-cfg')setTimeout(upPrev,50);}\r
function closeOv(id){document.getElementById(id).classList.remove('open');}\r
const __runtimeOverlayListeners=getRuntimeListenerStore();\r
if(__runtimeOverlayListeners.overlayEscapeKeydown){\r
  document.removeEventListener('keydown',__runtimeOverlayListeners.overlayEscapeKeydown);\r
}\r
__runtimeOverlayListeners.overlayEscapeKeydown=e=>{if(e.key==='Escape')document.querySelectorAll('.overlay.open').forEach(o=>o.classList.remove('open'));};\r
document.addEventListener('keydown',__runtimeOverlayListeners.overlayEscapeKeydown);\r
\r
// ─── Toast ───\r
let toastT;\r
function toast(msg,type='w'){\r
  const el=document.getElementById('toast');\r
  const ti=document.getElementById('ti');\r
  const tm=document.getElementById('tm');\r
  el.className='toast '+(type==='s'?'toast-s':'toast-w')+' on';\r
  ti.className=type==='s'?'ti-s':'ti-w';\r
  ti.textContent=type==='s'?'成功':'⚡';\r
  tm.textContent=msg;\r
  clearTimeout(toastT);\r
  toastT=setTimeout(()=>el.classList.remove('on'),3500);\r
}\r
// --- Final runtime overrides: Python binding belongs to simulation_block ---\r
const __legacyCreateNode = createNode;\r
const __legacyGetNodePorts = getNodePorts;\r
const __legacyRenderModelNodes = renderModelNodes;\r
const __legacyRenderPropertyPanel = renderPropertyPanel;\r
const __legacySaveSelectedNode = saveSelectedNode;\r
const __legacyResolveNodeOutputs = resolveNodeOutputs;\r
const __legacyResolveNodeOutput = resolveNodeOutput;\r
const __legacyBuildSimulationBlockFields = buildSimulationBlockFields;\r
const __legacySyncSimulationInterfaceCounts = syncSimulationInterfaceCounts;\r
\r
const SIGNAL_ADAPTER_FORMATS=['标量','向量','矩阵','布尔','事件'];\r
const SIGNAL_UTILITY_INPUT_LIMITS=[2,6];\r
\r
COMPONENT_LIBRARY.flow_block={\r
  ...COMPONENT_LIBRARY.flow_block,\r
  label:'信号适配块',\r
  badge:'适配',\r
  defaults:{\r
    name:'信号适配块',\r
    inputName:'输入信号',\r
    inputFormat:'标量',\r
    outputName:'输出信号',\r
    outputFormat:'标量'\r
  }\r
};\r
COMPONENT_LIBRARY.gain_block={\r
  label:'增益块',\r
  badge:'增益',\r
  className:'b-gain',\r
  width:156,\r
  height:84,\r
  defaults:{name:'增益块',gain:'1.0',inputFormat:'标量',outputFormat:'标量'}\r
};\r
COMPONENT_LIBRARY.sum_block={\r
  label:'求和块',\r
  badge:'求和',\r
  className:'b-sum',\r
  width:164,\r
  height:88,\r
  defaults:{name:'求和块',inputCount:2,signs:['+','+'],outputFormat:'标量'}\r
};\r
COMPONENT_LIBRARY.mux_block={\r
  label:'Mux 块',\r
  badge:'Mux',\r
  className:'b-mux',\r
  width:164,\r
  height:88,\r
  defaults:{name:'Mux 块',inputCount:2,outputFormat:'向量'}\r
};\r
\r
function clampSignalUtilityInputCount(value,fallback=2){\r
  const numeric=Math.round(Number(value));\r
  if(Number.isFinite(numeric)){\r
    return clamp(numeric,SIGNAL_UTILITY_INPUT_LIMITS[0],SIGNAL_UTILITY_INPUT_LIMITS[1]);\r
  }\r
  return clamp(fallback,SIGNAL_UTILITY_INPUT_LIMITS[0],SIGNAL_UTILITY_INPUT_LIMITS[1]);\r
}\r
\r
function normalizeSignalSigns(signs,count){\r
  const list=Array.isArray(signs)\r
    ?signs\r
    :String(signs||'')\r
      .split(/[,\\s]+/)\r
      .map(item=>item.trim())\r
      .filter(Boolean);\r
  return Array.from({length:count},(_,index)=>list[index]==='-'?'-':'+');\r
}\r
\r
function normalizeSignalUtilityNode(node){\r
  if(!node?.props){return;}\r
  if(node.type==='gain_block'){\r
    node.props.gain=String(node.props.gain??'1.0');\r
    node.props.inputFormat=SIGNAL_ADAPTER_FORMATS.includes(node.props.inputFormat)?node.props.inputFormat:'标量';\r
    node.props.outputFormat=SIGNAL_ADAPTER_FORMATS.includes(node.props.outputFormat)?node.props.outputFormat:'标量';\r
    return;\r
  }\r
  if(node.type==='sum_block'){\r
    const inputCount=clampSignalUtilityInputCount(node.props.inputCount,2);\r
    node.props.inputCount=inputCount;\r
    node.props.signs=normalizeSignalSigns(node.props.signs,inputCount);\r
    node.props.outputFormat=SIGNAL_ADAPTER_FORMATS.includes(node.props.outputFormat)?node.props.outputFormat:'标量';\r
    return;\r
  }\r
  if(node.type==='mux_block'){\r
    node.props.inputCount=clampSignalUtilityInputCount(node.props.inputCount,2);\r
    node.props.outputFormat=SIGNAL_ADAPTER_FORMATS.includes(node.props.outputFormat)?node.props.outputFormat:'向量';\r
  }\r
}\r
\r
function buildSignalUtilityFields(node){\r
  normalizeSignalUtilityNode(node);\r
  if(node.type==='gain_block'){\r
    return \`\r
      <div class="pgroup">\r
        <div class="pglbl">增益配置</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>增益系数</label><input id="prop-gain" value="\${escapeHtml(node.props.gain||'1.0')}"></div>\r
          <div class="props-field"><label>输入类型</label><select id="prop-inputFormat">\${buildSelectOptions(SIGNAL_ADAPTER_FORMATS,node.props.inputFormat||'标量')}</select></div>\r
        </div>\r
        <div class="props-field"><label>输出类型</label><select id="prop-outputFormat">\${buildSelectOptions(SIGNAL_ADAPTER_FORMATS,node.props.outputFormat||'标量')}</select></div>\r
        <div class="props-help">增益块对单路输入做比例缩放，用于显式表达放大、衰减和标定换算。</div>\r
      </div>\`;\r
  }\r
  if(node.type==='sum_block'){\r
    return \`\r
      <div class="pgroup">\r
        <div class="pglbl">求和配置</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>输入数量</label><input id="prop-inputCount" type="number" min="\${SIGNAL_UTILITY_INPUT_LIMITS[0]}" max="\${SIGNAL_UTILITY_INPUT_LIMITS[1]}" value="\${escapeHtml(String(node.props.inputCount||2))}"></div>\r
          <div class="props-field"><label>符号序列</label><input id="prop-signs" value="\${escapeHtml((node.props.signs||[]).join(', '))}" placeholder="+, +, -"></div>\r
        </div>\r
        <div class="props-field"><label>输出类型</label><select id="prop-outputFormat">\${buildSelectOptions(SIGNAL_ADAPTER_FORMATS,node.props.outputFormat||'标量')}</select></div>\r
        <div class="props-help">求和块显式汇入多路输入，避免把多根线直接插入同一个输入端口。</div>\r
      </div>\`;\r
  }\r
  if(node.type==='mux_block'){\r
    return \`\r
      <div class="pgroup">\r
        <div class="pglbl">Mux 配置</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>输入数量</label><input id="prop-inputCount" type="number" min="\${SIGNAL_UTILITY_INPUT_LIMITS[0]}" max="\${SIGNAL_UTILITY_INPUT_LIMITS[1]}" value="\${escapeHtml(String(node.props.inputCount||2))}"></div>\r
          <div class="props-field"><label>输出类型</label><select id="prop-outputFormat">\${buildSelectOptions(SIGNAL_ADAPTER_FORMATS,node.props.outputFormat||'向量')}</select></div>\r
        </div>\r
        <div class="props-help">Mux 块把多路输入打包为单路向量输出，用于向 Python 仿真块传递组合信号。</div>\r
      </div>\`;\r
  }\r
  return '';\r
}\r
\r
getPythonBindingSummary = function(node){\r
  const binding = ensureFlowNodePythonBinding(node);\r
  return \`\${binding.portMapping.inputs.length} 输入 / \${binding.portMapping.outputs.length} 输出 / \${binding.portMapping.middleVars.length} 中间变量\`;\r
};\r
\r
buildPythonPortTooltip = function(meta,kind='input'){\r
  if(!meta){return '';}\r
  const parts=[meta.displayName||meta.varName||'端口'];\r
  if(meta.type){parts.push(\`类型: \${meta.type}\`);}\r
  if(kind==='input'&&meta.default!==null&&meta.default!==undefined&&meta.default!==''){\r
    parts.push(\`默认值: \${meta.default}\`);\r
  }\r
  if(meta.comment){parts.push(meta.comment);}\r
  return parts.join('\\n');\r
};\r
\r
buildPythonBindingPortRows = function(items,kind){\r
  if(!items.length){\r
    return '<div class="props-help">当前没有可用端口。</div>';\r
  }\r
  return items.map(item=>{\r
    const status=kind==='inputs'\r
      ?(item.connected?'<span class="pv pv-ok">已连接<</span>':'<span class="pv pv-fault">未连接<</span>')\r
      :'<span class="pv pv-ok">已暴露<</span>';\r
    const title=escapeHtml(item.displayName||item.varName||'-');\r
    const type=escapeHtml(item.type||'any');\r
    const note=item.comment?\`<div class="props-help">\${escapeHtml(item.comment)}</div>\`:'';\r
    const defaultRow=kind==='inputs'&&item.default!==null&&item.default!==undefined&&item.default!==''\r
      ?\`<div class="prow"><span class="pk">默认值<</span><span class="pv">\${escapeHtml(item.default)}<</span></div>\`\r
      :'';\r
    return \`\r
      <div class="pgroup pgroup--compact">\r
        <div class="prow"><span class="pk">\${title}<</span>\${status}</div>\r
        <div class="prow"><span class="pk">类型<</span><span class="pv">\${type}<</span></div>\r
        \${defaultRow}\r
        \${note}\r
      </div>\`;\r
  }).join('');\r
};\r
\r
openPythonBindingDialog = function(nodeId=''){\r
  const target=getNode(nodeId||S.selBlk);\r
  if(!target||target.type!=='simulation_block'){\r
    toast('请先选中一个仿真块以绑定 Python 文件','w');\r
    return;\r
  }\r
  const binding=ensureFlowNodePythonBinding(target);\r
  window.dispatchEvent(new CustomEvent('gz:open-python-binding',{\r
    detail:{\r
      targetNode:{id:target.id,label:target.props.name,props:cloneDefaults(target.props)},\r
      parsedInterface:binding.bound?cloneDefaults(binding.parsedInterface):null,\r
      boundSnapshot:binding.bound?cloneDefaults(binding):null\r
    }\r
  }));\r
};\r
\r
applyPythonBindingToNode = function(nodeId,binding){\r
  const node=getNode(nodeId);\r
  if(!node||node.type!=='simulation_block'){return;}\r
  node.pythonBinding=cloneDefaults(binding);\r
  applyNodeGeometry(node);\r
  const removedEdges=pruneInvalidEdgesForNode(node);\r
  syncAllPythonInputConnectionState();\r
  markTopologyDirty('system');\r
  renderModelNodes();\r
  selectNode(node.id);\r
  syncConfigTargets(node.id);\r
  updateUI();\r
  toast(\`已为 \${node.props.name} 绑定 \${binding.fileName}\${removedEdges?\`，并移除 \${removedEdges} 条无效连线\`:''}\`,'s');\r
};\r
\r
unbindPythonBinding = function(nodeId=''){\r
  const node=getNode(nodeId||S.selBlk);\r
  if(!node||node.type!=='simulation_block'){return;}\r
  const binding=ensureFlowNodePythonBinding(node);\r
  if(!binding.bound){\r
    toast('当前仿真块尚未绑定 Python 文件','w');\r
    return;\r
  }\r
  node.pythonBinding=createDefaultPythonBinding();\r
  applyNodeGeometry(node);\r
  const removedEdges=pruneInvalidEdgesForNode(node);\r
  syncAllPythonInputConnectionState();\r
  markTopologyDirty('system');\r
  renderModelNodes();\r
  selectNode(node.id);\r
  syncConfigTargets(node.id);\r
  updateUI();\r
  toast(\`已解除 \${node.props.name} 的 Python 绑定\${removedEdges?\`，并移除 \${removedEdges} 条无效连线\`:''}\`,'s');\r
};\r
\r
getNodePorts = function(node){\r
  if(!node){return {inputs:[],outputs:[]};}\r
  if(node.type==='simulation_block'&&isPythonBoundFlowBlock(node)){\r
    const binding=ensureFlowNodePythonBinding(node);\r
    return {\r
      inputs:binding.portMapping.inputs.map((item,index)=>(\r
        {key:\`input-\${index}\`,label:item.displayName||item.varName||\`input_\${index}\`,kind:'input',side:'left',meta:item}\r
      )),\r
      outputs:[\r
        ...binding.portMapping.outputs.map((item,index)=>(\r
          {key:\`output-\${index}\`,label:item.displayName||item.varName||\`output_\${index}\`,kind:'output',side:'right',meta:item}\r
        )),\r
        ...binding.portMapping.middleVars.map((item,index)=>(\r
          {key:\`middle-\${index}\`,label:item.displayName||item.varName||\`middle_\${index}\`,kind:'middle',side:'top',meta:item}\r
        ))\r
      ]\r
    };\r
  }\r
  if(node.type==='flow_block'){\r
    return {\r
      inputs:[{key:'input',label:node.props.inputName||'输入',kind:'input',side:'left'}],\r
      outputs:[{key:'output',label:node.props.outputName||'输出',kind:'output',side:'right'}]\r
    };\r
  }\r
  return __legacyGetNodePorts(node);\r
};\r
\r
createNode = function(type,rawX,rawY){\r
  const beforeLength=S.modelNodes.length;\r
  __legacyCreateNode(type,rawX,rawY);\r
  if(S.modelNodes.length!==beforeLength+1){return;}\r
  const node=S.modelNodes[S.modelNodes.length-1];\r
  if(!node){return;}\r
  if(type==='flow_block'){\r
    node.pythonBinding=null;\r
  }\r
  if(type==='simulation_block'&&!node.pythonBinding){\r
    node.pythonBinding=createDefaultPythonBinding();\r
  }\r
  applyNodeGeometry(node);\r
  renderModelNodes();\r
  if(S.selBlk===node.id){\r
    renderPropertyPanel(node);\r
  }\r
  updateUI();\r
};\r
\r
renderModelNodes = function(){\r
  __legacyRenderModelNodes();\r
  S.modelNodes.forEach(node=>{\r
    const el=document.getElementById(\`b-\${node.id}\`);\r
    if(!el){return;}\r
    if(node.type==='flow_block'){\r
      el.title='流程块用于定义输入输出名称与数据类型';\r
      el.addEventListener('click',event=>{\r
        if(event.detail>=2){\r
          event.stopImmediatePropagation();\r
          selectNode(node.id);\r
        }\r
      },true);\r
      el.addEventListener('dblclick',event=>{\r
        event.stopImmediatePropagation();\r
      },true);\r
      const kicker=el.querySelector('.blk-kicker');\r
      const sub=el.querySelector('.blk-sub');\r
      if(kicker){kicker.textContent='接口';}\r
      if(sub){sub.textContent='流程块 · 输入输出类型校验';}\r
      return;\r
    }\r
    if(node.type==='simulation_block'){\r
      const pythonBound=isPythonBoundFlowBlock(node);\r
      el.title=pythonBound\r
        ?\`已绑定 Python：\${node.pythonBinding?.fileName||'unknown.py'}\\n双击可重新绑定\`\r
        :'双击绑定 Python 文件';\r
      el.addEventListener('dblclick',event=>{\r
        event.stopPropagation();\r
        openPythonBindingDialog(node.id);\r
      });\r
      const kicker=el.querySelector('.blk-kicker');\r
      const sub=el.querySelector('.blk-sub');\r
      if(pythonBound){\r
        if(kicker){kicker.textContent='Python 已绑定';}\r
        if(sub){sub.textContent=\`仿真块 · \${getPythonBindingSummary(node)}\`;}\r
      }else if(kicker){\r
        kicker.textContent='仿真';\r
      }\r
    }\r
  });\r
};\r
\r
buildFlowBlockFields = function(node){\r
  return \`\r
    <div class="pgroup">\r
      <div class="pglbl">接口定义</div>\r
      <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
      <div class="props-field"><label>输入名称</label><input id="prop-inputName" value="\${escapeHtml(node.props.inputName)}"></div>\r
      <div class="props-row">\r
        <div class="props-field"><label>输入格式</label><select id="prop-inputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.inputFormat)}</select></div>\r
        <div class="props-field"><label>输出格式</label><select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat)}</select></div>\r
      </div>\r
      <div class="props-field"><label>输出名称</label><input id="prop-outputName" value="\${escapeHtml(node.props.outputName)}"></div>\r
      <div class="props-help">流程块只用于确认输入输出名称和数据类型，用来校验上下游接口是否一致，不负责绑定 Python 计算逻辑。</div>\r
    </div>\`;\r
  if(node.type==='simulation_block'){\r
    updateModelPackageStatus(node);\r
  }\r
};\r
\r
function buildSimulationInterfaceRowsOverride(items,prefix){\r
  return items.map((item,index)=>\`\r
    <div class="sim-intf-row" data-role="\${prefix}" data-index="\${index}">\r
      <div class="props-field">\r
        <label>\${prefix}名称 \${index+1}</label>\r
        <input data-sim-field="name" value="\${escapeHtml(item.name)}">\r
      </div>\r
      <div class="props-field">\r
        <label>\${prefix}类型</label>\r
        <select data-sim-field="type">\${buildSelectOptions(PORT_FORMATS,item.type)}</select>\r
      </div>\r
    </div>\`).join('');\r
}\r
\r
buildSimulationBlockFields = function(node){\r
  normalizeSimulationInterfaces(node.props);\r
  const binding=ensureFlowNodePythonBinding(node);\r
  if(!binding.bound){\r
    return \`\r
      <div class="pgroup">\r
        <div class="pglbl">仿真接口</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-field"><label>模块类型</label><select id="prop-moduleType">\${buildSelectOptions(SIM_MODULE_TYPES,node.props.moduleType)}</select></div>\r
        <div class="sim-intf-toolbar">\r
          <div class="sim-intf-counts">\r
            <div class="props-field"><label>输入数量</label><input id="sim-input-count" type="number" min="\${SIM_INTERFACE_LIMITS.inputs[0]}" max="\${SIM_INTERFACE_LIMITS.inputs[1]}" value="\${node.props.inputs.length}"></div>\r
            <div class="props-field"><label>输出数量</label><input id="sim-output-count" type="number" min="\${SIM_INTERFACE_LIMITS.outputs[0]}" max="\${SIM_INTERFACE_LIMITS.outputs[1]}" value="\${node.props.outputs.length}"></div>\r
            <div class="props-field"><label>中间变量数量</label><input id="sim-middle-count" type="number" min="\${SIM_INTERFACE_LIMITS.middleVars[0]}" max="\${SIM_INTERFACE_LIMITS.middleVars[1]}" value="\${node.props.middleVars.length}"></div>\r
          </div>\r
          <button class="props-secondary" type="button" onclick="syncSimulationInterfaceCounts()">同步接口数量</button>\r
          <div class="sim-intf-note">中间变量端口位于模块上方，可用于观测内部状态；绑定 Python 后，这些端口会由函数接口自动生成。</div>\r
        </div>\r
      </div>\r
      <div class="sim-intf-group">\r
        <div class="sim-intf-head">\r
          <div class="sim-intf-title">输入端口</div>\r
          <div class="sim-intf-meta">\${node.props.inputs.length} 个左侧端口</div>\r
        </div>\r
        <div class="sim-intf-list">\${buildSimulationInterfaceRowsOverride(node.props.inputs,'输入')}</div>\r
      </div>\r
      <div class="sim-intf-group">\r
        <div class="sim-intf-head">\r
          <div class="sim-intf-title">输出端口</div>\r
          <div class="sim-intf-meta">\${node.props.outputs.length} 个右侧主输出</div>\r
        </div>\r
        <div class="sim-intf-list">\${buildSimulationInterfaceRowsOverride(node.props.outputs,'输出')}</div>\r
      </div>\r
      <div class="sim-intf-group">\r
        <div class="sim-intf-head">\r
          <div class="sim-intf-title">中间变量</div>\r
          <div class="sim-intf-meta">\${node.props.middleVars.length} 个顶部观测端口</div>\r
        </div>\r
        <div class="sim-intf-list">\${node.props.middleVars.length?buildSimulationInterfaceRowsOverride(node.props.middleVars,'中间量'):'<div class="sim-intf-note">当前没有暴露的中间变量端口，可先调整数量后再同步。</div>'}</div>\r
      </div>\r
      <div class="props-field"><label>函数说明</label><textarea id="prop-ffunctionNote">\${escapeHtml(node.props.ffunctionNote)}</textarea></div>\r
      <div class="pgroup">\r
        <div class="pglbl">Python 绑定</div>\r
        <div class="props-help">仿真块可以绑定 Python 文件。绑定后，输入、输出和中间变量端口将由 Python 接口自动生成。</div>\r
      </div>\`;\r
  }\r
\r
  return \`\r
    <div class="pgroup">\r
      <div class="pglbl">仿真块设置</div>\r
      <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
      <div class="props-field"><label>绑定文件</label><input value="\${escapeHtml(binding.fileName||'')}" disabled></div>\r
      <div class="props-row">\r
        <div class="props-field"><label>模块名</label><input value="\${escapeHtml(binding.moduleName||'-')}" disabled></div>\r
        <div class="props-field"><label>入口函数</label><input value="\${escapeHtml(binding.entryFunction||'process')}" disabled></div>\r
      </div>\r
      <div class="props-help">\${escapeHtml(binding.description||'已绑定 Python 接口，端口由解析结果自动生成。')}</div>\r
    </div>\r
    <div class="pgroup">\r
      <div class="pglbl">输入端口</div>\r
      \${buildPythonBindingPortRows(binding.portMapping.inputs,'inputs')}\r
    </div>\r
    <div class="pgroup">\r
      <div class="pglbl">输出端口</div>\r
      \${buildPythonBindingPortRows(binding.portMapping.outputs,'outputs')}\r
    </div>\r
    <div class="pgroup">\r
      <div class="pglbl">中间变量</div>\r
      \${buildPythonBindingPortRows(binding.portMapping.middleVars,'middleVars')}\r
    </div>\r
    <div class="pgroup">\r
      <div class="pglbl">执行方式</div>\r
      <div class="prow"><span class="pk">模式<</span><span class="pv">\${binding.executionMode==='backend'?'后端执行':'前端模拟'}<</span></div>\r
      <div class="prow"><span class="pk">来源模型包</span><span class="pv">\${escapeHtml(binding.sourcePackageName||S.activeModelPackage?.modelName||'未关联模型包')}<</span></div>\r
      <div class="prow"><span class="pk">执行模式</span><span class="pv">\${escapeHtml(binding.executionMode||'mock')}<</span></div>\r
      <div class="prow"><span class="pk">接口摘要<</span><span class="pv">\${escapeHtml(getPythonBindingSummary(node))}<</span></div>\r
    </div>\`;\r
  if(node.type==='simulation_block'){\r
    updateModelPackageStatus(node);\r
  }\r
};\r
\r
renderPropertyPanel = function(node){\r
  if(!node||node.sourceNodeId&&node.targetNodeId&&!node.type){\r
    return __legacyRenderPropertyPanel(node);\r
  }\r
  if(node.type!=='signal_source'&&node.type!=='flow_block'&&node.type!=='simulation_block'){\r
    return __legacyRenderPropertyPanel(node);\r
  }\r
\r
  const pe=document.getElementById('pe');\r
  const pd=document.getElementById('pd');\r
  const meta=COMPONENT_LIBRARY[node.type];\r
  const fault=S.faultedBlks.includes(node.id)||Boolean(node.injectedFault);\r
  const pythonBound=node.type==='simulation_block'&&isPythonBoundFlowBlock(node);\r
  const fields=node.type==='signal_source'\r
    ?\`\r
      <div class="pgroup">\r
        <div class="pglbl">信号定义</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>信号类型</label><select id="prop-waveType">\${buildSelectOptions(['正弦','阶跃','常值'],node.props.waveType)}</select></div>\r
          <div class="props-field"><label>输出格式</label><select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat)}</select></div>\r
        </div>\r
        <div class="props-row">\r
          <div class="props-field"><label>幅值</label><input id="prop-amplitude" value="\${escapeHtml(node.props.amplitude)}"></div>\r
          <div class="props-field"><label>频率 / 周期</label><input id="prop-frequency" value="\${escapeHtml(node.props.frequency)}"></div>\r
        </div>\r
        <div class="props-help">信号源用于提供系统建模阶段的输入激励，可继续作为 Python 仿真块或流程块的上游输入。</div>\r
      </div>\`\r
    :node.type==='flow_block'\r
      ?buildFlowBlockFields(node)\r
      :buildSimulationBlockFields(node);\r
  const subtitle=pythonBound\r
    ?\`\${escapeHtml(node.pythonBinding?.fileName||'')} · \${meta.label} · 节点 \${node.id.replace('node-','#')}\`\r
    :\`\${meta.label} · 节点 \${node.id.replace('node-','#')}\`;\r
  const faultSummary=node.injectedFault\r
    ?\`<div class="prow"><span class="pk">电气故障<</span><span class="pv pv-fault">\${escapeHtml(node.injectedFault.name)}<</span></div>\`\r
    :'';\r
\r
  pe.style.display='none';\r
  pd.style.display='block';\r
  pd.innerHTML=\`\r
    <div class="pgroup">\r
      <div class="props-title">\${escapeHtml(node.props.name)}</div>\r
      <div class="props-sub">\${subtitle}</div>\r
    </div>\r
    <div class="pgroup">\r
      <div class="pglbl">当前状态</div>\r
      <div class="prow"><span class="pk">节点类别<</span><span class="pv">\${meta.label}<</span></div>\r
      <div class="prow"><span class="pk">状态<</span><span class="pv \${fault?'pv-fault':'pv-ok'}">\${fault?'已绑定故障':'正常'}<</span></div>\r
      \${pythonBound?\`<div class="prow"><span class="pk">Python<</span><span class="pv pv-ok">\${escapeHtml(getPythonBindingSummary(node))}<</span></div>\`:''}\r
      \${simulationPackageRows}\r
      \${faultSummary}\r
    </div>\r
    <div class="props-form">\r
      \${fields}\r
      <div class="props-actions">\r
        \${node.type==='simulation_block'?\`<button class="props-secondary" onclick="openPythonBindingDialog('\${node.id}')">\${pythonBound?'重新绑定 Python':'绑定 Python 文件'}</button>\`:''}\r
        \${node.type==='simulation_block'&&pythonBound?\`<button class="props-secondary" onclick="unbindPythonBinding('\${node.id}')">解除 Python 绑定</button>\`:''}\r
        \${isElectricalInjectableType(node.type)?\`<button class="props-secondary props-fault-action" onclick="openElectricalFaultImport()">\${node.injectedFault?'更换故障':'导入故障'}</button>\`:''}\r
        <button class="props-save" onclick="saveSelectedNode()">保存设置</button>\r
        <button class="props-danger" onclick="deleteSelectedNode()">删除模块</button>\r
      </div>\r
    </div>\`;\r
  if(node.type==='simulation_block'){\r
    updateModelPackageStatus(node);\r
  }\r
};\r
\r
saveSelectedNode = function(){\r
  const node=getNode(S.selBlk);\r
  if(!node){return;}\r
  if(node.type==='signal_source'){\r
    node.props.name=document.getElementById('prop-name').value.trim()||node.props.name;\r
    node.props.waveType=document.getElementById('prop-waveType').value;\r
    node.props.outputFormat=document.getElementById('prop-outputFormat').value;\r
    node.props.amplitude=document.getElementById('prop-amplitude').value.trim()||node.props.amplitude;\r
    node.props.frequency=document.getElementById('prop-frequency').value.trim()||node.props.frequency;\r
    markTopologyDirty(getMutationScopeForType(node.type));\r
    renderModelNodes();\r
    renderPropertyPanel(node);\r
    syncConfigTargets(node.id);\r
    updateUI();\r
    return;\r
  }\r
  if(node.type==='flow_block'){\r
    node.props.name=document.getElementById('prop-name').value.trim()||node.props.name;\r
    node.props.inputName=document.getElementById('prop-inputName').value.trim()||'输入信号';\r
    node.props.inputFormat=document.getElementById('prop-inputFormat').value;\r
    node.props.outputName=document.getElementById('prop-outputName').value.trim()||'输出信号';\r
    node.props.outputFormat=document.getElementById('prop-outputFormat').value;\r
    markTopologyDirty(getMutationScopeForType(node.type));\r
    renderModelNodes();\r
    renderPropertyPanel(node);\r
    syncConfigTargets(node.id);\r
    updateUI();\r
    return;\r
  }\r
  if(node.type==='simulation_block'){\r
    node.props.name=document.getElementById('prop-name').value.trim()||node.props.name;\r
    if(!isPythonBoundFlowBlock(node)){\r
      node.props.moduleType=document.getElementById('prop-moduleType').value;\r
      node.props.inputs=readSimulationInterfaceRows('输入');\r
      node.props.outputs=readSimulationInterfaceRows('输出');\r
      node.props.middleVars=readSimulationInterfaceRows('中间量');\r
      normalizeSimulationInterfaces(node.props);\r
      node.props.inputs=normalizeSimulationInterfaceList(\r
        node.props.inputs.slice(0,clampInterfaceCount(document.getElementById('sim-input-count')?.value,SIM_INTERFACE_LIMITS.inputs)),\r
        '输入',\r
        node.props.inputs[0]?.type||'标量',\r
        clampInterfaceCount(document.getElementById('sim-input-count')?.value,SIM_INTERFACE_LIMITS.inputs)\r
      );\r
      node.props.outputs=normalizeSimulationInterfaceList(\r
        node.props.outputs.slice(0,clampInterfaceCount(document.getElementById('sim-output-count')?.value,SIM_INTERFACE_LIMITS.outputs)),\r
        '输出',\r
        node.props.outputs[0]?.type||'标量',\r
        clampInterfaceCount(document.getElementById('sim-output-count')?.value,SIM_INTERFACE_LIMITS.outputs)\r
      );\r
      node.props.middleVars=normalizeSimulationInterfaceList(\r
        node.props.middleVars.slice(0,clampInterfaceCount(document.getElementById('sim-middle-count')?.value,SIM_INTERFACE_LIMITS.middleVars)),\r
        '中间量',\r
        node.props.middleVars[0]?.type||'标量',\r
        clampInterfaceCount(document.getElementById('sim-middle-count')?.value,SIM_INTERFACE_LIMITS.middleVars)\r
      );\r
      node.props.ffunctionNote=document.getElementById('prop-ffunctionNote').value.trim()||'当前预留 Python 函数接口，可在后续导入函数定义。';\r
      applyNodeGeometry(node);\r
      pruneInvalidEdgesForNode(node);\r
    }\r
    markTopologyDirty(getMutationScopeForType(node.type));\r
    renderModelNodes();\r
    renderPropertyPanel(node);\r
    syncConfigTargets(node.id);\r
    updateUI();\r
    return;\r
  }\r
  return __legacySaveSelectedNode();\r
};\r
\r
syncSimulationInterfaceCounts = function(){\r
  const node=getNode(S.selBlk);\r
  if(node?.type==='simulation_block'&&isPythonBoundFlowBlock(node)){\r
    toast('已绑定 Python 的仿真块不支持手动调整接口数量','w');\r
    return;\r
  }\r
  return __legacySyncSimulationInterfaceCounts();\r
};\r
\r
resolveNodeOutputs = function(nodeId,modeKey,time,dt,cache,visiting){\r
  const node=getNode(nodeId);\r
  if(!(node&&node.type==='simulation_block'&&isPythonBoundFlowBlock(node))){\r
    return __legacyResolveNodeOutputs(nodeId,modeKey,time,dt,cache,visiting);\r
  }\r
  if(cache.has(nodeId)){return cache.get(nodeId);}\r
  const bucket=modeKey==='reference'?SIM.reference:SIM.actual;\r
  const nodeState=ensureNodeRuntime(bucket,node);\r
  if(visiting.has(nodeId)){\r
    return {\r
      outputs:nodeState.lastOutputs?.length?nodeState.lastOutputs:[nodeState.lastOutput||0],\r
      middleValues:nodeState.lastMiddleValues||[]\r
    };\r
  }\r
  visiting.add(nodeId);\r
  const inputValues=resolveNodeInputValues(node,modeKey,time,dt,cache,visiting);\r
  let resolved=executeBoundFlowBlock(node,nodeState,inputValues,modeKey,time,dt);\r
  resolved.outputs=(resolved.outputs||[0]).map(sanitizeSignalValue);\r
  resolved.middleValues=(resolved.middleValues||[]).map(sanitizeSignalValue);\r
  nodeState.lastInputValues=inputValues.slice();\r
  nodeState.lastInput=inputValues[0]||0;\r
  nodeState.lastOutputs=resolved.outputs.slice();\r
  nodeState.lastMiddleValues=resolved.middleValues.slice();\r
  nodeState.lastOutput=nodeState.lastOutputs[0]||0;\r
  visiting.delete(nodeId);\r
  cache.set(nodeId,resolved);\r
  return resolved;\r
};\r
\r
resolveNodeOutput = function(nodeId,outputIndex,modeKey,time,dt,cache,visiting){\r
  const node=getNode(nodeId);\r
  if(!(node&&node.type==='simulation_block'&&isPythonBoundFlowBlock(node))){\r
    return __legacyResolveNodeOutput(nodeId,outputIndex,modeKey,time,dt,cache,visiting);\r
  }\r
  const resolved=resolveNodeOutputs(nodeId,modeKey,time,dt,cache,visiting);\r
  const mainCount=node.pythonBinding?.portMapping?.outputs?.length||0;\r
  if(outputIndex<mainCount){\r
    return sanitizeSignalValue(resolved.outputs[outputIndex]??resolved.outputs[0]??0);\r
  }\r
  return sanitizeSignalValue(resolved.middleValues[outputIndex-mainCount]??resolved.outputs[0]??0);\r
};\r
\r
Object.assign(window,{\r
  createNode,\r
  openPythonBindingDialog,\r
  unbindPythonBinding\r
});\r
\r
// --- Final text cleanup overrides: replace remaining mojibake in active UI paths ---\r
const __legacySetConnectionTool = setConnectionTool;\r
const __legacyDoImportSys = doImportSys;\r
const __legacyDoSaveSys = doSaveSys;\r
const __legacyDoImportFault = doImportFault;\r
const __legacyDoSaveRes = doSaveRes;\r
const __legacyUpdateSelectedTplSummary = updateSelectedTplSummary;\r
const __legacyConfirmImportFault = confirmImportFault;\r
const __legacyShowTplDetail = showTplDetail;\r
const __legacyRenderFaultCatalogList = renderFaultCatalogList;\r
const __legacySyncConfigTargets = syncConfigTargets;\r
const __legacyUpdateSimbarVisualState = updateSimbarVisualState;\r
const __legacySimInit = simInit;\r
const __legacySimStep = simStep;\r
const __legacySimPause = simPause;\r
const __legacySimStop = simStop;\r
\r
function renderAll(){\r
  S.sysLoaded=true;\r
  S.systemSaved=true;\r
  S.step=S.modelNodes.length?2:1;\r
  S.faultLoaded=S.importedFaultModels.length>0;\r
  S.faultModels=S.importedFaultModels.length;\r
  S.selBlk=null;\r
  S.selEdge=null;\r
  document.getElementById('empty').style.display='none';\r
  document.getElementById('diagram').classList.add('on');\r
  restoreActiveCanvasViewport(S.activeCanvasId);\r
  applyCanvasTransform();\r
  clearPendingConnection();\r
  renderCanvasBreadcrumbs();\r
  syncAllPythonInputConnectionState();\r
  renderModelNodes();\r
  renderPropertyPanel(null);\r
  setConnectionTool(S.activeLineType||'normal');\r
  syncConfigTargets('');\r
  renderFaultCatalogList();\r
  updateUI();\r
}\r
\r
async function pickJsonFileText(){\r
  return new Promise((resolve,reject)=>{\r
    const input=document.createElement('input');\r
    input.type='file';\r
    input.accept='.json,application/json';\r
    input.onchange=async ()=>{\r
      const file=input.files&&input.files[0];\r
      if(!file){\r
        resolve(null);\r
        return;\r
      }\r
      try{\r
        resolve(await file.text());\r
      }catch(error){\r
        reject(error);\r
      }\r
    };\r
    input.click();\r
  });\r
}\r
\r
function downloadFlightModelPackage(pkg){\r
  const blob=new Blob([JSON.stringify(pkg,null,2)],{type:'application/json;charset=utf-8'});\r
  const url=URL.createObjectURL(blob);\r
  const link=document.createElement('a');\r
  const safeModelId=(pkg&&pkg.modelId)||'workbench-export';\r
  link.href=url;\r
  link.download=\`\${safeModelId}.json\`;\r
  document.body.appendChild(link);\r
  link.click();\r
  link.remove();\r
  setTimeout(()=>URL.revokeObjectURL(url),0);\r
}\r
\r
window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__ = function(pkg,prepared){\r
  const restored=prepared?.snapshot||{};\r
  S.modelNodes=restored.modelNodes||[];\r
  S.modelEdges=restored.modelEdges||[];\r
  S.nodeSeq=restored.nodeSeq||0;\r
  S.edgeSeq=restored.edgeSeq||0;\r
  S.activeLineType=restored.activeLineType||'normal';\r
  S.faultedBlks=restored.faultedBlks||[];\r
  S.importedFaultModels=restored.importedFaultModels||[];\r
  S.availableFaultModels=cloneDefaults(prepared?.faultLibrary||pkg?.faultLibrary||[]);\r
  S.selectedFaultCatalogId=S.availableFaultModels[0]?.id||'';\r
  S.activeModelPackage={\r
    modelId:pkg?.modelId??prepared?.descriptor?.modelId??null,\r
    modelName:pkg?.modelName??prepared?.descriptor?.modelName??null,\r
    description:pkg?.description??prepared?.descriptor?.description??'',\r
    source:cloneDefaults(pkg?.source||{})\r
  };\r
  renderAll();\r
  updateModelPackageStatus();\r
  toast(\`飞控模型包“\${S.activeModelPackage.modelName||'未命名模型'}”已导入\`,'s');\r
};\r
\r
buildNodeSubtitle = function(node){\r
  const props=node.props||{};\r
  const faultNote=node.injectedFault?' · 电气故障':'';\r
  switch(node.type){\r
    case 'signal_source':\r
      return \`\${props.waveType||'正弦'} · 幅值 \${props.amplitude} · \${props.outputFormat||'标量'}\`;\r
    case 'flow_block':\r
      return \`\${props.inputName||'输入信号'} / \${props.inputFormat||'标量'} → \${props.outputName||'输出信号'} / \${props.outputFormat||'标量'}\${faultNote}\`;\r
    case 'simulation_block':\r
      normalizeSimulationInterfaces(props);\r
      return \`\${props.inputs.length}输入 · \${props.outputs.length}输出 · \${props.middleVars.length}中间变量 · \${props.moduleType||'一阶函数'}\${faultNote}\`;\r
    case 'fault_bias':\r
    case 'fault_noise':\r
    case 'fault_stuck':\r
    case 'fault_drift':\r
      return \`\${props.faultType||'故障'} · \${props.layer||'物理层'}\`;\r
    case 'instrument_scope':\r
      return \`\${props.instrumentType||'示波器'} · 双击查看波形\`;\r
    case 'instrument_spectrum':\r
    case 'instrument_logger':\r
      return \`\${props.instrumentType||'仪器'} · \${props.sampleRate||'1000 Hz'}\`;\r
    case 'link_normal':\r
    case 'link_can':\r
      return \`\${props.sourcePort||'源端口'} → \${props.targetPort||'目标端口'}\`;\r
    default:\r
      return '';\r
  }\r
};\r
\r
setConnectionTool = function(type){\r
  __legacySetConnectionTool(type);\r
  const chip=document.getElementById('line-mode-chip');\r
  if(chip){\r
    chip.textContent=S.activeLineType==='can'?'CAN 总线':'普通连接线';\r
  }\r
};\r
\r
doImportSys = async function(){\r
  const btn=document.getElementById('btn-imp-sys');\r
  const packageApi=window.__GZ_FLIGHT_MODEL_PACKAGE__;\r
  const resetButton=()=>{\r
    if(!btn){return;}\r
    btn.textContent='导入系统模型';\r
    btn.disabled=false;\r
  };\r
\r
  if(typeof packageApi?.importObject!=='function'){\r
    toast('飞控模型导入桥接未就绪','w');\r
    return;\r
  }\r
\r
  if(btn){\r
    btn.textContent='导入中...';\r
    btn.disabled=true;\r
  }\r
\r
  try{\r
    const fileText=await pickJsonFileText();\r
    if(!fileText){\r
      const raw=window.localStorage?.getItem(WORKBENCH_STORAGE_KEY);\r
      if(raw){\r
        let restored=false;\r
        S.sysLoaded=true;\r
        S.step=1;\r
        document.getElementById('empty').style.display='none';\r
        document.getElementById('diagram').classList.add('on');\r
        handleCanvasZoomReset();\r
        try{\r
          restoreSystemModelSnapshot(JSON.parse(raw));\r
          S.systemSaved=true;\r
          S.step=S.modelNodes.length?2:1;\r
          restored=S.modelNodes.length>0;\r
        }catch(error){\r
          console.warn('Failed to restore saved system model',error);\r
          clearPendingConnection();\r
          renderModelNodes();\r
          renderPropertyPanel(null);\r
          toast('系统模型恢复失败，请稍后重试','w');\r
          return;\r
        }\r
        toast(restored?'已恢复已保存的系统模型':'系统建模画布已就绪，请拖拽组件开始建模','s');\r
        updateUI();\r
      }\r
      return;\r
    }\r
\r
    let pkg=null;\r
    try{\r
      pkg=JSON.parse(fileText);\r
    }catch(error){\r
      toast('导入失败：JSON 解析错误','w');\r
      return;\r
    }\r
\r
    const result=packageApi.importObject(pkg);\r
    if(!result?.ok){\r
      toast((result?.errors||['飞控模型导入失败']).join('；'),'w');\r
      return;\r
    }\r
  }catch(error){\r
    console.warn('Failed to import flight model package',error);\r
    toast('飞控模型导入失败，请稍后重试','w');\r
  }finally{\r
    resetButton();\r
  }\r
};\r
\r
doSaveSys = function(){\r
  if(!S.sysLoaded){toast('请先导入系统模型','w');return;}\r
  if(S.modelNodes.length===0){toast('请至少添加一个组件后再导出','w');return;}\r
  const packageApi=window.__GZ_FLIGHT_MODEL_PACKAGE__;\r
  if(typeof packageApi?.exportCurrent!=='function'){\r
    toast('飞控模型导出桥接未就绪','w');\r
    return;\r
  }\r
  try{\r
    const pkg=packageApi.exportCurrent();\r
    downloadFlightModelPackage(pkg);\r
    try{\r
      const snapshot=createSystemModelSnapshot();\r
      window.localStorage?.setItem(WORKBENCH_STORAGE_KEY,JSON.stringify(snapshot));\r
    }catch(error){\r
      console.warn('Failed to persist system model snapshot',error);\r
      toast('系统模型保存失败，请稍后重试','w');\r
      return;\r
    }\r
    S.systemSaved=true;\r
    S.step=S.modelNodes.length?2:1;\r
    toast('飞控模型包已导出','s');\r
    updateUI();\r
  }catch(error){\r
    console.warn('Failed to export flight model package',error);\r
    toast('飞控模型包导出失败，请稍后重试','w');\r
  }\r
};\r
\r
window.doImportSys=doImportSys;\r
window.doSaveSys=doSaveSys;\r
\r
window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__ = function(pkg,prepared){\r
  const restored=prepared?.snapshot||{};\r
  S.modelNodes=restored.modelNodes||[];\r
  S.modelEdges=restored.modelEdges||[];\r
  S.nodeSeq=restored.nodeSeq||0;\r
  S.edgeSeq=restored.edgeSeq||0;\r
  S.activeLineType=restored.activeLineType||'normal';\r
  S.faultedBlks=restored.faultedBlks||[];\r
  S.importedFaultModels=restored.importedFaultModels||[];\r
  S.availableFaultModels=cloneDefaults(prepared?.faultLibrary||pkg?.faultLibrary||[]);\r
  S.selectedFaultCatalogId=S.availableFaultModels[0]?.id||'';\r
  S.activeModelPackage={\r
    modelId:pkg?.modelId??prepared?.descriptor?.modelId??null,\r
    modelName:pkg?.modelName??prepared?.descriptor?.modelName??null,\r
    description:pkg?.description??prepared?.descriptor?.description??'',\r
    source:cloneDefaults(pkg?.source||{})\r
  };\r
  renderAll();\r
  toast(\`飞控模型包“\${S.activeModelPackage.modelName||'未命名模型'}”已导入\`,'s');\r
};\r
\r
doImportSys = async function(){\r
  const btn=document.getElementById('btn-imp-sys');\r
  const packageApi=window.__GZ_FLIGHT_MODEL_PACKAGE__;\r
  const resetButton=()=>{\r
    if(!btn){return;}\r
    btn.textContent='导入系统模型';\r
    btn.disabled=false;\r
  };\r
\r
  if(typeof packageApi?.importObject!=='function'){\r
    toast('飞控模型导入桥接未就绪','w');\r
    return;\r
  }\r
\r
  if(btn){\r
    btn.textContent='导入中...';\r
    btn.disabled=true;\r
  }\r
\r
  try{\r
    const fileText=await pickJsonFileText();\r
    if(!fileText){\r
      const raw=window.localStorage?.getItem(WORKBENCH_STORAGE_KEY);\r
      if(raw){\r
        let restored=false;\r
        S.sysLoaded=true;\r
        S.step=1;\r
        document.getElementById('empty').style.display='none';\r
        document.getElementById('diagram').classList.add('on');\r
        handleCanvasZoomReset();\r
        try{\r
          restoreSystemModelSnapshot(JSON.parse(raw));\r
          S.systemSaved=true;\r
          S.step=S.modelNodes.length?2:1;\r
          restored=S.modelNodes.length>0;\r
        }catch(error){\r
          console.warn('Failed to restore saved system model',error);\r
          clearPendingConnection();\r
          renderModelNodes();\r
          renderPropertyPanel(null);\r
          toast('系统模型恢复失败，请稍后重试','w');\r
          return;\r
        }\r
        toast(restored?'已恢复已保存的系统模型':'系统建模画布已就绪，请拖拽组件开始建模','s');\r
        updateUI();\r
      }\r
      return;\r
    }\r
\r
    let pkg=null;\r
    try{\r
      pkg=JSON.parse(fileText);\r
    }catch(error){\r
      toast('导入失败：JSON 解析错误','w');\r
      return;\r
    }\r
\r
    const result=packageApi.importObject(pkg);\r
    if(!result?.ok){\r
      toast((result?.errors||['飞控模型导入失败']).join('；'),'w');\r
      return;\r
    }\r
  }catch(error){\r
    console.warn('Failed to import flight model package',error);\r
    toast('飞控模型导入失败，请稍后重试','w');\r
  }finally{\r
    resetButton();\r
  }\r
};\r
\r
doSaveSys = function(){\r
  if(!S.sysLoaded){toast('请先导入系统模型','w');return;}\r
  if(S.modelNodes.length===0){toast('请至少添加一个组件后再导出','w');return;}\r
  const packageApi=window.__GZ_FLIGHT_MODEL_PACKAGE__;\r
  if(typeof packageApi?.exportCurrent!=='function'){\r
    toast('飞控模型导出桥接未就绪','w');\r
    return;\r
  }\r
  try{\r
    const pkg=packageApi.exportCurrent();\r
    downloadFlightModelPackage(pkg);\r
    try{\r
      const snapshot=createSystemModelSnapshot();\r
      window.localStorage?.setItem(WORKBENCH_STORAGE_KEY,JSON.stringify(snapshot));\r
    }catch(error){\r
      console.warn('Failed to persist system model snapshot',error);\r
      toast('系统模型保存失败，请稍后重试','w');\r
      return;\r
    }\r
    S.systemSaved=true;\r
    S.step=S.modelNodes.length?2:1;\r
    toast('飞控模型包已导出','s');\r
    updateUI();\r
  }catch(error){\r
    console.warn('Failed to export flight model package',error);\r
    toast('飞控模型包导出失败，请稍后重试','w');\r
  }\r
};\r
\r
window.doImportSys=doImportSys;\r
window.doSaveSys=doSaveSys;\r
\r
syncConfigTargets = function(preferredId=''){\r
  const sel=document.getElementById('cftgt');\r
  if(!sel){return;}\r
  const currentValue=preferredId||sel.value;\r
  const nodes=getConfigurableNodes();\r
  if(nodes.length===0){\r
    sel.innerHTML='<option value="">请先创建系统建模组件</option>';\r
    return;\r
  }\r
  sel.innerHTML=nodes.map(node=>\`<option value="\${node.id}">\${escapeHtml(node.props.name)} · \${COMPONENT_LIBRARY[node.type].label}</option>\`).join('');\r
  sel.value=nodes.some(node=>node.id===currentValue)?currentValue:nodes[0].id;\r
};\r
\r
renderFaultCatalogList = function(){\r
  __legacyRenderFaultCatalogList();\r
  const title=document.getElementById('ifm-selected-model');\r
  if(title){\r
    const selected=getFaultCatalogModel(S.selectedFaultCatalogId);\r
    title.textContent=selected?\`已选：\${selected.name} · \${getLayerLabel(selected.layer)}\`:'已选：未选择故障模型';\r
  }\r
  const container=document.getElementById('ifm-list-container');\r
  if(container&&container.textContent.includes('当前')){\r
    const importedIds=new Set(S.importedFaultModels.map(model=>model.id));\r
    if(S.availableFaultModels.length===0){\r
      container.innerHTML='<div class="ifm-empty">当前没有可导入的故障模型，请先从模板库新建。</div>';\r
      return;\r
    }\r
    container.innerHTML='';\r
    S.availableFaultModels.forEach(model=>{\r
      const item=document.createElement('div');\r
      const imported=importedIds.has(model.id);\r
      item.className=\`ifm-item\${S.selectedFaultCatalogId===model.id?' on':''}\${imported?' is-imported':''}\`;\r
      item.dataset.faultId=model.id;\r
      const icon=model.layer==='electrical'?'&#9889;':model.layer==='physical'?'&#128295;':'&#128225;';\r
      item.innerHTML=\`\r
        <div class="ifm-icon ifm-icon--\${model.layer}">\${icon}</div>\r
        <div style="min-width:0;flex:1">\r
          <div class="ifm-name">\${escapeHtml(model.name)}</div>\r
          <div class="ifm-meta">\${escapeHtml(buildFaultCatalogMeta(model))}</div>\r
        </div>\r
        \${imported?'<span class="ifm-state">已导入<</span>':''}\`;\r
      item.onclick=()=>selectFaultCatalogModel(model.id);\r
      container.appendChild(item);\r
    });\r
  }\r
};\r
\r
updateSelectedTplSummary = function(){\r
  const counter=document.getElementById('sel-cnt');\r
  const list=document.getElementById('sel-list');\r
  if(counter){counter.textContent=\`已选 \${S.selTpls.length} 个故障模板\`;}\r
  if(list){\r
    list.innerHTML=S.selTpls.length===0\r
      ?'<div style="font-size:10px;color:var(--textd);text-align:center;margin-top:6px">暂无</div>'\r
      :S.selTpls.map(item=>\`<div style="font-size:10px;color:var(--purple);padding:3px 6px;border-radius:3px;background:var(--purple-bg);margin-bottom:2px;border:1px solid #ddd6fe">• \${item.name}</div>\`).join('');\r
  }\r
};\r
\r
confirmImportFault = function(){\r
  const selected=getFaultCatalogModel(S.selectedFaultCatalogId);\r
  if(!selected){toast('请先选择一个故障模型','w');return;}\r
  ensureImportedFaultModel(selected);\r
  closeOv('ov-ifm');\r
  renderFaultCatalogList();\r
  toast(\`故障模型“\${selected.name}”已导入工作区\`,'s');\r
  updateUI();\r
};\r
\r
showTplDetail = function(t){\r
  const detail=document.getElementById('tdetail');\r
  if(!detail){return;}\r
  if(!t?.id){\r
    detail.innerHTML='<div class="tdph">→ 选择模板查看详情</div>';\r
    return;\r
  }\r
  detail.innerHTML=\`\r
    <div class="tdtitle">\${escapeHtml(t.name)}</div>\r
    <div style="font-size:10px;color:var(--text2);line-height:1.6;margin-bottom:10px">\${escapeHtml(t.desc||'')}</div>\r
    <div class="tdlbl">故障层级</div><div class="tdval">\${getLayerLabel(t.layer)}</div>\r
    <div class="tdlbl">故障类别</div><div class="tdval">\${escapeHtml(t.tags?.[0]||'故障')}</div>\r
    <div class="tdlbl">持续特性</div><div class="tdval">\${escapeHtml(t.tags?.[1]||'—')}</div>\r
    <div class="tdlbl">适用场景</div>\r
    <div style="font-size:10px;color:var(--text2);margin-top:3px;line-height:1.5">系统建模模块 / 信号链路<br>故障传播与退化仿真</div>\r
    <div class="tdlbl">幅值范围</div><div class="tdval">±0.01 ~ ±10.0</div>\`;\r
};\r
\r
computeSourceSignal = function(node,time){\r
  const amplitude=parseScalar(node.props.amplitude,1);\r
  const frequency=parseScalar(node.props.frequency,1);\r
  if(node.props.waveType==='阶跃'){\r
    const stepTime=Math.max(0.2,frequency);\r
    return time>=stepTime?amplitude:0;\r
  }\r
  if(node.props.waveType==='常值'){\r
    return amplitude;\r
  }\r
  return amplitude*Math.sin(2*Math.PI*frequency*time);\r
};\r
\r
applyElectricalFault = function(node,inputValue,outputValue,time){\r
  if(!node.injectedFault){return outputValue;}\r
  const modelId=node.injectedFault.modelId||'';\r
  const importedModel=modelId?getImportedFaultModel(modelId):null;\r
  const faultValue=parseScalar(importedModel?.defaultValue,0);\r
  if(modelId==='motor_efficiency_loss'){\r
    const efficiency=faultValue>0?faultValue:0.55;\r
    return outputValue*efficiency;\r
  }\r
  if(modelId==='motor_lock'){\r
    return 0;\r
  }\r
  if(modelId==='motor_thrust_saturation'){\r
    const saturation=faultValue>0?faultValue:8;\r
    return Math.max(-saturation,Math.min(saturation,outputValue));\r
  }\r
  const name=node.injectedFault.name||'';\r
  if(name.includes('过流')){\r
    return Math.abs(inputValue)>1.2?0:outputValue*0.78;\r
  }\r
  if(name.includes('短路')||name.includes('断路')||name.includes('开路')){\r
    return 0;\r
  }\r
  if(name.includes('漂移')){\r
    return outputValue+Math.min(0.4,time*0.08);\r
  }\r
  return outputValue;\r
};\r
\r
getScopeSignalName = function(scopeNode){\r
  const incoming=getIncomingEdgesForNode(scopeNode.id)[0];\r
  if(!incoming){return '未接入信号';}\r
  const sourceNode=getNode(incoming.sourceNodeId);\r
  if(!sourceNode){return '上游信号';}\r
  const outputPort=getNodePorts(sourceNode).outputs[incoming.sourcePortIndex||0];\r
  if(outputPort){\r
    return \`\${sourceNode.props?.name||'上游信号'} · \${outputPort.label}\`;\r
  }\r
  return sourceNode.props?.name||'上游信号';\r
};\r
\r
validateSimulationTopology = function(){\r
  if(!S.sysLoaded){toast('请先导入系统模型','w');return false;}\r
  if(!S.modelNodes.some(node=>node.type==='signal_source')){\r
    toast('请至少放置一个信号源','w');\r
    return false;\r
  }\r
  if(getScopeNodes().length===0){\r
    toast('请至少放置一个示波器用于观察信号','w');\r
    return false;\r
  }\r
  if(getConnectedScopeNodes().length===0){\r
    toast('请至少让一个示波器接入信号链路，才能查看波形','w');\r
    return false;\r
  }\r
  const conflicts=findInputCouplingConflicts();\r
  if(conflicts.length){\r
    selectEdge(conflicts[0].id);\r
    toast('检测到同一输入端口存在多条连线，请先删除多余连线以避免信号耦合','w');\r
    return false;\r
  }\r
  return true;\r
};\r
\r
updateSimbarVisualState = function(){\r
  const runBtn=document.getElementById('sbtn-run');\r
  const runLbl=document.getElementById('run-lbl');\r
  const pauseLbl=document.getElementById('pause-lbl');\r
  if(runBtn){\r
    runBtn.classList.toggle('active',SIM.running&&!SIM.paused);\r
  }\r
  if(runLbl){\r
    runLbl.textContent=SIM.running&&!SIM.paused?'运行中':'运行';\r
  }\r
  if(pauseLbl){\r
    pauseLbl.textContent=SIM.paused?'继续':'暂停';\r
  }\r
};\r
\r
simInit = function(silent=false){\r
  __legacySimInit(true);\r
  if(!SIM.inited||silent){return;}\r
  const autoSaved=S.systemSaved;\r
  if(autoSaved&&SIM.time===0&&SIM.stepIndex===0){\r
    toast(\`仿真初始化完成：\${SIM.datasetName} · 时长 \${SIM.duration}s · 步长 \${SIM.stepSize}s\`,'s');\r
  }\r
};\r
\r
simStep = function(){\r
  if(!SIM.inited){\r
    simInit();\r
    if(!SIM.inited){return;}\r
  }\r
  if(SIM.time>=SIM.duration){\r
    toast('当前仿真已结束，请重新初始化后再步进','w');\r
    return;\r
  }\r
  const completed=runSimulationTick();\r
  updateSimbarEnabled();\r
  if(completed){\r
    simStop('completed');\r
  }else{\r
    toast(\`步进完成 · t = \${SIM.time.toFixed(2)}s\`,'s');\r
  }\r
};\r
\r
simPause = function(){\r
  if(!SIM.running){return;}\r
  SIM.paused=!SIM.paused;\r
  if(SIM.paused){\r
    clearSimLoop();\r
    toast('仿真已暂停','w');\r
  }else{\r
    startSimulationLoop();\r
    toast('仿真继续运行','s');\r
  }\r
  updateSimbarEnabled();\r
  updateUI();\r
};\r
\r
simStop = function(mode='manual'){\r
  __legacySimStop(mode);\r
};\r
\r
function getSimulationSampleRateLabel(){\r
  const stepSize=Number(SIM?.stepSize);\r
  if(!Number.isFinite(stepSize)||stepSize<=0){return '-';}\r
  const hz=1/stepSize;\r
  return \`\${Number(hz.toFixed(hz>=10?0:1))} Hz\`;\r
}\r
\r
function publishSimulationRuntimeSummary(status='updated'){\r
  const statusBar=window.__GZ_STATUS_BAR__;\r
  if(!statusBar?.publishSimulationSummary){\r
    return {ok:false,reason:'missing-statusbar-runtime'};\r
  }\r
  return statusBar.publishSimulationSummary({\r
    datasetName:SIM?.datasetName||document.getElementById('sim-name')?.value?.trim?.()||'test',\r
    duration:SIM?.duration||parseScalar(document.getElementById('sim-dur')?.value,0),\r
    elapsedSeconds:SIM?.time||0,\r
    faults:S?.faultModels??S?.importedFaultModels?.length??0,\r
    sampleRate:getSimulationSampleRateLabel(),\r
    status,\r
    stepIndex:SIM?.stepIndex||0,\r
    stepSize:SIM?.stepSize||parseScalar(document.getElementById('sim-step')?.value,0)\r
  });\r
}\r
\r
const __statusSummarySimInit = simInit;\r
const __statusSummarySimRun = simRun;\r
const __statusSummarySimStep = simStep;\r
const __statusSummarySimPause = simPause;\r
const __statusSummarySimStop = simStop;\r
\r
simInit = function(silent=false){\r
  __statusSummarySimInit(silent);\r
  if(!SIM.inited||silent){return;}\r
  window.__GZ_STATUS_BAR__?.pushEntry?.({\r
    level:'info',\r
    source:'仿真控制',\r
    message:\`初始化 \${SIM.datasetName} · \${SIM.duration}s · step \${SIM.stepSize}s\`\r
  });\r
};\r
\r
simRun = function(){\r
  __statusSummarySimRun();\r
  if(SIM.running&&!SIM.paused){\r
    window.__GZ_STATUS_BAR__?.pushEntry?.({\r
      level:'ok',\r
      source:'仿真控制',\r
      message:\`运行 \${SIM.datasetName} · \${SIM.duration}s · \${getSimulationSampleRateLabel()}\`\r
    });\r
  }\r
};\r
\r
simStep = function(){\r
  const beforeStep=SIM.stepIndex;\r
  __statusSummarySimStep();\r
  if(SIM.hasSamples&&SIM.stepIndex!==beforeStep){\r
    publishSimulationRuntimeSummary(SIM.time>=SIM.duration?'completed':'stepped');\r
  }\r
};\r
\r
simPause = function(){\r
  const beforePaused=SIM.paused;\r
  __statusSummarySimPause();\r
  if(SIM.hasSamples&&SIM.paused!==beforePaused){\r
    publishSimulationRuntimeSummary(SIM.paused?'paused':'running');\r
  }\r
};\r
\r
simStop = function(mode='manual'){\r
  __statusSummarySimStop(mode);\r
  if(SIM.hasSamples){\r
    publishSimulationRuntimeSummary(mode==='completed'?'completed':'stopped');\r
  }\r
};\r
\r
Object.assign(window,{publishSimulationRuntimeSummary});\r
\r
// --- Final UI/runtime cleanup: Chinese text, instrument inspector, middle variable assignment ---\r
COMPONENT_LIBRARY.middle_var_assign = {\r
  label:'中间变量赋值块',\r
  badge:'赋值',\r
  className:'b-assign',\r
  width:176,\r
  height:82,\r
  defaults:{\r
    name:'中间变量赋值块',\r
    targetNodeId:'',\r
    targetVarName:'',\r
    assignMode:'constant',\r
    constantValue:'0'\r
  }\r
};\r
\r
const __legacyCreateNodeClean = createNode;\r
const __legacyBuildSimulationResultClean = buildSimulationResult;\r
const __legacyResolveNodeOutputsClean = resolveNodeOutputs;\r
const __legacyOpenPythonBindingDialog = openPythonBindingDialog;\r
const __legacyApplyPythonBindingToNode = applyPythonBindingToNode;\r
const __legacyUnbindPythonBinding = unbindPythonBinding;\r
const __legacyBuildNodeSubtitleClean = buildNodeSubtitle;\r
\r
function buildNamedOptions(options, selectedValue){\r
  return options.map(option=>{\r
    const value=typeof option==='string'?option:option.value;\r
    const label=typeof option==='string'?option:(option.label||option.value);\r
    return \`<option value="\${escapeHtml(value)}"\${String(value)===String(selectedValue)?' selected':''}>\${escapeHtml(label)}</option>\`;\r
  }).join('');\r
}\r
\r
function getSimulationMiddleVarDefinitions(node){\r
  if(!node||node.type!=='simulation_block'){\r
    return [];\r
  }\r
  if(isPythonBoundFlowBlock(node)){\r
    return (ensureFlowNodePythonBinding(node).portMapping.middleVars||[]).map((item,index)=>({\r
      name:item.displayName||item.varName||\`middle_\${index}\`,\r
      type:item.type||'标量',\r
      varName:item.varName||\`middle_\${index}\`,\r
      displayName:item.displayName||item.varName||\`middle_\${index}\`\r
    }));\r
  }\r
  normalizeSimulationInterfaces(node.props);\r
  return (node.props.middleVars||[]).map((item,index)=>({\r
    name:item.name||\`中间量 \${index+1}\`,\r
    type:item.type||'标量',\r
    varName:item.name||\`中间量_\${index+1}\`,\r
    displayName:item.name||\`中间量 \${index+1}\`\r
  }));\r
}\r
\r
function getMiddleAssignmentTargetNodes(){\r
  return S.modelNodes.filter(node=>node.type==='simulation_block');\r
}\r
\r
function getMiddleAssignmentTargetVarOptions(node){\r
  const targetId=node?.props?.targetNodeId||getMiddleAssignmentTargetNodes()[0]?.id||'';\r
  const targetNode=getNode(targetId);\r
  return getSimulationMiddleVarDefinitions(targetNode);\r
}\r
\r
function buildInstrumentFields(node){\r
  return \`\r
    <div class="pgroup">\r
      <div class="pglbl">测量配置</div>\r
      <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
      <div class="props-row">\r
        <div class="props-field"><label>仪器类型</label><input value="\${escapeHtml(node.props.instrumentType||COMPONENT_LIBRARY[node.type].label)}" disabled></div>\r
        <div class="props-field"><label>采样率</label><input id="prop-sampleRate" value="\${escapeHtml(node.props.sampleRate||'64kHz')}"></div>\r
      </div>\r
      <div class="props-field"><label>观测信号</label><input id="prop-signal" value="\${escapeHtml(node.props.signal||'未接入信号')}"></div>\r
      <div class="props-help">测量仪器用于观察链路中的波形、频谱或记录结果。示波器支持双击直接查看波形。</div>\r
    </div>\`;\r
}\r
\r
function buildMiddleAssignmentFields(node){\r
  const targetNodes=getMiddleAssignmentTargetNodes();\r
  const activeTargetId=node.props.targetNodeId&&targetNodes.some(item=>item.id===node.props.targetNodeId)\r
    ?node.props.targetNodeId\r
    :(targetNodes[0]?.id||'');\r
  const targetNode=getNode(activeTargetId);\r
  const varOptions=getSimulationMiddleVarDefinitions(targetNode);\r
  const activeVarName=node.props.targetVarName&&varOptions.some(item=>item.name===node.props.targetVarName)\r
    ?node.props.targetVarName\r
    :(varOptions[0]?.name||'');\r
\r
  return \`\r
    <div class="pgroup">\r
      <div class="pglbl">赋值配置</div>\r
      <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
      <div class="props-row">\r
        <div class="props-field"><label>目标仿真块</label><select id="prop-targetNodeId" onchange="refreshMiddleAssignEditor()">\${targetNodes.length\r
          ?targetNodes.map(item=>\`<option value="\${item.id}"\${item.id===activeTargetId?' selected':''}>\${escapeHtml(item.props.name)}</option>\`).join('')\r
          :'<option value="">请先创建仿真块</option>'}</select></div>\r
        <div class="props-field"><label>目标中间变量</label><select id="prop-targetVarName">\${varOptions.length\r
          ?varOptions.map(item=>\`<option value="\${escapeHtml(item.name)}"\${item.name===activeVarName?' selected':''}>\${escapeHtml(\`\${item.name} / \${item.type}\`)}</option>\`).join('')\r
          :'<option value="">暂无可写变量</option>'}</select></div>\r
      </div>\r
      <div class="props-row">\r
        <div class="props-field"><label>赋值方式</label><select id="prop-assignMode" onchange="refreshMiddleAssignEditor()">\${buildNamedOptions([{value:'input',label:'输入覆盖'},{value:'constant',label:'常值覆盖'}],node.props.assignMode||'constant')}</select></div>\r
        <div class="props-field"><label>常值</label><input id="prop-constantValue" value="\${escapeHtml(node.props.constantValue||'0')}" \${node.props.assignMode==='input'?'disabled':''}></div>\r
      </div>\r
      <div class="props-help">中间变量赋值块用于将输入信号或常值写入目标仿真块的中间变量。当前顶部端口仍作为观测输出存在，赋值操作通过该模块在运行时完成。</div>\r
    </div>\`;\r
}\r
\r
function refreshMiddleAssignEditor(){\r
  const node=getNode(S.selBlk);\r
  if(!node||node.type!=='middle_var_assign'){\r
    return;\r
  }\r
  const nextTarget=document.getElementById('prop-targetNodeId')?.value;\r
  const nextMode=document.getElementById('prop-assignMode')?.value;\r
  if(nextTarget!==undefined){\r
    node.props.targetNodeId=nextTarget;\r
  }\r
  if(nextMode!==undefined){\r
    node.props.assignMode=nextMode;\r
  }\r
  renderPropertyPanel(node);\r
}\r
\r
function getMiddleAssignmentResolvedTarget(node){\r
  const targetNode=getNode(node?.props?.targetNodeId||'');\r
  if(!targetNode||targetNode.type!=='simulation_block'){\r
    return null;\r
  }\r
  const defs=getSimulationMiddleVarDefinitions(targetNode);\r
  const targetVar=defs.find(item=>item.name===node.props.targetVarName)||defs[0]||null;\r
  if(!targetVar){\r
    return null;\r
  }\r
  return {targetNode,targetVar};\r
}\r
\r
function clearAssignedMiddleValues(bucket){\r
  if(!bucket?.nodeState){\r
    return;\r
  }\r
  Object.values(bucket.nodeState).forEach(nodeState=>{\r
    if(nodeState&&nodeState.assignedMiddleValues){\r
      nodeState.assignedMiddleValues={};\r
    }\r
  });\r
}\r
\r
function readMiddleAssignmentValue(node,modeKey,time,dt,cache,visiting){\r
  if(node.props.assignMode==='input'){\r
    const inputValues=resolveNodeInputValues(node,modeKey,time,dt,cache,visiting);\r
    return sanitizeSignalValue(inputValues[0]??0);\r
  }\r
  return sanitizeSignalValue(parseScalar(node.props.constantValue,0));\r
}\r
\r
function applyMiddleAssignmentsForMode(modeKey,time,dt,cache,visiting){\r
  const bucket=modeKey==='reference'?SIM.reference:SIM.actual;\r
  S.modelNodes.filter(node=>node.type==='middle_var_assign').forEach(node=>{\r
    const targetInfo=getMiddleAssignmentResolvedTarget(node);\r
    const nodeState=ensureNodeRuntime(bucket,node);\r
    if(!targetInfo){\r
      nodeState.lastAssignedValue=0;\r
      return;\r
    }\r
    const value=readMiddleAssignmentValue(node,modeKey,time,dt,cache,visiting);\r
    nodeState.lastAssignedValue=value;\r
    const targetState=ensureNodeRuntime(bucket,targetInfo.targetNode);\r
    if(!targetState.assignedMiddleValues){\r
      targetState.assignedMiddleValues={};\r
    }\r
    targetState.assignedMiddleValues[targetInfo.targetVar.name]=value;\r
  });\r
}\r
\r
function primeSimulationNodeStateFromAssignments(node,nodeState){\r
  const assigned=nodeState?.assignedMiddleValues||{};\r
  const middleDefs=getSimulationMiddleVarDefinitions(node);\r
  const firstVar=middleDefs[0];\r
  if(!firstVar||!Object.prototype.hasOwnProperty.call(assigned,firstVar.name)){\r
    return;\r
  }\r
  const seed=sanitizeSignalValue(assigned[firstVar.name]);\r
  if(node.props.moduleType==='积分'){\r
    nodeState.integrator=seed;\r
  }else if(node.props.moduleType==='微分'){\r
    nodeState.prevAggregateInput=seed;\r
  }else{\r
    nodeState.firstOrder=seed;\r
  }\r
}\r
\r
function applyAssignedMiddleValues(node,nodeState,resolved){\r
  const assigned=nodeState?.assignedMiddleValues||{};\r
  const middleDefs=getSimulationMiddleVarDefinitions(node);\r
  if(!resolved.middleValues){\r
    resolved.middleValues=[];\r
  }\r
  const firstAssignedName=middleDefs[0]?.name;\r
  const firstAssignedValue=firstAssignedName&&Object.prototype.hasOwnProperty.call(assigned,firstAssignedName)\r
    ?sanitizeSignalValue(assigned[firstAssignedName])\r
    :undefined;\r
  middleDefs.forEach((item,index)=>{\r
    if(Object.prototype.hasOwnProperty.call(assigned,item.name)){\r
      resolved.middleValues[index]=sanitizeSignalValue(assigned[item.name]);\r
    }\r
  });\r
  if(firstAssignedValue!==undefined&&resolved.outputs?.length){\r
    resolved.outputs[0]=firstAssignedValue;\r
    if(resolved.outputs.length>1){\r
      resolved.outputs[1]=firstAssignedValue;\r
    }\r
  }\r
  return resolved;\r
}\r
\r
toast = function(msg,type='w'){\r
  const el=document.getElementById('toast');\r
  const ti=document.getElementById('ti');\r
  const tm=document.getElementById('tm');\r
  if(!el||!ti||!tm){return;}\r
  el.className=\`toast \${type==='s'?'toast-s':'toast-w'} on\`;\r
  ti.className=type==='s'?'ti-s':'ti-w';\r
  ti.textContent=type==='s'?'成功':'提示';\r
  tm.textContent=msg;\r
  clearTimeout(toastT);\r
  toastT=setTimeout(()=>el.classList.remove('on'),3500);\r
};\r
\r
openPythonBindingDialog = function(nodeId=''){\r
  const target=getNode(nodeId||S.selBlk);\r
  if(!target||target.type!=='simulation_block'){\r
    toast('请先选中仿真块，再绑定 Python 文件','w');\r
    return;\r
  }\r
  return __legacyOpenPythonBindingDialog(nodeId);\r
};\r
\r
applyPythonBindingToNode = function(nodeId,binding){\r
  const node=getNode(nodeId);\r
  if(!node||node.type!=='simulation_block'){return;}\r
  node.pythonBinding=cloneDefaults(binding);\r
  applyNodeGeometry(node);\r
  const removedEdges=pruneInvalidEdgesForNode(node);\r
  syncAllPythonInputConnectionState();\r
  markTopologyDirty('system');\r
  renderModelNodes();\r
  selectNode(node.id);\r
  syncConfigTargets(node.id);\r
  updateUI();\r
  toast(\`已为 \${node.props.name} 绑定 \${binding.fileName}\${removedEdges?\`，并清理 \${removedEdges} 条失效连线\`:''}\`,'s');\r
};\r
\r
unbindPythonBinding = function(nodeId=''){\r
  const node=getNode(nodeId||S.selBlk);\r
  if(!node||node.type!=='simulation_block'){\r
    return;\r
  }\r
  const binding=ensureFlowNodePythonBinding(node);\r
  if(!binding.bound){\r
    toast('当前仿真块尚未绑定 Python 文件','w');\r
    return;\r
  }\r
  node.pythonBinding=createDefaultPythonBinding();\r
  applyNodeGeometry(node);\r
  const removedEdges=pruneInvalidEdgesForNode(node);\r
  syncAllPythonInputConnectionState();\r
  markTopologyDirty('system');\r
  renderModelNodes();\r
  selectNode(node.id);\r
  syncConfigTargets(node.id);\r
  updateUI();\r
  toast(\`已解除 \${node.props.name} 的 Python 绑定\${removedEdges?\`，并清理 \${removedEdges} 条失效连线\`:''}\`,'s');\r
};\r
\r
getNodePorts = function(node){\r
  if(!node){\r
    return {inputs:[],outputs:[]};\r
  }\r
  if(node.type==='signal_source'){\r
    return {\r
      inputs:[],\r
      outputs:[{key:'signal',label:node.props.outputFormat||'输出',kind:'output',side:'right'}]\r
    };\r
  }\r
  if(node.type==='flow_block'){\r
    return {\r
      inputs:[{key:'input',label:node.props.inputName||'输入',kind:'input',side:'left'}],\r
      outputs:[{key:'output',label:node.props.outputName||'输出',kind:'output',side:'right'}]\r
    };\r
  }\r
  if(node.type==='simulation_block'){\r
    if(isPythonBoundFlowBlock(node)){\r
      const binding=ensureFlowNodePythonBinding(node);\r
      return {\r
        inputs:binding.portMapping.inputs.map((item,index)=>({\r
          key:\`input-\${index}\`,\r
          label:item.displayName||item.varName||\`input_\${index}\`,\r
          kind:'input',\r
          side:'left',\r
          meta:item\r
        })),\r
        outputs:[\r
          ...binding.portMapping.outputs.map((item,index)=>({\r
            key:\`output-\${index}\`,\r
            label:item.displayName||item.varName||\`output_\${index}\`,\r
            kind:'output',\r
            side:'right',\r
            meta:item\r
          })),\r
          ...binding.portMapping.middleVars.map((item,index)=>({\r
            key:\`middle-\${index}\`,\r
            label:item.displayName||item.varName||\`middle_\${index}\`,\r
            kind:'middle',\r
            side:'top',\r
            meta:item\r
          }))\r
        ]\r
      };\r
    }\r
    const groups=getSimulationPortSets(node.props);\r
    return {\r
      inputs:groups.inputs.map((item,index)=>({\r
        key:\`input-\${index}\`,\r
        label:\`输入 \${index+1} · \${item.name} / \${item.type}\`,\r
        kind:'input',\r
        side:'left'\r
      })),\r
      outputs:getSimulationFlatOutputs(node.props).map((item,index)=>({\r
        key:\`\${item.kind}-\${item.index}\`,\r
        label:\`\${item.kind==='middle'?'中间量':'输出'} \${item.index+1} · \${item.name} / \${item.type}\`,\r
        kind:item.kind,\r
        side:item.side,\r
        portIndex:index\r
      }))\r
    };\r
  }\r
  if(node.type==='middle_var_assign'){\r
    return {\r
      inputs:[{key:'assign-input',label:'赋值输入',kind:'input',side:'left'}],\r
      outputs:[]\r
    };\r
  }\r
  if(node.type.startsWith('fault_')){\r
    return {\r
      inputs:[{key:'input',label:'故障输入',kind:'input',side:'left'}],\r
      outputs:[{key:'output',label:'故障输出',kind:'output',side:'right'}]\r
    };\r
  }\r
  if(node.type.startsWith('instrument_')){\r
    return {\r
      inputs:[{key:'input',label:'观测输入',kind:'input',side:'left'}],\r
      outputs:[]\r
    };\r
  }\r
  return {inputs:[],outputs:[]};\r
};\r
\r
buildNodeSubtitle = function(node){\r
  const props=node.props||{};\r
  const faultNote=node.injectedFault?' · 电气故障':'';\r
  if(node.type==='middle_var_assign'){\r
    const targetInfo=getMiddleAssignmentResolvedTarget(node);\r
    const targetName=targetInfo?.targetNode?.props?.name||'未选择目标';\r
    const varName=targetInfo?.targetVar?.name||'未选择变量';\r
    const modeLabel=props.assignMode==='input'?'输入覆盖':'常值覆盖';\r
    return \`\${targetName} · \${varName} · \${modeLabel}\`;\r
  }\r
  switch(node.type){\r
    case 'signal_source':\r
      return \`\${props.waveType||'正弦'} · 幅值 \${props.amplitude} · \${props.outputFormat||'标量'}\`;\r
    case 'flow_block':\r
      return \`\${props.inputName||'输入'} → \${props.outputName||'输出'} · \${props.outputFormat||'标量'}\${faultNote}\`;\r
    case 'simulation_block':\r
      normalizeSimulationInterfaces(props);\r
      return \`\${props.inputs.length}输入 · \${props.outputs.length}输出 · \${props.middleVars.length}中间变量 · \${props.moduleType||'一阶函数'}\${faultNote}\`;\r
    case 'instrument_scope':\r
      return \`\${props.instrumentType||'示波器'} · 双击查看波形\`;\r
    case 'instrument_spectrum':\r
    case 'instrument_logger':\r
      return \`\${props.instrumentType||COMPONENT_LIBRARY[node.type].label} · 采样率 \${props.sampleRate||'未设置'}\`;\r
    default:\r
      return __legacyBuildNodeSubtitleClean(node);\r
  }\r
};\r
\r
createNode = function(type,rawX,rawY){\r
  if(type==='subsystem_block'){\r
    const result=__legacyCreateNodeClean(type,rawX,rawY);\r
    const node=getNode(S.selBlk)||S.modelNodes[S.modelNodes.length-1];\r
    if(!node){return result;}\r
    node.props.name=\`子系统块 \${getNodeTypeCount(type)}\`;\r
    ensureSubsystemCanvasNode(node);\r
    renderModelNodes();\r
    syncConfigTargets(node.id);\r
    selectNode(node.id);\r
    updateUI();\r
    return result;\r
  }\r
  if(type!=='middle_var_assign'){\r
    return __legacyCreateNodeClean(type,rawX,rawY);\r
  }\r
  const meta=COMPONENT_LIBRARY[type];\r
  if(!meta){return;}\r
  const props=cloneDefaults(meta.defaults);\r
  props.name=\`中间变量赋值块 \${getNodeTypeCount(type)}\`;\r
  const point={\r
    x:clamp(Math.round(rawX-meta.width/2),CANVAS_STAGE.nodePadding,CANVAS_STAGE.width-meta.width-CANVAS_STAGE.nodePadding),\r
    y:clamp(Math.round(rawY-meta.height/2),CANVAS_STAGE.nodeMinY,CANVAS_STAGE.height-meta.height-CANVAS_STAGE.nodePadding)\r
  };\r
  S.modelNodes.push({\r
    id:\`node-\${++S.nodeSeq}\`,\r
    type,\r
    x:point.x,\r
    y:point.y,\r
    w:meta.width,\r
    h:meta.height,\r
    props,\r
    pythonBinding:null\r
  });\r
  markTopologyDirty('system');\r
  const node=S.modelNodes[S.modelNodes.length-1];\r
  renderModelNodes();\r
  syncConfigTargets(node.id);\r
  selectNode(node.id);\r
  updateUI();\r
  toast(\`\${meta.label} 已加入画布\`,'s');\r
};\r
\r
renderModelNodes = function(){\r
  const layer=document.getElementById('node-layer');\r
  if(!layer){return;}\r
  layer.innerHTML='';\r
  S.modelNodes.forEach(node=>{\r
    applyNodeGeometry(node);\r
    const meta=COMPONENT_LIBRARY[node.type];\r
    const faulted=S.faultedBlks.includes(node.id)||Boolean(node.injectedFault);\r
    const pythonBound=node.type==='simulation_block'&&isPythonBoundFlowBlock(node);\r
    const el=document.createElement('div');\r
    el.id=\`b-\${node.id}\`;\r
    el.className=\`blk \${meta.className}\${S.selBlk===node.id?' sel':''}\${faulted?' faulted':''}\${pythonBound?' python-bound':''}\`;\r
    el.style.left=\`\${node.x}px\`;\r
    el.style.top=\`\${node.y}px\`;\r
    el.style.width=\`\${node.w}px\`;\r
    el.style.height=\`\${node.h}px\`;\r
    if(node.type==='simulation_block'){\r
      const topPortCount=getSimulationMiddleVarDefinitions(node).length;\r
      el.style.paddingTop=\`\${topPortCount?18:10}px\`;\r
      el.style.paddingBottom='10px';\r
    }else{\r
      el.style.paddingTop='';\r
      el.style.paddingBottom='';\r
    }\r
\r
    const nodeTitle=pythonBound?(node.pythonBinding?.fileName||node.props.name):node.props.name;\r
    const nodeSubtitle=buildNodeSubtitle(node);\r
    const showInlinePortLabels=!(pythonBound&&node.type==='simulation_block');\r
    el.innerHTML=\`\r
      <div class="fbadge">F</div>\r
      \${pythonBound?'<div class="node-card__python-chip">Py</div>':''}\r
      <div class="blk-kicker">\${pythonBound?'已绑定 Python':(faulted&&!isFaultNodeType(node.type)?\`\${meta.badge} 故障\`:meta.badge)}</div>\r
      <div class="blk-lbl">\${escapeHtml(nodeTitle)}</div>\r
      <div class="blk-sub">\${escapeHtml(nodeSubtitle)}</div>\`;\r
\r
    el.addEventListener('pointerdown',event=>beginNodeDrag(event,node.id));\r
    el.addEventListener('click',event=>{\r
      if(event.target.closest('.node-port')){return;}\r
      if(Date.now()<NODE_DRAG.clickSuppressUntil){return;}\r
      selectNode(node.id);\r
      const now=Date.now();\r
      const isDouble=NODE_DOUBLE_CLICK.nodeId===node.id&&(now-NODE_DOUBLE_CLICK.timestamp)<320;\r
      NODE_DOUBLE_CLICK.nodeId=node.id;\r
      NODE_DOUBLE_CLICK.timestamp=now;\r
      if(!isDouble){return;}\r
      if(node.type==='instrument_scope'){\r
        openScope(node.id);\r
      }else if(node.type==='simulation_block'){\r
        openPythonBindingDialog(node.id);\r
      }else if(node.type==='subsystem_block'){\r
        openSubsystemCanvas(node.id);\r
      }\r
    });\r
\r
    if(node.type==='instrument_scope'){\r
      el.title='双击查看示波器';\r
      el.addEventListener('dblclick',event=>{\r
        event.stopPropagation();\r
        openScope(node.id);\r
      });\r
    }else if(node.type==='simulation_block'){\r
      el.title=pythonBound\r
        ?\`已绑定 Python：\${node.pythonBinding?.fileName||'unknown.py'}\\n双击可重新绑定\`\r
        :'双击绑定 Python 文件';\r
      el.addEventListener('dblclick',event=>{\r
        event.stopPropagation();\r
        openPythonBindingDialog(node.id);\r
      });\r
    }else if(node.type==='middle_var_assign'){\r
      el.title='将输入信号或常值写入目标仿真块的中间变量';\r
    }\r
\r
    const ports=getNodePorts(node);\r
    ports.inputs.forEach((port,index)=>{\r
      const info=getPortInfo(node,'input',index);\r
      const portEl=document.createElement('button');\r
      portEl.type='button';\r
      portEl.className='node-port node-port--input';\r
      portEl.style.left=\`\${info.localX}px\`;\r
      portEl.style.top=\`\${info.localY}px\`;\r
      portEl.style.color=getPortTone(node,port,'input');\r
      portEl.title=getPortTooltip(port,'input');\r
      if(isPortConnected(node.id,'input',index)){\r
        portEl.classList.add('is-connected');\r
      }\r
      if(S.pendingConnection){\r
        portEl.classList.add('node-port--active');\r
      }\r
      portEl.innerHTML='<span class="node-port__inner"><</span>';\r
      if(showInlinePortLabels){\r
        appendPortLabel(portEl,port);\r
      }\r
      portEl.addEventListener('click',event=>handlePortClick(event,node.id,'input',index));\r
      el.appendChild(portEl);\r
    });\r
\r
    ports.outputs.forEach((port,index)=>{\r
      const info=getPortInfo(node,'output',index);\r
      const portEl=document.createElement('button');\r
      portEl.type='button';\r
      portEl.className=\`node-port node-port--output\${info.side==='top'?' node-port--top':''}\`;\r
      portEl.style.left=\`\${info.localX}px\`;\r
      portEl.style.top=\`\${info.localY}px\`;\r
      portEl.style.color=getPortTone(node,port,'output');\r
      portEl.title=getPortTooltip(port,'output');\r
      if(isPortConnected(node.id,'output',index)){\r
        portEl.classList.add('is-connected');\r
      }\r
      if(S.pendingConnection&&S.pendingConnection.sourceNodeId===node.id&&(S.pendingConnection.sourcePortIndex||0)===index){\r
        portEl.classList.add('node-port--active');\r
      }\r
      portEl.innerHTML='<span class="node-port__inner"><</span>';\r
      if(showInlinePortLabels){\r
        appendPortLabel(portEl,port);\r
      }\r
      portEl.addEventListener('click',event=>handlePortClick(event,node.id,'output',index));\r
      el.appendChild(portEl);\r
    });\r
\r
    layer.appendChild(el);\r
  });\r
  renderEdges();\r
  const placeholder=document.getElementById('diagram-placeholder');\r
  if(placeholder){\r
    placeholder.style.display=S.modelNodes.length?'none':'flex';\r
  }\r
};\r
\r
renderPropertyPanel = function(node){\r
  if(!node||node.sourceNodeId&&node.targetNodeId&&!node.type){\r
    return __legacyRenderPropertyPanel(node);\r
  }\r
  if(node.type!=='signal_source'&&node.type!=='flow_block'&&node.type!=='simulation_block'&&node.type!=='middle_var_assign'&&node.type!=='subsystem_block'&&!node.type.startsWith('instrument_')){\r
    return __legacyRenderPropertyPanel(node);\r
  }\r
\r
  const pe=document.getElementById('pe');\r
  const pd=document.getElementById('pd');\r
  const meta=COMPONENT_LIBRARY[node.type];\r
  const fault=S.faultedBlks.includes(node.id)||Boolean(node.injectedFault);\r
  const pythonBound=node.type==='simulation_block'&&isPythonBoundFlowBlock(node);\r
  let fields='';\r
\r
  if(node.type==='signal_source'){\r
    fields=\`\r
      <div class="pgroup">\r
        <div class="pglbl">信号定义</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>信号类型</label><select id="prop-waveType">\${buildSelectOptions(['正弦','阶跃','常值'],node.props.waveType)}</select></div>\r
          <div class="props-field"><label>输出格式</label><select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat)}</select></div>\r
        </div>\r
        <div class="props-row">\r
          <div class="props-field"><label>幅值</label><input id="prop-amplitude" value="\${escapeHtml(node.props.amplitude)}"></div>\r
          <div class="props-field"><label>频率 / 周期</label><input id="prop-frequency" value="\${escapeHtml(node.props.frequency)}"></div>\r
        </div>\r
        <div class="props-help">信号源用于提供系统建模阶段的输入激励，可继续作为 Python 仿真块或流程块的上游输入。</div>\r
      </div>\`;\r
  }else if(node.type==='flow_block'){\r
    fields=buildFlowBlockFields(node);\r
  }else if(node.type==='simulation_block'){\r
    fields=buildSimulationBlockFields(node);\r
  }else if(node.type==='middle_var_assign'){\r
    fields=buildMiddleAssignmentFields(node);\r
  }else if(node.type==='subsystem_block'){\r
    const canvas=ensureSubsystemCanvasNode(node);\r
    fields=\`\r
      <div class="pgroup">\r
        <div class="pglbl">子系统设置</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-field"><label>模块说明</label><textarea id="prop-description" rows="3" placeholder="可填写子系统职责、输入输出说明">\${escapeHtml(node.props.description||'')}</textarea></div>\r
        <div class="prow"><span class="pk">子画布 ID</span><span class="pv">\${escapeHtml(node.targetCanvasId||canvas?.id||'--')}<</span></div>\r
      </div>\`;\r
  }else if(node.type.startsWith('instrument_')){\r
    fields=buildInstrumentFields(node);\r
  }\r
  const simulationPackageRows=node.type==='simulation_block'&&pythonBound\r
    ?buildSimulationBlockPackageRows(node)\r
    :'';\r
\r
  const subtitle=pythonBound\r
    ?\`\${escapeHtml(node.pythonBinding?.fileName||'')} · \${meta.label} · 节点 \${node.id.replace('node-','#')}\`\r
    :\`\${meta.label} · 节点 \${node.id.replace('node-','#')}\`;\r
  const faultSummary=node.injectedFault\r
    ?\`<div class="prow"><span class="pk">电气故障<</span><span class="pv pv-fault">\${escapeHtml(node.injectedFault.name)}<</span></div>\`\r
    :'';\r
  const extraAction=node.type==='instrument_scope'\r
    ?\`<button class="props-secondary" onclick="openScope('\${node.id}')">查看波形</button>\`\r
    :'';\r
\r
  pe.style.display='none';\r
  pd.style.display='block';\r
  pd.innerHTML=\`\r
    <div class="pgroup">\r
      <div class="props-title">\${escapeHtml(node.props.name)}</div>\r
      <div class="props-sub">\${subtitle}</div>\r
    </div>\r
    <div class="pgroup">\r
      <div class="pglbl">当前状态</div>\r
      <div class="prow"><span class="pk">节点类别<</span><span class="pv">\${meta.label}<</span></div>\r
      <div class="prow"><span class="pk">状态<</span><span class="pv \${fault?'pv-fault':'pv-ok'}">\${fault?'已绑定故障':'正常'}<</span></div>\r
      \${pythonBound?\`<div class="prow"><span class="pk">Python<</span><span class="pv pv-ok">\${escapeHtml(getPythonBindingSummary(node))}<</span></div>\`:''}\r
      \${faultSummary}\r
    </div>\r
    <div class="props-form">\r
      \${fields}\r
      <div class="props-actions">\r
        \${node.type==='simulation_block'?\`<button class="props-secondary" onclick="openPythonBindingDialog('\${node.id}')">\${pythonBound?'重新绑定 Python':'绑定 Python 文件'}</button>\`:''}\r
        \${node.type==='simulation_block'&&pythonBound?\`<button class="props-secondary" onclick="unbindPythonBinding('\${node.id}')">解除 Python 绑定</button>\`:''}\r
        \${isElectricalInjectableType(node.type)?\`<button class="props-secondary props-fault-action" onclick="openElectricalFaultImport()">\${node.injectedFault?'更换故障':'导入故障'}</button>\`:''}\r
        \${extraAction}\r
        <button class="props-save" onclick="saveSelectedNode()">保存设置</button>\r
        <button class="props-danger" onclick="deleteSelectedNode()">删除模块</button>\r
      </div>\r
    </div>\`;\r
  if(node.type==='simulation_block'){\r
    updateModelPackageStatus(node);\r
  }\r
};\r
\r
saveSelectedNode = function(){\r
  const node=getNode(S.selBlk);\r
  if(!node){return;}\r
  if(node.type==='signal_source'){\r
    node.props.name=document.getElementById('prop-name').value.trim()||node.props.name;\r
    node.props.waveType=document.getElementById('prop-waveType').value;\r
    node.props.outputFormat=document.getElementById('prop-outputFormat').value;\r
    node.props.amplitude=document.getElementById('prop-amplitude').value.trim()||node.props.amplitude;\r
    node.props.frequency=document.getElementById('prop-frequency').value.trim()||node.props.frequency;\r
  }else if(node.type==='flow_block'){\r
    node.props.name=document.getElementById('prop-name').value.trim()||node.props.name;\r
    node.props.inputName=document.getElementById('prop-inputName').value.trim()||'输入信号';\r
    node.props.inputFormat=document.getElementById('prop-inputFormat').value;\r
    node.props.outputName=document.getElementById('prop-outputName').value.trim()||'输出信号';\r
    node.props.outputFormat=document.getElementById('prop-outputFormat').value;\r
  }else if(node.type==='simulation_block'){\r
    node.props.name=document.getElementById('prop-name').value.trim()||node.props.name;\r
    if(!isPythonBoundFlowBlock(node)){\r
      node.props.moduleType=document.getElementById('prop-moduleType').value;\r
      node.props.inputs=readSimulationInterfaceRows('输入');\r
      node.props.outputs=readSimulationInterfaceRows('输出');\r
      node.props.middleVars=readSimulationInterfaceRows('中间量');\r
      normalizeSimulationInterfaces(node.props);\r
      node.props.inputs=normalizeSimulationInterfaceList(\r
        node.props.inputs.slice(0,clampInterfaceCount(document.getElementById('sim-input-count')?.value,SIM_INTERFACE_LIMITS.inputs)),\r
        '输入',\r
        node.props.inputs[0]?.type||'标量',\r
        clampInterfaceCount(document.getElementById('sim-input-count')?.value,SIM_INTERFACE_LIMITS.inputs)\r
      );\r
      node.props.outputs=normalizeSimulationInterfaceList(\r
        node.props.outputs.slice(0,clampInterfaceCount(document.getElementById('sim-output-count')?.value,SIM_INTERFACE_LIMITS.outputs)),\r
        '输出',\r
        node.props.outputs[0]?.type||'标量',\r
        clampInterfaceCount(document.getElementById('sim-output-count')?.value,SIM_INTERFACE_LIMITS.outputs)\r
      );\r
      node.props.middleVars=normalizeSimulationInterfaceList(\r
        node.props.middleVars.slice(0,clampInterfaceCount(document.getElementById('sim-middle-count')?.value,SIM_INTERFACE_LIMITS.middleVars)),\r
        '中间量',\r
        node.props.middleVars[0]?.type||'标量',\r
        clampInterfaceCount(document.getElementById('sim-middle-count')?.value,SIM_INTERFACE_LIMITS.middleVars)\r
      );\r
      node.props.ffunctionNote=document.getElementById('prop-ffunctionNote').value.trim()||'当前预留 Python 函数接口，可在后续导入函数定义。';\r
      applyNodeGeometry(node);\r
      pruneInvalidEdgesForNode(node);\r
    }\r
  }else if(node.type==='middle_var_assign'){\r
    node.props.name=document.getElementById('prop-name').value.trim()||node.props.name;\r
    node.props.targetNodeId=document.getElementById('prop-targetNodeId').value;\r
    const options=getSimulationMiddleVarDefinitions(getNode(node.props.targetNodeId));\r
    const selectedVar=document.getElementById('prop-targetVarName').value;\r
    node.props.targetVarName=options.some(item=>item.name===selectedVar)?selectedVar:(options[0]?.name||'');\r
    node.props.assignMode=document.getElementById('prop-assignMode').value;\r
    node.props.constantValue=document.getElementById('prop-constantValue').value.trim()||'0';\r
  }else if(node.type==='subsystem_block'){\r
    node.props.name=document.getElementById('prop-name').value.trim()||node.props.name;\r
    node.props.description=document.getElementById('prop-description')?.value.trim()||'';\r
    const canvas=ensureSubsystemCanvasNode(node);\r
    if(canvas){\r
      canvas.name=node.props.name;\r
    }\r
  }else if(node.type.startsWith('instrument_')){\r
    node.props.name=document.getElementById('prop-name').value.trim()||node.props.name;\r
    node.props.sampleRate=document.getElementById('prop-sampleRate').value.trim()||node.props.sampleRate;\r
    node.props.signal=document.getElementById('prop-signal').value.trim()||node.props.signal;\r
  }else{\r
    return __legacySaveSelectedNode();\r
  }\r
\r
  markTopologyDirty(getMutationScopeForType(node.type));\r
  renderModelNodes();\r
  renderPropertyPanel(node);\r
  syncConfigTargets(node.id);\r
  updateUI();\r
};\r
\r
buildSimulationResult = function(node,nodeState,inputValues,modeKey,time,dt){\r
  primeSimulationNodeStateFromAssignments(node,nodeState);\r
  const resolved=__legacyBuildSimulationResultClean(node,nodeState,inputValues,modeKey,time,dt);\r
  return applyAssignedMiddleValues(node,nodeState,resolved);\r
};\r
\r
function getCanvasNodeById(canvasId,nodeId){\r
  return S.canvases?.[canvasId]?.nodes?.find(node=>node.id===nodeId)||null;\r
}\r
\r
function getIncomingEdgesForCanvasNode(canvasId,nodeId){\r
  return (S.canvases?.[canvasId]?.edges||[])\r
    .filter(edge=>edge.targetNodeId===nodeId)\r
    .sort((a,b)=>(a.targetPortIndex||0)-(b.targetPortIndex||0)||a.id.localeCompare(b.id));\r
}\r
\r
function getSubsystemBoundaryNodeForPort(canvasId,role,interfacePortId){\r
  const nodeType=role==='input'?'subsystem_in_port':'subsystem_out_port';\r
  return (S.canvases?.[canvasId]?.nodes||[]).find(node=>\r
    node.type===nodeType&&node.props?.interfacePortId===interfacePortId\r
  )||null;\r
}\r
\r
function finalizeResolvedNodeOutputs(node,nodeState,inputValues,resolved){\r
  resolved.outputs=(resolved.outputs||[0]).map(sanitizeSignalValue);\r
  resolved.middleValues=(resolved.middleValues||[]).map(sanitizeSignalValue);\r
  nodeState.lastInputValues=inputValues.slice();\r
  nodeState.lastInput=inputValues[0]||0;\r
  nodeState.lastOutputs=resolved.outputs.slice();\r
  nodeState.lastMiddleValues=resolved.middleValues.slice();\r
  nodeState.lastOutput=nodeState.lastOutputs[0]||0;\r
  return resolved;\r
}\r
\r
function resolveCanvasNodeOutput(canvasId,nodeId,outputIndex,modeKey,time,dt,context){\r
  const node=getCanvasNodeById(canvasId,nodeId);\r
  const resolved=resolveCanvasNodeOutputs(canvasId,nodeId,modeKey,time,dt,context);\r
  if(!node){return 0;}\r
  if(node.type==='simulation_block'){\r
    normalizeSimulationInterfaces(node.props);\r
    const mainCount=node.props.outputs.length;\r
    if(outputIndex<mainCount){\r
      return sanitizeSignalValue(resolved.outputs[outputIndex]??resolved.outputs[0]??0);\r
    }\r
    return sanitizeSignalValue(resolved.middleValues[outputIndex-mainCount]??resolved.outputs[0]??0);\r
  }\r
  return sanitizeSignalValue(resolved.outputs[outputIndex]??resolved.outputs[0]??0);\r
}\r
\r
function evaluateSubsystemOutputsFromInputs(node,inputValues,modeKey,time,dt){\r
  const canvas=ensureSubsystemCanvasNode(node);\r
  const intf=ensureSubsystemInterface(node);\r
  const boundaryInputs={};\r
  intf.inputs.forEach((item,index)=>{\r
    boundaryInputs[item.id]=sanitizeSignalValue(inputValues[index]??0);\r
  });\r
  const context={\r
    cache:new Map(),\r
    visiting:new Set(),\r
    boundaryInputs\r
  };\r
  return {\r
    outputs:intf.outputs.map(item=>{\r
      const outputNode=getSubsystemBoundaryNodeForPort(canvas.id,'output',item.id);\r
      return outputNode\r
        ?resolveCanvasNodeOutput(canvas.id,outputNode.id,0,modeKey,time,dt,context)\r
        :0;\r
    }),\r
    middleValues:[]\r
  };\r
}\r
\r
function resolveCanvasNodeOutputs(canvasId,nodeId,modeKey,time,dt,context){\r
  const cacheKey=\`\${canvasId}:\${nodeId}\`;\r
  if(context.cache.has(cacheKey)){\r
    return context.cache.get(cacheKey);\r
  }\r
  const node=getCanvasNodeById(canvasId,nodeId);\r
  if(!node){\r
    return {outputs:[0],middleValues:[]};\r
  }\r
  const bucket=modeKey==='reference'?SIM.reference:SIM.actual;\r
  const nodeState=ensureNodeRuntime(bucket,node);\r
  if(context.visiting.has(cacheKey)){\r
    const responsePoint={\r
      outputs:nodeState.lastOutputs?.length?nodeState.lastOutputs:[nodeState.lastOutput||0],\r
      middleValues:nodeState.lastMiddleValues||[]\r
    };\r
  }\r
  context.visiting.add(cacheKey);\r
  const inputPorts=getNodePorts(node).inputs||[];\r
  const incoming=getIncomingEdgesForCanvasNode(canvasId,node.id);\r
  const inputValues=node.type==='subsystem_in_port'\r
    ?[]\r
    :inputPorts.map((_,portIndex)=>{\r
      const edge=incoming.find(item=>(item.targetPortIndex||0)===portIndex);\r
      if(!edge){return 0;}\r
      const upstream=resolveCanvasNodeOutput(canvasId,edge.sourceNodeId,edge.sourcePortIndex||0,modeKey,time,dt,context);\r
      return transmitEdgeSignal(edge,upstream,modeKey,time);\r
    });\r
  let resolved={outputs:[0],middleValues:[]};\r
  if(node.type==='signal_source'){\r
    resolved={outputs:[computeSourceSignal(node,time)],middleValues:[]};\r
  }else if(node.type==='flow_block'){\r
    resolved=isPythonBoundFlowBlock(node)\r
      ?executeBoundFlowBlock(node,nodeState,inputValues,modeKey,time,dt)\r
      :{outputs:[sanitizeSignalValue(inputValues[0]||0)],middleValues:[]};\r
  }else if(node.type==='simulation_block'){\r
    resolved=isPythonBoundFlowBlock(node)\r
      ?applyAssignedMiddleValues(node,nodeState,executeBoundFlowBlock(node,nodeState,inputValues,modeKey,time,dt))\r
      :buildSimulationResult(node,nodeState,inputValues,modeKey,time,dt);\r
  }else if(node.type==='subsystem_in_port'){\r
    resolved={outputs:[sanitizeSignalValue(context.boundaryInputs?.[node.props?.interfacePortId]??0)],middleValues:[]};\r
  }else if(node.type==='subsystem_out_port'){\r
    resolved={outputs:[sanitizeSignalValue(inputValues[0]||0)],middleValues:[]};\r
  }else if(node.type==='subsystem_block'){\r
    resolved=evaluateSubsystemOutputsFromInputs(node,inputValues,modeKey,time,dt);\r
  }else if(node.type?.startsWith('fault_')){\r
    resolved={outputs:[applyPhysicalFaultNode(node,sanitizeSignalValue(inputValues[0]||0),time,modeKey)],middleValues:[]};\r
  }else if(node.type?.startsWith('instrument_')){\r
    resolved={outputs:[sanitizeSignalValue(inputValues[0]||0)],middleValues:[]};\r
  }else{\r
    resolved={outputs:[sanitizeSignalValue(inputValues[0]||0)],middleValues:[]};\r
  }\r
  finalizeResolvedNodeOutputs(node,nodeState,inputValues,resolved);\r
  context.visiting.delete(cacheKey);\r
  context.cache.set(cacheKey,resolved);\r
  return resolved;\r
}\r
\r
resolveNodeOutputs = function(nodeId,modeKey,time,dt,cache,visiting){\r
  const node=getNode(nodeId);\r
  if(node?.type==='middle_var_assign'){\r
    if(cache.has(nodeId)){\r
      return cache.get(nodeId);\r
    }\r
    const bucket=modeKey==='reference'?SIM.reference:SIM.actual;\r
    const nodeState=ensureNodeRuntime(bucket,node);\r
    const value=readMiddleAssignmentValue(node,modeKey,time,dt,cache,visiting);\r
    nodeState.lastAssignedValue=value;\r
    const resolved={outputs:[value],middleValues:[]};\r
    cache.set(nodeId,resolved);\r
    return resolved;\r
  }\r
  if(node?.type==='subsystem_block'){\r
    if(cache.has(nodeId)){\r
      return cache.get(nodeId);\r
    }\r
    const bucket=modeKey==='reference'?SIM.reference:SIM.actual;\r
    const nodeState=ensureNodeRuntime(bucket,node);\r
    if(visiting.has(nodeId)){\r
      return {\r
        outputs:nodeState.lastOutputs?.length?nodeState.lastOutputs:[nodeState.lastOutput||0],\r
        middleValues:nodeState.lastMiddleValues||[]\r
      };\r
    }\r
    visiting.add(nodeId);\r
    const inputValues=resolveNodeInputValues(node,modeKey,time,dt,cache,visiting);\r
    const resolved=finalizeResolvedNodeOutputs(\r
      node,\r
      nodeState,\r
      inputValues,\r
      evaluateSubsystemOutputsFromInputs(node,inputValues,modeKey,time,dt)\r
    );\r
    visiting.delete(nodeId);\r
    cache.set(nodeId,resolved);\r
    return resolved;\r
  }\r
  if(node?.type==='simulation_block'&&isPythonBoundFlowBlock(node)){\r
    if(cache.has(nodeId)){\r
      return cache.get(nodeId);\r
    }\r
    const bucket=modeKey==='reference'?SIM.reference:SIM.actual;\r
    const nodeState=ensureNodeRuntime(bucket,node);\r
    if(visiting.has(nodeId)){\r
      return {\r
        outputs:nodeState.lastOutputs?.length?nodeState.lastOutputs:[nodeState.lastOutput||0],\r
        middleValues:nodeState.lastMiddleValues||[]\r
      };\r
    }\r
    visiting.add(nodeId);\r
    const inputValues=resolveNodeInputValues(node,modeKey,time,dt,cache,visiting);\r
    const resolved=finalizeResolvedNodeOutputs(\r
      node,\r
      nodeState,\r
      inputValues,\r
      applyAssignedMiddleValues(node,nodeState,executeBoundFlowBlock(node,nodeState,inputValues,modeKey,time,dt))\r
    );\r
    visiting.delete(nodeId);\r
    cache.set(nodeId,resolved);\r
    return resolved;\r
  }\r
  const resolved=__legacyResolveNodeOutputsClean(nodeId,modeKey,time,dt,cache,visiting);\r
  if(node?.type==='simulation_block'&&isPythonBoundFlowBlock(node)){\r
    const bucket=modeKey==='reference'?SIM.reference:SIM.actual;\r
    return applyAssignedMiddleValues(node,ensureNodeRuntime(bucket,node),resolved);\r
  }\r
  return resolved;\r
};\r
\r
function getNodeFromCanvas(canvasId,nodeId){\r
  return getCanvasRecord(canvasId)?.nodes?.find(node=>node.id===nodeId)||null;\r
}\r
\r
function getIncomingEdgesForNodeFromCanvas(canvasId,nodeId){\r
  return (getCanvasRecord(canvasId)?.edges||[])\r
    .filter(edge=>edge.targetNodeId===nodeId)\r
    .sort((a,b)=>(a.targetPortIndex||0)-(b.targetPortIndex||0)||a.id.localeCompare(b.id));\r
}\r
\r
function findCanvasIdForNodeId(nodeId,preferredCanvasId=''){\r
  if(preferredCanvasId&&getNodeFromCanvas(preferredCanvasId,nodeId)){\r
    return preferredCanvasId;\r
  }\r
  return Object.keys(S.canvases||{}).find(canvasId=>getNodeFromCanvas(canvasId,nodeId))||'';\r
}\r
\r
function getCanvasTargetNodeForMiddleAssignment(node,canvasId){\r
  const targetNode=getNodeFromCanvas(canvasId,node?.props?.targetNodeId||'');\r
  if(!targetNode||targetNode.type!=='simulation_block'){\r
    return null;\r
  }\r
  const defs=getSimulationMiddleVarDefinitions(targetNode);\r
  const targetVar=defs.find(item=>item.name===node.props.targetVarName)||defs[0]||null;\r
  if(!targetVar){\r
    return null;\r
  }\r
  return {targetNode,targetVar};\r
}\r
\r
function resetAssignedMiddleValuesBucket(bucket){\r
  Object.values(bucket?.nodeStates||{}).forEach(nodeState=>{\r
    if(nodeState&&nodeState.assignedMiddleValues){\r
      nodeState.assignedMiddleValues={};\r
    }\r
  });\r
}\r
\r
function resolveNodeInputValuesInCanvas(node,canvasId,modeKey,time,dt,cache,visiting){\r
  const inputPorts=getNodePorts(node).inputs;\r
  if(!inputPorts.length){\r
    return [];\r
  }\r
  const incoming=getIncomingEdgesForNodeFromCanvas(canvasId,node.id);\r
  return inputPorts.map((_,portIndex)=>{\r
    const edge=incoming.find(item=>(item.targetPortIndex||0)===portIndex);\r
    if(!edge){\r
      return 0;\r
    }\r
    const upstream=resolveNodeOutputInCanvas(\r
      edge.sourceNodeId,\r
      canvasId,\r
      edge.sourcePortIndex||0,\r
      modeKey,\r
      time,\r
      dt,\r
      cache,\r
      visiting\r
    );\r
    return transmitEdgeSignal(edge,upstream,modeKey,time);\r
  });\r
}\r
\r
function readMiddleAssignmentValueInCanvas(node,canvasId,modeKey,time,dt,cache,visiting){\r
  if(node.props.assignMode==='input'){\r
    const inputValues=resolveNodeInputValuesInCanvas(node,canvasId,modeKey,time,dt,cache,visiting);\r
    return sanitizeSignalValue(inputValues[0]??0);\r
  }\r
  return sanitizeSignalValue(parseScalar(node.props.constantValue,0));\r
}\r
\r
function applyMiddleAssignmentsForCanvas(modeKey,canvasId,time,dt,cache,visiting){\r
  const bucket=modeKey==='reference'?SIM.reference:SIM.actual;\r
  (getCanvasRecord(canvasId)?.nodes||[])\r
    .filter(node=>node.type==='middle_var_assign')\r
    .forEach(node=>{\r
      const targetInfo=getCanvasTargetNodeForMiddleAssignment(node,canvasId);\r
      const nodeState=ensureNodeRuntime(bucket,node);\r
      if(!targetInfo){\r
        nodeState.lastAssignedValue=0;\r
        return;\r
      }\r
      const value=readMiddleAssignmentValueInCanvas(node,canvasId,modeKey,time,dt,cache,visiting);\r
      nodeState.lastAssignedValue=value;\r
      const targetState=ensureNodeRuntime(bucket,targetInfo.targetNode);\r
      if(!targetState.assignedMiddleValues){\r
        targetState.assignedMiddleValues={};\r
      }\r
      targetState.assignedMiddleValues[targetInfo.targetVar.name]=value;\r
    });\r
}\r
\r
function applyMiddleAssignmentsForAllCanvases(modeKey,time,dt,cache,visiting){\r
  Object.keys(S.canvases||{}).forEach(canvasId=>{\r
    applyMiddleAssignmentsForCanvas(modeKey,canvasId,time,dt,cache,visiting);\r
  });\r
}\r
\r
function resolveSubsystemInputBoundary(node,canvasId,modeKey,time,dt,cache,visiting){\r
  const childCanvas=getCanvasRecord(canvasId);\r
  const parentNodeId=childCanvas?.parentSubsystemNodeId||'';\r
  const parentCanvasId=findCanvasIdForNodeId(parentNodeId,S.rootCanvasId);\r
  const parentNode=getNodeFromCanvas(parentCanvasId,parentNodeId);\r
  if(!parentNode){\r
    return {outputs:[0],middleValues:[]};\r
  }\r
  const intf=ensureSubsystemInterface(parentNode);\r
  const inputIndex=intf.inputs.findIndex(item=>item.id===node.props?.interfacePortId);\r
  if(inputIndex<0){\r
    return {outputs:[0],middleValues:[]};\r
  }\r
  const parentInputValues=resolveNodeInputValuesInCanvas(parentNode,parentCanvasId,modeKey,time,dt,cache,visiting);\r
  return {outputs:[sanitizeSignalValue(parentInputValues[inputIndex]??0)],middleValues:[]};\r
}\r
\r
function resolveSubsystemBlockOutputs(node,modeKey,time,dt,cache,visiting){\r
  const childCanvasId=node.targetCanvasId||ensureSubsystemCanvasNode(node)?.id||'';\r
  const intf=ensureSubsystemInterface(node);\r
  const outputs=intf.outputs.map(item=>{\r
    const boundaryNodeId=getSubsystemBoundaryNodeId(node.id,'output',item.id);\r
    return resolveNodeOutputInCanvas(boundaryNodeId,childCanvasId,0,modeKey,time,dt,cache,visiting);\r
  });\r
  return {outputs:outputs.length?outputs:[0],middleValues:[]};\r
}\r
\r
function resolveNodeOutputsInCanvas(nodeId,canvasId,modeKey,time,dt,cache,visiting){\r
  if(cache.has(nodeId)){\r
    return cache.get(nodeId);\r
  }\r
  const effectiveCanvasId=findCanvasIdForNodeId(nodeId,canvasId);\r
  const node=getNodeFromCanvas(effectiveCanvasId,nodeId);\r
  if(!node){\r
    return {outputs:[0],middleValues:[]};\r
  }\r
  const bucket=modeKey==='reference'?SIM.reference:SIM.actual;\r
  const nodeState=ensureNodeRuntime(bucket,node);\r
  if(visiting.has(nodeId)){\r
    return {\r
      outputs:nodeState.lastOutputs?.length?nodeState.lastOutputs:[nodeState.lastOutput||0],\r
      middleValues:nodeState.lastMiddleValues||[]\r
    };\r
  }\r
  visiting.add(nodeId);\r
\r
  if(node.type==='middle_var_assign'){\r
    const value=readMiddleAssignmentValueInCanvas(node,effectiveCanvasId,modeKey,time,dt,cache,visiting);\r
    nodeState.lastAssignedValue=value;\r
    const resolved={outputs:[value],middleValues:[]};\r
    cache.set(nodeId,resolved);\r
    visiting.delete(nodeId);\r
    return resolved;\r
  }\r
\r
  const inputValues=resolveNodeInputValuesInCanvas(node,effectiveCanvasId,modeKey,time,dt,cache,visiting);\r
  let resolved={outputs:[0],middleValues:[]};\r
\r
  if(node.type==='signal_source'){\r
    resolved={outputs:[computeSourceSignal(node,time)],middleValues:[]};\r
  }else if(node.type==='subsystem_block'){\r
    resolved=resolveSubsystemBlockOutputs(node,modeKey,time,dt,cache,visiting);\r
  }else if(node.type==='subsystem_in_port'){\r
    resolved=resolveSubsystemInputBoundary(node,effectiveCanvasId,modeKey,time,dt,cache,visiting);\r
  }else if(node.type==='flow_block'){\r
    resolved={outputs:[sanitizeSignalValue(inputValues[0]||0)],middleValues:[]};\r
  }else if(node.type==='simulation_block'){\r
    resolved=isPythonBoundFlowBlock(node)\r
      ?applyAssignedMiddleValues(node,nodeState,executeBoundFlowBlock(node,nodeState,inputValues,modeKey,time,dt))\r
      :buildSimulationResult(node,nodeState,inputValues,modeKey,time,dt);\r
  }else if(node.type.startsWith('fault_')){\r
    resolved={outputs:[applyPhysicalFaultNode(node,sanitizeSignalValue(inputValues[0]||0),time,modeKey)],middleValues:[]};\r
  }else{\r
    resolved={outputs:[sanitizeSignalValue(inputValues[0]||0)],middleValues:[]};\r
  }\r
\r
  resolved.outputs=(resolved.outputs||[0]).map(sanitizeSignalValue);\r
  resolved.middleValues=(resolved.middleValues||[]).map(sanitizeSignalValue);\r
  nodeState.lastInputValues=inputValues.slice();\r
  nodeState.lastInput=inputValues[0]||0;\r
  nodeState.lastOutputs=resolved.outputs.slice();\r
  nodeState.lastMiddleValues=resolved.middleValues.slice();\r
  nodeState.lastOutput=nodeState.lastOutputs[0]||0;\r
  visiting.delete(nodeId);\r
  cache.set(nodeId,resolved);\r
  return resolved;\r
}\r
\r
function resolveNodeOutputInCanvas(nodeId,canvasId,outputIndex,modeKey,time,dt,cache,visiting){\r
  const effectiveCanvasId=findCanvasIdForNodeId(nodeId,canvasId);\r
  const node=getNodeFromCanvas(effectiveCanvasId,nodeId);\r
  const resolved=resolveNodeOutputsInCanvas(nodeId,effectiveCanvasId,modeKey,time,dt,cache,visiting);\r
  if(!node){\r
    return 0;\r
  }\r
  if(node.type==='simulation_block'){\r
    const mainCount=isPythonBoundFlowBlock(node)\r
      ?(node.pythonBinding?.portMapping?.outputs?.length||0)\r
      :(normalizeSimulationInterfaces(node.props),node.props.outputs.length);\r
    if(outputIndex<mainCount){\r
      return sanitizeSignalValue(resolved.outputs[outputIndex]??resolved.outputs[0]??0);\r
    }\r
    return sanitizeSignalValue(resolved.middleValues[outputIndex-mainCount]??resolved.outputs[0]??0);\r
  }\r
  return sanitizeSignalValue(resolved.outputs[outputIndex]??resolved.outputs[0]??0);\r
}\r
\r
resolveNodeOutputs = function(nodeId,modeKey,time,dt,cache,visiting){\r
  return resolveNodeOutputsInCanvas(nodeId,findCanvasIdForNodeId(nodeId,S.activeCanvasId),modeKey,time,dt,cache,visiting);\r
};\r
\r
resolveNodeOutput = function(nodeId,outputIndex,modeKey,time,dt,cache,visiting){\r
  return resolveNodeOutputInCanvas(nodeId,findCanvasIdForNodeId(nodeId,S.activeCanvasId),outputIndex,modeKey,time,dt,cache,visiting);\r
};\r
\r
recordScopeSamples = function(time,dt){\r
  const actualCache=new Map();\r
  const referenceCache=new Map();\r
  const actualVisiting=new Set();\r
  const referenceVisiting=new Set();\r
  resetAssignedMiddleValuesBucket(SIM.actual);\r
  resetAssignedMiddleValuesBucket(SIM.reference);\r
  applyMiddleAssignmentsForAllCanvases('actual',time,dt,actualCache,actualVisiting);\r
  applyMiddleAssignmentsForAllCanvases('reference',time,dt,referenceCache,referenceVisiting);\r
  getScopeNodes().forEach(scopeNode=>{\r
    const actualValue=resolveNodeSignal(scopeNode.id,'actual',time,dt,actualCache,actualVisiting);\r
    const referenceValue=resolveNodeSignal(scopeNode.id,'reference',time,dt,referenceCache,referenceVisiting);\r
    pushLimitedSample(SIM.actual.scopeSamples[scopeNode.id],{t:time,v:actualValue});\r
    pushLimitedSample(SIM.reference.scopeSamples[scopeNode.id],{t:time,v:referenceValue});\r
  });\r
};\r
\r
const __legacyOscilloscopeGetNodePorts = getNodePorts;\r
const __legacyOscilloscopeRenderModelNodes = renderModelNodes;\r
\r
getNodePorts = function(node){\r
  if(node?.type==='instrument_scope'){\r
    return {\r
      inputs:[\r
        {key:'ch1',label:'CH1',kind:'input',side:'left'},\r
        {key:'ch2',label:'CH2',kind:'input',side:'left'}\r
      ],\r
      outputs:[]\r
    };\r
  }\r
  return __legacyOscilloscopeGetNodePorts(node);\r
};\r
\r
renderModelNodes = function(){\r
  __legacyOscilloscopeRenderModelNodes();\r
  renderScopeWindows();\r
};\r
\r
openScope = function(scopeId=''){\r
  ensureScopeSelection(scopeId||S.selBlk);\r
  if(!SIM.activeScopeId){\r
    toast('当前没有可打开的示波器模块','w');\r
    return;\r
  }\r
  focusScopeWindow(SIM.activeScopeId);\r
  renderScopeWindows();\r
};\r
\r
focusScopeLatest = function(){\r
  if(!SIM.activeScopeId){return;}\r
  focusScopeWindow(SIM.activeScopeId);\r
  renderScopeWindows();\r
};\r
\r
function getModelPackageInspectorMeta(node){\r
  const binding=node?.pythonBinding||{};\r
  return {\r
    packageName:binding.sourcePackageName||S.activeModelPackage?.modelName||'未关联模型包',\r
    executionMode:binding.executionMode||'mock'\r
  };\r
}\r
\r
function ensureModelPackageStatusElement(){\r
  let status=document.getElementById('model-package-status');\r
  if(status){return status;}\r
  status=document.createElement('div');\r
  status.id='model-package-status';\r
  status.className='props-help';\r
  const panel=document.getElementById('pd');\r
  if(panel){\r
    panel.appendChild(status);\r
  }else{\r
    document.body.appendChild(status);\r
  }\r
  return status;\r
}\r
\r
function updateModelPackageStatus(node=null){\r
  const status=ensureModelPackageStatusElement();\r
  const panel=document.getElementById('pd');\r
  if(panel&&status.parentElement!==panel){\r
    panel.appendChild(status);\r
  }\r
  const meta=getModelPackageInspectorMeta(node&&node.type==='simulation_block'?node:null);\r
  status.textContent=\`当前模型包：\${meta.packageName} · 执行模式：\${meta.executionMode}\`;\r
}\r
\r
function buildSimulationBlockPackageRows(node){\r
  const meta=getModelPackageInspectorMeta(node);\r
  return \`\r
      <div class="prow"><span class="pk">来源模型包</span><span class="pv">\${escapeHtml(meta.packageName)}</span></div>\r
      <div class="prow"><span class="pk">执行模式</span><span class="pv">\${escapeHtml(meta.executionMode)}</span></div>\`;\r
}\r
\r
togCmp = function(){\r
  S.cmpMode=!S.cmpMode;\r
  renderScopeWindows();\r
};\r
\r
function getModelPackageInspectorMetaTask5(node){\r
  const binding=node?.pythonBinding||{};\r
  const hasPackageProvenance=Boolean(binding.sourcePackageId||binding.sourcePackageName);\r
  return {\r
    packageName:hasPackageProvenance?(binding.sourcePackageName||'未命名模型包'):'未关联模型包',\r
    executionMode:binding.executionMode||'mock'\r
  };\r
}\r
\r
function getModelPackageStatusMetaTask5(node){\r
  const binding=node?.pythonBinding||{};\r
  return {\r
    packageName:S.activeModelPackage?.modelName||'未加载模型包',\r
    executionMode:binding.executionMode||'mock'\r
  };\r
}\r
\r
getModelPackageInspectorMeta = getModelPackageInspectorMetaTask5;\r
\r
ensureModelPackageStatusElement = function(){\r
  let status=document.getElementById('model-package-status');\r
  if(status){return status;}\r
  status=document.createElement('div');\r
  status.id='model-package-status';\r
  status.className='props-help';\r
  const propsBody=document.querySelector('.props-body');\r
  if(propsBody){\r
    propsBody.appendChild(status);\r
  }else{\r
    document.body.appendChild(status);\r
  }\r
  return status;\r
};\r
\r
updateModelPackageStatus = function(node=null){\r
  const status=ensureModelPackageStatusElement();\r
  const propsBody=document.querySelector('.props-body');\r
  if(propsBody&&status.parentElement!==propsBody){\r
    propsBody.appendChild(status);\r
  }\r
  const meta=getModelPackageStatusMetaTask5(node&&node.type==='simulation_block'?node:null);\r
  status.textContent=\`当前模型包：\${meta.packageName} · 执行模式：\${meta.executionMode}\`;\r
};\r
\r
buildSimulationBlockPackageRows = function(node){\r
  const meta=getModelPackageInspectorMetaTask5(node);\r
  return \`\r
      <div class="prow"><span class="pk">来源模型包</span><span class="pv">\${escapeHtml(meta.packageName)}</span></div>\r
      <div class="prow"><span class="pk">执行模式</span><span class="pv">\${escapeHtml(meta.executionMode)}</span></div>\`;\r
};\r
\r
const __task5BuildSimulationBlockFields = buildSimulationBlockFields;\r
buildSimulationBlockFields = function(node){\r
  const fields=__task5BuildSimulationBlockFields(node);\r
  const binding=ensureFlowNodePythonBinding(node);\r
  if(!binding?.bound){\r
    return fields;\r
  }\r
  const packageMeta=getModelPackageInspectorMetaTask5(node);\r
  return fields\r
    .replace(\r
      /<div class="prow"><span class="pk">来源模型包<\\/span><span class="pv">[\\s\\S]*?<<\\/span><\\/div>/,\r
      \`<div class="prow"><span class="pk">来源模型包</span><span class="pv">\${escapeHtml(packageMeta.packageName)}<</span></div>\`\r
    )\r
    .replace(\r
      /<div class="prow"><span class="pk">执行模式<\\/span><span class="pv">[\\s\\S]*?<<\\/span><\\/div>/,\r
      \`<div class="prow"><span class="pk">执行模式</span><span class="pv">\${escapeHtml(packageMeta.executionMode)}<</span></div>\`\r
    );\r
};\r
\r
const __task5RenderPropertyPanel = renderPropertyPanel;\r
renderPropertyPanel = function(node){\r
  const result=__task5RenderPropertyPanel(node);\r
  updateModelPackageStatus(node&&node.type==='simulation_block'?node:null);\r
  return result;\r
};\r
\r
const __task5ApplyFlightModelPackage = window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__;\r
window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__ = function(pkg,prepared){\r
  const restored=prepared?.snapshot||pkg?.workbenchSnapshot||{};\r
  restoreSystemModelSnapshot(restored);\r
  S.availableFaultModels=cloneDefaults(prepared?.faultLibrary||pkg?.faultLibrary||[]);\r
  S.selectedFaultCatalogId=S.availableFaultModels[0]?.id||'';\r
  S.activeModelPackage={\r
    modelId:pkg?.modelId??prepared?.descriptor?.modelId??null,\r
    modelName:pkg?.modelName??prepared?.descriptor?.modelName??null,\r
    description:pkg?.description??prepared?.descriptor?.description??'',\r
    source:cloneDefaults(pkg?.source||{})\r
  };\r
  renderAll();\r
  updateModelPackageStatus();\r
  toast(\`飞控模型包“\${S.activeModelPackage.modelName||'未命名模型'}”已导入\`,'s');\r
  return {ok:true};\r
};\r
\r
function ensureScopeChannelBucket(bucket,scopeId){\r
  const current=bucket.scopeSamples[scopeId];\r
  if(!current||Array.isArray(current)){\r
    bucket.scopeSamples[scopeId]={ch1:[],ch2:[]};\r
  }else{\r
    current.ch1=current.ch1||[];\r
    current.ch2=current.ch2||[];\r
  }\r
  return bucket.scopeSamples[scopeId];\r
}\r
\r
function getScopeChannelKey(portIndex=0){\r
  return Number(portIndex)===1?'ch2':'ch1';\r
}\r
\r
function getSampleValue(sample){\r
  if(sample&&Number.isFinite(sample.actual)){return sample.actual;}\r
  if(sample&&Number.isFinite(sample.v)){return sample.v;}\r
  return 0;\r
}\r
\r
function formatScopeMetric(value){\r
  const numeric=Number(value);\r
  return Number.isFinite(numeric)?numeric.toFixed(2):'--';\r
}\r
\r
function summarizeScopeChannel(samples){\r
  if(!samples?.length){\r
    return {connected:false,current:'--',min:'--',max:'--',pp:'--'};\r
  }\r
  const values=samples.map(getSampleValue);\r
  const min=Math.min(...values);\r
  const max=Math.max(...values);\r
  return {\r
    connected:true,\r
    current:formatScopeMetric(values.at(-1)),\r
    min:formatScopeMetric(min),\r
    max:formatScopeMetric(max),\r
    pp:formatScopeMetric(max-min)\r
  };\r
}\r
\r
function getScopeChannelSignalName(scopeNode,channelKey){\r
  const targetPortIndex=channelKey==='ch2'?1:0;\r
  const incoming=getIncomingEdgesForNode(scopeNode.id).find(edge=>(edge.targetPortIndex||0)===targetPortIndex);\r
  if(!incoming){return '未连接';}\r
  const sourceNode=getNode(incoming.sourceNodeId);\r
  if(!sourceNode){return '未知信号';}\r
  const outputPort=getNodePorts(sourceNode).outputs[incoming.sourcePortIndex||0];\r
  return outputPort\r
    ?\`\${sourceNode.props?.name||'信号'} · \${outputPort.label}\`\r
    :(sourceNode.props?.name||'信号');\r
}\r
\r
function prepareScopeCanvas(canvas){\r
  const ratio=window.devicePixelRatio||1;\r
  const rect=canvas.getBoundingClientRect();\r
  const width=Math.max(Math.round(rect.width||canvas.clientWidth||300),1);\r
  const height=Math.max(Math.round(rect.height||canvas.clientHeight||150),1);\r
  canvas.width=width*ratio;\r
  canvas.height=height*ratio;\r
  const ctx=canvas.getContext('2d');\r
  if(ctx?.setTransform){\r
    ctx.setTransform(ratio,0,0,ratio,0,0);\r
  }\r
  return {ctx,width,height};\r
}\r
\r
function drawScopeTrace(ctx,series,color,getX,getY){\r
  if(!ctx||!series.length){return;}\r
  ctx.strokeStyle=color;\r
  ctx.lineWidth=1.5;\r
  ctx.beginPath();\r
  series.forEach((sample,index)=>{\r
    const x=getX(sample.t,index,series.length);\r
    const y=getY(getSampleValue(sample));\r
    if(index===0){ctx.moveTo(x,y);}else{ctx.lineTo(x,y);}\r
  });\r
  ctx.stroke();\r
}\r
\r
function drawScopeWindow(scopeId){\r
  const scopeEl=document.querySelector(\`.scope-window[data-scope-id="\${scopeId}"]\`);\r
  if(!scopeEl){return;}\r
  const canvas=scopeEl.querySelector('[data-scope-role="wave-canvas"]');\r
  if(!canvas){return;}\r
  const {ctx,width,height}=prepareScopeCanvas(canvas);\r
  if(!ctx){return;}\r
  const scopeWindow=ensureScopeWindow(scopeId);\r
  const samples=ensureScopeChannelBucket(SIM.actual,scopeId);\r
  const ch1Series=samples.ch1.slice(-240);\r
  const ch2Series=samples.ch2.slice(-240);\r
  const visibleSeries=scopeWindow.mode==='ch1'\r
    ?ch1Series\r
    :scopeWindow.mode==='ch2'\r
      ?ch2Series\r
      :ch1Series.concat(ch2Series);\r
  if(!visibleSeries.length){\r
    drawScopeEmpty(ctx,width,height,'连接 CH1 或 CH2 后开始仿真');\r
    return;\r
  }\r
  drawScopeGrid(ctx,width,height);\r
  const values=visibleSeries.map(getSampleValue);\r
  let minValue=Math.min(...values);\r
  let maxValue=Math.max(...values);\r
  if(Math.abs(maxValue-minValue)<1e-6){\r
    maxValue+=1;\r
    minValue-=1;\r
  }else{\r
    const padding=(maxValue-minValue)*0.18;\r
    maxValue+=padding;\r
    minValue-=padding;\r
  }\r
  const startTime=Math.min(...visibleSeries.map(sample=>sample.t||0));\r
  const endTime=Math.max(...visibleSeries.map(sample=>sample.t||0),startTime+SIM.stepSize);\r
  const span=Math.max(endTime-startTime,SIM.stepSize,0.001);\r
  const getX=time=>18+((time-startTime)/span)*(width-36);\r
  const getY=value=>14+(maxValue-value)/(maxValue-minValue)*(height-28);\r
  const zeroY=getY(0);\r
  if(zeroY>=10&&zeroY<=height-10){\r
    ctx.strokeStyle='#c2d6ea';\r
    ctx.lineWidth=1;\r
    ctx.beginPath();\r
    ctx.moveTo(0,zeroY);\r
    ctx.lineTo(width,zeroY);\r
    ctx.stroke();\r
  }\r
  if(scopeWindow.mode!=='ch2'){\r
    drawScopeTrace(ctx,ch1Series,'#1d6fbf',getX,getY);\r
  }\r
  if(scopeWindow.mode!=='ch1'){\r
    drawScopeTrace(ctx,ch2Series,'#16a34a',getX,getY);\r
  }\r
  ctx.fillStyle='#7a9ab8';\r
  ctx.font='10px JetBrains Mono,monospace';\r
  ctx.fillText(\`\${startTime.toFixed(1)}s\`,6,height-6);\r
  ctx.fillText(\`\${endTime.toFixed(1)}s\`,Math.max(width-44,6),height-6);\r
}\r
\r
function setScopeDisplayMode(scopeId,mode){\r
  const scopeWindow=ensureScopeWindow(scopeId);\r
  scopeWindow.mode=mode;\r
  renderScopeWindows();\r
}\r
\r
function startScopeWindowDrag(event,scopeId){\r
  const scopeWindow=ensureScopeWindow(scopeId);\r
  focusScopeWindow(scopeId);\r
  SCOPE_WINDOW_DRAG.active=true;\r
  SCOPE_WINDOW_DRAG.engaged=false;\r
  SCOPE_WINDOW_DRAG.pointerId=Number.isFinite(Number(event.pointerId))?Number(event.pointerId):null;\r
  SCOPE_WINDOW_DRAG.scopeId=scopeId;\r
  SCOPE_WINDOW_DRAG.startX=event.clientX;\r
  SCOPE_WINDOW_DRAG.startY=event.clientY;\r
  SCOPE_WINDOW_DRAG.originX=scopeWindow.x;\r
  SCOPE_WINDOW_DRAG.originY=scopeWindow.y;\r
  if(event.stopPropagation){event.stopPropagation();}\r
  if(event.preventDefault){event.preventDefault();}\r
}\r
\r
function bindScopeWindowDragListeners(){\r
  if(window.__GZ_SCOPE_WINDOW_DRAG_BOUND__){return;}\r
  window.__GZ_SCOPE_WINDOW_DRAG_BOUND__=true;\r
  const runtimeListeners=getRuntimeListenerStore();\r
  runtimeListeners.scopeWindowDragPointerMove=event=>{\r
    if(!SCOPE_WINDOW_DRAG.active){return;}\r
    if(SCOPE_WINDOW_DRAG.pointerId!==null&&event.pointerId!==SCOPE_WINDOW_DRAG.pointerId){return;}\r
    const scopeWindow=SIM.scopeWindows?.[SCOPE_WINDOW_DRAG.scopeId];\r
    if(!scopeWindow){return;}\r
    if(!SCOPE_WINDOW_DRAG.engaged){\r
      if(!movedBeyondPointerThreshold(SCOPE_WINDOW_DRAG.startX,SCOPE_WINDOW_DRAG.startY,event.clientX,event.clientY)){return;}\r
      SCOPE_WINDOW_DRAG.engaged=true;\r
    }\r
    if(!scopeWindow){return;}\r
    scopeWindow.x=Math.round(SCOPE_WINDOW_DRAG.originX+(event.clientX-SCOPE_WINDOW_DRAG.startX));\r
    scopeWindow.y=Math.round(SCOPE_WINDOW_DRAG.originY+(event.clientY-SCOPE_WINDOW_DRAG.startY));\r
    clampScopeWindowPosition(scopeWindow);\r
    renderScopeWindows();\r
  };\r
  runtimeListeners.scopeWindowDragPointerUp=event=>{\r
    if(!SCOPE_WINDOW_DRAG.active){return;}\r
    if(SCOPE_WINDOW_DRAG.pointerId!==null&&event.pointerId!==SCOPE_WINDOW_DRAG.pointerId){return;}\r
    SCOPE_WINDOW_DRAG.active=false;\r
    SCOPE_WINDOW_DRAG.engaged=false;\r
    SCOPE_WINDOW_DRAG.pointerId=null;\r
    SCOPE_WINDOW_DRAG.scopeId='';\r
  };\r
  window.addEventListener('pointermove',runtimeListeners.scopeWindowDragPointerMove);\r
  window.addEventListener('pointerup',runtimeListeners.scopeWindowDragPointerUp);\r
  window.addEventListener('mousemove',runtimeListeners.scopeWindowDragPointerMove);\r
  window.addEventListener('mouseup',runtimeListeners.scopeWindowDragPointerUp);\r
  document.addEventListener('pointermove',runtimeListeners.scopeWindowDragPointerMove);\r
  document.addEventListener('pointerup',runtimeListeners.scopeWindowDragPointerUp);\r
  document.addEventListener('mousemove',runtimeListeners.scopeWindowDragPointerMove);\r
  document.addEventListener('mouseup',runtimeListeners.scopeWindowDragPointerUp);\r
}\r
\r
const __dualScopeRecordScopeSamples = recordScopeSamples;\r
const __dualScopeGetNodePorts = getNodePorts;\r
const __dualScopeRenderModelNodes = renderModelNodes;\r
const __dualScopeRunSimulationTick = runSimulationTick;\r
\r
recordScopeSamples = function(time,dt){\r
  const actualCache=new Map();\r
  const referenceCache=new Map();\r
  const actualVisiting=new Set();\r
  const referenceVisiting=new Set();\r
  clearAssignedMiddleValues(SIM.actual);\r
  clearAssignedMiddleValues(SIM.reference);\r
  applyMiddleAssignmentsForMode('actual',time,dt,actualCache,actualVisiting);\r
  applyMiddleAssignmentsForMode('reference',time,dt,referenceCache,referenceVisiting);\r
  getScopeNodes().forEach(scopeNode=>{\r
    const actualBucket=ensureScopeChannelBucket(SIM.actual,scopeNode.id);\r
    const referenceBucket=ensureScopeChannelBucket(SIM.reference,scopeNode.id);\r
    getIncomingEdgesForNode(scopeNode.id).forEach(edge=>{\r
      const channelKey=getScopeChannelKey(edge.targetPortIndex||0);\r
      const actualValue=resolveNodeOutput(edge.sourceNodeId,edge.sourcePortIndex||0,'actual',time,dt,actualCache,actualVisiting);\r
      const referenceValue=resolveNodeOutput(edge.sourceNodeId,edge.sourcePortIndex||0,'reference',time,dt,referenceCache,referenceVisiting);\r
      pushLimitedSample(actualBucket[channelKey],{t:time,actual:actualValue});\r
      pushLimitedSample(referenceBucket[channelKey],{t:time,actual:referenceValue});\r
    });\r
  });\r
  getAuxInstrumentNodes().forEach(instrumentNode=>{\r
    const incoming=getIncomingEdgesForNode(instrumentNode.id)[0];\r
    if(!incoming){return;}\r
    if(!SIM.actual.instrumentSamples){SIM.actual.instrumentSamples={};}\r
    if(!SIM.reference.instrumentSamples){SIM.reference.instrumentSamples={};}\r
    if(!Array.isArray(SIM.actual.instrumentSamples[instrumentNode.id])){\r
      SIM.actual.instrumentSamples[instrumentNode.id]=[];\r
    }\r
    if(!Array.isArray(SIM.reference.instrumentSamples[instrumentNode.id])){\r
      SIM.reference.instrumentSamples[instrumentNode.id]=[];\r
    }\r
    const actualValue=resolveNodeOutput(incoming.sourceNodeId,incoming.sourcePortIndex||0,'actual',time,dt,actualCache,actualVisiting);\r
    const referenceValue=resolveNodeOutput(incoming.sourceNodeId,incoming.sourcePortIndex||0,'reference',time,dt,referenceCache,referenceVisiting);\r
    pushLimitedSample(SIM.actual.instrumentSamples[instrumentNode.id],{t:time,actual:actualValue,reference:referenceValue});\r
    pushLimitedSample(SIM.reference.instrumentSamples[instrumentNode.id],{t:time,actual:referenceValue,reference:referenceValue});\r
  });\r
};\r
\r
getNodePorts = function(node){\r
  if(node?.type==='instrument_scope'){\r
    return {\r
      inputs:[\r
        {key:'ch1',label:'CH1',kind:'input',side:'left'},\r
        {key:'ch2',label:'CH2',kind:'input',side:'left'}\r
      ],\r
      outputs:[]\r
    };\r
  }\r
  return __dualScopeGetNodePorts(node);\r
};\r
\r
renderScopeWindows = function(){\r
  const host=document.getElementById('scope-window-layer');\r
  if(!host){return;}\r
  bindScopeWindowDragListeners();\r
  host.innerHTML=listOpenScopeWindows()\r
    .sort((left,right)=>left.z-right.z)\r
    .map(scopeWindow=>{\r
      clampScopeWindowPosition(scopeWindow);\r
      const node=getNode(scopeWindow.scopeId);\r
      const bucket=ensureScopeChannelBucket(SIM.actual,scopeWindow.scopeId);\r
      const ch1=summarizeScopeChannel(bucket.ch1);\r
      const ch2=summarizeScopeChannel(bucket.ch2);\r
      const ch1Metrics={\r
        current:formatScopeMetric(ch1.current),\r
        min:formatScopeMetric(ch1.min),\r
        max:formatScopeMetric(ch1.max),\r
        pp:formatScopeMetric(ch1.pp)\r
      };\r
      const ch2Metrics={\r
        current:formatScopeMetric(ch2.current),\r
        min:formatScopeMetric(ch2.min),\r
        max:formatScopeMetric(ch2.max),\r
        pp:formatScopeMetric(ch2.pp)\r
      };\r
      const ch1Signal=getScopeChannelSignalName(node,'ch1');\r
      const ch2Signal=getScopeChannelSignalName(node,'ch2');\r
      const ch1TagLabel=\`CH1: \${ch1Signal}\`;\r
      const ch2TagLabel=\`CH2: \${ch2Signal}\`;\r
      const mode=scopeWindow.mode||'overlay';\r
      return \`\r
        <section class="scope-window" data-scope-id="\${scopeWindow.scopeId}" style="left:\${scopeWindow.x}px;top:\${scopeWindow.y}px;z-index:\${scopeWindow.z}">\r
          <header class="scope-window__header" data-scope-drag-handle="\${scopeWindow.scopeId}">\r
            <div class="scope-window__header-main">\r
              <div class="scope-window__identity">\r
                <div class="scope-window__title">\${escapeHtml(node?.props?.name||node?.name||'示波器')}</div>\r
              </div>\r
              <div class="scope-window__toolbar">\r
                <button type="button" class="scope-window__mode\${mode==='overlay'?' is-active':''}" data-scope-mode="overlay" data-scope-id="\${scopeWindow.scopeId}">叠加</button>\r
                <button type="button" class="scope-window__mode\${mode==='ch1'?' is-active':''}" data-scope-mode="ch1" data-scope-id="\${scopeWindow.scopeId}">CH1</button>\r
                <button type="button" class="scope-window__mode\${mode==='ch2'?' is-active':''}" data-scope-mode="ch2" data-scope-id="\${scopeWindow.scopeId}">CH2</button>\r
                <button type="button" class="scope-window__close" data-scope-close="\${scopeWindow.scopeId}">关闭 ×</button>\r
              </div>\r
            </div>\r
          </header>\r
          <div class="scope-window__signal-band">\r
            <div class="scope-window__signals">\r
              <span class="scope-window__tag" data-scope-tag="ch1" data-connected="\${ch1.connected}" title="\${escapeHtml(ch1TagLabel)}">\r
                <span class="scope-window__tag-prefix">CH1:</span>\r
                <span class="scope-window__tag-text">\${escapeHtml(ch1Signal)}</span>\r
              </span>\r
              <span class="scope-window__tag" data-scope-tag="ch2" data-connected="\${ch2.connected}" title="\${escapeHtml(ch2TagLabel)}">\r
                <span class="scope-window__tag-prefix">CH2:</span>\r
                <span class="scope-window__tag-text">\${escapeHtml(ch2Signal)}</span>\r
              </span>\r
            </div>\r
          </div>\r
          <div class="scope-window__plot">\r
            <canvas data-scope-role="wave-canvas"></canvas>\r
          </div>\r
          <div class="scope-window__stats scope-window__stats--strip">\r
            <article class="scope-readout scope-readout--strip" data-scope-channel="ch1" data-connected="\${ch1.connected}">\r
              <div class="scope-readout__title">CH1</div>\r
              <div class="scope-readout__metric"><span class="scope-readout__metric-label">当前</span><strong class="scope-readout__metric-value" data-field="current">\${ch1Metrics.current}</strong></div>\r
              <div class="scope-readout__metric"><span class="scope-readout__metric-label">最小</span><strong class="scope-readout__metric-value" data-field="min">\${ch1Metrics.min}</strong></div>\r
              <div class="scope-readout__metric"><span class="scope-readout__metric-label">最大</span><strong class="scope-readout__metric-value" data-field="max">\${ch1Metrics.max}</strong></div>\r
              <div class="scope-readout__metric"><span class="scope-readout__metric-label">峰峰</span><strong class="scope-readout__metric-value" data-field="pp">\${ch1Metrics.pp}</strong></div>\r
            </article>\r
            <article class="scope-readout scope-readout--strip" data-scope-channel="ch2" data-connected="\${ch2.connected}">\r
              <div class="scope-readout__title">CH2</div>\r
              <div class="scope-readout__metric"><span class="scope-readout__metric-label">当前</span><strong class="scope-readout__metric-value" data-field="current">\${ch2Metrics.current}</strong></div>\r
              <div class="scope-readout__metric"><span class="scope-readout__metric-label">最小</span><strong class="scope-readout__metric-value" data-field="min">\${ch2Metrics.min}</strong></div>\r
              <div class="scope-readout__metric"><span class="scope-readout__metric-label">最大</span><strong class="scope-readout__metric-value" data-field="max">\${ch2Metrics.max}</strong></div>\r
              <div class="scope-readout__metric"><span class="scope-readout__metric-label">峰峰</span><strong class="scope-readout__metric-value" data-field="pp">\${ch2Metrics.pp}</strong></div>\r
            </article>\r
          </div>\r
        </section>\`;\r
    })\r
    .join('');\r
  host.querySelectorAll('.scope-window').forEach(el=>{\r
    el.addEventListener('pointerdown',event=>{\r
      if(event.target.closest('[data-scope-close],[data-scope-mode],[data-scope-drag-handle]')){return;}\r
      const scopeWindow=focusScopeWindow(el.dataset.scopeId||'');\r
      el.style.zIndex=scopeWindow.z;\r
    });\r
  });\r
  host.querySelectorAll('[data-scope-drag-handle]').forEach(header=>{\r
    header.addEventListener('pointerdown',event=>{\r
      startScopeWindowDrag(event,header.dataset.scopeDragHandle||'');\r
    });\r
  });\r
  host.querySelectorAll('[data-scope-close]').forEach(btn=>{\r
    btn.addEventListener('click',event=>{\r
      event.stopPropagation();\r
      closeScopeWindow(btn.dataset.scopeClose||'');\r
    });\r
  });\r
  host.querySelectorAll('[data-scope-mode]').forEach(btn=>{\r
    btn.addEventListener('click',event=>{\r
      event.stopPropagation();\r
      setScopeDisplayMode(btn.dataset.scopeId||'',btn.dataset.scopeMode||'overlay');\r
    });\r
  });\r
  listOpenScopeWindows().forEach(scopeWindow=>drawScopeWindow(scopeWindow.scopeId));\r
};\r
\r
renderModelNodes = function(){\r
  __dualScopeRenderModelNodes();\r
  renderCanvasBreadcrumbs();\r
  S.modelNodes.forEach(node=>{\r
    if(node.type!=='subsystem_block'){return;}\r
    ensureSubsystemCanvasNode(node);\r
    const el=document.getElementById('b-' + node.id);\r
    if(!el){return;}\r
    const kicker=el.querySelector('.blk-kicker');\r
    const sub=el.querySelector('.blk-sub');\r
    el.title='双击进入子画布';\r
    if(kicker){kicker.textContent='子系统';}\r
    if(sub){sub.textContent=node.targetCanvasId?'双击进入子画布':'子画布未创建';}\r
    if(el.dataset.subsystemNavBound!=='1'){\r
      el.dataset.subsystemNavBound='1';\r
      el.addEventListener('dblclick',event=>{\r
        event.stopPropagation();\r
        openSubsystemCanvas(node.id);\r
      });\r
    }\r
  });\r
  renderScopeWindows();\r
};\r
\r
runSimulationTick = function(){\r
  const completed=__dualScopeRunSimulationTick();\r
  if(listOpenScopeWindows().length){\r
    renderScopeWindows();\r
  }\r
  return completed;\r
};\r
\r
openScope = function(scopeId=''){\r
  ensureScopeSelection(scopeId||S.selBlk);\r
  if(!SIM.activeScopeId){\r
    toast('当前没有可打开的示波器模块','w');\r
    return;\r
  }\r
  focusScopeWindow(SIM.activeScopeId);\r
  renderScopeWindows();\r
};\r
\r
focusScopeLatest = function(){\r
  if(!SIM.activeScopeId){return;}\r
  focusScopeWindow(SIM.activeScopeId);\r
  renderScopeWindows();\r
};\r
\r
togCmp = function(){\r
  S.cmpMode=!S.cmpMode;\r
  const scopeId=SIM.activeScopeId||getScopeNodes()[0]?.id||'';\r
  if(scopeId){\r
    setScopeDisplayMode(scopeId,S.cmpMode?'overlay':'ch1');\r
  }\r
};\r
\r
const __task3BuildNodeSubtitle = buildNodeSubtitle;\r
buildNodeSubtitle = function(node){\r
  if(!node){return '';}\r
  const props=node.props||{};\r
  const faultNote=node.injectedFault?' · 电气故障':'';\r
  switch(node.type){\r
    case 'signal_source':\r
      return \`\${props.waveType||'信号'} · 幅值 \${props.amplitude||'1'} · \${props.outputFormat||'标量'}\`;\r
    case 'flow_block':\r
      return \`\${props.inputName||'输入'} / \${props.inputFormat||'标量'} → \${props.outputName||'输出'} / \${props.outputFormat||'标量'}\${faultNote}\`;\r
    case 'simulation_block':\r
      normalizeSimulationInterfaces(props);\r
      return \`\${props.inputs.length}输入 · \${props.outputs.length}输出 · \${props.middleVars.length}中间变量 · \${props.moduleType||'函数块'}\${faultNote}\`;\r
    case 'subsystem_block':{\r
      const intf=ensureSubsystemInterface(node);\r
      return \`\${intf.inputs.length} 输入 · \${intf.outputs.length} 输出 · 双击进入子画布\`;\r
    }\r
    case 'subsystem_in_port':\r
      return \`父层输入映射 · \${props.portType||'标量'}\`;\r
    case 'subsystem_out_port':\r
      return \`父层输出映射 · \${props.portType||'标量'}\`;\r
    case 'instrument_scope':\r
      return \`\${props.instrumentType||'波形监测'} · 双击查看波形\`;\r
    case 'instrument_spectrum':\r
    case 'instrument_logger':\r
      return \`\${props.instrumentType||'仪器'} · \${props.sampleRate||'-'}\`;\r
    case 'link_normal':\r
    case 'link_can':\r
      return \`\${props.sourcePort||'源端口'} → \${props.targetPort||'目标端口'}\`;\r
    default:\r
      return __task3BuildNodeSubtitle(node);\r
  }\r
};\r
\r
const __task3GetNodePorts = getNodePorts;\r
getNodePorts = function(node){\r
  if(node?.type==='subsystem_block'){\r
    const intf=ensureSubsystemInterface(node);\r
    return {\r
      inputs:intf.inputs.map((item,index)=>({\r
        key:\`subsystem-input-\${item.id}\`,\r
        label:item.name,\r
        kind:'input',\r
        side:'left',\r
        meta:item,\r
        index\r
      })),\r
      outputs:intf.outputs.map((item,index)=>({\r
        key:\`subsystem-output-\${item.id}\`,\r
        label:item.name,\r
        kind:'output',\r
        side:'right',\r
        meta:item,\r
        index\r
      }))\r
    };\r
  }\r
  if(node?.type==='subsystem_in_port'){\r
    return {\r
      inputs:[],\r
      outputs:[{\r
        key:\`boundary-out-\${node.props?.interfacePortId||node.id}\`,\r
        label:node.props?.name||'子系统输入',\r
        kind:'output',\r
        side:'right'\r
      }]\r
    };\r
  }\r
  if(node?.type==='subsystem_out_port'){\r
    return {\r
      inputs:[{\r
        key:\`boundary-in-\${node.props?.interfacePortId||node.id}\`,\r
        label:node.props?.name||'子系统输出',\r
        kind:'input',\r
        side:'left'\r
      }],\r
      outputs:[]\r
    };\r
  }\r
  return __task3GetNodePorts(node);\r
};\r
\r
const __task3CreateNode = createNode;\r
createNode = function(type,rawX,rawY){\r
  __task3CreateNode(type,rawX,rawY);\r
  if(type!=='subsystem_block'){\r
    return;\r
  }\r
  const node=getNode(S.selBlk)||S.modelNodes[S.modelNodes.length-1];\r
  if(!node||node.type!=='subsystem_block'){\r
    return;\r
  }\r
  ensureSubsystemInterface(node);\r
  syncSubsystemBoundaryNodes(node);\r
  renderModelNodes();\r
  renderPropertyPanel(node);\r
};\r
\r
const __task3OpenSubsystemCanvas = openSubsystemCanvas;\r
openSubsystemCanvas = function(nodeId){\r
  const node=getNode(nodeId);\r
  if(node?.type==='subsystem_block'){\r
    ensureSubsystemInterface(node);\r
    syncSubsystemBoundaryNodes(node);\r
  }\r
  return __task3OpenSubsystemCanvas(nodeId);\r
};\r
\r
function removeSubsystemCanvasTree(canvasId){\r
  const canvas=S.canvases?.[canvasId];\r
  if(!canvas){return;}\r
  (canvas.nodes||[])\r
    .filter(node=>node.type==='subsystem_block'&&node.targetCanvasId)\r
    .forEach(node=>removeSubsystemCanvasTree(node.targetCanvasId));\r
  delete S.canvases[canvasId];\r
  S.canvasTrail=(S.canvasTrail||[]).filter(item=>item!==canvasId);\r
  if(S.activeCanvasId===canvasId){\r
    S.activeCanvasId=S.rootCanvasId;\r
  }\r
}\r
\r
const __task3DeleteSelectedNode = deleteSelectedNode;\r
deleteSelectedNode = function(){\r
  const node=getNode(S.selBlk);\r
  if(node&&isSubsystemBoundaryNodeType(node.type)){\r
    toast('边界端口请在父层子系统块中调整', 'w');\r
    return;\r
  }\r
  const childCanvasId=node?.type==='subsystem_block'?node.targetCanvasId:'';\r
  const result=__task3DeleteSelectedNode();\r
  if(childCanvasId){\r
    removeSubsystemCanvasTree(childCanvasId);\r
  }\r
  return result;\r
};\r
\r
function renderTask3SubsystemPropertyPanel(node){\r
  const pe=document.getElementById('pe');\r
  const pd=document.getElementById('pd');\r
  const meta=COMPONENT_LIBRARY[node.type];\r
  const canvas=ensureSubsystemCanvasNode(node);\r
  ensureSubsystemInterface(node);\r
  pe.style.display='none';\r
  pd.style.display='block';\r
  pd.innerHTML=\`\r
    <div class="pgroup">\r
      <div class="props-title">\${escapeHtml(node.props.name)}</div>\r
      <div class="props-sub">\${meta.label} · 节点 \${node.id.replace('node-','#')}</div>\r
    </div>\r
    <div class="pgroup">\r
      <div class="pglbl">当前状态</div>\r
      <div class="prow"><span class="pk">节点类别<</span><span class="pv">\${meta.label}<</span></div>\r
      <div class="prow"><span class="pk">子画布 ID</span><span class="pv">\${escapeHtml(node.targetCanvasId||canvas?.id||'--')}<</span></div>\r
    </div>\r
    <div class="props-form">\r
      \${buildSubsystemBlockFields(node)}\r
      <div class="props-actions">\r
        <button class="props-secondary" onclick="openSubsystemCanvas('\${node.id}')">进入子系统</button>\r
        <button class="props-save" onclick="saveSelectedNode()">保存设置</button>\r
        <button class="props-danger" onclick="deleteSelectedNode()">删除模块</button>\r
      </div>\r
    </div>\`;\r
}\r
\r
function renderTask3BoundaryPortPanel(node){\r
  const pe=document.getElementById('pe');\r
  const pd=document.getElementById('pd');\r
  const meta=COMPONENT_LIBRARY[node.type];\r
  const role=node.type==='subsystem_in_port'?'输入边界':'输出边界';\r
  pe.style.display='none';\r
  pd.style.display='block';\r
  pd.innerHTML=\`\r
    <div class="pgroup">\r
      <div class="props-title">\${escapeHtml(node.props?.name||meta.label)}</div>\r
      <div class="props-sub">\${meta.label} · 节点 \${node.id.replace('node-','#')}</div>\r
    </div>\r
    <div class="pgroup">\r
      <div class="pglbl">边界映射</div>\r
      <div class="prow"><span class="pk">边界类型<</span><span class="pv">\${role}<</span></div>\r
      <div class="prow"><span class="pk">接口 ID</span><span class="pv">\${escapeHtml(node.props?.interfacePortId||'--')}<</span></div>\r
      <div class="prow"><span class="pk">信号类型</span><span class="pv">\${escapeHtml(node.props?.portType||'标量')}<</span></div>\r
    </div>\r
    <div class="pgroup">\r
      <div class="props-help">边界端口由父层子系统接口自动生成。请返回父层子系统块编辑接口，不要直接修改这里。</div>\r
    </div>\`;\r
}\r
\r
const __task3RenderPropertyPanel = renderPropertyPanel;\r
renderPropertyPanel = function(node){\r
  if(node?.type==='subsystem_block'){\r
    renderTask3SubsystemPropertyPanel(node);\r
    return;\r
  }\r
  if(node&&isSubsystemBoundaryNodeType(node.type)){\r
    renderTask3BoundaryPortPanel(node);\r
    return;\r
  }\r
  return __task3RenderPropertyPanel(node);\r
};\r
\r
const __task3SaveSelectedNode = saveSelectedNode;\r
saveSelectedNode = function(){\r
  const node=getNode(S.selBlk);\r
  if(node?.type==='subsystem_block'){\r
    node.props.name=document.getElementById('prop-name')?.value.trim()||node.props.name;\r
    node.props.description=document.getElementById('prop-description')?.value.trim()||'';\r
    ensureSubsystemInterface(node);\r
    const inputCount=clampInterfaceCount(document.getElementById('subsystem-input-count')?.value,SUBSYSTEM_INTERFACE_LIMITS.inputs);\r
    const outputCount=clampInterfaceCount(document.getElementById('subsystem-output-count')?.value,SUBSYSTEM_INTERFACE_LIMITS.outputs);\r
    node.props.interface.inputs=normalizeSubsystemInterfaceList(readSubsystemInterfaceRows('input').slice(0,inputCount),'输入',inputCount);\r
    node.props.interface.outputs=normalizeSubsystemInterfaceList(readSubsystemInterfaceRows('output').slice(0,outputCount),'输出',outputCount);\r
    const canvas=syncSubsystemBoundaryNodes(node);\r
    pruneInvalidEdgesForNode(node);\r
    if(canvas){\r
      canvas.name=node.props.name;\r
    }\r
    markTopologyDirty('system');\r
    renderModelNodes();\r
    renderPropertyPanel(node);\r
    syncConfigTargets(node.id);\r
    updateUI();\r
    return;\r
  }\r
  if(node&&isSubsystemBoundaryNodeType(node.type)){\r
    toast('边界端口请在父层子系统块中调整', 'w');\r
    return;\r
  }\r
  return __task3SaveSelectedNode();\r
};\r
\r
const __task3RenderModelNodes = renderModelNodes;\r
renderModelNodes = function(){\r
  S.modelNodes.forEach(node=>{\r
    if(node.type==='subsystem_block'){\r
      ensureSubsystemInterface(node);\r
      syncSubsystemBoundaryNodes(node);\r
    }\r
  });\r
  __task3RenderModelNodes();\r
};\r
\r
Object.assign(window,{\r
  createNode,\r
  renderModelNodes,\r
  openSubsystemCanvas,\r
  goToRootCanvas,\r
  navigateToCanvas,\r
  syncSubsystemInterfaceCounts,\r
  refreshMiddleAssignEditor,\r
  startScopeWindowDrag,\r
  __GZ_STATE__:S,\r
  __GZ_SIM__:SIM\r
});\r
\r
updateUI();\r
\r
if(!Array.isArray(S.selectedNodeIds)){\r
  S.selectedNodeIds=[];\r
}\r
if(typeof S.selectionAnchorId!=='string'){\r
  S.selectionAnchorId='';\r
}\r
\r
function cloneIfPresentTask5(value){\r
  return value===undefined||value===null?value:cloneDefaults(value);\r
}\r
\r
function getTask5SelectedNodeIds(){\r
  const next=[...new Set((Array.isArray(S.selectedNodeIds)?S.selectedNodeIds:[]).filter(id=>typeof id==='string'&&!!getNode(id)))];\r
  S.selectedNodeIds=next;\r
  if(S.selectionAnchorId&&!next.includes(S.selectionAnchorId)){\r
    S.selectionAnchorId=next[next.length-1]||'';\r
  }\r
  if(!next.length){\r
    S.selBlk=null;\r
  }else if(!next.includes(S.selBlk)){\r
    S.selBlk=next[next.length-1];\r
  }\r
  return next;\r
}\r
\r
function clearTask5NodeSelectionState(){\r
  S.selectedNodeIds=[];\r
  S.selectionAnchorId='';\r
}\r
\r
function applyTask5NodeSelection(ids,focusId=''){\r
  const next=[...new Set((Array.isArray(ids)?ids:[]).filter(id=>typeof id==='string'&&!!getNode(id)))];\r
  S.selectedNodeIds=next;\r
  S.selectionAnchorId=focusId&&next.includes(focusId)?focusId:(next[next.length-1]||'');\r
  S.selBlk=next.length?(S.selectionAnchorId||next[next.length-1]):null;\r
  S.selEdge=null;\r
  return next;\r
}\r
\r
function eventWantsTask5MultiSelect(event){\r
  return !!(event&&(event.ctrlKey||event.metaKey||event.shiftKey));\r
}\r
\r
function getTask5PortInfo(node,direction,index){\r
  const info=getPortInfo(node,direction,index);\r
  if(info){return info;}\r
  return {\r
    kind:direction==='input'?'input':'output',\r
    label:'',\r
    meta:{type:'any'}\r
  };\r
}\r
\r
function getTask5PortMeta(node,direction,index){\r
  const info=getTask5PortInfo(node,direction,index);\r
  return buildEdgePortMeta(info);\r
}\r
\r
function getTask5PortLabel(node,direction,index,fallback=''){\r
  const info=getTask5PortInfo(node,direction,index);\r
  return getPortDisplayName(info)||info.label||fallback;\r
}\r
\r
function normalizeTask5InterfaceType(type){\r
  return PORT_FORMATS.includes(type)?type:'标量';\r
}\r
\r
function computeTask5SelectionBounds(nodes){\r
  const left=Math.min(...nodes.map(node=>node.x));\r
  const top=Math.min(...nodes.map(node=>node.y));\r
  const right=Math.max(...nodes.map(node=>node.x+node.w));\r
  const bottom=Math.max(...nodes.map(node=>node.y+node.h));\r
  return {left,top,right,bottom,width:right-left,height:bottom-top};\r
}\r
\r
function makeTask5Edge(lineType,sourceNodeId,targetNodeId,sourcePortIndex,targetPortIndex,sourceMeta,targetMeta,injectedFault){\r
  const edge={\r
    id:\`edge-\${++S.edgeSeq}\`,\r
    lineType:lineType||'normal',\r
    sourceNodeId,\r
    targetNodeId,\r
    sourcePortIndex:Number.isFinite(Number(sourcePortIndex))?Number(sourcePortIndex):0,\r
    targetPortIndex:Number.isFinite(Number(targetPortIndex))?Number(targetPortIndex):0\r
  };\r
  if(sourceMeta){\r
    edge.sourcePort=cloneDefaults(sourceMeta);\r
    edge.sourcePortMeta=cloneDefaults(sourceMeta);\r
  }\r
  if(targetMeta){\r
    edge.targetPort=cloneDefaults(targetMeta);\r
    edge.targetPortMeta=cloneDefaults(targetMeta);\r
  }\r
  if(injectedFault){\r
    edge.injectedFault=cloneDefaults(injectedFault);\r
  }\r
  return edge;\r
}\r
\r
function renderTask5MultiSelectionPanel(ids=getTask5SelectedNodeIds()){\r
  const pe=document.getElementById('pe');\r
  const pd=document.getElementById('pd');\r
  if(!pe||!pd){return;}\r
  const nodes=ids.map(id=>getNode(id)).filter(Boolean);\r
  const names=nodes.slice(0,6).map(node=>escapeHtml(node.props?.name||node.id)).join(' · ');\r
  const moreCount=Math.max(0,nodes.length-6);\r
  pe.style.display='none';\r
  pd.style.display='block';\r
  pd.innerHTML=\`\r
    <div class="pgroup">\r
      <div class="props-title">已选择 \${nodes.length} 个模块</div>\r
      <div class="props-sub">可将当前选择封装成一个新的子系统块，父层仅保留边界接口。</div>\r
    </div>\r
    <div class="pgroup">\r
      <div class="pglbl">当前选择</div>\r
      <div class="props-help">\${names}\${moreCount?\` 等 \${nodes.length} 个模块\`:''}</div>\r
    </div>\r
    <div class="props-actions">\r
      <button class="props-secondary" onclick="wrapSelectionIntoSubsystem()">封装为子系统</button>\r
      <button class="props-danger" onclick="deleteSelectedNodeGroup()">删除所选模块</button>\r
      <button class="props-secondary" onclick="clearCanvasSelection()">清空选择</button>\r
    </div>\`;\r
}\r
\r
function updateTask5WrapButtonState(){\r
  const btn=document.getElementById('canvas-wrap-selection');\r
  if(!btn){return;}\r
  const validIds=getTask5SelectedNodeIds().filter(id=>{\r
    const node=getNode(id);\r
    return node&&!isSubsystemBoundaryNodeType(node.type);\r
  });\r
  btn.disabled=validIds.length===0;\r
  btn.textContent=validIds.length>1?\`封装 \${validIds.length} 个模块\`:validIds.length===1?'封装为子系统':'封装为子系统';\r
}\r
\r
function bindTask5SelectionGestures(){\r
  document.querySelectorAll('.blk[id^="b-"]').forEach(el=>{\r
    if(el.dataset.task5SelectionBound==='1'){return;}\r
    el.dataset.task5SelectionBound='1';\r
    const nodeId=el.id.replace(/^b-/,'');\r
    el.addEventListener('pointerdown',event=>{\r
      if(!eventWantsTask5MultiSelect(event)){return;}\r
      if(event.target.closest('.node-port')){return;}\r
      event.stopImmediatePropagation();\r
    },true);\r
    el.addEventListener('click',event=>{\r
      if(!eventWantsTask5MultiSelect(event)){return;}\r
      if(event.target.closest('.node-port')){return;}\r
      event.preventDefault();\r
      event.stopImmediatePropagation();\r
      selectNode(nodeId,{multi:true});\r
    },true);\r
  });\r
}\r
\r
function deleteSelectedNodeGroup(){\r
  const ids=getTask5SelectedNodeIds();\r
  if(ids.length<=1){\r
    deleteCurrentSelection();\r
    return;\r
  }\r
  const nodes=ids.map(id=>getNode(id)).filter(Boolean);\r
  if(!nodes.length){\r
    clearCanvasSelection();\r
    return;\r
  }\r
  if(nodes.some(node=>isSubsystemBoundaryNodeType(node.type))){\r
    toast('边界端口请在父层子系统块中调整','w');\r
    return;\r
  }\r
  const removedNodeIds=new Set(nodes.map(node=>node.id));\r
  const removedEdgeIds=new Set(\r
    S.modelEdges\r
      .filter(edge=>removedNodeIds.has(edge.sourceNodeId)||removedNodeIds.has(edge.targetNodeId))\r
      .map(edge=>edge.id)\r
  );\r
  const childCanvasIds=nodes\r
    .filter(node=>node.type==='subsystem_block'&&node.targetCanvasId)\r
    .map(node=>node.targetCanvasId)\r
    .filter(Boolean);\r
\r
  S.modelNodes=S.modelNodes.filter(node=>!removedNodeIds.has(node.id));\r
  S.modelEdges=S.modelEdges.filter(edge=>!removedEdgeIds.has(edge.id));\r
  S.faultedBlks=S.faultedBlks.filter(id=>!removedNodeIds.has(id));\r
  if(S.injectTargetId&&removedNodeIds.has(S.injectTargetId)){\r
    S.injectTargetId='';\r
  }\r
  if(S.protocolInjectTargetId&&removedEdgeIds.has(S.protocolInjectTargetId)){\r
    S.protocolInjectTargetId='';\r
    S.protocolInjectSelectionMode='';\r
    S.protocolInjectSelectionId='';\r
  }\r
  if(S.pendingConnection&&removedNodeIds.has(S.pendingConnection.sourceNodeId)){\r
    clearPendingConnection();\r
  }\r
  childCanvasIds.forEach(removeSubsystemCanvasTree);\r
  clearTask5NodeSelectionState();\r
  S.selBlk=null;\r
  S.selEdge=null;\r
  markTopologyDirty('system');\r
  syncAllPythonInputConnectionState();\r
  renderModelNodes();\r
  renderPropertyPanel(null);\r
  syncConfigTargets();\r
  updateUI();\r
  toast(\`已删除 \${nodes.length} 个模块\`,'s');\r
}\r
\r
function wrapSelectionIntoSubsystem(){\r
  const canvas=getActiveCanvasRecord();\r
  if(!canvas){return null;}\r
  const selectedNodes=getTask5SelectedNodeIds().map(id=>getNode(id)).filter(Boolean);\r
  if(!selectedNodes.length){\r
    toast('请先选中至少一个模块','w');\r
    return null;\r
  }\r
  if(selectedNodes.some(node=>isSubsystemBoundaryNodeType(node.type))){\r
    toast('边界端口请在父层子系统块中调整','w');\r
    return null;\r
  }\r
  const selectedById=new Map(selectedNodes.map(node=>[node.id,node]));\r
  const selectedIds=new Set(selectedById.keys());\r
  const originalEdges=(canvas.edges||[]).map(edge=>cloneDefaults(edge));\r
  const internalEdges=[];\r
  const incomingEdges=[];\r
  const outgoingEdges=[];\r
  const untouchedEdges=[];\r
\r
  originalEdges.forEach(edge=>{\r
    const sourceSelected=selectedIds.has(edge.sourceNodeId);\r
    const targetSelected=selectedIds.has(edge.targetNodeId);\r
    if(sourceSelected&&targetSelected){\r
      internalEdges.push(edge);\r
    }else if(!sourceSelected&&!targetSelected){\r
      untouchedEdges.push(edge);\r
    }else if(!sourceSelected&&targetSelected){\r
      incomingEdges.push(edge);\r
    }else{\r
      outgoingEdges.push(edge);\r
    }\r
  });\r
\r
  const subsystemMeta=COMPONENT_LIBRARY.subsystem_block;\r
  const nextSubsystemIndex=getNodeTypeCount('subsystem_block');\r
  const selectionBounds=computeTask5SelectionBounds(selectedNodes);\r
  const subsystemProps=cloneDefaults(subsystemMeta.defaults);\r
  subsystemProps.name=\`子系统 \${nextSubsystemIndex}\`;\r
  subsystemProps.description=\`包含 \${selectedNodes.length} 个内部模块\`;\r
  const subsystemNode={\r
    id:\`node-\${++S.nodeSeq}\`,\r
    type:'subsystem_block',\r
    x:clamp(Math.round((selectionBounds.left+selectionBounds.right-subsystemMeta.width)/2),CANVAS_STAGE.nodePadding,CANVAS_STAGE.width-subsystemMeta.width-CANVAS_STAGE.nodePadding),\r
    y:clamp(Math.round((selectionBounds.top+selectionBounds.bottom-subsystemMeta.height)/2),CANVAS_STAGE.nodeMinY,CANVAS_STAGE.height-subsystemMeta.height-CANVAS_STAGE.nodePadding),\r
    w:subsystemMeta.width,\r
    h:subsystemMeta.height,\r
    props:subsystemProps,\r
    pythonBinding:null\r
  };\r
\r
  const inputInterfaces=incomingEdges.map((edge,index)=>{\r
    const targetNode=selectedById.get(edge.targetNodeId);\r
    const targetMeta=cloneIfPresentTask5(edge.targetPortMeta)||cloneIfPresentTask5(edge.targetPort)||getTask5PortMeta(targetNode,'input',edge.targetPortIndex||0);\r
    return {\r
      id:\`input-\${index+1}\`,\r
      name:getTask5PortLabel(targetNode,'input',edge.targetPortIndex||0,\`输入 \${index+1}\`),\r
      type:normalizeTask5InterfaceType(targetMeta?.type),\r
      order:index,\r
      edge\r
    };\r
  });\r
\r
  const outputGroups=new Map();\r
  outgoingEdges.forEach(edge=>{\r
    const key=\`\${edge.sourceNodeId}:\${edge.sourcePortIndex||0}\`;\r
    if(!outputGroups.has(key)){\r
      const sourceNode=selectedById.get(edge.sourceNodeId);\r
      const sourceMeta=cloneIfPresentTask5(edge.sourcePortMeta)||cloneIfPresentTask5(edge.sourcePort)||getTask5PortMeta(sourceNode,'output',edge.sourcePortIndex||0);\r
      outputGroups.set(key,{\r
        sourceNodeId:edge.sourceNodeId,\r
        sourcePortIndex:edge.sourcePortIndex||0,\r
        sourceMeta,\r
        name:getTask5PortLabel(sourceNode,'output',edge.sourcePortIndex||0,\`输出 \${outputGroups.size+1}\`),\r
        type:normalizeTask5InterfaceType(sourceMeta?.type),\r
        edges:[]\r
      });\r
    }\r
    outputGroups.get(key).edges.push(edge);\r
  });\r
\r
  subsystemNode.props.interface={\r
    inputs:normalizeSubsystemInterfaceList(inputInterfaces.map(({edge,...item})=>item),'输入',0),\r
    outputs:normalizeSubsystemInterfaceList(\r
      [...outputGroups.values()].map((group,index)=>({\r
        id:\`output-\${index+1}\`,\r
        name:group.name,\r
        type:group.type,\r
        order:index\r
      })),\r
      '输出',\r
      0\r
    )\r
  };\r
\r
  canvas.nodes=canvas.nodes.filter(node=>!selectedIds.has(node.id));\r
  canvas.nodes.push(subsystemNode);\r
\r
  const childCanvas=ensureSubsystemCanvasNode(subsystemNode);\r
  childCanvas.nodes=selectedNodes;\r
  childCanvas.edges=internalEdges.map(edge=>cloneDefaults(edge));\r
  syncSubsystemBoundaryNodes(subsystemNode);\r
\r
  const childInputNodes=new Map(\r
    childCanvas.nodes\r
      .filter(node=>node.type==='subsystem_in_port')\r
      .map(node=>[node.props.interfacePortId,node])\r
  );\r
  const childOutputNodes=new Map(\r
    childCanvas.nodes\r
      .filter(node=>node.type==='subsystem_out_port')\r
      .map(node=>[node.props.interfacePortId,node])\r
  );\r
\r
  const nextRootEdges=untouchedEdges.map(edge=>cloneDefaults(edge));\r
\r
  subsystemNode.props.interface.inputs.forEach((item,index)=>{\r
    const mapping=inputInterfaces[index];\r
    if(!mapping){return;}\r
    const edge=mapping.edge;\r
    const targetNode=selectedById.get(edge.targetNodeId);\r
    const shellTargetMeta=getTask5PortMeta(subsystemNode,'input',item.order);\r
    const sourceMeta=cloneIfPresentTask5(edge.sourcePortMeta)||cloneIfPresentTask5(edge.sourcePort)||getTask5PortMeta(getNode(edge.sourceNodeId),'output',edge.sourcePortIndex||0);\r
    nextRootEdges.push(\r
      makeTask5Edge(\r
        edge.lineType,\r
        edge.sourceNodeId,\r
        subsystemNode.id,\r
        edge.sourcePortIndex||0,\r
        item.order,\r
        sourceMeta,\r
        shellTargetMeta,\r
        edge.injectedFault\r
      )\r
    );\r
\r
    const boundaryNode=childInputNodes.get(item.id);\r
    if(boundaryNode&&targetNode){\r
      childCanvas.edges.push(\r
        makeTask5Edge(\r
          'normal',\r
          boundaryNode.id,\r
          edge.targetNodeId,\r
          0,\r
          edge.targetPortIndex||0,\r
          getTask5PortMeta(boundaryNode,'output',0),\r
          cloneIfPresentTask5(edge.targetPortMeta)||cloneIfPresentTask5(edge.targetPort)||getTask5PortMeta(targetNode,'input',edge.targetPortIndex||0)\r
        )\r
      );\r
    }\r
  });\r
\r
  subsystemNode.props.interface.outputs.forEach((item,index)=>{\r
    const group=[...outputGroups.values()][index];\r
    if(!group){return;}\r
    const sourceNode=selectedById.get(group.sourceNodeId);\r
    const boundaryNode=childOutputNodes.get(item.id);\r
    if(boundaryNode&&sourceNode){\r
      childCanvas.edges.push(\r
        makeTask5Edge(\r
          'normal',\r
          group.sourceNodeId,\r
          boundaryNode.id,\r
          group.sourcePortIndex||0,\r
          0,\r
          cloneIfPresentTask5(group.sourceMeta)||getTask5PortMeta(sourceNode,'output',group.sourcePortIndex||0),\r
          getTask5PortMeta(boundaryNode,'input',0)\r
        )\r
      );\r
    }\r
    group.edges.forEach(edge=>{\r
      nextRootEdges.push(\r
        makeTask5Edge(\r
          edge.lineType,\r
          subsystemNode.id,\r
          edge.targetNodeId,\r
          item.order,\r
          edge.targetPortIndex||0,\r
          getTask5PortMeta(subsystemNode,'output',item.order),\r
          cloneIfPresentTask5(edge.targetPortMeta)||cloneIfPresentTask5(edge.targetPort)||getTask5PortMeta(getNode(edge.targetNodeId),'input',edge.targetPortIndex||0),\r
          edge.injectedFault\r
        )\r
      );\r
    });\r
  });\r
\r
  canvas.edges=nextRootEdges;\r
  clearPendingConnection();\r
  markTopologyDirty('system');\r
  syncAllPythonInputConnectionState();\r
  selectNode(subsystemNode.id);\r
  syncConfigTargets(subsystemNode.id);\r
  updateUI();\r
  toast(\`已将 \${selectedNodes.length} 个模块封装为子系统\`,'s');\r
  return subsystemNode;\r
}\r
\r
const __task5FinalSelectNode = selectNode;\r
selectNode = function(id,options={}){\r
  const node=getNode(id);\r
  if(!node){return;}\r
  if(!options.multi){\r
    applyTask5NodeSelection([id],id);\r
    __task5FinalSelectNode(id);\r
    document.querySelectorAll('.props-tab').forEach(button=>{\r
      const tab=button.dataset.propsTab||'overview';\r
      button.classList.toggle('is-active',tab==='overview');\r
      button.setAttribute('aria-selected',tab==='overview'?'true':'false');\r
    });\r
    return;\r
  }\r
  const next=new Set(getTask5SelectedNodeIds());\r
  if(next.has(id)){\r
    next.delete(id);\r
  }else{\r
    next.add(id);\r
  }\r
  const nextIds=[...next];\r
  if(!nextIds.length){\r
    clearTask5NodeSelectionState();\r
    S.selBlk=null;\r
    S.selEdge=null;\r
    renderModelNodes();\r
    renderPropertyPanel(null);\r
    updateUI();\r
    return;\r
  }\r
  applyTask5NodeSelection(nextIds,id);\r
  renderModelNodes();\r
  if(nextIds.length>1){\r
    renderTask5MultiSelectionPanel(nextIds);\r
  }else{\r
    __task5FinalSelectNode(nextIds[0]);\r
  }\r
  updateUI();\r
};\r
\r
const __task5FinalSelectEdge = selectEdge;\r
selectEdge = function(id){\r
  clearTask5NodeSelectionState();\r
  const result=__task5FinalSelectEdge(id);\r
  document.querySelectorAll('.props-tab').forEach(button=>{\r
    const tab=button.dataset.propsTab||'overview';\r
    button.classList.toggle('is-active',tab==='overview');\r
    button.setAttribute('aria-selected',tab==='overview'?'true':'false');\r
  });\r
  return result;\r
};\r
\r
const __task5FinalClearCanvasSelection = clearCanvasSelection;\r
clearCanvasSelection = function(){\r
  clearTask5NodeSelectionState();\r
  return __task5FinalClearCanvasSelection();\r
};\r
\r
const __task5FinalRestoreSystemModelSnapshot = restoreSystemModelSnapshot;\r
restoreSystemModelSnapshot = function(snapshot){\r
  clearTask5NodeSelectionState();\r
  return __task5FinalRestoreSystemModelSnapshot(snapshot);\r
};\r
\r
const __task5FinalDeleteCurrentSelection = deleteCurrentSelection;\r
deleteCurrentSelection = function(){\r
  if(getTask5SelectedNodeIds().length>1){\r
    deleteSelectedNodeGroup();\r
    return;\r
  }\r
  __task5FinalDeleteCurrentSelection();\r
};\r
\r
const __task5FinalRenderPropertyPanel = renderPropertyPanel;\r
renderPropertyPanel = function(node){\r
  const ids=getTask5SelectedNodeIds();\r
  if(ids.length>1){\r
    renderTask5MultiSelectionPanel(ids);\r
    return;\r
  }\r
  return __task5FinalRenderPropertyPanel(node);\r
};\r
\r
const __task5FinalRenderModelNodes = renderModelNodes;\r
renderModelNodes = function(){\r
  __task5FinalRenderModelNodes();\r
  const selectedIds=new Set(getTask5SelectedNodeIds());\r
  document.querySelectorAll('.blk[id^="b-"]').forEach(el=>{\r
    const nodeId=el.id.replace(/^b-/,'');\r
    if(selectedIds.has(nodeId)){\r
      el.classList.add('sel','sel-multi');\r
    }else{\r
      el.classList.remove('sel-multi');\r
    }\r
  });\r
  bindTask5SelectionGestures();\r
  updateTask5WrapButtonState();\r
};\r
\r
const __task5FinalUpdateUI = updateUI;\r
updateUI = function(){\r
  __task5FinalUpdateUI();\r
  updateTask5WrapButtonState();\r
};\r
\r
Object.assign(window,{\r
  selectNode,\r
  clearCanvasSelection,\r
  deleteCurrentSelection,\r
  deleteSelectedNodeGroup,\r
  wrapSelectionIntoSubsystem,\r
  renderModelNodes,\r
  updateUI\r
});\r
\r
if(typeof S.workspaceSource!=='string'){\r
  S.workspaceSource='';\r
}\r
\r
function resetSimulationRuntimeForBlankWorkspace(){\r
  if(typeof SIM==='undefined'){return;}\r
  if(typeof clearSimLoop==='function'){\r
    clearSimLoop();\r
  }\r
  SIM.inited=false;\r
  SIM.running=false;\r
  SIM.paused=false;\r
  SIM.hasSamples=false;\r
  SIM.time=0;\r
  SIM.stepIndex=0;\r
  SIM.activeScopeId='';\r
  SIM.datasetName=document.getElementById('sim-name')?.value?.trim?.()||'test';\r
  SIM.actual=createRuntimeBucket();\r
  SIM.reference=createRuntimeBucket();\r
  SIM.scopeWindows={};\r
  SIM.scopeWindowZ=10;\r
}\r
\r
function applyBlankWorkspaceState(toastMessage=''){\r
  if(typeof clearTask5NodeSelectionState==='function'){\r
    clearTask5NodeSelectionState();\r
  }\r
  S.rootCanvasId='canvas-root';\r
  S.activeCanvasId='canvas-root';\r
  S.canvasTrail=['canvas-root'];\r
  S.canvases={\r
    'canvas-root':createEmptyCanvasRecord('canvas-root','顶层',null)\r
  };\r
  S.nodeSeq=0;\r
  S.edgeSeq=0;\r
  S.activeLineType='normal';\r
  S.selBlk=null;\r
  S.selEdge=null;\r
  S.selTpls=[];\r
  S.pendingConnection=null;\r
  S.injectTargetId='';\r
  S.injectSelectionMode='';\r
  S.injectSelectionId='';\r
  S.protocolInjectTargetId='';\r
  S.protocolInjectSelectionMode='';\r
  S.protocolInjectSelectionId='';\r
  S.activeModelPackage=null;\r
  S.faultedBlks=[];\r
  S.sysLoaded=true;\r
  S.systemSaved=false;\r
  S.simDone=false;\r
  S.step=1;\r
  S.workspaceSource='blank';\r
  initializeFaultCatalog();\r
  resetSimulationRuntimeForBlankWorkspace();\r
  document.getElementById('empty')?.style?.setProperty('display','none');\r
  document.getElementById('diagram')?.classList?.add('on');\r
  handleCanvasZoomReset();\r
  clearPendingConnection();\r
  renderCanvasBreadcrumbs();\r
  renderModelNodes();\r
  renderPropertyPanel(null);\r
  setConnectionTool('normal');\r
  syncConfigTargets('');\r
  renderFaultCatalogList();\r
  renderScopeWindows();\r
  updateModelPackageStatus();\r
  updateUI();\r
  if(toastMessage){\r
    toast(toastMessage,'s');\r
  }\r
}\r
\r
function doCreateBlankWorkspace(){\r
  applyBlankWorkspaceState('空白模型工作区已创建');\r
}\r
\r
function doResetWorkspace(){\r
  const confirmed=window.confirm('确认重置当前画布吗？此操作会清空当前系统及其子系统内容。');\r
  if(!confirmed){\r
    return false;\r
  }\r
  applyBlankWorkspaceState('画布已重置为空白模型工作区');\r
  return true;\r
}\r
\r
const __blankWorkspaceRestoreSystemModelSnapshot = restoreSystemModelSnapshot;\r
restoreSystemModelSnapshot = function(snapshot){\r
  const result=__blankWorkspaceRestoreSystemModelSnapshot(snapshot);\r
  if(!S.workspaceSource&&!S.activeModelPackage){\r
    S.workspaceSource='legacy';\r
  }\r
  updateModelPackageStatus();\r
  updateUI();\r
  return result;\r
};\r
\r
const __blankWorkspaceApplyFlightModelPackage = window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__;\r
window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__ = function(pkg,prepared){\r
  const result=__blankWorkspaceApplyFlightModelPackage(pkg,prepared);\r
  if(result?.ok!==false){\r
    S.workspaceSource='imported';\r
    updateModelPackageStatus();\r
    updateUI();\r
  }\r
  return result;\r
};\r
\r
const __blankWorkspaceDoSaveSys = doSaveSys;\r
doSaveSys = function(){\r
  if(!S.sysLoaded){\r
    toast('请先新建空白模型或导入系统模型','w');\r
    return;\r
  }\r
  return __blankWorkspaceDoSaveSys();\r
};\r
\r
const __blankWorkspaceDoImportFault = doImportFault;\r
doImportFault = function(){\r
  if(!S.sysLoaded){\r
    toast('请先新建空白模型或导入系统模型','w');\r
    return;\r
  }\r
  return __blankWorkspaceDoImportFault();\r
};\r
\r
const __blankWorkspaceValidateSimulationTopology = validateSimulationTopology;\r
validateSimulationTopology = function(){\r
  if(!S.sysLoaded){\r
    toast('请先新建空白模型或导入系统模型','w');\r
    return false;\r
  }\r
  return __blankWorkspaceValidateSimulationTopology();\r
};\r
\r
const __blankWorkspaceUpdateModelPackageStatus = updateModelPackageStatus;\r
updateModelPackageStatus = function(node=null){\r
  const status=ensureModelPackageStatusElement();\r
  const propsBody=document.querySelector('.props-body');\r
  if(propsBody&&status.parentElement!==propsBody){\r
    propsBody.appendChild(status);\r
  }\r
  if(S.workspaceSource==='blank'&&!S.activeModelPackage){\r
    status.textContent='当前模型包：空白模型工作区';\r
    return;\r
  }\r
  if(!S.sysLoaded&&!S.activeModelPackage){\r
    status.textContent='当前模型包：未加载';\r
    return;\r
  }\r
  return __blankWorkspaceUpdateModelPackageStatus(node);\r
};\r
\r
const __blankWorkspaceUpdateUI = updateUI;\r
updateUI = function(){\r
  __blankWorkspaceUpdateUI();\r
  const statusEl=document.getElementById('stxt');\r
  if(!statusEl){return;}\r
  const hasSimulationStatus=typeof SIM!=='undefined'&&(\r
    (SIM.running&&!SIM.paused)||\r
    SIM.paused||\r
    (SIM.hasSamples&&S.step===3)\r
  );\r
  if(hasSimulationStatus){\r
    return;\r
  }\r
  if(!S.sysLoaded){\r
    statusEl.textContent='就绪 · 可导入系统模型或新建空白模型';\r
    return;\r
  }\r
  if(S.workspaceSource==='blank'){\r
    if(!S.modelNodes.length){\r
      statusEl.textContent='空白模型工作区 · 请拖拽组件到画布';\r
    }else if(canInitializeSimulation()){\r
      statusEl.textContent='空白模型工作区 · 当前链路已可运行，可直接初始化仿真';\r
    }else{\r
      statusEl.textContent='空白模型工作区 · 单击模块后可在右侧保存设置';\r
    }\r
    return;\r
  }\r
  if(S.workspaceSource==='legacy'&&!S.modelNodes.length){\r
    statusEl.textContent='就绪 · 已恢复本地系统模型';\r
  }\r
};\r
\r
window.doCreateBlankWorkspace=doCreateBlankWorkspace;\r
window.doResetWorkspace=doResetWorkspace;\r
window.doSaveSys=doSaveSys;\r
window.doImportFault=doImportFault;\r
\r
Object.assign(window,{\r
  doCreateBlankWorkspace,\r
  doResetWorkspace,\r
  doSaveSys,\r
  doImportFault,\r
  validateSimulationTopology,\r
  updateUI\r
});\r
\r
const __signalRoutingBuildNodeSubtitle = buildNodeSubtitle;\r
const __signalRoutingBuildFlowBlockFields = buildFlowBlockFields;\r
\r
buildFlowBlockFields = function(node){\r
  return \`\r
    <div class="pgroup">\r
      <div class="pglbl">信号适配配置</div>\r
      <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
      <div class="props-field"><label>输入名称</label><input id="prop-inputName" value="\${escapeHtml(node.props.inputName||'输入信号')}"></div>\r
      <div class="props-row">\r
        <div class="props-field"><label>输入类型</label><select id="prop-inputFormat">\${buildSelectOptions(SIGNAL_ADAPTER_FORMATS,node.props.inputFormat||'标量')}</select></div>\r
        <div class="props-field"><label>输出类型</label><select id="prop-outputFormat">\${buildSelectOptions(SIGNAL_ADAPTER_FORMATS,node.props.outputFormat||'标量')}</select></div>\r
      </div>\r
      <div class="props-field"><label>输出名称</label><input id="prop-outputName" value="\${escapeHtml(node.props.outputName||'输出信号')}"></div>\r
      <div class="props-help">信号适配块只负责统一端口名称、类型和格式，不承担 Python 脚本执行职责。</div>\r
    </div>\`;\r
};\r
\r
buildNodeSubtitle = function(node){\r
  if(!node?.props){\r
    return __signalRoutingBuildNodeSubtitle(node);\r
  }\r
  const props=node.props;\r
  const faultNote=node.injectedFault?' / 已注入故障':'';\r
  if(node.type==='flow_block'){\r
    return \`\${props.inputName||'输入信号'} / \${props.inputFormat||'标量'} -> \${props.outputName||'输出信号'} / \${props.outputFormat||'标量'} / 类型适配\${faultNote}\`;\r
  }\r
  if(node.type==='gain_block'){\r
    normalizeSignalUtilityNode(node);\r
    return \`系数 \${props.gain||'1.0'} / \${props.inputFormat||'标量'} -> \${props.outputFormat||'标量'}\${faultNote}\`;\r
  }\r
  if(node.type==='sum_block'){\r
    normalizeSignalUtilityNode(node);\r
    return \`\${props.inputCount||2} 路输入 / \${props.signs?.join(' ')||'+ +'} / \${props.outputFormat||'标量'}\${faultNote}\`;\r
  }\r
  if(node.type==='mux_block'){\r
    normalizeSignalUtilityNode(node);\r
    return \`\${props.inputCount||2} 路输入打包 / 输出 \${props.outputFormat||'向量'}\${faultNote}\`;\r
  }\r
  return __signalRoutingBuildNodeSubtitle(node);\r
};\r
\r
const __signalRoutingGetNodePorts = getNodePorts;\r
getNodePorts = function(node){\r
  if(node?.type==='gain_block'){\r
    normalizeSignalUtilityNode(node);\r
    return {\r
      inputs:[{key:'gain-input',label:'输入',kind:'input',side:'left'}],\r
      outputs:[{key:'gain-output',label:'输出',kind:'output',side:'right'}]\r
    };\r
  }\r
  if(node?.type==='sum_block'){\r
    normalizeSignalUtilityNode(node);\r
    return {\r
      inputs:Array.from({length:node.props.inputCount},(_,index)=>({\r
        key:\`sum-input-\${index}\`,\r
        label:\`输入 \${index+1}\`,\r
        kind:'input',\r
        side:'left'\r
      })),\r
      outputs:[{key:'sum-output',label:'和',kind:'output',side:'right'}]\r
    };\r
  }\r
  if(node?.type==='mux_block'){\r
    normalizeSignalUtilityNode(node);\r
    return {\r
      inputs:Array.from({length:node.props.inputCount},(_,index)=>({\r
        key:\`mux-input-\${index}\`,\r
        label:\`输入 \${index+1}\`,\r
        kind:'input',\r
        side:'left'\r
      })),\r
      outputs:[{key:'mux-output',label:'向量',kind:'output',side:'right'}]\r
    };\r
  }\r
  return __signalRoutingGetNodePorts(node);\r
};\r
\r
const __signalRoutingCreateNode = createNode;\r
createNode = function(type,rawX,rawY){\r
  const beforeLength=S.modelNodes.length;\r
  __signalRoutingCreateNode(type,rawX,rawY);\r
  if(S.modelNodes.length!==beforeLength+1){return;}\r
  const node=S.modelNodes[S.modelNodes.length-1];\r
  if(!node){return;}\r
  if(type==='flow_block'){\r
    node.props.name=\`信号适配块 \${getNodeTypeCount(type)}\`;\r
    node.props.inputName=node.props.inputName||'输入信号';\r
    node.props.outputName=node.props.outputName||'输出信号';\r
    node.props.inputFormat=node.props.inputFormat||'标量';\r
    node.props.outputFormat=node.props.outputFormat||'标量';\r
  }\r
  if(type==='gain_block'||type==='sum_block'||type==='mux_block'){\r
    node.props.name=\`\${COMPONENT_LIBRARY[type].label} \${getNodeTypeCount(type)}\`;\r
    normalizeSignalUtilityNode(node);\r
  }\r
  applyNodeGeometry(node);\r
  renderModelNodes();\r
  if(S.selBlk===node.id){\r
    renderPropertyPanel(node);\r
  }\r
  updateUI();\r
};\r
\r
const __signalRoutingRenderPropertyPanel = renderPropertyPanel;\r
renderPropertyPanel = function(node){\r
  if(typeof getTask5SelectedNodeIds==='function'&&getTask5SelectedNodeIds().length>1){\r
    return __signalRoutingRenderPropertyPanel(node);\r
  }\r
  if(node?.type==='gain_block'||node?.type==='sum_block'||node?.type==='mux_block'){\r
    const pe=document.getElementById('pe');\r
    const pd=document.getElementById('pd');\r
    const meta=COMPONENT_LIBRARY[node.type];\r
    pe.style.display='none';\r
    pd.style.display='block';\r
    pd.innerHTML=\`\r
      <div class="pgroup">\r
        <div class="props-title">\${escapeHtml(node.props.name)}</div>\r
        <div class="props-sub">\${meta.label} / 节点 \${node.id.replace('node-','#')}</div>\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">当前状态</div>\r
        <div class="prow"><span class="pk">节点类别</span><span class="pv">\${meta.label}</span></div>\r
      </div>\r
      <div class="props-form">\r
        \${buildSignalUtilityFields(node)}\r
        <div class="props-actions">\r
          <button class="props-save" onclick="saveSelectedNode()">保存设置</button>\r
          <button class="props-danger" onclick="deleteSelectedNode()">删除模块</button>\r
        </div>\r
      </div>\`;\r
    return;\r
  }\r
  return __signalRoutingRenderPropertyPanel(node);\r
};\r
\r
const __signalRoutingSaveSelectedNode = saveSelectedNode;\r
saveSelectedNode = function(){\r
  const node=getNode(S.selBlk);\r
  if(node?.type==='gain_block'){\r
    node.props.name=document.getElementById('prop-name')?.value.trim()||node.props.name;\r
    node.props.gain=document.getElementById('prop-gain')?.value.trim()||'1.0';\r
    node.props.inputFormat=document.getElementById('prop-inputFormat')?.value||'标量';\r
    node.props.outputFormat=document.getElementById('prop-outputFormat')?.value||'标量';\r
    normalizeSignalUtilityNode(node);\r
    markTopologyDirty(getMutationScopeForType(node.type));\r
    renderModelNodes();\r
    renderPropertyPanel(node);\r
    syncConfigTargets(node.id);\r
    updateUI();\r
    return;\r
  }\r
  if(node?.type==='sum_block'){\r
    node.props.name=document.getElementById('prop-name')?.value.trim()||node.props.name;\r
    node.props.inputCount=clampSignalUtilityInputCount(document.getElementById('prop-inputCount')?.value,2);\r
    node.props.signs=normalizeSignalSigns(document.getElementById('prop-signs')?.value,node.props.inputCount);\r
    node.props.outputFormat=document.getElementById('prop-outputFormat')?.value||'标量';\r
    normalizeSignalUtilityNode(node);\r
    pruneInvalidEdgesForNode(node);\r
    markTopologyDirty(getMutationScopeForType(node.type));\r
    renderModelNodes();\r
    renderPropertyPanel(node);\r
    syncConfigTargets(node.id);\r
    updateUI();\r
    return;\r
  }\r
  if(node?.type==='mux_block'){\r
    node.props.name=document.getElementById('prop-name')?.value.trim()||node.props.name;\r
    node.props.inputCount=clampSignalUtilityInputCount(document.getElementById('prop-inputCount')?.value,2);\r
    node.props.outputFormat=document.getElementById('prop-outputFormat')?.value||'向量';\r
    normalizeSignalUtilityNode(node);\r
    pruneInvalidEdgesForNode(node);\r
    markTopologyDirty(getMutationScopeForType(node.type));\r
    renderModelNodes();\r
    renderPropertyPanel(node);\r
    syncConfigTargets(node.id);\r
    updateUI();\r
    return;\r
  }\r
  return __signalRoutingSaveSelectedNode();\r
};\r
\r
function evaluateSignalUtilityOutputs(node,inputValues){\r
  if(node.type==='gain_block'){\r
    const inputValue=sanitizeSignalValue(inputValues[0]??0);\r
    const gain=parseScalar(node.props?.gain,1);\r
    return {outputs:[sanitizeSignalValue(inputValue*gain)],middleValues:[]};\r
  }\r
  if(node.type==='sum_block'){\r
    normalizeSignalUtilityNode(node);\r
    let total=0;\r
    for(let index=0; index<node.props.inputCount; index+=1){\r
      const value=sanitizeSignalValue(inputValues[index]??0);\r
      const sign=node.props.signs?.[index]==='-'?-1:1;\r
      total+=sign*value;\r
    }\r
    return {outputs:[sanitizeSignalValue(total)],middleValues:[]};\r
  }\r
  if(node.type==='mux_block'){\r
    normalizeSignalUtilityNode(node);\r
    const packed=Array.from({length:node.props.inputCount},(_,index)=>sanitizeSignalValue(inputValues[index]??0));\r
    return {outputs:[packed],middleValues:[]};\r
  }\r
  return null;\r
}\r
\r
const __signalRoutingResolveCanvasNodeOutputs = resolveCanvasNodeOutputs;\r
resolveCanvasNodeOutputs = function(canvasId,nodeId,modeKey,time,dt,context){\r
  const node=getCanvasNodeById(canvasId,nodeId);\r
  if(node?.type==='gain_block'||node?.type==='sum_block'||node?.type==='mux_block'){\r
    const cacheKey=\`\${canvasId}:\${nodeId}\`;\r
    if(context.cache.has(cacheKey)){\r
      return context.cache.get(cacheKey);\r
    }\r
    const bucket=modeKey==='reference'?SIM.reference:SIM.actual;\r
    const nodeState=ensureNodeRuntime(bucket,node);\r
    if(context.visiting.has(cacheKey)){\r
      return {\r
        outputs:nodeState.lastOutputs?.length?nodeState.lastOutputs:[nodeState.lastOutput||0],\r
        middleValues:nodeState.lastMiddleValues||[]\r
      };\r
    }\r
    context.visiting.add(cacheKey);\r
    const inputPorts=getNodePorts(node).inputs||[];\r
    const incoming=getIncomingEdgesForCanvasNode(canvasId,node.id);\r
    const inputValues=inputPorts.map((_,portIndex)=>{\r
      const edge=incoming.find(item=>(item.targetPortIndex||0)===portIndex);\r
      if(!edge){return 0;}\r
      const upstream=resolveCanvasNodeOutput(canvasId,edge.sourceNodeId,edge.sourcePortIndex||0,modeKey,time,dt,context);\r
      return transmitEdgeSignal(edge,upstream,modeKey,time);\r
    });\r
    const resolved=finalizeResolvedNodeOutputs(node,nodeState,inputValues,evaluateSignalUtilityOutputs(node,inputValues));\r
    context.visiting.delete(cacheKey);\r
    context.cache.set(cacheKey,resolved);\r
    return resolved;\r
  }\r
  return __signalRoutingResolveCanvasNodeOutputs(canvasId,nodeId,modeKey,time,dt,context);\r
};\r
\r
const __signalRoutingResolveNodeOutputsInCanvas = resolveNodeOutputsInCanvas;\r
resolveNodeOutputsInCanvas = function(nodeId,canvasId,modeKey,time,dt,cache,visiting){\r
  const effectiveCanvasId=findCanvasIdForNodeId(nodeId,canvasId);\r
  const node=getNodeFromCanvas(effectiveCanvasId,nodeId);\r
  if(node?.type==='gain_block'||node?.type==='sum_block'||node?.type==='mux_block'){\r
    if(cache.has(nodeId)){\r
      return cache.get(nodeId);\r
    }\r
    const bucket=modeKey==='reference'?SIM.reference:SIM.actual;\r
    const nodeState=ensureNodeRuntime(bucket,node);\r
    if(visiting.has(nodeId)){\r
      return {\r
        outputs:nodeState.lastOutputs?.length?nodeState.lastOutputs:[nodeState.lastOutput||0],\r
        middleValues:nodeState.lastMiddleValues||[]\r
      };\r
    }\r
    visiting.add(nodeId);\r
    const inputValues=resolveNodeInputValuesInCanvas(node,effectiveCanvasId,modeKey,time,dt,cache,visiting);\r
    const resolved=evaluateSignalUtilityOutputs(node,inputValues);\r
    resolved.outputs=(resolved.outputs||[0]).map(sanitizeSignalValue);\r
    resolved.middleValues=(resolved.middleValues||[]).map(sanitizeSignalValue);\r
    nodeState.lastInputValues=inputValues.slice();\r
    nodeState.lastInput=inputValues[0]||0;\r
    nodeState.lastOutputs=resolved.outputs.slice();\r
    nodeState.lastMiddleValues=resolved.middleValues.slice();\r
    nodeState.lastOutput=nodeState.lastOutputs[0]||0;\r
    visiting.delete(nodeId);\r
    cache.set(nodeId,resolved);\r
    return resolved;\r
  }\r
  return __signalRoutingResolveNodeOutputsInCanvas(nodeId,canvasId,modeKey,time,dt,cache,visiting);\r
};\r
\r
Object.assign(window,{\r
  buildNodeSubtitle,\r
  getNodePorts,\r
  createNode,\r
  renderPropertyPanel,\r
  saveSelectedNode,\r
  resolveCanvasNodeOutputs,\r
  resolveNodeOutputsInCanvas\r
});\r
\r
// --- Final visual cleanup: readable Chinese labels, one-click layout, routed edges ---\r
(function installFinalLayoutAndChineseOverrides(){\r
  const COMMON_PORT_LABELS = {\r
    force: '力',\r
    thrust: '推力',\r
    mass: '质量',\r
    velocity: '速度',\r
    speed: '速度',\r
    acceleration: '加速度',\r
    attitude: '姿态',\r
    altitude: '高度',\r
    error: '误差',\r
    dt: '时间步长',\r
    output: '输出',\r
    input: '输入',\r
    integral: '积分状态',\r
    derivative: '微分项',\r
    saturated_output: '饱和输出',\r
    left_motor_cmd: '左电机指令',\r
    right_motor_cmd: '右电机指令',\r
    left_thrust: '左侧推力',\r
    right_thrust: '右侧推力'\r
  };\r
\r
  function stripRolePrefix(value){\r
    return String(value||'')\r
      .trim()\r
      .replace(/^(输入|输出|中间变量|观测变量|可观测变量)\\s*[:：]\\s*/u,'')\r
      .trim();\r
  }\r
\r
  function hasChinese(value){\r
    return /[\\u4e00-\\u9fff]/u.test(String(value||''));\r
  }\r
\r
  function humanizePortName(name){\r
    const key=String(name||'').trim();\r
    if(!key){return '';}\r
    if(COMMON_PORT_LABELS[key]){return COMMON_PORT_LABELS[key];}\r
    const lower=key.toLowerCase();\r
    if(COMMON_PORT_LABELS[lower]){return COMMON_PORT_LABELS[lower];}\r
    if(lower.includes('force')){return '力';}\r
    if(lower.includes('thrust')){return '推力';}\r
    if(lower.includes('velocity')){return '速度';}\r
    if(lower.includes('accel')){return '加速度';}\r
    return key;\r
  }\r
\r
  function deriveDisplayName(item){\r
    const display=stripRolePrefix(item?.displayName);\r
    if(display&&display!==item?.varName&&display!==item?.name){return display;}\r
    const comment=stripRolePrefix(item?.comment);\r
    if(comment&&hasChinese(comment)){return comment;}\r
    return humanizePortName(item?.varName||item?.name||display);\r
  }\r
\r
  function normalizeBindingLabels(node){\r
    const binding=node?.pythonBinding;\r
    if(!binding?.bound||!binding.portMapping){return;}\r
    ['inputs','outputs','middleVars'].forEach(groupKey=>{\r
      (binding.portMapping[groupKey]||[]).forEach(item=>{\r
        item.displayName=deriveDisplayName(item);\r
      });\r
    });\r
  }\r
\r
  function normalizeAllBindingLabels(){\r
    S.modelNodes.forEach(normalizeBindingLabels);\r
  }\r
\r
  getPortDisplayName = function(port){\r
    if(port?.meta){\r
      return deriveDisplayName(port.meta);\r
    }\r
    return stripRolePrefix(port?.label||'');\r
  };\r
\r
  buildPythonPortTooltip = function(meta,kind='input'){\r
    if(!meta){return '';}\r
    const parts=[deriveDisplayName(meta)];\r
    if(meta.varName){parts.push(\`变量: \${meta.varName}\`);}\r
    if(meta.type){parts.push(\`类型: \${meta.type}\`);}\r
    if(kind==='input'&&meta.default!==null&&meta.default!==undefined&&meta.default!==''){\r
      parts.push(\`默认值: \${meta.default}\`);\r
    }\r
    const comment=stripRolePrefix(meta.comment);\r
    if(comment&&comment!==parts[0]){parts.push(\`注释: \${comment}\`);}\r
    return parts.join('\\n');\r
  };\r
\r
  buildEdgePortMeta = function(port){\r
    const meta=port?.meta||{};\r
    return {\r
      kind:port.kind||'output',\r
      varName:meta.varName||null,\r
      displayName:deriveDisplayName(meta)||port.label||'',\r
      type:meta.type||'any',\r
      default:meta.default??null\r
    };\r
  };\r
\r
  buildPythonBindingPortRows = function(items,kind){\r
    if(!items.length){\r
      return '<div class="props-help">当前没有可用端口</div>';\r
    }\r
    return \`<div class="props-port-list">\${items.map(item=>{\r
      const displayName=escapeHtml(deriveDisplayName(item));\r
      const varName=escapeHtml(item.varName||item.name||'-');\r
      const type=escapeHtml(item.type||'any');\r
      const comment=stripRolePrefix(item.comment);\r
      const status=kind==='inputs'\r
        ?(item.connected?'<span class="pv pv-ok">已连接</span>':'<span class="pv pv-fault">未连接</span>')\r
        :'<span class="pv pv-ok">已暴露</span>';\r
      const defaultText=kind==='inputs'&&item.default!==null&&item.default!==undefined&&item.default!==''\r
        ?\`默认值 \${escapeHtml(item.default)}\`\r
        :'';\r
      return \`\r
        <div class="props-port-card">\r
          <div class="props-port-card__head">\r
            <span class="props-port-card__name">\${displayName}</span>\r
            \${status}\r
          </div>\r
          <div class="props-port-card__var">\${varName}</div>\r
          <div class="props-port-card__meta">\r
            <span>\${type}</span>\r
            <span>\${defaultText}</span>\r
          </div>\r
          \${comment?\`<div class="props-help">\${escapeHtml(comment)}</div>\`:''}\r
        </div>\`;\r
    }).join('')}</div>\`;\r
  };\r
\r
  function getEdgeRouteOffset(edge,sourceNode,targetNode){\r
    const sameRoute=S.modelEdges.filter(item=>\r
      item.sourceNodeId===edge.sourceNodeId&&\r
      item.targetNodeId===edge.targetNodeId&&\r
      (item.sourcePortIndex||0)===(edge.sourcePortIndex||0)&&\r
      (item.targetPortIndex||0)===(edge.targetPortIndex||0)\r
    );\r
    const routeIndex=Math.max(0,sameRoute.findIndex(item=>item.id===edge.id));\r
    const siblingOffset=(routeIndex-(sameRoute.length-1)/2)*18;\r
    const orderOffset=(S.modelEdges.findIndex(item=>item.id===edge.id)%5-2)*4;\r
    const verticalBias=sourceNode&&targetNode&&sourceNode.y>targetNode.y?-10:10;\r
    return siblingOffset+orderOffset+verticalBias;\r
  }\r
\r
  function buildRoutedEdgePath(start,end,offset=0){\r
    const sx=start.x;\r
    const sy=start.y;\r
    const tx=end.x;\r
    const ty=end.y;\r
    const forward=tx>=sx;\r
    const dx=Math.abs(tx-sx);\r
    const dy=Math.abs(ty-sy);\r
    if(forward){\r
      const bend=Math.max(76,Math.min(240,dx*0.48));\r
      return \`M \${sx} \${sy} C \${sx+bend} \${sy+offset}, \${tx-bend} \${ty+offset}, \${tx} \${ty}\`;\r
    }\r
    const lift=Math.max(76,Math.min(180,dy*0.6+Math.abs(offset)+56));\r
    const midY=Math.min(sy,ty)-lift;\r
    const cp=96;\r
    return \`M \${sx} \${sy} C \${sx+cp} \${sy}, \${sx+cp} \${midY}, \${sx} \${midY} S \${tx-cp} \${midY}, \${tx} \${ty}\`;\r
  }\r
\r
  buildEdgePath = function(start,end){\r
    return buildRoutedEdgePath(start,end,0);\r
  };\r
\r
  renderEdges = function(){\r
    const edgeGroup=document.getElementById('edge-group');\r
    const preview=document.getElementById('edge-preview');\r
    if(!edgeGroup||!preview){return;}\r
    edgeGroup.innerHTML='';\r
\r
    S.modelEdges.forEach(edge=>{\r
      const sourceNode=getNode(edge.sourceNodeId);\r
      const targetNode=getNode(edge.targetNodeId);\r
      if(!sourceNode||!targetNode){return;}\r
      const sourcePort=getPortInfo(sourceNode,'output',edge.sourcePortIndex||0);\r
      const targetPort=getPortInfo(targetNode,'input',edge.targetPortIndex||0);\r
      if(!sourcePort||!targetPort){return;}\r
      const selected=S.selEdge===edge.id;\r
      const faulted=Boolean(edge.injectedFault);\r
      const lineType=edge.lineType==='can'?'can':'normal';\r
      const routeOffset=getEdgeRouteOffset(edge,sourceNode,targetNode);\r
      const edgePath=buildRoutedEdgePath(sourcePort,targetPort,routeOffset);\r
\r
      const hit=document.createElementNS('http://www.w3.org/2000/svg','path');\r
      hit.setAttribute('d',edgePath);\r
      hit.setAttribute('class','edge-hit');\r
      hit.dataset.edgeId=edge.id;\r
      hit.addEventListener('click',event=>{\r
        event.stopPropagation();\r
        selectEdge(edge.id);\r
      });\r
      edgeGroup.appendChild(hit);\r
\r
      const path=document.createElementNS('http://www.w3.org/2000/svg','path');\r
      path.setAttribute('d',edgePath);\r
      path.setAttribute('class',\`edge-path edge-path--\${lineType} is-routed\${selected?' is-selected':''}\${faulted?' is-faulted':''}\`);\r
      path.setAttribute('marker-end',faulted?'url(#edge-arrow-fault)':\`url(#edge-arrow-\${lineType})\`);\r
      path.dataset.edgeId=edge.id;\r
      path.addEventListener('click',event=>{\r
        event.stopPropagation();\r
        selectEdge(edge.id);\r
      });\r
      edgeGroup.appendChild(path);\r
\r
      const label=document.createElementNS('http://www.w3.org/2000/svg','text');\r
      label.setAttribute('class',\`edge-label\${selected?' is-selected':''}\${faulted?' is-faulted':''}\`);\r
      label.setAttribute('x',String(Math.round((sourcePort.x+targetPort.x)/2)));\r
      label.setAttribute('y',String(Math.round((sourcePort.y+targetPort.y)/2)+routeOffset-10));\r
      label.setAttribute('text-anchor','middle');\r
      label.dataset.edgeId=edge.id;\r
      label.textContent=getEdgeLabel(edge);\r
      label.addEventListener('click',event=>{\r
        event.stopPropagation();\r
        selectEdge(edge.id);\r
      });\r
      edgeGroup.appendChild(label);\r
    });\r
\r
    if(S.pendingConnection){\r
      const sourceNode=getNode(S.pendingConnection.sourceNodeId);\r
      const sourcePort=sourceNode?getPortInfo(sourceNode,'output',S.pendingConnection.sourcePortIndex||0):null;\r
      if(sourcePort){\r
        preview.style.display='block';\r
        preview.setAttribute('d',buildRoutedEdgePath(sourcePort,{\r
          x:S.pendingConnection.x,\r
          y:S.pendingConnection.y\r
        },0));\r
        preview.setAttribute('stroke',S.pendingConnection.lineType==='can'?'#8c7cf6':'#7ab7ff');\r
        preview.setAttribute('stroke-width',S.pendingConnection.lineType==='can'?'2.8':'2');\r
      }else{\r
        preview.style.display='none';\r
        preview.setAttribute('d','');\r
      }\r
    }else{\r
      preview.style.display='none';\r
      preview.setAttribute('d','');\r
    }\r
\r
    if(typeof renderCanvasDiagnosticTestPointMarkers==='function'){\r
      try{renderCanvasDiagnosticTestPointMarkers();}catch(err){console.warn('[diagnostic-testpoints] marker render after edges failed',err);}\r
    }\r
  };\r
\r
  function typeRank(node){\r
    if(!node){return 3;}\r
    if(node.type==='signal_source'||node.type==='subsystem_in_port'){return 0;}\r
    if(node.type.startsWith('instrument_')||node.type==='subsystem_out_port'){return 8;}\r
    if(node.type==='fault_bias'||node.type==='fault_noise'||node.type==='middle_var_assign'){return 2;}\r
    if(node.type==='flow_block'||node.type==='gain_block'||node.type==='sum_block'||node.type==='mux_block'){return 3;}\r
    if(node.type==='simulation_block'){return 4;}\r
    if(node.type==='subsystem_block'){return 5;}\r
    return 4;\r
  }\r
\r
  function computeLayoutLayers(nodes,edges){\r
    const ids=new Set(nodes.map(node=>node.id));\r
    const indegree=new Map(nodes.map(node=>[node.id,0]));\r
    const outgoing=new Map(nodes.map(node=>[node.id,[]]));\r
    edges.forEach(edge=>{\r
      if(!ids.has(edge.sourceNodeId)||!ids.has(edge.targetNodeId)){return;}\r
      indegree.set(edge.targetNodeId,(indegree.get(edge.targetNodeId)||0)+1);\r
      outgoing.get(edge.sourceNodeId)?.push(edge.targetNodeId);\r
    });\r
\r
    const layers=new Map();\r
    const queue=nodes\r
      .filter(node=>(indegree.get(node.id)||0)===0)\r
      .sort((a,b)=>typeRank(a)-typeRank(b)||a.y-b.y);\r
    queue.forEach(node=>layers.set(node.id,typeRank(node)===8?6:0));\r
\r
    while(queue.length){\r
      const node=queue.shift();\r
      const currentLayer=layers.get(node.id)||0;\r
      (outgoing.get(node.id)||[]).forEach(targetId=>{\r
        const nextLayer=Math.max(layers.get(targetId)||0,currentLayer+1);\r
        layers.set(targetId,nextLayer);\r
        indegree.set(targetId,(indegree.get(targetId)||0)-1);\r
        if((indegree.get(targetId)||0)===0){\r
          queue.push(nodes.find(item=>item.id===targetId));\r
        }\r
      });\r
      queue.sort((a,b)=>typeRank(a)-typeRank(b)||a.y-b.y);\r
    }\r
\r
    nodes.forEach(node=>{\r
      if(!layers.has(node.id)){\r
        layers.set(node.id,typeRank(node));\r
      }\r
      if(typeRank(node)===8){\r
        const maxLayer=Math.max(...layers.values(),0);\r
        layers.set(node.id,Math.max(layers.get(node.id),maxLayer+1));\r
      }\r
    });\r
    return layers;\r
  }\r
\r
  autoArrangeCanvas = function(){\r
    const nodes=S.modelNodes;\r
    const edges=S.modelEdges;\r
    if(!nodes.length){\r
      toast('画布中还没有可整理的组件','w');\r
      return;\r
    }\r
    normalizeAllBindingLabels();\r
    const layers=computeLayoutLayers(nodes,edges);\r
    const grouped=new Map();\r
    nodes.forEach(node=>{\r
      const layer=layers.get(node.id)||0;\r
      if(!grouped.has(layer)){grouped.set(layer,[]);}\r
      grouped.get(layer).push(node);\r
    });\r
\r
    const orderedLayers=[...grouped.keys()].sort((a,b)=>a-b);\r
    orderedLayers.forEach((layerIndex,visualIndex)=>{\r
      const group=grouped.get(layerIndex).sort((a,b)=>a.y-b.y||a.x-b.x);\r
      const x=96+visualIndex*245;\r
      const totalHeight=group.reduce((sum,node)=>sum+(node.h||90),0)+(group.length-1)*46;\r
      let y=Math.max(CANVAS_STAGE.nodeMinY+26,Math.round((CANVAS_STAGE.height-totalHeight)/2));\r
      group.forEach(node=>{\r
        applyNodeGeometry(node);\r
        node.x=clamp(x,48,CANVAS_STAGE.width-(node.w||160)-48);\r
        node.y=clamp(y,CANVAS_STAGE.nodeMinY+18,CANVAS_STAGE.height-(node.h||90)-42);\r
        y+=Math.max(node.h||90,90)+46;\r
      });\r
    });\r
\r
    markTopologyDirty('system');\r
    renderModelNodes();\r
    if(S.selBlk&&getNode(S.selBlk)){\r
      renderPropertyPanel(getNode(S.selBlk));\r
    }\r
    updateUI();\r
    toast('画布已按数据流方向整理','s');\r
  };\r
\r
  function buildSimulationInterfaceRowsClean(items,prefix){\r
    return items.map((item,index)=>\`\r
      <div class="sim-intf-row" data-role="\${prefix}" data-index="\${index}">\r
        <div class="props-field">\r
          <label>\${prefix}名称 \${index+1}</label>\r
          <input data-sim-field="name" value="\${escapeHtml(item.name)}">\r
        </div>\r
        <div class="props-field">\r
          <label>\${prefix}类型</label>\r
          <select data-sim-field="type">\${buildSelectOptions(PORT_FORMATS,item.type)}</select>\r
        </div>\r
      </div>\`).join('');\r
  }\r
\r
  function readSimulationRowsClean(prefix,fallbackType='标量'){\r
    return [...document.querySelectorAll(\`.sim-intf-row[data-role="\${prefix}"]\`)].map((row,index)=>({\r
      name:row.querySelector('[data-sim-field="name"]')?.value.trim()||\`\${prefix} \${index+1}\`,\r
      type:row.querySelector('[data-sim-field="type"]')?.value||fallbackType\r
    }));\r
  }\r
\r
  buildFlowBlockFields = function(node){\r
    return \`\r
      <div class="pgroup">\r
        <div class="pglbl">信号适配配置</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-field"><label>输入名称</label><input id="prop-inputName" value="\${escapeHtml(node.props.inputName||'输入信号')}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>输入类型</label><select id="prop-inputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.inputFormat||'标量')}</select></div>\r
          <div class="props-field"><label>输出类型</label><select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat||'标量')}</select></div>\r
        </div>\r
        <div class="props-field"><label>输出名称</label><input id="prop-outputName" value="\${escapeHtml(node.props.outputName||'输出信号')}"></div>\r
        <div class="props-help">流程块只用于定义输入输出名称和数据类型，帮助检查上下游端口是否一致；Python 计算逻辑请绑定到仿真块。</div>\r
      </div>\`;\r
  };\r
\r
  buildSimulationBlockFields = function(node){\r
    normalizeSimulationInterfaces(node.props);\r
    normalizeBindingLabels(node);\r
    const binding=ensureFlowNodePythonBinding(node);\r
    if(!binding.bound){\r
      return \`\r
        <div class="pgroup">\r
          <div class="pglbl">仿真接口</div>\r
          <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
          <div class="props-field"><label>模块类型</label><select id="prop-moduleType">\${buildSelectOptions(SIM_MODULE_TYPES,node.props.moduleType)}</select></div>\r
          <div class="sim-intf-toolbar">\r
            <div class="sim-intf-counts">\r
              <div class="props-field"><label>输入数量</label><input id="sim-input-count" type="number" min="\${SIM_INTERFACE_LIMITS.inputs[0]}" max="\${SIM_INTERFACE_LIMITS.inputs[1]}" value="\${node.props.inputs.length}"></div>\r
              <div class="props-field"><label>输出数量</label><input id="sim-output-count" type="number" min="\${SIM_INTERFACE_LIMITS.outputs[0]}" max="\${SIM_INTERFACE_LIMITS.outputs[1]}" value="\${node.props.outputs.length}"></div>\r
              <div class="props-field"><label>中间变量数量</label><input id="sim-middle-count" type="number" min="\${SIM_INTERFACE_LIMITS.middleVars[0]}" max="\${SIM_INTERFACE_LIMITS.middleVars[1]}" value="\${node.props.middleVars.length}"></div>\r
            </div>\r
            <button class="props-secondary" type="button" onclick="syncSimulationInterfaceCounts()">同步接口数量</button>\r
            <div class="sim-intf-note">中间变量端口位于模块上方，作为可观测输出；如需写入中间变量，请使用“中间变量赋值块”。</div>\r
          </div>\r
        </div>\r
        <div class="sim-intf-group">\r
          <div class="sim-intf-head">\r
            <div class="sim-intf-title">输入端口</div>\r
            <div class="sim-intf-meta">\${node.props.inputs.length} 个左侧端口</div>\r
          </div>\r
          <div class="sim-intf-list">\${buildSimulationInterfaceRowsClean(node.props.inputs,'输入')}</div>\r
        </div>\r
        <div class="sim-intf-group">\r
          <div class="sim-intf-head">\r
            <div class="sim-intf-title">输出端口</div>\r
            <div class="sim-intf-meta">\${node.props.outputs.length} 个右侧输出</div>\r
          </div>\r
          <div class="sim-intf-list">\${buildSimulationInterfaceRowsClean(node.props.outputs,'输出')}</div>\r
        </div>\r
        <div class="sim-intf-group">\r
          <div class="sim-intf-head">\r
            <div class="sim-intf-title">中间变量</div>\r
            <div class="sim-intf-meta">\${node.props.middleVars.length} 个顶部观测端口</div>\r
          </div>\r
          <div class="sim-intf-list">\${node.props.middleVars.length?buildSimulationInterfaceRowsClean(node.props.middleVars,'中间变量'):'<div class="sim-intf-note">当前没有暴露的中间变量端口。</div>'}</div>\r
        </div>\r
        <div class="props-field"><label>函数说明</label><textarea id="prop-ffunctionNote">\${escapeHtml(node.props.ffunctionNote||'')}</textarea></div>\r
        <div class="pgroup">\r
          <div class="pglbl">Python 绑定</div>\r
          <div class="props-help">仿真块可以绑定 Python 文件。绑定后输入、输出和中间变量端口会由 Python 接口自动生成，端口显示名优先使用代码注释中的中文说明。</div>\r
        </div>\`;\r
    }\r
\r
    return \`\r
      <div class="pgroup">\r
        <div class="pglbl">仿真块设置</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-field"><label>绑定文件</label><input value="\${escapeHtml(binding.fileName||'')}" disabled></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>模块名</label><input value="\${escapeHtml(binding.moduleName||'-')}" disabled></div>\r
          <div class="props-field"><label>入口函数</label><input value="\${escapeHtml(binding.entryFunction||'process')}" disabled></div>\r
        </div>\r
        <div class="props-help">\${escapeHtml(binding.description||'已绑定 Python 接口，端口由解析结果自动生成。')}</div>\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">输入端口</div>\r
        \${buildPythonBindingPortRows(binding.portMapping.inputs,'inputs')}\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">输出端口</div>\r
        \${buildPythonBindingPortRows(binding.portMapping.outputs,'outputs')}\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">中间变量观测端口</div>\r
        \${buildPythonBindingPortRows(binding.portMapping.middleVars,'middleVars')}\r
        <div class="props-help">中间变量默认作为顶部观测输出存在；如果需要在仿真过程中对其赋值，请拖入“中间变量赋值块”。</div>\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">执行方式</div>\r
        <div class="prow"><span class="pk">执行模式</span><span class="pv">\${escapeHtml(binding.executionMode||'mock')}</span></div>\r
        <div class="prow"><span class="pk">执行说明</span><span class="pv">\${binding.executionMode==='backend'?'后端执行':'前端模拟'}</span></div>\r
        <div class="prow"><span class="pk">来源模型包</span><span class="pv">\${escapeHtml(binding.sourcePackageName||'未关联模型包')}</span></div>\r
        <div class="prow"><span class="pk">接口摘要</span><span class="pv">\${escapeHtml(getPythonBindingSummary(node))}</span></div>\r
      </div>\`;\r
  };\r
\r
  function buildSignalSourceFieldsClean(node){\r
    return \`\r
      <div class="pgroup">\r
        <div class="pglbl">信号定义</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>信号类型</label><select id="prop-waveType">\${buildSelectOptions(['正弦','阶跃','常值'],node.props.waveType)}</select></div>\r
          <div class="props-field"><label>输出格式</label><select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat)}</select></div>\r
        </div>\r
        <div class="props-row">\r
          <div class="props-field"><label>幅值</label><input id="prop-amplitude" value="\${escapeHtml(node.props.amplitude)}"></div>\r
          <div class="props-field"><label>频率 / 周期</label><input id="prop-frequency" value="\${escapeHtml(node.props.frequency)}"></div>\r
        </div>\r
        <div class="props-help">信号源用于提供系统建模和仿真的输入激励，可直接连接到流程块、仿真块或示波器。</div>\r
      </div>\`;\r
  }\r
\r
  function getScopeConfiguredChannelLabel(node,channelKey){\r
    const raw=String(node.props?.signal||'').trim();\r
    if(!raw){return '';}\r
    const parts=raw.split(/[\\/|,，;；]/).map(part=>part.trim()).filter(Boolean);\r
    const prefix=channelKey==='ch2'?/^CH\\s*2[:：\\s_-]*/i:/^CH\\s*1[:：\\s_-]*/i;\r
    const matched=parts.find(part=>prefix.test(part));\r
    return matched?matched.replace(prefix,'').trim():parts[channelKey==='ch2'?1:0]||'';\r
  }\r
\r
  function getScopePanelChannelState(node,channelKey){\r
    const targetPortIndex=channelKey==='ch2'?1:0;\r
    const incoming=getIncomingEdgesForNode(node.id).find(edge=>(edge.targetPortIndex||0)===targetPortIndex);\r
    const sourceName=incoming?getScopeChannelSignalName(node,channelKey):'未连接';\r
    const configured=getScopeConfiguredChannelLabel(node,channelKey);\r
    return {\r
      connected:Boolean(incoming),\r
      label:configured?\`\${configured} · \${sourceName}\`:sourceName\r
    };\r
  }\r
\r
  function buildScopePanelChannel(node,channelKey,metrics){\r
    const state=getScopePanelChannelState(node,channelKey);\r
    const title=channelKey==='ch2'?'CH2':'CH1';\r
    const tone=channelKey==='ch2'?'green':'blue';\r
    return \`\r
      <article class="scope-props-channel scope-props-channel--\${tone}" data-scope-panel-channel="\${channelKey}" data-connected="\${state.connected}">\r
        <div class="scope-props-channel__top">\r
          <span class="scope-props-channel__name">\${title}</span>\r
          <span class="scope-props-channel__state">\${state.connected?'已接入':'未接入'}</span>\r
        </div>\r
        <div class="scope-props-channel__signal">\${escapeHtml(state.label)}</div>\r
        <div class="scope-props-channel__metrics">\r
          <span><b>\${escapeHtml(metrics.current)}</b><em>当前</em></span>\r
          <span><b>\${escapeHtml(metrics.pp)}</b><em>峰峰</em></span>\r
        </div>\r
      </article>\`;\r
  }\r
\r
  function buildScopeFieldsClean(node){\r
    const bucket=ensureScopeChannelBucket(SIM.actual,node.id);\r
    const ch1=summarizeScopeChannel(bucket.ch1);\r
    const ch2=summarizeScopeChannel(bucket.ch2);\r
    const incomingCount=getIncomingEdgesForNode(node.id).length;\r
    return \`\r
      <div class="scope-props" data-scope-panel="oscilloscope">\r
        <div class="scope-props-hero">\r
          <div>\r
            <div class="scope-props-kicker">Oscilloscope</div>\r
            <div class="scope-props-title">示波器波形查看</div>\r
            <div class="scope-props-copy">双通道输入，支持叠加查看故障响应与参考信号。</div>\r
          </div>\r
          <div class="scope-props-count">\r
            <strong>\${incomingCount}</strong>\r
            <span>接入</span>\r
          </div>\r
        </div>\r
        <button type="button" class="scope-props-open" data-scope-action="open">查看波形</button>\r
        <div class="scope-props-channels">\r
          \${buildScopePanelChannel(node,'ch1',ch1)}\r
          \${buildScopePanelChannel(node,'ch2',ch2)}\r
        </div>\r
        <div class="pgroup">\r
          <div class="pglbl">示波器配置</div>\r
          <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
          <div class="props-row">\r
            <div class="props-field"><label>仪器类型</label><input value="\${escapeHtml(node.props.instrumentType||'示波器')}" disabled></div>\r
            <div class="props-field"><label>采样率</label><input id="prop-sampleRate" value="\${escapeHtml(node.props.sampleRate||'64kHz')}"></div>\r
          </div>\r
          <div class="props-field"><label>通道说明</label><input id="prop-signal" value="\${escapeHtml(node.props.signal||'CH1 / CH2')}"></div>\r
          <div class="props-help">也可以双击画布中的示波器打开波形窗口；右侧按钮提供同一入口，避免操作反馈不明显。</div>\r
        </div>\r
      </div>\`;\r
  }\r
\r
  function getInstrumentSamples(node){\r
    if(!SIM.actual.instrumentSamples){SIM.actual.instrumentSamples={};}\r
    return Array.isArray(SIM.actual.instrumentSamples[node.id])?SIM.actual.instrumentSamples[node.id]:[];\r
  }\r
\r
  function getInstrumentSignalName(node){\r
    const incoming=getIncomingEdgesForNode(node.id)[0];\r
    if(!incoming){return '未接入信号';}\r
    const sourceNode=getNode(incoming.sourceNodeId);\r
    if(!sourceNode){return '未知信号';}\r
    const outputPort=getNodePorts(sourceNode).outputs[incoming.sourcePortIndex||0];\r
    return outputPort\r
      ?\`\${sourceNode.props?.name||'信号'} · \${outputPort.label}\`\r
      :(sourceNode.props?.name||'信号');\r
  }\r
\r
  function summarizeInstrumentSamples(samples){\r
    if(!samples.length){\r
      return {count:0,current:'--',reference:'--',residual:'--',peak:'--'};\r
    }\r
    const latest=samples[samples.length-1]||{};\r
    const values=samples.map(getSampleValue);\r
    const peak=Math.max(...values.map(value=>Math.abs(value)),0);\r
    const actual=Number(latest.actual);\r
    const reference=Number(latest.reference);\r
    return {\r
      count:samples.length,\r
      current:formatScopeMetric(actual),\r
      reference:formatScopeMetric(reference),\r
      residual:Number.isFinite(actual)&&Number.isFinite(reference)?formatScopeMetric(actual-reference):'--',\r
      peak:formatScopeMetric(peak)\r
    };\r
  }\r
\r
  function buildInstrumentSampleRows(samples){\r
    if(!samples.length){\r
      return '<div class="instrument-table-row instrument-table-row--empty"><span>等待采样</span><span>--</span><span>--</span><span>--</span></div>';\r
    }\r
    return samples.slice(-8).reverse().map(sample=>{\r
      const actual=Number(sample.actual);\r
      const reference=Number(sample.reference);\r
      const residual=Number.isFinite(actual)&&Number.isFinite(reference)?actual-reference:0;\r
      return \`\r
        <div class="instrument-table-row" data-instrument-row>\r
          <span>\${formatScopeMetric(sample.t)}s</span>\r
          <span>\${formatScopeMetric(actual)}</span>\r
          <span>\${formatScopeMetric(reference)}</span>\r
          <span>\${formatScopeMetric(residual)}</span>\r
        </div>\`;\r
    }).join('');\r
  }\r
\r
  function parseInstrumentSampleRateHz(node){\r
    const raw=String(node.props?.sampleRate||'10Hz');\r
    const base=parseScalar(raw,10);\r
    if(/khz/i.test(raw)){return base*1000;}\r
    if(/mhz/i.test(raw)){return base*1000000;}\r
    return base;\r
  }\r
\r
  function createInstrumentCsv(node){\r
    const rows=getInstrumentSamples(node);\r
    const lines=['time,actual,reference,residual'];\r
    rows.forEach(sample=>{\r
      const actual=Number(sample.actual);\r
      const reference=Number(sample.reference);\r
      const residual=Number.isFinite(actual)&&Number.isFinite(reference)?actual-reference:0;\r
      lines.push([sample.t,actual,reference,residual].map(value=>Number.isFinite(Number(value))?Number(value).toFixed(6):'').join(','));\r
    });\r
    return lines.join('\\n');\r
  }\r
\r
  function exportInstrumentSamples(node){\r
    const csv=createInstrumentCsv(node);\r
    const safeName=String(node.props?.name||node.id).replace(/[^\\w\\u4e00-\\u9fa5-]+/g,'_');\r
    const filename=\`\${safeName||node.id}_samples.csv\`;\r
    window.__GZ_LAST_INSTRUMENT_EXPORT__={nodeId:node.id,filename,csv};\r
    const userAgent=String(navigator?.userAgent||'');\r
    if(typeof Blob!=='undefined'&&typeof URL!=='undefined'&&!/jsdom/i.test(userAgent)){\r
      const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});\r
      const url=URL.createObjectURL(blob);\r
      const link=document.createElement('a');\r
      link.href=url;\r
      link.download=filename;\r
      document.body.appendChild(link);\r
      link.click();\r
      link.remove();\r
      setTimeout(()=>URL.revokeObjectURL(url),200);\r
    }\r
    toast('仪器采样数据已导出','s');\r
  }\r
\r
  function clearInstrumentSamples(node){\r
    if(SIM.actual.instrumentSamples){SIM.actual.instrumentSamples[node.id]=[];}\r
    if(SIM.reference.instrumentSamples){SIM.reference.instrumentSamples[node.id]=[];}\r
    renderPropertyPanel(node);\r
    updateUI();\r
    toast('仪器采样记录已清空','s');\r
  }\r
\r
  function buildInstrumentConfigFields(node,typeLabel){\r
    return \`\r
      <div class="pgroup">\r
        <div class="pglbl">仪器配置</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>仪器类型</label><input value="\${escapeHtml(typeLabel)}" disabled></div>\r
          <div class="props-field"><label>采样率</label><input id="prop-sampleRate" value="\${escapeHtml(node.props.sampleRate||'10Hz')}"></div>\r
        </div>\r
        <div class="props-field"><label>观测信号</label><input id="prop-signal" value="\${escapeHtml(node.props.signal||getInstrumentSignalName(node))}"></div>\r
      </div>\`;\r
  }\r
\r
  function buildLoggerFieldsClean(node){\r
    const samples=getInstrumentSamples(node);\r
    const summary=summarizeInstrumentSamples(samples);\r
    return \`\r
      <div class="instrument-props instrument-props--logger" data-instrument-panel="logger">\r
        <div class="instrument-hero">\r
          <div>\r
            <div class="instrument-kicker">Data Logger</div>\r
            <div class="instrument-title">数据记录仪</div>\r
            <div class="instrument-copy">\${escapeHtml(getInstrumentSignalName(node))}</div>\r
          </div>\r
          <div class="instrument-count">\r
            <strong>\${summary.count}</strong>\r
            <span>记录样本</span>\r
          </div>\r
        </div>\r
        <div class="instrument-metrics">\r
          <span><b>\${summary.current}</b><em>实测</em></span>\r
          <span><b>\${summary.reference}</b><em>参考</em></span>\r
          <span><b>\${summary.residual}</b><em>残差</em></span>\r
        </div>\r
        <div class="instrument-actions">\r
          <button type="button" class="instrument-primary" data-instrument-action="export">导出数据</button>\r
          <button type="button" class="instrument-secondary" data-instrument-action="clear">清空记录</button>\r
        </div>\r
        <div class="instrument-table" aria-label="数据记录仪采样表">\r
          <div class="instrument-table-head"><span>时间</span><span>实测</span><span>参考</span><span>残差</span></div>\r
          \${buildInstrumentSampleRows(samples)}\r
        </div>\r
        \${buildInstrumentConfigFields(node,'数据记录')}\r
      </div>\`;\r
  }\r
\r
  function buildSpectrumFieldsClean(node){\r
    const samples=getInstrumentSamples(node);\r
    const values=samples.map(getSampleValue);\r
    const bins=buildSpectrum(values,18);\r
    const peakValue=Math.max(...bins,0);\r
    const peakIndex=Math.max(0,bins.indexOf(peakValue));\r
    const peakFreq=(peakIndex+1)*parseInstrumentSampleRateHz(node)/(bins.length*2);\r
    const summary=summarizeInstrumentSamples(samples);\r
    return \`\r
      <div class="instrument-props instrument-props--spectrum" data-instrument-panel="spectrum">\r
        <div class="instrument-hero">\r
          <div>\r
            <div class="instrument-kicker">Spectrum Analyzer</div>\r
            <div class="instrument-title">频谱分析仪</div>\r
            <div class="instrument-copy">\${escapeHtml(getInstrumentSignalName(node))}</div>\r
          </div>\r
          <div class="instrument-count">\r
            <strong>\${samples.length?formatScopeMetric(peakFreq):'--'}</strong>\r
            <span>峰值频点</span>\r
          </div>\r
        </div>\r
        <div class="instrument-spectrum-bars" aria-label="频谱能量分布">\r
          \${bins.map((value,index)=>\`\r
            <span data-spectrum-bin title="\${formatScopeMetric((index+1)*parseInstrumentSampleRateHz(node)/(bins.length*2))}Hz · \${formatScopeMetric(value)}" style="height:\${Math.max(4,Math.round(value*52))}px"></span>\r
          \`).join('')}\r
        </div>\r
        <div class="instrument-metrics">\r
          <span><b>\${summary.count}</b><em>样本</em></span>\r
          <span><b>\${summary.peak}</b><em>幅值峰值</em></span>\r
          <span><b>\${samples.length?formatScopeMetric(peakValue):'--'}</b><em>归一能量</em></span>\r
        </div>\r
        <div class="instrument-actions">\r
          <button type="button" class="instrument-primary" data-instrument-action="export">导出数据</button>\r
          <button type="button" class="instrument-secondary" data-instrument-action="clear">清空记录</button>\r
        </div>\r
        \${buildInstrumentConfigFields(node,'频谱分析')}\r
      </div>\`;\r
  }\r
\r
  function buildInstrumentFieldsClean(node){\r
    if(node.type==='instrument_scope'){\r
      return buildScopeFieldsClean(node);\r
    }\r
    if(node.type==='instrument_logger'){\r
      return buildLoggerFieldsClean(node);\r
    }\r
    if(node.type==='instrument_spectrum'){\r
      return buildSpectrumFieldsClean(node);\r
    }\r
    return \`\r
      <div class="pgroup">\r
        <div class="pglbl">测量配置</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>仪器类型</label><input value="\${escapeHtml(node.props.instrumentType||COMPONENT_LIBRARY[node.type]?.label||'测量仪器')}" disabled></div>\r
          <div class="props-field"><label>采样率</label><input id="prop-sampleRate" value="\${escapeHtml(node.props.sampleRate||'64kHz')}"></div>\r
        </div>\r
        <div class="props-field"><label>观测信号</label><input id="prop-signal" value="\${escapeHtml(node.props.signal||'输入信号')}"></div>\r
        \${node.type==='instrument_scope'?'<div class="props-help">示波器接入连线后可双击查看波形，并实时查看输入信号。</div>':'<div class="props-help">测量仪器用于记录或分析连线传入的信号。</div>'}\r
      </div>\`;\r
  }\r
\r
  function bindScopePropertyPanelActions(node,host){\r
    if(node.type!=='instrument_scope'){return;}\r
    host.querySelector('[data-scope-action="open"]')?.addEventListener('click',event=>{\r
      event.preventDefault();\r
      event.stopPropagation();\r
      openScope(node.id);\r
      renderPropertyPanel(node);\r
    });\r
  }\r
\r
  function bindInstrumentPropertyPanelActions(node,host){\r
    bindScopePropertyPanelActions(node,host);\r
    if(!node.type?.startsWith('instrument_')){return;}\r
    host.querySelector('[data-instrument-action="export"]')?.addEventListener('click',event=>{\r
      event.preventDefault();\r
      event.stopPropagation();\r
      exportInstrumentSamples(node);\r
    });\r
    host.querySelector('[data-instrument-action="clear"]')?.addEventListener('click',event=>{\r
      event.preventDefault();\r
      event.stopPropagation();\r
      clearInstrumentSamples(node);\r
    });\r
  }\r
\r
  function buildUtilityFieldsClean(node){\r
    if(node.type==='gain_block'){\r
      return \`\r
        <div class="pgroup">\r
          <div class="pglbl">增益配置</div>\r
          <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
          <div class="props-field"><label>增益系数</label><input id="prop-gain" value="\${escapeHtml(node.props.gain||'1.0')}"></div>\r
          <div class="props-row">\r
            <div class="props-field"><label>输入类型</label><select id="prop-inputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.inputFormat||'标量')}</select></div>\r
            <div class="props-field"><label>输出类型</label><select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat||'标量')}</select></div>\r
          </div>\r
        </div>\`;\r
    }\r
    if(node.type==='sum_block'){\r
      return \`\r
        <div class="pgroup">\r
          <div class="pglbl">求和配置</div>\r
          <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
          <div class="props-row">\r
            <div class="props-field"><label>输入数量</label><input id="prop-inputCount" type="number" min="2" max="6" value="\${escapeHtml(node.props.inputCount||2)}"></div>\r
            <div class="props-field"><label>符号序列</label><input id="prop-signs" value="\${escapeHtml((node.props.signs||['+','+']).join(' '))}"></div>\r
          </div>\r
          <div class="props-field"><label>输出类型</label><select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat||'标量')}</select></div>\r
        </div>\`;\r
    }\r
    if(node.type==='mux_block'){\r
      return \`\r
        <div class="pgroup">\r
          <div class="pglbl">Mux 配置</div>\r
          <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${escapeHtml(node.props.name)}"></div>\r
          <div class="props-row">\r
            <div class="props-field"><label>输入数量</label><input id="prop-inputCount" type="number" min="2" max="6" value="\${escapeHtml(node.props.inputCount||2)}"></div>\r
            <div class="props-field"><label>输出类型</label><select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat||'向量')}</select></div>\r
          </div>\r
        </div>\`;\r
    }\r
    return '';\r
  }\r
\r
  const __finalCleanRenderPropertyPanel = renderPropertyPanel;\r
  renderPropertyPanel = function(node){\r
    if(!node||node.sourceNodeId&&node.targetNodeId&&!node.type){\r
      return __finalCleanRenderPropertyPanel(node);\r
    }\r
    if(typeof getTask5SelectedNodeIds==='function'&&getTask5SelectedNodeIds().length>1){\r
      return __finalCleanRenderPropertyPanel(node);\r
    }\r
    const cleanTypes=['signal_source','flow_block','simulation_block','middle_var_assign','subsystem_block','gain_block','sum_block','mux_block'];\r
    const isCleanType=cleanTypes.includes(node.type)||node.type?.startsWith('instrument_');\r
    if(!isCleanType){\r
      return __finalCleanRenderPropertyPanel(node);\r
    }\r
\r
    const pe=document.getElementById('pe');\r
    const pd=document.getElementById('pd');\r
    if(!pe||!pd){return;}\r
    const meta=COMPONENT_LIBRARY[node.type]||{label:node.type};\r
    const fault=S.faultedBlks.includes(node.id)||Boolean(node.injectedFault);\r
    const pythonBound=node.type==='simulation_block'&&isPythonBoundFlowBlock(node);\r
    let fields='';\r
    if(node.type==='signal_source'){fields=buildSignalSourceFieldsClean(node);}\r
    else if(node.type==='flow_block'){fields=buildFlowBlockFields(node);}\r
    else if(node.type==='simulation_block'){fields=buildSimulationBlockFields(node);}\r
    else if(node.type==='middle_var_assign'){fields=buildMiddleAssignmentFields(node);}\r
    else if(node.type==='gain_block'||node.type==='sum_block'||node.type==='mux_block'){fields=buildUtilityFieldsClean(node);}\r
    else if(node.type?.startsWith('instrument_')){fields=buildInstrumentFieldsClean(node);}\r
    else {\r
      return __finalCleanRenderPropertyPanel(node);\r
    }\r
\r
    const subtitle=pythonBound\r
      ?\`\${escapeHtml(node.pythonBinding?.fileName||'')} · \${meta.label} · 节点 \${node.id.replace('node-','#')}\`\r
      :\`\${meta.label} · 节点 \${node.id.replace('node-','#')}\`;\r
    const faultSummary=node.injectedFault\r
      ?\`<div class="prow"><span class="pk">电气故障</span><span class="pv pv-fault">\${escapeHtml(node.injectedFault.name)}</span></div>\`\r
      :'';\r
\r
    pe.style.display='none';\r
    pd.style.display='block';\r
    pd.innerHTML=\`\r
      <div class="pgroup">\r
        <div class="props-title">\${escapeHtml(node.props.name)}</div>\r
        <div class="props-sub">\${subtitle}</div>\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">当前状态</div>\r
        <div class="prow"><span class="pk">节点类别</span><span class="pv">\${escapeHtml(meta.label)}</span></div>\r
        <div class="prow"><span class="pk">状态</span><span class="pv \${fault?'pv-fault':'pv-ok'}">\${fault?'已注入故障':'正常'}</span></div>\r
        \${pythonBound?\`<div class="prow"><span class="pk">Python</span><span class="pv pv-ok">\${escapeHtml(getPythonBindingSummary(node))}</span></div>\`:''}\r
        \${faultSummary}\r
      </div>\r
      <div class="props-form">\r
        \${fields}\r
        <div class="props-actions">\r
          \${node.type==='simulation_block'?\`<button class="props-secondary" onclick="openPythonBindingDialog('\${node.id}')">\${pythonBound?'重新绑定 Python':'绑定 Python 文件'}</button>\`:''}\r
          \${node.type==='simulation_block'&&pythonBound?\`<button class="props-secondary" onclick="unbindPythonBinding('\${node.id}')">解除 Python 绑定</button>\`:''}\r
          \${isElectricalInjectableType(node.type)?\`<button class="props-secondary props-fault-action" onclick="openElectricalFaultImport()">\${node.injectedFault?'更换故障':'导入故障'}</button>\`:''}\r
          <button class="props-save" onclick="saveSelectedNode()">保存设置</button>\r
          <button class="props-danger" onclick="deleteSelectedNode()">删除模块</button>\r
        </div>\r
      </div>\`;\r
    bindInstrumentPropertyPanelActions(node,pd);\r
    if(node.type==='simulation_block'){\r
      updateModelPackageStatus(node);\r
    }\r
  };\r
\r
  const __finalCleanSaveSelectedNode = saveSelectedNode;\r
  saveSelectedNode = function(){\r
    const node=getNode(S.selBlk);\r
    if(!node){return;}\r
    if(node.type==='signal_source'){\r
      node.props.name=document.getElementById('prop-name')?.value.trim()||node.props.name;\r
      node.props.waveType=document.getElementById('prop-waveType')?.value||node.props.waveType;\r
      node.props.outputFormat=document.getElementById('prop-outputFormat')?.value||node.props.outputFormat;\r
      node.props.amplitude=document.getElementById('prop-amplitude')?.value.trim()||node.props.amplitude;\r
      node.props.frequency=document.getElementById('prop-frequency')?.value.trim()||node.props.frequency;\r
    }else if(node.type==='flow_block'){\r
      node.props.name=document.getElementById('prop-name')?.value.trim()||node.props.name;\r
      node.props.inputName=document.getElementById('prop-inputName')?.value.trim()||'输入信号';\r
      node.props.inputFormat=document.getElementById('prop-inputFormat')?.value||'标量';\r
      node.props.outputName=document.getElementById('prop-outputName')?.value.trim()||'输出信号';\r
      node.props.outputFormat=document.getElementById('prop-outputFormat')?.value||'标量';\r
    }else if(node.type==='simulation_block'){\r
      node.props.name=document.getElementById('prop-name')?.value.trim()||node.props.name;\r
      if(!isPythonBoundFlowBlock(node)){\r
        node.props.moduleType=document.getElementById('prop-moduleType')?.value||node.props.moduleType;\r
        const inputCount=clampInterfaceCount(document.getElementById('sim-input-count')?.value,SIM_INTERFACE_LIMITS.inputs);\r
        const outputCount=clampInterfaceCount(document.getElementById('sim-output-count')?.value,SIM_INTERFACE_LIMITS.outputs);\r
        const middleCount=clampInterfaceCount(document.getElementById('sim-middle-count')?.value,SIM_INTERFACE_LIMITS.middleVars);\r
        node.props.inputs=normalizeSimulationInterfaceList(readSimulationRowsClean('输入','标量').slice(0,inputCount),'输入',node.props.inputs[0]?.type||'标量',inputCount);\r
        node.props.outputs=normalizeSimulationInterfaceList(readSimulationRowsClean('输出','标量').slice(0,outputCount),'输出',node.props.outputs[0]?.type||'标量',outputCount);\r
        node.props.middleVars=normalizeSimulationInterfaceList(readSimulationRowsClean('中间变量','标量').slice(0,middleCount),'中间变量',node.props.middleVars[0]?.type||'标量',middleCount);\r
        node.props.ffunctionNote=document.getElementById('prop-ffunctionNote')?.value.trim()||node.props.ffunctionNote||'';\r
        pruneInvalidEdgesForNode(node);\r
      }\r
    }else if(node.type?.startsWith('instrument_')){\r
      node.props.name=document.getElementById('prop-name')?.value.trim()||node.props.name;\r
      node.props.sampleRate=document.getElementById('prop-sampleRate')?.value.trim()||node.props.sampleRate||'64kHz';\r
      node.props.signal=document.getElementById('prop-signal')?.value.trim()||node.props.signal||'输入信号';\r
    }else{\r
      return __finalCleanSaveSelectedNode();\r
    }\r
    markTopologyDirty(getMutationScopeForType(node.type));\r
    syncAllPythonInputConnectionState();\r
    renderModelNodes();\r
    renderPropertyPanel(node);\r
    syncConfigTargets(node.id);\r
    updateUI();\r
    toast('设置已保存','s');\r
  };\r
\r
  const __finalCleanRenderModelNodes = renderModelNodes;\r
  renderModelNodes = function(){\r
    normalizeAllBindingLabels();\r
    __finalCleanRenderModelNodes();\r
    S.modelNodes.forEach(node=>{\r
      const el=document.getElementById(\`b-\${node.id}\`);\r
      if(!el){return;}\r
      if(node.type==='simulation_block'&&isPythonBoundFlowBlock(node)){\r
        const kicker=el.querySelector('.blk-kicker');\r
        const sub=el.querySelector('.blk-sub');\r
        if(kicker){kicker.textContent='Python 已绑定';}\r
        if(sub){sub.textContent=\`仿真块 · \${getPythonBindingSummary(node)}\`;}\r
        const ports=getNodePorts(node);\r
        [...el.querySelectorAll('.node-port--input')].forEach((portEl,index)=>{\r
          if(!portEl.querySelector('.node-port__label')&&ports.inputs[index]){\r
            appendPortLabel(portEl,ports.inputs[index]);\r
          }\r
        });\r
        [...el.querySelectorAll('.node-port--output')].forEach((portEl,index)=>{\r
          if(!portEl.querySelector('.node-port__label')&&ports.outputs[index]){\r
            appendPortLabel(portEl,ports.outputs[index]);\r
          }\r
        });\r
      }\r
      if(node.type==='instrument_scope'){\r
        el.title='双击查看示波器';\r
      }else if(node.type==='simulation_block'){\r
        el.title=isPythonBoundFlowBlock(node)\r
          ?\`已绑定 Python：\${node.pythonBinding?.fileName||'unknown.py'}\\n双击可重新绑定\`\r
          :'双击绑定 Python 文件';\r
      }else if(node.type==='middle_var_assign'){\r
        el.title='将输入信号或常值写入目标仿真块的中间变量';\r
      }\r
    });\r
    renderEdges();\r
  };\r
\r
  const __finalCleanSetConnectionTool = setConnectionTool;\r
  setConnectionTool = function(type){\r
    __finalCleanSetConnectionTool(type);\r
    const chip=document.getElementById('line-mode-chip');\r
    if(chip){\r
      chip.textContent=S.activeLineType==='can'?'CAN 总线':'普通连接线';\r
    }\r
  };\r
\r
  toast = function(msg,type='w'){\r
    const el=document.getElementById('toast');\r
    const ti=document.getElementById('ti');\r
    const tm=document.getElementById('tm');\r
    if(!el||!ti||!tm){return;}\r
    el.className='toast '+(type==='s'?'toast-s':'toast-w')+' on';\r
    ti.className=type==='s'?'ti-s':'ti-w';\r
    ti.textContent=type==='s'?'成功':'提示';\r
    tm.textContent=msg;\r
    clearTimeout(toastT);\r
    toastT=setTimeout(()=>el.classList.remove('on'),3500);\r
  };\r
\r
  const __finalCleanApplyPackage = window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__;\r
  window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__ = function(pkg,prepared){\r
    const result=__finalCleanApplyPackage?.(pkg,prepared);\r
    normalizeAllBindingLabels();\r
    return result;\r
  };\r
\r
  Object.assign(window,{\r
    autoArrangeCanvas,\r
    renderEdges,\r
    renderModelNodes,\r
    renderPropertyPanel,\r
    saveSelectedNode,\r
    getPortDisplayName,\r
    buildPythonPortTooltip,\r
    buildPythonBindingPortRows,\r
    __GZ_EXPORT_INSTRUMENT_SAMPLES__:exportInstrumentSamples,\r
    __GZ_CLEAR_INSTRUMENT_SAMPLES__:clearInstrumentSamples,\r
    setConnectionTool,\r
    toast\r
  });\r
})();\r
\r
;(function installFinalCanvasVisualSemantics(){\r
  if(typeof window==='undefined'||window.__canvasVisualSemanticFinalWrapped) return;\r
  window.__canvasVisualSemanticFinalWrapped=true;\r
\r
  function getState(){\r
    return window.__GZ_STATE__||(typeof S!=='undefined'?S:{});\r
  }\r
\r
  function nodeText(node){\r
    return [\r
      node?.id,\r
      node?.props?.name,\r
      node?.props?.moduleType,\r
      node?.props?.instrumentType\r
    ].filter(Boolean).join(' ').toLowerCase();\r
  }\r
\r
  function moduleText(node){\r
    return [\r
      node?.props?.name,\r
      node?.props?.moduleType,\r
      node?.props?.instrumentType\r
    ].filter(Boolean).join(' ').toLowerCase();\r
  }\r
\r
  function getVisualKind(node){\r
    const text=nodeText(node);\r
    if(!node) return 'unknown';\r
    if(node.type==='signal_source'||node.type==='subsystem_in_port') return 'source';\r
    if(node.type==='sum_block') return 'sum';\r
    if(node.type==='gain_block'||node.type==='mux_block'||node.type==='middle_var_assign') return 'utility';\r
    if(node.type?.startsWith('fault_')) return 'fault';\r
    if(node.type==='subsystem_block'||node.type==='subsystem_out_port') return 'subsystem';\r
    if(node.type?.startsWith('instrument_')||node.type==='instrument_signal_flow') return 'instrument';\r
    if(/imu|sensor|gyro|测量|反馈/.test(text)) return 'sensor';\r
    if(/motor|actuator|mixer|thrust|电机|执行/.test(text)) return 'actuator';\r
    if(/dynamic|plant|airframe|vehicle|动力|机体/.test(text)) return 'plant';\r
    if(/allocat|分配/.test(text)) return 'allocator';\r
    if(/control|controller|pid|控制/.test(text)) return 'control';\r
    return 'process';\r
  }\r
\r
  function decorateCanvasNodes(){\r
    const state=getState();\r
    if(!Array.isArray(state.modelNodes)||typeof document==='undefined') return;\r
    const byId=new Map(state.modelNodes.map(node=>[node.id,node]));\r
    document.querySelectorAll('.blk[id^="b-"]').forEach(el=>{\r
      const node=byId.get(el.id.replace(/^b-/,''));\r
      const kind=getVisualKind(node);\r
      Array.from(el.classList)\r
        .filter(cls=>cls.startsWith('canvas-node--'))\r
        .forEach(cls=>el.classList.remove(cls));\r
      el.classList.add(\`canvas-node--\${kind}\`);\r
      el.dataset.visualKind=kind;\r
    });\r
  }\r
\r
  const previousRenderModelNodes=window.renderModelNodes||(typeof renderModelNodes!=='undefined'?renderModelNodes:null);\r
  if(previousRenderModelNodes){\r
    window.renderModelNodes=function(){\r
      const result=previousRenderModelNodes.apply(this,arguments);\r
      decorateCanvasNodes();\r
      return result;\r
    };\r
    if(typeof renderModelNodes!=='undefined') renderModelNodes=window.renderModelNodes;\r
  }\r
\r
  const previousUpdateUI=window.updateUI||(typeof updateUI!=='undefined'?updateUI:null);\r
  if(previousUpdateUI){\r
    window.updateUI=function(){\r
      const result=previousUpdateUI.apply(this,arguments);\r
      decorateCanvasNodes();\r
      return result;\r
    };\r
    if(typeof updateUI!=='undefined') updateUI=window.updateUI;\r
  }\r
\r
  window.decorateCanvasNodesByVisualKind=decorateCanvasNodes;\r
  setTimeout(decorateCanvasNodes,0);\r
})();\r
\r
;(function installCanvasVisualSemantics(){\r
  if(typeof window==='undefined') return;\r
\r
  function getState(){\r
    return window.__GZ_STATE__||(typeof S!=='undefined'?S:{});\r
  }\r
\r
  function nodeText(node){\r
    return [\r
      node?.id,\r
      node?.props?.name,\r
      node?.props?.moduleType,\r
      node?.props?.instrumentType\r
    ].filter(Boolean).join(' ').toLowerCase();\r
  }\r
\r
  function getVisualKind(node){\r
    const text=nodeText(node);\r
    if(!node) return 'unknown';\r
    if(node.type==='signal_source'||node.type==='subsystem_in_port') return 'source';\r
    if(node.type==='sum_block') return 'sum';\r
    if(node.type==='gain_block'||node.type==='mux_block'||node.type==='middle_var_assign') return 'utility';\r
    if(node.type?.startsWith('fault_')) return 'fault';\r
    if(node.type==='subsystem_block'||node.type==='subsystem_out_port') return 'subsystem';\r
    if(node.type?.startsWith('instrument_')||node.type==='instrument_signal_flow') return 'instrument';\r
    if(/imu|sensor|gyro|测量|反馈/.test(text)) return 'sensor';\r
    if(/motor|actuator|mixer|thrust|电机|执行/.test(text)) return 'actuator';\r
    if(/dynamic|plant|airframe|vehicle|动力|机体/.test(text)) return 'plant';\r
    if(/allocat|分配/.test(text)) return 'allocator';\r
    if(/control|controller|pid|控制/.test(text)) return 'control';\r
    if(node.type==='simulation_block'||node.type==='flow_block') return 'process';\r
    return 'process';\r
  }\r
\r
  function decorateCanvasNodes(){\r
    const state=getState();\r
    if(!Array.isArray(state.modelNodes)) return;\r
    const byId=new Map(state.modelNodes.map(node=>[node.id,node]));\r
    if(typeof document==='undefined') return;\r
    document.querySelectorAll('.blk[id^="b-"]').forEach(el=>{\r
      const nodeId=el.id.replace(/^b-/,'');\r
      const node=byId.get(nodeId);\r
      const kind=getVisualKind(node);\r
      Array.from(el.classList)\r
        .filter(cls=>cls.startsWith('canvas-node--'))\r
        .forEach(cls=>el.classList.remove(cls));\r
      el.classList.add(\`canvas-node--\${kind}\`);\r
      el.dataset.visualKind=kind;\r
    });\r
  }\r
\r
  const previousRenderModelNodes=window.renderModelNodes||(typeof renderModelNodes!=='undefined'?renderModelNodes:null);\r
  if(previousRenderModelNodes&&!window.__canvasVisualSemanticRenderWrapped){\r
    window.__canvasVisualSemanticRenderWrapped=true;\r
    window.renderModelNodes=function(){\r
      const result=previousRenderModelNodes.apply(this,arguments);\r
      decorateCanvasNodes();\r
      return result;\r
    };\r
    if(typeof renderModelNodes!=='undefined') renderModelNodes=window.renderModelNodes;\r
  }\r
\r
  const previousUpdateUI=window.updateUI||(typeof updateUI!=='undefined'?updateUI:null);\r
  if(previousUpdateUI&&!window.__canvasVisualSemanticUpdateWrapped){\r
    window.__canvasVisualSemanticUpdateWrapped=true;\r
    window.updateUI=function(){\r
      const result=previousUpdateUI.apply(this,arguments);\r
      decorateCanvasNodes();\r
      return result;\r
    };\r
    if(typeof updateUI!=='undefined') updateUI=window.updateUI;\r
  }\r
\r
  window.decorateCanvasNodesByVisualKind=decorateCanvasNodes;\r
  setTimeout(decorateCanvasNodes,0);\r
})();\r
\r
// --- 系统-故障库兼容过滤与独立注入入口 ---\r
(function(){\r
  const UAV_FAULT_LIBRARY_ID='uav-flight-control-faults';\r
  const UAV_SYSTEM_FAMILY='uav-flight-control';\r
\r
  function getCompatibilityApi(){\r
    return window.__GZ_FAULT_INJECTION_RUNTIME__?.compatibility||null;\r
  }\r
\r
  function html(value){\r
    if(typeof escapeHtml==='function'){\r
      return escapeHtml(String(value??''));\r
    }\r
    return String(value??'').replace(/[&<>"']/g,(ch)=>({\r
      '&':'&amp;',\r
      '<':'&lt;',\r
      '>':'&gt;',\r
      '"':'&quot;',\r
      "'":'&#39;'\r
    }[ch]));\r
  }\r
\r
  function setTextById(id,value){\r
    const el=document.getElementById(id);\r
    if(el){el.textContent=String(value??'');}\r
  }\r
\r
  function normalizeFaultInjectionCopy(){\r
    const btn=document.getElementById('btn-imp-flt');\r
    if(btn){btn.textContent='注入故障';}\r
    const title=document.querySelector('#ov-ifm .mtitle');\r
    if(title){title.textContent='注入故障';}\r
    const sub=document.querySelector('#ov-ifm .ifm-modal-sub');\r
    if(sub){\r
      sub.textContent='按当前系统模型筛选匹配的故障库，可选择一个或多个故障并配置参数后注入到画布组件或 CAN 边。';\r
    }\r
    const listHead=document.querySelector('#ov-ifm .ifm-list-head span');\r
    if(listHead){listHead.textContent='可注入故障';}\r
    const buildHint=document.querySelector('#ov-ifm .ifm-build-hint');\r
    if(buildHint){\r
      buildHint.textContent='当前库为无人机飞控系统故障库，仅在导入兼容飞控模型后可注入；其他系统需单独设计故障库。';\r
    }\r
    const ok=document.querySelector('#ov-ifm .btn-ok-r');\r
    if(ok){ok.textContent='确认注入';}\r
  }\r
\r
  function buildActiveFaultCatalog(models){\r
    return {\r
      libraryId:UAV_FAULT_LIBRARY_ID,\r
      systemFamily:UAV_SYSTEM_FAMILY,\r
      faultTypes:Array.isArray(models)?models:[]\r
    };\r
  }\r
\r
  function collectCatalogCandidateModels(){\r
    if(typeof window.getFaultTypeCatalogModels==='function'){\r
      const catalogModels=window.getFaultTypeCatalogModels();\r
      if(Array.isArray(catalogModels)&&catalogModels.length>0){\r
        return catalogModels;\r
      }\r
    }\r
    const byId=new Map();\r
    const append=(items)=>{\r
      if(!Array.isArray(items)){return;}\r
      items.forEach((model)=>{\r
        if(!model||typeof model!=='object'){return;}\r
        const key=model.id||\`\${model.name||''}::\${model.layer||''}\`;\r
        if(key&&!byId.has(key)){\r
          byId.set(key,model);\r
        }\r
      });\r
    };\r
    append(S.availableFaultModels||[]);\r
    return Array.from(byId.values());\r
  }\r
\r
  function getCompatibleFaultCatalogModels(){\r
    const api=getCompatibilityApi();\r
    const candidates=collectCatalogCandidateModels();\r
    if(!api||!S.activeModelPackage){\r
      return [];\r
    }\r
    return api.filterCompatibleFaultTypes?.(buildActiveFaultCatalog(candidates),S.activeModelPackage)||[];\r
  }\r
\r
  function getVisibleCompatibleFaultModels(models){\r
    const layer=S.faultCatalogLayerFilter||'all';\r
    const query=String(S.faultCatalogSearch||'').trim().toLowerCase();\r
    return models.filter((model)=>{\r
      if(layer!=='all'&&model.layer!==layer){return false;}\r
      if(!query){return true;}\r
      return [\r
        model.id,\r
        model.name,\r
        model.layer,\r
        model.modelClass,\r
        model.desc,\r
        model.description,\r
        model.formula,\r
        model.platformImplementation?.recommendedModule,\r
        model.platformImplementation?.pythonFunction,\r
        ...(Array.isArray(model.typicalTargets)?model.typicalTargets:[]),\r
        ...(Array.isArray(model.observableSignals)?model.observableSignals:[])\r
      ].filter(Boolean).join(' ').toLowerCase().includes(query);\r
    });\r
  }\r
\r
  function updateFaultCatalogCompatibilitySummary(compatibleModels){\r
    const summary={total:0,physical:0,electrical:0,protocol:0};\r
    compatibleModels.forEach((model)=>{\r
      summary.total+=1;\r
      if(summary[model.layer]!==undefined){\r
        summary[model.layer]+=1;\r
      }\r
    });\r
    setTextById('ifm-total-count',summary.total);\r
    setTextById('ifm-physical-count',summary.physical);\r
    setTextById('ifm-electrical-count',summary.electrical);\r
    setTextById('ifm-protocol-count',summary.protocol);\r
    setTextById('ifm-visible-count',getVisibleCompatibleFaultModels(compatibleModels).length);\r
  }\r
\r
  function countSystemNodes(){\r
    const seen=new Set();\r
    const append=(items)=>{\r
      if(!Array.isArray(items)){return;}\r
      items.forEach((node)=>{\r
        if(node?.id){seen.add(node.id);}\r
      });\r
    };\r
    append(S.modelNodes);\r
    if(S.canvases&&typeof S.canvases==='object'){\r
      Object.values(S.canvases).forEach((canvas)=>append(canvas?.nodes));\r
    }\r
    return seen.size;\r
  }\r
\r
  function renderCompatibilityEmptyState(message){\r
    const container=document.getElementById('ifm-list-container');\r
    if(container){\r
      container.innerHTML=\`<div class="ifm-empty">\${html(message)}</div>\`;\r
    }\r
    const detail=document.getElementById('fault-type-detail');\r
    if(detail){\r
      detail.innerHTML=\`<div class="ifm-detail-empty">\${html(message)}</div>\`;\r
    }\r
    const hint=document.getElementById('ifm-sel-hint');\r
    if(hint){\r
      hint.textContent='已选：当前系统没有可注入的飞控故障';\r
    }\r
    const ok=document.querySelector('#ov-ifm .btn-ok-r');\r
    if(ok){ok.disabled=true;}\r
  }\r
\r
  function syncActivePackageCompatibilityMetadata(pkg,prepared){\r
    if(!S.activeModelPackage){return;}\r
    const descriptor=prepared?.descriptor||{};\r
    const systemFamily=pkg?.systemFamily??descriptor.systemFamily??null;\r
    const hasPackageLibraries=Array.isArray(pkg?.supportedFaultLibraries);\r
    const hasDescriptorLibraries=Array.isArray(descriptor.supportedFaultLibraries)&&descriptor.supportedFaultLibraries.length>0;\r
    const supportedFaultLibraries=hasPackageLibraries\r
      ? cloneDefaults(pkg.supportedFaultLibraries)\r
      : hasDescriptorLibraries\r
        ? cloneDefaults(descriptor.supportedFaultLibraries)\r
        : undefined;\r
    const capabilities=(pkg?.capabilities&&typeof pkg.capabilities==='object')\r
      ? cloneDefaults(pkg.capabilities)\r
      : (descriptor.capabilities&&typeof descriptor.capabilities==='object')\r
        ? cloneDefaults(descriptor.capabilities)\r
        : {};\r
\r
    if(systemFamily){\r
      S.activeModelPackage.systemFamily=systemFamily;\r
    }\r
    if(supportedFaultLibraries){\r
      S.activeModelPackage.supportedFaultLibraries=supportedFaultLibraries;\r
    }\r
    S.activeModelPackage.capabilities=capabilities;\r
  }\r
\r
  if(typeof window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__==='function'){\r
    const __compatApplyFlightModelPackage=window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__;\r
    window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__=function(pkg,prepared){\r
      const result=__compatApplyFlightModelPackage(pkg,prepared);\r
      if(result?.ok!==false){\r
        syncActivePackageCompatibilityMetadata(pkg,prepared);\r
      }\r
      return result;\r
    };\r
  }\r
\r
  const __compatRenderFaultCatalogList=renderFaultCatalogList;\r
  renderFaultCatalogList=function(){\r
    normalizeFaultInjectionCopy();\r
    const compatibleModels=getCompatibleFaultCatalogModels();\r
    const visibleCompatible=getVisibleCompatibleFaultModels(compatibleModels);\r
    const compatibleIds=new Set(compatibleModels.map((model)=>model.id));\r
\r
    if(!compatibleIds.has(S.selectedFaultCatalogId)){\r
      S.selectedFaultCatalogId=visibleCompatible[0]?.id||compatibleModels[0]?.id||'';\r
    }\r
\r
    const result=__compatRenderFaultCatalogList();\r
    updateFaultCatalogCompatibilitySummary(compatibleModels);\r
\r
    const ok=document.querySelector('#ov-ifm .btn-ok-r');\r
    if(ok){ok.disabled=false;}\r
\r
    if(!S.activeModelPackage){\r
      S.availableFaultModels=[];\r
      renderCompatibilityEmptyState('当前系统没有模型包元数据，无法匹配无人机飞控故障库。');\r
      return result;\r
    }\r
\r
    if(compatibleModels.length===0){\r
      S.availableFaultModels=[];\r
      S.selectedFaultCatalogId='';\r
      renderCompatibilityEmptyState('当前系统不支持无人机飞控故障库，请为该系统设计对应的故障库。');\r
      return result;\r
    }\r
\r
    document.querySelectorAll('#ifm-list-container [data-fault-id]').forEach((item)=>{\r
      if(!compatibleIds.has(item.dataset.faultId)){\r
        item.remove();\r
      }\r
    });\r
\r
    if(visibleCompatible.length===0){\r
      const container=document.getElementById('ifm-list-container');\r
      if(container){\r
        container.innerHTML='<div class="ifm-empty">当前筛选条件下没有可注入故障。</div>';\r
      }\r
    }\r
\r
    const selected=compatibleModels.find((model)=>model.id===S.selectedFaultCatalogId);\r
    if(!selected){\r
      const detail=document.getElementById('fault-type-detail');\r
      if(detail){\r
        detail.innerHTML='<div class="ifm-detail-empty">请选择一个与当前飞控系统匹配的故障。</div>';\r
      }\r
    }\r
\r
    return result;\r
  };\r
\r
  const __compatDoImportFault=doImportFault;\r
  doImportFault=function(){\r
    normalizeFaultInjectionCopy();\r
    if(!S.sysLoaded){\r
      toast('请先导入或新建系统模型','w');\r
      return;\r
    }\r
    if(countSystemNodes()===0){\r
      toast('请先在系统建模页拖入组件','w');\r
      return;\r
    }\r
\r
    const compatibleModels=getCompatibleFaultCatalogModels();\r
    renderFaultCatalogList();\r
    openOv('ov-ifm');\r
\r
    if(compatibleModels.length===0){\r
      toast('当前系统未绑定无人机飞控故障库，需为该系统单独设计故障。','w');\r
    }\r
  };\r
\r
  const __compatConfirmImportFault=confirmImportFault;\r
  confirmImportFault=function(){\r
    const compatibleModels=getCompatibleFaultCatalogModels();\r
    const selected=compatibleModels.find((model)=>model.id===S.selectedFaultCatalogId);\r
    if(!selected){\r
      toast('请先选择与当前系统匹配的故障','w');\r
      return;\r
    }\r
    return __compatConfirmImportFault();\r
  };\r
\r
  const __compatUpdateUI=updateUI;\r
  updateUI=function(){\r
    const result=__compatUpdateUI();\r
    normalizeFaultInjectionCopy();\r
    return result;\r
  };\r
\r
  normalizeFaultInjectionCopy();\r
  Object.assign(window,{\r
    confirmImportFault,\r
    doImportFault,\r
    renderFaultCatalogList\r
  });\r
})();\r
\r
// --- Typed property panel, fault cancellation, and edge signal metadata ---\r
(function(){\r
  const PANEL_TABS=['overview','parameters','faults','outputs'];\r
  const TAB_LABELS={overview:'属性',parameters:'参数配置',faults:'故障设置',outputs:'输出配置'};\r
  S.propertyPanelTab=PANEL_TABS.includes(S.propertyPanelTab)?S.propertyPanelTab:'overview';\r
\r
  function text(value,fallback=''){\r
    const raw=value===undefined||value===null||value===''?fallback:value;\r
    return escapeHtml(String(raw));\r
  }\r
\r
  function jsString(value){\r
    return String(value??'').replace(/\\\\/g,'\\\\\\\\').replace(/'/g,"\\\\'").replace(/\\r?\\n/g,' ');\r
  }\r
\r
  function isEdgeTarget(target){\r
    return Boolean(target?.sourceNodeId&&target?.targetNodeId&&!target?.type);\r
  }\r
\r
  function getSelectedPropertyTarget(){\r
    if(S.selEdge){return getEdge(S.selEdge);}\r
    if(S.selBlk){return getNode(S.selBlk);}\r
    return null;\r
  }\r
\r
  function syncPropertyTabs(){\r
    document.querySelectorAll('.props-tab').forEach((button,index)=>{\r
      const tab=button.dataset.propsTab||PANEL_TABS[index]||'overview';\r
      button.dataset.propsTab=tab;\r
      button.classList.toggle('is-active',tab===S.propertyPanelTab);\r
      button.setAttribute('aria-selected',tab===S.propertyPanelTab?'true':'false');\r
      if(!button.getAttribute('type')){button.setAttribute('type','button');}\r
      if(!button.dataset.tabListenerBound){\r
        button.addEventListener('click',()=>setPropertyPanelTab(tab));\r
        button.dataset.tabListenerBound='true';\r
      }\r
      if(TAB_LABELS[tab]&&!button.textContent.trim()){button.textContent=TAB_LABELS[tab];}\r
    });\r
  }\r
\r
  function setHeaderSub(target){\r
    const sub=document.querySelector('.ph-sub');\r
    if(!sub){return;}\r
    if(!target){\r
      sub.textContent='当前选择 · 配置参数';\r
      return;\r
    }\r
    sub.textContent=isEdgeTarget(target)\r
      ?'当前选择 · 连线与多信号流'\r
      :'当前选择 · 组件属性';\r
  }\r
\r
  function edgePrimarySignal(edge){\r
    return edgeSignals(edge)[0]||{};\r
  }\r
\r
  function normalizeEdgeSignalChannel(edge,channel,index){\r
    const topLevel=index===0?edge||{}:{};\r
    const fallbackRole=index===0?'primary':'secondary';\r
    return {\r
      signalId:topLevel.signalId||channel?.signalId||channel?.name||'',\r
      channelId:topLevel.channelId||channel?.channelId||channel?.channel||'',\r
      messageId:topLevel.messageId||channel?.messageId||channel?.frameId||'',\r
      signalRole:topLevel.signalRole||channel?.signalRole||channel?.role||fallbackRole,\r
      signalUnit:topLevel.signalUnit||channel?.signalUnit||channel?.unit||'',\r
      payloadKind:topLevel.payloadKind||channel?.payloadKind||channel?.type||'',\r
      sampleRate:topLevel.sampleRate||channel?.sampleRate||'',\r
      faultPropagationPolicy:topLevel.faultPropagationPolicy||channel?.faultPropagationPolicy||'inherit'\r
    };\r
  }\r
\r
  function edgeSignals(edge){\r
    const channels=Array.isArray(edge?.signalChannels)\r
      ?edge.signalChannels.filter(Boolean)\r
      :[];\r
    const source=channels.length?channels:[{}];\r
    return source.map((channel,index)=>normalizeEdgeSignalChannel(edge,channel,index));\r
  }\r
\r
  function getLineLabel(edge){\r
    return edge?.lineType==='can'?'CAN 总线':'普通连线';\r
  }\r
\r
  function getPortLabelForPanel(node,direction,index){\r
    const ports=getNodePorts(node)[direction==='input'?'inputs':'outputs']||[];\r
    const port=ports[index||0];\r
    if(!port){return \`#\${(index||0)+1}\`;}\r
    return getPortDisplayName(port)||port.label||port.varName||\`#\${(index||0)+1}\`;\r
  }\r
\r
  function getTargetTitle(target){\r
    if(isEdgeTarget(target)){\r
      const source=getNode(target.sourceNodeId);\r
      const dest=getNode(target.targetNodeId);\r
      const semantic=getEdgeSemanticContextForPanel(target);\r
      const sourceName=source?.props?.name||target.sourceNodeId;\r
      const targetName=dest?.props?.name||target.targetNodeId;\r
      return \`\${semantic.signalNameZh||getLineLabel(target)} · \${sourceName} → \${targetName}\`;\r
    }\r
    const meta=COMPONENT_LIBRARY[target?.type]||{};\r
    return \`\${target?.props?.name||target?.id||'Component'} · \${meta.label||target?.type||'component'}\`;\r
  }\r
\r
  function renderRows(rows){\r
    return rows.map(([key,value,extraClass=''])=>\`\r
      <div class="prow">\r
        <span class="pk">\${text(key)}</span>\r
        <span class="pv \${extraClass}">\${text(value,'--')}</span>\r
      </div>\`).join('');\r
  }\r
\r
  function edgeChannelLabel(signal,index){\r
    return (index===0||signal.signalRole==='primary')?'primary':'secondary';\r
  }\r
\r
  function edgeChannelTitle(signal,index){\r
    const label=edgeChannelLabel(signal,index);\r
    return label==='primary'?'主通道':\`次级通道 \${index}\`;\r
  }\r
\r
  function renderEdgeChannelSummary(signal,index){\r
    const label=edgeChannelLabel(signal,index);\r
    return \`\r
      <div class="props-channel-card" data-edge-channel-card="\${text(label)}">\r
        <div class="props-channel-card__head">\r
          <strong>\${text(edgeChannelTitle(signal,index))}</strong>\r
          <span>\${text(signal.faultPropagationPolicy||'inherit')}</span>\r
        </div>\r
        \${renderRows([\r
          ['信号ID',signal.signalId||'未设置'],\r
          ['通道ID',signal.channelId||'未设置'],\r
          ['CAN报文',signal.messageId||'未设置'],\r
          ['信号角色',signal.signalRole||label],\r
          ['单位',signal.signalUnit||'--'],\r
          ['载荷类型',signal.payloadKind||'--'],\r
          ['采样率',signal.sampleRate||'--']\r
        ])}\r
      </div>\`;\r
  }\r
\r
  function renderEdgePayloadSummary(signals){\r
    return signals.map((signal,index)=>\`\r
      <span class="props-chip">\r
        \${text(index===0?'主信号':'次级信号')}：\${text(signal.signalId||'未设置')} / \${text(signal.channelId||'未设置')} / \${text(signal.messageId||'未设置')} / \${text(signal.payloadKind||'载荷')}\r
      </span>\`).join('');\r
  }\r
\r
  const EDGE_PROPAGATION_SCOPE_PANEL_LABELS={\r
    propagated:'可沿信号传播',\r
    localEffect:'本地参数影响，不直接沿线传播',\r
    blocked:'阻断当前链路',\r
    diagnosticOnly:'只作为诊断观测',\r
    none:'正常/未受故障影响'\r
  };\r
\r
  function getEdgeSemanticContextForPanel(edge){\r
    const metrics=(typeof window.getDataflowEdgeMetrics==='function'?window.getDataflowEdgeMetrics(edge):{})||{};\r
    let semanticEdge=null;\r
    let measurementPoint=null;\r
    let measurementPointIndex=-1;\r
    if(typeof window.buildDataflowSemanticModel==='function'){\r
      const semantic=window.buildDataflowSemanticModel();\r
      const edges=Array.isArray(semantic?.edges)?semantic.edges:[];\r
      const points=Array.isArray(semantic?.measurementPoints)?semantic.measurementPoints:[];\r
      semanticEdge=edges.find(item=>item.id===edge?.id)||null;\r
      measurementPoint=points.find(point=>point.edgeId===edge?.id)||null;\r
      measurementPointIndex=measurementPoint?points.indexOf(measurementPoint):-1;\r
    }\r
    const primary=Array.isArray(edge?.signalChannels)&&edge.signalChannels.length>0\r
      ?edge.signalChannels[0]\r
      :{};\r
    const mapping=semanticEdge?.mapping||measurementPoint?.mapping||{\r
      engineeringKey:edge?.signalId||metrics.signalId||primary.signalId||edge?.id||'',\r
      edgeId:edge?.id||'',\r
      sourceNodeId:edge?.sourceNodeId||'',\r
      targetNodeId:edge?.targetNodeId||'',\r
      signalId:edge?.signalId||metrics.signalId||primary.signalId||'',\r
      channelId:edge?.channelId||metrics.channelId||primary.channelId||primary.channel||'',\r
      messageId:edge?.messageId||metrics.messageId||primary.messageId||primary.frameId||'',\r
      pythonVariable:edge?.pythonVariable||primary.pythonVariable||edge?.sourcePortMeta?.varName||edge?.sourcePort?.varName||''\r
    };\r
    const rawPolicy=String(edge?.faultPropagationPolicy||primary.faultPropagationPolicy||'inherit').trim().toLowerCase();\r
    const fallbackPolicyKind=rawPolicy==='propagates'||rawPolicy==='propagated'||rawPolicy==='propagate'\r
      ?'propagated'\r
      :(rawPolicy==='blocks'||rawPolicy==='blocked'||rawPolicy==='block'\r
        ?'blocked'\r
        :(rawPolicy==='localonly'||rawPolicy==='local_only'||rawPolicy==='localeffect'||rawPolicy==='local'\r
          ?'localEffect'\r
          :(rawPolicy==='diagnosticonly'||rawPolicy==='diagnostic_only'||rawPolicy==='diagnostic'?'diagnosticOnly':'none')));\r
    const policyKind=semanticEdge?.propagationPolicyKind||measurementPoint?.propagationPolicyKind||fallbackPolicyKind;\r
    const influenceKind=semanticEdge?.propagationKind||measurementPoint?.faultInfluence||'none';\r
    const scopeKind=influenceKind&&influenceKind!=='none'?influenceKind:(policyKind||'none');\r
    return {\r
      semanticEdge,\r
      measurementPoint,\r
      measurementPointIndex,\r
      mapping,\r
      signalNameZh:semanticEdge?.signalNameZh||measurementPoint?.signalNameZh||'未命名中文信号',\r
      signalPathZh:semanticEdge?.signalPathZh||measurementPoint?.signalPathZh||'信号路径',\r
      propagationScopeZh:EDGE_PROPAGATION_SCOPE_PANEL_LABELS[scopeKind]||EDGE_PROPAGATION_SCOPE_PANEL_LABELS.none,\r
      propagationDescriptionZh:semanticEdge?.propagationDescriptionZh||measurementPoint?.propagationDescriptionZh||'当前链路暂无故障传播判定。',\r
      measurementLabelZh:measurementPoint?.labelZh||(measurementPointIndex>=0?\`测点 M\${measurementPointIndex+1}\`:'未绑定测点')\r
    };\r
  }\r
\r
  function renderEdgeChineseSummary(context){\r
    return \`\r
      <div class="props-edge-chinese-summary" data-edge-chinese-summary>\r
        <div class="props-edge-summary-title">链路摘要</div>\r
        <strong class="props-edge-summary-name">\${text(context.signalNameZh)}</strong>\r
        <span class="props-edge-summary-path">\${text(context.signalPathZh)}</span>\r
        <div class="props-edge-summary-grid">\r
          <span><em>故障传播范围</em><b>\${text(context.propagationScopeZh)}</b></span>\r
          <span><em>所属测点</em><b>\${text(context.measurementLabelZh)}</b></span>\r
        </div>\r
      </div>\`;\r
  }\r
\r
  function renderEdgeInternalMapping(mapping={}){\r
    return \`\r
      <div class="props-edge-internal-mapping" data-edge-internal-mapping>\r
        <div class="props-edge-internal-title">内部映射</div>\r
        \${renderRows([\r
          ['边ID',mapping.edgeId],\r
          ['源节点ID',mapping.sourceNodeId],\r
          ['目标节点ID',mapping.targetNodeId],\r
          ['信号ID',mapping.signalId||mapping.engineeringKey],\r
          ['通道ID',mapping.channelId],\r
          ['CAN报文',mapping.messageId],\r
          ['Python变量',mapping.pythonVariable]\r
        ])}\r
      </div>\`;\r
  }\r
\r
  function activeFaultBindingsForPanel(target){\r
    if(!target){return [];}\r
    const api=window.__GZ_FAULT_INJECTION_RUNTIME__||null;\r
    if(api?.getFaultBindings){\r
      const bindings=api.getFaultBindings(target,{activeOnly:true})||[];\r
      if(bindings.length){return bindings;}\r
    }\r
    if(Array.isArray(target.faultBindings)){\r
      return target.faultBindings.filter((binding)=>binding&&binding.active!==false);\r
    }\r
    return target.injectedFault?[{\r
      bindingId:\`legacy-\${target.injectedFault.modelId||target.id}\`,\r
      faultModelId:target.injectedFault.modelId||'',\r
      name:target.injectedFault.name||'Fault',\r
      layer:target.injectedFault.layer||'',\r
      runtimeBehavior:target.injectedFault.runtimeBehavior||'',\r
      propagationMode:target.injectedFault.layer==='protocol'?'protocolEdge':'signalTransform',\r
      parameters:target.injectedFault.parameters||{},\r
      active:true,\r
      injectedFault:target.injectedFault\r
    }]:[];\r
  }\r
\r
  function hasActiveFaultForPanel(target){\r
    return activeFaultBindingsForPanel(target).length>0||Boolean(target?.injectedFault);\r
  }\r
\r
  function renderTargetHeader(target){\r
    const status=hasActiveFaultForPanel(target)?'已注入故障':'正常';\r
    return \`\r
      <div class="props-target-card \${hasActiveFaultForPanel(target)?'is-faulted':''}">\r
        <div>\r
          <div class="props-title">\${text(getTargetTitle(target))}</div>\r
          <div class="props-sub">\${isEdgeTarget(target)?'连线':'组件'} · \${text(target?.id||'')}</div>\r
        </div>\r
        <span class="props-state-pill \${hasActiveFaultForPanel(target)?'is-faulted':'is-normal'}">\${text(status)}</span>\r
      </div>\`;\r
  }\r
\r
  const LEGACY_OVERVIEW_NODE_TYPES=new Set([\r
    'signal_source',\r
    'flow_block',\r
    'instrument_scope',\r
    'instrument_logger',\r
    'instrument_spectrum',\r
    'subsystem_block'\r
  ]);\r
  let legacyOverviewSnapshot='';\r
\r
  function needsLegacyOverviewCompat(target){\r
    return Boolean(target?.type&&LEGACY_OVERVIEW_NODE_TYPES.has(target.type));\r
  }\r
\r
  function renderLegacyOverviewCompat(node){\r
    if(!needsLegacyOverviewCompat(node)||!legacyOverviewSnapshot){return '';}\r
    return \`\r
      <div class="props-legacy-overview" data-legacy-overview="\${text(node.type)}">\r
        \${legacyOverviewSnapshot}\r
      </div>\`;\r
  }\r
\r
  function renderNodeOverview(node){\r
    const meta=COMPONENT_LIBRARY[node.type]||{};\r
    const ports=getNodePorts(node);\r
    const pythonBound=isPythonBoundFlowBlock(node);\r
    const simulationPackageRows=node.type==='simulation_block'&&pythonBound\r
      ?buildSimulationBlockPackageRows(node)\r
      :'';\r
    return \`\r
      \${renderTargetHeader(node)}\r
      \${simulationPackageRows}\r
      <div class="pgroup">\r
        <div class="pglbl">模块状态</div>\r
        \${renderRows([\r
          ['节点类别',meta.label||node.type],\r
          ['输入端口',ports.inputs.length],\r
          ['输出端口',ports.outputs.length],\r
          ['Python 绑定',pythonBound?getPythonBindingSummary(node):'未绑定'],\r
          ['故障实例',activeFaultBindingsForPanel(node).length||'0']\r
        ])}\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">画布位置</div>\r
        \${renderRows([\r
          ['X',Math.round(Number(node.x)||0)],\r
          ['Y',Math.round(Number(node.y)||0)],\r
          ['尺寸',\`\${Math.round(Number(node.w)||0)} x \${Math.round(Number(node.h)||0)}\`]\r
        ])}\r
      </div>\r
      \${renderLegacyOverviewCompat(node)}\`;\r
  }\r
\r
  function renderEdgeOverview(edge){\r
    const source=getNode(edge.sourceNodeId);\r
    const dest=getNode(edge.targetNodeId);\r
    const signals=edgeSignals(edge);\r
    const primary=signals[0]||{};\r
    const secondary=signals.slice(1);\r
    const semanticContext=getEdgeSemanticContextForPanel(edge);\r
    const sourceLabel=\`\${source?.props?.name||edge.sourceNodeId} (\${edge.sourceNodeId})\`;\r
    const targetLabel=\`\${dest?.props?.name||edge.targetNodeId} (\${edge.targetNodeId})\`;\r
    const route=\`\${sourceLabel}:\${getPortLabelForPanel(source,'output',edge.sourcePortIndex||0)} -> \${targetLabel}:\${getPortLabelForPanel(dest,'input',edge.targetPortIndex||0)}\`;\r
    const status=hasActiveFaultForPanel(edge)?'fault':'normal';\r
    const faultSource=edge.injectedFault?.name||activeFaultBindingsForPanel(edge)[0]?.name||'none';\r
    return \`\r
      \${renderTargetHeader(edge)}\r
      <div class="pgroup" data-edge-overview>\r
        <div class="pglbl">链路概览</div>\r
        \${renderEdgeChineseSummary(semanticContext)}\r
        <div class="props-edge-connection">\r
          <div class="props-edge-connection-title">连接关系</div>\r
          \${renderRows([\r
            ['源模块',sourceLabel],\r
            ['目标模块',targetLabel],\r
            ['连线类型',edge.lineType||'normal'],\r
            ['总线类型',edge.lineType==='can'?'CAN':'普通连线'],\r
            ['通道数量',signals.length],\r
            ['状态',status],\r
            ['故障来源',faultSource==='none'?'无':faultSource]\r
          ])}\r
          <div class="props-edge-route-meta" data-edge-route>\r
            <span>工程路径</span>\r
            <code>\${text(route)}</code>\r
          </div>\r
        </div>\r
        <div class="props-chip-row" data-edge-channel-count>\r
          <span class="props-chip">\${text(signals.length)} 个通道</span>\r
          <span class="props-chip">主信号：\${text(primary.signalId||'未设置')}</span>\r
          \${secondary.map((signal,index)=>\`<span class="props-chip">次级信号 \${index+1}：\${text(signal.signalId||'未设置')} / \${text(signal.channelId||'未设置')}</span>\`).join('')}\r
        </div>\r
        \${renderEdgeInternalMapping(semanticContext.mapping)}\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">通道摘要</div>\r
        <div class="props-channel-list">\${signals.map((signal,index)=>renderEdgeChannelSummary(signal,index)).join('')}</div>\r
      </div>\`;\r
    return \`\r
      \${renderTargetHeader(edge)}\r
      <div class="pgroup">\r
        <div class="pglbl">连接信息</div>\r
        \${renderRows([\r
          ['连接类型',getLineLabel(edge)],\r
          ['源节点',source?.props?.name||edge.sourceNodeId],\r
          ['源端口',getPortLabelForPanel(source,'output',edge.sourcePortIndex||0)],\r
          ['目标节点',dest?.props?.name||edge.targetNodeId],\r
          ['目标端口',getPortLabelForPanel(dest,'input',edge.targetPortIndex||0)]\r
        ])}\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">多信号流身份</div>\r
        \${renderRows([\r
          ['信号ID',signal.signalId||'未设置'],\r
          ['通道ID',signal.channelId||'未设置'],\r
          ['CAN报文',signal.messageId||'未设置'],\r
          ['故障传播策略',signal.faultPropagationPolicy]\r
        ])}\r
      </div>\`;\r
  }\r
\r
  function renderSignalSourceFields(node){\r
    return \`\r
      <div class="pgroup">\r
        <div class="pglbl">信号源配置</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${text(node.props.name)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>信号类型</label><select id="prop-waveType">\${buildSelectOptions(['正弦','阶跃','常值'],node.props.waveType)}</select></div>\r
          <div class="props-field"><label>输出格式</label><select id="prop-outputFormat">\${buildSelectOptions(PORT_FORMATS,node.props.outputFormat)}</select></div>\r
        </div>\r
        <div class="props-row">\r
          <div class="props-field"><label>幅值</label><input id="prop-amplitude" value="\${text(node.props.amplitude)}"></div>\r
          <div class="props-field"><label>频率 / 周期</label><input id="prop-frequency" value="\${text(node.props.frequency)}"></div>\r
        </div>\r
      </div>\`;\r
  }\r
\r
  function renderInstrumentFields(node){\r
    return \`\r
      <div class="pgroup">\r
        <div class="pglbl">观测配置</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${text(node.props.name)}"></div>\r
        <div class="props-field"><label>观测类型</label><input id="prop-instrumentType" value="\${text(node.props.instrumentType)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>采样率</label><input id="prop-sampleRate" value="\${text(node.props.sampleRate)}"></div>\r
          <div class="props-field"><label>观测信号</label><input id="prop-signal" value="\${text(node.props.signal)}"></div>\r
        </div>\r
      </div>\`;\r
  }\r
\r
  function renderFaultBlockFields(node){\r
    return \`\r
      <div class="pgroup">\r
        <div class="pglbl">故障块参数</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${text(node.props.name)}"></div>\r
        <div class="props-field"><label>故障类型</label><input id="prop-faultType" value="\${text(node.props.faultType)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>作用层级</label><select id="prop-layer">\${buildSelectOptions(['物理层','电气层','协议层'],node.props.layer)}</select></div>\r
          <div class="props-field"><label>触发方式</label><select id="prop-trigger">\${buildSelectOptions(['持续','渐变','瞬态','间歇'],node.props.trigger)}</select></div>\r
        </div>\r
      </div>\`;\r
  }\r
\r
  function renderGenericNodeFields(node){\r
    return \`\r
      <div class="pgroup">\r
        <div class="pglbl">通用配置</div>\r
        <div class="props-field"><label>模块名称</label><input id="prop-name" value="\${text(node.props.name)}"></div>\r
        <div class="props-field"><label>连接类型</label><input id="prop-linkType" value="\${text(node.props.linkType)}"></div>\r
        <div class="props-row">\r
          <div class="props-field"><label>源端口</label><input id="prop-sourcePort" value="\${text(node.props.sourcePort)}"></div>\r
          <div class="props-field"><label>目标端口</label><input id="prop-targetPort" value="\${text(node.props.targetPort)}"></div>\r
        </div>\r
      </div>\`;\r
  }\r
\r
  function renderNodeParameterFields(node){\r
    if(node.type==='signal_source'){return renderSignalSourceFields(node);}\r
    if(node.type==='simulation_block'){return buildSimulationBlockFields(node);}\r
    if(node.type==='flow_block'){return buildFlowBlockFields(node);}\r
    if(node.type==='gain_block'||node.type==='sum_block'||node.type==='mux_block'){return buildSignalUtilityFields(node);}\r
    if(node.type?.startsWith('fault_')){return renderFaultBlockFields(node);}\r
    if(node.type?.startsWith('instrument_')){return renderInstrumentFields(node);}\r
    return renderGenericNodeFields(node);\r
  }\r
\r
  function renderNodeParameters(node){\r
    const pythonBound=isPythonBoundFlowBlock(node);\r
    return \`\r
      \${renderTargetHeader(node)}\r
      <div class="props-form">\r
        \${renderNodeParameterFields(node)}\r
        <div class="props-actions">\r
          \${node.type==='instrument_scope'?\`<button type="button" class="props-secondary" onclick="openScope('\${jsString(node.id)}')">查看波形</button>\`:''}\r
          \${node.type==='flow_block'?\`<button type="button" class="props-secondary" onclick="openPythonBindingDialog('\${jsString(node.id)}')">\${pythonBound?'重新绑定 Python':'绑定 Python 文件'}</button>\`:''}\r
          \${node.type==='flow_block'&&pythonBound?\`<button type="button" class="props-secondary" onclick="unbindPythonBinding('\${jsString(node.id)}')">解除 Python 绑定</button>\`:''}\r
          <button type="button" class="props-save" onclick="savePropertyPanelTarget()">保存设置</button>\r
          <button type="button" class="props-danger" onclick="deleteSelectedNode()">删除模块</button>\r
        </div>\r
      </div>\`;\r
  }\r
\r
  function renderEdgeParameters(edge){\r
    const signals=edgeSignals(edge);\r
    const signal=signals[0]||{};\r
    const secondary=signals.slice(1);\r
    const semanticContext=getEdgeSemanticContextForPanel(edge);\r
    return \`\r
      \${renderTargetHeader(edge)}\r
      <div class="props-form">\r
        \${renderEdgeChineseSummary(semanticContext)}\r
        \${renderEdgeInternalMapping(semanticContext.mapping)}\r
        <div class="pgroup">\r
          <div class="pglbl">通道配置</div>\r
          <div class="props-field"><label>连接类型</label><select id="prop-edge-line-type">\${buildSelectOptions(['normal','can'],edge.lineType||'normal')}</select></div>\r
          <div class="props-channel-list" data-edge-channel-list>\r
            <div class="props-channel-card" data-edge-channel-card="primary">\r
              <div class="props-channel-card__head">\r
                <strong>主通道</strong>\r
                <span>/ 可编辑</span>\r
              </div>\r
              <div class="props-row">\r
                <div class="props-field"><label>信号ID</label><input id="prop-edge-signal-id" value="\${text(signal.signalId)}"></div>\r
                <div class="props-field"><label>通道ID</label><input id="prop-edge-channel-id" value="\${text(signal.channelId)}"></div>\r
              </div>\r
              <div class="props-row">\r
                <div class="props-field"><label>CAN报文ID</label><input id="prop-edge-message-id" value="\${text(signal.messageId)}"></div>\r
                <div class="props-field"><label>信号角色</label><input id="prop-edge-signal-role" value="\${text(signal.signalRole)}"></div>\r
              </div>\r
              <div class="props-row">\r
                <div class="props-field"><label>单位</label><input id="prop-edge-signal-unit" value="\${text(signal.signalUnit)}"></div>\r
                <div class="props-field"><label>载荷类型</label><input id="prop-edge-payload-kind" value="\${text(signal.payloadKind)}"></div>\r
              </div>\r
              <div class="props-row">\r
                <div class="props-field"><label>采样率</label><input id="prop-edge-sample-rate" value="\${text(signal.sampleRate)}"></div>\r
                <div class="props-field"><label>故障传播策略</label><select id="prop-edge-fault-policy">\${buildSelectOptions(['inherit','propagates','localOnly','blocks'],signal.faultPropagationPolicy)}</select></div>\r
              </div>\r
            </div>\r
            \${secondary.length?secondary.map((item,index)=>renderEdgeChannelSummary(item,index+1)).join(''):'<div class="props-empty-state">暂无次级通道</div>'}\r
          </div>\r
          <div class="props-help">主通道字段会保存到当前连线；次级通道作为只读载荷上下文保留。</div>\r
        </div>\r
        <div class="props-actions">\r
          <button type="button" class="props-save" onclick="savePropertyPanelTarget()">保存连线</button>\r
          \${isProtocolInjectableEdge(edge)?\`<button type="button" class="props-secondary props-protocol-action" onclick="openProtocolFaultImport()">注入协议故障</button>\`:''}\r
          <button type="button" class="props-danger" onclick="deleteSelectedEdge()">删除连线</button>\r
        </div>\r
      </div>\`;\r
    return \`\r
      \${renderTargetHeader(edge)}\r
      <div class="props-form">\r
        <div class="pgroup">\r
          <div class="pglbl">连线参数</div>\r
          <div class="props-field"><label>连接类型</label><select id="prop-edge-line-type">\${buildSelectOptions(['normal','can'],edge.lineType||'normal')}</select></div>\r
          <div class="props-row">\r
            <div class="props-field"><label>信号ID</label><input id="prop-edge-signal-id" value="\${text(signal.signalId)}"></div>\r
            <div class="props-field"><label>通道ID</label><input id="prop-edge-channel-id" value="\${text(signal.channelId)}"></div>\r
          </div>\r
          <div class="props-row">\r
            <div class="props-field"><label>CAN报文ID</label><input id="prop-edge-message-id" value="\${text(signal.messageId)}"></div>\r
            <div class="props-field"><label>信号角色</label><input id="prop-edge-signal-role" value="\${text(signal.signalRole)}"></div>\r
          </div>\r
          <div class="props-row">\r
            <div class="props-field"><label>单位</label><input id="prop-edge-signal-unit" value="\${text(signal.signalUnit)}"></div>\r
            <div class="props-field"><label>载荷类型</label><input id="prop-edge-payload-kind" value="\${text(signal.payloadKind)}"></div>\r
          </div>\r
          <div class="props-row">\r
            <div class="props-field"><label>采样率</label><input id="prop-edge-sample-rate" value="\${text(signal.sampleRate)}"></div>\r
            <div class="props-field"><label>故障传播策略</label><select id="prop-edge-fault-policy">\${buildSelectOptions(['inherit','propagates','localOnly','blocks'],signal.faultPropagationPolicy)}</select></div>\r
          </div>\r
          <div class="props-help">这些字段会随连线保存，供多信号流图把一条 CAN 边解释为带通道、报文和故障传播策略的数据流。</div>\r
        </div>\r
        <div class="props-actions">\r
          <button type="button" class="props-save" onclick="savePropertyPanelTarget()">保存连线</button>\r
          \${isProtocolInjectableEdge(edge)?\`<button type="button" class="props-secondary props-protocol-action" onclick="openProtocolFaultImport()">注入协议故障</button>\`:''}\r
          <button type="button" class="props-danger" onclick="deleteSelectedEdge()">删除连线</button>\r
        </div>\r
      </div>\`;\r
  }\r
\r
  function renderFaultBinding(binding,targetKind,targetId,index){\r
    const params=binding.parameters||binding.injectedFault?.parameters||{};\r
    const paramText=Object.keys(params).length\r
      ?Object.entries(params).map(([key,value])=>\`\${key}=\${value}\`).join(', ')\r
      :'No parameters';\r
    const bindingId=binding.bindingId||\`legacy-\${binding.faultModelId||index}\`;\r
    return \`\r
      <div class="props-fault-card" data-fault-binding-id="\${text(bindingId)}">\r
        <div class="props-fault-card__top">\r
          <div>\r
            <strong>\${text(binding.name||binding.injectedFault?.name||binding.faultModelId||'Fault')}</strong>\r
            <span>\${text(binding.layer||binding.injectedFault?.layer||'layer')} · \${text(binding.propagationMode||'signalTransform')}</span>\r
          </div>\r
          <button type="button" class="props-secondary props-fault-remove" onclick="removeFaultBinding('\${targetKind}','\${jsString(targetId)}','\${jsString(bindingId)}')">取消</button>\r
        </div>\r
        <div class="props-help">\${text(paramText)}</div>\r
      </div>\`;\r
  }\r
\r
  function renderFaults(target){\r
    const targetKind=isEdgeTarget(target)?'edge':'node';\r
    const bindings=activeFaultBindingsForPanel(target);\r
    const injectButton=isEdgeTarget(target)\r
      ?(isProtocolInjectableEdge(target)?'<button type="button" class="props-secondary props-protocol-action" onclick="openProtocolFaultImport()">注入协议故障</button>':'')\r
      :(!target.type?.startsWith('instrument_')?'<button type="button" class="props-secondary props-fault-action" onclick="openElectricalFaultImport()">注入故障</button>':'');\r
    const body=bindings.length\r
      ?bindings.map((binding,index)=>renderFaultBinding(binding,targetKind,target.id,index)).join('')\r
      :'<div class="props-empty-state">No active faults</div>';\r
    return \`\r
      \${renderTargetHeader(target)}\r
      <div class="pgroup">\r
        <div class="pglbl">故障实例</div>\r
        <div class="props-fault-stack">\${body}</div>\r
        <div class="props-help">一个组件或一条 CAN 边可以挂载多个故障实例；取消后会清除红色故障态，并重新渲染多信号流图。</div>\r
      </div>\r
      <div class="props-actions">\r
        \${injectButton}\r
        \${bindings.length?\`<button type="button" class="props-danger" data-fault-clear onclick="clearFaultBindings('\${targetKind}','\${jsString(target.id)}')">清空故障</button>\`:''}\r
        \${isEdgeTarget(target)?'<button type="button" class="props-danger" onclick="deleteSelectedEdge()">删除连线</button>':'<button type="button" class="props-danger" onclick="deleteSelectedNode()">删除模块</button>'}\r
      </div>\`;\r
  }\r
\r
  function renderNodeOutputs(node){\r
    const ports=getNodePorts(node);\r
    const rows=[\r
      ...ports.inputs.map((port,index)=>['输入 '+(index+1),getPortDisplayName(port)||port.label||port.varName||port.key||'input']),\r
      ...ports.outputs.map((port,index)=>['输出 '+(index+1),getPortDisplayName(port)||port.label||port.varName||port.key||'output'])\r
    ];\r
    return \`\r
      \${renderTargetHeader(node)}\r
      <div class="pgroup">\r
        <div class="pglbl">端口与变量</div>\r
        \${rows.length?renderRows(rows):'<div class="props-empty-state">No ports</div>'}\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">运行时输出</div>\r
        \${renderRows([\r
          ['Scope samples',SIM?.actual?.scopeSamples?.[node.id]?Object.keys(SIM.actual.scopeSamples[node.id]).length:0],\r
          ['Node state',SIM?.actual?.nodeStates?.[node.id]?'已采样':'未采样']\r
        ])}\r
      </div>\`;\r
  }\r
\r
  function renderEdgeOutputs(edge){\r
    const source=getNode(edge.sourceNodeId);\r
    const dest=getNode(edge.targetNodeId);\r
    const signals=edgeSignals(edge);\r
    const signal=signals[0]||{};\r
    const metrics=(typeof window.collectDataflowEdges==='function'\r
      ?window.collectDataflowEdges().find((item)=>item.edge?.id===edge.id)?.metrics\r
      :null)||((typeof getDataflowEdgeMetrics==='function')?getDataflowEdgeMetrics(edge):{})||{};\r
    const activeFault=activeFaultBindingsForPanel(edge)[0]||edge.injectedFault||{};\r
    const faultName=metrics.faultName||activeFault.name||'';\r
    const runtimeBehavior=metrics.runtimeBehavior||activeFault.runtimeBehavior||'';\r
    const faultParams=activeFault.parameters||{};\r
    const formatEdgeOutputNumber=(value,digits=3)=>{\r
      if(value===null||value===undefined||value===''){return '--';}\r
      const numeric=Number(value);\r
      if(!Number.isFinite(numeric)){return String(value);}\r
      if(Math.abs(numeric)>=100){return numeric.toFixed(1);}\r
      if(Math.abs(numeric)>=10){return numeric.toFixed(2);}\r
      return numeric.toFixed(digits);\r
    };\r
    const diagnosticRows=[\r
      ['当前值 currentValue',formatEdgeOutputNumber(metrics.currentValue)],\r
      ['残差 residual',formatEdgeOutputNumber(metrics.residualValue)],\r
      ['延迟 latency',metrics.latency||faultParams.latency||faultParams.base_delay||faultParams.delay_seconds||'--'],\r
      ['丢包率 dropRate',metrics.dropRate||faultParams.dropRate||faultParams.drop_rate||faultParams.loss_rate||'--'],\r
      ['突发长度 burstLength',metrics.burstLength||faultParams.burstLength||faultParams.burst_length||'--'],\r
      ['状态 status',metrics.status||'normal'],\r
      faultName?['故障名称 faultName',faultName]:null,\r
      runtimeBehavior?['运行行为 runtimeBehavior',runtimeBehavior]:null\r
    ].filter(Boolean);\r
    const signalCards=signals.map((item,index)=>\`\r
      <div class="props-channel-card" data-edge-output-channel="\${text(item.signalRole||index)}">\r
        \${renderRows([\r
          ['信号ID signalId',item.signalId||'--'],\r
          ['通道ID channelId',item.channelId||'--'],\r
          ['CAN报文 messageId',item.messageId||'--'],\r
          ['信号角色 role',item.signalRole||'--'],\r
          ['单位 signalUnit',item.signalUnit||'--'],\r
          ['采样率 sampleRate',item.sampleRate||'--'],\r
          ['载荷类型 payloadKind',item.payloadKind||'--'],\r
          ['传播策略 faultPropagationPolicy',item.faultPropagationPolicy||'inherit']\r
        ])}\r
      </div>\`).join('');\r
    return \`\r
      \${renderTargetHeader(edge)}\r
      <div class="pgroup">\r
        <div class="pglbl">多信号流载荷</div>\r
        \${renderRows([\r
          ['信号ID Signal ID',signal.signalId||metrics.signalId||'未设置'],\r
          ['通道ID Channel',signal.channelId||metrics.channelId||'未设置'],\r
          ['CAN报文 Message',signal.messageId||metrics.messageId||'未设置'],\r
          ['信号角色 Role',signal.signalRole||metrics.signalRole||'未设置'],\r
          ['单位 Unit',signal.signalUnit||metrics.signalUnit||'未设置'],\r
          ['载荷类型 Payload',signal.payloadKind||metrics.payloadKind||'未设置'],\r
          ['传播策略 Policy',signal.faultPropagationPolicy||metrics.faultPropagationPolicy||'inherit']\r
        ])}\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">传递路径</div>\r
        \${renderRows([\r
          ['源端口',\`\${source?.props?.name||edge.sourceNodeId}:\${getPortLabelForPanel(source,'output',edge.sourcePortIndex||0)}\`],\r
          ['目标端口',\`\${dest?.props?.name||edge.targetNodeId}:\${getPortLabelForPanel(dest,'input',edge.targetPortIndex||0)}\`],\r
          ['数据流状态',metrics.status||'normal'],\r
          ['故障传递',metrics.faultActive?'active':'inactive']\r
        ])}\r
      </div>\r
      <div class="pgroup" data-edge-output-channels>\r
        <div class="pglbl">通道载荷</div>\r
        \${signalCards||'<div class="props-empty-state">暂无信号通道</div>'}\r
      </div>\r
      <div class="pgroup" data-edge-diagnostics>\r
        <div class="pglbl">诊断指标</div>\r
        \${renderRows(diagnosticRows)}\r
      </div>\`;\r
  }\r
\r
  function bindLegacyOverviewActions(target,host){\r
    if(S.propertyPanelTab!=='overview'||!needsLegacyOverviewCompat(target)){return;}\r
    if(target.type==='instrument_scope'){\r
      host.querySelector('[data-scope-action="open"]')?.addEventListener('click',event=>{\r
        event.preventDefault();\r
        event.stopPropagation();\r
        openScope(target.id);\r
        renderPropertyPanel(target);\r
      });\r
    }\r
    if(!target.type?.startsWith('instrument_')){return;}\r
    host.querySelector('[data-instrument-action="export"]')?.addEventListener('click',event=>{\r
      event.preventDefault();\r
      event.stopPropagation();\r
      window.__GZ_EXPORT_INSTRUMENT_SAMPLES__?.(target);\r
    });\r
    host.querySelector('[data-instrument-action="clear"]')?.addEventListener('click',event=>{\r
      event.preventDefault();\r
      event.stopPropagation();\r
      window.__GZ_CLEAR_INSTRUMENT_SAMPLES__?.(target);\r
    });\r
  }\r
\r
  function renderTypedPropertyPanel(target){\r
    const pe=document.getElementById('pe');\r
    const pd=document.getElementById('pd');\r
    if(!pe||!pd){return;}\r
    syncPropertyTabs();\r
    setHeaderSub(target);\r
    if(!target){\r
      pe.style.display='flex';\r
      pd.style.display='none';\r
      pd.innerHTML='';\r
      return;\r
    }\r
    pe.style.display='none';\r
    pd.style.display='block';\r
    if(isEdgeTarget(target)){\r
      if(S.propertyPanelTab==='parameters'){pd.innerHTML=renderEdgeParameters(target);}\r
      else if(S.propertyPanelTab==='faults'){pd.innerHTML=renderFaults(target);}\r
      else if(S.propertyPanelTab==='outputs'){pd.innerHTML=renderEdgeOutputs(target);}\r
      else{pd.innerHTML=renderEdgeOverview(target);}\r
      return;\r
    }\r
    if(S.propertyPanelTab==='parameters'){pd.innerHTML=renderNodeParameters(target);}\r
    else if(S.propertyPanelTab==='faults'){pd.innerHTML=renderFaults(target);}\r
    else if(S.propertyPanelTab==='outputs'){pd.innerHTML=renderNodeOutputs(target);}\r
    else{pd.innerHTML=renderNodeOverview(target);}\r
    bindLegacyOverviewActions(target,pd);\r
    if(target.type==='simulation_block'){\r
      updateModelPackageStatus(target);\r
    }\r
  }\r
\r
  const __typedPropertyPanelRender=renderPropertyPanel;\r
  renderPropertyPanel=function(target){\r
    legacyOverviewSnapshot='';\r
    const result=__typedPropertyPanelRender(target);\r
    if(S.propertyPanelTab==='overview'&&needsLegacyOverviewCompat(target)){\r
      legacyOverviewSnapshot=document.getElementById('pd')?.innerHTML||'';\r
    }\r
    renderTypedPropertyPanel(target);\r
    return result;\r
  };\r
\r
  function setPropertyPanelTab(tab){\r
    S.propertyPanelTab=PANEL_TABS.includes(tab)?tab:'overview';\r
    syncPropertyTabs();\r
    renderPropertyPanel(getSelectedPropertyTarget());\r
  }\r
\r
  function saveSelectedEdgeMetadata(){\r
    const edge=getEdge(S.selEdge);\r
    if(!edge){return;}\r
    const value=(id)=>document.getElementById(id)?.value?.trim()||'';\r
    edge.lineType=value('prop-edge-line-type')||edge.lineType||'normal';\r
    edge.signalId=value('prop-edge-signal-id');\r
    edge.channelId=value('prop-edge-channel-id');\r
    edge.messageId=value('prop-edge-message-id');\r
    edge.signalRole=value('prop-edge-signal-role');\r
    edge.signalUnit=value('prop-edge-signal-unit');\r
    edge.payloadKind=value('prop-edge-payload-kind');\r
    edge.sampleRate=value('prop-edge-sample-rate');\r
    edge.faultPropagationPolicy=value('prop-edge-fault-policy')||'inherit';\r
    const primaryChannel={\r
      signalId:edge.signalId,\r
      channelId:edge.channelId,\r
      messageId:edge.messageId,\r
      role:edge.signalRole,\r
      unit:edge.signalUnit,\r
      payloadKind:edge.payloadKind,\r
      sampleRate:edge.sampleRate,\r
      faultPropagationPolicy:edge.faultPropagationPolicy\r
    };\r
    const previousChannels=Array.isArray(edge.signalChannels)\r
      ?edge.signalChannels.filter(Boolean)\r
      :[];\r
    const nextPrimary={...(previousChannels[0]||{}),...primaryChannel};\r
    edge.signalChannels=[nextPrimary,...previousChannels.slice(1)];\r
    markTopologyDirty(getMutationScopeForEdge(edge));\r
    renderEdges();\r
    renderTypedPropertyPanel(edge);\r
    updateUI();\r
    toast('连线信号元数据已保存','s');\r
  }\r
\r
  function savePropertyPanelTarget(){\r
    if(S.selEdge){saveSelectedEdgeMetadata();return;}\r
    if(S.selBlk){saveSelectedNode();}\r
  }\r
\r
  function syncFaultPayloadFromBindings(target){\r
    const active=Array.isArray(target.faultBindings)\r
      ?target.faultBindings.filter((binding)=>binding&&binding.active!==false)\r
      :[];\r
    if(active.length>0){\r
      target.injectedFault=active[0].injectedFault||target.injectedFault||{\r
        modelId:active[0].faultModelId,\r
        name:active[0].name,\r
        layer:active[0].layer,\r
        runtimeBehavior:active[0].runtimeBehavior,\r
        parameters:active[0].parameters||{}\r
      };\r
      return;\r
    }\r
    delete target.injectedFault;\r
  }\r
\r
  function refreshFaultCancellation(targetKind,target){\r
    if(!target){return;}\r
    syncFaultPayloadFromBindings(target);\r
    if(targetKind==='node'&&!hasActiveFaultForPanel(target)){\r
      S.faultedBlks=(S.faultedBlks||[]).filter((id)=>id!==target.id);\r
      if(SIM?.actual?.nodeStates?.[target.id]){\r
        delete SIM.actual.nodeStates[target.id].bindingStates;\r
      }\r
    }\r
    if(targetKind==='edge'&&SIM?.actual?.edgeStates?.[target.id]){\r
      delete SIM.actual.edgeStates[target.id];\r
    }\r
    markTopologyDirty('fault');\r
    renderModelNodes();\r
    renderEdges();\r
    renderTypedPropertyPanel(target);\r
    updateUI();\r
  }\r
\r
  function resolveFaultTarget(targetKind,targetId){\r
    return targetKind==='edge'?getEdge(targetId):getNode(targetId);\r
  }\r
\r
  function removeFaultBinding(targetKind,targetId,bindingId){\r
    const target=resolveFaultTarget(targetKind,targetId);\r
    if(!target){return false;}\r
    let changed=false;\r
    if(Array.isArray(target.faultBindings)){\r
      target.faultBindings=target.faultBindings.map((binding,index)=>{\r
        const id=binding?.bindingId||\`legacy-\${binding?.faultModelId||index}\`;\r
        if(id===bindingId||binding?.faultModelId===bindingId){\r
          changed=true;\r
          return {...binding,active:false,disabledAt:new Date().toISOString()};\r
        }\r
        return binding;\r
      });\r
    }\r
    if(!changed&&target.injectedFault){\r
      delete target.injectedFault;\r
      changed=true;\r
    }\r
    refreshFaultCancellation(targetKind,target);\r
    if(changed){toast('已取消故障注入','s');}\r
    return changed;\r
  }\r
\r
  function clearFaultBindings(targetKind,targetId){\r
    const target=resolveFaultTarget(targetKind,targetId);\r
    if(!target){return false;}\r
    if(Array.isArray(target.faultBindings)){\r
      target.faultBindings=target.faultBindings.map((binding)=>({...binding,active:false,disabledAt:new Date().toISOString()}));\r
    }\r
    delete target.injectedFault;\r
    refreshFaultCancellation(targetKind,target);\r
    toast('已清空故障注入','s');\r
    return true;\r
  }\r
\r
  const __typedCollectDataflowEdges=window.collectDataflowEdges;\r
  if(typeof __typedCollectDataflowEdges==='function'){\r
    window.collectDataflowEdges=function(){\r
      return (__typedCollectDataflowEdges()||[]).map((item)=>{\r
        const signal=edgePrimarySignal(item.edge);\r
        return {\r
          ...item,\r
          metrics:{\r
            ...item.metrics,\r
            signalName:signal.signalId||item.metrics.signalName,\r
            signalId:signal.signalId,\r
            channelId:signal.channelId,\r
            messageId:signal.messageId,\r
            signalRole:signal.signalRole,\r
            signalUnit:signal.signalUnit,\r
            payloadKind:signal.payloadKind,\r
            faultPropagationPolicy:signal.faultPropagationPolicy\r
          }\r
        };\r
      });\r
    };\r
  }\r
\r
  syncPropertyTabs();\r
  Object.assign(window,{\r
    clearFaultBindings,\r
    removeFaultBinding,\r
    renderPropertyPanel,\r
    savePropertyPanelTarget,\r
    saveSelectedEdgeMetadata,\r
    setPropertyPanelTab\r
  });\r
})();\r
\r
// --- 多故障实例的最终视觉标记：兼容 injectedFault，并支持 faultBindings[] ---\r
(function(){\r
  function getFaultBindingApi(){\r
    return window.__GZ_FAULT_INJECTION_RUNTIME__||null;\r
  }\r
\r
  function activeFaultBindings(target){\r
    if(!target){return [];}\r
    const api=getFaultBindingApi();\r
    if(api?.getFaultBindings){\r
      return api.getFaultBindings(target,{activeOnly:true})||[];\r
    }\r
    if(Array.isArray(target.faultBindings)){\r
      return target.faultBindings.filter(binding=>binding&&binding.active!==false);\r
    }\r
    return target.injectedFault?[{injectedFault:target.injectedFault,name:target.injectedFault.name,layer:target.injectedFault.layer,active:true}]:[];\r
  }\r
\r
  function hasActiveFault(target){\r
    return Boolean(target?.injectedFault)||activeFaultBindings(target).length>0;\r
  }\r
\r
  function decorateFaultBindingNodes(){\r
    if(!S||!Array.isArray(S.modelNodes)){return;}\r
    S.modelNodes.forEach(node=>{\r
      const el=document.getElementById(\`b-\${node.id}\`);\r
      if(!el){return;}\r
      el.classList.toggle('faulted',Boolean(S.faultedBlks?.includes(node.id))||hasActiveFault(node));\r
      const badge=el.querySelector('.fbadge');\r
      const count=activeFaultBindings(node).length;\r
      if(badge&&count>1){badge.textContent=String(Math.min(count,9));}\r
    });\r
  }\r
\r
  function decorateFaultBindingEdges(){\r
    if(!S||!Array.isArray(S.modelEdges)){return;}\r
    S.modelEdges.forEach(edge=>{\r
      const faulted=hasActiveFault(edge);\r
      document.querySelectorAll(\`[data-edge-id="\${edge.id}"]\`).forEach(el=>{\r
        if(el.classList.contains('edge-path')||el.classList.contains('edge-label')){\r
          el.classList.toggle('is-faulted',faulted);\r
        }\r
        if(faulted&&el.classList.contains('edge-path')){\r
          el.setAttribute('marker-end','url(#edge-arrow-fault)');\r
        }\r
      });\r
    });\r
  }\r
\r
  function renderFaultBindingStack(target){\r
    const pd=document.getElementById('pd');\r
    if(!pd||!target){return;}\r
    pd.querySelector('[data-fault-binding-stack]')?.remove();\r
    const bindings=activeFaultBindings(target);\r
    if(bindings.length<=1){return;}\r
    const rows=bindings.map((binding,index)=>\`\r
      <div class="prow">\r
        <span class="pk">故障 \${index+1}</span>\r
        <span class="pv pv-fault">\${escapeHtml(binding.name||binding.injectedFault?.name||binding.faultModelId||'故障模型')} · \${escapeHtml(binding.propagationMode||'signalTransform')}</span>\r
      </div>\`).join('');\r
    const html=\`\r
      <div class="pgroup" data-fault-binding-stack>\r
        <div class="pglbl">多故障实例</div>\r
        \${rows}\r
      </div>\`;\r
    const anchor=pd.querySelector('[data-fault-runtime-summary]')||pd.querySelector('.pgroup');\r
    if(anchor){anchor.insertAdjacentHTML('afterend',html);}\r
    else{pd.insertAdjacentHTML('afterbegin',html);}\r
  }\r
\r
  const __faultBindingRenderEdges=renderEdges;\r
  renderEdges=function(){\r
    const result=__faultBindingRenderEdges();\r
    decorateFaultBindingEdges();\r
    return result;\r
  };\r
\r
  const __faultBindingRenderModelNodes=renderModelNodes;\r
  renderModelNodes=function(){\r
    const result=__faultBindingRenderModelNodes();\r
    decorateFaultBindingNodes();\r
    decorateFaultBindingEdges();\r
    return result;\r
  };\r
\r
  const __faultBindingRenderPropertyPanel=renderPropertyPanel;\r
  renderPropertyPanel=function(target){\r
    const result=__faultBindingRenderPropertyPanel(target);\r
    renderFaultBindingStack(target);\r
    return result;\r
  };\r
\r
  Object.assign(window,{\r
    renderEdges,\r
    renderModelNodes,\r
    renderPropertyPanel\r
  });\r
})();\r
\r
// --- 多信号流图嵌入：从拓扑边生成可视化指标和右侧诊断 ---\r
(function(){\r
  COMPONENT_LIBRARY.instrument_signal_flow={\r
    label:'多信号流图',\r
    badge:'仪器',\r
    className:'b-inst b-signal-flow',\r
    width:170,\r
    height:78,\r
    defaults:{\r
      name:'多信号流图',\r
      instrumentType:'多信号流图',\r
      sampleRate:'随仿真步长',\r
      signal:'全局拓扑边',\r
      aggregation:'edge_metrics'\r
    }\r
  };\r
\r
  const DATAFLOW_VALUE_EMPTY='--';\r
  let preserveDataflowPanelRender=false;\r
\r
  function formatDataflowNumber(value,digits=3){\r
    if(value===null||value===undefined||value===''){return DATAFLOW_VALUE_EMPTY;}\r
    const numeric=Number(value);\r
    if(!Number.isFinite(numeric)){return String(value);}\r
    if(Math.abs(numeric)>=100){return numeric.toFixed(1);}\r
    if(Math.abs(numeric)>=10){return numeric.toFixed(2);}\r
    return numeric.toFixed(digits);\r
  }\r
\r
  function formatDataflowPercent(value){\r
    if(value===null||value===undefined||value===''){return DATAFLOW_VALUE_EMPTY;}\r
    const numeric=Number(value);\r
    if(!Number.isFinite(numeric)){return String(value);}\r
    return \`\${Math.round(numeric*100)}%\`;\r
  }\r
\r
  function getFaultRuntimeApiForDataflow(){\r
    return window.__GZ_FAULT_INJECTION_RUNTIME__||null;\r
  }\r
\r
  function getActiveFaultBindingsForDataflow(target){\r
    if(!target){return [];}\r
    const api=getFaultRuntimeApiForDataflow();\r
    if(api?.getFaultBindings){\r
      return api.getFaultBindings(target,{activeOnly:true})||[];\r
    }\r
    if(Array.isArray(target.faultBindings)){\r
      return target.faultBindings.filter(binding=>binding&&binding.active!==false);\r
    }\r
    return target.injectedFault?[{\r
      faultModelId:target.injectedFault.modelId||'',\r
      name:target.injectedFault.name||'',\r
      layer:target.injectedFault.layer||'',\r
      runtimeBehavior:target.injectedFault.runtimeBehavior||'',\r
      parameters:target.injectedFault.parameters||{},\r
      propagationMode:target.injectedFault.layer==='protocol'?'protocolEdge':'signalTransform',\r
      active:true,\r
      injectedFault:target.injectedFault\r
    }]:[];\r
  }\r
\r
  function getPrimaryFaultBindingForDataflow(target){\r
    return getActiveFaultBindingsForDataflow(target)[0]||null;\r
  }\r
\r
  function getFaultModelFromBindingForDataflow(binding){\r
    if(!binding){return null;}\r
    const model=getImportedFaultModel(binding.faultModelId||binding.injectedFault?.modelId||'')||binding.injectedFault||binding;\r
    return {\r
      ...model,\r
      runtimeBehavior:binding.runtimeBehavior||model.runtimeBehavior||'',\r
      __faultBinding:binding\r
    };\r
  }\r
\r
  function getFaultModelForEdge(edge){\r
    const binding=getPrimaryFaultBindingForDataflow(edge);\r
    if(binding){return getFaultModelFromBindingForDataflow(binding);}\r
    if(!edge?.injectedFault){return null;}\r
    return getImportedFaultModel(edge.injectedFault.modelId||'')||edge.injectedFault;\r
  }\r
\r
  function getFaultModelForNode(node){\r
    const binding=getPrimaryFaultBindingForDataflow(node);\r
    if(binding){return getFaultModelFromBindingForDataflow(binding);}\r
    if(!node?.injectedFault){return null;}\r
    return getImportedFaultModel(node.injectedFault.modelId||'')||node.injectedFault;\r
  }\r
\r
  function getFaultPropagationModeForDataflow(model){\r
    const binding=model?.__faultBinding;\r
    const api=getFaultRuntimeApiForDataflow();\r
    return binding?.propagationMode\r
      || model?.propagationMode\r
      || model?.injectionDesign?.propagationMode\r
      || api?.inferFaultPropagationMode?.(model,binding?.injectedFault)\r
      || 'signalTransform';\r
  }\r
\r
  function edgeMatchesFaultBindingChannel(binding,edge){\r
    if(!binding||!edge){return true;}\r
    const sourcePort=binding.sourcePortIndex??binding.portIndex??binding.channelIndex;\r
    if(sourcePort!==undefined&&sourcePort!==null&&sourcePort!==''&&Number(sourcePort)!==Number(edge.sourcePortIndex||0)){\r
      return false;\r
    }\r
    const edgeChannel=edge.channelId||edge.signalId||edge.signalChannel||edge.sourcePort?.varName||edge.sourcePortMeta?.varName||'';\r
    const channels=binding.affectedChannels||binding.signalChannels||binding.channelIds;\r
    if(Array.isArray(channels)&&channels.length>0&&edgeChannel){\r
      return channels.map(String).includes(String(edgeChannel));\r
    }\r
    return true;\r
  }\r
\r
  function canNodeFaultPropagateToEdge(model,edge){\r
    if(!model){return false;}\r
    const binding=model.__faultBinding||null;\r
    const mode=getFaultPropagationModeForDataflow(model);\r
    if(mode==='localOnly'||mode==='parameterInfluence'||mode==='protocolEdge'){\r
      return false;\r
    }\r
    return edgeMatchesFaultBindingChannel(binding,edge);\r
  }\r
\r
  function readFaultParam(model,keys,fallback=null){\r
    const params=model?.defaultParameters||model?.parameters||{};\r
    const names=Array.isArray(keys)?keys:[keys];\r
    for(const key of names){\r
      const raw=params[key];\r
      if(raw!==undefined&&raw!==null&&raw!==''){\r
        const parsed=Number(raw);\r
        return Number.isFinite(parsed)?parsed:raw;\r
      }\r
    }\r
    return fallback;\r
  }\r
\r
  function getRuntimeEdgeValue(edge,sourceNode){\r
    if(edge?.currentValue!==undefined&&edge.currentValue!==null){return edge.currentValue;}\r
    const state=SIM?.actual?.nodeStates?.[sourceNode?.id||''];\r
    if(!state){return null;}\r
    const outputIndex=edge?.sourcePortIndex||0;\r
    if(Array.isArray(state.lastOutputs)&&state.lastOutputs[outputIndex]!==undefined){\r
      return state.lastOutputs[outputIndex];\r
    }\r
    if(outputIndex===0&&state.lastOutput!==undefined){return state.lastOutput;}\r
    if(Array.isArray(state.lastMiddleValues)){\r
      const mainCount=getNodePorts(sourceNode).outputs.filter(port=>port.kind!=='middle').length;\r
      const middleIndex=outputIndex-mainCount;\r
      if(state.lastMiddleValues[middleIndex]!==undefined){return state.lastMiddleValues[middleIndex];}\r
    }\r
    return null;\r
  }\r
\r
  function getResidualValue(edge,targetNode){\r
    if(edge?.residualValue!==undefined&&edge.residualValue!==null){return edge.residualValue;}\r
    const targetState=SIM?.actual?.nodeStates?.[targetNode?.id||''];\r
    const targetName=String(targetNode?.props?.name||'').toLowerCase();\r
    const residualLike=targetNode?.type==='sum_block'||targetName.includes('residual')||targetName.includes('残差');\r
    if(!residualLike){return null;}\r
    if(targetState?.lastOutput!==undefined){return targetState.lastOutput;}\r
    if(Array.isArray(targetState?.lastOutputs)&&targetState.lastOutputs.length){return targetState.lastOutputs[0];}\r
    return null;\r
  }\r
\r
  function getPortLabel(node,direction,index){\r
    const ports=getNodePorts(node)[direction==='input'?'inputs':'outputs']||[];\r
    const port=ports[index||0];\r
    if(!port){return \`#\${(index||0)+1}\`;}\r
    return getPortDisplayName(port)||port.label||\`#\${(index||0)+1}\`;\r
  }\r
\r
  function getEdgeSignalName(edge,sourceNode){\r
    const outputLabel=getPortLabel(sourceNode,'output',edge?.sourcePortIndex||0);\r
    return \`\${sourceNode?.props?.name||'上游信号'} · \${outputLabel}\`;\r
  }\r
\r
  const DATAFLOW_STAGE_DEFS=[\r
    {id:'command',labelZh:'指令与参考',roles:['command','source']},\r
    {id:'control',labelZh:'控制与分配',roles:['control','allocation']},\r
    {id:'plant',labelZh:'执行与机体',roles:['actuation','plant']},\r
    {id:'measurement',labelZh:'测量与估计',roles:['measurement','estimate','protocol']},\r
    {id:'diagnostic',labelZh:'诊断与残差',roles:['residual','diagnostic']}\r
  ];\r
\r
  const DATAFLOW_PROPAGATION_CLASSES={\r
    none:{\r
      labelZh:'正常',\r
      descriptionZh:'当前没有识别到故障影响，测点作为正常链路观测。'\r
    },\r
    propagated:{\r
      labelZh:'传播型',\r
      descriptionZh:'传感器、执行器或协议链路故障可沿信号继续影响下游模块。'\r
    },\r
    localEffect:{\r
      labelZh:'本地参数型',\r
      descriptionZh:'物理参数或控制参数变化主要表现为本地参数影响，再由模块输出间接体现。'\r
    },\r
    blocked:{\r
      labelZh:'阻断型',\r
      descriptionZh:'链路丢包、断连或保持会阻断当前信号向下游传播。'\r
    },\r
    diagnosticOnly:{\r
      labelZh:'诊断型',\r
      descriptionZh:'该测点主要用于残差、告警或诊断指标展示，不作为主控制信号传播。'\r
    }\r
  };\r
\r
  const DATAFLOW_PROPAGATION_ORDER=['propagated','localEffect','blocked','diagnosticOnly','none'];\r
  const DATAFLOW_PROPAGATION_GROUP_LABELS={\r
    propagated:'传播型故障',\r
    localEffect:'本地/参数型故障',\r
    blocked:'阻断型故障',\r
    diagnosticOnly:'诊断/残差型',\r
    none:'正常/未受故障影响'\r
  };\r
  const DATAFLOW_PROPAGATION_SCOPES_ZH={\r
    propagated:'沿链路传播到下游测点',\r
    localEffect:'本地参数影响，不直接沿线传播',\r
    blocked:'阻断当前链路',\r
    diagnosticOnly:'只作为诊断观测',\r
    none:'正常/未受故障影响'\r
  };\r
\r
  const SIGNAL_ZH_PATTERNS=[\r
    {test:/residual|diagnostic|fault_indicator|logger|spectrum/i,name:'残差诊断',role:'residual',path:'残差诊断链路'},\r
    {test:/imu|gyro|accel|baro|gps|measured|sensor/i,name:'IMU 测量反馈',role:'measurement',path:'IMU 测量反馈链路'},\r
    {test:/estimate|estimator|state/i,name:'状态估计',role:'estimate',path:'状态估计链路'},\r
    {test:/command|reference|target|pilot|shaper/i,name:'姿态指令',role:'command',path:'指令输入链路'},\r
    {test:/alloc|motor_command|throttle|pwm/i,name:'电机指令',role:'allocation',path:'控制分配链路'},\r
    {test:/motor|actuator|thrust/i,name:'电机/推力响应',role:'actuation',path:'执行机构链路'},\r
    {test:/vehicle|body|pitch_rate|attitude|dynamics|airframe/i,name:'机体姿态响应',role:'plant',path:'机体动力学链路'},\r
    {test:/control|controller|error|torque|gain/i,name:'控制误差/控制输出',role:'control',path:'控制计算链路'}\r
  ];\r
\r
  function getSemanticTextSeed(edge,metrics,sourceNode,targetNode){\r
    const channels=Array.isArray(edge?.signalChannels)?edge.signalChannels:[];\r
    return [\r
      edge?.id,\r
      edge?.signalId,\r
      edge?.channelId,\r
      edge?.messageId,\r
      edge?.lineType,\r
      metrics?.signalId,\r
      metrics?.signalName,\r
      metrics?.sourceName,\r
      metrics?.targetName,\r
      metrics?.sourcePort,\r
      metrics?.targetPort,\r
      sourceNode?.type,\r
      targetNode?.type,\r
      sourceNode?.props?.name,\r
      targetNode?.props?.name,\r
      sourceNode?.props?.moduleType,\r
      targetNode?.props?.moduleType,\r
      sourceNode?.props?.signal,\r
      targetNode?.props?.signal,\r
      ...channels.flatMap(channel=>[\r
        channel.signalId,\r
        channel.channelId,\r
        channel.messageId,\r
        channel.name,\r
        channel.pythonVariable,\r
        channel.role,\r
        channel.signalRole\r
      ])\r
    ].filter(Boolean).join(' ');\r
  }\r
\r
  function getPrimarySignalChannel(edge){\r
    return Array.isArray(edge?.signalChannels)&&edge.signalChannels.length>0\r
      ?edge.signalChannels[0]\r
      :{};\r
  }\r
\r
  function buildSemanticMapping(edge,metrics,meta={}){\r
    const primary=getPrimarySignalChannel(edge);\r
    const engineeringKey=edge?.signalId||metrics?.signalId||primary.signalId||edge?.id||'';\r
    return {\r
      engineeringKey,\r
      edgeId:edge?.id||'',\r
      sourceNodeId:edge?.sourceNodeId||'',\r
      targetNodeId:edge?.targetNodeId||'',\r
      signalId:edge?.signalId||metrics?.signalId||primary.signalId||'',\r
      channelId:edge?.channelId||metrics?.channelId||primary.channelId||primary.channel||'',\r
      messageId:edge?.messageId||metrics?.messageId||primary.messageId||primary.frameId||'',\r
      pythonVariable:edge?.pythonVariable||primary.pythonVariable||edge?.sourcePortMeta?.varName||edge?.sourcePort?.varName||meta.pythonVariable||''\r
    };\r
  }\r
\r
  function inferSignalChineseMeta(edge,metrics={}){\r
    const sourceNode=getNode(edge?.sourceNodeId);\r
    const targetNode=getNode(edge?.targetNodeId);\r
    const seed=getSemanticTextSeed(edge,metrics,sourceNode,targetNode);\r
    const sourceHasIncoming=S.modelEdges.some(item=>item.targetNodeId===edge?.sourceNodeId);\r
    const commandLike=/command|reference|pilot|target|指令|参考/i.test(seed)||sourceNode?.type==='signal_source'||(!sourceHasIncoming&&sourceNode);\r
    const match=commandLike\r
      ?SIGNAL_ZH_PATTERNS.find(item=>item.role==='command')\r
      :SIGNAL_ZH_PATTERNS.find(item=>item.test.test(seed))||SIGNAL_ZH_PATTERNS[SIGNAL_ZH_PATTERNS.length-1];\r
    const explicitName=edge?.displayNameZh||edge?.signalNameZh||edge?.labelZh||'';\r
    const explicitPath=edge?.signalPathZh||'';\r
    const role=edge?.role||edge?.signalRole||metrics?.signalRole||match.role;\r
    const meta={\r
      signalNameZh:explicitName||match.name,\r
      signalPathZh:explicitPath||match.path,\r
      role,\r
      engineeringKey:edge?.signalId||metrics?.signalId||edge?.id||'',\r
      pythonVariable:edge?.pythonVariable||edge?.sourcePortMeta?.varName||edge?.sourcePort?.varName||''\r
    };\r
    const mapping=buildSemanticMapping(edge,metrics,meta);\r
    meta.engineeringKey=mapping.engineeringKey;\r
    meta.pythonVariable=mapping.pythonVariable;\r
    meta.mapping=mapping;\r
    return meta;\r
  }\r
\r
  function getDataflowPropagationScopeZh(kind){\r
    return DATAFLOW_PROPAGATION_SCOPES_ZH[kind]||DATAFLOW_PROPAGATION_SCOPES_ZH.none;\r
  }\r
\r
  function getDataflowPropagationGroupLabelZh(kind){\r
    return DATAFLOW_PROPAGATION_GROUP_LABELS[kind]\r
      || DATAFLOW_PROPAGATION_CLASSES[kind]?.labelZh\r
      || DATAFLOW_PROPAGATION_CLASSES.none.labelZh;\r
  }\r
\r
  function canDataflowFaultPropagate(kind){\r
    return kind==='propagated';\r
  }\r
\r
  function buildDataflowPropagationGroups(edges=[],measurementPoints=[]){\r
    return DATAFLOW_PROPAGATION_ORDER.reduce((acc,kind)=>{\r
      const points=measurementPoints.filter(point=>(point.faultInfluence||'none')===kind);\r
      const groupEdges=edges.filter(edge=>(edge.propagationKind||'none')===kind);\r
      acc[kind]={\r
        kind,\r
        labelZh:getDataflowPropagationGroupLabelZh(kind),\r
        descriptionZh:getDataflowPropagationScopeZh(kind),\r
        points,\r
        edges:groupEdges,\r
        count:points.length,\r
        edgeCount:groupEdges.length\r
      };\r
      return acc;\r
    },{});\r
  }\r
\r
  function getFaultPropagationPolicyValue(policyOrEdge){\r
    if(typeof policyOrEdge==='string'){return policyOrEdge;}\r
    const primary=Array.isArray(policyOrEdge?.signalChannels)&&policyOrEdge.signalChannels.length>0\r
      ?policyOrEdge.signalChannels[0]\r
      :{};\r
    return policyOrEdge?.faultPropagationPolicy\r
      || policyOrEdge?.metrics?.faultPropagationPolicy\r
      || primary.faultPropagationPolicy\r
      || policyOrEdge?.__faultBinding?.faultPropagationPolicy\r
      || 'inherit';\r
  }\r
\r
  function classifyPropagationPolicy(policyOrEdge={}){\r
    const policy=String(getFaultPropagationPolicyValue(policyOrEdge)||'inherit').trim().toLowerCase();\r
    if(policy==='propagates'||policy==='propagated'||policy==='propagate'){return 'propagated';}\r
    if(policy==='blocks'||policy==='blocked'||policy==='block'){return 'blocked';}\r
    if(policy==='localonly'||policy==='local_only'||policy==='localeffect'||policy==='local'){return 'localEffect';}\r
    if(policy==='diagnosticonly'||policy==='diagnostic_only'||policy==='diagnostic'){return 'diagnosticOnly';}\r
    return 'none';\r
  }\r
\r
  function hasFaultModelIdentity(faultModel){\r
    if(!faultModel||typeof faultModel!=='object'){return false;}\r
    return Boolean(\r
      faultModel.name||\r
      faultModel.id||\r
      faultModel.layer||\r
      faultModel.runtimeBehavior||\r
      faultModel.faultCode||\r
      faultModel.modelClass||\r
      faultModel.parameter\r
    );\r
  }\r
\r
  function classifyFaultPropagation(faultModel={},target={},edge=null){\r
    if(!hasFaultModelIdentity(faultModel)){return 'none';}\r
    const layer=String(faultModel?.layer||'').toLowerCase();\r
    const behavior=[\r
      faultModel?.runtimeBehavior,\r
      faultModel?.faultCode,\r
      faultModel?.modelClass,\r
      faultModel?.id,\r
      faultModel?.name,\r
      faultModel?.parameter,\r
      Array.isArray(faultModel?.tags)?faultModel.tags.join(' '):''\r
    ].filter(Boolean).join(' ').toLowerCase();\r
    if(layer.includes('diagnostic')||/residual|diagnostic|fault_indicator/.test(behavior)){return 'diagnosticOnly';}\r
    if(layer.includes('sensor')||/sensor|measurement|meas|imu|gyro|accel|magnetometer|barometer|noise|freeze|scale/.test(behavior)){return 'propagated';}\r
    if(layer.includes('protocol')||layer.includes('communication')){\r
      return /loss|interrupt|block|disconnect|drop/.test(behavior)?'blocked':'propagated';\r
    }\r
    if(layer.includes('physical')||layer.includes('control')){return 'localEffect';}\r
    if(layer.includes('electrical')||layer.includes('actuator')||/actuator|motor|lock|stuck|efficiency|short|open/.test(behavior)){return 'propagated';}\r
    if(/parameter|mass|inertia|gain|saturation|drift|step|bias/.test(behavior)){return 'localEffect';}\r
    return faultModel?.name||faultModel?.id?'propagated':'none';\r
  }\r
\r
  function getSemanticFaultForEdge(edge){\r
    const edgeFault=getFaultModelForEdge(edge);\r
    if(edgeFault){return edgeFault;}\r
    const sourceNode=getNode(edge?.sourceNodeId);\r
    const sourceFault=getFaultModelForNode(sourceNode);\r
    if(sourceFault){return sourceFault;}\r
    return {};\r
  }\r
\r
  function getDataflowStageForRole(role){\r
    return DATAFLOW_STAGE_DEFS.find(stage=>stage.roles.includes(role))||DATAFLOW_STAGE_DEFS[3];\r
  }\r
\r
  function collectMeasurementPoints(rows=collectDataflowEdges()){\r
    return rows.map((item,index)=>{\r
      const edge=item?.edge||item;\r
      const metrics=item?.metrics||getDataflowEdgeMetrics(edge);\r
      const meta=inferSignalChineseMeta(edge,metrics);\r
      const mapping=meta.mapping||buildSemanticMapping(edge,metrics,meta);\r
      const classified=classifyFaultPropagation(getSemanticFaultForEdge(edge),edge,edge);\r
      const faultInfluence=meta.role==='residual'&&classified==='none'?'diagnosticOnly':classified;\r
      const policyKind=classifyPropagationPolicy(edge);\r
      const stage=getDataflowStageForRole(meta.role);\r
      return {\r
        id:\`mp-\${edge.id}\`,\r
        edgeId:edge.id,\r
        signalId:mapping.signalId||metrics.signalId||edge.signalId||edge.id,\r
        nodeId:edge.targetNodeId||edge.sourceNodeId||'',\r
        sourceNodeId:edge.sourceNodeId||'',\r
        targetNodeId:edge.targetNodeId||'',\r
        portIndex:Number.isInteger(edge.targetPortIndex)?edge.targetPortIndex:Number(edge.targetPortIndex||0),\r
        stageId:stage.id,\r
        stageLabelZh:stage.labelZh,\r
        labelZh:\`测点 M\${index+1}：\${meta.signalNameZh}\`,\r
        signalNameZh:meta.signalNameZh,\r
        signalPathZh:meta.signalPathZh,\r
        bindTarget:meta.role==='residual'?'residual':'edge',\r
        role:meta.role,\r
        engineeringKey:mapping.engineeringKey,\r
        pythonVariable:mapping.pythonVariable,\r
        mapping,\r
        advanced:{mapping},\r
        unit:metrics.signalUnit||edge.signalUnit||'',\r
        sampleRate:metrics.sampleRate||edge.sampleRate||'',\r
        currentValue:metrics.currentValue,\r
        residualValue:metrics.residualValue,\r
        faultInfluence,\r
        propagationPolicyKind:policyKind,\r
        propagationPolicyLabelZh:DATAFLOW_PROPAGATION_CLASSES[policyKind]?.labelZh||DATAFLOW_PROPAGATION_CLASSES.none.labelZh,\r
        propagationPolicyDescriptionZh:DATAFLOW_PROPAGATION_CLASSES[policyKind]?.descriptionZh||DATAFLOW_PROPAGATION_CLASSES.none.descriptionZh,\r
        propagationLabelZh:DATAFLOW_PROPAGATION_CLASSES[faultInfluence]?.labelZh||DATAFLOW_PROPAGATION_CLASSES.none.labelZh,\r
        propagationDescriptionZh:DATAFLOW_PROPAGATION_CLASSES[faultInfluence]?.descriptionZh||DATAFLOW_PROPAGATION_CLASSES.none.descriptionZh,\r
        propagationScopeZh:getDataflowPropagationScopeZh(faultInfluence),\r
        canPropagateFault:canDataflowFaultPropagate(faultInfluence)\r
      };\r
    });\r
  }\r
\r
  function collectAffectedMeasurementPointIds(edge,propagationKind,pointByEdge,outgoingBySource){\r
    if(propagationKind!=='propagated'&&propagationKind!=='blocked'){return [];}\r
    const affected=new Set();\r
    const ownPoint=pointByEdge.get(edge.id);\r
    if(ownPoint?.id){affected.add(ownPoint.id);}\r
    const queue=[edge.targetNodeId].filter(Boolean);\r
    const visitedNodes=new Set();\r
    const visitedEdges=new Set([edge.id]);\r
    while(queue.length){\r
      const nodeId=queue.shift();\r
      if(!nodeId||visitedNodes.has(nodeId)){continue;}\r
      visitedNodes.add(nodeId);\r
      (outgoingBySource.get(nodeId)||[]).forEach(nextEdge=>{\r
        if(!nextEdge?.id||visitedEdges.has(nextEdge.id)){return;}\r
        visitedEdges.add(nextEdge.id);\r
        const point=pointByEdge.get(nextEdge.id);\r
        if(point?.id){affected.add(point.id);}\r
        if(nextEdge.targetNodeId&&!visitedNodes.has(nextEdge.targetNodeId)){\r
          queue.push(nextEdge.targetNodeId);\r
        }\r
      });\r
    }\r
    return Array.from(affected);\r
  }\r
\r
  function buildDataflowSemanticModel(){\r
    const rows=collectDataflowEdges();\r
    const measurementPoints=collectMeasurementPoints(rows);\r
    const pointByEdge=new Map(measurementPoints.map(point=>[point.edgeId,point]));\r
    const outgoingBySource=rows.reduce((acc,item)=>{\r
      const sourceId=item.edge?.sourceNodeId||'';\r
      if(!sourceId){return acc;}\r
      if(!acc.has(sourceId)){acc.set(sourceId,[]);}\r
      acc.get(sourceId).push(item.edge);\r
      return acc;\r
    },new Map());\r
    const edges=rows.map(item=>{\r
      const meta=inferSignalChineseMeta(item.edge,item.metrics);\r
      const point=pointByEdge.get(item.edge.id);\r
      const mapping=meta.mapping||buildSemanticMapping(item.edge,item.metrics,meta);\r
      const propagationKind=point?.faultInfluence||'none';\r
      const policyKind=classifyPropagationPolicy(item.edge);\r
      const affectedMeasurementPointIds=collectAffectedMeasurementPointIds(item.edge,propagationKind,pointByEdge,outgoingBySource);\r
      return {\r
        edge:item.edge,\r
        metrics:item.metrics,\r
        id:item.edge.id,\r
        signalNameZh:meta.signalNameZh,\r
        signalPathZh:meta.signalPathZh,\r
        engineeringKey:mapping.engineeringKey,\r
        role:meta.role,\r
        propagationKind,\r
        propagationLabelZh:DATAFLOW_PROPAGATION_CLASSES[propagationKind]?.labelZh||DATAFLOW_PROPAGATION_CLASSES.none.labelZh,\r
        propagationDescriptionZh:DATAFLOW_PROPAGATION_CLASSES[propagationKind]?.descriptionZh||DATAFLOW_PROPAGATION_CLASSES.none.descriptionZh,\r
        propagationPolicyKind:policyKind,\r
        propagationPolicyLabelZh:DATAFLOW_PROPAGATION_CLASSES[policyKind]?.labelZh||DATAFLOW_PROPAGATION_CLASSES.none.labelZh,\r
        propagationPolicyDescriptionZh:DATAFLOW_PROPAGATION_CLASSES[policyKind]?.descriptionZh||DATAFLOW_PROPAGATION_CLASSES.none.descriptionZh,\r
        measurementPointId:point?.id||'',\r
        canPropagateFault:canDataflowFaultPropagate(propagationKind),\r
        propagationScopeZh:getDataflowPropagationScopeZh(propagationKind),\r
        affectedMeasurementPointIds,\r
        mapping,\r
        advanced:{mapping}\r
      };\r
    });\r
    const propagationGroups=buildDataflowPropagationGroups(edges,measurementPoints);\r
    return {\r
      stages:DATAFLOW_STAGE_DEFS.map(stage=>({\r
        ...stage,\r
        pointCount:measurementPoints.filter(point=>stage.roles.includes(point.role)).length\r
      })),\r
      edges,\r
      measurementPoints,\r
      propagationGroups,\r
      propagationClasses:DATAFLOW_PROPAGATION_CLASSES,\r
      summary:{\r
        totalEdges:edges.length,\r
        totalMeasurementPoints:measurementPoints.length,\r
        propagated:propagationGroups.propagated.count,\r
        blocked:propagationGroups.blocked.count,\r
        localEffect:propagationGroups.localEffect.count,\r
        diagnosticOnly:propagationGroups.diagnosticOnly.count,\r
        none:propagationGroups.none.count\r
      }\r
    };\r
  }\r
\r
  function getDiagnosticPointDefaults(points=[]){\r
    const preferredRoles=['command','control','allocation','actuation','measurement','residual'];\r
    const selected=[];\r
    preferredRoles.forEach(role=>{\r
      const point=points.find(item=>item.role===role&&!selected.includes(item.id));\r
      if(point){selected.push(point.id);}\r
    });\r
    if(selected.length===0&&points[0]?.id){selected.push(points[0].id);}\r
    return selected.slice(0,Math.min(4,Math.max(1,points.length-1)));\r
  }\r
\r
function ensureDiagnosticTestPointState(points=null){\r
  const configuredDiagnosticPoints=Array.isArray(S.diagnosticTestPoints)?S.diagnosticTestPoints:[];\r
  const semanticPointsForState=Array.isArray(points)?points:(configuredDiagnosticPoints.length?configuredDiagnosticPoints:getSemanticTestPoints());\r
  const validDiagnosticPointIds=new Set(semanticPointsForState.map(point=>point.pointId));\r
  const diagnosticModelSignature=semanticPointsForState\r
    .map(point=>[point.pointId,point.edgeId,point.nodeId||'',point.name||''].join(':'))\r
    .join('|');\r
  const shouldApplyDiagnosticDefaults=S.diagnosticTestPointModelSignature!==diagnosticModelSignature;\r
  S.diagnosticTestPointModelSignature=diagnosticModelSignature;\r
  if(!Array.isArray(S.installedDiagnosticTestPointIds)){\r
    S.installedDiagnosticTestPointIds=[];\r
  }\r
  S.installedDiagnosticTestPointIds=S.installedDiagnosticTestPointIds.filter(pointId=>validDiagnosticPointIds.has(pointId));\r
  if(shouldApplyDiagnosticDefaults&&S.installedDiagnosticTestPointIds.length===0&&semanticPointsForState.length>0){\r
    S.installedDiagnosticTestPointIds=getDiagnosticPointDefaults(semanticPointsForState);\r
  }\r
  if(S.selectedDiagnosticTestPointId&&!validDiagnosticPointIds.has(S.selectedDiagnosticTestPointId)){\r
    S.selectedDiagnosticTestPointId=null;\r
  }\r
  return S.installedDiagnosticTestPointIds;\r
    const semanticPoints=points||buildDataflowSemanticModel().measurementPoints||[];\r
    if(!Array.isArray(S.installedDiagnosticTestPointIds)){\r
      S.installedDiagnosticTestPointIds=[];\r
    }\r
    const validIds=new Set(semanticPoints.map(point=>point.id));\r
    S.installedDiagnosticTestPointIds=S.installedDiagnosticTestPointIds.filter(id=>validIds.has(id));\r
    if(S.installedDiagnosticTestPointIds.length===0&&semanticPoints.length>0){\r
      S.installedDiagnosticTestPointIds=getDiagnosticPointDefaults(semanticPoints);\r
    }\r
    if(!S.confirmedDiagnosticFaults||typeof S.confirmedDiagnosticFaults!=='object'){\r
      S.confirmedDiagnosticFaults={};\r
    }\r
    if(S.selectedDiagnosticTestPointId&&!validIds.has(S.selectedDiagnosticTestPointId)){\r
      S.selectedDiagnosticTestPointId='';\r
    }\r
  }\r
\r
  function buildDiagnosticTestPointModel(){\r
    const semantic=buildDataflowSemanticModel();\r
    const points=semantic.measurementPoints||[];\r
    ensureDiagnosticTestPointState(points);\r
    const installedSet=new Set(S.installedDiagnosticTestPointIds);\r
    const positions=points.map((point,index)=>({\r
      ...point,\r
      pointId:point.id,\r
      positionIndex:index+1,\r
      positionNameZh:point.signalNameZh||point.labelZh||\`测点位置 \${index+1}\`,\r
      installed:installedSet.has(point.id),\r
      confirmedFaultTypeIds:cloneDefaults(S.confirmedDiagnosticFaults?.[point.id]||[])\r
    }));\r
    return {\r
      semantic,\r
      positions,\r
      installed:positions.filter(point=>point.installed),\r
      available:positions.filter(point=>!point.installed),\r
      selectedPointId:S.selectedDiagnosticTestPointId||''\r
    };\r
  }\r
\r
  function installDiagnosticTestPoint(pointId){\r
    const model=buildDiagnosticTestPointModel();\r
    const point=model.positions.find(item=>item.pointId===pointId);\r
    if(!point){return false;}\r
    if(!S.installedDiagnosticTestPointIds.includes(pointId)){\r
      S.installedDiagnosticTestPointIds.push(pointId);\r
    }\r
    S.selectedDiagnosticTestPointId=pointId;\r
    renderDataflowPanel();\r
    return true;\r
  }\r
\r
  function removeDiagnosticTestPoint(pointId){\r
    ensureDiagnosticTestPointState();\r
    const before=S.installedDiagnosticTestPointIds.length;\r
    S.installedDiagnosticTestPointIds=S.installedDiagnosticTestPointIds.filter(id=>id!==pointId);\r
    delete S.confirmedDiagnosticFaults[pointId];\r
    if(S.selectedDiagnosticTestPointId===pointId){S.selectedDiagnosticTestPointId='';}\r
    if(S.testPointDiagnosis?.pointId===pointId){S.testPointDiagnosis=null;}\r
    renderDataflowPanel();\r
    return S.installedDiagnosticTestPointIds.length!==before;\r
  }\r
\r
  function getDiagnosticPointById(pointId){\r
    return buildDiagnosticTestPointModel().positions.find(point=>point.pointId===pointId)||null;\r
  }\r
\r
  function getFaultTypeId(model){\r
    return model?.faultTypeId||model?.id||model?.modelId||model?.faultModelId||'';\r
  }\r
\r
  function getDiagnosticFaultCatalogCandidates(){\r
    const byId=new Map();\r
    const append=model=>{\r
      const id=getFaultTypeId(model);\r
      if(!id||byId.has(id)){return;}\r
      byId.set(id,{\r
        ...cloneDefaults(model),\r
        id,\r
        faultTypeId:id,\r
        name:model?.name||id\r
      });\r
    };\r
    (S.availableFaultModels||[]).forEach(append);\r
    (S.importedFaultModels||[]).forEach(append);\r
    if(typeof window.getFaultTypeCatalogModels==='function'){\r
      (window.getFaultTypeCatalogModels()||[]).forEach(append);\r
    }\r
    return Array.from(byId.values());\r
  }\r
\r
  function getInjectedFaultForDiagnosticPoint(point){\r
    const edge=getEdge(point?.edgeId);\r
    const edgeFault=getFaultModelForEdge(edge);\r
    if(edgeFault){return edgeFault;}\r
    const sourceFault=getFaultModelForNode(getNode(point?.sourceNodeId));\r
    if(sourceFault){return sourceFault;}\r
    return getFaultModelForNode(getNode(point?.targetNodeId));\r
  }\r
\r
  function scoreFaultCandidateForPoint(model,point,injectedFault=null){\r
    const id=getFaultTypeId(model);\r
    const injectedId=getFaultTypeId(injectedFault);\r
    if(id&&injectedId&&id===injectedId){return 0.98;}\r
    const layer=String(model?.layer||'').toLowerCase();\r
    const behavior=[\r
      model?.runtimeBehavior,\r
      model?.faultCode,\r
      model?.modelClass,\r
      model?.name,\r
      Array.isArray(model?.observableSignals)?model.observableSignals.join(' '):''\r
    ].filter(Boolean).join(' ').toLowerCase();\r
    const role=point?.role||'';\r
    let score=0.25;\r
    if(role==='measurement'&&(layer.includes('sensor')||layer.includes('electrical')||/sensor|imu|gyro|noise|freeze|scale|bias/.test(behavior))){score+=0.45;}\r
    if(role==='residual'&&(/residual|diagnostic|fault|alert/.test(behavior)||layer.includes('diagnostic'))){score+=0.45;}\r
    if((role==='control'||role==='command'||role==='allocation')&&(layer.includes('control')||layer.includes('protocol')||/gain|delay|packet|command|tamper/.test(behavior))){score+=0.38;}\r
    if((role==='plant'||role==='actuation')&&(layer.includes('physical')||layer.includes('electrical')||/actuator|motor|efficiency|lock|saturation|inertia/.test(behavior))){score+=0.38;}\r
    if(point?.edgeId&&String(model?.typicalTargets||'').toLowerCase().includes(point.edgeId.toLowerCase())){score+=0.15;}\r
    return Math.min(score,0.9);\r
  }\r
\r
  function buildDiagnosticFaultCandidates(point){\r
    const injectedFault=getInjectedFaultForDiagnosticPoint(point);\r
    const confirmedIds=new Set(S.confirmedDiagnosticFaults?.[point.pointId||point.id]||[]);\r
    const byId=new Map();\r
    const addCandidate=(model,source='catalog')=>{\r
      if(!model){return;}\r
      const id=getFaultTypeId(model);\r
      if(!id){return;}\r
      const score=scoreFaultCandidateForPoint(model,point,injectedFault);\r
      if(score<0.42&&source!=='injected'){return;}\r
      const previous=byId.get(id);\r
      const next={\r
        faultTypeId:id,\r
        name:model.name||id,\r
        layer:model.layer||'',\r
        modelClass:model.modelClass||model.faultKind||'',\r
        runtimeBehavior:model.runtimeBehavior||'',\r
        confidence:source==='injected'?0.98:score,\r
        source,\r
        confirmed:confirmedIds.has(id),\r
        reasonZh:source==='injected'\r
          ?'当前测点链路存在已注入故障，优先列为候选。'\r
          :'根据测点所在信号类型、故障层级和可观测信号匹配。'\r
      };\r
      if(!previous||next.confidence>previous.confidence){byId.set(id,next);}\r
    };\r
    addCandidate(injectedFault,'injected');\r
    getDiagnosticFaultCatalogCandidates().forEach(model=>addCandidate(model,'catalog'));\r
    return Array.from(byId.values())\r
      .sort((a,b)=>b.confidence-a.confidence||a.name.localeCompare(b.name,'zh-Hans-CN'))\r
      .slice(0,8);\r
  }\r
\r
  function runDiagnosticTestPointDetection(pointId){\r
    const point=getDiagnosticPointById(pointId);\r
    if(!point){return null;}\r
    if(!point.installed){installDiagnosticTestPoint(pointId);}\r
    const candidates=buildDiagnosticFaultCandidates(point);\r
    const abnormal=candidates.some(candidate=>candidate.source==='injected')||Boolean(getInjectedFaultForDiagnosticPoint(point));\r
    const diagnosis={\r
      pointId,\r
      edgeId:point.edgeId,\r
      pointNameZh:point.positionNameZh||point.signalNameZh||point.labelZh,\r
      signalPathZh:point.signalPathZh||'',\r
      status:abnormal?'abnormal':'normal',\r
      statusLabelZh:abnormal?'疑似故障':'未发现异常',\r
      checkedAt:new Date().toISOString(),\r
      candidates,\r
      confirmedFaultTypeIds:cloneDefaults(S.confirmedDiagnosticFaults?.[pointId]||[])\r
    };\r
    S.selectedDiagnosticTestPointId=pointId;\r
    S.testPointDiagnosis=diagnosis;\r
    selectDataflowEdge(point.edgeId);\r
    return diagnosis;\r
  }\r
\r
  function toggleDiagnosticFaultConfirmation(pointId,faultTypeId,checked){\r
    if(!pointId||!faultTypeId){return false;}\r
    if(!S.confirmedDiagnosticFaults||typeof S.confirmedDiagnosticFaults!=='object'){\r
      S.confirmedDiagnosticFaults={};\r
    }\r
    const ids=new Set(S.confirmedDiagnosticFaults[pointId]||[]);\r
    if(checked){ids.add(faultTypeId);}else{ids.delete(faultTypeId);}\r
    S.confirmedDiagnosticFaults[pointId]=Array.from(ids);\r
    if(S.testPointDiagnosis?.pointId===pointId){\r
      S.testPointDiagnosis.confirmedFaultTypeIds=Array.from(ids);\r
      S.testPointDiagnosis.candidates=(S.testPointDiagnosis.candidates||[]).map(candidate=>({\r
        ...candidate,\r
        confirmed:ids.has(candidate.faultTypeId)\r
      }));\r
    }\r
    return true;\r
  }\r
\r
  function ensureDiagnosticTestPointDialog(){\r
    let overlay=document.getElementById('ov-testpoint-diagnosis');\r
    if(overlay){return overlay;}\r
    overlay=document.createElement('div');\r
    overlay.id='ov-testpoint-diagnosis';\r
    overlay.className='overlay testpoint-diagnosis-overlay';\r
    overlay.innerHTML=\`\r
      <div class="modal testpoint-diagnosis-modal" role="dialog" aria-modal="true">\r
        <div class="mhead testpoint-diagnosis-head">\r
          <div>\r
            <div class="mtitle">测点诊断结果</div>\r
            <div class="testpoint-diagnosis-subtitle">点击测点后进行一次诊断，候选故障需要人工二次确认。</div>\r
          </div>\r
          <button type="button" class="dataflow-map-close" data-testpoint-diagnosis-close aria-label="关闭">&times;</button>\r
        </div>\r
        <div class="mbody testpoint-diagnosis-body" id="testpoint-diagnosis-body"></div>\r
      </div>\`;\r
    overlay.addEventListener('click',event=>{\r
      if(event.target===overlay||event.target.closest('[data-testpoint-diagnosis-close]')){\r
        overlay.classList.remove('open');\r
      }\r
    });\r
    document.body.appendChild(overlay);\r
    return overlay;\r
  }\r
\r
  function renderDiagnosticCandidate(candidate,pointId){\r
    const confidence=Math.round(Number(candidate.confidence||0)*100);\r
    return \`\r
      <label class="testpoint-candidate" data-fault-candidate="\${escapeHtml(candidate.faultTypeId)}">\r
        <input type="checkbox" data-confirm-fault-candidate="\${escapeHtml(candidate.faultTypeId)}" \${candidate.confirmed?'checked':''}>\r
        <span>\r
          <strong>\${escapeHtml(candidate.name)}</strong>\r
          <em>\${escapeHtml(getLayerLabel(candidate.layer))} · \${escapeHtml(candidate.modelClass||candidate.runtimeBehavior||'故障类型')} · \${confidence}%</em>\r
          <b>\${escapeHtml(candidate.reasonZh||'根据测点响应匹配。')}</b>\r
        </span>\r
      </label>\`;\r
  }\r
\r
  function openDiagnosticTestPointDialog(pointId){\r
    const diagnosis=runDiagnosticTestPointDetection(pointId);\r
    if(!diagnosis){return null;}\r
    const overlay=ensureDiagnosticTestPointDialog();\r
    const body=overlay.querySelector('#testpoint-diagnosis-body');\r
    if(body){\r
      body.innerHTML=\`\r
        <section class="testpoint-diagnosis-summary">\r
          <div><span>测点</span><strong>\${escapeHtml(diagnosis.pointNameZh)}</strong></div>\r
          <div><span>链路</span><strong>\${escapeHtml(diagnosis.edgeId)}</strong></div>\r
          <div><span>状态</span><strong>\${escapeHtml(diagnosis.statusLabelZh)}</strong></div>\r
        </section>\r
        <section class="testpoint-candidate-list">\r
          \${diagnosis.candidates.length\r
            ?diagnosis.candidates.map(candidate=>renderDiagnosticCandidate(candidate,pointId)).join('')\r
            :'<div class="testpoint-candidate-empty">当前测点没有匹配到候选故障类型。</div>'}\r
        </section>\`;\r
      body.querySelectorAll('[data-confirm-fault-candidate]').forEach(input=>{\r
        input.addEventListener('change',()=>{\r
          toggleDiagnosticFaultConfirmation(pointId,input.dataset.confirmFaultCandidate,input.checked);\r
          renderDataflowPanel();\r
        });\r
      });\r
    }\r
    overlay.classList.add('open');\r
    return diagnosis;\r
  }\r
\r
  renderDiagnosticCandidate=function(candidate,pointId){\r
    const confidence=Math.round(Number(candidate.confidence||0)*100);\r
    const modelKind=candidate.modelClass||candidate.runtimeBehavior||'故障类型';\r
    return \`\r
      <label class="testpoint-candidate" data-fault-candidate="\${escapeHtml(candidate.faultTypeId)}">\r
        <input type="checkbox" data-confirm-fault-candidate="\${escapeHtml(candidate.faultTypeId)}" \${candidate.confirmed?'checked':''}>\r
        <span class="testpoint-candidate__body">\r
          <strong>\${escapeHtml(candidate.name)}</strong>\r
          <em>\${escapeHtml(getLayerLabel(candidate.layer))} · \${escapeHtml(modelKind)} · 匹配度 \${confidence}%</em>\r
          <b>\${escapeHtml(candidate.reasonZh||'根据测点响应和当前故障注入状态匹配。')}</b>\r
        </span>\r
      </label>\`;\r
  };\r
\r
  openDiagnosticTestPointDialog=function(pointId){\r
    const diagnosis=runDiagnosticTestPointDetection(pointId);\r
    if(!diagnosis){return null;}\r
    const overlay=ensureDiagnosticTestPointDialog();\r
    const title=overlay.querySelector('.mtitle');\r
    const subtitle=overlay.querySelector('.testpoint-diagnosis-subtitle');\r
    const close=overlay.querySelector('[data-testpoint-diagnosis-close]');\r
    if(title){title.textContent='测点诊断结果';}\r
    if(subtitle){subtitle.textContent='点击测点后执行一次离线诊断；候选故障需要人工二次确认。';}\r
    if(close){close.setAttribute('aria-label','关闭');}\r
    const body=overlay.querySelector('#testpoint-diagnosis-body');\r
    if(body){\r
      body.innerHTML=\`\r
        <section class="testpoint-diagnosis-summary">\r
          <div><span>检测测点</span><strong>\${escapeHtml(diagnosis.pointNameZh)}</strong></div>\r
          <div><span>信号链路</span><strong>\${escapeHtml(diagnosis.signalPathZh||diagnosis.edgeId)}</strong></div>\r
          <div><span>诊断结论</span><strong>\${escapeHtml(diagnosis.statusLabelZh)}</strong></div>\r
        </section>\r
        <section class="testpoint-candidate-list">\r
          \${diagnosis.candidates.length\r
            ?diagnosis.candidates.map(candidate=>renderDiagnosticCandidate(candidate,pointId)).join('')\r
            :'<div class="testpoint-candidate-empty">当前测点没有匹配到候选故障类型。</div>'}\r
        </section>\`;\r
      body.querySelectorAll('[data-confirm-fault-candidate]').forEach(input=>{\r
        input.addEventListener('change',()=>{\r
          toggleDiagnosticFaultConfirmation(pointId,input.dataset.confirmFaultCandidate,input.checked);\r
          renderDataflowPanel();\r
        });\r
      });\r
    }\r
    overlay.classList.add('open');\r
    return diagnosis;\r
  };\r
\r
  const MEASUREMENT_SCENARIO_DEFS=[\r
    {type:'link_cut',labelZh:'截断链路',targetKind:'edge',defaultParameters:{time:0}},\r
    {type:'parameter_shift',labelZh:'参数偏移',targetKind:'node',defaultParameters:{offset:0.05}},\r
    {type:'can_delay',labelZh:'CAN 延迟',targetKind:'edge',defaultParameters:{delayMs:120}},\r
    {type:'packet_loss',labelZh:'CAN 丢包',targetKind:'edge',defaultParameters:{dropRate:0.2}},\r
    {type:'actuator_loss',labelZh:'执行器效率下降',targetKind:'node',defaultParameters:{efficiency:0.78}}\r
  ];\r
  const MEASUREMENT_RESPONSE_STATUS_LABELS={\r
    normal:'正常',\r
    affected:'受影响',\r
    warning:'预警',\r
    abnormal:'异常',\r
    compensating:'补偿升高',\r
    cut:'链路截断'\r
  };\r
\r
  function getMeasurementScenarioDef(type='link_cut'){\r
    return MEASUREMENT_SCENARIO_DEFS.find(item=>item.type===type)||MEASUREMENT_SCENARIO_DEFS[0];\r
  }\r
\r
  function buildMeasurementScenarioOptions(){\r
    return MEASUREMENT_SCENARIO_DEFS.map(item=>({\r
      type:item.type,\r
      labelZh:item.labelZh,\r
      targetKind:item.targetKind,\r
      defaultParameters:cloneDefaults(item.defaultParameters)\r
    }));\r
  }\r
\r
  function buildMeasurementTargetOptions(type='link_cut'){\r
    const def=getMeasurementScenarioDef(type);\r
    const semantic=buildDataflowSemanticModel();\r
    if(def.targetKind==='node'){\r
      return S.modelNodes.map(node=>({\r
        id:node.id,\r
        targetId:node.id,\r
        targetKind:'node',\r
        labelZh:node.props?.name||node.id,\r
        nodeId:node.id,\r
        type:node.type||''\r
      }));\r
    }\r
    return (semantic.edges||[]).map(edge=>({\r
      id:edge.id,\r
      targetId:edge.id,\r
      targetKind:'edge',\r
      labelZh:edge.signalNameZh||edge.metrics?.signalName||edge.id,\r
      edgeId:edge.id,\r
      sourceNodeId:edge.edge?.sourceNodeId||'',\r
      targetNodeId:edge.edge?.targetNodeId||'',\r
      measurementPointId:edge.measurementPointId||''\r
    }));\r
  }\r
\r
  function createMeasurementScenario(input={}){\r
    const def=getMeasurementScenarioDef(input.type||'link_cut');\r
    const targetKind=input.targetKind||def.targetKind;\r
    const parameters={\r
      ...cloneDefaults(def.defaultParameters),\r
      ...cloneDefaults(input.parameters||{})\r
    };\r
    return {\r
      mode:'snapshot',\r
      type:def.type,\r
      typeLabelZh:def.labelZh,\r
      targetKind,\r
      targetId:input.targetId||'',\r
      parameters\r
    };\r
  }\r
\r
  function collectMeasurementAffectedEdgeIds(scenario){\r
    const affected=new Set();\r
    const outgoingBySource=S.modelEdges.reduce((acc,edge)=>{\r
      const sourceId=edge?.sourceNodeId||'';\r
      if(!sourceId){return acc;}\r
      if(!acc.has(sourceId)){acc.set(sourceId,[]);}\r
      acc.get(sourceId).push(edge);\r
      return acc;\r
    },new Map());\r
    const queue=[];\r
    const visitedNodes=new Set();\r
    const visitedEdges=new Set();\r
    if(scenario.targetKind==='edge'){\r
      const targetEdge=getEdge(scenario.targetId);\r
      if(targetEdge?.id){\r
        affected.add(targetEdge.id);\r
        visitedEdges.add(targetEdge.id);\r
        if(targetEdge.targetNodeId){queue.push(targetEdge.targetNodeId);}\r
      }\r
    }else if(scenario.targetKind==='node'){\r
      (outgoingBySource.get(scenario.targetId)||[]).forEach(edge=>{\r
        if(edge?.id){\r
          affected.add(edge.id);\r
          visitedEdges.add(edge.id);\r
          if(edge.targetNodeId){queue.push(edge.targetNodeId);}\r
        }\r
      });\r
    }\r
    while(queue.length){\r
      const nodeId=queue.shift();\r
      if(!nodeId||visitedNodes.has(nodeId)){continue;}\r
      visitedNodes.add(nodeId);\r
      (outgoingBySource.get(nodeId)||[]).forEach(edge=>{\r
        if(!edge?.id||visitedEdges.has(edge.id)){return;}\r
        visitedEdges.add(edge.id);\r
        affected.add(edge.id);\r
        if(edge.targetNodeId&&!visitedNodes.has(edge.targetNodeId)){\r
          queue.push(edge.targetNodeId);\r
        }\r
      });\r
    }\r
    return affected;\r
  }\r
\r
  function getMeasurementPointStatus(point,scenario,affectedByTarget){\r
    if(scenario.type==='link_cut'&&scenario.targetKind==='edge'&&point.edgeId===scenario.targetId){return 'cut';}\r
    if(!affectedByTarget){return 'normal';}\r
    if(scenario.type==='can_delay'||scenario.type==='packet_loss'){return 'warning';}\r
    if(scenario.type==='actuator_loss'){return 'compensating';}\r
    if(scenario.type==='parameter_shift'){return 'abnormal';}\r
    return 'affected';\r
  }\r
\r
  function getOperatedMeasurementValue(point,scenario,status,affectedByTarget){\r
    const baseValue=point.currentValue;\r
    if(status==='cut'){return null;}\r
    if(!affectedByTarget){return baseValue;}\r
    const numeric=Number(baseValue);\r
    if(!Number.isFinite(numeric)){return baseValue;}\r
    if(scenario.type==='parameter_shift'){\r
      return numeric+Number(scenario.parameters?.offset||0);\r
    }\r
    if(scenario.type==='actuator_loss'){\r
      return numeric*Number(scenario.parameters?.efficiency||1);\r
    }\r
    if(scenario.type==='packet_loss'){\r
      return numeric*(1-Number(scenario.parameters?.dropRate||0));\r
    }\r
    return numeric;\r
  }\r
\r
  function buildMeasurementResponsePoint(point,scenario,affectedEdges){\r
    const affectedByTarget=affectedEdges.has(point.edgeId);\r
    const status=getMeasurementPointStatus(point,scenario,affectedByTarget);\r
    const operatedValue=getOperatedMeasurementValue(point,scenario,status,affectedByTarget);\r
    return {\r
      id:point.id,\r
      pointId:point.id,\r
      edgeId:point.edgeId,\r
      signalId:point.signalId,\r
      nodeId:point.nodeId,\r
      labelZh:point.labelZh,\r
      signalNameZh:point.signalNameZh,\r
      signalPathZh:point.signalPathZh,\r
      stageId:point.stageId,\r
      stageLabelZh:point.stageLabelZh,\r
      role:point.role,\r
      unit:point.unit,\r
      baselineValue:point.currentValue,\r
      operatedValue,\r
      residualValue:point.residualValue,\r
      status,\r
      statusLabelZh:MEASUREMENT_RESPONSE_STATUS_LABELS[status]||MEASUREMENT_RESPONSE_STATUS_LABELS.normal,\r
      affectedByTarget,\r
      targetType:scenario.type,\r
      targetId:scenario.targetId,\r
      samples:[]\r
    };\r
    responsePoint.reasonZh=getMeasurementResponseReason(responsePoint,{scenario});\r
    return responsePoint;\r
  }\r
\r
  function getMeasurementResponseSummary(response){\r
    const points=Array.isArray(response?.points)?response.points:[];\r
    return {\r
      total:points.length,\r
      normal:points.filter(point=>point.status==='normal').length,\r
      affected:points.filter(point=>point.affectedByTarget).length,\r
      warning:points.filter(point=>point.status==='warning').length,\r
      abnormal:points.filter(point=>point.status==='abnormal').length,\r
      compensating:points.filter(point=>point.status==='compensating').length,\r
      cut:points.filter(point=>point.status==='cut').length\r
    };\r
  }\r
\r
  function calculateMeasurementResponse(scenarioInput){\r
    const scenario=createMeasurementScenario(scenarioInput||{});\r
    const semantic=buildDataflowSemanticModel();\r
    const affectedEdges=collectMeasurementAffectedEdgeIds(scenario);\r
    const points=(semantic.measurementPoints||[]).map(point=>buildMeasurementResponsePoint(point,scenario,affectedEdges));\r
    const response={\r
      mode:'snapshot',\r
      scenario,\r
      points,\r
      summary:null\r
    };\r
    response.summary=getMeasurementResponseSummary(response);\r
    S.measurementScenario=scenario;\r
    S.measurementResponse=response;\r
    S.selectedMeasurementPointId=getMeasurementResponsePointId(points.find(point=>point.affectedByTarget))||'';\r
    decorateDataflowEdges();\r
    return response;\r
  }\r
\r
  function getFilteredMeasurementResponsePoints(response=S.measurementResponse,filter=S.measurementResponseFilter){\r
    const points=Array.isArray(response?.points)?response.points:[];\r
    if(!filter||filter==='all'){return points;}\r
    if(filter==='affected'){return points.filter(point=>point.affectedByTarget);}\r
    return points.filter(point=>point.status===filter||point.id===filter||point.edgeId===filter);\r
  }\r
\r
  function getMeasurementResponsePointByEdge(edgeId){\r
    if(!edgeId){return null;}\r
    const points=Array.isArray(S.measurementResponse?.points)?S.measurementResponse.points:[];\r
    return points.find(point=>point.edgeId===edgeId)||null;\r
  }\r
\r
  function isMeasurementResponseTargetEdge(edgeId){\r
    if(!edgeId){return false;}\r
    const scenario=S.measurementScenario||S.measurementResponse?.scenario||{};\r
    return scenario.targetKind==='edge'&&scenario.targetId===edgeId;\r
  }\r
\r
  function isMeasurementResponseAffectedEdge(edgeId){\r
    return Boolean(getMeasurementResponsePointByEdge(edgeId)?.affectedByTarget);\r
  }\r
\r
  function selectMeasurementResponsePoint(pointId){\r
    const points=Array.isArray(S.measurementResponse?.points)?S.measurementResponse.points:[];\r
    const point=points.find(item=>getMeasurementResponsePointId(item)===pointId||item.edgeId===pointId);\r
    if(!point){return false;}\r
    S.selectedMeasurementPointId=getMeasurementResponsePointId(point);\r
    if(point.edgeId){selectDataflowEdge(point.edgeId);}\r
    return true;\r
  }\r
\r
  function clearMeasurementResponse(){\r
    S.measurementScenario=null;\r
    S.measurementResponse=null;\r
    S.measurementResponseFilter='all';\r
    S.selectedMeasurementPointId='';\r
    renderDataflowPanel();\r
    decorateDataflowEdges();\r
    return true;\r
  }\r
\r
  const MEASUREMENT_SCENARIO_UI_LABELS={\r
    link_cut:'截断链路',\r
    parameter_shift:'参数偏移',\r
    can_delay:'CAN 延迟',\r
    packet_loss:'CAN 丢包',\r
    actuator_loss:'执行器效率下降'\r
  };\r
  const MEASUREMENT_STATUS_UI_LABELS={\r
    normal:'正常',\r
    affected:'受影响',\r
    warning:'预警',\r
    abnormal:'异常',\r
    compensating:'补偿升高',\r
    cut:'链路截断'\r
  };\r
  const MEASUREMENT_PRIMARY_PARAMETER_LABELS={\r
    time:'时间',\r
    offset:'偏移量',\r
    delayMs:'延迟 ms',\r
    dropRate:'丢包率',\r
    efficiency:'效率'\r
  };\r
\r
  function renderMeasurementSelectOptions(options=[],selectedId=''){\r
    return (Array.isArray(options)?options:[]).map(option=>{\r
      const isScenarioOption=Object.prototype.hasOwnProperty.call(option||{},'defaultParameters');\r
      const id=isScenarioOption?(option?.type||''):(option?.targetId||option?.id||option?.type||'');\r
      const label=MEASUREMENT_SCENARIO_UI_LABELS[id]||option?.labelZh||option?.label||id||'未命名';\r
      const detail=option?.targetId&&label!==option.targetId?\` · \${option.targetId}\`:'';\r
      return \`<option value="\${escapeHtml(id)}"\${id===selectedId?' selected':''}>\${escapeHtml(label)}\${escapeHtml(detail)}</option>\`;\r
    }).join('');\r
  }\r
\r
  function formatMeasurementResponseValue(value,unit=''){\r
    if(value===null){return '断开';}\r
    if(value===undefined||value===''){return '--';}\r
    const numeric=Number(value);\r
    const shown=Number.isFinite(numeric)\r
      ?numeric.toFixed(Math.abs(numeric)>=100?1:3).replace(/\\.?0+$/,'')\r
      :String(value);\r
    return \`\${shown}\${unit?\` \${unit}\`:''}\`;\r
  }\r
\r
  function formatMeasurementDelta(value){\r
    const numeric=Number(value);\r
    if(!Number.isFinite(numeric)){return '--';}\r
    if(Math.abs(numeric)<1e-9){return '0';}\r
    const shown=numeric.toFixed(Math.abs(numeric)>=100?1:3).replace(/\\.?0+$/,'');\r
    return \`\${numeric>0?'+':''}\${shown}\`;\r
  }\r
\r
  function getMeasurementPrimaryParameterKey(type){\r
    return {\r
      link_cut:'time',\r
      parameter_shift:'offset',\r
      can_delay:'delayMs',\r
      packet_loss:'dropRate',\r
      actuator_loss:'efficiency'\r
    }[type]||'time';\r
  }\r
\r
  function getMeasurementPrimaryParameterValue(scenario){\r
    const type=scenario?.type||'link_cut';\r
    const key=getMeasurementPrimaryParameterKey(type);\r
    const def=getMeasurementScenarioDef(type);\r
    const value=scenario?.parameters?.[key];\r
    if(value!==undefined&&value!==null&&value!==''){return value;}\r
    return def?.defaultParameters?.[key]??'';\r
  }\r
\r
  function getMeasurementResponsePointId(point){\r
    return point?.pointId||point?.id||'';\r
  }\r
\r
  function readMeasurementScenarioFromPanel(panel){\r
    const type=panel?.querySelector('[data-measurement-scenario-field="type"]')?.value||S.measurementScenario?.type||'link_cut';\r
    const def=getMeasurementScenarioDef(type);\r
    const targets=buildMeasurementTargetOptions(type);\r
    const targetField=panel?.querySelector('[data-measurement-scenario-field="targetId"]');\r
    const previousType=S.measurementScenario?.type||type;\r
    const typeChanged=type!==previousType;\r
    const requestedTargetId=typeChanged?'':(targetField?.value||S.measurementScenario?.targetId||'');\r
    const matchedTarget=targets.find(item=>(item.targetId||item.id)===requestedTargetId);\r
    const target=matchedTarget||targets[0]||{};\r
    const targetId=target.targetId||target.id||'';\r
    const key=getMeasurementPrimaryParameterKey(type);\r
    const input=panel?.querySelector('[data-measurement-scenario-field="primaryParam"]');\r
    const raw=input?.value;\r
    const numeric=Number(raw);\r
    const useDefaultParameter=typeChanged||!matchedTarget;\r
    const parameters={\r
      [key]:useDefaultParameter||raw===''||raw===undefined\r
        ?def?.defaultParameters?.[key]\r
        :(Number.isFinite(numeric)?numeric:raw)\r
    };\r
    return createMeasurementScenario({\r
      type,\r
      targetKind:target.targetKind||def.targetKind,\r
      targetId,\r
      parameters\r
    });\r
  }\r
\r
  function getMeasurementResponseReason(point,response){\r
    const scenario=response?.scenario||S.measurementScenario||{};\r
    if(point.status==='cut'){return '目标链路被截断，测点无有效信号。';}\r
    if(!point.affectedByTarget){return '未落在本次操作传播范围内。';}\r
    if(scenario.type==='parameter_shift'){return '目标参数偏移后，相关测点出现模拟偏差。';}\r
    if(scenario.type==='can_delay'){return 'CAN 延迟会影响该测点的时序判定。';}\r
    if(scenario.type==='packet_loss'){return 'CAN 丢包使该测点模拟值降低。';}\r
    if(scenario.type==='actuator_loss'){return '执行效率下降后由控制链路补偿。';}\r
    return '位于本次操作影响链路上。';\r
  }\r
\r
  function renderMeasurementResponseRows(response=S.measurementResponse){\r
    if(!response){\r
      return \`<div class="measurement-response-empty">选择操作和目标后，点击计算测点响应。</div>\`;\r
    }\r
    const points=getFilteredMeasurementResponsePoints(response,S.measurementResponseFilter);\r
    if(points.length===0){\r
      return \`<div class="measurement-response-empty">当前筛选没有测点。</div>\`;\r
    }\r
    return points.map(point=>{\r
      const pointId=getMeasurementResponsePointId(point);\r
      const baseline=Number(point.baselineValue);\r
      const operated=Number(point.operatedValue);\r
      const delta=Number.isFinite(baseline)&&Number.isFinite(operated)?operated-baseline:null;\r
      const statusLabel=MEASUREMENT_STATUS_UI_LABELS[point.status]||point.statusLabelZh||'正常';\r
      return \`\r
        <button type="button" class="measurement-response-row is-\${escapeHtml(point.status)}\${S.selectedMeasurementPointId===pointId?' is-selected':''}" data-measurement-response-row="\${escapeHtml(pointId)}" data-edge-id="\${escapeHtml(point.edgeId||'')}">\r
          <span class="measurement-response-row__point">\r
            <strong>\${escapeHtml(point.labelZh||point.signalNameZh||pointId)}</strong>\r
            <code>\${escapeHtml(point.edgeId||point.signalId||pointId)}</code>\r
          </span>\r
          <span><em>基线值</em><b>\${escapeHtml(formatMeasurementResponseValue(point.baselineValue,point.unit))}</b></span>\r
          <span><em>操作后</em><b>\${escapeHtml(formatMeasurementResponseValue(point.operatedValue,point.unit))}</b></span>\r
          <span><em>变化</em><b>\${escapeHtml(formatMeasurementDelta(delta))}</b></span>\r
          <span><em>判定</em><b>\${escapeHtml(statusLabel)}</b></span>\r
          <span class="measurement-response-row__reason"><em>原因</em><b>\${escapeHtml(getMeasurementResponseReason(point,response))}</b></span>\r
        </button>\`;\r
    }).join('');\r
  }\r
\r
  function renderMeasurementResponsePanel(semantic){\r
    const scenarioOptions=buildMeasurementScenarioOptions();\r
    const baseScenario=S.measurementScenario||createMeasurementScenario({type:'link_cut'});\r
    const type=baseScenario.type||'link_cut';\r
    const targets=buildMeasurementTargetOptions(type);\r
    const selectedTarget=targets.some(item=>(item.targetId||item.id)===baseScenario.targetId)\r
      ?baseScenario.targetId\r
      :(targets[0]?.targetId||targets[0]?.id||'');\r
    const scenario=createMeasurementScenario({\r
      ...baseScenario,\r
      targetId:selectedTarget,\r
      targetKind:(targets.find(item=>(item.targetId||item.id)===selectedTarget)||{}).targetKind||baseScenario.targetKind\r
    });\r
    const parameterKey=getMeasurementPrimaryParameterKey(type);\r
    const parameterValue=getMeasurementPrimaryParameterValue(scenario);\r
    const response=S.measurementResponse;\r
    const summary=response?.summary||{\r
      total:Array.isArray(semantic?.measurementPoints)?semantic.measurementPoints.length:0,\r
      affected:0,\r
      cut:0,\r
      abnormal:0,\r
      warning:0,\r
      compensating:0,\r
      normal:0\r
    };\r
    const abnormalCount=(summary.abnormal||0)+(summary.warning||0)+(summary.compensating||0);\r
    const filters=[\r
      ['all','全部'],\r
      ['affected','受影响'],\r
      ['abnormal','异常'],\r
      ['normal','正常']\r
    ];\r
    return \`\r
      <section class="measurement-response-panel" data-measurement-response-panel>\r
        <div class="measurement-response-head">\r
          <div>\r
            <div class="measurement-response-eyebrow">操作快照 · 全测点对照</div>\r
            <h3>测点响应</h3>\r
          </div>\r
          <div class="measurement-response-actions">\r
            <button type="button" data-measurement-response-calculate>计算</button>\r
            <button type="button" data-measurement-response-clear>清除</button>\r
          </div>\r
        </div>\r
        <div class="measurement-response-controls">\r
          <label>\r
            <span>操作类型</span>\r
            <select data-measurement-scenario-field="type">\${renderMeasurementSelectOptions(scenarioOptions,type)}</select>\r
          </label>\r
          <label>\r
            <span>目标对象</span>\r
            <select data-measurement-scenario-field="targetId">\${renderMeasurementSelectOptions(targets,selectedTarget)}</select>\r
          </label>\r
          <label>\r
            <span>\${escapeHtml(MEASUREMENT_PRIMARY_PARAMETER_LABELS[parameterKey]||'参数')}</span>\r
            <input data-measurement-scenario-field="primaryParam" type="number" step="any" value="\${escapeHtml(parameterValue)}">\r
          </label>\r
        </div>\r
        <div class="measurement-response-summary" data-measurement-response-summary>\r
          <span><em>测点</em><strong>\${Number(summary.total)||0}</strong></span>\r
          <span><em>受影响</em><strong>\${Number(summary.affected)||0}</strong></span>\r
          <span><em>截断</em><strong>\${Number(summary.cut)||0}</strong></span>\r
          <span><em>异常</em><strong>\${abnormalCount}</strong></span>\r
          <span><em>正常</em><strong>\${Number(summary.normal)||0}</strong></span>\r
        </div>\r
        <div class="measurement-response-filters" aria-label="测点响应筛选">\r
          \${filters.map(([id,label])=>\`<button type="button" class="\${S.measurementResponseFilter===id?'is-active':''}" data-measurement-response-filter="\${id}">\${label}</button>\`).join('')}\r
        </div>\r
        <div class="measurement-response-matrix">\r
          \${renderMeasurementResponseRows(response)}\r
        </div>\r
      </section>\`;\r
  }\r
\r
  function getDataflowEdgeMetrics(edge){\r
    const sourceNode=getNode(edge?.sourceNodeId);\r
    const targetNode=getNode(edge?.targetNodeId);\r
    const primary=Array.isArray(edge?.signalChannels)&&edge.signalChannels.length>0\r
      ?edge.signalChannels[0]\r
      :{};\r
    const signal={\r
      signalId:edge?.signalId||primary.signalId||primary.name||'',\r
      channelId:edge?.channelId||primary.channelId||primary.channel||'',\r
      messageId:edge?.messageId||primary.messageId||primary.frameId||'',\r
      signalRole:edge?.signalRole||primary.signalRole||primary.role||'',\r
      signalUnit:edge?.signalUnit||primary.signalUnit||primary.unit||'',\r
      payloadKind:edge?.payloadKind||primary.payloadKind||primary.type||'',\r
      sampleRate:edge?.sampleRate||primary.sampleRate||'',\r
      faultPropagationPolicy:edge?.faultPropagationPolicy||primary.faultPropagationPolicy||'inherit'\r
    };\r
    const edgeFault=getFaultModelForEdge(edge);\r
    const sourceFault=getFaultModelForNode(sourceNode);\r
    const sourceIsFault=isFaultNodeType(sourceNode?.type);\r
    const sourceFaultPropagates=canNodeFaultPropagateToEdge(sourceFault,edge);\r
    const currentValue=getRuntimeEdgeValue(edge,sourceNode);\r
    const residualValue=getResidualValue(edge,targetNode);\r
    const protocolFault=edgeFault?.layer==='protocol'?edgeFault:null;\r
    const latencyRaw=protocolFault\r
      ?readFaultParam(protocolFault,['delay_seconds','base_delay','jitter','latency'],null)\r
      :null;\r
    const latency=latencyRaw!==null\r
      ?(Number(latencyRaw)>=1?\`\${formatDataflowNumber(latencyRaw,2)} s\`:\`\${formatDataflowNumber(Number(latencyRaw)*1000,1)} ms\`)\r
      :DATAFLOW_VALUE_EMPTY;\r
    const delaySteps=protocolFault?readFaultParam(protocolFault,'delay_steps',null):null;\r
    const dropRateRaw=protocolFault\r
      ?readFaultParam(protocolFault,['drop_rate','dropRate','start_probability','loss_rate'],null)\r
      :null;\r
    const burstLength=protocolFault?readFaultParam(protocolFault,['burst_length','burstLength'],null):null;\r
    const faultModel=edgeFault||(sourceFaultPropagates||sourceIsFault?sourceFault:null)||null;\r
    const faultActive=Boolean(edgeFault||sourceFaultPropagates||sourceIsFault);\r
    const residualActive=residualValue!==null||String(targetNode?.props?.name||'').toLowerCase().includes('residual')||String(targetNode?.props?.name||'').includes('残差');\r
    const protocolActive=edge?.lineType==='can'||Boolean(protocolFault);\r
    const status=faultActive?'fault':(protocolActive?'protocol':(residualActive?'residual':'normal'));\r
    const sourcePort=getPortLabel(sourceNode,'output',edge?.sourcePortIndex||0);\r
    const targetPort=getPortLabel(targetNode,'input',edge?.targetPortIndex||0);\r
    return {\r
      id:edge?.id||'',\r
      sourceName:sourceNode?.props?.name||edge?.sourceNodeId||'源节点',\r
      targetName:targetNode?.props?.name||edge?.targetNodeId||'目标节点',\r
      sourcePort,\r
      targetPort,\r
      signalName:getEdgeSignalName(edge,sourceNode),\r
      lineType:edge?.lineType==='can'?'CAN 总线':'普通连接线',\r
      status,\r
      faultActive,\r
      protocolActive,\r
      residualActive,\r
      signalName:signal.signalId||getEdgeSignalName(edge,sourceNode),\r
      signalId:signal.signalId,\r
      channelId:signal.channelId,\r
      messageId:signal.messageId,\r
      signalRole:signal.signalRole,\r
      signalUnit:signal.signalUnit,\r
      payloadKind:signal.payloadKind,\r
      faultPropagationPolicy:signal.faultPropagationPolicy,\r
      faultName:faultModel?.name||'',\r
      faultLayer:faultModel?.layer||'',\r
      runtimeBehavior:faultModel?.runtimeBehavior||'',\r
      currentValue,\r
      residualValue,\r
      latency,\r
      delaySteps:delaySteps===null?DATAFLOW_VALUE_EMPTY:String(delaySteps),\r
      dropRate:dropRateRaw===null?DATAFLOW_VALUE_EMPTY:formatDataflowPercent(dropRateRaw),\r
      burstLength:burstLength===null?DATAFLOW_VALUE_EMPTY:String(burstLength)\r
    };\r
  }\r
\r
  function collectDataflowEdges(){\r
    return S.modelEdges\r
      .map(edge=>({edge,metrics:getDataflowEdgeMetrics(edge)}))\r
      .filter(item=>item.metrics.id);\r
  }\r
\r
  function getDataflowSummary(){\r
    const edges=collectDataflowEdges();\r
    const summary=edges.reduce((acc,item)=>{\r
      acc.total+=1;\r
      if(item.metrics.faultActive){acc.fault+=1;}\r
      if(item.metrics.protocolActive){acc.protocol+=1;}\r
      if(item.metrics.residualActive){acc.residual+=1;}\r
      return acc;\r
    },{total:0,fault:0,protocol:0,residual:0});\r
    const faultNodeCount=S.modelNodes.filter(node=>isFaultNode(node)||isFaultNodeType(node?.type)).length;\r
    summary.fault+=faultNodeCount;\r
    return summary;\r
  }\r
\r
  function renderDataflowBadges(metrics){\r
    const badges=[\r
      \`<span class="dataflow-badge">\${escapeHtml(metrics.lineType)}</span>\`,\r
      metrics.faultActive?\`<span class="dataflow-badge dataflow-badge--fault">\${escapeHtml(metrics.faultName||'故障传播')}</span>\`:'',\r
      metrics.protocolActive?\`<span class="dataflow-badge dataflow-badge--protocol">延迟 \${escapeHtml(metrics.latency)} · 丢包 \${escapeHtml(metrics.dropRate)}</span>\`:'',\r
      metrics.residualActive?\`<span class="dataflow-badge dataflow-badge--residual">残差 \${escapeHtml(formatDataflowNumber(metrics.residualValue))}</span>\`:''\r
    ].filter(Boolean);\r
    return badges.join('');\r
  }\r
\r
  function renderDataflowCompactBadges(metrics){\r
    const badges=[\r
      \`<span class="dataflow-badge">\${escapeHtml(metrics.lineType==='can'?'CAN 总线':'普通连接')}</span>\`,\r
      metrics.faultActive?\`<span class="dataflow-badge dataflow-badge--fault">故障</span>\`:'',\r
      metrics.protocolActive?\`<span class="dataflow-badge dataflow-badge--protocol">协议</span>\`:'',\r
      metrics.residualActive?\`<span class="dataflow-badge dataflow-badge--residual">残差</span>\`:'',\r
      \`<span class="dataflow-badge dataflow-badge--status">\${escapeHtml(metrics.status==='normal'?'正常':metrics.status)}</span>\`\r
    ].filter(Boolean);\r
    return badges.join('');\r
  }\r
\r
  function renderDataflowTransport(metrics){\r
    const parts=[metrics.lineType];\r
    if(metrics.channelId){parts.push(\`CAN \${metrics.channelId}\`);}\r
    if(metrics.messageId){parts.push(\`ID \${metrics.messageId}\`);}\r
    return parts.filter(Boolean).join(' 路 ');\r
  }\r
\r
  function renderDataflowEdgeCard(item,index){\r
    const metrics=item.metrics;\r
    const selected=S.selEdge===metrics.id;\r
    const signalId=metrics.signalId&&metrics.signalId!==DATAFLOW_VALUE_EMPTY?metrics.signalId:'未绑定';\r
    return \`\r
      <div class="dataflow-edge-card is-\${escapeHtml(metrics.status)}\${selected?' is-selected':''}" data-dataflow-edge-card data-dataflow-edge="\${escapeHtml(metrics.id)}">\r
        <div class="dataflow-edge-top">\r
          <div class="dataflow-edge-index">\${index+1}</div>\r
          <div class="dataflow-edge-main">\r
            <div class="dataflow-edge-name">\${escapeHtml(metrics.signalName||metrics.signalId||metrics.id)}</div>\r
            <div class="dataflow-edge-route-grid">\r
              <span>\r
                <em>起点</em>\r
                <strong>\${escapeHtml(metrics.sourceName)}</strong>\r
                <code>\${escapeHtml(metrics.sourcePort)}</code>\r
              </span>\r
              <b aria-hidden="true">→</b>\r
              <span>\r
                <em>终点</em>\r
                <strong>\${escapeHtml(metrics.targetName)}</strong>\r
                <code>\${escapeHtml(metrics.targetPort)}</code>\r
              </span>\r
            </div>\r
            <div class="dataflow-edge-route">\${escapeHtml(metrics.sourceName)}:\${escapeHtml(metrics.sourcePort)} -&gt; \${escapeHtml(metrics.targetName)}:\${escapeHtml(metrics.targetPort)}</div>\r
            <div class="dataflow-edge-id">\r
              <span>信号 \${escapeHtml(signalId)}</span>\r
              <span>边 \${escapeHtml(metrics.id)}</span>\r
              <span>\${escapeHtml(renderDataflowTransport(metrics))}</span>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="dataflow-edge-badges">\${renderDataflowCompactBadges(metrics)}</div>\r
      </div>\`;\r
  }\r
\r
  function renderDataflowSectionRows(rows,emptyText){\r
    if(rows.length===0){\r
      return \`<div class="dataflow-section__empty">\${escapeHtml(emptyText)}</div>\`;\r
    }\r
    return rows.map(item=>\`\r
      <button type="button" class="dataflow-section-row is-\${escapeHtml(item.metrics.status)}\${S.selEdge===item.metrics.id?' is-selected':''}" data-dataflow-edge="\${escapeHtml(item.metrics.id)}">\r
        <span>\${escapeHtml(item.metrics.signalName||item.metrics.id)}</span>\r
        <strong>\${escapeHtml(item.metrics.id)}</strong>\r
      </button>\`).join('');\r
  }\r
\r
  function renderPropagationLegend(semantic){\r
    const classes=semantic?.propagationClasses||{};\r
    const orderedKinds=['propagated','localEffect','blocked','diagnosticOnly','none'];\r
    return \`\r
      <section class="propagation-legend" aria-label="传播判定">\r
        <div class="propagation-legend__title">\r
          <strong>故障影响如何沿信号传播</strong>\r
          <span>按连线状态自动判定</span>\r
        </div>\r
        <div class="propagation-legend__items">\r
          \${orderedKinds.map(kind=>{\r
            const item=classes[kind]||DATAFLOW_PROPAGATION_CLASSES[kind]||DATAFLOW_PROPAGATION_CLASSES.none;\r
            return \`\r
              <div class="propagation-legend__item is-\${escapeHtml(kind)}">\r
                <strong>\${escapeHtml(item.labelZh)}</strong>\r
                <span>\${escapeHtml(item.descriptionZh)}</span>\r
              </div>\`;\r
          }).join('')}\r
        </div>\r
      </section>\`;\r
  }\r
\r
  function renderPropagationGroupSamples(group){\r
    const edges=Array.isArray(group?.edges)?group.edges:[];\r
    const points=Array.isArray(group?.points)?group.points:[];\r
    const edgeSamples=edges.slice(0,3);\r
    const pointSamples=points.slice(0,2);\r
    const edgeList=edgeSamples.length\r
      ?edgeSamples.map(edge=>\`\r
        <button type="button" class="propagation-group__chip" data-dataflow-edge="\${escapeHtml(edge.id)}">\r
          <span>\${escapeHtml(edge.signalNameZh||edge.id)}</span>\r
          <code>\${escapeHtml(edge.id)}</code>\r
        </button>\`).join('')\r
      :'<span class="propagation-group__empty">暂无链路</span>';\r
    const pointList=pointSamples.length\r
      ?pointSamples.map(point=>escapeHtml(point.labelZh||point.signalNameZh||point.id)).join(' / ')\r
      :'暂无测点';\r
    const more=edges.length-edgeSamples.length;\r
    return \`\r
      <div class="propagation-group__samples">\r
        <div class="propagation-group__edges">\${edgeList}\${more>0?\`<span class="propagation-group__more">+\${more}</span>\`:''}</div>\r
        <div class="propagation-group__points"><span>测点</span><strong>\${pointList}</strong></div>\r
      </div>\`;\r
  }\r
\r
  function renderPropagationGroups(semantic){\r
    const groups=semantic?.propagationGroups||buildDataflowPropagationGroups(semantic?.edges||[],semantic?.measurementPoints||[]);\r
    return \`\r
      <section class="propagation-groups" data-propagation-groups aria-label="故障传播分区">\r
        <div class="propagation-groups__head">\r
          <div>\r
            <div class="propagation-groups__eyebrow">故障传播分区</div>\r
            <h3>按连线影响范围区分故障语义</h3>\r
          </div>\r
          <span>\${DATAFLOW_PROPAGATION_ORDER.length} 类</span>\r
        </div>\r
        <div class="propagation-groups__grid">\r
          \${DATAFLOW_PROPAGATION_ORDER.map(kind=>{\r
            const group=groups[kind]||{\r
              kind,\r
              labelZh:getDataflowPropagationGroupLabelZh(kind),\r
              descriptionZh:getDataflowPropagationScopeZh(kind),\r
              points:[],\r
              edges:[],\r
              count:0,\r
              edgeCount:0\r
            };\r
            return \`\r
              <article class="propagation-group is-\${escapeHtml(kind)}" data-propagation-group="\${escapeHtml(kind)}">\r
                <div class="propagation-group__head">\r
                  <strong>\${escapeHtml(group.labelZh)}</strong>\r
                  <span>\${Number(group.count)||0} 个测点 / \${Number(group.edgeCount)||0} 条链路</span>\r
                </div>\r
                <p>\${escapeHtml(group.descriptionZh)}</p>\r
                \${renderPropagationGroupSamples(group)}\r
              </article>\`;\r
          }).join('')}\r
        </div>\r
      </section>\`;\r
  }\r
\r
  function renderSemanticMapping(mapping={}){\r
    const rows=[\r
      ['边ID',mapping.edgeId],\r
      ['信号ID',mapping.signalId||mapping.engineeringKey],\r
      ['通道ID',mapping.channelId],\r
      ['CAN报文',mapping.messageId],\r
      ['Python变量',mapping.pythonVariable],\r
      ['节点路径',mapping.sourceNodeId&&mapping.targetNodeId?\`\${mapping.sourceNodeId} → \${mapping.targetNodeId}\`:'']\r
    ].filter(([,value])=>value!==null&&value!==undefined&&value!=='');\r
    if(rows.length===0){\r
      return \`<span class="measurement-point__mapping-empty">暂无内部映射</span>\`;\r
    }\r
    return rows.map(([label,value])=>\`\r
      <span class="measurement-point__mapping-row">\r
        <em>\${escapeHtml(label)}</em>\r
        <code>\${escapeHtml(value)}</code>\r
      </span>\`).join('');\r
  }\r
\r
  function renderSemanticMeasurementPoint(point,index){\r
    const selected=S.selEdge===point.edgeId;\r
    const mapping=point.mapping||point.advanced?.mapping||{};\r
    const propagationKind=point.faultInfluence||'none';\r
    const policyLabel=point.propagationPolicyKind&&point.propagationPolicyKind!=='none'\r
      ?\`策略：\${point.propagationPolicyLabelZh}\`\r
      :'策略：继承';\r
    return \`\r
      <div role="button" tabindex="0" class="measurement-point is-\${escapeHtml(propagationKind)}\${selected?' is-selected':''}" data-measurement-point data-measurement-point-id="\${escapeHtml(point.id)}" data-dataflow-edge="\${escapeHtml(point.edgeId)}">\r
        <span class="measurement-point__head">\r
          <span class="measurement-point__index">测点 M\${index+1}</span>\r
          <span class="measurement-point__tag">\${escapeHtml(point.propagationLabelZh||DATAFLOW_PROPAGATION_CLASSES.none.labelZh)}</span>\r
        </span>\r
        <strong class="measurement-point__name">\${escapeHtml(point.signalNameZh||point.labelZh||point.signalId)}</strong>\r
        <span class="measurement-point__path">\${escapeHtml(point.signalPathZh||'信号路径')}</span>\r
        <span class="measurement-point__meta">\r
          <span>传播判定</span>\r
          <strong>\${escapeHtml(point.propagationDescriptionZh||DATAFLOW_PROPAGATION_CLASSES.none.descriptionZh)}</strong>\r
          <em>\${escapeHtml(policyLabel)}</em>\r
        </span>\r
        <span class="measurement-point__mapping">\r
          <span class="measurement-point__mapping-title">\r
            <span>内部映射</span>\r
            <span class="measurement-point__mapping-link" role="button" tabindex="0" data-dataflow-mapping-detail="\${escapeHtml(point.edgeId)}">详情</span>\r
          </span>\r
          \${renderSemanticMapping(mapping)}\r
        </span>\r
      </div>\`;\r
  }\r
\r
  function renderMeasurementPointChainMap(semantic){\r
    const points=Array.isArray(semantic?.measurementPoints)?semantic.measurementPoints:[];\r
    const stages=Array.isArray(semantic?.stages)?semantic.stages:DATAFLOW_STAGE_DEFS.map(stage=>({...stage}));\r
    return \`\r
      <section class="signal-chain-map" aria-label="信号链路诊断">\r
        <div class="signal-chain-map__intro">\r
          <div>\r
            <div class="signal-chain-map__eyebrow">信号路径</div>\r
            <h3>关键测点</h3>\r
          </div>\r
          <div class="signal-chain-map__count">\${points.length} 个测点</div>\r
        </div>\r
        \${stages.map(stage=>{\r
          const stagePoints=points.filter(point=>point.stageId===stage.id);\r
          return \`\r
            <section class="signal-chain-stage" data-signal-chain-stage="\${escapeHtml(stage.id)}">\r
              <div class="signal-chain-stage__head">\r
                <strong>\${escapeHtml(stage.labelZh)}</strong>\r
                <span>\${stagePoints.length} 个测点</span>\r
              </div>\r
              <div class="signal-chain-stage__body">\r
                \${stagePoints.length\r
                  ?stagePoints.map((point,index)=>renderSemanticMeasurementPoint(point,points.indexOf(point))).join('')\r
                  :'<div class="signal-chain-stage__empty">暂无测点</div>'}\r
              </div>\r
            </section>\`;\r
        }).join('')}\r
      </section>\`;\r
  }\r
\r
  const SIGNAL_FLOW_LANES=[\r
    {id:'source',index:'01',title:'输入与激励',desc:'指令、参考量、环境输入和无上游信号'},\r
    {id:'process',index:'02',title:'控制与对象',desc:'控制器、被控对象、滤波、求和和子系统'},\r
    {id:'fault',index:'03',title:'故障注入通道',desc:'故障节点、注入故障的模型块和故障传播边'},\r
    {id:'observe',index:'04',title:'测量与诊断',desc:'示波器、记录仪、频谱分析和残差观测输出'}\r
  ];\r
  const SIGNAL_FLOW_NODE_W=174;\r
  const SIGNAL_FLOW_NODE_H=64;\r
  const SIGNAL_FLOW_COL_W=218;\r
  const SIGNAL_FLOW_MIN_LANE_H=126;\r
  const SIGNAL_FLOW_SLOT_H=78;\r
\r
  function escapeJsString(value){\r
    return String(value??'').replace(/\\\\/g,'\\\\\\\\').replace(/'/g,"\\\\'").replace(/\\r?\\n/g,' ');\r
  }\r
\r
  function getDataflowNodeName(node){\r
    return node?.props?.name||COMPONENT_LIBRARY[node?.type]?.label||node?.id||'未命名节点';\r
  }\r
\r
  function getDataflowNodeKind(node){\r
    return COMPONENT_LIBRARY[node?.type]?.label||node?.type||'组件';\r
  }\r
\r
  function isResidualLikeNode(node){\r
    const name=String(node?.props?.name||'').toLowerCase();\r
    return node?.type==='sum_block'||name.includes('residual')||name.includes('残差');\r
  }\r
\r
  function getDataflowLaneId(node,stats){\r
    if(isFaultNode(node)||isFaultNodeType(node?.type)){return 'fault';}\r
    if(isResidualLikeNode(node)||String(node?.type||'').startsWith('instrument_')){return 'observe';}\r
    if(node?.type==='signal_source'||((stats?.incoming||0)===0&&(stats?.outgoing||0)>0)){return 'source';}\r
    if((stats?.outgoing||0)===0&&(stats?.incoming||0)>0){return 'observe';}\r
    return 'process';\r
  }\r
\r
  function rankDataflowStatus(status){\r
    return {normal:0,residual:1,protocol:2,fault:3}[status]??0;\r
  }\r
\r
  function getNodeFlowStatus(node,edgeRows){\r
    let status=isFaultNode(node)||isFaultNodeType(node?.type)?'fault':'normal';\r
    edgeRows.forEach(item=>{\r
      const edge=item.edge;\r
      if(edge.sourceNodeId!==node.id&&edge.targetNodeId!==node.id){return;}\r
      if(rankDataflowStatus(item.metrics.status)>rankDataflowStatus(status)){\r
        status=item.metrics.status;\r
      }\r
    });\r
    return status;\r
  }\r
\r
  function getNodeFlowSummary(node,edgeRows){\r
    return edgeRows.reduce((acc,item)=>{\r
      const edge=item.edge;\r
      if(edge.sourceNodeId!==node.id&&edge.targetNodeId!==node.id){return acc;}\r
      if(item.metrics.protocolActive){acc.can+=1;}\r
      if(item.metrics.faultActive){acc.fault+=1;}\r
      if(item.metrics.residualActive||item.metrics.status!=='normal'){acc.diagnostic+=1;}\r
      return acc;\r
    },{can:0,fault:0,diagnostic:0});\r
  }\r
\r
  function buildSignalFlowTopology(rows){\r
    const nodeMap=new Map();\r
    rows.forEach(({edge})=>{\r
      const source=getNode(edge.sourceNodeId);\r
      const target=getNode(edge.targetNodeId);\r
      if(source){nodeMap.set(source.id,source);}\r
      if(target){nodeMap.set(target.id,target);}\r
    });\r
    const nodes=Array.from(nodeMap.values());\r
    const incoming=new Map(nodes.map(node=>[node.id,0]));\r
    const outgoing=new Map(nodes.map(node=>[node.id,[]]));\r
    rows.forEach(({edge})=>{\r
      if(!nodeMap.has(edge.sourceNodeId)||!nodeMap.has(edge.targetNodeId)){return;}\r
      outgoing.get(edge.sourceNodeId)?.push(edge);\r
      incoming.set(edge.targetNodeId,(incoming.get(edge.targetNodeId)||0)+1);\r
    });\r
    const depth=new Map(nodes.map(node=>[node.id,0]));\r
    const pending=new Map(incoming);\r
    const queue=nodes\r
      .filter(node=>(pending.get(node.id)||0)===0)\r
      .sort((a,b)=>(a.x||0)-(b.x||0)||(a.y||0)-(b.y||0));\r
    if(!queue.length){\r
      queue.push(...nodes.sort((a,b)=>(a.x||0)-(b.x||0)||(a.y||0)-(b.y||0)));\r
    }\r
    const visited=new Set();\r
    while(queue.length){\r
      const node=queue.shift();\r
      if(visited.has(node.id)){continue;}\r
      visited.add(node.id);\r
      (outgoing.get(node.id)||[]).forEach(edge=>{\r
        const next=edge.targetNodeId;\r
        depth.set(next,Math.max(depth.get(next)||0,(depth.get(node.id)||0)+1));\r
        pending.set(next,(pending.get(next)||0)-1);\r
        if((pending.get(next)||0)<=0){\r
          const target=nodeMap.get(next);\r
          if(target){queue.push(target);}\r
        }\r
      });\r
    }\r
    const connectedEdgeRows=rows.filter(({edge})=>nodeMap.has(edge.sourceNodeId)&&nodeMap.has(edge.targetNodeId));\r
    const laneMap=new Map(SIGNAL_FLOW_LANES.map(lane=>[lane.id,{...lane,nodes:[],height:SIGNAL_FLOW_MIN_LANE_H,top:0}]));\r
    const records=nodes.map(node=>{\r
      const stats={\r
        incoming:incoming.get(node.id)||0,\r
        outgoing:(outgoing.get(node.id)||[]).length\r
      };\r
      const laneId=getDataflowLaneId(node,stats);\r
      const status=getNodeFlowStatus(node,connectedEdgeRows);\r
      const flowSummary=getNodeFlowSummary(node,connectedEdgeRows);\r
      return {\r
        node,\r
        stats,\r
        flowSummary,\r
        laneId,\r
        status,\r
        depth:depth.get(node.id)||0,\r
        x:0,\r
        y:0\r
      };\r
    });\r
    records.forEach(record=>(laneMap.get(record.laneId)||laneMap.get('process')).nodes.push(record));\r
    let totalHeight=18;\r
    let maxDepth=0;\r
    SIGNAL_FLOW_LANES.forEach(laneDef=>{\r
      const lane=laneMap.get(laneDef.id);\r
      const bucketCounts=new Map();\r
      lane.nodes.forEach(record=>{\r
        maxDepth=Math.max(maxDepth,record.depth);\r
        bucketCounts.set(record.depth,(bucketCounts.get(record.depth)||0)+1);\r
      });\r
      const maxSlots=Math.max(1,...Array.from(bucketCounts.values()));\r
      lane.height=Math.max(SIGNAL_FLOW_MIN_LANE_H,58+maxSlots*SIGNAL_FLOW_SLOT_H);\r
      lane.top=totalHeight;\r
      totalHeight+=lane.height+10;\r
      const slotByDepth=new Map();\r
      lane.nodes\r
        .sort((a,b)=>a.depth-b.depth||(a.node.y||0)-(b.node.y||0)||(a.node.x||0)-(b.node.x||0))\r
        .forEach(record=>{\r
          const slot=slotByDepth.get(record.depth)||0;\r
          slotByDepth.set(record.depth,slot+1);\r
          record.x=92+record.depth*SIGNAL_FLOW_COL_W;\r
          record.y=lane.top+44+slot*SIGNAL_FLOW_SLOT_H;\r
        });\r
    });\r
    const positions=new Map(records.map(record=>[record.node.id,record]));\r
    return {\r
      lanes:SIGNAL_FLOW_LANES.map(lane=>laneMap.get(lane.id)),\r
      records,\r
      positions,\r
      width:Math.max(920,maxDepth*SIGNAL_FLOW_COL_W+360),\r
      height:totalHeight+12\r
    };\r
  }\r
\r
  function renderSignalFlowLanes(topology){\r
    return topology.lanes.map(lane=>\`\r
      <div class="signal-flow-lane signal-flow-lane--\${escapeHtml(lane.id)}" style="top:\${lane.top}px;height:\${lane.height}px;width:\${topology.width}px">\r
        <div class="signal-flow-lane__index">\${escapeHtml(lane.index)}</div>\r
        <div class="signal-flow-lane__copy">\r
          <strong>\${escapeHtml(lane.title)}</strong>\r
          <span>\${escapeHtml(lane.desc)}</span>\r
        </div>\r
      </div>\`).join('');\r
  }\r
\r
  function renderSignalFlowNodes(topology){\r
    return topology.records.map(record=>{\r
      const x=Number(record.x);\r
      const y=Number(record.y);\r
      if(!Number.isFinite(x)||!Number.isFinite(y)){return '';}\r
      return \`\r
      <button type="button" class="signal-flow-node is-\${escapeHtml(record.status)}" style="left:\${x}px;top:\${y}px" onclick="selectNode('\${escapeJsString(record.node.id)}')">\r
        <span class="signal-flow-node__kind">\${escapeHtml(getDataflowNodeKind(record.node))}</span>\r
        <strong>\${escapeHtml(getDataflowNodeName(record.node))}</strong>\r
        <span class="signal-flow-node__meta">CAN \${record.flowSummary.can} 路 Fault \${record.flowSummary.fault} 路 Diag \${record.flowSummary.diagnostic}</span>\r
        <span class="signal-flow-node__meta">入 \${record.stats.incoming} · 出 \${record.stats.outgoing}</span>\r
      </button>\`;\r
    }).join('');\r
  }\r
\r
  function renderSignalFlowEdges(topology,rows){\r
    return rows.map(item=>{\r
      const edge=item.edge;\r
      const metrics=item.metrics;\r
      const source=topology.positions.get(edge.sourceNodeId);\r
      const target=topology.positions.get(edge.targetNodeId);\r
      if(!source||!target){return '';}\r
      const x1=Number(source.x)+SIGNAL_FLOW_NODE_W;\r
      const y1=Number(source.y)+SIGNAL_FLOW_NODE_H/2;\r
      const x2=Number(target.x);\r
      const y2=Number(target.y)+SIGNAL_FLOW_NODE_H/2;\r
      if(![x1,y1,x2,y2].every(Number.isFinite)){\r
        console.warn('Skipped dataflow edge with invalid coordinates',edge.id,{source,target});\r
        return '';\r
      }\r
      const curve=Math.max(72,Math.abs(x2-x1)*0.45);\r
      const d=\`M \${x1} \${y1} C \${x1+curve} \${y1}, \${x2-curve} \${y2}, \${x2} \${y2}\`;\r
      const responsePoint=getMeasurementResponsePointByEdge(metrics.id);\r
      const classes=[\r
        'signal-flow-edge',\r
        \`is-\${metrics.status}\`,\r
        S.selEdge===metrics.id?'is-selected':'',\r
        isMeasurementResponseTargetEdge(metrics.id)?'is-response-target':'',\r
        isMeasurementResponseAffectedEdge(metrics.id)?'is-response-affected':'',\r
        responsePoint?.status==='cut'?'is-response-cut':''\r
      ].filter(Boolean).map(escapeHtml).join(' ');\r
      return \`<path class="\${classes}" data-dataflow-edge="\${escapeHtml(metrics.id)}" d="\${d}" marker-end="url(#signal-flow-arrow-\${escapeHtml(metrics.status)})"><title>\${escapeHtml(metrics.signalName)}：\${escapeHtml(metrics.sourceName)} → \${escapeHtml(metrics.targetName)}</title></path>\`;\r
    }).join('');\r
  }\r
\r
  function renderSignalFlowMap(topology,rows){\r
    return \`\r
      <div class="signal-flow-canvas" aria-label="多信号流图拓扑">\r
        <div class="signal-flow-map" style="width:\${topology.width}px;height:\${topology.height}px">\r
          \${renderSignalFlowLanes(topology)}\r
          <svg class="signal-flow-edges" viewBox="0 0 \${topology.width} \${topology.height}" preserveAspectRatio="none" aria-hidden="true">\r
            <defs>\r
              <marker id="signal-flow-arrow-normal" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M1 1L8 5L1 9" fill="none" stroke="#2f73ff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></marker>\r
              <marker id="signal-flow-arrow-fault" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M1 1L8 5L1 9" fill="none" stroke="#dc2626" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></marker>\r
              <marker id="signal-flow-arrow-protocol" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M1 1L8 5L1 9" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></marker>\r
              <marker id="signal-flow-arrow-residual" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M1 1L8 5L1 9" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></marker>\r
            </defs>\r
            \${renderSignalFlowEdges(topology,rows)}\r
          </svg>\r
          \${renderSignalFlowNodes(topology)}\r
        </div>\r
      </div>\`;\r
  }\r
\r
  function selectDataflowEdge(edgeId){\r
    const edge=getEdge(edgeId);\r
    if(!edge){return;}\r
    if(typeof selectEdge==='function'){\r
      selectEdge(edgeId);\r
    }else{\r
      S.selEdge=edgeId;\r
      S.selBlk=null;\r
      S.propertyPanelTab='overview';\r
      renderModelNodes();\r
      renderPropertyPanel(edge);\r
    }\r
    renderDataflowPanel();\r
  }\r
\r
  function ensureDataflowMappingDialog(){\r
    let overlay=document.getElementById('ov-dataflow-map');\r
    if(overlay){return overlay;}\r
    overlay=document.createElement('div');\r
    overlay.id='ov-dataflow-map';\r
    overlay.className='overlay dataflow-map-overlay';\r
    overlay.innerHTML=\`\r
      <div class="modal dataflow-map-modal" role="dialog" aria-modal="true" aria-labelledby="dataflow-map-title">\r
        <div class="mhead dataflow-map-head">\r
          <div>\r
            <div class="mtitle" id="dataflow-map-title">内部映射详情</div>\r
            <div class="dataflow-map-subtitle">展开显示测点语义、工程字段、CAN 通道、Python 变量和链路端口。</div>\r
          </div>\r
          <button type="button" class="dataflow-map-close" data-dataflow-mapping-close aria-label="关闭">&times;</button>\r
        </div>\r
        <div class="mbody dataflow-map-body" id="dataflow-map-body"></div>\r
      </div>\`;\r
    overlay.addEventListener('click',event=>{\r
      if(event.target===overlay||event.target.closest('[data-dataflow-mapping-close]')){\r
        closeDataflowMappingDetail();\r
      }\r
    });\r
    document.body.appendChild(overlay);\r
    return overlay;\r
  }\r
\r
  function closeDataflowMappingDetail(){\r
    document.getElementById('ov-dataflow-map')?.classList.remove('open');\r
  }\r
\r
  function getDataflowMappingDetailRows(edgeId='__all'){\r
    const semantic=buildDataflowSemanticModel();\r
    const edgeById=new Map((semantic.edges||[]).map(item=>[item.id,item]));\r
    const points=edgeId==='__all'\r
      ?(semantic.measurementPoints||[])\r
      :(semantic.measurementPoints||[]).filter(point=>point.edgeId===edgeId);\r
    const sourceRows=points.length?points:[...(semantic.edges||[])]\r
      .filter(item=>edgeId==='__all'||item.id===edgeId)\r
      .map(item=>({\r
        id:\`mp-\${item.id}\`,\r
        edgeId:item.id,\r
        signalId:item.mapping?.signalId||item.metrics?.signalId||item.id,\r
        signalNameZh:item.signalNameZh||item.metrics?.signalName||item.id,\r
        signalPathZh:item.signalPathZh||'信号路径',\r
        stageLabelZh:'链路',\r
        propagationLabelZh:item.propagationLabelZh,\r
        propagationDescriptionZh:item.propagationDescriptionZh,\r
        propagationPolicyLabelZh:item.propagationPolicyLabelZh,\r
        propagationScopeZh:item.propagationScopeZh,\r
        mapping:item.mapping,\r
        currentValue:item.metrics?.currentValue,\r
        residualValue:item.metrics?.residualValue,\r
        unit:item.metrics?.signalUnit||''\r
      }));\r
\r
    return sourceRows.map((point,index)=>{\r
      const edgeInfo=edgeById.get(point.edgeId)||{};\r
      const metrics=edgeInfo.metrics||getDataflowEdgeMetrics(getEdge(point.edgeId)||{})||{};\r
      const mapping=point.mapping||point.advanced?.mapping||edgeInfo.mapping||{};\r
      return {\r
        index,\r
        point,\r
        metrics,\r
        mapping,\r
        edge:getEdge(point.edgeId)||edgeInfo.edge||{},\r
        propagation:point.propagationLabelZh||edgeInfo.propagationLabelZh||DATAFLOW_PROPAGATION_CLASSES.none.labelZh,\r
        propagationDescription:point.propagationDescriptionZh||edgeInfo.propagationDescriptionZh||DATAFLOW_PROPAGATION_CLASSES.none.descriptionZh,\r
        policy:point.propagationPolicyLabelZh||edgeInfo.propagationPolicyLabelZh||'继承',\r
        scope:point.propagationScopeZh||edgeInfo.propagationScopeZh||''\r
      };\r
    });\r
  }\r
\r
  function renderMappingDetailCell(label,value,kind='text'){\r
    const shown=value===null||value===undefined||value===''?'--':value;\r
    return \`\r
      <div class="dataflow-map-cell">\r
        <span>\${escapeHtml(label)}</span>\r
        <\${kind==='code'?'code':'strong'}>\${escapeHtml(shown)}</\${kind==='code'?'code':'strong'}>\r
      </div>\`;\r
  }\r
\r
  function renderDataflowMappingDetailRow(row){\r
    const point=row.point||{};\r
    const metrics=row.metrics||{};\r
    const mapping=row.mapping||{};\r
    const responsePoint=getMeasurementResponsePointByEdge(point.edgeId||mapping.edgeId||metrics.id);\r
    const responseStatus=responsePoint\r
      ?(MEASUREMENT_STATUS_UI_LABELS[responsePoint.status]||responsePoint.statusLabelZh||responsePoint.status)\r
      :'';\r
    const responseReason=responsePoint?.reasonZh||getMeasurementResponseReason(responsePoint||{},S.measurementResponse);\r
    const responseNote=responsePoint?\`\r
        <div class="dataflow-map-note dataflow-map-note--response">\r
          <span>测点响应</span>\r
          <strong>\${escapeHtml(responseStatus)}：\${escapeHtml(formatMeasurementResponseValue(responsePoint.baselineValue,responsePoint.unit))} -> \${escapeHtml(formatMeasurementResponseValue(responsePoint.operatedValue,responsePoint.unit))}</strong>\r
          <em>\${escapeHtml(responseReason)}</em>\r
        </div>\`:'';\r
    return \`\r
      <article class="dataflow-map-row" data-dataflow-map-row="\${escapeHtml(point.edgeId||'')}">\r
        <div class="dataflow-map-row__head">\r
          <span>测点 M\${row.index+1}</span>\r
          <strong>\${escapeHtml(point.signalNameZh||point.labelZh||metrics.signalName||point.edgeId||'信号')}</strong>\r
          <em>\${escapeHtml(row.propagation)}</em>\r
        </div>\r
        <div class="dataflow-map-row__path">\${escapeHtml(point.signalPathZh||'信号路径')}</div>\r
        <div class="dataflow-map-grid">\r
          \${renderMappingDetailCell('边 ID',mapping.edgeId||point.edgeId,'code')}\r
          \${renderMappingDetailCell('信号 ID',mapping.signalId||point.signalId||metrics.signalId,'code')}\r
          \${renderMappingDetailCell('通道 ID',mapping.channelId||metrics.channelId,'code')}\r
          \${renderMappingDetailCell('CAN 报文',mapping.messageId||metrics.messageId,'code')}\r
          \${renderMappingDetailCell('Python 变量',mapping.pythonVariable||point.pythonVariable,'code')}\r
          \${renderMappingDetailCell('工程键',mapping.engineeringKey||point.engineeringKey,'code')}\r
          \${renderMappingDetailCell('源节点',mapping.sourceNodeId||point.sourceNodeId,'code')}\r
          \${renderMappingDetailCell('目标节点',mapping.targetNodeId||point.targetNodeId,'code')}\r
          \${renderMappingDetailCell('源端口',metrics.sourcePort)}\r
          \${renderMappingDetailCell('目标端口',metrics.targetPort)}\r
          \${renderMappingDetailCell('当前值',formatDataflowNumber(point.currentValue??metrics.currentValue))}\r
          \${renderMappingDetailCell('残差',formatDataflowNumber(point.residualValue??metrics.residualValue))}\r
        </div>\r
        <div class="dataflow-map-note">\r
          <span>传播判定</span>\r
          <strong>\${escapeHtml(row.propagationDescription)}</strong>\r
          <em>\${escapeHtml(row.policy)}\${row.scope?\` · \${escapeHtml(row.scope)}\`:''}</em>\r
        </div>\r
        \${responseNote}\r
      </article>\`;\r
  }\r
\r
  function openDataflowMappingDetail(edgeId='__all'){\r
    const overlay=ensureDataflowMappingDialog();\r
    const rows=getDataflowMappingDetailRows(edgeId);\r
    const body=overlay.querySelector('#dataflow-map-body');\r
    const title=overlay.querySelector('#dataflow-map-title');\r
    if(title){\r
      title.textContent=edgeId==='__all'?'内部映射详情':'当前链路映射详情';\r
    }\r
    if(body){\r
      body.innerHTML=\`\r
        <div class="dataflow-map-summary">\r
          <div><span>显示范围</span><strong>\${edgeId==='__all'?'全部测点':edgeId}</strong></div>\r
          <div><span>映射条目</span><strong>\${rows.length}</strong></div>\r
          <div><span>CAN/协议</span><strong>\${rows.filter(row=>row.metrics?.lineType==='can'||row.mapping?.channelId||row.mapping?.messageId).length}</strong></div>\r
          <div><span>诊断/残差</span><strong>\${rows.filter(row=>row.point?.role==='residual'||row.metrics?.residualActive).length}</strong></div>\r
        </div>\r
        <div class="dataflow-map-list">\r
          \${rows.length?rows.map(renderDataflowMappingDetailRow).join(''):'<div class="dataflow-map-empty">当前没有可展示的内部映射。</div>'}\r
        </div>\`;\r
    }\r
    overlay.classList.add('open');\r
  }\r
\r
  function renderDiagnosticTestPointWorkbench(){\r
    const model=buildDiagnosticTestPointModel();\r
    const selectedAvailable=model.available[0]?.pointId||model.positions[0]?.pointId||'';\r
    const diagnosis=S.testPointDiagnosis;\r
    return \`\r
      <section class="testpoint-workbench" data-testpoint-workbench>\r
        <div class="testpoint-workbench__head">\r
          <div>\r
            <div class="testpoint-workbench__eyebrow">测试性诊断</div>\r
            <h3>固定测点安装与故障确认</h3>\r
            <p>测点位置由当前飞控模型预设，按需要安装测点；注入故障后点击测点执行一次检测，再人工确认候选故障类型。</p>\r
          </div>\r
          <div class="testpoint-workbench__metrics">\r
            <span><em>固定位置</em><b>\${model.positions.length}</b></span>\r
            <span><em>已安装</em><b>\${model.installed.length}</b></span>\r
            <span><em>候选</em><b>\${diagnosis?.candidates?.length||0}</b></span>\r
          </div>\r
        </div>\r
        <div class="testpoint-install-bar">\r
          <label>\r
            <span>选择安装位置</span>\r
            <select data-testpoint-position-select>\r
              \${model.available.length\r
                ?model.available.map(point=>\`<option value="\${escapeHtml(point.pointId)}">\${escapeHtml(point.positionNameZh)} · \${escapeHtml(point.edgeId)}</option>\`).join('')\r
                :'<option value="">暂无可安装位置</option>'}\r
            </select>\r
          </label>\r
          <button type="button" data-install-testpoint="\${escapeHtml(selectedAvailable)}" \${selectedAvailable?'':'disabled'}>加入测点</button>\r
        </div>\r
        <div class="testpoint-board">\r
          <div class="testpoint-board__fixed">\r
            <div class="testpoint-board__title">固定测点位置</div>\r
            <div class="testpoint-position-grid">\r
              \${model.positions.map(point=>\`\r
                <button type="button" class="testpoint-position\${point.installed?' is-installed':''}\${S.selectedDiagnosticTestPointId===point.pointId?' is-selected':''}" data-fixed-testpoint-position="\${escapeHtml(point.pointId)}" data-dataflow-edge="\${escapeHtml(point.edgeId)}">\r
                  <span>\${escapeHtml(point.positionNameZh)}</span>\r
                  <em>\${escapeHtml(point.signalPathZh||point.edgeId)}</em>\r
                  <b>\${point.installed?'已安装':'未安装'}</b>\r
                </button>\`).join('')}\r
            </div>\r
          </div>\r
          <div class="testpoint-board__installed">\r
            <div class="testpoint-board__title">已安装测点</div>\r
            <div class="installed-testpoint-list">\r
              \${model.installed.length?model.installed.map(point=>\`\r
                <article class="installed-testpoint\${S.selectedDiagnosticTestPointId===point.pointId?' is-selected':''}" data-installed-testpoint="\${escapeHtml(point.pointId)}">\r
                  <div>\r
                    <strong>\${escapeHtml(point.positionNameZh)}</strong>\r
                    <span>\${escapeHtml(point.edgeId)} · \${escapeHtml(point.stageLabelZh||'')}</span>\r
                  </div>\r
                  <div class="installed-testpoint__actions">\r
                    <button type="button" data-detect-testpoint="\${escapeHtml(point.pointId)}">检测</button>\r
                    <button type="button" data-remove-testpoint="\${escapeHtml(point.pointId)}">移除</button>\r
                  </div>\r
                </article>\`).join(''):'<div class="testpoint-empty">尚未安装测点。</div>'}\r
            </div>\r
          </div>\r
          <div class="testpoint-board__diagnosis">\r
            <div class="testpoint-board__title">最近一次检测</div>\r
            \${diagnosis?\`\r
              <div class="testpoint-last-result is-\${escapeHtml(diagnosis.status)}">\r
                <strong>\${escapeHtml(diagnosis.pointNameZh)}</strong>\r
                <span>\${escapeHtml(diagnosis.statusLabelZh)} · 候选 \${diagnosis.candidates.length} 项 · 已确认 \${diagnosis.confirmedFaultTypeIds.length} 项</span>\r
                <button type="button" data-detect-testpoint="\${escapeHtml(diagnosis.pointId)}">重新打开结果</button>\r
              </div>\`:'<div class="testpoint-empty">点击已安装测点的“检测”后显示候选故障。</div>'}\r
          </div>\r
        </div>\r
      </section>\`;\r
  }\r
\r
renderDiagnosticTestPointWorkbench=function(){\r
    const model=buildDiagnosticTestPointModel();\r
    const selectedAvailable=model.available[0]?.pointId||model.positions[0]?.pointId||'';\r
    const diagnosis=S.testPointDiagnosis;\r
    return \`\r
      <section class="testpoint-workbench testpoint-workbench--operator" data-testpoint-workbench>\r
        <div class="testpoint-workbench__head">\r
          <div>\r
            <div class="testpoint-workbench__eyebrow">测点诊断台</div>\r
            <h3>安装固定测点，点击后给出候选故障</h3>\r
            <p>测点位置由当前飞控系统预设。先选择要安装的位置；注入故障后，点击已安装测点执行一次检测；系统列出可能故障类型，再由人工勾选确认。</p>\r
          </div>\r
          <div class="testpoint-workbench__metrics">\r
            <span><em>固定位置</em><b>\${model.positions.length}</b></span>\r
            <span><em>已安装</em><b>\${model.installed.length}</b></span>\r
            <span><em>待确认</em><b>\${diagnosis?.candidates?.length||0}</b></span>\r
          </div>\r
        </div>\r
        <div class="testpoint-operator-layout">\r
          <section class="testpoint-card testpoint-card--install">\r
            <div class="testpoint-card__head">\r
              <strong>1. 选择测点位置</strong>\r
              <span>固定位置不能新增，只能按需安装。</span>\r
            </div>\r
            <div class="testpoint-install-bar">\r
              <label>\r
                <span>可安装位置</span>\r
                <select data-testpoint-position-select>\r
                  \${model.available.length\r
                    ?model.available.map(point=>\`<option value="\${escapeHtml(point.pointId)}">\${escapeHtml(point.positionNameZh)} · \${escapeHtml(point.signalNameZh||point.edgeId)}</option>\`).join('')\r
                    :'<option value="">暂无可安装位置</option>'}\r
                </select>\r
              </label>\r
              <button type="button" data-install-testpoint="\${escapeHtml(selectedAvailable)}" \${selectedAvailable?'':'disabled'}>安装测点</button>\r
            </div>\r
            <div class="testpoint-position-grid testpoint-position-grid--compact">\r
              \${model.positions.map(point=>\`\r
                <button type="button" class="testpoint-position\${point.installed?' is-installed':''}\${S.selectedDiagnosticTestPointId===point.pointId?' is-selected':''}" data-fixed-testpoint-position="\${escapeHtml(point.pointId)}" data-dataflow-edge="\${escapeHtml(point.edgeId)}">\r
                  <span>\${escapeHtml(point.positionNameZh)}</span>\r
                  <em>\${escapeHtml(point.signalNameZh||point.signalPathZh||point.edgeId)}</em>\r
                  <b>\${point.installed?'已安装':'未安装'}</b>\r
                </button>\`).join('')}\r
            </div>\r
          </section>\r
          <section class="testpoint-card testpoint-card--installed">\r
            <div class="testpoint-card__head">\r
              <strong>2. 点击测点检测</strong>\r
              <span>检测不是实时触发，点击后才计算一次。</span>\r
            </div>\r
            <div class="installed-testpoint-list">\r
              \${model.installed.length?model.installed.map(point=>\`\r
                <article class="installed-testpoint\${S.selectedDiagnosticTestPointId===point.pointId?' is-selected':''}" data-installed-testpoint="\${escapeHtml(point.pointId)}">\r
                  <div>\r
                    <strong>\${escapeHtml(point.positionNameZh)}</strong>\r
                    <span>\${escapeHtml(point.signalNameZh||point.edgeId)} · \${escapeHtml(point.stageLabelZh||'')}</span>\r
                  </div>\r
                  <div class="installed-testpoint__actions">\r
                    <button type="button" data-detect-testpoint="\${escapeHtml(point.pointId)}">检测</button>\r
                    <button type="button" data-remove-testpoint="\${escapeHtml(point.pointId)}">移除</button>\r
                  </div>\r
                </article>\`).join(''):'<div class="testpoint-empty">尚未安装测点。请先从左侧选择固定位置。</div>'}\r
            </div>\r
          </section>\r
          <section class="testpoint-card testpoint-card--result">\r
            <div class="testpoint-card__head">\r
              <strong>3. 人工确认</strong>\r
              <span>弹窗中对候选故障逐项打钩。</span>\r
            </div>\r
            \${diagnosis?\`\r
              <div class="testpoint-last-result is-\${escapeHtml(diagnosis.status)}">\r
                <strong>\${escapeHtml(diagnosis.pointNameZh)}</strong>\r
                <span>\${escapeHtml(diagnosis.statusLabelZh)} · 候选 \${diagnosis.candidates.length} 项 · 已确认 \${diagnosis.confirmedFaultTypeIds.length} 项</span>\r
                <button type="button" data-detect-testpoint="\${escapeHtml(diagnosis.pointId)}">查看确认结果</button>\r
              </div>\`:'<div class="testpoint-empty">点击“检测”后，这里会显示最近一次诊断摘要。</div>'}\r
          </section>\r
        </div>\r
      </section>\`;\r
  };\r
\r
  function bindDataflowPanelSelection(panel){\r
    panel.querySelector('[data-install-testpoint]')?.addEventListener('click',event=>{\r
      event.preventDefault();\r
      const selected=panel.querySelector('[data-testpoint-position-select]')?.value||event.currentTarget.dataset.installTestpoint||'';\r
      if(selected){installDiagnosticTestPoint(selected);}\r
    });\r
    panel.querySelectorAll('[data-remove-testpoint]').forEach(element=>{\r
      element.addEventListener('click',event=>{\r
        event.preventDefault();\r
        event.stopPropagation();\r
        removeDiagnosticTestPoint(element.dataset.removeTestpoint);\r
      });\r
    });\r
    panel.querySelectorAll('[data-detect-testpoint]').forEach(element=>{\r
      element.addEventListener('click',event=>{\r
        event.preventDefault();\r
        event.stopPropagation();\r
        openDiagnosticTestPointDialog(element.dataset.detectTestpoint);\r
      });\r
    });\r
    panel.querySelectorAll('[data-measurement-scenario-field]').forEach(element=>{\r
      element.addEventListener('change',()=>{\r
        S.measurementScenario=readMeasurementScenarioFromPanel(panel);\r
        renderDataflowPanel();\r
      });\r
    });\r
    panel.querySelector('[data-measurement-response-calculate]')?.addEventListener('click',event=>{\r
      event.preventDefault();\r
      calculateMeasurementResponse(readMeasurementScenarioFromPanel(panel));\r
      renderDataflowPanel();\r
    });\r
    panel.querySelector('[data-measurement-response-clear]')?.addEventListener('click',event=>{\r
      event.preventDefault();\r
      clearMeasurementResponse();\r
    });\r
    panel.querySelectorAll('[data-measurement-response-filter]').forEach(element=>{\r
      element.addEventListener('click',event=>{\r
        event.preventDefault();\r
        S.measurementResponseFilter=element.dataset.measurementResponseFilter||'all';\r
        renderDataflowPanel();\r
      });\r
    });\r
    panel.querySelectorAll('[data-measurement-response-row]').forEach(row=>{\r
      row.addEventListener('click',event=>{\r
        event.preventDefault();\r
        event.stopPropagation();\r
        selectMeasurementResponsePoint(row.dataset.measurementResponseRow);\r
      });\r
    });\r
    panel.querySelectorAll('[data-dataflow-edge]').forEach(element=>{\r
      element.addEventListener('click',event=>{\r
        event.preventDefault();\r
        event.stopPropagation();\r
        selectDataflowEdge(element.dataset.dataflowEdge);\r
      });\r
      element.addEventListener('keydown',event=>{\r
        if(event.key==='Enter'||event.key===' '){\r
          event.preventDefault();\r
          event.stopPropagation();\r
          selectDataflowEdge(element.dataset.dataflowEdge);\r
        }\r
      });\r
    });\r
    panel.querySelectorAll('[data-dataflow-mapping-detail]').forEach(element=>{\r
      element.addEventListener('click',event=>{\r
        event.preventDefault();\r
        event.stopPropagation();\r
        openDataflowMappingDetail(element.dataset.dataflowMappingDetail||'__all');\r
      });\r
      element.addEventListener('keydown',event=>{\r
        if(event.key==='Enter'||event.key===' '){\r
          event.preventDefault();\r
          event.stopPropagation();\r
          openDataflowMappingDetail(element.dataset.dataflowMappingDetail||'__all');\r
        }\r
      });\r
    });\r
  }\r
\r
  function isDataflowPanelActive(){\r
    return document.getElementById('cw')?.dataset.view==='dataflow';\r
  }\r
\r
  function shouldPreserveDataflowPanel(){\r
    const panel=document.getElementById('dataflow-panel');\r
    return isDataflowPanelActive()&&Boolean(panel?.querySelector('.dataflow-workspace'));\r
  }\r
\r
  function refreshDataflowRuntimeOnly(){\r
    decorateDataflowEdges();\r
    const panel=document.getElementById('dataflow-panel');\r
    if(!panel){return;}\r
    const summary=getDataflowSummary();\r
    const stats=panel.querySelectorAll('[data-dataflow-live-stat]');\r
    stats.forEach(item=>{\r
      const key=item.dataset.dataflowLiveStat;\r
      if(key&&Object.prototype.hasOwnProperty.call(summary,key)){\r
        item.textContent=String(summary[key]);\r
      }\r
    });\r
    if(S.selEdge){\r
      const edge=getEdge(S.selEdge);\r
      if(edge){renderPropertyPanel(edge);}\r
    }\r
  }\r
\r
  function withDataflowPanelPreserved(work){\r
    const preserve=shouldPreserveDataflowPanel();\r
    if(!preserve){\r
      return work();\r
    }\r
    preserveDataflowPanelRender=true;\r
    try{\r
      return work();\r
    }finally{\r
      preserveDataflowPanelRender=false;\r
      refreshDataflowRuntimeOnly();\r
    }\r
  }\r
\r
  function renderDataflowPanel(){\r
    const panel=document.getElementById('dataflow-panel');\r
    if(!panel){return;}\r
    if(preserveDataflowPanelRender&&panel.querySelector('.dataflow-workspace')){\r
      refreshDataflowRuntimeOnly();\r
      return;\r
    }\r
    const summary=getDataflowSummary();\r
    const rows=collectDataflowEdges();\r
    if(rows.length===0){\r
      panel.innerHTML=\`\r
        <div class="dataflow-workspace">\r
          <div class="dataflow-head">\r
            <div class="dataflow-title">多信号流图</div>\r
            <div class="dataflow-sub">当前没有连线。建立信号源、仿真块、故障块和仪器之间的连接后，此视角会生成多通道信号流拓扑。</div>\r
          </div>\r
          <div class="dataflow-panel__empty">请先在画布中连接模型端口，或导入 comparison_demo / evtol_small_nonlinear_fault_injected 示例模型。</div>\r
        </div>\`;\r
      return;\r
    }\r
    const topology=buildSignalFlowTopology(rows);\r
    const semantic=buildDataflowSemanticModel();\r
    const faultRows=rows.filter(item=>item.metrics.faultActive||item.metrics.protocolActive);\r
    const diagnosticRows=rows.filter(item=>item.metrics.residualActive||item.metrics.status!=='normal');\r
    panel.innerHTML=\`\r
      <div class="dataflow-workspace" data-dataflow-view="measurement-first">\r
        <div class="dataflow-head">\r
          <div class="dataflow-head__intro">\r
            <div class="dataflow-title">多信号流图 · 信号链路诊断</div>\r
            <div class="dataflow-sub">按关键测点优先展示指令、控制、执行、测量和诊断信号，内部映射保留工程标识以便追踪。</div>\r
            <div class="dataflow-head__summary" aria-label="多信号流图摘要">\r
              <span>测点 \${semantic.measurementPoints.length}</span>\r
              <span>信号路径 \${rows.length}</span>\r
              <span>故障影响 \${summary.fault}</span>\r
              <span>协议边 \${summary.protocol}</span>\r
            </div>\r
          </div>\r
          \${renderPropagationLegend(semantic)}\r
        </div>\r
        <div class="dataflow-body dataflow-body--semantic">\r
          <main class="dataflow-main">\r
            \${renderDiagnosticTestPointWorkbench()}\r
            \${renderMeasurementResponsePanel(semantic)}\r
            \${renderPropagationGroups(semantic)}\r
            \${renderMeasurementPointChainMap(semantic)}\r
            <section class="signal-flow-legacy" aria-label="内部拓扑映射">\r
              <div class="signal-flow-legacy__head">\r
                <div>\r
                  <strong>内部映射</strong>\r
                  <span>保留原始边卡片与拓扑边，支持点击选择。</span>\r
                </div>\r
                <button type="button" class="signal-flow-legacy__detail" data-dataflow-mapping-detail="__all">查看映射详情</button>\r
              </div>\r
              \${renderSignalFlowMap(topology,rows)}\r
            </section>\r
          </main>\r
          <aside class="dataflow-side" aria-label="信号流摘要">\r
            <div class="dataflow-stats">\r
              <div class="dataflow-stat"><span>连线</span><strong>\${summary.total}</strong></div>\r
              <div class="dataflow-stat"><span>故障</span><strong>\${summary.fault}</strong></div>\r
              <div class="dataflow-stat"><span>协议</span><strong>\${summary.protocol}</strong></div>\r
              <div class="dataflow-stat"><span>残差</span><strong>\${summary.residual}</strong></div>\r
            </div>\r
            <div class="dataflow-list">\r
              <section class="dataflow-section" data-dataflow-section="signals">\r
                <div class="dataflow-section__head"><span>信号路径</span><strong class="dataflow-section__count">\${rows.length}</strong></div>\r
                <div class="dataflow-section__body">\${rows.map(renderDataflowEdgeCard).join('')}</div>\r
              </section>\r
              <section class="dataflow-section" data-dataflow-section="faults">\r
                <div class="dataflow-section__head"><span>故障 / CAN</span><strong class="dataflow-section__count">\${faultRows.length}</strong></div>\r
                <div class="dataflow-section__body">\${renderDataflowSectionRows(faultRows,'暂无激活故障或 CAN 协议连线')}</div>\r
              </section>\r
              <section class="dataflow-section" data-dataflow-section="diagnostics">\r
                <div class="dataflow-section__head"><span>诊断</span><strong class="dataflow-section__count">\${diagnosticRows.length}</strong></div>\r
                <div class="dataflow-section__body">\${renderDataflowSectionRows(diagnosticRows,'暂无诊断或异常连线')}</div>\r
              </section>\r
            </div>\r
          </aside>\r
        </div>\r
      </div>\`;\r
    bindDataflowPanelSelection(panel);\r
  }\r
\r
  renderDataflowPanel=function(){\r
    const panel=document.getElementById('dataflow-panel');\r
    if(!panel){return;}\r
    if(preserveDataflowPanelRender&&panel.querySelector('.dataflow-workspace')){\r
      refreshDataflowRuntimeOnly();\r
      return;\r
    }\r
    const rows=collectDataflowEdges();\r
    const semantic=buildDataflowSemanticModel();\r
    const summary=getDataflowSummary();\r
    const testPointModel=buildDiagnosticTestPointModel();\r
    panel.innerHTML=\`\r
      <div class="dataflow-workspace dataflow-workspace--diagnosis" data-dataflow-view="testpoint-diagnosis">\r
        <header class="dataflow-diagnosis-header">\r
          <div>\r
            <div class="dataflow-title">多信号流图</div>\r
            <h2>测点诊断台</h2>\r
            <p>当前视图只保留固定测点安装、点击检测和人工确认。其他链路分析模块已从界面隐藏，避免干扰诊断流程。</p>\r
          </div>\r
          <div class="dataflow-diagnosis-summary" aria-label="测点诊断摘要">\r
            <span><em>固定测点</em><strong>\${semantic.measurementPoints.length}</strong></span>\r
            <span><em>已安装</em><strong>\${testPointModel.installed.length}</strong></span>\r
            <span><em>模型连线</em><strong>\${rows.length}</strong></span>\r
            <span><em>当前故障</em><strong>\${summary.fault}</strong></span>\r
          </div>\r
        </header>\r
        \${rows.length?renderDiagnosticTestPointWorkbench():\`\r
          <section class="testpoint-workbench testpoint-workbench--empty" data-testpoint-workbench>\r
            <div class="testpoint-workbench__head">\r
              <div>\r
                <div class="testpoint-workbench__eyebrow">测点诊断台</div>\r
                <h3>当前模型还没有可诊断的信号链路</h3>\r
                <p>请先导入完整飞控系统模型，或在画布中连接信号源、控制器、执行器、传感器和诊断模块。</p>\r
              </div>\r
            </div>\r
          </section>\`}\r
      </div>\`;\r
    bindDataflowPanelSelection(panel);\r
  };\r
\r
  function escapeDataflowSelector(value){\r
    if(window.CSS?.escape){return CSS.escape(String(value));}\r
    return String(value).replace(/["\\\\]/g,'\\\\$&');\r
  }\r
\r
function getInstalledDiagnosticTestPointsForCanvas(){\r
  if(typeof buildDiagnosticTestPointModel!=='function') return [];\r
  const model=buildDiagnosticTestPointModel();\r
  if(Array.isArray(model.installed)) return model.installed;\r
  const installedIds=new Set(Array.isArray(S.installedDiagnosticTestPointIds)?S.installedDiagnosticTestPointIds:[]);\r
  const points=Array.isArray(model.points)?model.points:(Array.isArray(model.semanticPoints)?model.semanticPoints:[]);\r
  return points.filter(point=>installedIds.has(point.pointId));\r
}\r
function findCanvasEdgePath(edgeId){\r
  if(!edgeId) return null;\r
  return Array.from(document.querySelectorAll('.edge-path,path[data-edge-id]')).find(path=>{\r
    return path.dataset.edgeId===edgeId||path.getAttribute('data-edge-id')===edgeId||path.id===edgeId||path.id===\`edge-\${edgeId}\`;\r
  })||null;\r
}\r
function getDiagnosticMarkerPosition(point,index){\r
  const path=findCanvasEdgePath(point.edgeId);\r
  if(path&&typeof path.getTotalLength==='function'&&typeof path.getPointAtLength==='function'){\r
    try{\r
      const length=path.getTotalLength();\r
      if(Number.isFinite(length)&&length>0){\r
        const markerPoint=path.getPointAtLength(length*0.52);\r
        return {x:markerPoint.x,y:markerPoint.y};\r
      }\r
    }catch(err){}\r
  }\r
  const edge=(Array.isArray(S.edges)?S.edges:[]).find(item=>item.id===point.edgeId);\r
  const nodes=Array.isArray(S.nodes)?S.nodes:Object.values(S.nodes||{});\r
  const sourceId=edge&&(edge.source||edge.from||edge.sourceNodeId||edge.sourceId);\r
  const targetId=edge&&(edge.target||edge.to||edge.targetNodeId||edge.targetId);\r
  const sourceNode=nodes.find(node=>node.id===sourceId);\r
  const targetNode=nodes.find(node=>node.id===targetId);\r
  if(sourceNode&&targetNode){\r
    const sourceWidth=sourceNode.w||sourceNode.width||150;\r
    const sourceHeight=sourceNode.h||sourceNode.height||80;\r
    const targetHeight=targetNode.h||targetNode.height||80;\r
    return {\r
      x:((sourceNode.x||0)+sourceWidth+(targetNode.x||0))/2,\r
      y:((sourceNode.y||0)+sourceHeight/2+(targetNode.y||0)+targetHeight/2)/2\r
    };\r
  }\r
  return {x:120+(index%6)*72,y:120+Math.floor(index/6)*48};\r
}\r
function getDiagnosticMarkerLabel(point,index){\r
  const label=String(point.shortName||point.code||\`M\${index+1}\`).replace(/^测点\\s*/,'').trim();\r
  return label.length>4?\`M\${index+1}\`:label;\r
}\r
function renderCanvasDiagnosticTestPointMarkers(){\r
  if(typeof document==='undefined'||typeof document.getElementById!=='function') return;\r
  const svg=document.getElementById('edge-layer');\r
  if(!svg||!svg.ownerDocument||typeof svg.ownerDocument.createElementNS!=='function') return;\r
  const host=document.getElementById('edge-group')||svg;\r
  let layer=document.getElementById('diagnostic-testpoint-marker-layer');\r
  if(!layer||layer.parentNode!==host){\r
    if(layer) layer.remove();\r
    layer=document.createElementNS('http://www.w3.org/2000/svg','g');\r
    layer.id='diagnostic-testpoint-marker-layer';\r
    host.appendChild(layer);\r
  }\r
  layer.innerHTML='';\r
  const installedPoints=getInstalledDiagnosticTestPointsForCanvas();\r
  installedPoints.forEach((point,index)=>{\r
    const position=getDiagnosticMarkerPosition(point,index);\r
    const markerLabel=getDiagnosticMarkerLabel(point,index);\r
    const marker=document.createElementNS('http://www.w3.org/2000/svg','g');\r
    marker.setAttribute('class',\`canvas-testpoint-marker\${S.selectedDiagnosticTestPointId===point.pointId?' is-selected':''}\`);\r
    marker.setAttribute('data-canvas-testpoint-marker','true');\r
    marker.setAttribute('data-testpoint-id',point.pointId||'');\r
    marker.setAttribute('data-edge-id',point.edgeId||'');\r
    marker.setAttribute('transform',\`translate(\${position.x} \${position.y})\`);\r
    marker.setAttribute('role','button');\r
    marker.setAttribute('aria-label',\`测点 \${markerLabel}\`);\r
    const halo=document.createElementNS('http://www.w3.org/2000/svg','circle');\r
    halo.setAttribute('class','canvas-testpoint-marker__halo');\r
    halo.setAttribute('r','16');\r
    const pin=document.createElementNS('http://www.w3.org/2000/svg','circle');\r
    pin.setAttribute('class','canvas-testpoint-marker__pin');\r
    pin.setAttribute('r','11');\r
    const label=document.createElementNS('http://www.w3.org/2000/svg','text');\r
    label.setAttribute('class','canvas-testpoint-marker__label');\r
    label.setAttribute('text-anchor','middle');\r
    label.setAttribute('dominant-baseline','central');\r
    label.textContent=markerLabel;\r
    marker.appendChild(halo);\r
    marker.appendChild(pin);\r
    marker.appendChild(label);\r
    marker.addEventListener('click',event=>{\r
      event.stopPropagation();\r
      S.selectedDiagnosticTestPointId=point.pointId;\r
      if(point.edgeId){\r
        S.selEdge=point.edgeId;\r
        if(typeof selectDataflowEdge==='function') selectDataflowEdge(point.edgeId);\r
      }\r
      if(typeof renderDataflowPanel==='function') renderDataflowPanel();\r
      renderCanvasDiagnosticTestPointMarkers();\r
    });\r
    layer.appendChild(marker);\r
  });\r
}\r
function getInjectedFaultCollections(){\r
  return [\r
    'activeFaults',\r
    'injectedFaults',\r
    'faultInstances',\r
    'selectedFaults',\r
    'faultInjectionResults',\r
    'appliedFaults'\r
  ].filter(key=>Array.isArray(S[key]));\r
}\r
function faultEntryMatches(entry,faultId){\r
  if(!entry||!faultId) return false;\r
  if(typeof entry==='string') return entry===faultId;\r
  return entry.id===faultId\r
    || entry.faultId===faultId\r
    || entry.modelId===faultId\r
    || entry.faultModelId===faultId\r
    || entry.faultTypeId===faultId\r
    || entry.instanceId===faultId\r
    || entry.key===faultId\r
    || entry.type===faultId\r
    || faultEntryMatches(entry.injectedFault,faultId)\r
    || faultEntryMatches(entry.fault,faultId);\r
}\r
function uniqueFaultTargets(){\r
  const seen=new Set();\r
  const result=[];\r
  Array.from(arguments).forEach(list=>{\r
    if(!Array.isArray(list)) return;\r
    list.forEach(item=>{\r
      if(item&&typeof item==='object'&&!seen.has(item)){\r
        seen.add(item);\r
        result.push(item);\r
      }\r
    });\r
  });\r
  return result;\r
}\r
function getFaultTargetNodes(){\r
  return uniqueFaultTargets(S.nodes,S.modelNodes);\r
}\r
function getFaultTargetEdges(){\r
  return uniqueFaultTargets(S.edges,S.modelEdges);\r
}\r
function isActiveFaultReference(entry){\r
  return Boolean(entry)&&(typeof entry!=='object'||entry.active!==false);\r
}\r
function targetHasActiveFaultReferences(target){\r
  if(!target) return false;\r
  if(isActiveFaultReference(target.fault)||isActiveFaultReference(target.injectedFault)) return true;\r
  return ['faults','faultBindings','activeFaults','faultInstances','appliedFaults','selectedFaults'].some(key=>{\r
    return Array.isArray(target[key])&&target[key].some(isActiveFaultReference);\r
  });\r
}\r
function removeFaultReferencesFromTarget(target,faultId){\r
  if(!target) return false;\r
  let removed=false;\r
  ['fault','injectedFault'].forEach(key=>{\r
    if(faultEntryMatches(target[key],faultId)){\r
      delete target[key];\r
      removed=true;\r
    }\r
  });\r
  ['faults','faultBindings','activeFaults','faultInstances','appliedFaults','selectedFaults'].forEach(key=>{\r
    if(!Array.isArray(target[key])) return;\r
    const before=target[key].length;\r
    target[key]=target[key].filter(entry=>!faultEntryMatches(entry,faultId));\r
    if(target[key].length!==before) removed=true;\r
  });\r
  if(target.status==='fault'&&!targetHasActiveFaultReferences(target)){\r
    target.status='normal';\r
  }\r
  return removed;\r
}\r
function clearFaultReferencesFromTarget(target){\r
  if(!target) return false;\r
  let removed=false;\r
  ['fault','injectedFault'].forEach(key=>{\r
    if(target[key]){\r
      delete target[key];\r
      removed=true;\r
    }\r
  });\r
  ['faults','faultBindings','activeFaults','faultInstances','appliedFaults','selectedFaults'].forEach(key=>{\r
    if(Array.isArray(target[key])&&target[key].length){\r
      target[key]=[];\r
      removed=true;\r
    }\r
  });\r
  if(target.status==='fault'){\r
    target.status='normal';\r
    removed=true;\r
  }\r
  return removed;\r
}\r
function removeInjectedFault(faultId){\r
  if(!faultId) return false;\r
  let removed=false;\r
  getInjectedFaultCollections().forEach(key=>{\r
    const before=S[key].length;\r
    S[key]=S[key].filter(entry=>!faultEntryMatches(entry,faultId));\r
    if(S[key].length!==before) removed=true;\r
  });\r
  if(S.faultStates&&typeof S.faultStates==='object'){\r
    Object.keys(S.faultStates).forEach(key=>{\r
      if(key===faultId||faultEntryMatches(S.faultStates[key],faultId)){\r
        delete S.faultStates[key];\r
        removed=true;\r
      }\r
    });\r
  }\r
  if(S.injectedFaultMap&&typeof S.injectedFaultMap==='object'){\r
    Object.keys(S.injectedFaultMap).forEach(key=>{\r
      if(key===faultId||faultEntryMatches(S.injectedFaultMap[key],faultId)){\r
        delete S.injectedFaultMap[key];\r
        removed=true;\r
      }\r
    });\r
  }\r
  getFaultTargetEdges().forEach(edge=>{\r
    if(removeFaultReferencesFromTarget(edge,faultId)) removed=true;\r
  });\r
  getFaultTargetNodes().forEach(node=>{\r
    if(removeFaultReferencesFromTarget(node,faultId)) removed=true;\r
  });\r
  if(Array.isArray(S.faultedBlks)){\r
    const activeFaultNodeIds=new Set(getFaultTargetNodes().filter(targetHasActiveFaultReferences).map(node=>node.id));\r
    const before=S.faultedBlks.length;\r
    S.faultedBlks=S.faultedBlks.filter(id=>activeFaultNodeIds.has(id));\r
    if(S.faultedBlks.length!==before) removed=true;\r
  }\r
  if(S.lastDiagnosticTestPointResult&&Array.isArray(S.lastDiagnosticTestPointResult.candidates)){\r
    S.lastDiagnosticTestPointResult.candidates=S.lastDiagnosticTestPointResult.candidates.filter(candidate=>!faultEntryMatches(candidate,faultId));\r
  }\r
  if(typeof renderAll==='function') renderAll();\r
  else{\r
    if(typeof renderCanvas==='function') renderCanvas();\r
    if(typeof renderDataflowPanel==='function') renderDataflowPanel();\r
  }\r
  return removed;\r
}\r
window.removeInjectedFault=removeInjectedFault;\r
window.clearInjectedFaults=function(){\r
  let removed=false;\r
  getInjectedFaultCollections().forEach(key=>{\r
    if(S[key].length){\r
      S[key]=[];\r
      removed=true;\r
    }\r
  });\r
  ['faultStates','injectedFaultMap'].forEach(key=>{\r
    if(S[key]&&typeof S[key]==='object'&&Object.keys(S[key]).length){\r
      S[key]={};\r
      removed=true;\r
    }\r
  });\r
  getFaultTargetEdges().forEach(edge=>{\r
    if(clearFaultReferencesFromTarget(edge)) removed=true;\r
  });\r
  getFaultTargetNodes().forEach(node=>{\r
    if(clearFaultReferencesFromTarget(node)) removed=true;\r
  });\r
  if(Array.isArray(S.faultedBlks)&&S.faultedBlks.length){\r
    S.faultedBlks=[];\r
    removed=true;\r
  }\r
  S.lastDiagnosticTestPointResult=null;\r
  if(typeof renderAll==='function') renderAll();\r
  else{\r
    if(typeof renderCanvas==='function') renderCanvas();\r
    if(typeof renderDataflowPanel==='function') renderDataflowPanel();\r
  }\r
  return removed;\r
};\r
function createUavFaultDiagnosticDemo(){\r
  const nodes=[\r
    {id:'node-command',type:'source',name:'姿态指令',label:'姿态指令',x:80,y:110,w:150,h:74,category:'command'},\r
    {id:'node-shaper',type:'block',name:'指令整形',label:'指令整形',x:290,y:110,w:150,h:74,category:'control'},\r
    {id:'node-error',type:'block',name:'俯仰误差求和',label:'俯仰误差求和',x:500,y:110,w:170,h:74,category:'control'},\r
    {id:'node-controller',type:'block',name:'俯仰控制器',label:'俯仰控制器',x:740,y:110,w:160,h:74,category:'control'},\r
    {id:'node-allocator',type:'block',name:'控制分配',label:'控制分配',x:960,y:110,w:160,h:74,category:'actuator'},\r
    {id:'node-motor',type:'block',name:'电机混控器',label:'电机混控器',x:1180,y:110,w:160,h:74,category:'actuator'},\r
    {id:'node-dynamics',type:'plant',name:'飞行器俯仰动力学',label:'飞行器俯仰动力学',x:740,y:330,w:200,h:86,category:'plant'},\r
    {id:'node-imu',type:'sensor',name:'IMU 陀螺仪',label:'IMU 陀螺仪',x:500,y:330,w:160,h:74,category:'sensor'},\r
    {id:'node-logger',type:'scope',name:'残差记录仪',label:'残差记录仪',x:960,y:330,w:160,h:74,category:'diagnostic'},\r
    {id:'node-spectrum',type:'scope',name:'频谱分析仪',label:'频谱分析仪',x:1180,y:330,w:160,h:74,category:'diagnostic'}\r
  ];\r
  const edges=[\r
    {id:'edge-command-shaper',source:'node-command',target:'node-shaper',label:'俯仰指令',signalId:'cmd.pitch',channelId:'CMD-PITCH',bus:'internal',status:'normal'},\r
    {id:'edge-shaper-error',source:'node-shaper',target:'node-error',label:'整形指令',signalId:'cmd.pitch.shaped',channelId:'CMD-SHAPED',bus:'internal',status:'normal'},\r
    {id:'edge-imu-error',source:'node-imu',target:'node-error',label:'IMU 反馈',signalId:'imu.pitch_rate',channelId:'CAN-FC-IMU',bus:'CAN',status:'normal'},\r
    {id:'edge-error-controller',source:'node-error',target:'node-controller',label:'俯仰误差',signalId:'err.pitch',channelId:'ERR-PITCH',bus:'internal',status:'normal'},\r
    {id:'edge-controller-allocator',source:'node-controller',target:'node-allocator',label:'控制量',signalId:'ctrl.pitch',channelId:'CTRL-PITCH',bus:'internal',status:'normal'},\r
    {id:'edge-allocator-motor',source:'node-allocator',target:'node-motor',label:'电机指令',signalId:'motor.command',channelId:'CAN-FC-MOTOR',bus:'CAN',status:'normal'},\r
    {id:'edge-motor-dynamics',source:'node-motor',target:'node-dynamics',label:'执行推力',signalId:'plant.thrust',channelId:'ACT-THRUST',bus:'physical',status:'normal'},\r
    {id:'edge-dynamics-imu',source:'node-dynamics',target:'node-imu',label:'机体角速度',signalId:'body.pitch_rate',channelId:'BODY-RATE',bus:'physical',status:'normal'},\r
    {id:'edge-error-logger',source:'node-error',target:'node-logger',label:'残差诊断',signalId:'diag.residual',channelId:'DIAG-RES',bus:'diagnostic',status:'normal'},\r
    {id:'edge-error-spectrum',source:'node-error',target:'node-spectrum',label:'频谱诊断',signalId:'diag.spectrum',channelId:'DIAG-SPEC',bus:'diagnostic',status:'normal'}\r
  ];\r
  const faultLibrary=[\r
    {id:'sensor_bias_imu_pitch',name:'IMU 俯仰角速度偏置',category:'传感器故障',type:'propagating',targetNodeId:'node-imu',targetEdgeId:'edge-imu-error',severity:0.35,description:'测量链路产生固定偏置，可沿反馈链路影响下游误差与控制量。'},\r
    {id:'sensor_noise_imu_pitch',name:'IMU 俯仰角速度噪声',category:'传感器故障',type:'propagating',targetNodeId:'node-imu',targetEdgeId:'edge-imu-error',severity:0.25,description:'测量信号叠加随机噪声，可被诊断链路识别为残差波动。'},\r
    {id:'actuator_loss_motor',name:'电机推力效率下降',category:'执行器故障',type:'propagating',targetNodeId:'node-motor',targetEdgeId:'edge-motor-dynamics',severity:0.45,description:'执行器输出不足，沿物理链路影响飞行器响应。'},\r
    {id:'link_dropout_motor_can',name:'电机 CAN 指令丢包',category:'链路故障',type:'blocking',targetEdgeId:'edge-allocator-motor',severity:0.5,description:'控制分配到电机混控器的指令链路间歇丢包。'},\r
    {id:'link_stuck_command',name:'姿态指令保持',category:'链路故障',type:'blocking',targetEdgeId:'edge-command-shaper',severity:0.3,description:'输入指令保持不变，阻断新的目标姿态传入。'},\r
    {id:'param_gain_controller',name:'俯仰控制增益异常',category:'参数/本地故障',type:'local',targetNodeId:'node-controller',targetEdgeId:'edge-controller-allocator',severity:0.4,description:'控制器内部参数异常，主要表现为本地输出放大或不足。'},\r
    {id:'param_allocator_limit',name:'控制分配限幅异常',category:'参数/本地故障',type:'local',targetNodeId:'node-allocator',targetEdgeId:'edge-allocator-motor',severity:0.35,description:'控制分配模块限幅设置异常，输出指令受限。'},\r
    {id:'diagnostic_residual_logger',name:'残差记录异常',category:'诊断/残差型',type:'diagnostic',targetNodeId:'node-logger',targetEdgeId:'edge-error-logger',severity:0.2,description:'只影响诊断显示或记录，不作为主控制故障传播。'},\r
    {id:'diagnostic_spectrum_drift',name:'频谱诊断漂移',category:'诊断/残差型',type:'diagnostic',targetNodeId:'node-spectrum',targetEdgeId:'edge-error-spectrum',severity:0.2,description:'只影响频谱分析结果，不直接改变控制链路。'}\r
  ];\r
  const testPoints=[\r
    {pointId:'tp-command',shortName:'M1',name:'姿态指令测点',edgeId:'edge-command-shaper',detects:['link_stuck_command'],position:'指令输入'},\r
    {pointId:'tp-shaper',shortName:'M2',name:'整形指令测点',edgeId:'edge-shaper-error',detects:['link_stuck_command'],position:'指令整形输出'},\r
    {pointId:'tp-imu',shortName:'M3',name:'IMU 反馈测点',edgeId:'edge-imu-error',detects:['sensor_bias_imu_pitch','sensor_noise_imu_pitch'],position:'传感器反馈'},\r
    {pointId:'tp-error',shortName:'M4',name:'误差残差测点',edgeId:'edge-error-controller',detects:['sensor_bias_imu_pitch','sensor_noise_imu_pitch','param_gain_controller'],position:'误差信号'},\r
    {pointId:'tp-controller',shortName:'M5',name:'控制器输出测点',edgeId:'edge-controller-allocator',detects:['param_gain_controller'],position:'控制输出'},\r
    {pointId:'tp-allocator',shortName:'M6',name:'控制分配测点',edgeId:'edge-allocator-motor',detects:['param_allocator_limit','link_dropout_motor_can'],position:'执行指令'},\r
    {pointId:'tp-motor',shortName:'M7',name:'电机执行测点',edgeId:'edge-motor-dynamics',detects:['actuator_loss_motor','link_dropout_motor_can'],position:'执行器输出'},\r
    {pointId:'tp-dynamics',shortName:'M8',name:'动力学响应测点',edgeId:'edge-dynamics-imu',detects:['actuator_loss_motor','param_gain_controller','param_allocator_limit'],position:'飞行器响应'},\r
    {pointId:'tp-logger',shortName:'M9',name:'残差诊断测点',edgeId:'edge-error-logger',detects:['diagnostic_residual_logger','sensor_bias_imu_pitch','sensor_noise_imu_pitch'],position:'残差诊断'},\r
    {pointId:'tp-spectrum',shortName:'M10',name:'频谱诊断测点',edgeId:'edge-error-spectrum',detects:['diagnostic_spectrum_drift','sensor_noise_imu_pitch'],position:'频谱诊断'}\r
  ];\r
  return {name:'eVTOL 闭环飞控故障诊断 Demo',nodes,edges,faultLibrary,testPoints};\r
}\r
function normalizeInjectedFaultEntry(entry){\r
  if(!entry) return null;\r
  if(typeof entry==='string') return {id:entry,name:entry};\r
  return {\r
    id:entry.id||entry.faultId||entry.modelId||entry.faultModelId||entry.faultTypeId||entry.instanceId||entry.key||entry.type,\r
    name:entry.name||entry.label||entry.id||entry.faultId||entry.modelId||entry.faultModelId,\r
    type:entry.type,\r
    category:entry.category,\r
    targetEdgeId:entry.targetEdgeId,\r
    targetNodeId:entry.targetNodeId\r
  };\r
}\r
function getInjectedFaultEntries(){\r
  const map=new Map();\r
  const addFault=(entry,target={})=>{\r
    if(entry&&typeof entry==='object'&&entry.active===false) return;\r
    const fault=normalizeInjectedFaultEntry(entry);\r
    if(fault&&fault.id&&!map.has(fault.id)) map.set(fault.id,{...fault,...target});\r
  };\r
  getInjectedFaultCollections().forEach(key=>{\r
    S[key].forEach(entry=>{\r
      addFault(entry);\r
    });\r
  });\r
  getFaultTargetEdges().forEach(edge=>{\r
    addFault(edge.fault,{targetEdgeId:edge.id});\r
    addFault(edge.injectedFault,{targetEdgeId:edge.id});\r
    ['faults','faultBindings'].forEach(key=>{\r
      if(Array.isArray(edge[key])){\r
        edge[key].forEach(entry=>addFault(entry,{targetEdgeId:edge.id}));\r
      }\r
    });\r
  });\r
  getFaultTargetNodes().forEach(node=>{\r
    addFault(node.fault,{targetNodeId:node.id});\r
    addFault(node.injectedFault,{targetNodeId:node.id});\r
    ['faults','faultBindings'].forEach(key=>{\r
      if(Array.isArray(node[key])){\r
        node[key].forEach(entry=>addFault(entry,{targetNodeId:node.id}));\r
      }\r
    });\r
  });\r
  if(S.faultStates&&typeof S.faultStates==='object'){\r
    Object.keys(S.faultStates).forEach(key=>{\r
      const fault=normalizeInjectedFaultEntry(S.faultStates[key])||{id:key,name:key};\r
      if(fault.id&&!map.has(fault.id)) map.set(fault.id,fault);\r
    });\r
  }\r
  return Array.from(map.values());\r
}\r
function findDemoFault(faultId){\r
  const library=Array.isArray(S.faultLibrary)?S.faultLibrary:(Array.isArray(S.faults)?S.faults:createUavFaultDiagnosticDemo().faultLibrary);\r
  return library.find(fault=>fault.id===faultId||fault.faultId===faultId)||null;\r
}\r
function injectDemoFault(faultId){\r
  const fault=findDemoFault(faultId);\r
  if(!fault) return null;\r
  if(!Array.isArray(S.injectedFaults)) S.injectedFaults=[];\r
  if(!S.injectedFaults.some(entry=>faultEntryMatches(entry,fault.id))){\r
    S.injectedFaults.push({...fault,faultId:fault.id,instanceId:fault.id,status:'active'});\r
  }\r
  if(!S.injectedFaultMap||typeof S.injectedFaultMap!=='object') S.injectedFaultMap={};\r
  S.injectedFaultMap[fault.id]={...fault,status:'active'};\r
  if(Array.isArray(S.edges)&&fault.targetEdgeId){\r
    const edge=S.edges.find(item=>item.id===fault.targetEdgeId);\r
    if(edge){\r
      edge.status='fault';\r
      edge.fault={...fault,faultId:fault.id};\r
      edge.faults=Array.isArray(edge.faults)?edge.faults:[];\r
      if(!edge.faults.some(entry=>faultEntryMatches(entry,fault.id))) edge.faults.push({...fault,faultId:fault.id});\r
    }\r
  }\r
  if(Array.isArray(S.nodes)&&fault.targetNodeId){\r
    const node=S.nodes.find(item=>item.id===fault.targetNodeId);\r
    if(node){\r
      node.status='fault';\r
      node.fault={...fault,faultId:fault.id};\r
      node.faults=Array.isArray(node.faults)?node.faults:[];\r
      if(!node.faults.some(entry=>faultEntryMatches(entry,fault.id))) node.faults.push({...fault,faultId:fault.id});\r
    }\r
  }\r
  if(typeof renderAll==='function') renderAll();\r
  return fault;\r
}\r
function buildDemoDiagnosticResult(pointId){\r
  const demoPoints=Array.isArray(S.diagnosticTestPoints)?S.diagnosticTestPoints:createUavFaultDiagnosticDemo().testPoints;\r
  const semanticPoints=typeof getSemanticTestPoints==='function'?getSemanticTestPoints():[];\r
  const semanticPoint=semanticPoints.find(item=>item.pointId===pointId||item.id===pointId)||null;\r
  const point=demoPoints.find(item=>item.pointId===pointId||item.id===pointId||item.edgeId===(semanticPoint&&semanticPoint.edgeId))||semanticPoint||demoPoints[0];\r
  const injected=getInjectedFaultEntries();\r
  const library=Array.isArray(S.faultLibrary)?S.faultLibrary:createUavFaultDiagnosticDemo().faultLibrary;\r
  const detectable=new Set((point&&Array.isArray(point.detects))?point.detects:[]);\r
  const candidates=injected\r
    .filter(fault=>detectable.has(fault.id))\r
    .map(fault=>{\r
      const full=library.find(item=>item.id===fault.id)||fault;\r
      return {...full,faultId:full.id,checked:false,confidence:full.type==='diagnostic'?0.72:0.86};\r
    });\r
  const result={\r
    pointId:point?point.pointId:pointId,\r
    pointName:point?point.name:'测点',\r
    status:candidates.length?'suspect':'normal',\r
    candidates,\r
    summary:candidates.length?\`发现 \${candidates.length} 个候选故障\`:'未发现候选故障',\r
    time:Date.now()\r
  };\r
  S.lastDiagnosticTestPointResult=result;\r
  return result;\r
}\r
function loadUavFaultDiagnosticDemo(){\r
  const demo=createUavFaultDiagnosticDemo();\r
  S.modelName=demo.name;\r
  S.nodes=demo.nodes.map(node=>({...node}));\r
  S.edges=demo.edges.map(edge=>({...edge}));\r
  S.faultLibrary=demo.faultLibrary.map(fault=>({...fault}));\r
  S.faults=S.faultLibrary;\r
  S.diagnosticTestPoints=demo.testPoints.map(point=>({...point}));\r
  const semanticPoints=typeof getSemanticTestPoints==='function'?getSemanticTestPoints():[];\r
  S.installedDiagnosticTestPointIds=(semanticPoints.length?semanticPoints:demo.testPoints).map(point=>point.pointId);\r
  S.diagnosticTestPointModelSignature='';\r
  S.injectedFaults=[];\r
  S.injectedFaultMap={};\r
  S.lastDiagnosticTestPointResult=null;\r
  if(typeof renderAll==='function') renderAll();\r
  else{\r
    if(typeof renderCanvas==='function') renderCanvas();\r
    if(typeof renderDataflowPanel==='function') renderDataflowPanel();\r
  }\r
  return demo;\r
}\r
window.createUavFaultDiagnosticDemo=createUavFaultDiagnosticDemo;\r
window.loadUavFaultDiagnosticDemo=loadUavFaultDiagnosticDemo;\r
window.injectDemoFault=injectDemoFault;\r
window.injectAllDemoFaults=function(){\r
  const library=Array.isArray(S.faultLibrary)?S.faultLibrary:createUavFaultDiagnosticDemo().faultLibrary;\r
  library.forEach(fault=>injectDemoFault(fault.id));\r
  if(typeof renderAll==='function') renderAll();\r
  return getInjectedFaultEntries();\r
};\r
window.buildDemoDiagnosticResult=buildDemoDiagnosticResult;\r
['detectDiagnosticTestPoint','runDiagnosticTestPointDetection','diagnoseDiagnosticTestPoint','calculateDiagnosticTestPointResponse'].forEach(function(fnName){\r
  const original=window[fnName];\r
  window[fnName]=function(pointId){\r
    const result=buildDemoDiagnosticResult(pointId);\r
    if(result.candidates.length||!original){\r
      if(typeof renderDataflowPanel==='function') renderDataflowPanel();\r
      return result;\r
    }\r
    return original.apply(this,arguments);\r
  };\r
});\r
function renderInjectedFaultRemovalControls(){\r
  if(typeof document==='undefined'||typeof document.querySelector!=='function') return;\r
  const faults=getInjectedFaultEntries();\r
  const host=document.querySelector('[data-fault-injection-panel],.fault-injection-panel,#fault-injection-panel,.fault-library-panel,.property-panel')||document.body;\r
  let panel=document.getElementById('injected-fault-removal-controls');\r
  if(!faults.length){\r
    if(panel) panel.remove();\r
    return;\r
  }\r
  if(!panel){\r
    panel=document.createElement('section');\r
    panel.id='injected-fault-removal-controls';\r
    panel.className='injected-fault-removal-controls';\r
    host.appendChild(panel);\r
  }\r
  panel.innerHTML=\`<div class="injected-fault-removal-controls__head"><strong>已注入故障</strong><button type="button" data-clear-injected-faults>全部移除</button></div><div class="injected-fault-removal-controls__list"></div>\`;\r
  const list=panel.querySelector('.injected-fault-removal-controls__list');\r
  faults.forEach(fault=>{\r
    const item=document.createElement('div');\r
    item.className='injected-fault-removal-controls__item';\r
    item.innerHTML=\`<span>\${fault.name||fault.id}</span><button type="button" data-remove-injected-fault="\${fault.id}">移除</button>\`;\r
    list.appendChild(item);\r
  });\r
}\r
function renderUavDemoControls(){\r
  if(typeof document==='undefined'||typeof document.querySelector!=='function') return;\r
  const existing=document.getElementById('uav-fault-demo-controls');\r
  if(existing){existing.remove();}\r
}\r
if(typeof document!=='undefined'&&!window.__uavFaultRemovalEventsBound){\r
  window.__uavFaultRemovalEventsBound=true;\r
  document.addEventListener('click',function(event){\r
    const loadDemoButton=event.target&&event.target.closest?event.target.closest('[data-load-uav-demo]'):null;\r
    if(loadDemoButton){\r
      event.preventDefault();\r
      window.loadUavFaultDiagnosticDemo();\r
      renderUavDemoControls();\r
      renderInjectedFaultRemovalControls();\r
      return;\r
    }\r
    const injectAllButton=event.target&&event.target.closest?event.target.closest('[data-inject-all-demo-faults]'):null;\r
    if(injectAllButton){\r
      event.preventDefault();\r
      window.injectAllDemoFaults();\r
      renderInjectedFaultRemovalControls();\r
      return;\r
    }\r
    const removeButton=event.target&&event.target.closest?event.target.closest('[data-remove-injected-fault]'):null;\r
    if(removeButton){\r
      event.preventDefault();\r
      removeInjectedFault(removeButton.getAttribute('data-remove-injected-fault'));\r
      renderInjectedFaultRemovalControls();\r
      return;\r
    }\r
    const clearButton=event.target&&event.target.closest?event.target.closest('[data-clear-injected-faults]'):null;\r
    if(clearButton){\r
      event.preventDefault();\r
      window.clearInjectedFaults();\r
      renderInjectedFaultRemovalControls();\r
    }\r
  });\r
  if(document.readyState==='loading'){\r
    document.addEventListener('DOMContentLoaded',renderUavDemoControls);\r
  }else{\r
    renderUavDemoControls();\r
  }\r
}\r
const __diagnosticRenderAll=typeof renderAll==='function'?renderAll:null;\r
if(__diagnosticRenderAll&&!window.__uavFaultRenderAllWrapped){\r
  window.__uavFaultRenderAllWrapped=true;\r
  renderAll=function(){\r
    const result=__diagnosticRenderAll.apply(this,arguments);\r
    try{renderUavDemoControls();}catch(err){console.warn('[demo-controls] render failed',err);}\r
    try{renderInjectedFaultRemovalControls();}catch(err){console.warn('[fault-removal] render failed',err);}\r
    return result;\r
  };\r
}\r
function decorateDataflowEdges(){\r
    S.modelEdges.forEach(edge=>{\r
      const metrics=getDataflowEdgeMetrics(edge);\r
      const edgeId=escapeDataflowSelector(edge.id);\r
      const path=document.querySelector(\`.edge-path[data-edge-id="\${edgeId}"]\`);\r
      const hit=document.querySelector(\`.edge-hit[data-edge-id="\${edgeId}"]\`);\r
      const label=document.querySelector(\`.edge-label[data-edge-id="\${edgeId}"]\`);\r
      [path,hit,label].forEach(el=>{\r
        if(!el){return;}\r
        el.dataset.flowStatus=metrics.status;\r
        el.dataset.flowSignal=metrics.signalName;\r
      });\r
      if(path){\r
        path.classList.toggle('is-dataflow-fault',metrics.faultActive);\r
        path.classList.toggle('is-dataflow-protocol',metrics.protocolActive);\r
        path.classList.toggle('is-dataflow-residual',metrics.residualActive);\r
        path.classList.toggle('is-response-target',isMeasurementResponseTargetEdge(edge.id));\r
        path.classList.toggle('is-response-affected',isMeasurementResponseAffectedEdge(edge.id));\r
        path.classList.toggle('is-response-cut',getMeasurementResponsePointByEdge(edge.id)?.status==='cut');\r
      }\r
      if(label){\r
        label.setAttribute('title',\`\${metrics.signalName}\\n当前值: \${formatDataflowNumber(metrics.currentValue)}\\n残差: \${formatDataflowNumber(metrics.residualValue)}\\n延迟: \${metrics.latency}\\n丢包: \${metrics.dropRate}\`);\r
      }\r
    });\r
  }\r
\r
  function renderEdgeDataflowInspector(edge){\r
    const metrics=getDataflowEdgeMetrics(edge);\r
    const pd=document.getElementById('pd');\r
    if(!pd){return;}\r
    pd.insertAdjacentHTML('beforeend',\`\r
      <div class="pgroup" data-edge-diagnostics>\r
        <div class="pglbl">信号诊断</div>\r
        <div class="dataflow-metrics-grid">\r
          <div class="dataflow-metric"><span>当前值 currentValue</span><strong>\${escapeHtml(formatDataflowNumber(metrics.currentValue))}</strong></div>\r
          <div class="dataflow-metric"><span>残差 residual</span><strong>\${escapeHtml(formatDataflowNumber(metrics.residualValue))}</strong></div>\r
          <div class="dataflow-metric"><span>延迟 latency</span><strong>\${escapeHtml(metrics.latency)}</strong></div>\r
          <div class="dataflow-metric"><span>丢包率 dropRate</span><strong>\${escapeHtml(metrics.dropRate)}</strong></div>\r
          <div class="dataflow-metric"><span>突发长度 burstLength</span><strong>\${escapeHtml(metrics.burstLength)}</strong></div>\r
          <div class="dataflow-metric"><span>状态 status</span><strong>\${escapeHtml(metrics.status)}</strong></div>\r
        </div>\r
        <div class="props-help">该诊断块来自多信号流图。运行仿真后，当前值和残差会随采样状态更新；协议指标来自 CAN 边或故障类型默认参数。</div>\r
      </div>\`);\r
  }\r
\r
  function renderSignalFlowInstrumentInspector(node){\r
    const pe=document.getElementById('pe');\r
    const pd=document.getElementById('pd');\r
    if(!pe||!pd){return;}\r
    const summary=getDataflowSummary();\r
    pe.style.display='none';\r
    pd.style.display='block';\r
    pd.innerHTML=\`\r
      <div class="pgroup">\r
        <div class="props-title">\${escapeHtml(node.props.name)}</div>\r
        <div class="props-sub">仪器 · 多信号流图 · 节点 \${node.id.replace('node-','#')}</div>\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">全局信号流摘要</div>\r
        <div class="dataflow-metrics-grid">\r
          <div class="dataflow-metric"><span>总连线</span><strong>\${summary.total}</strong></div>\r
          <div class="dataflow-metric"><span>故障边</span><strong>\${summary.fault}</strong></div>\r
          <div class="dataflow-metric"><span>协议边</span><strong>\${summary.protocol}</strong></div>\r
          <div class="dataflow-metric"><span>残差边</span><strong>\${summary.residual}</strong></div>\r
        </div>\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">嵌入方式</div>\r
        <div class="props-help">多信号流图读取当前画布的节点、端口、连线和故障配置，不复制模型。切换到“数据流视图”即可查看边级指标；选中任意连线可在属性栏查看信号诊断。</div>\r
      </div>\r
      <div class="props-actions">\r
        <button class="props-secondary" onclick="setCanvasView('dataflow')">打开数据流视图</button>\r
        <button class="props-save" onclick="saveSelectedNode()">保存设置</button>\r
        <button class="props-danger" onclick="deleteSelectedNode()">删除模块</button>\r
      </div>\`;\r
  }\r
\r
  const __dataflowRenderEdges=renderEdges;\r
  renderEdges=function(){\r
    const result=__dataflowRenderEdges();\r
    decorateDataflowEdges();\r
    renderDataflowPanel();\r
    return result;\r
  };\r
\r
  const __dataflowRenderModelNodes=renderModelNodes;\r
  renderModelNodes=function(){\r
    const result=__dataflowRenderModelNodes();\r
    renderDataflowPanel();\r
    return result;\r
  };\r
\r
  const __dataflowRenderPropertyPanel=renderPropertyPanel;\r
  renderPropertyPanel=function(node){\r
    if(node?.type==='instrument_signal_flow'){\r
      renderSignalFlowInstrumentInspector(node);\r
      return;\r
    }\r
    const result=__dataflowRenderPropertyPanel(node);\r
    if(node?.sourceNodeId&&node?.targetNodeId&&!node?.type){\r
      renderEdgeDataflowInspector(node);\r
    }\r
    return result;\r
  };\r
\r
  const __dataflowBuildNodeSubtitle=buildNodeSubtitle;\r
  buildNodeSubtitle=function(node){\r
    if(node?.type==='instrument_signal_flow'){\r
      return \`\${node.props.instrumentType||'多信号流图'} · \${getDataflowSummary().total} 条信号边\`;\r
    }\r
    return __dataflowBuildNodeSubtitle(node);\r
  };\r
\r
  const __dataflowSimInit=simInit;\r
  simInit=function(silent=false){\r
    return withDataflowPanelPreserved(()=>__dataflowSimInit(silent));\r
  };\r
\r
  const __dataflowSimRun=simRun;\r
  simRun=function(){\r
    return withDataflowPanelPreserved(()=>__dataflowSimRun());\r
  };\r
\r
  const __dataflowSimStep=simStep;\r
  simStep=function(){\r
    const result=withDataflowPanelPreserved(()=>__dataflowSimStep());\r
    if(document.getElementById('cw')?.dataset.view==='dataflow'){\r
      decorateDataflowEdges();\r
    }else{\r
      renderDataflowPanel();\r
    }\r
    if(S.selEdge){\r
      const edge=getEdge(S.selEdge);\r
      if(edge){renderPropertyPanel(edge);}\r
    }\r
    return result;\r
  };\r
\r
  renderDataflowPanel();\r
  if(typeof renderCanvasDiagnosticTestPointMarkers==='function'){\r
    try{renderCanvasDiagnosticTestPointMarkers();}catch(err){console.warn('[diagnostic-testpoints] canvas marker render failed',err);}\r
  }\r
  Object.assign(window,{\r
    buildDataflowSemanticModel,\r
    buildDiagnosticTestPointModel,\r
    buildSignalFlowTopology,\r
    classifyFaultPropagation,\r
    classifyPropagationPolicy,\r
    collectDataflowEdges,\r
    collectMeasurementPoints,\r
    installDiagnosticTestPoint,\r
    removeDiagnosticTestPoint,\r
    runDiagnosticTestPointDetection,\r
    openDiagnosticTestPointDialog,\r
    toggleDiagnosticFaultConfirmation,\r
    buildMeasurementScenarioOptions,\r
    buildMeasurementTargetOptions,\r
    createMeasurementScenario,\r
    calculateMeasurementResponse,\r
    renderMeasurementSelectOptions,\r
    formatMeasurementResponseValue,\r
    formatMeasurementDelta,\r
    getMeasurementPrimaryParameterKey,\r
    getMeasurementPrimaryParameterValue,\r
    readMeasurementScenarioFromPanel,\r
    renderMeasurementResponseRows,\r
    renderMeasurementResponsePanel,\r
    getMeasurementResponseSummary,\r
    getFilteredMeasurementResponsePoints,\r
    getMeasurementResponsePointByEdge,\r
    isMeasurementResponseTargetEdge,\r
    isMeasurementResponseAffectedEdge,\r
    selectMeasurementResponsePoint,\r
    clearMeasurementResponse,\r
    decorateDataflowEdges,\r
    getDataflowEdgeMetrics,\r
    getDataflowSummary,\r
    __GZ_SELECT_DATAFLOW_EDGE__:selectDataflowEdge,\r
    closeDataflowMappingDetail,\r
    openDataflowMappingDetail,\r
    renderDataflowPanel,\r
    renderPropertyPanel,\r
    renderEdges,\r
    selectEdge,\r
    simInit,\r
    simRun,\r
    simStep\r
  });\r
})();\r
\r
// --- 模型检查与子系统边界提示 ---\r
(function(){\r
  const DIAGNOSTIC_LABELS={error:'错误',warning:'警告',info:'提示',ok:'正常'};\r
\r
  function getDiagnosticCanvases(){\r
    ensureWorkbenchCanvasState();\r
    const canvases=S.canvases&&Object.keys(S.canvases).length\r
      ? Object.values(S.canvases)\r
      : [{\r
        id:S.activeCanvasId||S.rootCanvasId||'canvas-root',\r
        name:'当前画布',\r
        parentSubsystemNodeId:null,\r
        nodes:S.modelNodes||[],\r
        edges:S.modelEdges||[]\r
      }];\r
    return canvases.filter(Boolean);\r
  }\r
\r
  function findCanvasContainingNode(nodeId){\r
    return getDiagnosticCanvases().find(canvas=>\r
      (canvas.nodes||[]).some(node=>node.id===nodeId)\r
    )||null;\r
  }\r
\r
  function findNodeAcrossCanvases(nodeId){\r
    for(const canvas of getDiagnosticCanvases()){\r
      const node=(canvas.nodes||[]).find(item=>item.id===nodeId);\r
      if(node){\r
        return {node,canvas};\r
      }\r
    }\r
    return {node:null,canvas:null};\r
  }\r
\r
  function getNodeLabelForDiagnostics(node){\r
    return node?.props?.name||COMPONENT_LIBRARY[node?.type]?.label||node?.id||'未知节点';\r
  }\r
\r
  function getCanvasLabelForDiagnostics(canvas){\r
    return canvas?.name||canvas?.id||'未命名画布';\r
  }\r
\r
  function hasConnectedInput(canvas,nodeId,portIndex){\r
    return (canvas.edges||[]).some(edge=>\r
      edge.targetNodeId===nodeId&&(edge.targetPortIndex||0)===portIndex\r
    );\r
  }\r
\r
  function hasConnectedOutput(canvas,nodeId,portIndex){\r
    return (canvas.edges||[]).some(edge=>\r
      edge.sourceNodeId===nodeId&&(edge.sourcePortIndex||0)===portIndex\r
    );\r
  }\r
\r
  function hasInputDefault(node,port){\r
    if(!(node?.type==='simulation_block'&&isPythonBoundFlowBlock(node))){\r
      return false;\r
    }\r
    const fallback=port?.meta?.default;\r
    return fallback!==null&&fallback!==undefined&&fallback!=='';\r
  }\r
\r
  function pushDiagnostic(items,severity,title,detail,extra={}){\r
    items.push({\r
      severity,\r
      title,\r
      detail,\r
      canvasId:extra.canvasId||null,\r
      canvasName:extra.canvasName||'',\r
      nodeId:extra.nodeId||null,\r
      edgeId:extra.edgeId||null\r
    });\r
  }\r
\r
  function checkEdges(canvas,nodesById,diagnostics){\r
    const inputOwners=new Map();\r
    (canvas.edges||[]).forEach(edge=>{\r
      const sourceNode=nodesById.get(edge.sourceNodeId);\r
      const targetNode=nodesById.get(edge.targetNodeId);\r
      const canvasName=getCanvasLabelForDiagnostics(canvas);\r
      if(!sourceNode||!targetNode){\r
        pushDiagnostic(\r
          diagnostics,\r
          'error',\r
          '连线引用了不存在的模块',\r
          \`连线 \${edge.id||'-'} 的源节点或目标节点已不存在，请删除该连线或重新连接。\`,\r
          {canvasId:canvas.id,canvasName,edgeId:edge.id}\r
        );\r
        return;\r
      }\r
\r
      const sourcePort=(getNodePorts(sourceNode).outputs||[])[edge.sourcePortIndex||0];\r
      const targetPort=(getNodePorts(targetNode).inputs||[])[edge.targetPortIndex||0];\r
      if(!sourcePort||!targetPort){\r
        pushDiagnostic(\r
          diagnostics,\r
          'error',\r
          '连线端口已经失效',\r
          \`\${getNodeLabelForDiagnostics(sourceNode)} → \${getNodeLabelForDiagnostics(targetNode)} 的端口索引不存在，通常是端口数量调整后没有同步清理。\`,\r
          {canvasId:canvas.id,canvasName,edgeId:edge.id}\r
        );\r
        return;\r
      }\r
\r
      const key=\`\${edge.targetNodeId}:\${edge.targetPortIndex||0}\`;\r
      if(inputOwners.has(key)){\r
        pushDiagnostic(\r
          diagnostics,\r
          'error',\r
          '同一输入端口存在多条连线',\r
          \`\${getNodeLabelForDiagnostics(targetNode)} 的第 \${(edge.targetPortIndex||0)+1} 个输入端口已有上游来源，需要先删除多余连线，避免信号耦合。\`,\r
          {canvasId:canvas.id,canvasName,edgeId:edge.id,nodeId:targetNode.id}\r
        );\r
      }else{\r
        inputOwners.set(key,edge.id);\r
      }\r
\r
      const sourceMeta=edge.sourcePortMeta||edge.sourcePort||buildEdgePortMeta(sourcePort);\r
      const targetMeta=edge.targetPortMeta||edge.targetPort||buildEdgePortMeta(targetPort);\r
      if(!arePortTypesCompatible(sourceMeta,targetMeta)){\r
        pushDiagnostic(\r
          diagnostics,\r
          'warning',\r
          '端口类型可能不一致',\r
          \`\${getNodeLabelForDiagnostics(sourceNode)} 的 \${sourceMeta.displayName||'输出'} 类型为 \${sourceMeta.type||'any'}，\${getNodeLabelForDiagnostics(targetNode)} 的 \${targetMeta.displayName||'输入'} 类型为 \${targetMeta.type||'any'}。建议用流程块或适配块显式转换。\`,\r
          {canvasId:canvas.id,canvasName,edgeId:edge.id,nodeId:targetNode.id}\r
        );\r
      }\r
    });\r
  }\r
\r
  function checkNodes(canvas,diagnostics){\r
    const canvasName=getCanvasLabelForDiagnostics(canvas);\r
    (canvas.nodes||[]).forEach(node=>{\r
      const ports=getNodePorts(node);\r
      (ports.inputs||[]).forEach((port,index)=>{\r
        if(hasConnectedInput(canvas,node.id,index)||hasInputDefault(node,port)){\r
          return;\r
        }\r
        if(node.type==='subsystem_out_port'){\r
          pushDiagnostic(\r
            diagnostics,\r
            'warning',\r
            '子系统输出边界没有内部来源',\r
            \`\${getNodeLabelForDiagnostics(node)} 没有连接内部计算结果，父层从该输出读取时会得到默认值 0。\`,\r
            {canvasId:canvas.id,canvasName,nodeId:node.id}\r
          );\r
          return;\r
        }\r
        if(node.type?.startsWith('instrument_')){\r
          pushDiagnostic(\r
            diagnostics,\r
            'warning',\r
            '测量仪器尚未接入信号',\r
            \`\${getNodeLabelForDiagnostics(node)} 没有输入连线，仿真时不会产生有效观测数据。\`,\r
            {canvasId:canvas.id,canvasName,nodeId:node.id}\r
          );\r
          return;\r
        }\r
        if(node.type!=='signal_source'&&node.type!=='subsystem_in_port'){\r
          pushDiagnostic(\r
            diagnostics,\r
            'warning',\r
            '模块输入未连接',\r
            \`\${getNodeLabelForDiagnostics(node)} 的输入端口“\${getPortDisplayName(port)||port.label||\`输入 \${index+1}\`}”没有上游信号。\`,\r
            {canvasId:canvas.id,canvasName,nodeId:node.id}\r
          );\r
        }\r
      });\r
\r
      if(node.type==='signal_source'&&!hasConnectedOutput(canvas,node.id,0)){\r
        pushDiagnostic(\r
          diagnostics,\r
          'info',\r
          '信号源尚未输出到下游',\r
          \`\${getNodeLabelForDiagnostics(node)} 当前没有连接到任何模块。\`,\r
          {canvasId:canvas.id,canvasName,nodeId:node.id}\r
        );\r
      }\r
\r
      if(node.type==='subsystem_in_port'&&!hasConnectedOutput(canvas,node.id,0)){\r
        pushDiagnostic(\r
          diagnostics,\r
          'info',\r
          '子系统输入边界未被内部使用',\r
          \`\${getNodeLabelForDiagnostics(node)} 已由父层接口生成，但尚未连接到内部模块。\`,\r
          {canvasId:canvas.id,canvasName,nodeId:node.id}\r
        );\r
      }\r
    });\r
  }\r
\r
  function checkSubsystems(canvas,diagnostics){\r
    const canvasName=getCanvasLabelForDiagnostics(canvas);\r
    (canvas.nodes||[]).forEach(node=>{\r
      if(node.type!=='subsystem_block'){\r
        return;\r
      }\r
      const intf=ensureSubsystemInterface(node);\r
      const childCanvas=S.canvases?.[node.targetCanvasId];\r
      if(!childCanvas){\r
        pushDiagnostic(\r
          diagnostics,\r
          'error',\r
          '子系统缺少内部画布',\r
          \`\${getNodeLabelForDiagnostics(node)} 没有关联到有效的子画布，双击无法进入内部模型。\`,\r
          {canvasId:canvas.id,canvasName,nodeId:node.id}\r
        );\r
        return;\r
      }\r
      if(intf.inputs.length===0&&intf.outputs.length===0){\r
        pushDiagnostic(\r
          diagnostics,\r
          'info',\r
          '子系统尚未定义接口',\r
          \`\${getNodeLabelForDiagnostics(node)} 当前没有输入输出接口，建议在父层属性栏中明确接口。\`,\r
          {canvasId:canvas.id,canvasName,nodeId:node.id}\r
        );\r
      }\r
      intf.inputs.forEach(item=>{\r
        const exists=(childCanvas.nodes||[]).some(boundary=>\r
          boundary.type==='subsystem_in_port'&&boundary.props?.interfacePortId===item.id\r
        );\r
        if(!exists){\r
          pushDiagnostic(\r
            diagnostics,\r
            'error',\r
            '子系统输入边界缺失',\r
            \`\${getNodeLabelForDiagnostics(node)} 的输入接口“\${item.name}”没有生成内部输入口，请保存子系统设置重新同步。\`,\r
            {canvasId:canvas.id,canvasName,nodeId:node.id}\r
          );\r
        }\r
      });\r
      intf.outputs.forEach(item=>{\r
        const exists=(childCanvas.nodes||[]).some(boundary=>\r
          boundary.type==='subsystem_out_port'&&boundary.props?.interfacePortId===item.id\r
        );\r
        if(!exists){\r
          pushDiagnostic(\r
            diagnostics,\r
            'error',\r
            '子系统输出边界缺失',\r
            \`\${getNodeLabelForDiagnostics(node)} 的输出接口“\${item.name}”没有生成内部输出口，请保存子系统设置重新同步。\`,\r
            {canvasId:canvas.id,canvasName,nodeId:node.id}\r
          );\r
        }\r
      });\r
    });\r
  }\r
\r
  function collectModelDiagnostics(){\r
    const diagnostics=[];\r
    if(!S.sysLoaded){\r
      pushDiagnostic(diagnostics,'info','尚未开始建模','请先新建空白模型或导入系统模型，再执行完整模型检查。');\r
      return diagnostics;\r
    }\r
\r
    const canvases=getDiagnosticCanvases();\r
    const totalNodes=canvases.reduce((sum,canvas)=>sum+(canvas.nodes||[]).length,0);\r
    if(totalNodes===0){\r
      pushDiagnostic(diagnostics,'info','画布为空','当前模型中还没有组件，请从左侧组件库拖入信号源、仿真块或示波器。');\r
      return diagnostics;\r
    }\r
\r
    canvases.forEach(canvas=>{\r
      const nodesById=new Map((canvas.nodes||[]).map(node=>[node.id,node]));\r
      checkEdges(canvas,nodesById,diagnostics);\r
      checkNodes(canvas,diagnostics);\r
      checkSubsystems(canvas,diagnostics);\r
    });\r
\r
    if(!canvases.some(canvas=>(canvas.nodes||[]).some(node=>node.type==='signal_source'||node.type==='subsystem_in_port'))){\r
      pushDiagnostic(diagnostics,'warning','模型缺少信号入口','当前模型没有信号源或子系统输入口，仿真时没有明确输入激励。');\r
    }\r
    if(!canvases.some(canvas=>(canvas.nodes||[]).some(node=>node.type==='instrument_scope'))){\r
      pushDiagnostic(diagnostics,'warning','模型缺少示波器','当前模型没有示波器，仿真后无法直接查看波形。');\r
    }\r
\r
    if(!diagnostics.some(item=>item.severity==='error'||item.severity==='warning')){\r
      pushDiagnostic(diagnostics,'ok','模型检查通过','未发现阻断仿真的拓扑错误。仍可继续检查具体参数、故障配置和 Python 后端状态。');\r
    }\r
    return diagnostics;\r
  }\r
\r
  function summarizeDiagnostics(diagnostics){\r
    return diagnostics.reduce((summary,item)=>{\r
      summary[item.severity]=(summary[item.severity]||0)+1;\r
      return summary;\r
    },{error:0,warning:0,info:0,ok:0});\r
  }\r
\r
  function pushModelCheckStatusEntry(summary){\r
    const statusBar=window.__GZ_STATUS_BAR__;\r
    if(!statusBar?.pushEntry){return;}\r
    const issueCount=summary.error+summary.warning;\r
    const level=summary.error>0?'error':summary.warning>0?'warn':'ok';\r
    const message=summary.error>0\r
      ?\`模型检查发现 \${summary.error} 个错误，需要先处理阻断项\`\r
      :summary.warning>0\r
        ?\`模型检查发现 \${summary.warning} 个警告，建议确认后再仿真\`\r
        :\`模型检查通过，\${summary.info+summary.ok} 项提示已记录\`;\r
    statusBar.pushEntry({\r
      level,\r
      view:issueCount>0?'alerts':'log',\r
      source:'模型检查',\r
      message\r
    });\r
  }\r
\r
  function renderModelDiagnosticsPanel(diagnostics){\r
    const pe=document.getElementById('pe');\r
    const pd=document.getElementById('pd');\r
    if(!pe||!pd){return;}\r
    const summary=summarizeDiagnostics(diagnostics);\r
    const issueCount=summary.error+summary.warning;\r
    const cards=diagnostics.map((item,index)=>{\r
      const location=item.canvasName\r
        ?\`画布: \${escapeHtml(item.canvasName)}\${item.nodeId?\` · 节点: \${escapeHtml(item.nodeId)}\`:''}\${item.edgeId?\` · 连线: \${escapeHtml(item.edgeId)}\`:''}\`\r
        :'';\r
      const canFocus=item.nodeId||item.edgeId;\r
      return \`\r
        <div class="diagnostics-card diagnostics-card--\${item.severity}">\r
          <div class="diagnostics-card__head">\r
            <div class="diagnostics-card__title">\${escapeHtml(item.title)}</div>\r
            <div class="diagnostics-card__badge">\${DIAGNOSTIC_LABELS[item.severity]||'提示'}</div>\r
          </div>\r
          <div class="diagnostics-card__detail">\${escapeHtml(item.detail)}</div>\r
          \${location?\`<div class="diagnostics-card__meta">\${location}</div>\`:''}\r
          \${canFocus?\`<div class="diagnostics-card__actions"><button class="diagnostics-card__button" onclick="focusDiagnosticItem(\${index})">定位</button></div>\`:''}\r
        </div>\`;\r
    }).join('');\r
\r
    pe.style.display='none';\r
    pd.style.display='block';\r
    pd.innerHTML=\`\r
      <div class="diagnostics-panel">\r
        <div class="diagnostics-hero">\r
          <div class="diagnostics-hero__top">\r
            <div>\r
              <div class="diagnostics-title">模型检查</div>\r
              <div class="diagnostics-sub">检查连线拓扑、端口有效性、子系统边界和观测链路。</div>\r
            </div>\r
            <div class="diagnostics-score">\r
              <div class="diagnostics-score__num">\${issueCount}</div>\r
              <div class="diagnostics-score__lbl">待处理</div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="diagnostics-summary">\r
          <div class="diagnostics-pill diagnostics-pill--error"><div class="diagnostics-pill__value">\${summary.error}</div><div class="diagnostics-pill__label">错误</div></div>\r
          <div class="diagnostics-pill diagnostics-pill--warning"><div class="diagnostics-pill__value">\${summary.warning}</div><div class="diagnostics-pill__label">警告</div></div>\r
          <div class="diagnostics-pill diagnostics-pill--info"><div class="diagnostics-pill__value">\${summary.info+summary.ok}</div><div class="diagnostics-pill__label">提示</div></div>\r
        </div>\r
        <div class="diagnostics-list">\${cards}</div>\r
      </div>\`;\r
  }\r
\r
  function runModelCheck(options={}){\r
    const diagnostics=collectModelDiagnostics();\r
    S.modelDiagnostics=diagnostics;\r
    renderModelDiagnosticsPanel(diagnostics);\r
    const summary=summarizeDiagnostics(diagnostics);\r
    pushModelCheckStatusEntry(summary);\r
    if(!options.silent){\r
      if(summary.error>0){\r
        toast(\`模型检查发现 \${summary.error} 个错误，请先处理阻断项\`,'w');\r
      }else if(summary.warning>0){\r
        toast(\`模型检查发现 \${summary.warning} 个需要确认的问题\`,'w');\r
      }else{\r
        toast('模型检查通过','s');\r
      }\r
    }\r
    return diagnostics;\r
  }\r
\r
  function focusDiagnosticItem(index){\r
    const item=S.modelDiagnostics?.[index];\r
    if(!item){return;}\r
    if(item.canvasId&&S.activeCanvasId!==item.canvasId){\r
      navigateToCanvas(item.canvasId);\r
    }\r
    if(item.edgeId&&getEdge(item.edgeId)){\r
      selectEdge(item.edgeId);\r
      return;\r
    }\r
    if(item.nodeId&&getNode(item.nodeId)){\r
      selectNode(item.nodeId);\r
      return;\r
    }\r
    renderModelDiagnosticsPanel(S.modelDiagnostics||[]);\r
  }\r
\r
  function focusParentSubsystemInterface(boundaryNodeId){\r
    const childCanvas=findCanvasContainingNode(boundaryNodeId);\r
    const parentId=childCanvas?.parentSubsystemNodeId;\r
    if(!parentId){\r
      toast('未找到父层子系统块','w');\r
      return;\r
    }\r
    const parentHit=findNodeAcrossCanvases(parentId);\r
    if(!parentHit.canvas){\r
      toast('未找到父层画布','w');\r
      return;\r
    }\r
    navigateToCanvas(parentHit.canvas.id);\r
    selectNode(parentId);\r
  }\r
\r
  function renderSubsystemBoundaryInspector(node){\r
    const pe=document.getElementById('pe');\r
    const pd=document.getElementById('pd');\r
    if(!pe||!pd){return;}\r
    const canvas=findCanvasContainingNode(node.id);\r
    const role=node.props?.interfaceRole==='output'?'输出边界':'输入边界';\r
    const connectionCount=node.type==='subsystem_out_port'\r
      ? (canvas?.edges||[]).filter(edge=>edge.targetNodeId===node.id).length\r
      : (canvas?.edges||[]).filter(edge=>edge.sourceNodeId===node.id).length;\r
    pe.style.display='none';\r
    pd.style.display='block';\r
    pd.innerHTML=\`\r
      <div class="pgroup">\r
        <div class="props-title">\${escapeHtml(node.props?.name||'子系统边界端口')}</div>\r
        <div class="props-sub">\${role} · \${escapeHtml(canvas?.name||'子画布')}</div>\r
      </div>\r
      <div class="pgroup">\r
        <div class="pglbl">接口来源</div>\r
        <div class="prow"><span class="pk">端口类型</span><span class="pv">\${escapeHtml(node.props?.portType||'标量')}</span></div>\r
        <div class="prow"><span class="pk">接口 ID</span><span class="pv">\${escapeHtml(node.props?.interfacePortId||'-')}</span></div>\r
        <div class="prow"><span class="pk">连接数量</span><span class="pv">\${connectionCount}</span></div>\r
      </div>\r
      <div class="subsystem-boundary-note">\r
        该端口由父层子系统接口自动生成。名称、数量和类型请回到父层子系统块中编辑，内部画布只负责把边界端口连接到具体模块。\r
      </div>\r
      <div class="props-actions">\r
        <button class="props-secondary" onclick="focusParentSubsystemInterface('\${node.id}')">返回父层编辑接口</button>\r
        <button class="props-danger" onclick="deleteSelectedNode()">删除模块</button>\r
      </div>\`;\r
  }\r
\r
  const __diagnosticsRenderPropertyPanel=renderPropertyPanel;\r
  renderPropertyPanel=function(node){\r
    if(node&&isSubsystemBoundaryNodeType(node.type)){\r
      renderSubsystemBoundaryInspector(node);\r
      return;\r
    }\r
    return __diagnosticsRenderPropertyPanel(node);\r
  };\r
\r
  const __diagnosticsComputeSourceSignal=computeSourceSignal;\r
  computeSourceSignal=function(node,time){\r
    if(node?.props?.waveType==='阶跃'){\r
      const amplitude=parseScalar(node.props.amplitude,1);\r
      const frequency=parseScalar(node.props.frequency,1);\r
      const stepTime=Math.max(0.2,frequency);\r
      return time>=stepTime?amplitude:0;\r
    }\r
    return __diagnosticsComputeSourceSignal(node,time);\r
  };\r
\r
  Object.assign(window,{\r
    runModelCheck,\r
    collectModelDiagnostics,\r
    renderModelDiagnosticsPanel,\r
    focusDiagnosticItem,\r
    focusParentSubsystemInterface,\r
    renderPropertyPanel\r
  });\r
})();\r
\r
// --- Canvas command runtime: toolbar wiring, undo/redo, and visible command feedback ---\r
(function installCanvasCommandRuntime(){\r
  const HISTORY_LIMIT=40;\r
  const historyState={\r
    undoStack:[],\r
    redoStack:[],\r
    restoring:false,\r
    pendingDrag:null\r
  };\r
\r
  function cloneCommandValue(value){\r
    return JSON.parse(JSON.stringify(value));\r
  }\r
\r
  function snapshotWorkbench(){\r
    return createSystemModelSnapshot();\r
  }\r
\r
  function hashSnapshot(snapshot){\r
    return JSON.stringify(snapshot);\r
  }\r
\r
  function pushCommandStatus(level,message,view){\r
    const statusBar=window.__GZ_STATUS_BAR__;\r
    if(statusBar?.pushEntry){\r
      statusBar.pushEntry({\r
        level,\r
        view:view||'log',\r
        source:'画布工具',\r
        message\r
      });\r
    }\r
  }\r
\r
  function renderCanvasCommandState(){\r
    const canUndo=historyState.undoStack.length>0;\r
    const canRedo=historyState.redoStack.length>0;\r
    const undoButton=document.querySelector('[data-canvas-command="undo"]');\r
    const redoButton=document.querySelector('[data-canvas-command="redo"]');\r
    if(undoButton){\r
      undoButton.disabled=!canUndo;\r
      undoButton.title=canUndo?\`撤销：\${historyState.undoStack[historyState.undoStack.length-1].label}\`:'撤销';\r
    }\r
    if(redoButton){\r
      redoButton.disabled=!canRedo;\r
      redoButton.title=canRedo?\`重做：\${historyState.redoStack[historyState.redoStack.length-1].label}\`:'重做';\r
    }\r
    const zoomLabel=document.getElementById('canvas-toolbar-zoom');\r
    if(zoomLabel){\r
      zoomLabel.textContent=\`\${Math.round((S.canvasScale||1)*100)}%\`;\r
    }\r
    const wrap=document.getElementById('cw');\r
    const fullscreenButton=document.querySelector('[data-canvas-command="fullscreen"]');\r
    if(fullscreenButton){\r
      const active=wrap?.dataset.fullscreen==='true';\r
      fullscreenButton.classList.toggle('is-active',active);\r
      fullscreenButton.setAttribute('aria-pressed',active?'true':'false');\r
    }\r
  }\r
\r
  function restoreCommandSnapshot(snapshot){\r
    historyState.restoring=true;\r
    restoreSystemModelSnapshot(cloneCommandValue(snapshot));\r
    historyState.restoring=false;\r
    updateUI();\r
    renderCanvasCommandState();\r
  }\r
\r
  function rememberHistory(beforeSnapshot,label){\r
    if(historyState.restoring||!beforeSnapshot){return false;}\r
    const afterSnapshot=snapshotWorkbench();\r
    if(hashSnapshot(beforeSnapshot)===hashSnapshot(afterSnapshot)){\r
      renderCanvasCommandState();\r
      return false;\r
    }\r
    historyState.undoStack.push({\r
      label,\r
      snapshot:cloneCommandValue(beforeSnapshot)\r
    });\r
    if(historyState.undoStack.length>HISTORY_LIMIT){\r
      historyState.undoStack.shift();\r
    }\r
    historyState.redoStack=[];\r
    renderCanvasCommandState();\r
    return true;\r
  }\r
\r
  function runWithHistory(label,operation){\r
    const beforeSnapshot=snapshotWorkbench();\r
    const result=operation();\r
    const changed=rememberHistory(beforeSnapshot,label);\r
    if(changed){\r
      pushCommandStatus('ok',\`\${label}，可撤销\`);\r
    }\r
    return result;\r
  }\r
\r
  function undoCanvasCommand(){\r
    const entry=historyState.undoStack.pop();\r
    if(!entry){\r
      pushCommandStatus('info','没有可撤销的画布操作');\r
      renderCanvasCommandState();\r
      return {ok:false,reason:'empty-undo'};\r
    }\r
    const current=snapshotWorkbench();\r
    historyState.redoStack.push({\r
      label:entry.label,\r
      snapshot:cloneCommandValue(current)\r
    });\r
    restoreCommandSnapshot(entry.snapshot);\r
    pushCommandStatus('ok',\`撤销：\${entry.label}\`);\r
    return {ok:true,label:entry.label};\r
  }\r
\r
  function redoCanvasCommand(){\r
    const entry=historyState.redoStack.pop();\r
    if(!entry){\r
      pushCommandStatus('info','没有可重做的画布操作');\r
      renderCanvasCommandState();\r
      return {ok:false,reason:'empty-redo'};\r
    }\r
    const current=snapshotWorkbench();\r
    historyState.undoStack.push({\r
      label:entry.label,\r
      snapshot:cloneCommandValue(current)\r
    });\r
    restoreCommandSnapshot(entry.snapshot);\r
    pushCommandStatus('ok',\`重做：\${entry.label}\`);\r
    return {ok:true,label:entry.label};\r
  }\r
\r
  function setCanvasInteractionMode(mode='select',options={}){\r
    const nextMode=mode==='pan'?'pan':'select';\r
    S.canvasInteractionMode=nextMode;\r
    const wrap=document.getElementById('cw');\r
    if(wrap){\r
      wrap.dataset.interactionMode=nextMode;\r
    }\r
    document.querySelectorAll('[data-canvas-command="select"],[data-canvas-command="pan"]').forEach(button=>{\r
      button.classList.toggle('is-active',button.dataset.canvasCommand===nextMode);\r
      button.setAttribute('aria-pressed',button.dataset.canvasCommand===nextMode?'true':'false');\r
    });\r
    if(!options.silent){\r
      pushCommandStatus('info',nextMode==='pan'?'已切换为平移模式':'已切换为选择模式');\r
    }\r
    return {ok:true,mode:nextMode};\r
  }\r
\r
  function setCanvasView(view='canvas',options={}){\r
    const allowed=new Set(['canvas','components','dataflow','dmatrix']);\r
    const nextView=allowed.has(view)?view:'canvas';\r
    S.canvasView=nextView;\r
    const wrap=document.getElementById('cw');\r
    if(wrap){\r
      wrap.dataset.view=nextView;\r
    }\r
    document.querySelectorAll('[data-canvas-view]').forEach(tab=>{\r
      const active=tab.dataset.canvasView===nextView;\r
      tab.classList.toggle('is-active',active);\r
      tab.setAttribute('aria-pressed',active?'true':'false');\r
    });\r
    const labels={canvas:'画布视图',components:'组件视图',dataflow:'多信号流图',dmatrix:'D矩阵视图'};\r
    if(nextView==='dataflow'){\r
      window.renderDataflowPanel?.();\r
      window.decorateDataflowEdges?.();\r
    }\r
    if(nextView==='dmatrix'){\r
      window.renderDetectionMatrixPanel?.();\r
    }\r
    if(!options.silent){\r
      pushCommandStatus('info',\`已切换到\${labels[nextView]}\`);\r
    }\r
    return {ok:true,view:nextView};\r
  }\r
\r
  function setCanvasFullscreenState(active){\r
    const wrap=document.getElementById('cw');\r
    if(!wrap){return {ok:false,reason:'missing-canvas'};}\r
    wrap.dataset.fullscreen=active?'true':'false';\r
    renderCanvasCommandState();\r
    return {ok:true,fullscreen:active};\r
  }\r
\r
  function syncCanvasFullscreenState(){\r
    const wrap=document.getElementById('cw');\r
    if(!wrap){return {ok:false,reason:'missing-canvas'};}\r
    const active=document.fullscreenElement===wrap;\r
    return setCanvasFullscreenState(active);\r
  }\r
\r
  function toggleCanvasFullscreen(){\r
    const wrap=document.getElementById('cw');\r
    if(!wrap){return {ok:false,reason:'missing-canvas'};}\r
    const shouldEnter=wrap.dataset.fullscreen!=='true';\r
    setCanvasFullscreenState(shouldEnter);\r
    if(shouldEnter&&wrap.requestFullscreen&&!document.fullscreenElement){\r
      wrap.requestFullscreen().catch(()=>{});\r
    }else if(!shouldEnter&&document.fullscreenElement&&document.exitFullscreen){\r
      document.exitFullscreen().catch(()=>{});\r
    }\r
    pushCommandStatus('info',shouldEnter?'已进入画布全屏视图':'已退出画布全屏视图');\r
    return {ok:true,fullscreen:shouldEnter};\r
  }\r
\r
  function resetCommandHistory(){\r
    historyState.undoStack=[];\r
    historyState.redoStack=[];\r
    historyState.pendingDrag=null;\r
    renderCanvasCommandState();\r
  }\r
\r
  const __commandApplyCanvasTransform=applyCanvasTransform;\r
  applyCanvasTransform=function(){\r
    const result=__commandApplyCanvasTransform();\r
    renderCanvasCommandState();\r
    return result;\r
  };\r
\r
  const __commandCreateNode=createNode;\r
  createNode=function(type,rawX,rawY){\r
    return runWithHistory('新增组件',()=>__commandCreateNode(type,rawX,rawY));\r
  };\r
\r
  const __commandDeleteSelectedNode=deleteSelectedNode;\r
  deleteSelectedNode=function(){\r
    if(!S.selBlk){return __commandDeleteSelectedNode();}\r
    return runWithHistory('删除组件',()=>__commandDeleteSelectedNode());\r
  };\r
\r
  const __commandDeleteSelectedEdge=deleteSelectedEdge;\r
  deleteSelectedEdge=function(){\r
    if(!S.selEdge){return __commandDeleteSelectedEdge();}\r
    return runWithHistory('删除连线',()=>__commandDeleteSelectedEdge());\r
  };\r
\r
  if(typeof deleteSelectedNodeGroup==='function'){\r
    const __commandDeleteSelectedNodeGroup=deleteSelectedNodeGroup;\r
    deleteSelectedNodeGroup=function(){\r
      return runWithHistory('删除所选组件',()=>__commandDeleteSelectedNodeGroup());\r
    };\r
  }\r
\r
  if(typeof wrapSelectionIntoSubsystem==='function'){\r
    const __commandWrapSelectionIntoSubsystem=wrapSelectionIntoSubsystem;\r
    wrapSelectionIntoSubsystem=function(){\r
      return runWithHistory('封装为子系统',()=>__commandWrapSelectionIntoSubsystem());\r
    };\r
  }\r
\r
  const __commandSaveSelectedNode=saveSelectedNode;\r
  saveSelectedNode=function(){\r
    if(!S.selBlk){return __commandSaveSelectedNode();}\r
    return runWithHistory('保存属性',()=>__commandSaveSelectedNode());\r
  };\r
\r
  if(typeof autoArrangeCanvas==='function'){\r
    const __commandAutoArrangeCanvas=autoArrangeCanvas;\r
    autoArrangeCanvas=function(){\r
      return runWithHistory('自动整理画布',()=>__commandAutoArrangeCanvas());\r
    };\r
  }\r
\r
  const __commandHandlePortClick=handlePortClick;\r
  handlePortClick=function(event,nodeId,direction,index){\r
    if(direction==='input'&&S.pendingConnection){\r
      return runWithHistory('新增连线',()=>__commandHandlePortClick(event,nodeId,direction,index));\r
    }\r
    return __commandHandlePortClick(event,nodeId,direction,index);\r
  };\r
\r
  const __commandBeginNodeDrag=beginNodeDrag;\r
  beginNodeDrag=function(event,nodeId){\r
    const beforeSnapshot=snapshotWorkbench();\r
    const result=__commandBeginNodeDrag(event,nodeId);\r
    if(NODE_DRAG.active&&NODE_DRAG.nodeId===nodeId){\r
      historyState.pendingDrag={\r
        nodeId,\r
        beforeSnapshot,\r
        startX:NODE_DRAG.originX,\r
        startY:NODE_DRAG.originY\r
      };\r
    }\r
    return result;\r
  };\r
\r
  const runtimeListeners=getRuntimeListenerStore();\r
  if(runtimeListeners.canvasCommandPointerEnd){\r
    window.removeEventListener('pointerup',runtimeListeners.canvasCommandPointerEnd);\r
    window.removeEventListener('pointercancel',runtimeListeners.canvasCommandPointerEnd);\r
  }\r
  runtimeListeners.canvasCommandPointerEnd=()=>{\r
    const pending=historyState.pendingDrag;\r
    if(!pending){return;}\r
    const node=getNode(pending.nodeId);\r
    historyState.pendingDrag=null;\r
    if(node&&(node.x!==pending.startX||node.y!==pending.startY)){\r
      const changed=rememberHistory(pending.beforeSnapshot,'移动组件');\r
      if(changed){\r
        pushCommandStatus('ok','移动组件，可撤销');\r
      }\r
    }\r
  };\r
  window.addEventListener('pointerup',runtimeListeners.canvasCommandPointerEnd);\r
  window.addEventListener('pointercancel',runtimeListeners.canvasCommandPointerEnd);\r
\r
  if(runtimeListeners.canvasCommandKeydown){\r
    window.removeEventListener('keydown',runtimeListeners.canvasCommandKeydown);\r
  }\r
  runtimeListeners.canvasCommandKeydown=(event)=>{\r
    const active=document.activeElement;\r
    const editing=active&&(\r
      active.tagName==='INPUT'||\r
      active.tagName==='TEXTAREA'||\r
      active.tagName==='SELECT'||\r
      active.isContentEditable\r
    );\r
    if(editing||document.querySelector('.overlay.open')){return;}\r
    if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='z'){\r
      event.preventDefault();\r
      if(event.shiftKey){redoCanvasCommand();}\r
      else{undoCanvasCommand();}\r
    }else if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='y'){\r
      event.preventDefault();\r
      redoCanvasCommand();\r
    }\r
  };\r
  window.addEventListener('keydown',runtimeListeners.canvasCommandKeydown);\r
\r
  if(runtimeListeners.canvasCommandToolbarClick){\r
    document.removeEventListener('click',runtimeListeners.canvasCommandToolbarClick);\r
  }\r
  runtimeListeners.canvasCommandToolbarClick=(event)=>{\r
    const viewTab=event.target.closest?.('[data-canvas-view]');\r
    if(viewTab){\r
      setCanvasView(viewTab.dataset.canvasView||'canvas');\r
      return;\r
    }\r
    const commandButton=event.target.closest?.('[data-canvas-command]');\r
    if(!commandButton||commandButton.disabled){return;}\r
    switch(commandButton.dataset.canvasCommand){\r
      case 'select':\r
        setCanvasInteractionMode('select');\r
        break;\r
      case 'pan':\r
        setCanvasInteractionMode('pan');\r
        break;\r
      case 'zoom-in':\r
        handleCanvasZoomIn();\r
        break;\r
      case 'zoom-out':\r
        handleCanvasZoomOut();\r
        break;\r
      case 'auto-arrange':\r
        autoArrangeCanvas();\r
        break;\r
      case 'model-check':\r
        runModelCheck();\r
        break;\r
      case 'undo':\r
        undoCanvasCommand();\r
        break;\r
      case 'redo':\r
        redoCanvasCommand();\r
        break;\r
      case 'fullscreen':\r
        toggleCanvasFullscreen();\r
        break;\r
      default:\r
        break;\r
    }\r
  };\r
  document.addEventListener('click',runtimeListeners.canvasCommandToolbarClick);\r
\r
  if(runtimeListeners.canvasCommandFullscreenChange){\r
    document.removeEventListener('fullscreenchange',runtimeListeners.canvasCommandFullscreenChange);\r
  }\r
  runtimeListeners.canvasCommandFullscreenChange=()=>syncCanvasFullscreenState();\r
  document.addEventListener('fullscreenchange',runtimeListeners.canvasCommandFullscreenChange);\r
\r
  const __commandDoCreateBlankWorkspace=doCreateBlankWorkspace;\r
  doCreateBlankWorkspace=function(){\r
    const result=__commandDoCreateBlankWorkspace();\r
    resetCommandHistory();\r
    return result;\r
  };\r
\r
  const __commandRestoreSystemModelSnapshot=restoreSystemModelSnapshot;\r
  restoreSystemModelSnapshot=function(snapshot){\r
    const result=__commandRestoreSystemModelSnapshot(snapshot);\r
    if(!historyState.restoring){\r
      resetCommandHistory();\r
    }\r
    return result;\r
  };\r
\r
  function canUndo(){return historyState.undoStack.length>0;}\r
  function canRedo(){return historyState.redoStack.length>0;}\r
\r
  window.__GZ_CANVAS_COMMANDS__={\r
    canRedo,\r
    canUndo,\r
    redo:redoCanvasCommand,\r
    resetHistory:resetCommandHistory,\r
    setInteractionMode:setCanvasInteractionMode,\r
    setView:setCanvasView,\r
    syncFullscreen:syncCanvasFullscreenState,\r
    toggleFullscreen:toggleCanvasFullscreen,\r
    undo:undoCanvasCommand\r
  };\r
  Object.assign(window,{\r
    __GZ_STATE__:S,\r
    autoArrangeCanvas,\r
    beginNodeDrag,\r
    createNode,\r
    deleteSelectedEdge,\r
    deleteSelectedNode,\r
    deleteSelectedNodeGroup,\r
    doCreateBlankWorkspace,\r
    handleCanvasZoomIn,\r
    handleCanvasZoomOut,\r
    handleCanvasZoomReset,\r
    redoCanvasCommand,\r
    restoreSystemModelSnapshot,\r
    saveSelectedNode,\r
    setCanvasInteractionMode,\r
    setCanvasView,\r
    syncCanvasFullscreenState,\r
    toggleCanvasFullscreen,\r
    undoCanvasCommand,\r
    wrapSelectionIntoSubsystem\r
  });\r
\r
  setCanvasInteractionMode(S.canvasInteractionMode||'select',{silent:true});\r
  setCanvasView(S.canvasView||'canvas',{silent:true});\r
  renderCanvasCommandState();\r
})();\r
\r
// --- 标准故障类型库接入 ---\r
(function(){\r
  const FAULT_TYPE_SOURCE_FILE='fault-types/fault-type-catalog.json';\r
  const FAULT_TYPE_CREATED_AT='2026-04-28';\r
  const FAULT_TYPE_PROTOCOL_MAP={\r
    fixed_delay:{kind:'延迟',code:'delay'},\r
    time_varying_delay:{kind:'延迟',code:'delay'},\r
    random_packet_loss:{kind:'丢包',code:'loss'},\r
    burst_packet_loss:{kind:'丢包',code:'loss'},\r
    data_tamper:{kind:'位翻转',code:'bitflip'},\r
    blocking_interrupt:{kind:'丢包',code:'loss'}\r
  };\r
  const FAULT_TYPE_RUNTIME_BEHAVIOR={\r
    sensor_additive_bias:'additive_bias',\r
    fault_bias_overlay:'additive_bias',\r
    sensor_scale_distortion:'scale',\r
    noise_increase:'noise',\r
    fault_noise_injection:'noise',\r
    colored_noise:'colored_noise',\r
    signal_freeze:'freeze',\r
    state_jump_or_sign_flip:'jump_or_invert',\r
    intermittent_anomaly:'intermittent',\r
    physical_parameter_bias:'parameter_bias',\r
    physical_parameter_drift:'drift',\r
    physical_parameter_step:'step',\r
    actuator_lock_or_failure:'lock',\r
    saturation_limit:'saturation'\r
  };\r
\r
  function getExternalFaultTypeCatalog(){\r
    const catalog=window.__GZ_FAULT_TYPE_CATALOG__;\r
    return catalog&&Array.isArray(catalog.faultTypes)?catalog:{faultTypes:[]};\r
  }\r
\r
  function normalizeFaultTypeTag(value,fallback='Fault'){\r
    return String(value||fallback).trim()||fallback;\r
  }\r
\r
  function mapFaultTypeToCatalogModel(faultType){\r
    if(!faultType?.id){return null;}\r
    const protocol=FAULT_TYPE_PROTOCOL_MAP[faultType.id]||null;\r
    const implementation=faultType.platformImplementation||{};\r
    const tags=[\r
      normalizeFaultTypeTag(faultType.modelClass),\r
      getLayerLabel(faultType.layer),\r
      normalizeFaultTypeTag(implementation.recommendedModule,'未设计模块')\r
    ];\r
    return {\r
      id:faultType.id,\r
      name:faultType.name||faultType.id,\r
      layer:faultType.layer||'physical',\r
      desc:\`\${faultType.modelClass||'故障模型'}：\${faultType.formula||'未记录定量公式'}\`,\r
      tags,\r
      createdAt:FAULT_TYPE_CREATED_AT,\r
      origin:'fault-types',\r
      sourceFile:FAULT_TYPE_SOURCE_FILE,\r
      faultTypeId:faultType.id,\r
      faultKind:protocol?.kind||faultType.modelClass||tags[0],\r
      faultCode:protocol?.code||'',\r
      modelClass:faultType.modelClass||'',\r
      formula:faultType.formula||'',\r
      typicalTargets:cloneDefaults(faultType.typicalTargets||[]),\r
      defaultParameters:cloneDefaults(faultType.defaultParameters||{}),\r
      platformImplementation:cloneDefaults(implementation),\r
      observableSignals:cloneDefaults(faultType.observableSignals||[]),\r
      displayPlan:faultType.displayPlan||'',\r
      recommendedModule:implementation.recommendedModule||'',\r
      pythonFunction:implementation.pythonFunction||'',\r
      runtimeBehavior:FAULT_TYPE_RUNTIME_BEHAVIOR[faultType.id]||'catalog_only'\r
    };\r
  }\r
\r
  function getFaultTypeCatalogModels(){\r
    return getExternalFaultTypeCatalog().faultTypes\r
      .map(mapFaultTypeToCatalogModel)\r
      .filter(Boolean);\r
  }\r
\r
  function getFaultModelKey(model){\r
    return \`\${model?.id||''}::\${model?.layer||''}\`;\r
  }\r
\r
  function syncFaultTypeCatalogIntoAvailable(){\r
    const externalModels=getFaultTypeCatalogModels();\r
    if(externalModels.length===0){return;}\r
    const externalKeys=new Set(externalModels.map(getFaultModelKey));\r
    const externalNameKeys=new Set(externalModels.map(model=>\`\${model.name}::\${model.layer}\`));\r
    const remaining=(S.availableFaultModels||[]).filter(model=>(\r
      !externalKeys.has(getFaultModelKey(model))&&!externalNameKeys.has(\`\${model?.name||''}::\${model?.layer||''}\`)\r
    ));\r
    S.availableFaultModels=[\r
      ...cloneDefaults(externalModels),\r
      ...cloneDefaults(remaining)\r
    ];\r
    if(!S.selectedFaultCatalogId||!getFaultCatalogModel(S.selectedFaultCatalogId)){\r
      S.selectedFaultCatalogId=S.availableFaultModels[0]?.id||'';\r
    }\r
  }\r
\r
  function getFaultCatalogSummary(){\r
    const summary={total:0,physical:0,electrical:0,protocol:0};\r
    getFaultTypeCatalogModels().forEach(model=>{\r
      summary.total+=1;\r
      if(Object.prototype.hasOwnProperty.call(summary,model.layer)){\r
        summary[model.layer]+=1;\r
      }\r
    });\r
    return summary;\r
  }\r
\r
  function setText(id,value){\r
    const el=document.getElementById(id);\r
    if(el){el.textContent=String(value);}\r
  }\r
\r
  function updateFaultCatalogHeader(){\r
    const summary=getFaultCatalogSummary();\r
    setText('ifm-total-count',summary.total);\r
    setText('ifm-physical-count',summary.physical);\r
    setText('ifm-electrical-count',summary.electrical);\r
    setText('ifm-protocol-count',summary.protocol);\r
    document.querySelectorAll('.ifm-filter').forEach(btn=>{\r
      btn.classList.toggle('on',(btn.dataset.faultLayer||'all')===(S.faultCatalogLayerFilter||'all'));\r
    });\r
    const search=document.getElementById('fault-catalog-search');\r
    if(search&&search.value!==(S.faultCatalogSearch||'')){\r
      search.value=S.faultCatalogSearch||'';\r
    }\r
  }\r
\r
  function searchableFaultText(model){\r
    return [\r
      model.name,\r
      model.desc,\r
      model.layer,\r
      model.modelClass,\r
      model.formula,\r
      model.recommendedModule,\r
      model.pythonFunction,\r
      ...(model.tags||[]),\r
      ...(model.typicalTargets||[]),\r
      ...(model.observableSignals||[]),\r
      JSON.stringify(model.defaultParameters||{})\r
    ].join(' ').toLowerCase();\r
  }\r
\r
  function getVisibleFaultCatalogModels(){\r
    const layer=S.faultCatalogLayerFilter||'all';\r
    const query=String(S.faultCatalogSearch||'').trim().toLowerCase();\r
    return (S.availableFaultModels||[]).filter(model=>{\r
      if(layer!=='all'&&model.layer!==layer){return false;}\r
      if(!query){return true;}\r
      return searchableFaultText(model).includes(query);\r
    });\r
  }\r
\r
  function formatFaultValue(value){\r
    if(value===null||value===undefined){return '持续';}\r
    if(typeof value==='boolean'){return value?'true':'false';}\r
    if(typeof value==='object'){return JSON.stringify(value);}\r
    return String(value);\r
  }\r
\r
  function renderChipList(values=[],className=''){\r
    if(!values.length){return '<span class="ifm-chip">未记录</span>';}\r
    return values.map(value=>\`<span class="ifm-chip \${className}">\${escapeHtml(String(value))}</span>\`).join('');\r
  }\r
\r
  function renderParamGrid(params={}){\r
    const entries=Object.entries(params);\r
    if(entries.length===0){return '<div class="ifm-param"><span>参数</span><strong>未配置</strong></div>';}\r
    return entries.map(([key,value])=>\`\r
      <div class="ifm-param">\r
        <span title="\${escapeHtml(key)}">\${escapeHtml(key)}</span>\r
        <strong>\${escapeHtml(formatFaultValue(value))}</strong>\r
      </div>\`).join('');\r
  }\r
\r
  function renderFaultTypeDetail(model){\r
    const detail=document.getElementById('fault-type-detail');\r
    if(!detail){return;}\r
    if(!model){\r
      detail.innerHTML='<div class="ifm-detail-empty">选择一个故障类型查看定量模型和平台实现方式。</div>';\r
      return;\r
    }\r
    const implementation=model.platformImplementation||{};\r
    const layerClass=\`ifm-chip--\${model.layer||'physical'}\`;\r
    detail.innerHTML=\`\r
      <div class="ifm-detail-head">\r
        <div class="ifm-detail-title-row">\r
          <div>\r
            <div class="ifm-detail-title">\${escapeHtml(model.name)}</div>\r
            <div class="ifm-item-tags">\r
              <span class="ifm-chip \${layerClass}">\${escapeHtml(getLayerLabel(model.layer))}</span>\r
              <span class="ifm-chip">\${escapeHtml(model.modelClass||model.tags?.[0]||'故障模型')}</span>\r
              <span class="ifm-chip">\${escapeHtml(model.origin==='fault-types'?'标准库':'模型包')}</span>\r
            </div>\r
          </div>\r
          <div class="ifm-detail-actions">\r
            <button type="button" class="ifm-locate-target" data-locate-fault-injection="\${escapeHtml(model.id)}">定位注入位置</button>\r
            \${getImportedFaultModel(model.id)?'<span class="ifm-state">已导入</span>':''}\r
          </div>\r
        </div>\r
        <div class="ifm-detail-desc">\${escapeHtml(model.desc||'未提供说明')}</div>\r
      </div>\r
      <div class="ifm-detail-body">\r
        <section class="ifm-detail-section">\r
          <div class="ifm-section-title">定量模型</div>\r
          <code class="ifm-formula">\${escapeHtml(model.formula||'未记录公式')}</code>\r
        </section>\r
        <section class="ifm-detail-section">\r
          <div class="ifm-section-title">默认参数</div>\r
          <div class="ifm-param-grid">\${renderParamGrid(model.defaultParameters||{})}</div>\r
        </section>\r
        <section class="ifm-detail-section">\r
          <div class="ifm-section-title">作用对象</div>\r
          <div class="ifm-text-list">\${renderChipList(model.typicalTargets||[],layerClass)}</div>\r
        </section>\r
        <section class="ifm-detail-section">\r
          <div class="ifm-section-title">平台实现</div>\r
          <div class="ifm-implementation">\r
            <div class="ifm-impl-row"><span>当前支持</span><strong>\${escapeHtml(implementation.currentSupport||'未标注')}</strong></div>\r
            <div class="ifm-impl-row"><span>现有模块</span><strong>\${escapeHtml(implementation.existingModule||'暂无')}</strong></div>\r
            <div class="ifm-impl-row"><span>推荐模块</span><strong>\${escapeHtml(implementation.recommendedModule||model.recommendedModule||'待设计')}</strong></div>\r
            <div class="ifm-impl-row"><span>Python 函数</span><strong>\${escapeHtml(implementation.pythonFunction||model.pythonFunction||'待实现')}</strong></div>\r
          </div>\r
        </section>\r
        <section class="ifm-detail-section">\r
          <div class="ifm-section-title">观测信号</div>\r
          <div class="ifm-text-list">\${renderChipList(model.observableSignals||[])}</div>\r
        </section>\r
        <section class="ifm-detail-section">\r
          <div class="ifm-section-title">展示方案</div>\r
          <div class="ifm-detail-desc" style="margin-top:0">\${escapeHtml(model.displayPlan||'未记录展示方案')}</div>\r
        </section>\r
      </div>\`;\r
  }\r
\r
  function renderFaultCatalogItem(model,imported){\r
    const icon=model.layer==='electrical'?'电':model.layer==='physical'?'物':'协';\r
    const layerClass=\`ifm-icon--\${model.layer||'physical'}\`;\r
    const chipClass=\`ifm-chip--\${model.layer||'physical'}\`;\r
    return \`\r
      <div class="ifm-icon \${layerClass}">\${icon}</div>\r
      <div style="min-width:0;flex:1">\r
        <div class="ifm-name">\${escapeHtml(model.name)}</div>\r
        <div class="ifm-meta">\${escapeHtml(buildFaultCatalogMeta(model))}</div>\r
        <div class="ifm-item-tags">\r
          <span class="ifm-chip \${chipClass}">\${escapeHtml(getLayerLabel(model.layer))}</span>\r
          <span class="ifm-chip">\${escapeHtml(model.modelClass||model.tags?.[0]||'Fault')}</span>\r
          \${model.recommendedModule?\`<span class="ifm-chip">\${escapeHtml(model.recommendedModule)}</span>\`:''}\r
        </div>\r
      </div>\r
      \${imported?'<span class="ifm-state">已导入</span>':''}\`;\r
  }\r
\r
  const __faultTypesInitializeFaultCatalog=initializeFaultCatalog;\r
  initializeFaultCatalog=function(){\r
    __faultTypesInitializeFaultCatalog();\r
    syncFaultTypeCatalogIntoAvailable();\r
  };\r
\r
  renderFaultCatalogList=function(){\r
    syncFaultTypeCatalogIntoAvailable();\r
    updateFaultCatalogHeader();\r
    const container=document.getElementById('ifm-list-container');\r
    if(!container){return;}\r
    const visible=getVisibleFaultCatalogModels();\r
    const selectedVisible=visible.some(model=>model.id===S.selectedFaultCatalogId);\r
    if(!selectedVisible&&visible.length){\r
      S.selectedFaultCatalogId=visible[0].id;\r
    }\r
    container.innerHTML='';\r
    setText('ifm-visible-count',visible.length);\r
    if(visible.length===0){\r
      container.innerHTML='<div class="ifm-empty">没有匹配的故障类型。请调整层级筛选或搜索关键词。</div>';\r
      renderFaultTypeDetail(null);\r
    }else{\r
      visible.forEach(model=>{\r
        const item=document.createElement('div');\r
        const imported=S.importedFaultModels.some(entry=>entry.id===model.id);\r
        item.className=\`ifm-item\${S.selectedFaultCatalogId===model.id?' on':''}\${imported?' is-imported':''}\`;\r
        item.dataset.faultId=model.id;\r
        item.innerHTML=renderFaultCatalogItem(model,imported);\r
        item.addEventListener('click',()=>selectFaultCatalogModel(model.id));\r
        container.appendChild(item);\r
      });\r
      renderFaultTypeDetail(getFaultCatalogModel(S.selectedFaultCatalogId));\r
    }\r
    const selected=getFaultCatalogModel(S.selectedFaultCatalogId);\r
    const hint=document.getElementById('ifm-sel-hint');\r
    if(hint){\r
      hint.textContent=selected\r
        ?\`已选：\${selected.name} · \${getLayerLabel(selected.layer)}\`\r
        :'已选：未选择故障模型';\r
    }\r
  };\r
\r
  selectFaultCatalogModel=function(id){\r
    S.selectedFaultCatalogId=id;\r
    renderFaultCatalogList();\r
  };\r
\r
  window.setFaultCatalogLayerFilter=function(layer='all'){\r
    S.faultCatalogLayerFilter=layer;\r
    renderFaultCatalogList();\r
  };\r
\r
  window.setFaultCatalogSearch=function(query=''){\r
    S.faultCatalogSearch=String(query||'');\r
    renderFaultCatalogList();\r
  };\r
\r
  const __faultTypesConfirmImportFault=confirmImportFault;\r
  confirmImportFault=function(){\r
    syncFaultTypeCatalogIntoAvailable();\r
    const selected=getFaultCatalogModel(S.selectedFaultCatalogId);\r
    if(!selected){\r
      return __faultTypesConfirmImportFault();\r
    }\r
    ensureImportedFaultModel(selected);\r
    closeOv('ov-ifm');\r
    renderFaultCatalogList();\r
    toast(\`故障模型“\${selected.name}”已导入工作区\`,'s');\r
    updateUI();\r
  };\r
\r
  const __faultTypesApplyPackage=window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__;\r
  window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__=function(pkg,prepared){\r
    const result=__faultTypesApplyPackage?.(pkg,prepared);\r
    syncFaultTypeCatalogIntoAvailable();\r
    renderFaultCatalogList();\r
    updateUI();\r
    return result;\r
  };\r
\r
  function getFaultParam(model,key,fallback){\r
    const raw=model?.defaultParameters?.[key];\r
    if(raw===null||raw===undefined||raw===''){return fallback;}\r
    if(typeof raw==='number'){return raw;}\r
    if(typeof raw==='boolean'){return raw;}\r
    const parsed=parseScalar(raw,Number.NaN);\r
    return Number.isFinite(parsed)?parsed:raw;\r
  }\r
\r
  function isFaultTimeActive(model,time){\r
    const start=Number(getFaultParam(model,'start',0))||0;\r
    const duration=model?.defaultParameters?.duration;\r
    if(time<start){return false;}\r
    if(duration===null||duration===undefined||duration===''){return true;}\r
    const parsedDuration=Number(duration);\r
    return !Number.isFinite(parsedDuration)||time<=start+parsedDuration;\r
  }\r
\r
  const __faultTypesApplyElectricalFault=applyElectricalFault;\r
  applyElectricalFault=function(node,inputValue,outputValue,time){\r
    if(!node.injectedFault){return outputValue;}\r
    const model=getImportedFaultModel(node.injectedFault.modelId||'');\r
    if(!model||model.origin!=='fault-types'||!isFaultTimeActive(model,time)){\r
      return __faultTypesApplyElectricalFault(node,inputValue,outputValue,time);\r
    }\r
    const state=SIM.actual.nodeStates[node.id]||(SIM.actual.nodeStates[node.id]={});\r
    const behavior=model.runtimeBehavior||'catalog_only';\r
    if(behavior==='additive_bias'||behavior==='parameter_bias'){\r
      return outputValue+Number(getFaultParam(model,'offset',getFaultParam(model,'delta_p',0.15))||0);\r
    }\r
    if(behavior==='scale'){\r
      return outputValue*Number(getFaultParam(model,'scale',1.2)||1.2);\r
    }\r
    if(behavior==='noise'){\r
      return outputValue+noiseAt(getNodeSeed(node.id),SIM.stepIndex,time)*Number(getFaultParam(model,'std',0.08)||0.08);\r
    }\r
    if(behavior==='colored_noise'){\r
      const alpha=Number(getFaultParam(model,'alpha',0.9)||0.9);\r
      const std=Number(getFaultParam(model,'std',0.03)||0.03);\r
      state.catalogColoredNoise=alpha*(state.catalogColoredNoise||0)+noiseAt(getNodeSeed(node.id),SIM.stepIndex,time)*std;\r
      return outputValue+state.catalogColoredNoise;\r
    }\r
    if(behavior==='freeze'){\r
      if(!Number.isFinite(state.catalogFreezeValue)){\r
        state.catalogFreezeValue=outputValue;\r
      }\r
      return state.catalogFreezeValue;\r
    }\r
    if(behavior==='jump_or_invert'){\r
      const inverted=getFaultParam(model,'invert',true);\r
      const jump=Number(getFaultParam(model,'jump',0.5)||0.5);\r
      return (inverted===false?outputValue:-outputValue)+jump;\r
    }\r
    if(behavior==='intermittent'){\r
      const period=Math.max(Number(getFaultParam(model,'period',4)||4),SIM.stepSize);\r
      const duty=Math.max(0,Math.min(1,Number(getFaultParam(model,'duty',0.25)||0.25)));\r
      const phase=((time-(Number(getFaultParam(model,'start',0))||0))%period)/period;\r
      return phase<=duty?outputValue+noiseAt(getNodeSeed(node.id),SIM.stepIndex,time)*0.2:outputValue;\r
    }\r
    return __faultTypesApplyElectricalFault(node,inputValue,outputValue,time);\r
  };\r
\r
  syncFaultTypeCatalogIntoAvailable();\r
  renderFaultCatalogList();\r
  Object.assign(window,{\r
    confirmImportFault,\r
    getFaultTypeCatalogModels,\r
    initializeFaultCatalog,\r
    renderFaultCatalogList,\r
    selectFaultCatalogModel\r
  });\r
})();\r
\r
// --- 故障库参数化注入桥接 ---\r
(function installFaultInjectionRuntimeBridge(){\r
  function getFaultRuntimeApi(){\r
    return window.__GZ_FAULT_INJECTION_RUNTIME__||null;\r
  }\r
\r
  function collectAllCanvasItems(kind){\r
    ensureWorkbenchCanvasState();\r
    const items=[];\r
    const seen=new Set();\r
    const key=kind==='edges'?'edges':'nodes';\r
    const append=(collection)=>{\r
      if(!Array.isArray(collection)){return;}\r
      collection.forEach(item=>{\r
        if(!item||!item.id||seen.has(item.id)){return;}\r
        seen.add(item.id);\r
        items.push(item);\r
      });\r
    };\r
    append(kind==='edges'?S.modelEdges:S.modelNodes);\r
    Object.values(S.canvases||{}).forEach(canvas=>append(canvas?.[key]));\r
    return items;\r
  }\r
\r
  function findNodeEverywhere(nodeId){\r
    return collectAllCanvasItems('nodes').find(node=>node.id===nodeId)||null;\r
  }\r
\r
  function findEdgeEverywhere(edgeId){\r
    return collectAllCanvasItems('edges').find(edge=>edge.id===edgeId)||null;\r
  }\r
\r
  function getFaultModelForInjected(injectedFault){\r
    if(!injectedFault){return null;}\r
    return getImportedFaultModel(injectedFault.modelId||'')||injectedFault;\r
  }\r
\r
  function formatBridgeValue(value){\r
    if(value===null||value===undefined||value===''){return '';}\r
    if(typeof value==='object'){return JSON.stringify(value);}\r
    return String(value);\r
  }\r
\r
  function getFaultParameterDraftKey(scope,modelId,targetId=''){\r
    return \`\${scope||'fault'}::\${modelId||'unknown'}::\${targetId||''}\`;\r
  }\r
\r
  function ensureFaultParameterDrafts(){\r
    if(!S.faultParameterDrafts||typeof S.faultParameterDrafts!=='object'){\r
      S.faultParameterDrafts={};\r
    }\r
    return S.faultParameterDrafts;\r
  }\r
\r
  function getExistingInjectedParameters(scope,modelId,targetId){\r
    if(scope==='protocol'){\r
      const edge=findEdgeEverywhere(targetId);\r
      return edge?.injectedFault?.modelId===modelId?(edge.injectedFault.parameters||{}):{};\r
    }\r
    if(scope==='electrical'||scope==='library'){\r
      const node=findNodeEverywhere(targetId);\r
      return node?.injectedFault?.modelId===modelId?(node.injectedFault.parameters||{}):{};\r
    }\r
    return {};\r
  }\r
\r
  function getFaultParameterDraft(scope,model,targetId=''){\r
    const api=getFaultRuntimeApi();\r
    const key=getFaultParameterDraftKey(scope,model?.id,targetId);\r
    const drafts=ensureFaultParameterDrafts();\r
    if(!drafts[key]){\r
      drafts[key]={\r
        ...(api?.resolveFaultParameters?.(model)||model?.defaultParameters||{}),\r
        ...getExistingInjectedParameters(scope,model?.id,targetId)\r
      };\r
    }\r
    return drafts[key];\r
  }\r
\r
  function updateFaultParameterDraft(scope,modelId,targetId,paramKey,value){\r
    const key=getFaultParameterDraftKey(scope,modelId,targetId);\r
    const drafts=ensureFaultParameterDrafts();\r
    drafts[key]={...(drafts[key]||{}),[paramKey]:value};\r
  }\r
\r
  function renderFaultParameterEditor(model,scope,targetId=''){\r
    if(!model){return '';}\r
    const params=getFaultParameterDraft(scope,model,targetId);\r
    const entries=Object.entries(params);\r
    if(entries.length===0){\r
      return '';\r
    }\r
    return \`\r
      <section class="ifm-detail-section fault-param-editor" data-fault-param-scope="\${escapeHtml(scope)}" data-fault-param-model="\${escapeHtml(model.id||'')}" data-fault-param-target="\${escapeHtml(targetId||'')}">\r
        <div class="ifm-section-title">注入参数</div>\r
        <div class="ifm-param-grid">\r
          \${entries.map(([key,value])=>\`\r
            <label class="props-field">\r
              <span>\${escapeHtml(key)}</span>\r
              <input data-fault-param-key="\${escapeHtml(key)}" value="\${escapeHtml(formatBridgeValue(value))}">\r
            </label>\r
          \`).join('')}\r
        </div>\r
        <div class="props-help">这些参数会随 injectedFault 写入节点或 CAN 边，仿真时优先覆盖故障库默认值。</div>\r
      </section>\`;\r
  }\r
\r
  function bindFaultParameterEditor(host){\r
    host?.querySelectorAll?.('[data-fault-param-key]').forEach(input=>{\r
      const box=input.closest('[data-fault-param-scope]');\r
      if(!box){return;}\r
      input.addEventListener('input',()=>{\r
        updateFaultParameterDraft(\r
          box.dataset.faultParamScope||'fault',\r
          box.dataset.faultParamModel||'',\r
          box.dataset.faultParamTarget||'',\r
          input.dataset.faultParamKey||'',\r
          input.value\r
        );\r
      });\r
    });\r
  }\r
\r
  function readFaultParameterValues(hostId){\r
    const host=document.getElementById(hostId);\r
    const values={};\r
    host?.querySelectorAll?.('[data-fault-param-key]').forEach(input=>{\r
      values[input.dataset.faultParamKey||'']=input.value;\r
    });\r
    return values;\r
  }\r
\r
  function appendParameterEditor(hostId,model,scope,targetId=''){\r
    const host=document.getElementById(hostId);\r
    if(!host||!model){return;}\r
    host.querySelector('[data-fault-param-scope]')?.remove();\r
    const html=renderFaultParameterEditor(model,scope,targetId);\r
    if(html){\r
      host.insertAdjacentHTML('beforeend',html);\r
      bindFaultParameterEditor(host);\r
    }\r
  }\r
\r
  function getRuntimePayload(model,parameterOverrides={}){\r
    const api=getFaultRuntimeApi();\r
    if(api?.createInjectedFaultPayload){\r
      return api.createInjectedFaultPayload(model,parameterOverrides);\r
    }\r
    return {\r
      modelId:model?.id||'',\r
      name:model?.name||'故障模型',\r
      layer:model?.layer||'electrical',\r
      tags:cloneDefaults(model?.tags||[]),\r
      desc:model?.desc||'',\r
      faultKind:model?.faultKind||model?.modelClass||'',\r
      faultCode:model?.faultCode||'',\r
      parameters:{...(model?.defaultParameters||{}),...parameterOverrides}\r
    };\r
  }\r
\r
  function appendRuntimeFaultBinding(target,model,payload,targetKind){\r
    if(!target||!payload){return;}\r
    const api=getFaultRuntimeApi();\r
    if(api?.createFaultBinding&&api?.appendFaultBinding){\r
      const binding=api.createFaultBinding(model||payload,payload,{\r
        targetId:target.id||'',\r
        targetKind:targetKind||(target.sourceNodeId&&target.targetNodeId?'edge':'node')\r
      });\r
      api.appendFaultBinding(target,binding);\r
      return;\r
    }\r
    const propagationMode=payload.layer==='protocol'?'protocolEdge':'signalTransform';\r
    const binding={\r
      bindingId:\`\${payload.modelId||payload.name||'fault'}::\${target.id||''}\`,\r
      faultModelId:payload.modelId||'',\r
      name:payload.name||'故障模型',\r
      layer:payload.layer||model?.layer||'electrical',\r
      runtimeBehavior:payload.runtimeBehavior||'',\r
      parameters:cloneDefaults(payload.parameters||{}),\r
      targetKind:targetKind||(target.sourceNodeId&&target.targetNodeId?'edge':'node'),\r
      targetId:target.id||'',\r
      visualRole:'fault-source',\r
      propagationMode,\r
      canPropagate:propagationMode!=='localOnly',\r
      active:true,\r
      injectedFault:payload\r
    };\r
    target.faultBindings=Array.isArray(target.faultBindings)?target.faultBindings:[];\r
    const index=target.faultBindings.findIndex(item=>item.bindingId===binding.bindingId||item.faultModelId===binding.faultModelId);\r
    if(index>=0){target.faultBindings[index]=binding;}\r
    else{target.faultBindings.push(binding);}\r
  }\r
\r
  function injectFaultIntoNode(target,model,parameterOverrides={}){\r
    if(!target||!model){return false;}\r
    const payload=getRuntimePayload(model,parameterOverrides);\r
    target.injectedFault=payload;\r
    appendRuntimeFaultBinding(target,model,payload,'node');\r
    if(!S.faultedBlks.includes(target.id)){\r
      S.faultedBlks.push(target.id);\r
    }\r
    markTopologyDirty('fault');\r
    return true;\r
  }\r
\r
  function injectFaultIntoEdge(target,model,parameterOverrides={}){\r
    if(!target||!model){return false;}\r
    const payload=getRuntimePayload({...model,layer:'protocol'},parameterOverrides);\r
    target.injectedFault=payload;\r
    appendRuntimeFaultBinding(target,{...model,layer:'protocol'},payload,'edge');\r
    markTopologyDirty('fault');\r
    return true;\r
  }\r
\r
  function refreshAfterBridgeInjection(target){\r
    renderFaultCatalogList();\r
    renderModelNodes();\r
    if(target?.sourceNodeId&&target?.targetNodeId){\r
      renderEdges();\r
      if(S.selEdge===target.id){renderPropertyPanel(target);}\r
    }else if(target?.id&&S.selBlk===target.id){\r
      renderPropertyPanel(target);\r
    }\r
    updateUI();\r
  }\r
\r
  const __bridgeRenderFaultCatalogList=renderFaultCatalogList;\r
  renderFaultCatalogList=function(){\r
    const result=__bridgeRenderFaultCatalogList();\r
    const selected=getFaultCatalogModel(S.selectedFaultCatalogId);\r
    appendParameterEditor('fault-type-detail',selected,'library',S.selBlk||S.selEdge||'');\r
    return result;\r
  };\r
\r
  const __bridgeRenderElectricalInjectModal=renderElectricalInjectModal;\r
  renderElectricalInjectModal=function(){\r
    const result=__bridgeRenderElectricalInjectModal();\r
    appendParameterEditor('einj-detail-body',getCurrentElectricalSelection(),'electrical',S.injectTargetId||'');\r
    return result;\r
  };\r
\r
  const __bridgeRenderProtocolInjectModal=renderProtocolInjectModal;\r
  renderProtocolInjectModal=function(){\r
    const result=__bridgeRenderProtocolInjectModal();\r
    appendParameterEditor('pinj-detail-body',getCurrentProtocolSelection(),'protocol',S.protocolInjectTargetId||'');\r
    return result;\r
  };\r
\r
  const __bridgeConfirmElectricalFaultInjection=confirmElectricalFaultInjection;\r
  confirmElectricalFaultInjection=function(){\r
    const targetId=S.injectTargetId;\r
    const parameterOverrides=readFaultParameterValues('einj-detail-body');\r
    const result=__bridgeConfirmElectricalFaultInjection();\r
    const target=findNodeEverywhere(targetId);\r
    const model=getFaultModelForInjected(target?.injectedFault);\r
    if(target&&model){\r
      target.injectedFault=getRuntimePayload({...model,layer:'electrical'},parameterOverrides);\r
      appendRuntimeFaultBinding(target,{...model,layer:'electrical'},target.injectedFault,'node');\r
      refreshAfterBridgeInjection(target);\r
    }\r
    return result;\r
  };\r
\r
  const __bridgeConfirmProtocolFaultInjection=confirmProtocolFaultInjection;\r
  confirmProtocolFaultInjection=function(){\r
    const targetId=S.protocolInjectTargetId;\r
    const parameterOverrides=readFaultParameterValues('pinj-detail-body');\r
    const result=__bridgeConfirmProtocolFaultInjection();\r
    const target=findEdgeEverywhere(targetId);\r
    const model=getFaultModelForInjected(target?.injectedFault);\r
    if(target&&model){\r
      target.injectedFault=getRuntimePayload({...model,layer:'protocol'},parameterOverrides);\r
      appendRuntimeFaultBinding(target,{...model,layer:'protocol'},target.injectedFault,'edge');\r
      refreshAfterBridgeInjection(target);\r
    }\r
    return result;\r
  };\r
\r
  const __bridgeConfirmImportFault=confirmImportFault;\r
  confirmImportFault=function(){\r
    const selected=getFaultCatalogModel(S.selectedFaultCatalogId);\r
    if(!selected){\r
      return __bridgeConfirmImportFault();\r
    }\r
    const imported=ensureImportedFaultModel(selected);\r
    const api=getFaultRuntimeApi();\r
    const target=api?.findCompatibleFaultTarget?.(imported,{\r
      nodes:collectAllCanvasItems('nodes'),\r
      edges:collectAllCanvasItems('edges'),\r
      selectedNodeId:S.selBlk,\r
      selectedEdgeId:S.selEdge\r
    });\r
    const parameterOverrides=readFaultParameterValues('fault-type-detail');\r
    let injectedTarget=null;\r
    if(target?.kind==='edge'){\r
      const edge=findEdgeEverywhere(target.id);\r
      if(edge&&injectFaultIntoEdge(edge,imported,parameterOverrides)){\r
        injectedTarget=edge;\r
      }\r
    }else if(target?.kind==='node'){\r
      const node=findNodeEverywhere(target.id);\r
      if(node&&injectFaultIntoNode(node,imported,parameterOverrides)){\r
        injectedTarget=node;\r
      }\r
    }\r
\r
    renderFaultCatalogList();\r
    if(injectedTarget){\r
      refreshAfterBridgeInjection(injectedTarget);\r
      const targetName=injectedTarget.sourceNodeId\r
        ?'当前 CAN 总线'\r
        :(injectedTarget.props?.name||injectedTarget.id);\r
      toast(\`故障模型“\${imported.name}”已导入并注入到 \${targetName}\`,'s');\r
    }else{\r
      toast(\`故障模型“\${imported.name}”已导入工作区；请选择模块或 CAN 总线后可继续注入\`,'s');\r
      updateUI();\r
    }\r
  };\r
\r
  function renderInjectedFaultParameterSummary(target){\r
    const pd=document.getElementById('pd');\r
    if(!pd||!target?.injectedFault){return;}\r
    pd.querySelector('[data-fault-runtime-summary]')?.remove();\r
    const model=getFaultModelForInjected(target.injectedFault)||target.injectedFault;\r
    const api=getFaultRuntimeApi();\r
    const params=api?.resolveFaultParameters\r
      ?api.resolveFaultParameters(model,target.injectedFault)\r
      :{...(model?.defaultParameters||{}),...(target.injectedFault.parameters||{})};\r
    const entries=Object.entries(params);\r
    const behavior=api?.getFaultRuntimeBehavior?.(model)||target.injectedFault.runtimeBehavior||'';\r
    const html=\`\r
      <div class="pgroup" data-fault-runtime-summary>\r
        <div class="pglbl">故障运行配置</div>\r
        <div class="prow"><span class="pk">故障名称</span><span class="pv pv-fault">\${escapeHtml(target.injectedFault.name||model?.name||'故障模型')}</span></div>\r
        <div class="prow"><span class="pk">故障层级</span><span class="pv">\${escapeHtml(getLayerLabel(target.injectedFault.layer||model?.layer))}</span></div>\r
        \${behavior?\`<div class="prow"><span class="pk">运行行为</span><span class="pv">\${escapeHtml(behavior)}</span></div>\`:''}\r
        \${model?.platformImplementation?.recommendedModule?\`<div class="prow"><span class="pk">推荐模块</span><span class="pv">\${escapeHtml(model.platformImplementation.recommendedModule)}</span></div>\`:''}\r
        \${model?.platformImplementation?.pythonFunction?\`<div class="prow"><span class="pk">Python</span><span class="pv">\${escapeHtml(model.platformImplementation.pythonFunction)}</span></div>\`:''}\r
        \${entries.length?\`<div class="ifm-param-grid" style="margin-top:8px">\${entries.map(([key,value])=>\`\r
          <div class="ifm-param"><span>\${escapeHtml(key)}</span><strong>\${escapeHtml(formatBridgeValue(value)||'持续')}</strong></div>\r
        \`).join('')}</div>\`:''}\r
      </div>\`;\r
    const groups=pd.querySelectorAll('.pgroup');\r
    const anchor=groups[1]||groups[0];\r
    if(anchor){anchor.insertAdjacentHTML('afterend',html);}\r
    else{pd.insertAdjacentHTML('afterbegin',html);}\r
  }\r
\r
  const __bridgeRenderPropertyPanel=renderPropertyPanel;\r
  renderPropertyPanel=function(node){\r
    const result=__bridgeRenderPropertyPanel(node);\r
    if(node?.injectedFault){\r
      renderInjectedFaultParameterSummary(node);\r
    }\r
    return result;\r
  };\r
\r
  function getExecutableFaultBindings(target,api){\r
    const bindings=api?.getFaultBindings?.(target,{activeOnly:true})||[];\r
    return bindings.filter(binding=>{\r
      const model=getFaultModelForInjected(binding.injectedFault)||getImportedFaultModel(binding.faultModelId||'')||binding;\r
      return Boolean(binding.runtimeBehavior||api?.getFaultRuntimeBehavior?.(model)||api?.getFaultRuntimeBehavior?.(binding.injectedFault));\r
    });\r
  }\r
\r
  const __bridgeApplyElectricalFault=applyElectricalFault;\r
  applyElectricalFault=function(node,inputValue,outputValue,time){\r
    const api=getFaultRuntimeApi();\r
    if(!api||(!node?.injectedFault&&!api.hasActiveFaultBinding?.(node))){\r
      return __bridgeApplyElectricalFault(node,inputValue,outputValue,time);\r
    }\r
    const executableBindings=getExecutableFaultBindings(node,api);\r
    if(api.applyScalarFaultBindings&&executableBindings.length){\r
      const state=SIM.actual.nodeStates[node.id]||(SIM.actual.nodeStates[node.id]={});\r
      return api.applyScalarFaultBindings(outputValue,{\r
        target:{...node,faultBindings:executableBindings},\r
        resolveFaultModel:(binding)=>getFaultModelForInjected(binding.injectedFault)||getImportedFaultModel(binding.faultModelId||'')||binding,\r
        stateBucket:state,\r
        time,\r
        dt:SIM.stepSize,\r
        stepIndex:SIM.stepIndex,\r
        seed:getNodeSeed(node.id)\r
      });\r
    }\r
    const model=getFaultModelForInjected(node.injectedFault);\r
    const behavior=api.getFaultRuntimeBehavior?.(model)||api.getFaultRuntimeBehavior?.(node.injectedFault);\r
    if(!behavior||behavior==='fixed_delay'||behavior==='packet_loss'||behavior==='jitter_delay'||behavior==='burst_loss'){\r
      return __bridgeApplyElectricalFault(node,inputValue,outputValue,time);\r
    }\r
    const state=SIM.actual.nodeStates[node.id]||(SIM.actual.nodeStates[node.id]={});\r
    return api.applyScalarFault(outputValue,{\r
      faultModel:model,\r
      injectedFault:node.injectedFault,\r
      behavior,\r
      state,\r
      time,\r
      dt:SIM.stepSize,\r
      stepIndex:SIM.stepIndex,\r
      seed:getNodeSeed(node.id)\r
    });\r
  };\r
\r
  const __bridgeTransmitEdgeSignal=transmitEdgeSignal;\r
  transmitEdgeSignal=function(edge,value,modeKey,time){\r
    const api=getFaultRuntimeApi();\r
    const activeBindings=api?.getFaultBindings?.(edge,{activeOnly:true})||[];\r
    const executableBindings=getExecutableFaultBindings(edge,api);\r
    const hasProtocolFault=edge?.injectedFault?.layer==='protocol'||activeBindings.some(binding=>binding.layer==='protocol'||binding.propagationMode==='protocolEdge');\r
    if(api&&modeKey==='actual'&&hasProtocolFault&&!Array.isArray(value)){\r
      const bucket=SIM.actual;\r
      const edgeState=ensureEdgeRuntime(bucket,edge);\r
      const base=Number.isFinite(value)?value:0;\r
      if(api.applyScalarFaultBindings&&executableBindings.length){\r
        const nextValue=api.applyScalarFaultBindings(base,{\r
          target:{...edge,faultBindings:executableBindings},\r
          resolveFaultModel:(binding)=>getFaultModelForInjected(binding.injectedFault)||getImportedFaultModel(binding.faultModelId||'')||binding,\r
          stateBucket:edgeState,\r
          time,\r
          dt:SIM.stepSize,\r
          stepIndex:SIM.stepIndex,\r
          seed:getNodeSeed(edge.id)\r
        });\r
        edgeState.lastOutput=nextValue;\r
        pushLimitedSample(edgeState.history,base,40);\r
        return nextValue;\r
      }\r
      const model=getFaultModelForInjected(edge.injectedFault);\r
      const behavior=api.getFaultRuntimeBehavior?.(model)||api.getFaultRuntimeBehavior?.(edge.injectedFault);\r
      if(behavior){\r
        const nextValue=api.applyScalarFault(base,{\r
          faultModel:model,\r
          injectedFault:edge.injectedFault,\r
          behavior,\r
          state:edgeState,\r
          time,\r
          dt:SIM.stepSize,\r
          stepIndex:SIM.stepIndex,\r
          seed:getNodeSeed(edge.id)\r
        });\r
        edgeState.lastOutput=nextValue;\r
        pushLimitedSample(edgeState.history,base,40);\r
        return nextValue;\r
      }\r
    }\r
    return __bridgeTransmitEdgeSignal(edge,value,modeKey,time);\r
  };\r
\r
  Object.assign(window,{\r
    confirmElectricalFaultInjection,\r
    confirmImportFault,\r
    confirmProtocolFaultInjection,\r
    renderElectricalInjectModal,\r
    renderFaultCatalogList,\r
    renderPropertyPanel,\r
    renderProtocolInjectModal,\r
    updateFaultParameterDraft\r
  });\r
})();\r
\r
// --- 最终故障注入入口收口：按当前系统过滤故障库 ---\r
(function(){\r
  const UAV_FAULT_LIBRARY_ID='uav-flight-control-faults';\r
  const UAV_SYSTEM_FAMILY='uav-flight-control';\r
\r
  function getCompatibilityApi(){\r
    return window.__GZ_FAULT_INJECTION_RUNTIME__?.compatibility||null;\r
  }\r
\r
  function html(value){\r
    if(typeof escapeHtml==='function'){\r
      return escapeHtml(String(value??''));\r
    }\r
    return String(value??'').replace(/[&<>"']/g,(ch)=>({\r
      '&':'&amp;',\r
      '<':'&lt;',\r
      '>':'&gt;',\r
      '"':'&quot;',\r
      "'":'&#39;'\r
    }[ch]));\r
  }\r
\r
  function setTextById(id,value){\r
    const el=document.getElementById(id);\r
    if(el){el.textContent=String(value??'');}\r
  }\r
\r
  function normalizeFaultInjectionCopy(){\r
    const btn=document.getElementById('btn-imp-flt');\r
    if(btn){btn.textContent='注入故障';}\r
    const title=document.querySelector('#ov-ifm .mtitle');\r
    if(title){title.textContent='注入故障';}\r
    const sub=document.querySelector('#ov-ifm .ifm-modal-sub');\r
    if(sub){\r
      sub.textContent='按当前系统模型筛选匹配的故障库，可选择一个或多个故障并配置参数后注入到画布组件或 CAN 边。';\r
    }\r
    const listHead=document.querySelector('#ov-ifm .ifm-list-head span');\r
    if(listHead){listHead.textContent='可注入故障';}\r
    const buildHint=document.querySelector('#ov-ifm .ifm-build-hint');\r
    if(buildHint){\r
      buildHint.textContent='当前库为无人机飞控系统故障库，仅在导入兼容飞控模型后可注入；其他系统需单独设计故障库。';\r
    }\r
    const ok=document.querySelector('#ov-ifm .btn-ok-r');\r
    if(ok){ok.textContent='确认注入';}\r
  }\r
\r
  function buildActiveFaultCatalog(models){\r
    return {\r
      libraryId:UAV_FAULT_LIBRARY_ID,\r
      systemFamily:UAV_SYSTEM_FAMILY,\r
      faultTypes:Array.isArray(models)?models:[]\r
    };\r
  }\r
\r
  function collectCatalogCandidateModels(){\r
    if(typeof window.getFaultTypeCatalogModels==='function'){\r
      const catalogModels=window.getFaultTypeCatalogModels();\r
      if(Array.isArray(catalogModels)&&catalogModels.length>0){\r
        return catalogModels;\r
      }\r
    }\r
    const byId=new Map();\r
    const append=(items)=>{\r
      if(!Array.isArray(items)){return;}\r
      items.forEach((model)=>{\r
        if(!model||typeof model!=='object'){return;}\r
        const key=model.id||\`\${model.name||''}::\${model.layer||''}\`;\r
        if(key&&!byId.has(key)){\r
          byId.set(key,model);\r
        }\r
      });\r
    };\r
    append(S.availableFaultModels||[]);\r
    return Array.from(byId.values());\r
  }\r
\r
  function getCompatibleFaultCatalogModels(){\r
    const api=getCompatibilityApi();\r
    const candidates=collectCatalogCandidateModels();\r
    if(!api||!S.activeModelPackage){\r
      return [];\r
    }\r
    return api.filterCompatibleFaultTypes?.(buildActiveFaultCatalog(candidates),S.activeModelPackage)||[];\r
  }\r
\r
  function getVisibleCompatibleFaultModels(models){\r
    const layer=S.faultCatalogLayerFilter||'all';\r
    const query=String(S.faultCatalogSearch||'').trim().toLowerCase();\r
    return models.filter((model)=>{\r
      if(layer!=='all'&&model.layer!==layer){return false;}\r
      if(!query){return true;}\r
      return [\r
        model.id,\r
        model.name,\r
        model.layer,\r
        model.modelClass,\r
        model.desc,\r
        model.description,\r
        model.formula,\r
        model.platformImplementation?.recommendedModule,\r
        model.platformImplementation?.pythonFunction,\r
        ...(Array.isArray(model.typicalTargets)?model.typicalTargets:[]),\r
        ...(Array.isArray(model.observableSignals)?model.observableSignals:[])\r
      ].filter(Boolean).join(' ').toLowerCase().includes(query);\r
    });\r
  }\r
\r
  function updateFaultCatalogCompatibilitySummary(compatibleModels){\r
    const summary={total:0,physical:0,electrical:0,protocol:0};\r
    compatibleModels.forEach((model)=>{\r
      summary.total+=1;\r
      if(summary[model.layer]!==undefined){\r
        summary[model.layer]+=1;\r
      }\r
    });\r
    setTextById('ifm-total-count',summary.total);\r
    setTextById('ifm-physical-count',summary.physical);\r
    setTextById('ifm-electrical-count',summary.electrical);\r
    setTextById('ifm-protocol-count',summary.protocol);\r
    setTextById('ifm-visible-count',getVisibleCompatibleFaultModels(compatibleModels).length);\r
  }\r
\r
  function countSystemNodes(){\r
    const seen=new Set();\r
    const append=(items)=>{\r
      if(!Array.isArray(items)){return;}\r
      items.forEach((node)=>{\r
        if(node?.id){seen.add(node.id);}\r
      });\r
    };\r
    append(S.modelNodes);\r
    if(S.canvases&&typeof S.canvases==='object'){\r
      Object.values(S.canvases).forEach((canvas)=>append(canvas?.nodes));\r
    }\r
    return seen.size;\r
  }\r
\r
  function renderCompatibilityEmptyState(message){\r
    const container=document.getElementById('ifm-list-container');\r
    if(container){\r
      container.innerHTML=\`<div class="ifm-empty">\${html(message)}</div>\`;\r
    }\r
    const detail=document.getElementById('fault-type-detail');\r
    if(detail){\r
      detail.innerHTML=\`<div class="ifm-detail-empty">\${html(message)}</div>\`;\r
    }\r
    const hint=document.getElementById('ifm-sel-hint');\r
    if(hint){\r
      hint.textContent='已选：当前系统没有可注入的飞控故障';\r
    }\r
    const ok=document.querySelector('#ov-ifm .btn-ok-r');\r
    if(ok){ok.disabled=true;}\r
  }\r
\r
  const __finalScopedApplyFlightModelPackage=window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__;\r
  if(typeof __finalScopedApplyFlightModelPackage==='function'){\r
    window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__=function(pkg,prepared){\r
      const result=__finalScopedApplyFlightModelPackage(pkg,prepared);\r
      if(result?.ok!==false&&S.activeModelPackage){\r
        const descriptor=prepared?.descriptor||{};\r
        const systemFamily=pkg?.systemFamily??descriptor.systemFamily??null;\r
        const hasPackageLibraries=Array.isArray(pkg?.supportedFaultLibraries);\r
        const hasDescriptorLibraries=Array.isArray(descriptor.supportedFaultLibraries)&&descriptor.supportedFaultLibraries.length>0;\r
        const supportedFaultLibraries=hasPackageLibraries\r
          ? cloneDefaults(pkg.supportedFaultLibraries)\r
          : hasDescriptorLibraries\r
            ? cloneDefaults(descriptor.supportedFaultLibraries)\r
            : undefined;\r
        if(systemFamily){S.activeModelPackage.systemFamily=systemFamily;}\r
        if(supportedFaultLibraries){S.activeModelPackage.supportedFaultLibraries=supportedFaultLibraries;}\r
      }\r
      return result;\r
    };\r
  }\r
\r
  const __finalScopedRenderFaultCatalogList=renderFaultCatalogList;\r
  renderFaultCatalogList=function(){\r
    normalizeFaultInjectionCopy();\r
    const compatibleModels=getCompatibleFaultCatalogModels();\r
    const visibleCompatible=getVisibleCompatibleFaultModels(compatibleModels);\r
    const compatibleIds=new Set(compatibleModels.map((model)=>model.id));\r
\r
    if(!compatibleIds.has(S.selectedFaultCatalogId)){\r
      S.selectedFaultCatalogId=visibleCompatible[0]?.id||compatibleModels[0]?.id||'';\r
    }\r
\r
    const result=__finalScopedRenderFaultCatalogList();\r
    updateFaultCatalogCompatibilitySummary(compatibleModels);\r
\r
    const ok=document.querySelector('#ov-ifm .btn-ok-r');\r
    if(ok){ok.disabled=false;}\r
\r
    if(!S.activeModelPackage){\r
      S.availableFaultModels=[];\r
      renderCompatibilityEmptyState('当前系统没有模型包元数据，无法匹配无人机飞控故障库。');\r
      return result;\r
    }\r
\r
    if(compatibleModels.length===0){\r
      S.availableFaultModels=[];\r
      S.selectedFaultCatalogId='';\r
      renderCompatibilityEmptyState('当前系统不支持无人机飞控故障库，请为该系统设计对应的故障库。');\r
      return result;\r
    }\r
\r
    document.querySelectorAll('#ifm-list-container [data-fault-id]').forEach((item)=>{\r
      if(!compatibleIds.has(item.dataset.faultId)){\r
        item.remove();\r
      }\r
    });\r
\r
    if(visibleCompatible.length===0){\r
      const container=document.getElementById('ifm-list-container');\r
      if(container){\r
        container.innerHTML='<div class="ifm-empty">当前筛选条件下没有可注入故障。</div>';\r
      }\r
    }\r
\r
    const selected=compatibleModels.find((model)=>model.id===S.selectedFaultCatalogId);\r
    if(!selected){\r
      const detail=document.getElementById('fault-type-detail');\r
      if(detail){\r
        detail.innerHTML='<div class="ifm-detail-empty">请选择一个与当前飞控系统匹配的故障。</div>';\r
      }\r
    }\r
\r
    return result;\r
  };\r
\r
  const __finalScopedDoImportFault=doImportFault;\r
  doImportFault=function(){\r
    normalizeFaultInjectionCopy();\r
    if(!S.sysLoaded){\r
      toast('请先导入或新建系统模型','w');\r
      return;\r
    }\r
    if(countSystemNodes()===0){\r
      toast('请先在系统建模页拖入组件','w');\r
      return;\r
    }\r
\r
    const compatibleModels=getCompatibleFaultCatalogModels();\r
    renderFaultCatalogList();\r
    openOv('ov-ifm');\r
\r
    if(compatibleModels.length===0){\r
      toast('当前系统未绑定无人机飞控故障库，需为该系统单独设计故障。','w');\r
    }\r
  };\r
\r
  const __finalScopedConfirmImportFault=confirmImportFault;\r
  confirmImportFault=function(){\r
    const compatibleModels=getCompatibleFaultCatalogModels();\r
    const selected=compatibleModels.find((model)=>model.id===S.selectedFaultCatalogId);\r
    if(!selected){\r
      toast('请先选择与当前系统匹配的故障','w');\r
      return;\r
    }\r
    return __finalScopedConfirmImportFault();\r
  };\r
\r
  const __finalScopedUpdateUI=updateUI;\r
  updateUI=function(){\r
    const result=__finalScopedUpdateUI();\r
    normalizeFaultInjectionCopy();\r
    return result;\r
  };\r
\r
  normalizeFaultInjectionCopy();\r
  Object.assign(window,{\r
    confirmImportFault,\r
    doImportFault,\r
    renderFaultCatalogList\r
  });\r
})();\r
\r
;(function installDiagnosticModelPackageBridge(){\r
  if(typeof window==='undefined') return;\r
\r
  function clone(value){\r
    return JSON.parse(JSON.stringify(value==null?null:value));\r
  }\r
\r
  function arr(value){\r
    return Array.isArray(value)?value:[];\r
  }\r
\r
  function getState(){\r
    return window.__GZ_STATE__||(typeof S!=='undefined'?S:null);\r
  }\r
\r
  function hasDiagnosticFaultLibrary(state){\r
    return Boolean(state?.diagnosticModel&&arr(state.faultLibrary).length);\r
  }\r
\r
  function applyDiagnosticFaultCatalog(state=getState()){\r
    if(!hasDiagnosticFaultLibrary(state)) return [];\r
    const models=arr(state.faultLibrary).map(clone);\r
    state.availableFaultModels=models;\r
    if(!models.some(model=>model.id===state.selectedFaultCatalogId)){\r
      state.selectedFaultCatalogId=models[0]?.id||'';\r
    }\r
    return models;\r
  }\r
\r
  function normalizeFaultCase(faultCase){\r
    if(!faultCase||typeof faultCase!=='object') return null;\r
    const id=faultCase.id||faultCase.faultId||faultCase.modelId||faultCase.faultModelId;\r
    if(!id) return null;\r
    return {\r
      ...faultCase,\r
      id,\r
      name:faultCase.name||faultCase.nameZh||faultCase.labelZh||id,\r
      category:faultCase.category||faultCase.categoryZh||faultCase.modelClass||faultCase.layer||'故障',\r
      detects:arr(faultCase.detects),\r
      moduleTargets:arr(faultCase.moduleTargets)\r
    };\r
  }\r
\r
  function normalizeDiagnosticPoint(point,index){\r
    const pointId=point?.pointId||point?.id||\`tp-\${index+1}\`;\r
    return {\r
      ...point,\r
      pointId,\r
      id:pointId,\r
      shortName:point?.shortName||point?.code||\`M\${index+1}\`,\r
      name:point?.name||point?.nameZh||point?.labelZh||point?.positionNameZh||\`测点 \${index+1}\`,\r
      detects:arr(point?.detects)\r
    };\r
  }\r
\r
  function clearDiagnosticPackageCaches(state){\r
    delete state.compactDiagnosticFixedPoints;\r
    delete state.compactDiagnosticFixedPointSignature;\r
    delete state.compactDiagnosticPointSignature;\r
    state.diagnosticTestPointModelSignature='';\r
    state.selectedDiagnosticTestPointId='';\r
    state.diagnosticScanResults=[];\r
    state.lastDiagnosticTestPointResult=null;\r
    state.testPointDiagnosis=null;\r
    state.confirmedDiagnosticFaults={};\r
    state.confirmedDiagnosticFaultIds=[];\r
    state.installedDiagnosticTestPointIds=[];\r
  }\r
\r
  const previousGetFaultTypeCatalogModels=window.getFaultTypeCatalogModels;\r
  if(typeof previousGetFaultTypeCatalogModels==='function'&&!window.__GZ_DIAGNOSTIC_FAULT_CATALOG_SOURCE__){\r
    window.__GZ_DIAGNOSTIC_FAULT_CATALOG_SOURCE__=true;\r
    window.getFaultTypeCatalogModels=function(){\r
      const diagnosticModels=applyDiagnosticFaultCatalog();\r
      if(diagnosticModels.length) return diagnosticModels.map(clone);\r
      return previousGetFaultTypeCatalogModels.apply(this,arguments);\r
    };\r
  }\r
\r
  if(typeof syncFaultTypeCatalogIntoAvailable==='function'&&!window.__GZ_DIAGNOSTIC_FAULT_CATALOG_SYNC__){\r
    const previousSyncFaultTypeCatalogIntoAvailable=syncFaultTypeCatalogIntoAvailable;\r
    window.__GZ_DIAGNOSTIC_FAULT_CATALOG_SYNC__=true;\r
    syncFaultTypeCatalogIntoAvailable=function(){\r
      if(applyDiagnosticFaultCatalog().length) return;\r
      return previousSyncFaultTypeCatalogIntoAvailable.apply(this,arguments);\r
    };\r
  }\r
\r
  const previousApply=window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__;\r
  if(typeof previousApply==='function'){\r
    window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__=function(pkg,prepared){\r
      const result=previousApply(pkg,prepared);\r
      if(result?.ok===false) return result;\r
      const state=getState();\r
      const diagnosticModel=pkg?.diagnosticModel||prepared?.diagnosticModel||null;\r
      if(!state||!diagnosticModel) return result;\r
      const points=arr(diagnosticModel.testPoints).map(normalizeDiagnosticPoint);\r
      const cases=arr(diagnosticModel.faultCases).map(normalizeFaultCase).filter(Boolean);\r
      const packageFaults=arr(pkg?.faultLibrary).map(normalizeFaultCase).filter(Boolean);\r
      const merged=new Map();\r
      [...packageFaults,...cases].forEach(fault=>{\r
        if(fault?.id) merged.set(fault.id,{...(merged.get(fault.id)||{}),...fault});\r
      });\r
      state.diagnosticModel=clone(diagnosticModel);\r
      state.diagnosticTestPoints=clone(points);\r
      state.testPoints=clone(points);\r
      state.faultLibrary=Array.from(merged.values()).map(clone);\r
      state.faults=state.faultLibrary;\r
      applyDiagnosticFaultCatalog(state);\r
      if(state.activeModelPackage){\r
        state.activeModelPackage.diagnosticModel=clone(diagnosticModel);\r
      }\r
      clearDiagnosticPackageCaches(state);\r
      if(typeof renderFaultCatalogList==='function'){\r
        try{renderFaultCatalogList();}catch(error){console.warn('[diagnostic-model] failed to render fault catalog',error);}\r
      }\r
      return result;\r
    };\r
  }\r
})();\r
\r
;(function installCompactFaultDiagnosisConsole(){\r
  if(typeof window==='undefined') return;\r
\r
  function getState(){\r
    return window.__GZ_STATE__||(typeof S!=='undefined'?S:{});\r
  }\r
\r
  function arr(value){\r
    return Array.isArray(value)?value:[];\r
  }\r
\r
  function text(value,fallback=''){\r
    return value==null?fallback:String(value);\r
  }\r
\r
  function html(value){\r
    const raw=text(value);\r
    if(typeof escapeHtml==='function') return escapeHtml(raw);\r
    return raw.replace(/[&<>"']/g,match=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[match]));\r
  }\r
\r
  function getRuntimeNodes(){\r
    const state=getState();\r
    return arr(state.nodes).length?arr(state.nodes):arr(state.modelNodes);\r
  }\r
\r
  function getRuntimeEdges(){\r
    const state=getState();\r
    return arr(state.edges).length?arr(state.edges):arr(state.modelEdges);\r
  }\r
\r
  const NODE_NAME_ZH={\r
    'node-command':'姿态指令',\r
    'node-command-shaper':'指令整形',\r
    'node-shaper':'指令整形',\r
    'node-error-sum':'误差求和',\r
    'node-error':'误差求和',\r
    'node-controller':'姿态控制器',\r
    'node-allocator':'控制分配',\r
    'node-motor':'电机混控',\r
    'node-dynamics':'飞行器动力学',\r
    'node-imu':'IMU 测量反馈',\r
    'node-command-scope':'指令示波器',\r
    'node-imu-scope':'IMU 示波器',\r
    'node-logger':'残差记录仪',\r
    'node-spectrum':'频谱分析仪'\r
  };\r
\r
  const EDGE_NAME_ZH={\r
    'edge-command-shaper':'姿态指令',\r
    'edge-shaper-error':'整形指令',\r
    'edge-imu-error':'IMU 测量反馈',\r
    'edge-error-controller':'俯仰误差',\r
    'edge-controller-allocator':'控制量',\r
    'edge-allocator-motor':'电机指令',\r
    'edge-motor-dynamics':'执行推力',\r
    'edge-dynamics-imu':'机体角速度反馈',\r
    'edge-dynamics-imu-can':'机体角速度反馈',\r
    'edge-command-scope':'指令观测',\r
    'edge-imu-scope':'测量观测',\r
    'edge-error-logger':'残差诊断',\r
    'edge-error-spectrum':'频谱诊断'\r
  };\r
\r
  const DEMO_FAULT_LIBRARY=[\r
    {id:'imu_rate_bias',name:'IMU 角速度偏置',category:'传感器故障',type:'propagating',targetNodeId:'node-imu',targetEdgeId:'edge-imu-error',affectedEdges:['edge-imu-error','edge-error-controller','edge-controller-allocator','edge-allocator-motor','edge-motor-dynamics','edge-dynamics-imu-can','edge-imu-scope','edge-error-logger','edge-error-spectrum']},\r
    {id:'sensor_additive_bias',name:'传感器加性偏置',category:'传感器故障',type:'propagating',targetNodeId:'node-imu',targetEdgeId:'edge-imu-error',affectedEdges:['edge-imu-error','edge-error-controller','edge-controller-allocator','edge-allocator-motor','edge-motor-dynamics','edge-dynamics-imu-can','edge-imu-scope','edge-error-logger','edge-error-spectrum']},\r
    {id:'imu_self_test_warning',name:'IMU 自检状态异常',category:'本地状态故障',type:'local',targetNodeId:'node-imu',targetEdgeId:'edge-imu-scope',affectedEdges:['edge-imu-scope']},\r
    {id:'sensor_noise_imu_pitch',name:'IMU 测量噪声增大',category:'传感器故障',type:'propagating',targetNodeId:'node-imu',targetEdgeId:'edge-imu-error',affectedEdges:['edge-imu-error','edge-error-controller','edge-controller-allocator','edge-allocator-motor','edge-motor-dynamics','edge-dynamics-imu-can','edge-imu-scope','edge-error-logger','edge-error-spectrum']},\r
    {id:'can_bus_delay',name:'CAN 反馈延迟',category:'协议链路故障',type:'propagating',targetEdgeId:'edge-imu-error',affectedEdges:['edge-imu-error','edge-error-controller','edge-controller-allocator','edge-allocator-motor','edge-motor-dynamics','edge-dynamics-imu-can','edge-imu-scope','edge-error-logger','edge-error-spectrum']},\r
    {id:'link_dropout_motor_can',name:'电机 CAN 指令丢包',category:'协议链路故障',type:'blocking',targetEdgeId:'edge-allocator-motor',affectedEdges:['edge-allocator-motor','edge-motor-dynamics','edge-dynamics-imu-can','edge-imu-error','edge-error-controller','edge-error-logger','edge-error-spectrum']},\r
    {id:'link_stuck_command',name:'姿态指令保持',category:'链路阻断故障',type:'blocking',targetEdgeId:'edge-command-shaper',affectedEdges:['edge-command-shaper','edge-shaper-error','edge-error-controller','edge-controller-allocator','edge-allocator-motor','edge-motor-dynamics','edge-dynamics-imu-can','edge-imu-error','edge-command-scope','edge-imu-scope','edge-error-logger','edge-error-spectrum']},\r
    {id:'param_gain_controller',name:'俯仰控制增益异常',category:'本地参数故障',type:'local',targetNodeId:'node-controller',targetEdgeId:'edge-controller-allocator',affectedEdges:['edge-controller-allocator','edge-allocator-motor','edge-motor-dynamics','edge-dynamics-imu-can','edge-imu-error','edge-error-controller','edge-error-logger','edge-error-spectrum']},\r
    {id:'param_allocator_limit',name:'控制分配限幅异常',category:'本地参数故障',type:'local',targetNodeId:'node-allocator',targetEdgeId:'edge-allocator-motor',affectedEdges:['edge-allocator-motor','edge-motor-dynamics','edge-dynamics-imu-can','edge-imu-error','edge-error-controller','edge-error-logger','edge-error-spectrum']},\r
    {id:'motor_efficiency_loss',name:'电机效率下降',category:'执行器故障',type:'propagating',targetNodeId:'node-motor',targetEdgeId:'edge-motor-dynamics',affectedEdges:['edge-motor-dynamics','edge-dynamics-imu-can','edge-imu-error','edge-error-controller','edge-error-logger','edge-error-spectrum']},\r
    {id:'actuator_loss_motor',name:'电机推力效率下降',category:'执行器故障',type:'propagating',targetNodeId:'node-motor',targetEdgeId:'edge-motor-dynamics',affectedEdges:['edge-motor-dynamics','edge-dynamics-imu-can','edge-imu-error','edge-error-controller','edge-error-logger','edge-error-spectrum']},\r
    {id:'airframe_inertia_shift',name:'机体惯量变化',category:'物理层故障',type:'local',targetNodeId:'node-dynamics',targetEdgeId:'edge-dynamics-imu-can',affectedEdges:['edge-dynamics-imu-can','edge-imu-error','edge-error-controller','edge-error-logger','edge-error-spectrum']},\r
    {id:'diagnostic_residual_logger',name:'残差记录异常',category:'诊断/残差型',type:'diagnostic',targetNodeId:'node-logger',targetEdgeId:'edge-error-logger',affectedEdges:['edge-error-logger']},\r
    {id:'diagnostic_spectrum_drift',name:'频谱诊断漂移',category:'诊断/残差型',type:'diagnostic',targetNodeId:'node-spectrum',targetEdgeId:'edge-error-spectrum',affectedEdges:['edge-error-spectrum']}\r
  ];\r
\r
  function getRuntimeFaultLibrary(){\r
    const state=getState();\r
    const library=[\r
      ...(arr(state.faultLibrary).length?arr(state.faultLibrary):arr(state.availableFaultModels)),\r
      ...arr(state.importedFaultModels),\r
      ...((arr(state.faultLibrary).length||arr(state.availableFaultModels).length)?[]:DEMO_FAULT_LIBRARY)\r
    ];\r
    const merged=new Map();\r
    library.forEach(model=>{\r
      const id=model.id||model.modelId||model.faultModelId||model.faultId||model.name;\r
      if(!id) return;\r
      const existing=merged.get(id);\r
      merged.set(id,existing?{...model,...existing,id}:{...model,id});\r
    });\r
    return Array.from(merged.values()).map(model=>({\r
      ...model,\r
      id:model.id||model.modelId||model.faultModelId||model.faultId||model.name,\r
      name:model.name||model.label||model.title||model.id||'故障',\r
      category:model.category||model.layer||model.domain||model.faultLayer||'故障库',\r
      targetNodeId:model.targetNodeId||model.recommendedModuleId||model.injectionDesign?.targetNodeId||model.injectionDesign?.targetId||model.injectionTarget?.nodeId,\r
      targetEdgeId:model.targetEdgeId||model.injectionDesign?.targetEdgeId||model.injectionTarget?.edgeId,\r
      detects:arr(model.detects)\r
    })).filter(model=>model.id);\r
  }\r
\r
  function edgeEndpointName(edge,key){\r
    const nodes=getRuntimeNodes();\r
    const id=edge[key]||edge[\`\${key}Id\`]||edge[key==='source'?'from':'to']||edge[key==='source'?'sourceNodeId':'targetNodeId'];\r
    const node=nodes.find(item=>item.id===id);\r
    return node?.props?.name||node?.name||node?.label||NODE_NAME_ZH[id]||id||'未连接';\r
  }\r
\r
  function pointForEdge(edge,index){\r
    const label=EDGE_NAME_ZH[edge.id]||edge.label||edge.signalLabel||edge.name||\`\${edgeEndpointName(edge,'source')} -> \${edgeEndpointName(edge,'target')}\`;\r
    return {\r
      pointId:edge.testPointId||\`tp-\${edge.id||index}\`,\r
      shortName:\`M\${index+1}\`,\r
      name:label,\r
      edgeId:edge.id||\`edge-\${index}\`,\r
      signalId:edge.signalId||edge.signalID||edge.signal||'',\r
      channelId:edge.channelId||edge.channelID||edge.channel||'',\r
      sourceName:edgeEndpointName(edge,'source'),\r
      targetName:edgeEndpointName(edge,'target'),\r
      detects:arr(edge.detects)\r
    };\r
  }\r
\r
  function edgeSourceId(edge){\r
    return edge?.source||edge?.from||edge?.sourceNodeId||edge?.sourceId||'';\r
  }\r
\r
  function edgeTargetId(edge){\r
    return edge?.target||edge?.to||edge?.targetNodeId||edge?.targetId||'';\r
  }\r
\r
  function getFaultTargetEdges(fault){\r
    const edges=getRuntimeEdges();\r
    const moduleTargets=arr(fault?.moduleTargets).concat(arr(fault?.typicalTargets));\r
    const explicitEdges=[\r
      fault?.targetEdgeId,\r
      fault?.targetEdgeID,\r
      fault?.injectionDesign?.targetEdgeId,\r
      fault?.injectionTarget?.edgeId,\r
      ...arr(fault?.affectedEdges),\r
      ...arr(fault?.affectedTestPointEdges),\r
      ...moduleTargets.filter(target=>String(target).startsWith('edge-'))\r
    ].filter(Boolean);\r
    if(explicitEdges.length) return Array.from(new Set(explicitEdges));\r
    const nodeTargets=[\r
      fault?.targetNodeId,\r
      fault?.targetNodeID,\r
      fault?.recommendedModuleId,\r
      fault?.injectionDesign?.targetNodeId,\r
      fault?.injectionDesign?.targetId,\r
      fault?.injectionTarget?.nodeId,\r
      ...moduleTargets.filter(target=>String(target).startsWith('node-'))\r
    ].filter(Boolean);\r
    const edgeIds=[];\r
    nodeTargets.forEach(nodeId=>{\r
      edges.forEach(edge=>{\r
        if(edgeSourceId(edge)===nodeId||edgeTargetId(edge)===nodeId){\r
          edgeIds.push(edge.id);\r
        }\r
      });\r
    });\r
    return Array.from(new Set(edgeIds));\r
  }\r
\r
  function getDownstreamEdgesFrom(seedEdgeIds,options={}){\r
    const edges=getRuntimeEdges();\r
    const outgoing=new Map();\r
    edges.forEach(edge=>{\r
      const source=edgeSourceId(edge);\r
      if(!outgoing.has(source)) outgoing.set(source,[]);\r
      outgoing.get(source).push(edge);\r
    });\r
    const visitedEdges=new Set();\r
    const queue=[];\r
    seedEdgeIds.filter(Boolean).forEach(edgeId=>{\r
      const edge=edges.find(item=>item.id===edgeId);\r
      if(edge){\r
        visitedEdges.add(edge.id);\r
        queue.push(edgeTargetId(edge));\r
      }\r
    });\r
    let guard=0;\r
    while(queue.length&&guard<edges.length*4){\r
      guard+=1;\r
      const nodeId=queue.shift();\r
      (outgoing.get(nodeId)||[]).forEach(edge=>{\r
        if(visitedEdges.has(edge.id)) return;\r
        visitedEdges.add(edge.id);\r
        queue.push(edgeTargetId(edge));\r
      });\r
    }\r
    if(options.includeDiagnosticFromError!==false&&visitedEdges.has('edge-error-controller')){\r
      ['edge-error-logger','edge-error-spectrum'].forEach(edgeId=>{\r
        if(edges.some(edge=>edge.id===edgeId)) visitedEdges.add(edgeId);\r
      });\r
    }\r
    return visitedEdges;\r
  }\r
\r
  function getFaultAffectedEdges(fault){\r
    const explicit=arr(fault?.affectedEdges).concat(arr(fault?.affectedTestPointEdges)).filter(Boolean);\r
    if(explicit.length) return new Set(explicit);\r
    const category=String(fault?.category||fault?.layer||fault?.type||'').toLowerCase();\r
    const isDiagnostic=/diagnostic|residual|spectrum|诊断|残差/.test(category);\r
    const seeds=getFaultTargetEdges(fault);\r
    if(isDiagnostic) return new Set(seeds);\r
    const affected=getDownstreamEdgesFrom(seeds,{includeDiagnosticFromError:true});\r
    const id=getFaultKey(fault);\r
    if(id==='imu_rate_bias'||id==='sensor_bias_imu_pitch'||id==='sensor_noise_imu_pitch'||id==='can_bus_delay'||id==='sensor_additive_bias'||id==='noise_increase'||id==='colored_noise'||id==='fault_bias_overlay'||id==='fault_noise_injection'){\r
      ['edge-imu-error','edge-error-controller','edge-controller-allocator','edge-allocator-motor','edge-motor-dynamics','edge-dynamics-imu','edge-dynamics-imu-can','edge-imu-scope','edge-error-logger','edge-error-spectrum'].forEach(edgeId=>affected.add(edgeId));\r
    }\r
    if(id==='motor_efficiency_loss'||id==='actuator_loss_motor'||id==='airframe_inertia_shift'||id==='param_gain_controller'||id==='param_allocator_limit'){\r
      ['edge-motor-dynamics','edge-dynamics-imu','edge-dynamics-imu-can','edge-imu-error','edge-error-controller','edge-error-logger','edge-error-spectrum'].forEach(edgeId=>affected.add(edgeId));\r
    }\r
    if(id==='link_stuck_command'){\r
      getRuntimeEdges().forEach(edge=>affected.add(edge.id));\r
    }\r
    return affected;\r
  }\r
\r
  function getConfiguredPoints(){\r
    const state=getState();\r
    const runtimeEdges=getRuntimeEdges();\r
    const edgeSignature=runtimeEdges.map(edge=>edge.id).join('|');\r
    if(Array.isArray(state.compactDiagnosticFixedPoints)&&state.compactDiagnosticFixedPointSignature===edgeSignature){\r
      return state.compactDiagnosticFixedPoints;\r
    }\r
    const configured=arr(state.diagnosticTestPoints).length?arr(state.diagnosticTestPoints):arr(state.testPoints);\r
    let points;\r
    if(configured.length){\r
      points=configured.map((point,index)=>({\r
        ...point,\r
        pointId:point.pointId||point.id||\`tp-config-\${index}\`,\r
        shortName:point.shortName||point.code||\`M\${index+1}\`,\r
        name:point.nameZh||point.labelZh||EDGE_NAME_ZH[point.edgeId||point.edgeID||point.targetEdgeId]||point.name||point.label||point.position||\`测点 \${index+1}\`,\r
        edgeId:point.edgeId||point.edgeID||point.targetEdgeId||'',\r
        detects:arr(point.detects)\r
      }));\r
    }else{\r
      const existing=typeof window.getSemanticTestPoints==='function'?arr(window.getSemanticTestPoints()):[];\r
      points=existing.length?existing.map((point,index)=>({\r
        ...point,\r
        pointId:point.pointId||point.id||\`tp-semantic-\${index}\`,\r
        shortName:point.shortName||point.code||\`M\${index+1}\`,\r
        name:point.nameZh||point.labelZh||EDGE_NAME_ZH[point.edgeId||point.edgeID||point.targetEdgeId]||point.name||point.label||point.position||\`测点 \${index+1}\`,\r
        edgeId:point.edgeId||point.edgeID||point.targetEdgeId||'',\r
        detects:arr(point.detects)\r
      })):runtimeEdges.map(pointForEdge);\r
    }\r
    const faultLibrary=getRuntimeFaultLibrary();\r
    points=points.map((point,index)=>{\r
      const edge=runtimeEdges.find(item=>item.id===point.edgeId);\r
      const sourceName=point.sourceName||edgeEndpointName(edge||{},'source');\r
      const targetName=point.targetName||edgeEndpointName(edge||{},'target');\r
      return {\r
        ...point,\r
        pointId:point.pointId||\`tp-\${point.edgeId||index}\`,\r
        shortName:point.shortName||\`M\${index+1}\`,\r
        sourceName,\r
        targetName,\r
        name:point.nameZh||point.labelZh||EDGE_NAME_ZH[point.edgeId]||point.name||point.label||\`\${sourceName} -> \${targetName}\`,\r
        detects:Array.from(new Set(arr(point.detects).concat(faultLibrary.filter(fault=>getFaultAffectedEdges(fault).has(point.edgeId)).map(fault=>fault.id))))\r
      };\r
    });\r
    if(runtimeEdges.length){\r
      state.compactDiagnosticFixedPoints=points;\r
      state.compactDiagnosticFixedPointSignature=edgeSignature;\r
    }\r
    return points;\r
  }\r
\r
  function getInstalledPointIds(points=getConfiguredPoints()){\r
    const state=getState();\r
    if(!Array.isArray(state.installedDiagnosticTestPointIds)){\r
      state.installedDiagnosticTestPointIds=[];\r
    }\r
    const signature=points.map(point=>point.pointId).join('|');\r
    if(state.compactDiagnosticPointSignature!==signature){\r
      state.compactDiagnosticPointSignature=signature;\r
    }\r
    const valid=new Set(points.map(point=>point.pointId));\r
    state.installedDiagnosticTestPointIds=Array.from(new Set(state.installedDiagnosticTestPointIds.filter(id=>valid.has(id))));\r
    return state.installedDiagnosticTestPointIds;\r
  }\r
\r
  function clearDiagnosticScanState(state=getState()){\r
    state.diagnosticScanResults=[];\r
    state.lastDiagnosticTestPointResult=null;\r
    state.testPointDiagnosis=null;\r
    state.diagnosticLastScanAt=0;\r
  }\r
\r
  function getFaultKey(fault){\r
    if(!fault) return '';\r
    return typeof fault==='string'?fault:(fault.id||fault.faultId||fault.modelId||fault.faultModelId||fault.instanceId||fault.key||fault.name||'');\r
  }\r
\r
  function getInjectedFaults(){\r
    const state=getState();\r
    const map=new Map();\r
    ['injectedFaults','activeFaults','faultInstances','selectedFaults','appliedFaults'].forEach(key=>{\r
      arr(state[key]).forEach(item=>{\r
        const id=getFaultKey(item);\r
        if(id&&!map.has(id)) map.set(id,item);\r
      });\r
    });\r
    getRuntimeNodes().forEach(node=>{\r
      arr(node.faults).concat(node.injectedFault?[node.injectedFault]:[]).forEach(item=>{\r
        const id=getFaultKey(item);\r
        if(id&&!map.has(id)) map.set(id,{...(typeof item==='object'?item:{}),targetNodeId:node.id});\r
      });\r
    });\r
    getRuntimeEdges().forEach(edge=>{\r
      arr(edge.faults).concat(edge.injectedFault?[edge.injectedFault]:[]).concat(edge.fault?[edge.fault]:[]).forEach(item=>{\r
        const id=getFaultKey(item);\r
        if(id&&!map.has(id)) map.set(id,{...(typeof item==='object'?item:{}),targetEdgeId:edge.id});\r
      });\r
    });\r
    return Array.from(map.entries()).map(([id,item])=>({\r
      ...(typeof item==='object'?item:{}),\r
      id,\r
      name:item?.name||item?.label||id,\r
      category:item?.category||item?.layer||'已注入'\r
    }));\r
  }\r
\r
  function pointDetectsFault(point,fault){\r
    if(!point||!fault) return false;\r
    const id=getFaultKey(fault);\r
    if(arr(point.detects).includes(id)) return true;\r
    const configuredModel=getRuntimeFaultLibrary().find(item=>item.id===id);\r
    if(!configuredModel&&!arr(fault.affectedEdges).length&&!arr(fault.affectedTestPointEdges).length){\r
      return false;\r
    }\r
    const model={...(configuredModel||{}),...fault};\r
    return getFaultAffectedEdges(model).has(point.edgeId);\r
  }\r
\r
  function renderPointCard(point,installed,scanResult){\r
    const abnormal=scanResult?.status==='abnormal';\r
    return \`\r
      <button class="tp-console-point\${installed?' is-installed':''}\${abnormal?' is-abnormal':''}" type="button" data-install-testpoint="\${html(point.pointId)}" data-fixed-testpoint-position="\${html(point.pointId)}">\r
        <span class="tp-console-point__code">\${html(point.shortName)}</span>\r
        <span class="tp-console-point__main">\r
          <strong>\${html(point.name)}</strong>\r
          <small>\${html(point.sourceName||point.signalId||point.edgeId)}\${point.targetName?\` -> \${html(point.targetName)}\`:''}</small>\r
        </span>\r
        <span class="tp-console-point__state">\${abnormal?'异常':(installed?'已安装':'安装')}</span>\r
      </button>\r
    \`;\r
  }\r
\r
  function renderInstalledPoint(point,scanResult){\r
    const abnormal=scanResult?.status==='abnormal';\r
    const checked=Array.isArray(scanResult?.candidates)?scanResult.candidates.length:0;\r
    return \`\r
      <div class="tp-installed-row\${abnormal?' is-abnormal':''}" data-installed-testpoint="\${html(point.pointId)}">\r
        <button class="tp-installed-row__main" type="button" data-detect-testpoint="\${html(point.pointId)}">\r
          <span>\${html(point.shortName)}</span>\r
          <strong>\${html(point.name)}</strong>\r
          <small>\${scanResult?\`\${abnormal?'疑似异常':'正常'} · \${checked} 个候选\`:'待检测'}</small>\r
        </button>\r
        <button class="tp-installed-row__remove" type="button" data-remove-testpoint="\${html(point.pointId)}">移除</button>\r
      </div>\r
    \`;\r
  }\r
\r
  function renderDiagnosisResult(){\r
    const state=getState();\r
    const results=arr(state.diagnosticScanResults);\r
    if(!results.length){\r
      return \`<div class="tp-empty">点击“检测故障”后，按测点列出候选故障。</div>\`;\r
    }\r
    const abnormalCount=results.filter(result=>result.status==='abnormal').length;\r
    return \`\r
      <div class="tp-result-summary\${abnormalCount?' is-abnormal':' is-ok'}">\r
        <strong>\${abnormalCount?\`\${abnormalCount} 个测点疑似异常\`:'未发现异常测点'}</strong>\r
        <span>\${results.length} 个已安装测点已检测</span>\r
      </div>\r
      <div class="tp-result-list">\r
        \${results.map(result=>{\r
          const candidates=arr(result.candidates);\r
          const confirmed=new Set(arr(state.confirmedDiagnosticFaults?.[result.pointId]));\r
          const abnormal=result.status==='abnormal';\r
          return \`\r
            <details class="tp-result-accordion\${abnormal?' is-abnormal':' is-normal'}" \${abnormal?'open':''} data-diagnosis-point="\${html(result.pointId)}">\r
              <summary>\r
                <span class="tp-result-code">\${html(result.shortName||result.pointCode||'M')}</span>\r
                <strong>\${html(result.pointNameZh||result.pointName||'测点')}</strong>\r
                <em>\${abnormal?'疑似异常':'正常'}</em>\r
                <b>\${candidates.length} 个候选</b>\r
              </summary>\r
              \${candidates.length?\`\r
                <div class="tp-candidate-list">\r
                  \${candidates.map(candidate=>{\r
          const id=getFaultKey(candidate);\r
          return \`\r
            <label class="tp-candidate">\r
              <input type="checkbox" data-confirm-diagnostic-fault="\${html(id)}" data-confirm-point-id="\${html(result.pointId)}" \${confirmed.has(id)?'checked':''}>\r
              <span>\r
                <strong>\${html(candidate.name||id)}</strong>\r
                <small>\${html(candidate.category||candidate.type||'候选故障')}\${candidate.active?' · 当前已注入':' · 可能原因'}</small>\r
              </span>\r
            </label>\r
          \`;\r
                  }).join('')}\r
                </div>\r
              \`:\`<div class="tp-result-normal">该测点当前未匹配到受影响链路。</div>\`}\r
            </details>\r
          \`;\r
        }).join('')}\r
      </div>\r
    \`;\r
  }\r
\r
  function renderCompactDiagnosisConsole(){\r
    const points=getConfiguredPoints();\r
    const installedIds=new Set(getInstalledPointIds(points));\r
    const installed=points.filter(point=>installedIds.has(point.pointId));\r
    const faults=getInjectedFaults();\r
    const scanByPoint=new Map(arr(getState().diagnosticScanResults).map(result=>[result.pointId,result]));\r
    return \`\r
      <section class="tp-console dataflow-workspace" data-dataflow-view="testpoint-diagnosis" data-testpoint-workbench>\r
        <header class="tp-console-header">\r
          <div>\r
            <span>多信号流图</span>\r
            <h2>测点诊断台</h2>\r
          </div>\r
          <div class="tp-console-stats">\r
            <span><b>\${points.length}</b> 固定测点</span>\r
            <span><b>\${installed.length}</b> 已安装</span>\r
            <span><b>\${getRuntimeEdges().length}</b> 模型连线</span>\r
            <span><b>\${faults.length}</b> 当前故障</span>\r
          </div>\r
        </header>\r
        <div class="tp-console-body">\r
          <section class="tp-console-panel tp-console-panel--points">\r
            <div class="tp-panel-head">\r
              <strong>固定测点</strong>\r
              <button type="button" data-clear-testpoints>全部移除</button>\r
            </div>\r
            <select class="tp-hidden-select" data-testpoint-position-select aria-hidden="true" tabindex="-1">\r
              \${points.map(point=>\`<option value="\${html(point.pointId)}">\${html(point.name)}</option>\`).join('')}\r
            </select>\r
            <div class="tp-point-grid">\r
              \${points.map(point=>renderPointCard(point,installedIds.has(point.pointId),scanByPoint.get(point.pointId))).join('')}\r
            </div>\r
          </section>\r
          <section class="tp-console-panel">\r
            <div class="tp-panel-head">\r
              <strong>检测</strong>\r
              <span class="tp-panel-actions">\r
                <button type="button" data-run-fault-detection \${installed.length?'':'disabled'}>检测故障</button>\r
                <button type="button" data-install-all-testpoints>全部安装</button>\r
              </span>\r
            </div>\r
            <div class="tp-installed-list">\r
              \${installed.length?installed.map(point=>renderInstalledPoint(point,scanByPoint.get(point.pointId))).join(''):\`<div class="tp-empty">先从左侧安装测点。</div>\`}\r
            </div>\r
          </section>\r
          <section class="tp-console-panel">\r
            <div class="tp-panel-head">\r
              <strong>人工确认</strong>\r
              <button type="button" data-clear-diagnostic-result>清空</button>\r
            </div>\r
            \${renderDiagnosisResult()}\r
          </section>\r
        </div>\r
      </section>\r
    \`;\r
  }\r
\r
  function refreshDiagnosisViews(){\r
    if(typeof window.renderDataflowPanel==='function'){\r
      try{window.renderDataflowPanel(true);}catch(err){console.warn('[diagnosis-console] renderDataflowPanel failed',err);}\r
    }\r
    if(typeof window.renderCanvasDiagnosticTestPointMarkers==='function'){\r
      try{window.renderCanvasDiagnosticTestPointMarkers();}catch(err){console.warn('[diagnosis-console] marker render failed',err);}\r
    }\r
    if(document.getElementById('cw')?.dataset.view==='dmatrix'&&typeof window.renderDetectionMatrixPanel==='function'){\r
      try{window.renderDetectionMatrixPanel();}catch(err){console.warn('[diagnosis-console] renderDetectionMatrixPanel failed',err);}\r
    }\r
  }\r
\r
  window.buildDiagnosticTestPointModel=function(){\r
    const points=getConfiguredPoints();\r
    const installedIds=new Set(getInstalledPointIds(points));\r
    const positions=points.map((point,index)=>({\r
      ...point,\r
      positionIndex:index+1,\r
      positionNameZh:point.positionNameZh||point.name||\`测点 \${index+1}\`,\r
      signalPathZh:point.signalPathZh||\`\${point.sourceName||point.signalId||point.edgeId}\${point.targetName?\` -> \${point.targetName}\`:''}\`,\r
      installed:installedIds.has(point.pointId)\r
    }));\r
    return {\r
      points:positions,\r
      positions,\r
      semanticPoints:positions,\r
      available:positions.filter(point=>!point.installed),\r
      installed:positions.filter(point=>point.installed),\r
      injectedFaults:getInjectedFaults(),\r
      faultLibrary:getRuntimeFaultLibrary()\r
    };\r
  };\r
\r
  function getFaultTargetText(fault){\r
    if(fault?.targetModuleName||fault?.targetName||fault?.moduleName){\r
      return fault.targetModuleName||fault.targetName||fault.moduleName;\r
    }\r
    const edgeId=fault?.targetEdgeId||fault?.injectionDesign?.targetEdgeId||fault?.injectionTarget?.edgeId;\r
    if(edgeId){\r
      const edge=getRuntimeEdges().find(item=>item.id===edgeId);\r
      const name=edge?.label||edge?.signalLabel||edge?.name||EDGE_NAME_ZH[edgeId]||edgeId;\r
      return \`连线：\${name}\`;\r
    }\r
    const nodeId=fault?.targetNodeId||fault?.recommendedModuleId||fault?.injectionDesign?.targetNodeId||fault?.injectionDesign?.targetId||fault?.injectionTarget?.nodeId;\r
    if(nodeId){\r
      const node=getRuntimeNodes().find(item=>item.id===nodeId);\r
      const name=node?.props?.name||node?.name||node?.label||NODE_NAME_ZH[nodeId]||node?.type||nodeId;\r
      return \`模块：\${name}\`;\r
    }\r
    const seeds=getFaultTargetEdges(fault);\r
    if(seeds[0]){\r
      const edge=getRuntimeEdges().find(item=>item.id===seeds[0]);\r
      return \`连线：\${edge?.label||edge?.signalLabel||EDGE_NAME_ZH[seeds[0]]||seeds[0]}\`;\r
    }\r
    return '未绑定';\r
  }\r
\r
  function getDetectionCellReason(point,fault,affectedEdges){\r
    const id=getFaultKey(fault);\r
    if(arr(point.detects).includes(id)) return '测点直接配置为可观测';\r
    if(affectedEdges.has(point.edgeId)) return '故障传播路径覆盖该测点';\r
    return '不覆盖该测点';\r
  }\r
\r
  function getFaultLayerText(fault){\r
    const value=String(fault?.layer||fault?.category||fault?.type||'').toLowerCase();\r
    if(/protocol/.test(value)||/协议/.test(value)) return '协议层';\r
    if(/electrical|sensor|电气/.test(value)) return '电气层';\r
    if(/physical|actuator|plant|物理/.test(value)) return '物理层';\r
    if(/diagnostic|residual|spectrum|诊断|残差/.test(value)) return '诊断层';\r
    return fault?.category||fault?.layer||'故障';\r
  }\r
\r
  window.buildDetectionMatrixModel=function(){\r
    const points=getConfiguredPoints();\r
    const faults=getRuntimeFaultLibrary();\r
    const rows=faults.map(fault=>{\r
      const affectedEdges=getFaultAffectedEdges(fault);\r
      const cells=points.map(point=>{\r
        const detectable=arr(point.detects).includes(getFaultKey(fault))||affectedEdges.has(point.edgeId);\r
        return {\r
          pointId:point.pointId,\r
          pointCode:point.shortName,\r
          pointName:point.name,\r
          edgeId:point.edgeId,\r
          detectable,\r
          value:detectable?1:0,\r
          reason:getDetectionCellReason(point,fault,affectedEdges)\r
        };\r
      });\r
      return {\r
        faultId:getFaultKey(fault),\r
        faultName:fault.name||getFaultKey(fault),\r
        layer:getFaultLayerText(fault),\r
        category:fault.category||fault.modelClass||fault.layer||'故障',\r
        targetLabel:getFaultTargetText(fault),\r
        detectableCount:cells.filter(cell=>cell.detectable).length,\r
        cells\r
      };\r
    });\r
    return {\r
      points,\r
      faults,\r
      rows,\r
      summary:{\r
        pointCount:points.length,\r
        faultCount:faults.length,\r
        detectableCells:rows.reduce((sum,row)=>sum+row.detectableCount,0)\r
      },\r
      generatedAt:new Date().toISOString()\r
    };\r
  };\r
\r
  function renderDetectionMatrixTable(model){\r
    const points=arr(model?.points);\r
    const rows=arr(model?.rows);\r
    return \`\r
      <div class="d-matrix-table-wrap">\r
        <table class="d-matrix-table">\r
          <thead>\r
            <tr>\r
              <th class="d-matrix-sticky">故障类型</th>\r
              <th>目标模块/连线</th>\r
              <th>层级</th>\r
              <th>可测点</th>\r
              \${points.map(point=>\`<th title="\${html(point.name)}">\${html(point.shortName)}</th>\`).join('')}\r
            </tr>\r
          </thead>\r
          <tbody>\r
            \${rows.map(row=>\`\r
              <tr>\r
                <td class="d-matrix-sticky">\r
                  <strong>\${html(row.faultName)}</strong>\r
                  <small>\${html(row.faultId)}</small>\r
                </td>\r
                <td>\${html(row.targetLabel)}</td>\r
                <td>\${html(row.layer)}</td>\r
                <td>\${row.detectableCount}/\${points.length}</td>\r
                \${row.cells.map(cell=>\`\r
                  <td class="d-matrix-cell\${cell.detectable?' is-detectable':' is-empty'}" title="\${html(cell.pointCode)} · \${html(cell.pointName)} · \${html(cell.reason)}">\${cell.detectable?'1':'0'}</td>\r
                \`).join('')}\r
              </tr>\r
            \`).join('')}\r
          </tbody>\r
        </table>\r
      </div>\r
    \`;\r
  }\r
\r
  window.renderDetectionMatrixPanel=function(){\r
    const host=document.getElementById('d-matrix-panel')||document.querySelector('.d-matrix-panel');\r
    if(!host) return;\r
    const model=window.buildDetectionMatrixModel();\r
    host.innerHTML=\`\r
      <section class="d-matrix" data-d-matrix-view>\r
        <header class="d-matrix-header">\r
          <div>\r
            <span>故障诊断矩阵</span>\r
            <h2>D矩阵</h2>\r
            <p>按当前飞控 demo 的固定测点，列出每类故障能否在对应测点被检测到。</p>\r
          </div>\r
          <button type="button" class="d-matrix-export" data-d-matrix-export>导出 CSV</button>\r
        </header>\r
        <div class="d-matrix-summary">\r
          <span><b>\${model.summary.faultCount}</b><em>故障类型</em></span>\r
          <span><b>\${model.summary.pointCount}</b><em>固定测点</em></span>\r
          <span><b>\${model.summary.detectableCells}</b><em>可检测关系</em></span>\r
        </div>\r
        \${renderDetectionMatrixTable(model)}\r
      </section>\r
    \`;\r
  };\r
\r
  function escapeCsvValue(value){\r
    const textValue=String(value==null?'':value);\r
    return /[",\\r\\n]/.test(textValue)?\`"\${textValue.replace(/"/g,'""')}"\`:textValue;\r
  }\r
\r
  window.exportDetectionMatrixCsv=function(options={}){\r
    const model=window.buildDetectionMatrixModel();\r
    const header=['故障类型','故障ID','目标模块/连线','层级','可测点',...model.points.map(point=>point.shortName)];\r
    const lines=[header.map(escapeCsvValue).join(',')];\r
    model.rows.forEach(row=>{\r
      const values=[\r
        row.faultName,\r
        row.faultId,\r
        row.targetLabel,\r
        row.layer,\r
        \`\${row.detectableCount}/\${model.points.length}\`,\r
        ...row.cells.map(cell=>cell.detectable?'1':'0')\r
      ];\r
      lines.push(values.map(escapeCsvValue).join(','));\r
    });\r
    const csv=\`\\uFEFF\${lines.join('\\n')}\`;\r
    if(options.download===false) return csv;\r
    if(typeof document==='undefined') return csv;\r
    const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});\r
    const url=URL.createObjectURL(blob);\r
    const link=document.createElement('a');\r
    link.href=url;\r
    link.download=\`uav-d-matrix-\${new Date().toISOString().slice(0,10)}.csv\`;\r
    document.body.appendChild(link);\r
    link.click();\r
    link.remove();\r
    URL.revokeObjectURL(url);\r
    return csv;\r
  };\r
\r
  window.addDiagnosticTestPoint=function(pointId){\r
    const points=getConfiguredPoints();\r
    const point=points.find(item=>item.pointId===pointId);\r
    if(!point) return false;\r
    const state=getState();\r
    const installed=getInstalledPointIds(points);\r
    if(!installed.includes(point.pointId)) installed.push(point.pointId);\r
    state.selectedDiagnosticTestPointId=point.pointId;\r
    clearDiagnosticScanState(state);\r
    refreshDiagnosisViews();\r
    return true;\r
  };\r
  window.installDiagnosticTestPoint=window.addDiagnosticTestPoint;\r
\r
  window.removeDiagnosticTestPoint=function(pointId){\r
    const points=getConfiguredPoints();\r
    const state=getState();\r
    const before=getInstalledPointIds(points).length;\r
    state.installedDiagnosticTestPointIds=state.installedDiagnosticTestPointIds.filter(id=>id!==pointId);\r
    if(state.installedDiagnosticTestPointIds.length===0) state.diagnosticTestPointManualCleared=true;\r
    if(state.selectedDiagnosticTestPointId===pointId) state.selectedDiagnosticTestPointId=null;\r
    if(Array.isArray(state.diagnosticScanResults)){\r
      state.diagnosticScanResults=state.diagnosticScanResults.filter(result=>result.pointId!==pointId);\r
    }\r
    if(state.lastDiagnosticTestPointResult?.pointId===pointId){\r
      state.lastDiagnosticTestPointResult=null;\r
      state.testPointDiagnosis=null;\r
    }\r
    refreshDiagnosisViews();\r
    return state.installedDiagnosticTestPointIds.length!==before;\r
  };\r
\r
  window.clearDiagnosticTestPoints=function(){\r
    const state=getState();\r
    state.installedDiagnosticTestPointIds=[];\r
    state.selectedDiagnosticTestPointId=null;\r
    state.diagnosticTestPointManualCleared=true;\r
    clearDiagnosticScanState(state);\r
    refreshDiagnosisViews();\r
    return true;\r
  };\r
\r
  window.installAllDiagnosticTestPoints=function(){\r
    const state=getState();\r
    const points=getConfiguredPoints();\r
    state.diagnosticTestPointManualCleared=false;\r
    state.installedDiagnosticTestPointIds=points.map(point=>point.pointId);\r
    clearDiagnosticScanState(state);\r
    refreshDiagnosisViews();\r
    return true;\r
  };\r
\r
  function buildPointDiagnosis(point,activeFaults=getInjectedFaults()){\r
    if(!point) return null;\r
    const library=getRuntimeFaultLibrary();\r
    const activeAffectsPoint=activeFaults.some(fault=>pointDetectsFault(point,fault));\r
    const candidates=activeAffectsPoint?library\r
      .filter(fault=>pointDetectsFault(point,fault))\r
      .map(fault=>{\r
        const active=activeFaults.some(item=>getFaultKey(item)===fault.id);\r
        return {\r
        ...fault,\r
        faultTypeId:fault.id||getFaultKey(fault),\r
        active,\r
        confidence:active?0.96:(fault.confidence||0.68),\r
        confirmed:Boolean(getState().confirmedDiagnosticFaults?.[point.pointId]?.includes(fault.id||getFaultKey(fault)))\r
        };\r
      }):[];\r
    const state=getState();\r
    return {\r
      pointId:point.pointId,\r
      edgeId:point.edgeId,\r
      shortName:point.shortName,\r
      pointCode:point.shortName,\r
      pointName:point.name,\r
      pointNameZh:point.name,\r
      signalPathZh:point.signalPathZh||\`\${point.sourceName||point.signalId||point.edgeId}\${point.targetName?\` -> \${point.targetName}\`:''}\`,\r
      status:activeAffectsPoint?'abnormal':'normal',\r
      statusLabelZh:activeAffectsPoint?'疑似故障':'未发现异常',\r
      candidates,\r
      confirmedFaultTypeIds:arr(state.confirmedDiagnosticFaults?.[point.pointId]),\r
      time:Date.now()\r
    };\r
  }\r
\r
  window.detectDiagnosticTestPoint=function(pointId){\r
    const points=getConfiguredPoints();\r
    const point=points.find(item=>item.pointId===pointId);\r
    const result=buildPointDiagnosis(point);\r
    if(!result) return null;\r
    const state=getState();\r
    state.lastDiagnosticTestPointResult=result;\r
    state.testPointDiagnosis=result;\r
    state.selectedDiagnosticTestPointId=point.pointId;\r
    refreshDiagnosisViews();\r
    return result;\r
  };\r
  window.runDiagnosticTestPointDetection=window.detectDiagnosticTestPoint;\r
  window.diagnoseDiagnosticTestPoint=window.detectDiagnosticTestPoint;\r
\r
  window.runAllDiagnosticTestPointDetections=function(){\r
    const model=window.buildDiagnosticTestPointModel();\r
    const activeFaults=getInjectedFaults();\r
    const state=getState();\r
    const results=model.installed.map(point=>buildPointDiagnosis(point,activeFaults)).filter(Boolean);\r
    state.diagnosticScanResults=results;\r
    state.lastDiagnosticTestPointResult=results.find(result=>result.status==='abnormal')||results[0]||null;\r
    state.testPointDiagnosis=state.lastDiagnosticTestPointResult;\r
    state.diagnosticLastScanAt=Date.now();\r
    refreshDiagnosisViews();\r
    return results;\r
  };\r
\r
  window.toggleDiagnosticFaultConfirmation=function(pointId,faultTypeId,checked){\r
    const state=getState();\r
    if(!state.confirmedDiagnosticFaults||typeof state.confirmedDiagnosticFaults!=='object'){\r
      state.confirmedDiagnosticFaults={};\r
    }\r
    const ids=new Set(arr(state.confirmedDiagnosticFaults[pointId]));\r
    checked?ids.add(faultTypeId):ids.delete(faultTypeId);\r
    state.confirmedDiagnosticFaults[pointId]=Array.from(ids);\r
    if(state.testPointDiagnosis?.pointId===pointId){\r
      state.testPointDiagnosis.confirmedFaultTypeIds=Array.from(ids);\r
      state.testPointDiagnosis.candidates=arr(state.testPointDiagnosis.candidates).map(candidate=>({\r
        ...candidate,\r
        confirmed:ids.has(candidate.faultTypeId||candidate.id)\r
      }));\r
    }\r
    if(Array.isArray(state.diagnosticScanResults)){\r
      state.diagnosticScanResults=state.diagnosticScanResults.map(result=>{\r
        if(result.pointId!==pointId) return result;\r
        return {\r
          ...result,\r
          confirmedFaultTypeIds:Array.from(ids),\r
          candidates:arr(result.candidates).map(candidate=>({\r
            ...candidate,\r
            confirmed:ids.has(candidate.faultTypeId||candidate.id)\r
          }))\r
        };\r
      });\r
    }\r
    return true;\r
  };\r
\r
  window.openDiagnosticTestPointDialog=function(pointId){\r
    const diagnosis=window.detectDiagnosticTestPoint(pointId);\r
    if(!diagnosis) return null;\r
    let overlay=document.getElementById('ov-testpoint-diagnosis');\r
    if(!overlay){\r
      overlay=document.createElement('div');\r
      overlay.id='ov-testpoint-diagnosis';\r
      overlay.className='overlay testpoint-diagnosis-overlay';\r
      overlay.innerHTML=\`\r
        <div class="modal testpoint-diagnosis-modal" role="dialog" aria-modal="true">\r
          <div class="mhead testpoint-diagnosis-head">\r
            <div>\r
              <div class="mtitle">测点诊断结果</div>\r
              <div class="testpoint-diagnosis-subtitle">候选故障需要人工二次确认。</div>\r
            </div>\r
            <button type="button" class="dataflow-map-close" data-testpoint-diagnosis-close aria-label="关闭">&times;</button>\r
          </div>\r
          <div class="mbody testpoint-diagnosis-body" id="testpoint-diagnosis-body"></div>\r
        </div>\`;\r
      overlay.addEventListener('click',event=>{\r
        if(event.target===overlay||event.target.closest('[data-testpoint-diagnosis-close]')){\r
          overlay.classList.remove('open');\r
        }\r
      });\r
      document.body.appendChild(overlay);\r
    }\r
    const body=overlay.querySelector('#testpoint-diagnosis-body');\r
    if(body){\r
      body.innerHTML=\`\r
        <section class="testpoint-diagnosis-summary">\r
          <div><span>检测测点</span><strong>\${html(diagnosis.pointNameZh||diagnosis.pointName)}</strong></div>\r
          <div><span>信号链路</span><strong>\${html(diagnosis.signalPathZh||diagnosis.edgeId)}</strong></div>\r
          <div><span>诊断结论</span><strong>\${html(diagnosis.statusLabelZh)}</strong></div>\r
        </section>\r
        <section class="testpoint-candidate-list">\r
          \${diagnosis.candidates.length\r
            ?diagnosis.candidates.map(candidate=>\`\r
              <label class="testpoint-candidate" data-fault-candidate="\${html(candidate.faultTypeId)}">\r
                <input type="checkbox" data-confirm-fault-candidate="\${html(candidate.faultTypeId)}" \${candidate.confirmed?'checked':''}>\r
                <span class="testpoint-candidate__body">\r
                  <strong>\${html(candidate.name||candidate.faultTypeId)}</strong>\r
                  <em>\${html(candidate.category||candidate.layer||'候选故障')}</em>\r
                </span>\r
              </label>\`).join('')\r
            :'<div class="testpoint-candidate-empty">当前测点没有匹配到候选故障类型。</div>'}\r
        </section>\`;\r
      body.querySelectorAll('[data-confirm-fault-candidate]').forEach(input=>{\r
        input.addEventListener('change',()=>{\r
          window.toggleDiagnosticFaultConfirmation(pointId,input.dataset.confirmFaultCandidate,input.checked);\r
          refreshDiagnosisViews();\r
        });\r
      });\r
    }\r
    overlay.classList.add('open');\r
    return diagnosis;\r
  };\r
\r
  function isFaultCurrentlyInjected(faultId){\r
    const state=getState();\r
    if(!faultId){return false;}\r
    const matches=(item)=>{\r
      if(typeof faultEntryMatches==='function') return faultEntryMatches(item,faultId);\r
      if(!item||typeof item!=='object'){return false;}\r
      return getFaultKey(item)===faultId\r
        || item.id===faultId\r
        || item.modelId===faultId\r
        || item.faultId===faultId\r
        || item.faultModelId===faultId\r
        || item.faultTypeId===faultId;\r
    };\r
    if(['injectedFaults','activeFaults','faultInstances','selectedFaults','faultInjectionResults','appliedFaults'].some(key=>arr(state[key]).some(matches))){return true;}\r
    if(state.injectedFaultMap&&typeof state.injectedFaultMap==='object'){\r
      if(state.injectedFaultMap[faultId]){return true;}\r
      if(Object.values(state.injectedFaultMap).some(matches)){return true;}\r
    }\r
    const nodes=[...arr(state.nodes),...arr(state.modelNodes)];\r
    const edges=[...arr(state.edges),...arr(state.modelEdges)];\r
    if(nodes.some(node=>matches(node?.fault)||matches(node?.injectedFault)||arr(node?.faults).some(matches)||arr(node?.faultBindings).some(matches))){return true;}\r
    if(edges.some(edge=>matches(edge?.fault)||matches(edge?.injectedFault)||arr(edge?.faults).some(matches)||arr(edge?.faultBindings).some(matches))){return true;}\r
    return false;\r
  }\r
\r
  function normalizeFaultSelectionButton(){\r
    if(typeof document==='undefined') return;\r
    const selected=getState().selectedFaultCatalogId;\r
    const existing=document.querySelectorAll('[data-clear-selected-fault-catalog]');\r
    existing.forEach(node=>node.remove());\r
    if(!selected) return;\r
    const injected=isFaultCurrentlyInjected(selected);\r
    if(!injected) return;\r
    const footer=document.querySelector('.modal-footer,.dlg-actions,.dialog-actions,.ifm-actions,.modal .actions')||document.querySelector('#faultLibModal,.modal.show,.modal');\r
    const button=document.createElement('button');\r
    button.type='button';\r
    button.className='compact-clear-fault-selection';\r
    button.dataset.clearSelectedFaultCatalog='1';\r
    button.textContent='移除已注入故障';\r
    if(footer) footer.insertBefore(button,footer.firstChild||null);\r
    const selectedCard=document.querySelector('.ifm-item.on,.fault-card.on,.fault-item.on');\r
    if(selectedCard){\r
      const inline=document.createElement('button');\r
      inline.type='button';\r
      inline.className='compact-clear-fault-selection-inline';\r
      inline.dataset.clearSelectedFaultCatalog='1';\r
      inline.textContent='移除故障';\r
      selectedCard.appendChild(inline);\r
    }\r
  }\r
\r
  function removeImportedFaultModelById(id){\r
    const state=getState();\r
    if(!id||!Array.isArray(state.importedFaultModels)) return false;\r
    const before=state.importedFaultModels.length;\r
    state.importedFaultModels=state.importedFaultModels.filter(model=>getFaultKey(model)!==id&&model.id!==id&&model.modelId!==id);\r
    const removed=state.importedFaultModels.length!==before;\r
    if(removed){\r
      arr(state.availableFaultModels).forEach(model=>{\r
        if(model?.id===id||model?.modelId===id){\r
          delete model.imported;\r
          delete model.isImported;\r
        }\r
      });\r
      state.faultModels=state.importedFaultModels.length;\r
      state.faultLoaded=state.importedFaultModels.length>0;\r
      if(state.selectedFaultCatalogId===id) state.selectedFaultCatalogId='';\r
      state.faultCatalogSelectionCleared=true;\r
      if(state.injectSelectionId===id) state.injectSelectionId='';\r
      if(state.protocolInjectSelectionId===id) state.protocolInjectSelectionId='';\r
      if(typeof document!=='undefined'){\r
        document.querySelectorAll('[data-fault-id]').forEach(item=>{\r
          if(item.getAttribute('data-fault-id')===id){\r
            item.classList.remove('is-imported');\r
            item.querySelectorAll('.ifm-state').forEach(badge=>badge.remove());\r
          }\r
        });\r
      }\r
      if(typeof updateUI==='function') updateUI();\r
      if(typeof window.renderFaultCatalogList==='function') window.renderFaultCatalogList();\r
      if(typeof toast==='function') toast('已撤销该故障导入','s');\r
    }\r
    return removed;\r
  }\r
  window.removeImportedFaultModel=removeImportedFaultModelById;\r
\r
  const previousSelectFaultCatalog=window.selectFaultCatalog||(typeof selectFaultCatalog!=='undefined'?selectFaultCatalog:null);\r
  window.selectFaultCatalog=function(id){\r
    const state=getState();\r
    if(state.selectedFaultCatalogId===id){\r
      state.selectedFaultCatalogId='';\r
      state.faultCatalogSelectionCleared=true;\r
      if(typeof window.renderFaultCatalogList==='function') window.renderFaultCatalogList();\r
      normalizeFaultSelectionButton();\r
      return;\r
    }\r
    state.faultCatalogSelectionCleared=false;\r
    const result=previousSelectFaultCatalog?previousSelectFaultCatalog(id):undefined;\r
    normalizeFaultSelectionButton();\r
    return result;\r
  };\r
  if(typeof selectFaultCatalog!=='undefined') selectFaultCatalog=window.selectFaultCatalog;\r
\r
  const previousSelectFaultCatalogModel=window.selectFaultCatalogModel||(typeof selectFaultCatalogModel!=='undefined'?selectFaultCatalogModel:null);\r
  window.selectFaultCatalogModel=function(id){\r
    const state=getState();\r
    if(state.selectedFaultCatalogId===id){\r
      state.selectedFaultCatalogId='';\r
      state.faultCatalogSelectionCleared=true;\r
      if(typeof window.renderFaultCatalogList==='function') window.renderFaultCatalogList();\r
      normalizeFaultSelectionButton();\r
      return;\r
    }\r
    state.faultCatalogSelectionCleared=false;\r
    const result=previousSelectFaultCatalogModel?previousSelectFaultCatalogModel(id):window.selectFaultCatalog(id);\r
    normalizeFaultSelectionButton();\r
    return result;\r
  };\r
  if(typeof selectFaultCatalogModel!=='undefined') selectFaultCatalogModel=window.selectFaultCatalogModel;\r
\r
  const previousRenderFaultCatalogList=window.renderFaultCatalogList||(typeof renderFaultCatalogList!=='undefined'?renderFaultCatalogList:null);\r
  window.renderFaultCatalogList=function(){\r
    const result=previousRenderFaultCatalogList?previousRenderFaultCatalogList.apply(this,arguments):undefined;\r
    const state=getState();\r
    if(state.faultCatalogSelectionCleared){\r
      state.selectedFaultCatalogId='';\r
      document.querySelectorAll('#ifm-list-container .ifm-item.on,.fault-card.on,.fault-item.on').forEach(item=>item.classList.remove('on'));\r
      const detail=document.getElementById('fault-type-detail');\r
      if(detail){detail.innerHTML='<div class="ifm-detail-empty">请选择一个故障类型。</div>';}\r
      const hint=document.getElementById('ifm-sel-hint');\r
      if(hint){hint.textContent='已选：未选择故障模型';}\r
    }\r
    normalizeFaultSelectionButton();\r
    return result;\r
  };\r
  if(typeof renderFaultCatalogList!=='undefined') renderFaultCatalogList=window.renderFaultCatalogList;\r
\r
  const previousRenderDataflowPanel=window.renderDataflowPanel||(typeof renderDataflowPanel!=='undefined'?renderDataflowPanel:null);\r
  window.renderDataflowPanel=function(force=false){\r
    const host=document.getElementById('dataflow-panel')||document.querySelector('.dataflow-panel');\r
    if(host){\r
      const simulationRunning=typeof SIM!=='undefined'&&SIM.running&&!SIM.paused;\r
      if(!force&&simulationRunning&&host.querySelector('[data-testpoint-workbench]')){\r
        return;\r
      }\r
      host.innerHTML=renderCompactDiagnosisConsole();\r
      return;\r
    }\r
    try{\r
      return previousRenderDataflowPanel?previousRenderDataflowPanel.apply(this,arguments):undefined;\r
    }catch(err){\r
      console.warn('[diagnosis-console] previous renderDataflowPanel failed',err);\r
      return undefined;\r
    }\r
  };\r
  if(typeof renderDataflowPanel!=='undefined') renderDataflowPanel=window.renderDataflowPanel;\r
\r
  window.renderDiagnosticTestPointWorkbench=function(){\r
    return renderCompactDiagnosisConsole();\r
  };\r
  if(typeof renderDiagnosticTestPointWorkbench!=='undefined') renderDiagnosticTestPointWorkbench=window.renderDiagnosticTestPointWorkbench;\r
\r
  function getAnnotationVisibility(){\r
    const state=getState();\r
    if(!state.diagnosticAnnotationVisibility||typeof state.diagnosticAnnotationVisibility!=='object'){\r
      state.diagnosticAnnotationVisibility={testpoints:true,faults:true,propagation:false};\r
    }\r
    return state.diagnosticAnnotationVisibility;\r
  }\r
\r
  function isAnnotationVisible(kind){\r
    const visibility=getAnnotationVisibility();\r
    return visibility[kind]!==false;\r
  }\r
\r
  function findCanvasPathForEdge(edgeId){\r
    if(!edgeId||typeof document==='undefined') return null;\r
    return Array.from(document.querySelectorAll('.edge-path[data-edge-id],path[data-edge-id]')).find(item=>{\r
      return item.dataset?.edgeId===edgeId||item.getAttribute('data-edge-id')===edgeId||item.id===edgeId;\r
    })||null;\r
  }\r
\r
  function getNodeCanvasCenter(nodeId,index=0){\r
    const node=getRuntimeNodes().find(item=>item.id===nodeId);\r
    if(!node){\r
      return {x:120+(index%6)*74,y:110+Math.floor(index/6)*52};\r
    }\r
    const width=Number(node.w||node.width||node.props?.width||160);\r
    const height=Number(node.h||node.height||node.props?.height||84);\r
    return {\r
      x:Number(node.x||0)+width/2,\r
      y:Number(node.y||0)+height/2\r
    };\r
  }\r
\r
  function getEdgeCanvasPoint(edgeId,ratio=0.52,index=0){\r
    const path=findCanvasPathForEdge(edgeId);\r
    if(path?.getTotalLength&&path?.getPointAtLength){\r
      try{\r
        const length=path.getTotalLength();\r
        if(Number.isFinite(length)&&length>0){\r
          const point=path.getPointAtLength(length*ratio);\r
          return {x:point.x,y:point.y};\r
        }\r
      }catch(err){}\r
    }\r
    const edge=getRuntimeEdges().find(item=>item.id===edgeId);\r
    if(edge){\r
      const source=getNodeCanvasCenter(edgeSourceId(edge),index);\r
      const target=getNodeCanvasCenter(edgeTargetId(edge),index);\r
      return {x:(source.x+target.x)/2,y:(source.y+target.y)/2};\r
    }\r
    return {x:140+(index%7)*78,y:130+Math.floor(index/7)*52};\r
  }\r
\r
  function resolveFaultAnnotationTarget(model){\r
    if(!model) return null;\r
    const nodes=getRuntimeNodes();\r
    const edges=getRuntimeEdges();\r
    const api=window.__GZ_FAULT_INJECTION_RUNTIME__;\r
    const compatible=api?.findCompatibleFaultTarget?.(model,{\r
      nodes,\r
      edges,\r
      selectedNodeId:getState().selBlk,\r
      selectedEdgeId:getState().selEdge\r
    });\r
    if(compatible?.kind==='edge'&&edges.some(edge=>edge.id===compatible.id)){\r
      return {kind:'edge',id:compatible.id};\r
    }\r
    if(compatible?.kind==='node'&&nodes.some(node=>node.id===compatible.id)){\r
      return {kind:'node',id:compatible.id};\r
    }\r
    const edgeIds=[\r
      model.targetEdgeId,\r
      model.targetEdgeID,\r
      model.injectionDesign?.targetEdgeId,\r
      model.injectionTarget?.edgeId,\r
      ...arr(model.typicalTargets).filter(item=>String(item).startsWith('edge-'))\r
    ].filter(Boolean);\r
    const edge=edgeIds.map(id=>edges.find(item=>item.id===id)).find(Boolean);\r
    if(edge) return {kind:'edge',id:edge.id};\r
    const nodeIds=[\r
      model.targetNodeId,\r
      model.targetNodeID,\r
      model.recommendedModuleId,\r
      model.injectionDesign?.targetNodeId,\r
      model.injectionDesign?.targetId,\r
      model.injectionTarget?.nodeId,\r
      ...arr(model.typicalTargets).filter(item=>String(item).startsWith('node-'))\r
    ].filter(Boolean);\r
    const node=nodeIds.map(id=>nodes.find(item=>item.id===id)).find(Boolean);\r
    if(node) return {kind:'node',id:node.id};\r
    return null;\r
  }\r
\r
  function getFaultAnnotationModels(){\r
    const map=new Map();\r
    const append=(items)=>{\r
      arr(items).forEach(model=>{\r
        const id=model?.id||model?.modelId||model?.faultModelId||model?.faultId;\r
        if(!id) return;\r
        const existing=map.get(id);\r
        map.set(id,existing?{...existing,...model,id}:{...model,id});\r
      });\r
    };\r
    append(getRuntimeFaultLibrary());\r
    if(typeof window.getFaultTypeCatalogModels==='function'){\r
      append(window.getFaultTypeCatalogModels());\r
    }\r
    append(getState().availableFaultModels);\r
    return Array.from(map.values()).filter(model=>resolveFaultAnnotationTarget(model));\r
  }\r
\r
  function getAnnotationTargetLabel(group){\r
    if(!group) return '注入位置未绑定';\r
    if(group.targetKind==='edge'){\r
      const edge=getRuntimeEdges().find(item=>item.id===group.targetId);\r
      const edgeName=EDGE_NAME_ZH[group.targetId]||edge?.label||edge?.signalLabel||edge?.name||group.targetId;\r
      const source=edge?edgeEndpointName(edge,'source'):'';\r
      const target=edge?edgeEndpointName(edge,'target'):'';\r
      const path=source&&target?\`（\${source} → \${target}）\`:'';\r
      return \`连线：\${edgeName}\${path}\`;\r
    }\r
    const node=getRuntimeNodes().find(item=>item.id===group.targetId);\r
    const nodeName=NODE_NAME_ZH[group.targetId]||node?.name||node?.label||node?.props?.name||node?.type||group.targetId;\r
    return \`模块：\${nodeName}\`;\r
  }\r
\r
  function shortenAnnotationTargetLabel(label){\r
    const clean=String(label||'')\r
      .replace(/^模块：/,'')\r
      .replace(/^连线：/,'')\r
      .replace(/（.*$/,'')\r
      .trim();\r
    return clean.length>8?\`\${clean.slice(0,8)}…\`:clean;\r
  }\r
\r
  window.buildFaultInjectionAnnotationModel=function(){\r
    const groups=new Map();\r
    getFaultAnnotationModels().forEach(model=>{\r
      const target=resolveFaultAnnotationTarget(model);\r
      if(!target) return;\r
      const key=\`\${target.kind}:\${target.id}\`;\r
      if(!groups.has(key)){\r
        groups.set(key,{targetKind:target.kind,targetId:target.id,models:[]});\r
      }\r
      groups.get(key).models.push(model);\r
    });\r
    return Array.from(groups.values()).map((group,index)=>{\r
      const point=group.targetKind==='edge'\r
        ?getEdgeCanvasPoint(group.targetId,0.34,index)\r
        :getNodeCanvasCenter(group.targetId,index);\r
      const first=group.models[0]||{};\r
      return {\r
        ...group,\r
        markerId:\`fault-marker-\${index+1}\`,\r
        shortName:\`F\${index+1}\`,\r
        label:first.layer==='protocol'?'协议':first.layer==='physical'?'物理':'故障',\r
        targetLabel:getAnnotationTargetLabel(group),\r
        targetEdgeId:group.targetKind==='edge'?group.targetId:'',\r
        targetNodeId:group.targetKind==='node'?group.targetId:'',\r
        x:point.x,\r
        y:point.y,\r
        active:group.models.some(model=>isFaultCurrentlyInjected(model.id||model.modelId||model.faultModelId||model.name))\r
      };\r
    });\r
  };\r
\r
  window.locateFaultCatalogInjectionTarget=function(faultId){\r
    const model=getFaultAnnotationModels().find(item=>{\r
      return (item.id||item.modelId||item.faultModelId||item.faultId||item.name)===faultId;\r
    })||getRuntimeFaultLibrary().find(item=>item.id===faultId);\r
    const target=resolveFaultAnnotationTarget(model);\r
    if(!model||!target) return null;\r
    const state=getState();\r
    state.selectedFaultCatalogId=faultId;\r
    state.selectedFaultAnnotationId=faultId;\r
    if(target.kind==='edge'){\r
      if(typeof selectEdge==='function') selectEdge(target.id);\r
      else{\r
        state.selEdge=target.id;\r
        state.selBlk='';\r
      }\r
      const edge=getRuntimeEdges().find(item=>item.id===target.id);\r
      if(typeof selectEdge!=='function'&&typeof renderEdges==='function') renderEdges();\r
      if(typeof selectEdge!=='function'&&edge&&typeof renderPropertyPanel==='function') renderPropertyPanel(edge);\r
    }else{\r
      if(typeof selectNode==='function') selectNode(target.id);\r
      else{\r
        state.selBlk=target.id;\r
        state.selEdge='';\r
      }\r
      const node=getRuntimeNodes().find(item=>item.id===target.id);\r
      if(typeof selectNode!=='function'&&typeof renderModelNodes==='function') renderModelNodes();\r
      if(typeof selectNode!=='function'&&node&&typeof renderPropertyPanel==='function') renderPropertyPanel(node);\r
    }\r
    if(typeof window.renderFaultCatalogList==='function') window.renderFaultCatalogList();\r
    if(typeof window.renderCanvasDiagnosticAnnotations==='function') window.renderCanvasDiagnosticAnnotations();\r
    return {faultId,targetKind:target.kind,targetId:target.id};\r
  };\r
\r
  function renderCanvasFaultInjectionMarkers(){\r
    if(typeof document==='undefined') return;\r
    const svg=document.getElementById('edge-layer');\r
    if(!svg||!svg.ownerDocument?.createElementNS) return;\r
    const host=document.getElementById('edge-group')||svg;\r
    let layer=document.getElementById('diagnostic-fault-marker-layer');\r
    if(!layer||layer.parentNode!==host){\r
      if(layer) layer.remove();\r
      layer=document.createElementNS('http://www.w3.org/2000/svg','g');\r
      layer.id='diagnostic-fault-marker-layer';\r
      host.appendChild(layer);\r
    }\r
    layer.innerHTML='';\r
    if(!isAnnotationVisible('faults')) return;\r
    window.buildFaultInjectionAnnotationModel().forEach(annotation=>{\r
      const marker=document.createElementNS('http://www.w3.org/2000/svg','g');\r
      marker.setAttribute('class',\`canvas-fault-marker\${annotation.active?' is-active':''}\${getState().selectedFaultAnnotationId&&annotation.models.some(model=>model.id===getState().selectedFaultAnnotationId)?' is-selected':''}\`);\r
      marker.setAttribute('data-canvas-fault-marker','true');\r
      marker.setAttribute('data-target-kind',annotation.targetKind);\r
      marker.setAttribute('data-target-id',annotation.targetId);\r
      marker.setAttribute('transform',\`translate(\${annotation.x} \${annotation.y})\`);\r
      const title=document.createElementNS('http://www.w3.org/2000/svg','title');\r
      title.textContent=\`\${annotation.shortName} \${annotation.label}注入点：\${annotation.targetLabel}，\${annotation.models.length} 类故障\`;\r
      const halo=document.createElementNS('http://www.w3.org/2000/svg','circle');\r
      halo.setAttribute('class','canvas-fault-marker__halo');\r
      halo.setAttribute('r','14');\r
      const pin=document.createElementNS('http://www.w3.org/2000/svg','rect');\r
      pin.setAttribute('class','canvas-fault-marker__pin');\r
      pin.setAttribute('x','-11');\r
      pin.setAttribute('y','-11');\r
      pin.setAttribute('width','22');\r
      pin.setAttribute('height','22');\r
      pin.setAttribute('rx','6');\r
      const label=document.createElementNS('http://www.w3.org/2000/svg','text');\r
      label.setAttribute('class','canvas-fault-marker__label');\r
      label.setAttribute('text-anchor','middle');\r
      label.setAttribute('dominant-baseline','central');\r
      label.textContent=annotation.shortName;\r
      const count=document.createElementNS('http://www.w3.org/2000/svg','text');\r
      count.setAttribute('class','canvas-fault-marker__count');\r
      count.setAttribute('x','14');\r
      count.setAttribute('y','-10');\r
      count.textContent=String(annotation.models.length);\r
      const targetText=document.createElementNS('http://www.w3.org/2000/svg','text');\r
      targetText.setAttribute('class','canvas-fault-marker__target');\r
      targetText.setAttribute('text-anchor','middle');\r
      targetText.setAttribute('x','0');\r
      targetText.setAttribute('y','24');\r
      targetText.textContent=shortenAnnotationTargetLabel(annotation.targetLabel);\r
      marker.appendChild(title);\r
      marker.appendChild(halo);\r
      marker.appendChild(pin);\r
      marker.appendChild(label);\r
      marker.appendChild(count);\r
      marker.appendChild(targetText);\r
      marker.addEventListener('click',event=>{\r
        event.stopPropagation();\r
        const first=annotation.models[0];\r
        if(first?.id) window.locateFaultCatalogInjectionTarget(first.id);\r
      });\r
      layer.appendChild(marker);\r
    });\r
  }\r
\r
  window.renderCanvasDiagnosticTestPointMarkers=function(){\r
    if(typeof document==='undefined') return;\r
    const svg=document.getElementById('edge-layer');\r
    if(!svg||!svg.ownerDocument?.createElementNS) return;\r
    const host=document.getElementById('edge-group')||svg;\r
    let layer=document.getElementById('diagnostic-testpoint-marker-layer');\r
    if(!layer||layer.parentNode!==host){\r
      if(layer) layer.remove();\r
      layer=document.createElementNS('http://www.w3.org/2000/svg','g');\r
      layer.id='diagnostic-testpoint-marker-layer';\r
      host.appendChild(layer);\r
    }\r
    layer.innerHTML='';\r
    const model=window.buildDiagnosticTestPointModel();\r
    if(!isAnnotationVisible('testpoints')) return;\r
    const installedIds=new Set(model.installed.map(point=>point.pointId));\r
    const scanByPoint=new Map(arr(getState().diagnosticScanResults).map(result=>[result.pointId,result]));\r
    model.positions.forEach((point,index)=>{\r
      const installed=installedIds.has(point.pointId);\r
      const abnormal=scanByPoint.get(point.pointId)?.status==='abnormal';\r
      const pt=point.edgeId?getEdgeCanvasPoint(point.edgeId,0.52,index):getNodeCanvasCenter(point.nodeId,index);\r
      const marker=document.createElementNS('http://www.w3.org/2000/svg','g');\r
      marker.setAttribute('class',\`canvas-testpoint-marker\${installed?' is-installed':' is-uninstalled'}\${abnormal?' is-abnormal':''}\${getState().selectedDiagnosticTestPointId===point.pointId?' is-selected':''}\`);\r
      marker.setAttribute('data-canvas-testpoint-marker','true');\r
      marker.setAttribute('data-testpoint-id',point.pointId);\r
      marker.setAttribute('data-edge-id',point.edgeId||'');\r
      marker.setAttribute('transform',\`translate(\${pt.x} \${pt.y})\`);\r
      const title=document.createElementNS('http://www.w3.org/2000/svg','title');\r
      title.textContent=\`\${point.shortName||\`M\${index+1}\`} \${point.name||''}：\${installed?'点击检测':'点击安装'}\`;\r
      const halo=document.createElementNS('http://www.w3.org/2000/svg','circle');\r
      halo.setAttribute('class','canvas-testpoint-marker__halo');\r
      halo.setAttribute('r','15');\r
      const pin=document.createElementNS('http://www.w3.org/2000/svg','circle');\r
      pin.setAttribute('class','canvas-testpoint-marker__pin');\r
      pin.setAttribute('r','10');\r
      const label=document.createElementNS('http://www.w3.org/2000/svg','text');\r
      label.setAttribute('class','canvas-testpoint-marker__label');\r
      label.setAttribute('text-anchor','middle');\r
      label.setAttribute('dominant-baseline','central');\r
      label.textContent=point.shortName||\`M\${index+1}\`;\r
      marker.appendChild(title);\r
      marker.appendChild(halo);\r
      marker.appendChild(pin);\r
      marker.appendChild(label);\r
      marker.addEventListener('click',event=>{\r
        event.stopPropagation();\r
        getState().selectedDiagnosticTestPointId=point.pointId;\r
        if(installed){\r
          window.detectDiagnosticTestPoint(point.pointId);\r
        }else{\r
          window.addDiagnosticTestPoint(point.pointId);\r
        }\r
      });\r
      layer.appendChild(marker);\r
    });\r
  };\r
  if(typeof renderCanvasDiagnosticTestPointMarkers!=='undefined') renderCanvasDiagnosticTestPointMarkers=window.renderCanvasDiagnosticTestPointMarkers;\r
\r
  window.renderCanvasDiagnosticAnnotations=function(){\r
    window.renderCanvasDiagnosticTestPointMarkers();\r
    renderCanvasFaultInjectionMarkers();\r
  };\r
\r
  window.setDiagnosticAnnotationVisibility=function(kind,visible){\r
    const visibility=getAnnotationVisibility();\r
    visibility[kind]=Boolean(visible);\r
    window.renderCanvasDiagnosticAnnotations();\r
  };\r
\r
  const previousRenderEdgesForDiagnosticMarkers=window.renderEdges||(typeof renderEdges!=='undefined'?renderEdges:null);\r
  if(previousRenderEdgesForDiagnosticMarkers&&!window.__diagnosticMarkersRenderEdgesWrapped){\r
    window.__diagnosticMarkersRenderEdgesWrapped=true;\r
    window.renderEdges=function(){\r
      const state=getState();\r
      const installedSnapshot=Array.isArray(state.installedDiagnosticTestPointIds)\r
        ?[...state.installedDiagnosticTestPointIds]\r
        :null;\r
      const selectedSnapshot=state.selectedDiagnosticTestPointId||null;\r
      const result=previousRenderEdgesForDiagnosticMarkers.apply(this,arguments);\r
      if(installedSnapshot){\r
        state.installedDiagnosticTestPointIds=installedSnapshot;\r
      }\r
      if(selectedSnapshot){\r
        state.selectedDiagnosticTestPointId=selectedSnapshot;\r
      }\r
      if(typeof window.renderCanvasDiagnosticAnnotations==='function'){\r
        try{window.renderCanvasDiagnosticAnnotations();}catch(err){console.warn('[diagnosis-console] marker render after edges failed',err);}\r
      }else if(typeof window.renderCanvasDiagnosticTestPointMarkers==='function'){\r
        try{window.renderCanvasDiagnosticTestPointMarkers();}catch(err){console.warn('[diagnosis-console] marker render after edges failed',err);}\r
      }\r
      return result;\r
    };\r
    if(typeof renderEdges!=='undefined') renderEdges=window.renderEdges;\r
  }\r
\r
  if(typeof document!=='undefined'&&!window.__compactDiagnosisConsoleEvents){\r
    window.__compactDiagnosisConsoleEvents=true;\r
    document.addEventListener('click',event=>{\r
      const locateFault=event.target.closest?.('[data-locate-fault-injection]');\r
      if(locateFault){\r
        event.preventDefault();\r
        const located=window.locateFaultCatalogInjectionTarget?.(locateFault.getAttribute('data-locate-fault-injection'));\r
        if(located&&typeof toast==='function') toast('已在画布中标出注入位置','s');\r
        return;\r
      }\r
      const install=event.target.closest?.('[data-install-testpoint]');\r
      if(install){\r
        event.preventDefault();\r
        const id=install.getAttribute('data-install-testpoint');\r
        const model=window.buildDiagnosticTestPointModel();\r
        const already=model.installed.some(point=>point.pointId===id);\r
        already?window.removeDiagnosticTestPoint(id):window.addDiagnosticTestPoint(id);\r
        return;\r
      }\r
      const remove=event.target.closest?.('[data-remove-testpoint]');\r
      if(remove){\r
        event.preventDefault();\r
        window.removeDiagnosticTestPoint(remove.getAttribute('data-remove-testpoint'));\r
        return;\r
      }\r
      const detect=event.target.closest?.('[data-detect-testpoint]');\r
      if(detect){\r
        event.preventDefault();\r
        window.openDiagnosticTestPointDialog(detect.getAttribute('data-detect-testpoint'));\r
        return;\r
      }\r
      if(event.target.closest?.('[data-clear-testpoints]')){\r
        event.preventDefault();\r
        window.clearDiagnosticTestPoints();\r
        return;\r
      }\r
      if(event.target.closest?.('[data-install-all-testpoints]')){\r
        event.preventDefault();\r
        window.installAllDiagnosticTestPoints();\r
        return;\r
      }\r
      if(event.target.closest?.('[data-run-fault-detection]')){\r
        event.preventDefault();\r
        window.runAllDiagnosticTestPointDetections();\r
        return;\r
      }\r
      if(event.target.closest?.('[data-clear-diagnostic-result]')){\r
        event.preventDefault();\r
        clearDiagnosticScanState(getState());\r
        refreshDiagnosisViews();\r
        return;\r
      }\r
      if(event.target.closest?.('[data-d-matrix-export]')){\r
        event.preventDefault();\r
        window.exportDetectionMatrixCsv?.();\r
        return;\r
      }\r
      const confirm=event.target.closest?.('[data-confirm-diagnostic-fault]');\r
      if(confirm){\r
        const state=getState();\r
        const id=confirm.getAttribute('data-confirm-diagnostic-fault');\r
        const confirmed=new Set(arr(state.confirmedDiagnosticFaultIds));\r
        confirm.checked?confirmed.add(id):confirmed.delete(id);\r
        state.confirmedDiagnosticFaultIds=Array.from(confirmed);\r
        const pointId=confirm.getAttribute('data-confirm-point-id')||state.lastDiagnosticTestPointResult?.pointId;\r
        if(pointId){\r
          window.toggleDiagnosticFaultConfirmation(pointId,id,confirm.checked);\r
        }\r
        return;\r
      }\r
      if(event.target.closest?.('[data-clear-selected-fault-catalog]')){\r
        event.preventDefault();\r
        const state=getState();\r
        const selected=state.selectedFaultCatalogId;\r
        if(isFaultCurrentlyInjected(selected)&&typeof window.removeInjectedFault==='function'){\r
          window.removeInjectedFault(selected);\r
          if(typeof window.renderFaultCatalogList==='function') window.renderFaultCatalogList();\r
          if(typeof updateUI==='function') updateUI();\r
          if(typeof toast==='function') toast('已移除该故障','s');\r
        }else if(!removeImportedFaultModelById(selected)){\r
          state.selectedFaultCatalogId='';\r
          if(typeof window.renderFaultCatalogList==='function') window.renderFaultCatalogList();\r
        }\r
      }\r
    });\r
  }\r
\r
  const previousLoadDemo=window.loadUavFaultDiagnosticDemo;\r
  if(previousLoadDemo){\r
    window.loadUavFaultDiagnosticDemo=function(){\r
      const demo=previousLoadDemo.apply(this,arguments);\r
      const state=getState();\r
      state.availableFaultModels=arr(state.availableFaultModels).length?state.availableFaultModels:arr(state.faultLibrary);\r
      state.diagnosticTestPoints=arr(state.diagnosticTestPoints).length?state.diagnosticTestPoints:arr(demo?.testPoints);\r
      state.installedDiagnosticTestPointIds=arr(state.diagnosticTestPoints).map(point=>point.pointId||point.id);\r
      refreshDiagnosisViews();\r
      return demo;\r
    };\r
  }\r
})();\r
\r
;(function installCanvasVisualSemanticsAfterAllOverrides(){\r
  if(typeof window==='undefined') return;\r
\r
  function getState(){\r
    return window.__GZ_STATE__||(typeof S!=='undefined'?S:{});\r
  }\r
\r
  function nodeText(node){\r
    return [\r
      node?.id,\r
      node?.props?.name,\r
      node?.props?.moduleType,\r
      node?.props?.instrumentType\r
    ].filter(Boolean).join(' ').toLowerCase();\r
  }\r
\r
  function getVisualKind(node){\r
    const text=nodeText(node);\r
    if(!node) return 'unknown';\r
    if(node.type==='signal_source'||node.type==='subsystem_in_port') return 'source';\r
    if(node.type==='sum_block') return 'sum';\r
    if(node.type==='gain_block'||node.type==='mux_block'||node.type==='middle_var_assign') return 'utility';\r
    if(node.type?.startsWith('fault_')) return 'fault';\r
    if(node.type==='subsystem_block'||node.type==='subsystem_out_port') return 'subsystem';\r
    if(node.type?.startsWith('instrument_')||node.type==='instrument_signal_flow') return 'instrument';\r
    if(/imu|sensor|gyro|测量|反馈/.test(text)) return 'sensor';\r
    if(/motor|actuator|mixer|thrust|电机|执行/.test(text)) return 'actuator';\r
    if(/dynamic|plant|airframe|vehicle|动力|机体/.test(text)) return 'plant';\r
    if(/allocat|分配/.test(text)) return 'allocator';\r
    if(/control|controller|pid|控制/.test(text)) return 'control';\r
    return 'process';\r
  }\r
\r
  function decorateCanvasNodes(){\r
    const state=getState();\r
    if(!Array.isArray(state.modelNodes)||typeof document==='undefined') return;\r
    const byId=new Map(state.modelNodes.map(node=>[node.id,node]));\r
    document.querySelectorAll('.blk[id^="b-"]').forEach(el=>{\r
      const node=byId.get(el.id.replace(/^b-/,''));\r
      const kind=getVisualKind(node);\r
      Array.from(el.classList)\r
        .filter(cls=>cls.startsWith('canvas-node--'))\r
        .forEach(cls=>el.classList.remove(cls));\r
      el.classList.add(\`canvas-node--\${kind}\`);\r
      el.dataset.visualKind=kind;\r
    });\r
  }\r
\r
  const previousRenderModelNodes=window.renderModelNodes||(typeof renderModelNodes!=='undefined'?renderModelNodes:null);\r
  if(previousRenderModelNodes&&!window.__canvasVisualSemanticAfterAllRenderWrapped){\r
    window.__canvasVisualSemanticAfterAllRenderWrapped=true;\r
    window.renderModelNodes=function(){\r
      const result=previousRenderModelNodes.apply(this,arguments);\r
      decorateCanvasNodes();\r
      return result;\r
    };\r
    if(typeof renderModelNodes!=='undefined') renderModelNodes=window.renderModelNodes;\r
  }\r
\r
  const previousUpdateUI=window.updateUI||(typeof updateUI!=='undefined'?updateUI:null);\r
  if(previousUpdateUI&&!window.__canvasVisualSemanticAfterAllUpdateWrapped){\r
    window.__canvasVisualSemanticAfterAllUpdateWrapped=true;\r
    window.updateUI=function(){\r
      const result=previousUpdateUI.apply(this,arguments);\r
      decorateCanvasNodes();\r
      return result;\r
    };\r
    if(typeof updateUI!=='undefined') updateUI=window.updateUI;\r
  }\r
\r
  window.decorateCanvasNodesByVisualKind=decorateCanvasNodes;\r
  setTimeout(decorateCanvasNodes,0);\r
})();\r
`,Ks=`canvas-root`,qs=`顶层`;function J(e){return JSON.parse(JSON.stringify(e))}function Js(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}function Ys(e){return Array.isArray(e)?e:[]}function Xs(e){let t=J(e??{});return{inputs:Array.isArray(t.inputs)?J(t.inputs):[],outputs:Array.isArray(t.outputs)?J(t.outputs):[],middleVars:Array.isArray(t.middleVars)?J(t.middleVars):[]}}function Zs(e){let t=J(e??{});return{...qo().executionConfig,...t}}function Qs(e){if(!e||typeof e!=`object`)return qo();let t={...qo(),...J(e)};return t.executionConfig=Zs(e.executionConfig),t.portMapping={...qo().portMapping,...Xs(e.portMapping)},t}function $s(e,t){return e.reduce((e,n)=>{let r=Number(String(n?.id??``).replace(`${t}-`,``));return Number.isFinite(r)?Math.max(e,r):e},0)}function ec(e,t){return Object.values(Js(e)?e:{}).flatMap(e=>Js(e)?Ys(e[t]):[])}function tc(e,t,n){return $s(ec(e,t),n)}function nc(e){let t=Js(e)?J(e):{};return{...t,pythonBinding:t.type===`simulation_block`?Qs(t.pythonBinding):t.pythonBinding??null}}function rc(e){return Js(e)?J(e):{}}function ic(e=Ks,t=qs){return{id:e,name:t,parentSubsystemNodeId:null,viewport:{scale:1,offsetX:0,offsetY:0},nodes:[],edges:[]}}function ac(e,t=Ks){let n=Js(e)?J(e):{};return{id:n.id??t,name:n.name??(t===Ks?qs:`未命名画布`),parentSubsystemNodeId:n.parentSubsystemNodeId??null,viewport:{scale:n.viewport?.scale??1,offsetX:n.viewport?.offsetX??0,offsetY:n.viewport?.offsetY??0},nodes:Ys(n.nodes).map(nc),edges:Ys(n.edges).map(rc)}}function oc(e){let t=Js(e)?e:{},n=Js(t.canvases)?t.canvases:null;if(!n){let e=ic();return e.nodes=Ys(t.modelNodes).map(nc),e.edges=Ys(t.modelEdges).map(rc),{rootCanvasId:Ks,activeCanvasId:Ks,canvasTrail:[Ks],canvases:{[Ks]:e}}}let r=t.rootCanvasId??Ks,i={};Object.entries(n).forEach(([e,t])=>{i[e]=ac(t,e)}),i[r]||(i[r]=ic(r));let a=i[t.activeCanvasId]?t.activeCanvasId:r,o=Ys(t.canvasTrail).filter(e=>typeof e==`string`&&i[e]),s=o.length>0?o:[r];return s[s.length-1]!==a&&s.push(a),{rootCanvasId:r,activeCanvasId:a,canvasTrail:s,canvases:i}}function sc(e){let t=Js(e)?J(e):{},n=oc(t),r=n.canvases[n.activeCanvasId]?.viewport??{};n.canvases[n.activeCanvasId]&&(n.canvases[n.activeCanvasId].viewport={scale:Number.isFinite(t.canvasScale)?t.canvasScale:r.scale??1,offsetX:Number.isFinite(t.canvasOffsetX)?t.canvasOffsetX:r.offsetX??0,offsetY:Number.isFinite(t.canvasOffsetY)?t.canvasOffsetY:r.offsetY??0});let i=n.canvases[n.activeCanvasId]??ic(n.activeCanvasId,n.activeCanvasId===n.rootCanvasId?qs:`未命名画布`),a=i.nodes,o=i.edges;return J({version:t.version??1,modelNodes:a,modelEdges:o,nodeSeq:t.nodeSeq??tc(n.canvases,`nodes`,`node`),edgeSeq:t.edgeSeq??tc(n.canvases,`edges`,`edge`),rootCanvasId:n.rootCanvasId,activeCanvasId:n.activeCanvasId,canvasTrail:n.canvasTrail,canvases:n.canvases,activeLineType:t.activeLineType??`normal`,workspaceSource:typeof t.workspaceSource==`string`?t.workspaceSource:``,faultedBlks:Ys(t.faultedBlks),importedFaultModels:Ys(t.importedFaultModels)})}function cc(e){let t=Js(e)?J(e):{},n=oc(t),r=n.canvases[n.activeCanvasId]??ic(n.activeCanvasId,n.activeCanvasId===n.rootCanvasId?qs:`未命名画布`),i=r.nodes,a=r.edges;return J({version:t.version??1,modelNodes:i,modelEdges:a,nodeSeq:t.nodeSeq??tc(n.canvases,`nodes`,`node`),edgeSeq:t.edgeSeq??tc(n.canvases,`edges`,`edge`),rootCanvasId:n.rootCanvasId,activeCanvasId:n.activeCanvasId,canvasTrail:n.canvasTrail,canvases:n.canvases,activeLineType:t.activeLineType??`normal`,workspaceSource:typeof t.workspaceSource==`string`?t.workspaceSource:``,faultedBlks:Ys(t.faultedBlks),importedFaultModels:Ys(t.importedFaultModels)})}var lc=`flight-control-model`;function Y(e){return JSON.parse(JSON.stringify(e))}function uc(e){let t=Y(e??{});return{moduleId:t.moduleId??null,fileName:t.fileName??null,entryFunction:t.entryFunction??null,category:t.category??`uncategorized`,sourcePackageId:t.sourcePackageId??null,sourcePackageName:t.sourcePackageName??null,source:t.source??``,parsedInterface:t.parsedInterface??null}}function dc(e){let t=new Map;return e.forEach(e=>{let n=uc(e);X(n.moduleId)&&!t.has(n.moduleId)&&t.set(n.moduleId,n),X(n.fileName)&&!t.has(n.fileName)&&t.set(n.fileName,n)}),t}function fc(e){let t=[],n=new Set,r=e=>{Array.isArray(e)&&e.forEach(e=>{if(!Z(e)){t.push(e);return}let r=X(e.id)?e.id:null;r&&n.has(r)||(r&&n.add(r),t.push(e))})};return r(e?.modelNodes),Z(e?.canvases)&&Object.values(e.canvases).forEach(e=>{r(e?.nodes)}),t}function pc(e,t){let n=Y(e??{});return n.modelNodes=Array.isArray(n.modelNodes)?n.modelNodes.map(t):[],Z(n.canvases)&&Object.entries(n.canvases).forEach(([e,r])=>{Z(r)&&(n.canvases[e]={...r,nodes:Array.isArray(r.nodes)?r.nodes.map(t):[]})}),n}function mc(e){return!!(e?.bound&&X(e.entryFunction)&&X(e.rawSource??e.source)&&Z(e.parsedInterface))}function hc(e,t){if(!e?.bound||!t||!Z(t.parsedInterface)||mc(e))return e;let n=Jo({...t.parsedInterface,rawSource:t.source},{moduleId:t.moduleId,moduleCategory:t.category,sourcePackageId:t.sourcePackageId,sourcePackageName:t.sourcePackageName,executionMode:e.executionMode});return{...n,...Y(e),bound:!0,moduleId:e.moduleId??t.moduleId,fileName:e.fileName??t.fileName,moduleName:e.moduleName??n.moduleName,moduleCategory:e.moduleCategory??t.category,sourcePackageId:e.sourcePackageId??t.sourcePackageId,sourcePackageName:e.sourcePackageName??t.sourcePackageName,description:e.description||n.description,entryFunction:e.entryFunction??t.entryFunction,parsedInterface:e.parsedInterface??Y(t.parsedInterface),rawSource:e.rawSource||t.source,portMapping:n.portMapping,executionConfig:Z(e.executionConfig)?e.executionConfig:n.executionConfig}}function gc(e,t){let n=dc(t),r=[];return{snapshot:pc(e,e=>{if(!Z(e)||e.type!==`simulation_block`||!e?.pythonBinding?.bound)return e;let t=e.pythonBinding,i=n.get(t.moduleId)??n.get(t.fileName);if(!i){if(!mc(t)){let n=t.moduleId??t.fileName??`unknown-module`;r.push(`Simulation block "${e.id??`unknown-node`}" references missing python module "${n}".`)}return e}let a=hc(t,i);if(!mc(a)){let n=t.moduleId??t.fileName??i.moduleId??i.fileName??`unknown-module`;return r.push(`Simulation block "${e.id??`unknown-node`}" has an unusable python binding for module "${n}".`),e}return{...e,pythonBinding:a}}),errors:r}}function _c(e){if(!Z(e))return e;if(e?.type!==`simulation_block`)return Y(e);let t=e.pythonBinding??null;if(!t||!t.bound)return{...Y(e),pythonBinding:t?Y(t):null};let n=t.moduleId,r=t.fileName,i=t.entryFunction,a=t.rawSource??t.source??``,o=X(n)&&X(r)&&X(i)&&X(a);return{...Y(e),pythonBinding:o?Y(t):null}}function vc(e){return fc(e).reduce((e,t)=>{if(!Z(t)||t.type!==`simulation_block`||!t?.pythonBinding?.bound)return e;let n=t.pythonBinding,r=n.moduleId,i=n.fileName,a=n.entryFunction,o=n.rawSource??n.source??``;return!X(r)||!X(i)||!X(a)||!X(o)||e.has(r)||e.set(r,uc({moduleId:r,fileName:i,entryFunction:a,category:n.moduleCategory??`uncategorized`,sourcePackageId:n.sourcePackageId??null,sourcePackageName:n.sourcePackageName??null,source:o,parsedInterface:n.parsedInterface??null})),e},new Map)}function X(e){return typeof e==`string`&&e.trim().length>0}function Z(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}function yc(e,t,n){if(!Array.isArray(t)){e.push(`${n} must be an array.`);return}t.forEach((t,r)=>{Z(t)||e.push(`${n}[${r}] must be an object.`)})}function bc(e){let t=[],n=new Set,r=new Set;if(!Z(e))return{ok:!1,errors:[`Package must be an object.`]};if(e.schemaVersion!==1&&t.push(`schemaVersion must be 1.`),e.packageType!==`flight-control-model`&&t.push(`packageType must be ${lc}.`),Array.isArray(e.pythonModules)?e.pythonModules.forEach((e,i)=>{if(!Z(e)){t.push(`pythonModules[${i}] must be an object.`);return}X(e.moduleId)||t.push(`pythonModules[${i}].moduleId is required.`),X(e.fileName)||t.push(`pythonModules[${i}].fileName is required.`),X(e.entryFunction)||t.push(`pythonModules[${i}].entryFunction is required.`),X(e.source)||t.push(`pythonModules[${i}].source is required.`),X(e.moduleId)&&(n.has(e.moduleId)?t.push(`Duplicate moduleId "${e.moduleId}" is not allowed.`):n.add(e.moduleId)),X(e.fileName)&&(r.has(e.fileName)?t.push(`Duplicate fileName "${e.fileName}" is not allowed.`):r.add(e.fileName))}):t.push(`pythonModules must be an array.`),!Z(e.workbenchSnapshot))t.push(`workbenchSnapshot must be an object.`);else{let n=Z(e.workbenchSnapshot.canvases);Array.isArray(e.workbenchSnapshot.modelNodes)?yc(t,e.workbenchSnapshot.modelNodes,`workbenchSnapshot.modelNodes`):n||t.push(`workbenchSnapshot.modelNodes must be an array.`),Array.isArray(e.workbenchSnapshot.modelEdges)?yc(t,e.workbenchSnapshot.modelEdges,`workbenchSnapshot.modelEdges`):n||t.push(`workbenchSnapshot.modelEdges must be an array.`)}let i=new Set,a=e=>{Array.isArray(e)&&e.forEach(e=>{Z(e)&&X(e.id)&&i.add(e.id)})};return a(e.faultLibrary),a(e.diagnosticModel?.faultCases),a(e.workbenchSnapshot?.importedFaultModels),e.diagnosticModel!==void 0&&(Z(e.diagnosticModel)?(e.diagnosticModel.testPoints!==void 0&&yc(t,e.diagnosticModel.testPoints,`diagnosticModel.testPoints`),e.diagnosticModel.faultCases!==void 0&&yc(t,e.diagnosticModel.faultCases,`diagnosticModel.faultCases`)):t.push(`diagnosticModel must be an object.`)),fc(e.workbenchSnapshot).forEach((e,n)=>{if(!Z(e)||!Z(e.injectedFault))return;let r=X(e.id)?e.id:`index-${n}`,a=e.injectedFault.modelId;if(!X(a)){t.push(`workbenchSnapshot.modelNodes node "${r}" has injectedFault without a modelId.`);return}i.has(a)||t.push(`workbenchSnapshot.modelNodes node "${r}" references unknown fault modelId "${a}".`)}),{ok:t.length===0,errors:t}}function xc(e={}){return{modelId:e.modelId??null,modelName:e.modelName??null,description:e.description??``,schemaVersion:e.schemaVersion??null,packageType:e.packageType??null,systemFamily:e.systemFamily??null,supportedFaultLibraries:Array.isArray(e.supportedFaultLibraries)?Y(e.supportedFaultLibraries):[],capabilities:Z(e.capabilities)?Y(e.capabilities):{},moduleCount:Array.isArray(e.pythonModules)?e.pythonModules.length:0,faultCount:Array.isArray(e.faultLibrary)?e.faultLibrary.length:0}}function Sc(e){let t=bc(e);if(!t.ok)return{ok:!1,errors:t.errors};let n=Y(Array.isArray(e.pythonModules)?e.pythonModules:[]),r=gc(cc(e.workbenchSnapshot),n);return r.errors.length>0?{ok:!1,errors:r.errors}:{ok:!0,snapshot:r.snapshot,descriptor:xc(e),faultLibrary:Y(Array.isArray(e.faultLibrary)?e.faultLibrary:[]),diagnosticModel:Z(e.diagnosticModel)?Y(e.diagnosticModel):null,pythonModules:n}}function Cc({meta:e={},snapshot:t={},faultLibrary:n=[]}={}){let r=sc(t),i=pc(r,_c),a=vc(r);return{schemaVersion:1,packageType:lc,modelId:e.modelId??null,modelName:e.modelName??null,description:e.description??``,systemFamily:e.systemFamily??null,supportedFaultLibraries:Array.isArray(e.supportedFaultLibraries)?Y(e.supportedFaultLibraries):[],capabilities:Z(e.capabilities)?Y(e.capabilities):{},source:Y(e.source??{}),pythonModules:Array.from(a.values()),faultLibrary:Y(n??[]),workbenchSnapshot:i}}function wc({meta:e={},state:t={},faultLibrary:n=[]}={}){return Cc({meta:e,snapshot:t,faultLibrary:n})}var Tc={schemaVersion:`1.0`,source:`无人机飞控系统故障.pdf`,modelFamily:`UAV flight-control fault injection`,faultTypes:[{id:`physical_parameter_bias`,name:`物理层参数偏置`,layer:`physical`,modelClass:`偏差故障`,formula:`p_fault = p_nominal + delta_p 或 p_fault = k * p_nominal`,typicalTargets:[`UAV_Mass`,`Ixx`,`Iyy`,`Izz`,`Cd`,`Controller_Gain`],defaultParameters:{delta_p:.1,scale:1.1,start:0,duration:null},platformImplementation:{currentSupport:`partial`,existingModule:`injectedFault on simulation_block`,recommendedModule:`fault_parameter_bias`,pythonFunction:`parameter_bias 或 parameter_scale`},observableSignals:[`attitude_error`,`altitude_error`,`control_output`,`residual`],displayPlan:`参数卡片显示 nominal/fault 值，画布支路显示正常模型与故障模型输出残差。`},{id:`physical_parameter_drift`,name:`物理层参数渐变`,layer:`physical`,modelClass:`渐变故障`,formula:`p_fault(t) = p0 + rate * max(t - t0, 0)`,typicalTargets:[`Motor_Efficiency_All`,`Battery_Voltage`,`Baro_Bias`],defaultParameters:{rate:-.02,start:30,rise_time:60},platformImplementation:{currentSupport:`partial`,existingModule:`fault_drift exists but needs numeric config`,recommendedModule:`fault_drift_ramp`,pythonFunction:`parameter_drift`},observableSignals:[`thrust`,`battery_voltage`,`altitude`,`residual_trend`],displayPlan:`趋势面板展示 drift rate、当前故障参数值和随时间增长的残差。`},{id:`physical_parameter_step`,name:`物理层参数突变`,layer:`physical`,modelClass:`突变故障`,formula:`p_fault(t) = p_nominal + step_value * I(t >= t0)`,typicalTargets:[`Motor_Max_Thrust`,`Alloc_Matrix`,`Cd`],defaultParameters:{step_value:-.35,start:20},platformImplementation:{currentSupport:`partial`,existingModule:`injectedFault on simulation_block`,recommendedModule:`fault_step_jump`,pythonFunction:`parameter_step`},observableSignals:[`attitude`,`control_output`,`thrust_margin`],displayPlan:`时间轴标注突变时刻，示波器显示突变前后响应差异。`},{id:`actuator_lock_or_failure`,name:`执行器卡死或失效`,layer:`physical`,modelClass:`卡位故障 / 信号阻塞故障`,formula:`u_fault(t) = lock_value, t >= t0`,typicalTargets:[`Motor_i_Lock_Value`,`Servo_i_Lock_Value`,`Throttle_i`],defaultParameters:{lock_value:0,start:10,duration:null},platformImplementation:{currentSupport:`partial`,existingModule:`fault_stuck exists in library but needs left-panel and runtime config`,recommendedModule:`fault_freeze_or_lock`,pythonFunction:`actuator_lock`},observableSignals:[`motor_command`,`motor_thrust`,`roll_rate`,`yaw_rate`],displayPlan:`故障节点贴附在执行器支路，仪器展示锁定前后指令与实际输出。`},{id:`saturation_limit`,name:`饱和限制`,layer:`physical`,modelClass:`饱和限制`,formula:`u_fault = clamp(u, lower, upper_fault)`,typicalTargets:[`Throttle_UpperLimit`,`Motor_Max_Thrust`,`PWM_Max`],defaultParameters:{lower:0,upper:.65,start:0},platformImplementation:{currentSupport:`missing`,existingModule:null,recommendedModule:`fault_saturation`,pythonFunction:`saturation_limit`},observableSignals:[`control_saturation`,`altitude`,`thrust_margin`],displayPlan:`控制量接近上限时用状态卡提示 saturation ratio。`},{id:`sensor_additive_bias`,name:`传感器加性偏置`,layer:`electrical`,modelClass:`偏差故障`,formula:`y_fault = y + b`,typicalTargets:[`Gyro_Bias_Z`,`Baro_Bias`,`GPS_Pos_Bias`,`Euler_Bias`],defaultParameters:{offset:.15,start:5},platformImplementation:{currentSupport:`partial`,existingModule:`fault_bias and injectedFault`,recommendedModule:`fault_sensor_bias`,pythonFunction:`parameter_bias`},observableSignals:[`gyro_z`,`baro_altitude`,`attitude_estimate`,`residual`],displayPlan:`传感器模块属性面板显示 bias、单位、作用轴。`},{id:`fault_bias_overlay`,name:`偏置叠加故障`,layer:`electrical`,modelClass:`偏置叠加`,formula:`y_fault = y + offset`,typicalTargets:[`Gyro_Bias_Z`,`IMU_Pitch_Rate`,`Feedback_Bias`,`Command_Bias`],defaultParameters:{offset:.15,start:0,duration:null},platformImplementation:{currentSupport:`supported`,existingModule:`fault_bias`,recommendedModule:`fault_bias`,pythonFunction:`parameter_bias`},observableSignals:[`imu.pitch_rate`,`attitude_error`,`residual`],displayPlan:`故障库中作为偏置叠加块的直接故障类型，注入后在测点和D矩阵中按传感器反馈链路显示。`},{id:`fault_noise_injection`,name:`噪声注入故障`,layer:`electrical`,modelClass:`噪声注入`,formula:`y_fault = y + n(t)`,typicalTargets:[`Gyro_Noise_STD`,`IMU_Pitch_Rate`,`Feedback_Noise`,`Residual_Noise`],defaultParameters:{noise_type:`gaussian`,std:.08,amplitude:.2,probability:.03,start:0,duration:null},platformImplementation:{currentSupport:`supported`,existingModule:`fault_noise`,recommendedModule:`fault_noise`,pythonFunction:`gaussian_noise / white_noise / pulse_noise`},observableSignals:[`imu.pitch_rate`,`rms_noise`,`spectrum_peak`,`residual`],displayPlan:`故障库中作为噪声注入块的直接故障类型，注入后频谱诊断和残差测点可作为主要观测位置。`},{id:`sensor_scale_distortion`,name:`传感器比例失真`,layer:`electrical`,modelClass:`比例失真`,formula:`y_fault = scale * y`,typicalTargets:[`Accel_Scale_Z`,`Attitude_Scale`,`Velocity_Scale`],defaultParameters:{scale:1.25,start:5},platformImplementation:{currentSupport:`missing`,existingModule:null,recommendedModule:`fault_gain_scale`,pythonFunction:`parameter_scale`},observableSignals:[`accel_z`,`velocity_estimate`,`altitude_estimate`],displayPlan:`波形对比显示斜率和幅值改变，属性面板显示 scale factor。`},{id:`noise_increase`,name:`噪声增强`,layer:`electrical`,modelClass:`高斯噪声 / 白噪声 / 脉冲噪声`,formula:`y_fault = y + n(t), n ~ N(0, sigma^2) 或 U(-a,a)`,typicalTargets:[`Gyro_Noise_STD`,`Baro_Noise_STD`,`Euler_Noise_STD`],defaultParameters:{std:.08,amplitude:.2,probability:.03,start:0},platformImplementation:{currentSupport:`partial`,existingModule:`fault_noise`,recommendedModule:`fault_noise_configurable`,pythonFunction:`gaussian_noise / white_noise / pulse_noise`},observableSignals:[`gyro`,`barometer`,`spectrum_peak`,`rms_noise`],displayPlan:`频谱分析仪展示高频能量上升，数据记录仪输出 RMS 噪声。`},{id:`colored_noise`,name:`有色噪声`,layer:`electrical`,modelClass:`有色噪声`,formula:`n[k] = alpha * n[k-1] + e[k], y_fault = y + n[k]`,typicalTargets:[`Gyro_Noise_STD`,`Baro_Noise_STD`],defaultParameters:{alpha:.92,std:.03,start:0},platformImplementation:{currentSupport:`missing`,existingModule:null,recommendedModule:`fault_colored_noise`,pythonFunction:`colored_noise`},observableSignals:[`low_frequency_noise`,`spectrum_bins`],displayPlan:`频谱仪展示低频噪声抬升，属性面板给出 alpha 和 std。`},{id:`signal_freeze`,name:`信号阻塞 / 冻结`,layer:`electrical`,modelClass:`信号阻塞`,formula:`y_fault[k] = y_fault[k-1]`,typicalTargets:[`GPS_Pos_Freeze_Enable`,`GPS_Vel_Freeze_Enable`,`Command_Hold`],defaultParameters:{enable:!0,start:12},platformImplementation:{currentSupport:`partial`,existingModule:`protocol replay/hold behavior and fault_stuck`,recommendedModule:`fault_freeze_hold`,pythonFunction:`signal_freeze`},observableSignals:[`gps_position`,`gps_velocity`,`trajectory_error`],displayPlan:`冻结区间在波形上标注，残差曲线持续增大。`},{id:`state_jump_or_sign_flip`,name:`状态跳变或符号翻转`,layer:`electrical`,modelClass:`状态突变`,formula:`y_fault = y + jump 或 y_fault = -y`,typicalTargets:[`Phi_Sign_Fault`,`Theta_Sign_Fault`,`Yaw_Sign_Fault`],defaultParameters:{jump:.5,invert:!0,start:8},platformImplementation:{currentSupport:`missing`,existingModule:null,recommendedModule:`fault_state_jump`,pythonFunction:`state_jump / sign_flip`},observableSignals:[`attitude_feedback`,`controller_error`,`divergence_flag`],displayPlan:`画布节点用红色状态突变标记，控制误差面板提示正反馈风险。`},{id:`intermittent_anomaly`,name:`间歇异常`,layer:`electrical`,modelClass:`间歇故障`,formula:`y_fault = f(y) when ((t - t0) mod T) / T <= duty else y`,typicalTargets:[`Noise_Burst_Enable`,`Sensor_Bias_Burst`,`Command_Block_Burst`],defaultParameters:{period:4,duty:.25,start:10},platformImplementation:{currentSupport:`missing`,existingModule:null,recommendedModule:`fault_intermittent_gate`,pythonFunction:`intermittent_fault`},observableSignals:[`burst_flag`,`sensor_output`,`alert_log`],displayPlan:`状态日志记录每次触发窗口，波形上显示周期性高亮。`},{id:`fixed_delay`,name:`固定延迟传输`,layer:`protocol`,modelClass:`延迟传输故障`,formula:`y_fault[k] = y[k - d]`,typicalTargets:[`GPS_Delay`,`Gyro_Delay`,`Command_Delay`],defaultParameters:{delay_steps:3,delay_seconds:.3,start:0},platformImplementation:{currentSupport:`partial`,existingModule:`CAN edge injectedFault faultCode=delay`,recommendedModule:`fault_delay_buffer`,pythonFunction:`fixed_delay`},observableSignals:[`phase_lag`,`oscillation`,`settling_time`],displayPlan:`连接线属性显示 delay steps，示波器显示相位滞后。`},{id:`time_varying_delay`,name:`时变延迟`,layer:`protocol`,modelClass:`时延抖动`,formula:`y_fault[k] = y[k - d(k)], d(k)=base+jitter`,typicalTargets:[`Target_Update_Delay`,`Sensor_Update_Delay`],defaultParameters:{base_steps:2,jitter_steps:2,start:0},platformImplementation:{currentSupport:`missing`,existingModule:null,recommendedModule:`fault_jitter_delay`,pythonFunction:`time_varying_delay`},observableSignals:[`latency_estimate`,`tracking_error`,`control_jitter`],displayPlan:`协议线显示当前时延，状态层统计 latency min/max。`},{id:`random_packet_loss`,name:`随机丢包`,layer:`protocol`,modelClass:`丢包故障`,formula:`y_fault = hold(y_prev) with probability drop_rate`,typicalTargets:[`GPS_Drop_Rate`,`Sensor_Drop_Rate`,`Command_Drop_Rate`],defaultParameters:{drop_rate:.08,strategy:`hold`,start:0},platformImplementation:{currentSupport:`partial`,existingModule:`CAN edge injectedFault faultCode=loss`,recommendedModule:`fault_packet_loss`,pythonFunction:`random_packet_loss`},observableSignals:[`packet_loss_rate`,`estimator_residual`,`trajectory_error`],displayPlan:`数据流视图显示丢包计数和有效帧率。`},{id:`burst_packet_loss`,name:`突发丢包`,layer:`protocol`,modelClass:`连续丢包`,formula:`连续 L 个采样周期输出 hold(y_prev)`,typicalTargets:[`Burst_Loss_Length`,`Data_Link_Burst_Loss`],defaultParameters:{start_probability:.02,burst_length:5,strategy:`hold`},platformImplementation:{currentSupport:`missing`,existingModule:null,recommendedModule:`fault_burst_loss`,pythonFunction:`burst_packet_loss`},observableSignals:[`burst_loss_flag`,`packet_gap`,`control_drop`],displayPlan:`协议边在突发窗口变红，日志记录 burst start/end。`},{id:`data_tamper`,name:`数据篡改`,layer:`protocol`,modelClass:`篡改故障`,formula:`payload_fault = scale * payload + bias 或 payload_fault = -payload`,typicalTargets:[`GPS_Pos_Bias`,`Cmd_Sign_Tamper`,`Sensor_Data_Tamper_Enable`],defaultParameters:{bias:1,scale:1,invert:!1,start:6},platformImplementation:{currentSupport:`partial`,existingModule:`CAN edge bitflip/replay but not full payload tamper`,recommendedModule:`fault_payload_tamper`,pythonFunction:`data_tamper`},observableSignals:[`payload_value`,`trajectory_error`,`yaw_error`],displayPlan:`数据流视图展示原始 payload 与篡改 payload 的差值。`},{id:`blocking_interrupt`,name:`阻塞或中断`,layer:`protocol`,modelClass:`阻塞 / 中断`,formula:`y_fault = hold(y_prev) 或 0 while interrupt_enable`,typicalTargets:[`Sensor_Data_Tamper_Enable`,`Command_Link_Enable`],defaultParameters:{enable:!0,strategy:`hold`,start:15,duration:4},platformImplementation:{currentSupport:`partial`,existingModule:`fault_stuck and protocol hold`,recommendedModule:`fault_link_interrupt`,pythonFunction:`blocking_interrupt`},observableSignals:[`link_status`,`sensor_age`,`control_latency`],displayPlan:`连接线显示断链状态，状态栏显示 sensor age 和控制延迟。`}]},Ec=!1,Dc=`model-packages/evtol_closed_loop_fault_demo.json`,Oc=`gz-workbench-system-model`;function kc(e=`./`){return e.endsWith(`/`)?e:`${e}/`}function Ac(){let e=kc(`./`);if(e!==`./`)return new URL(e,window.location.origin).toString();let t=document.querySelector(`script[type="module"][src]`);return t?.src?new URL(t.src.includes(`/assets/`)?`../`:`./`,t.src).toString():new URL(`./`,window.location.href).toString()}function jc(){return new URL(Dc,Ac()).toString()}function Mc(){if(typeof window>`u`)return!1;let{hostname:e,pathname:t,search:n}=window.location;return new URLSearchParams(n).get(`demo`)===`1`||e===`blank1cheng.github.io`&&t.replace(/\/+$/,``).endsWith(`/uav-fault-platform`)}function Nc(){return Mc()?{force:!0,resetStoredWorkbench:!0,publicDemo:!0}:{}}function Pc(e={}){if(e.resetStoredWorkbench)try{window.localStorage?.removeItem(Oc)}catch{}}function Fc({force:e=!1}={}){if(e)return!1;if(window.__GZ_DISABLE_DEFAULT_MODEL__)return!0;let t=window.__GZ_STATE__;return!!(t?.sysLoaded||t?.modelNodes?.length||window.__GZ_DEFAULT_FLIGHT_MODEL_LOADING__)}async function Ic(e={}){if(Fc(e))return{ok:!1,skipped:!0,reason:`default-model-load-skipped`};let t=window.__GZ_FLIGHT_MODEL_PACKAGE__;if(typeof t?.importObject!=`function`)return{ok:!1,errors:[`Flight model package bridge is not ready.`]};window.__GZ_DEFAULT_FLIGHT_MODEL_LOADING__=!0,Pc(e);try{let n=e.packageObject??await Lc(e.url),r=t.importObject(n);return window.__GZ_DEFAULT_FLIGHT_MODEL_STATE__={loaded:!!r?.ok,modelId:r?.descriptor?.modelId??n?.modelId??null,modelName:r?.descriptor?.modelName??n?.modelName??null,source:e.packageObject?`provided-object`:e.url??jc(),publicDemo:!!e.publicDemo,errors:r?.errors??[]},e.publicDemo&&(window.__GZ_PUBLIC_DEMO_MODE__=!0),r}catch(t){let n=t instanceof Error?t.message:`Failed to load default flight model package.`;return window.__GZ_DEFAULT_FLIGHT_MODEL_STATE__={loaded:!1,modelId:null,modelName:null,source:e.url??jc(),errors:[n]},{ok:!1,errors:[n]}}finally{window.__GZ_DEFAULT_FLIGHT_MODEL_LOADING__=!1}}async function Lc(e=jc()){let t=await fetch(e);if(!t.ok)throw Error(`Failed to fetch default flight model package: ${t.status}`);return t.json()}function Rc(e={}){let t=e.activeModelPackage??null;return t?{modelId:t.modelId??`workbench-export`,modelName:t.modelName??`Workbench Export`,description:t.description??``,source:t.source??{origin:`workbench-import`}}:{modelId:`workbench-export`,modelName:`Workbench Export`,description:``,source:{origin:`workbench-export`}}}function zc(e={}){return sc(e)}function Bc(){Ec||window.__GZ_LEGACY_RUNTIME_BOOTED__||(window.__GZ_WORKBENCH_SNAPSHOT__={createWorkbenchSnapshot:sc,restoreWorkbenchSnapshot:cc},window.__GZ_FAULT_TYPE_CATALOG__=Tc,window.__GZ_FLIGHT_MODEL_PACKAGE__={validate(e){return bc(e)},importObject(e){let t=Sc(e);if(!t.ok)return t;try{typeof window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__==`function`&&window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__(e,t)}catch(e){return{ok:!1,errors:[e instanceof Error?e.message:`Failed to apply flight model package.`]}}return t},exportCurrent(){let e=window.__GZ_STATE__??{};return wc({meta:Rc(e),state:zc(e),faultLibrary:e.availableFaultModels??[]})}},window.__GZ_LOAD_DEFAULT_FLIGHT_MODEL__=Ic,window.eval(`${Gs}\n//# sourceURL=gz-legacy-runtime.js`),queueMicrotask(()=>{let e=Nc();Ic(e).catch(t=>{window.__GZ_DEFAULT_FLIGHT_MODEL_STATE__={loaded:!1,modelId:null,modelName:null,source:jc(),publicDemo:!!e.publicDemo,errors:[t instanceof Error?t.message:`Failed to load default flight model package.`]}})}),window.__GZ_LEGACY_RUNTIME_BOOTED__=!0,Ec=!0)}var Vc=[`all`,`info`,`ok`,`warn`,`error`],Hc={all:`全部级别`,info:`信息`,ok:`成功`,warn:`警告`,error:`错误`},Uc={info:`sbar-badge--info`,ok:`sbar-badge--ok`,warn:`sbar-badge--warn`,error:`sbar-badge--error`},Wc={log:`暂无匹配记录`,alerts:`暂无告警记录`,results:`暂无仿真结果`,performance:`暂无性能趋势`},Gc=null,Kc=null,qc=null,Jc=!1;function Q(){return document.querySelector(`.sbar`)}function Yc(e=Q()){return Array.from(e?.querySelectorAll(`[data-log-entry]`)||[])}function Xc(e=Q()){return e?.querySelector(`.sbar-log-table`)||null}function Zc(e=Q()){return e?.querySelector(`[data-status-empty]`)||null}function Qc(e,t=0){let n=Number(e);return Number.isFinite(n)?n:t}function $c(e=``){return Array.from(String(e).matchAll(/\d+/g)).map(e=>Number(e[0]))}function el(e,t){let n=document.createElement(`span`);n.className=`sbar-metric-number`,n.textContent=String(Qc(t)),e.append(n)}function tl(e,t){let n=document.createElement(`span`);n.className=`sbar-metric-unit`,n.textContent=t,e.append(n)}function nl(e){let t=document.createElement(`span`);t.className=`sbar-metric-sep`,t.textContent=`·`,e.append(t)}function rl(e,t,n){e&&(e.classList.add(`sbar-metric-line`),e.replaceChildren(),el(e,t),tl(e,`组件`),nl(e),el(e,n),tl(e,`连线`))}function il(e,t){e&&(e.classList.add(`sbar-metric-line`),e.replaceChildren(),el(e,t),tl(e,`故障`))}function al(e){let t=document.querySelector(`.sbar-state`),n=document.getElementById(`sdot`);!t||typeof e!=`string`||(t.replaceChildren(),n&&t.append(n),t.append(document.createTextNode(e)))}function ol(){let e=$c(document.getElementById(`sblk`)?.textContent||``),t=$c(document.getElementById(`sflt`)?.textContent||``);return{components:e[0]??0,links:e[1]??0,faults:t[0]??0}}function sl(){let e=document.getElementById(`sblk`),t=document.getElementById(`sflt`);return!!(e&&t&&(!e.querySelector(`.sbar-metric-number`)||!t.querySelector(`.sbar-metric-number`)))}function cl(e={}){let t=Q();if(!t)return{ok:!1,reason:`missing-statusbar`};let n=ol(),r={components:Qc(e.components,n.components),links:Qc(e.links,n.links),faults:Qc(e.faults,n.faults),state:e.state,time:e.time};rl(document.getElementById(`sblk`),r.components,r.links),il(document.getElementById(`sflt`),r.faults),al(r.state);let i=t.querySelector(`.sbar-time`);return i&&typeof r.time==`string`&&(i.textContent=r.time),{ok:!0,metrics:r}}function ll(){Jc||(Jc=!0,(window.queueMicrotask||(e=>Promise.resolve().then(e)))(()=>{Jc=!1,sl()&&cl(ol())}))}function ul(e){if(qc?.disconnect(),qc=null,cl(ol()),typeof MutationObserver>`u`)return;let t=[document.getElementById(`sblk`),document.getElementById(`sflt`)].filter(Boolean);if(t.length!==0){qc=new MutationObserver(ll);for(let e of t)qc.observe(e,{childList:!0,characterData:!0,subtree:!0})}}function dl(e,t,n){let r=Zc(e);r&&(r.textContent=n,r.classList.toggle(`is-hidden`,!t))}function fl(e,t){let n=e?.querySelector(`[data-status-action="level"]`);n&&(n.dataset.level=t,n.textContent=Hc[t]||Hc.all,n.setAttribute(`aria-label`,`日志级别过滤：${n.textContent}`))}function pl(e=Q()){if(!e)return{visibleCount:0};let t=e.dataset.activeView||`log`,n=e.dataset.filterLevel||`all`,r=e.dataset.logCleared===`true`,i=0;for(let a of Yc(e)){let e=a.dataset.view||`log`,o=a.dataset.level||`info`,s=!r&&e===t&&(n===`all`||o===n);a.classList.toggle(`is-hidden`,!s),s&&(i+=1)}let a=r?`日志已清空 · 新事件会继续显示`:Wc[t]||Wc.log;return dl(e,i===0,a),fl(e,n),{visibleCount:i,view:t,level:n,cleared:r}}function ml(e=`all`){let t=Q();if(!t)return{ok:!1,reason:`missing-statusbar`};let n=Vc.includes(e)?e:`all`;return t.dataset.filterLevel=n,{ok:!0,...pl(t)}}function hl(){let e=Q();if(!e)return{ok:!1,reason:`missing-statusbar`};let t=e.dataset.filterLevel||`all`;return ml(Vc[(Vc.indexOf(t)+1)%Vc.length]||`all`)}function gl(e=`log`){let t=Q();if(!t)return{ok:!1,reason:`missing-statusbar`};t.dataset.activeView=e,t.dataset.logCleared=`false`;for(let n of t.querySelectorAll(`[data-status-tab]`)){let t=n.dataset.statusTab===e;n.classList.toggle(`is-active`,t),n.setAttribute(`aria-pressed`,t?`true`:`false`)}return{ok:!0,...pl(t)}}function _l(){let e=Q();if(!e)return{ok:!1,reason:`missing-statusbar`};e.dataset.logCleared=`true`;let t=document.getElementById(`stxt`);return t&&(t.textContent=`日志已清空 · 新事件会继续显示`),{ok:!0,...pl(e)}}function vl(e={}){let t=Q();if(!t)return{ok:!1,reason:`missing-statusbar`,content:``};let n=[`时间,级别,来源,消息`];for(let e of Yc(t)){let t=Array.from(e.children).map(e=>`"${e.textContent.trim().replaceAll(`"`,`""`)}"`);n.push(t.join(`,`))}let r=n.join(`
`),i=window.navigator?.userAgent||``;if(e.download!==!1&&!/jsdom/i.test(i)&&typeof Blob<`u`&&window.URL?.createObjectURL){let e=new Blob([r],{type:`text/csv;charset=utf-8`}),t=window.URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`gz-status-log.csv`,n.click(),window.setTimeout(()=>window.URL.revokeObjectURL(t),0)}return{ok:!0,content:r}}function yl(e=new Date){return e.toLocaleTimeString(`zh-CN`,{hour12:!1,hour:`2-digit`,minute:`2-digit`,second:`2-digit`})}function bl(e={}){let t=Q(),n=Xc(t);if(!t||!n)return{ok:!1,reason:`missing-statusbar`};let r=Hc[e.level]&&e.level!==`all`?e.level:`info`,i=e.view||(r===`warn`||r===`error`?`alerts`:`log`),a=document.createElement(`div`);a.className=`sbar-row`,a.dataset.logEntry=``,a.dataset.level=r,a.dataset.view=i;let o=document.createElement(`span`);o.textContent=e.time||yl();let s=document.createElement(`span`);s.className=`sbar-badge ${Uc[r]||Uc.info}`,s.textContent=Hc[r]||Hc.info;let c=document.createElement(`span`);c.textContent=e.source||`系统`;let l=document.createElement(`span`);l.textContent=e.message||`状态更新`,a.append(o,s,c,l);let u=Zc(t);n.insertBefore(a,u||null);let d=Yc(t);for(let e of d.slice(60))e.remove();return t.dataset.logCleared=`false`,pl(t),{ok:!0,row:a}}function xl(e,t=2){let n=Number(e);return Number.isFinite(n)?Number(n.toFixed(t)).toString():`0`}function Sl(e={}){let t=xl(e.duration,2),n=xl(e.elapsedSeconds??e.time??0,2),r=xl(e.stepSize,4);return{datasetName:String(e.datasetName||e.name||`test`),duration:t,elapsedSeconds:n,faults:Qc(e.faults,0),sampleRate:String(e.sampleRate||`-`),status:String(e.status||`updated`),stepIndex:Qc(e.stepIndex,0),stepSize:r}}function Cl(e={}){let t=Sl(e),n=bl({level:t.status===`completed`?`ok`:`info`,source:`仿真结果`,view:`results`,message:`${t.datasetName} · ${t.status} · ${t.stepIndex} steps · ${t.duration}s · faults ${t.faults}`}),r=bl({level:`info`,source:`性能趋势`,view:`performance`,message:`${t.datasetName} · ${t.sampleRate} · elapsed ${t.elapsedSeconds}s · step ${t.stepSize}s · ${t.stepIndex} samples`});return{ok:n.ok&&r.ok,performance:r,result:n,summary:t}}function wl(e){let t=e.target.closest?.(`[data-status-tab]`);if(t){gl(t.dataset.statusTab||`log`);return}let n=e.target.closest?.(`[data-status-action]`);n&&(n.dataset.statusAction===`clear`?_l():n.dataset.statusAction===`level`?hl():n.dataset.statusAction===`export`&&vl())}function Tl(){let e=Q();!e||e===Gc||(El(),Gc=e,Kc=wl,Gc.addEventListener(`click`,Kc),e.dataset.activeView=e.dataset.activeView||`log`,e.dataset.filterLevel=e.dataset.filterLevel||`all`,e.dataset.logCleared=e.dataset.logCleared||`false`,ul(e),pl(e),window.__GZ_STATUS_BAR__={applyLevelFilter:ml,bind:Tl,clear:_l,cycleLevelFilter:hl,exportLog:vl,formatMetrics:cl,pushEntry:bl,publishSimulationSummary:Cl,refresh:pl,selectView:gl,unbind:El})}function El(){Gc&&Kc&&Gc.removeEventListener(`click`,Kc),qc?.disconnect(),qc=null,Gc=null,Kc=null}function Dl(e){let t=Object.values(e.inputs??{}),n=typeof t[0]==`number`?t[0]:Number(t[0]??0),r=t.reduce((e,t)=>e+Number(t??0),0);return{outputs:Object.fromEntries((e.outputNames??[]).map((e,t)=>[e,Number((n+r*.12+t*.1).toFixed(6))])),middleVars:Object.fromEntries((e.middleVarNames??[]).map((e,t)=>[e,Number(((r||n)*(t+1)*.1).toFixed(6))]))}}function Ol({adapterMode:e=`mock`,payload:t}){return e===`backend`&&typeof window<`u`&&typeof window.__GZ_PYTHON_BACKEND_SYNC__==`function`?window.__GZ_PYTHON_BACKEND_SYNC__(t):Dl(t)}async function kl({adapterMode:e=`mock`,endpoint:t=`/api/python-flow/execute`,payload:n,fetchImpl:r=globalThis.fetch}){if(e===`backend`){if(typeof r!=`function`)throw Error(`PYTHON_EXECUTION_FAILED: fetch unavailable`);let e=await r(t,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!e.ok)throw Error(`PYTHON_EXECUTION_FAILED: ${e.status}`);return e.json()}return Dl(n)}function Al(e){return String(e??`any`).trim().toLowerCase()}function jl(e,t,n){if(Array.isArray(e))return e[n];if(!(!e||typeof e!=`object`)){if(t?.varName&&Object.prototype.hasOwnProperty.call(e,t.varName))return e[t.varName];if(t?.displayName&&Object.prototype.hasOwnProperty.call(e,t.displayName))return e[t.displayName]}}function Ml(e){let t=Number(e);return Number.isNaN(t)||!Number.isFinite(t)?0:t}function Nl(e){let t=Al(e?.type),n=e?.default;if(n==null||n===``)return 0;if(t===`bool`||t===`boolean`){if(typeof n==`boolean`)return+!!n;let e=String(n).trim().toLowerCase();return+!![`true`,`1`,`yes`,`on`].includes(e)}return t===`str`||t===`string`?n:Ml(n)}function Pl({nodeId:e,binding:t,inputValues:n=[],mode:r=`actual`,time:i=0,dt:a=.1,adapterMode:o,adapterEndpoint:s,executeSync:c=Ol,applyElectricalFault:l}){let u=t?.portMapping?.inputs??[],d=t?.portMapping?.outputs??[],f=t?.portMapping?.middleVars??[],p=Object.fromEntries(u.map((e,t)=>{let r=n[t],i=r===void 0?Nl(e):Ml(r);return[e.varName,i]})),m={nodeId:e,moduleName:t?.moduleName??null,fileName:t?.fileName??null,entryFunction:t?.entryFunction??`process`,mode:r,time:i,dt:a,inputs:p,inputNames:u.map(e=>e.varName),outputNames:d.map(e=>e.varName),middleVarNames:f.map(e=>e.varName),source:t?.rawSource??``,endpoint:s},h=c({adapterMode:o??t?.executionMode??`mock`,endpoint:s??t?.executionConfig?.endpoint,payload:m})??{},g=d.map((e,t)=>Ml(jl(h.outputs,e,t))),_=f.map((e,t)=>Ml(jl(h.middleVars,e,t)));return r===`actual`&&typeof l==`function`&&g.length&&(g[0]=Ml(l(g[0],m))),{outputs:g,middleValues:_,payload:m,response:h}}var Fl=Pl;Object.freeze({physical:`物理层`,electrical:`电气层`,protocol:`协议层`});var Il=Object.freeze({physical_parameter_bias:`parameter_bias`,physical_parameter_drift:`parameter_drift`,physical_parameter_step:`parameter_step`,actuator_lock_or_failure:`lock`,saturation_limit:`saturation`,sensor_additive_bias:`additive_bias`,fault_bias_overlay:`additive_bias`,sensor_scale_distortion:`scale`,noise_increase:`noise`,fault_noise_injection:`noise`,colored_noise:`colored_noise`,signal_freeze:`freeze`,state_jump_or_sign_flip:`jump_or_invert`,intermittent_anomaly:`intermittent`,fixed_delay:`fixed_delay`,time_varying_delay:`jitter_delay`,random_packet_loss:`packet_loss`,burst_packet_loss:`burst_loss`,data_tamper:`tamper`,blocking_interrupt:`interrupt`}),Ll=Object.freeze({localOnly:`localOnly`,signalTransform:`signalTransform`,parameterInfluence:`parameterInfluence`,protocolEdge:`protocolEdge`,derivedResidual:`derivedResidual`}),Rl=new Set(Object.values(Ll)),zl=Object.freeze({physical_parameter_bias:[`vehicle_dynamics`,`attitude_pid`,`control_allocation`],physical_parameter_drift:[`motor_model`,`barometer`],physical_parameter_step:[`motor_model`,`control_allocation`,`vehicle_dynamics`],actuator_lock_or_failure:[`motor_model`,`control_allocation`],saturation_limit:[`motor_model`],sensor_additive_bias:[`imu_gyro`,`barometer`,`gps_velocity`],fault_bias_overlay:[`imu_gyro`,`barometer`,`gps_velocity`],sensor_scale_distortion:[`imu_accel`,`gps_velocity`],noise_increase:[`imu_gyro`,`imu_accel`,`barometer`],fault_noise_injection:[`imu_gyro`,`imu_accel`,`barometer`],colored_noise:[`imu_gyro`,`barometer`],signal_freeze:[`gps_velocity`],state_jump_or_sign_flip:[`imu_gyro`,`attitude_pid`],intermittent_anomaly:[`imu_gyro`,`barometer`,`gps_velocity`],fixed_delay:[`gps_velocity`,`imu_gyro`,`barometer`],time_varying_delay:[`gps_velocity`,`imu_gyro`,`barometer`],random_packet_loss:[`gps_velocity`],burst_packet_loss:[`gps_velocity`],data_tamper:[`gps_velocity`,`attitude_pid`],blocking_interrupt:[`gps_velocity`,`imu_gyro`,`barometer`]}),Bl=Object.freeze({delay:`fixed_delay`,loss:`packet_loss`,bitflip:`bitflip`,replay:`replay`}),Vl=Object.freeze({parameter_bias:`bias`,additive_bias:`bias`,parameter_drift:`drift`,parameter_step:`step`,lock:`lock`,saturation:`saturation`,scale:`scale`,noise:`gaussian_noise`,colored_noise:`colored_noise`,freeze:`freeze`,jump_or_invert:`sign_flip`,intermittent:`intermittent`,fixed_delay:`delay`,jitter_delay:`jitter_delay`,packet_loss:`packet_loss`,burst_loss:`burst_loss`,tamper:`tamper`,interrupt:`interrupt`,bitflip:`bitflip`,replay:`replay`});function Hl(e){return JSON.parse(JSON.stringify(e??null))}function Ul(e){return typeof e==`string`&&e.trim().length>0}function Wl(e){return String(e??``).trim().toLowerCase()}function $(e,t=0){if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`boolean`)return+!!e;let n=Number.parseFloat(String(e??``).replace(/[^\d+\-.eE]/g,``));return Number.isFinite(n)?n:t}function Gl(e,t=!1){return typeof e==`boolean`?e:e==null||e===``?t:[`true`,`1`,`yes`,`on`,`启用`].includes(String(e).trim().toLowerCase())}function Kl(e,t,n){let r=e;return Number.isFinite(t)&&(r=Math.max(t,r)),Number.isFinite(n)&&(r=Math.min(n,r)),r}function ql(e=1,t=0,n=0){let r=Math.sin(e*12.9898+t*78.233+n*5.173)*43758.5453;return r-Math.floor(r)}function Jl(e=1,t=0,n=0){return ql(e,t,n)*2-1}function Yl(e){return Array.isArray(e)?e:[]}function Xl(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Zl(e,t,n=null){let r=Array.isArray(t)?t:[t];for(let t of r)if(Object.prototype.hasOwnProperty.call(e,t)){let n=e[t];if(n!=null&&n!==``)return n}return n}function Ql(e={}){if(Ul(e.runtimeBehavior)&&e.runtimeBehavior!==`catalog_only`)return e.runtimeBehavior;if(Ul(e.id)&&Il[e.id])return Il[e.id];if(Ul(e.faultTypeId)&&Il[e.faultTypeId])return Il[e.faultTypeId];if(Ul(e.faultCode)&&Bl[e.faultCode])return Bl[e.faultCode];let t=[e.name,e.modelClass,e.faultKind,...Yl(e.tags)].join(` `);return/延迟|delay/i.test(t)?`fixed_delay`:/丢包|packet\s*loss|drop[_\s-]?rate|loss[_\s-]?rate/i.test(t)||e.layer===`protocol`&&/loss/i.test(t)?`packet_loss`:/翻转|bitflip/i.test(t)?`bitflip`:/重放|replay/i.test(t)?`replay`:/噪声|noise/i.test(t)?`noise`:/冻结|阻塞|freeze|interrupt/i.test(t)?e.layer===`protocol`?`interrupt`:`freeze`:/比例|scale|效率/i.test(t)?`scale`:/偏置|偏差|bias/i.test(t)?`additive_bias`:``}function $l(e){return Rl.has(e)?e:``}function eu(e={},t={}){let n=$l(t.propagationMode??e.propagationMode??e.injectionDesign?.propagationMode??e.injectionDesign?.propagation?.mode);if(n)return n;let r=t.layer??e.layer??``,i=e.injectionDesign?.targetKind??``,a=Ql(e)||Ql(t);if(yu(r)||i===`protocol_edge_fault`)return Ll.protocolEdge;if(i===`parameter_patch`||/^parameter_/.test(a))return Ll.parameterInfluence;let o=[e.id,e.faultTypeId,e.name,e.parameter,e.faultKind,t.modelId,t.parameter].join(` `);return/motor|actuator|efficiency|lock|saturation|thrust/i.test(o)||a?Ll.signalTransform:Ll.localOnly}function tu(e={},t={}){return{...e.defaultParameters??{},...e.parameters??{},...t.parameters??{}}}function nu(e={},t=0){let n=$(e.start,0),r=e.duration;return t<n?!1:r==null||r===``?!0:t<=n+$(r,1/0)}function ru(e,t={}){let n=t.faultModel??{},r=t.injectedFault??{},i=t.params??tu(n,r),a=t.behavior||Ql(n)||Ql(r),o=t.state??{},s=$(t.time,0),c=Math.max($(t.dt,.1),1e-4),l=$(t.seed,1),u=$(t.stepIndex,0),d=$(e,0);if(!a||!nu(i,s))return o.previousValue=d,o.holdValue=d,d;if(a===`parameter_bias`||a===`additive_bias`)return d+$(Zl(i,[`offset`,`delta_p`,`bias`],0),0);if(a===`scale`)return d*$(i.scale,1);if(a===`parameter_drift`){let e=$(i.rate,0),t=i.max_delta===void 0?null:Math.abs($(i.max_delta,0)),n=Math.max(s-$(i.start,0),0)*e;return t!==null&&(n=Kl(n,-t,t)),d+n}if(a===`parameter_step`)return d+$(i.step_value,$(i.jump,0));if(a===`lock`)return $(i.lock_value,0);if(a===`saturation`)return Kl(d,i.lower===null||i.lower===void 0||i.lower===``?-1/0:$(i.lower,-1/0),i.upper===null||i.upper===void 0||i.upper===``?1/0:$(i.upper,1/0));if(a===`noise`){let e=Wl(i.noise_type||i.kind||`gaussian`);if(e.includes(`pulse`)&&ql(l,u,s)>1-$(i.probability,.03))return d+Math.sign(Jl(l+17,u,s)||1)*$(i.amplitude,.2);let t=e.includes(`white`)?$(i.amplitude,.2):$(i.std,.08);return d+Jl(l,u,s)*t}if(a===`colored_noise`){let e=Kl($(i.alpha,.92),0,.999),t=$(i.std,.03);return o.previousNoise=e*$(o.previousNoise,0)+Jl(l,u,s)*t,d+o.previousNoise}if(a===`freeze`)return o.hasHoldValue||=(o.holdValue=d,!0),$(o.holdValue,d);if(a===`jump_or_invert`)return(Gl(i.invert,!0)?-d:d)+$(i.jump,0);if(a===`intermittent`){let e=Math.max($(i.period,4),c),n=Kl($(i.duty,.25),0,1);if((s-$(i.start,0))%e/e>n)return o.previousValue=d,d;let r=i.inner_fault_type||i.inner_kind||`noise`;return ru(d,{...t,behavior:r===`bias`?`additive_bias`:r,params:{...i,start:0},state:o})}if(a===`fixed_delay`){let e=Math.max(Math.round($(Zl(i,`delay_steps`,$(i.delay_seconds,.3)/c),1)),0);if(o.delayQueue=Array.isArray(o.delayQueue)?o.delayQueue:[],o.delayQueue.push(d),o.delayQueue.length<=e)return $(o.previousValue,0);let t=o.delayQueue.shift();return o.previousValue=t,$(t,d)}if(a===`jitter_delay`){let e=Math.max(Math.round($(i.base_steps,1)),0),n=Math.max(Math.round(Math.abs($(i.jitter_steps,1))),0),r=Math.round(ql(l,u,s)*n);return ru(d,{...t,behavior:`fixed_delay`,params:{...i,delay_steps:e+r},state:o})}if(a===`packet_loss`){let e=Kl($(Zl(i,[`drop_rate`,`loss_rate`],.08),.08),0,1);return ql(l,u,s)<=e?i.strategy===`zero`?0:$(o.previousValue,0):(o.previousValue=d,d)}if(a===`burst_loss`){if(o.burstRemaining=Math.max(Math.round($(o.burstRemaining,0)),0),o.burstRemaining>0)return--o.burstRemaining,i.strategy===`zero`?0:$(o.previousValue,0);let e=Kl($(i.start_probability,.02),0,1);return ql(l,u,s)<=e?(o.burstRemaining=Math.max(Math.round($(i.burst_length,5))-1,0),i.strategy===`zero`?0:$(o.previousValue,0)):(o.previousValue=d,d)}if(a===`tamper`){let e=d*$(i.scale,1)+$(i.bias,0);return Gl(i.invert,!1)?-e:e}if(a===`interrupt`)return Gl(i.enable,!0)?i.strategy===`zero`?0:$(o.previousValue,0):(o.previousValue=d,d);if(a===`bitflip`)return(Math.round(d*256)^8)/256;if(a===`replay`){o.history=Array.isArray(o.history)?o.history:[];let e=Math.max(Math.round($(i.replay_depth,6)),1),t=Math.max(Math.round($(i.replay_period,10)),1),n=o.history.length>e&&u>e&&u%t===0?o.history[Math.max(0,o.history.length-e)]:d;return o.history.push(d),o.history.length>40&&o.history.shift(),o.previousValue=n,$(n,d)}return d}function iu(e={},t={}){let n=tu(e,{parameters:t});return{modelId:e.id??e.faultTypeId??``,name:e.name??e.id??`Fault Model`,layer:e.layer??`electrical`,tags:Hl(e.tags??[]),desc:e.desc??``,faultKind:e.faultKind??e.modelClass??``,faultCode:e.faultCode??``,runtimeBehavior:Ql(e),parameters:n}}function au(e){return Xl(e)&&(Ul(e.modelId)||Ul(e.faultModelId)||Ul(e.runtimeBehavior)||Xl(e.parameters))}function ou(e={},t={}){return au(t)?{...iu(e,t.parameters??{}),...t,parameters:tu(e,t)}:iu(e,t)}function su(e,t={},n={}){return[e||n.name||`fault`,t.targetId||n.targetId||``,t.targetKind||n.targetKind||n.layer||`target`].filter(Boolean).join(`::`)}function cu(e={},t={},n={}){let r=ou(e,t),i=r.modelId||r.faultModelId||e.id||e.faultTypeId||``,a=n.targetKind??e.injectionDesign?.targetKind??(yu(r.layer)?`edge`:`node`),o=$l(n.propagationMode)||eu(e,r);return{bindingId:n.bindingId||su(i,n,r),faultModelId:i,name:r.name||e.name||i||`Fault Model`,layer:r.layer||e.layer||`electrical`,runtimeBehavior:r.runtimeBehavior||Ql(e),parameters:Hl(r.parameters??{}),targetKind:a,targetId:n.targetId||r.targetId||``,visualRole:n.visualRole||`fault-source`,propagationMode:o,canPropagate:o!==Ll.localOnly,active:n.active??!0,injectedFault:r}}function lu(e={}){return e.bindingId||[e.faultModelId||e.modelId||e.name||`fault`,e.targetId||``,e.targetKind||e.layer||`target`].join(`::`)}function uu(e={},t={}){let n=lu(e),r=lu(t);return n&&r&&n===r?!0:!!(e.faultModelId&&t.faultModelId&&e.faultModelId===t.faultModelId)&&(e.targetKind||``)===(t.targetKind||``)&&(e.targetId||``)===(t.targetId||``)}function du(e={},t={}){let n=e.targetKind||(t.sourceNodeId&&t.targetNodeId?`edge`:`node`),r=e.injectedFault??{modelId:e.faultModelId||e.modelId||``,name:e.name||e.faultModelId||`Fault Model`,layer:e.layer||`electrical`,runtimeBehavior:e.runtimeBehavior||``,parameters:Hl(e.parameters??{})},i=$l(e.propagationMode)||eu(e,r),a={...e,bindingId:e.bindingId||su(e.faultModelId||r.modelId,{targetId:e.targetId||t.id,targetKind:n},r),faultModelId:e.faultModelId||r.modelId||r.faultModelId||``,name:e.name||r.name||`Fault Model`,layer:e.layer||r.layer||`electrical`,runtimeBehavior:e.runtimeBehavior||r.runtimeBehavior||``,parameters:Hl(e.parameters??r.parameters??{}),targetKind:n,targetId:e.targetId||t.id||``,visualRole:e.visualRole||`fault-source`,propagationMode:i,canPropagate:e.canPropagate??i!==Ll.localOnly,active:e.active??!0,injectedFault:r};return a.injectedFault={...r,modelId:a.faultModelId||r.modelId||``,name:a.name,layer:a.layer,runtimeBehavior:a.runtimeBehavior,parameters:Hl(a.parameters)},a}function fu(e={},t={}){if(!e||!Xl(e))return[];let n=du(t,e),r=Yl(e.faultBindings).map(t=>du(t,e)),i=r.findIndex(e=>uu(e,n));return i>=0?r[i]={...r[i],...n}:r.push(n),e.faultBindings=r,e.injectedFault=n.injectedFault,e.faultBindings}function pu(e={},t={}){let n=Yl(e.faultBindings).map(t=>du(t,e));return n.length===0&&e.injectedFault&&n.push(du({faultModelId:e.injectedFault.modelId||e.injectedFault.faultModelId||``,name:e.injectedFault.name,layer:e.injectedFault.layer,runtimeBehavior:e.injectedFault.runtimeBehavior,parameters:e.injectedFault.parameters,injectedFault:e.injectedFault},e)),t.activeOnly?n.filter(e=>e.active!==!1):n}function mu(e={}){return pu(e,{activeOnly:!0}).length>0}function hu(e,t={}){let n=pu(t.target??{},{activeOnly:!0});if(n.length===0)return e;let r=t.stateBucket??t.state??{};r.bindingStates=Xl(r.bindingStates)?r.bindingStates:{};let i=typeof t.resolveFaultModel==`function`?t.resolveFaultModel:null;return n.reduce((e,n,a)=>{let o=i?.(n)??n.injectedFault??n,s=n.runtimeBehavior||Ql(o)||Ql(n.injectedFault);if(!s)return e;let c=n.bindingId||n.faultModelId||`fault-${a}`;return r.bindingStates[c]=Xl(r.bindingStates[c])?r.bindingStates[c]:{},ru(e,{faultModel:o,injectedFault:n.injectedFault??n,params:n.parameters,behavior:s,state:r.bindingStates[c],time:t.time,dt:t.dt,stepIndex:t.stepIndex,seed:$(t.seed,1)+a})},e)}function gu(e={}){let t=e.pythonBinding??{};return[e.id,e.type,e.props?.name,e.props?.moduleType,t.moduleId,t.moduleName,t.fileName,t.sourcePackageName].filter(Ul).map(Wl)}function _u(e={}){return e.type===`simulation_block`||e.type===`flow_block`}function vu(e={}){let t=e.id??e.faultTypeId,n=Yl(e.moduleTargets),r=t?zl[t]??[]:[];return[...new Set([...n,...r].map(Wl).filter(Boolean))]}function yu(e){return e===`protocol`||e===`communication`}function bu(e,t){if(!_u(e))return!1;let n=vu(t);if(n.length===0)return!0;let r=gu(e);return n.some(e=>r.some(t=>e.startsWith(`node-`)?t===e:t.includes(e)||e.includes(t)))}function xu(e={}){return[e.id,e.signalId,e.channelId,e.messageId,e.sourceNodeId,e.targetNodeId,e.sourceNodeId&&e.targetNodeId?`${e.sourceNodeId}-${e.targetNodeId}`:``,e.sourceNodeId&&e.targetNodeId?`${e.targetNodeId}-${e.sourceNodeId}`:``,...Yl(e.signalChannels).flatMap(e=>[e?.signalId,e?.channelId,e?.messageId])].filter(Ul).map(Wl)}function Su(e,t){if(e?.lineType!==`can`)return!1;let n=vu(t);if(n.length===0)return!1;let r=xu(e);return n.some(e=>r.some(t=>t.includes(e)||e.includes(t)))}function Cu(e={},t={}){let n=Yl(t.nodes),r=Yl(t.edges);if(yu(e.layer??`electrical`)){let n=r.find(e=>e.id===t.selectedEdgeId&&e.lineType===`can`);if(n)return{kind:`edge`,id:n.id,reason:`selected-can-edge`};let i=r.find(t=>Su(t,e));if(i)return{kind:`edge`,id:i.id,reason:`module-target-can-edge`};let a=r.find(e=>e.lineType===`can`);return a?{kind:`edge`,id:a.id,reason:`first-can-edge`}:null}let i=n.find(e=>e.id===t.selectedNodeId);if(i&&bu(i,e))return{kind:`node`,id:i.id,reason:`selected-node`};let a=n.find(t=>bu(t,e));return a?{kind:`node`,id:a.id,reason:`module-target`}:null}function wu(e={}){let t=Ql(e)||`additive_bias`,n=Vl[t]??t,r=`fault_${e.id??t}`.replace(/[^\w]+/g,`_`),i=tu(e),a=[`import json`,``,`PARAMS = json.loads(${JSON.stringify(JSON.stringify(i))})`,`KIND = ${JSON.stringify(n)}`,``,`def _num(value, fallback=0.0):`,`    try:`,`        return float(value)`,`    except (TypeError, ValueError):`,`        return fallback`,``,`def process(input_signal, time=0.0, dt=0.1):`,`    value = _num(input_signal)`,`    start = _num(PARAMS.get("start", 0.0))`,`    duration = PARAMS.get("duration", None)`,`    if time < start:`,`        return value`,`    if duration not in (None, "") and time > start + _num(duration):`,`        return value`,`    if KIND in ("bias", "parameter_bias", "additive_bias"):`,`        return value + _num(PARAMS.get("offset", PARAMS.get("delta_p", PARAMS.get("bias", 0.0))))`,`    if KIND == "scale":`,`        return value * _num(PARAMS.get("scale", 1.0), 1.0)`,`    if KIND == "drift":`,`        return value + max(time - start, 0.0) * _num(PARAMS.get("rate", 0.0))`,`    if KIND == "step":`,`        return value + _num(PARAMS.get("step_value", PARAMS.get("jump", 0.0)))`,`    if KIND == "lock":`,`        return _num(PARAMS.get("lock_value", 0.0))`,`    if KIND == "saturation":`,`        lower = PARAMS.get("lower", None)`,`        upper = PARAMS.get("upper", None)`,`        if lower not in (None, ""):`,`            value = max(value, _num(lower))`,`        if upper not in (None, ""):`,`            value = min(value, _num(upper))`,`        return value`,`    if KIND == "tamper":`,`        value = value * _num(PARAMS.get("scale", 1.0), 1.0) + _num(PARAMS.get("bias", 0.0))`,`        return -value if bool(PARAMS.get("invert", False)) else value`,`    if KIND in ("sign_flip", "jump_or_invert"):`,`        base = -value if bool(PARAMS.get("invert", True)) else value`,`        return base + _num(PARAMS.get("jump", 0.0))`,`    if KIND in ("gaussian_noise", "white_noise", "colored_noise"):`,`        return value + _num(PARAMS.get("std", PARAMS.get("amplitude", 0.0)))`,`    return value`,``].join(`
`);return{moduleId:r,fileName:`${r}.py`,moduleName:r,entryFunction:`process`,source:a,parsedInterface:{fileName:`${r}.py`,moduleName:r,entryFunction:`process`,description:`${e.name??e.id??`Fault`} wrapper`,rawSource:a,inputs:[{name:`input_signal`,type:`float`,default:0,comment:`upstream signal`},{name:`time`,type:`float`,default:0,comment:`simulation time`},{name:`dt`,type:`float`,default:.1,comment:`simulation step`}],outputs:[{name:`output_signal`,type:`float`,comment:`faulted signal`}],middleVars:[]}}}var Tu=`uav-flight-control`,Eu=`uav-flight-control-faults`,Du=[`uav`,`evtol`,`eVTOL_Small_nonandlin_algorithm_validation`];function Ou(e){return typeof e==`string`&&e.trim().length>0}function ku(e){return Ou(e)?e.trim():``}function Au(e){return Array.isArray(e)?Array.from(new Set(e.map(ku).filter(Boolean))):[]}function ju(e={}){return[e.modelId,e.modelName,e.description,e.source?.slxFile,e.source?.origin,e.source?.notes].filter(Ou).join(` `).toLowerCase()}function Mu(e={}){let t=ju(e);return Du.some(e=>t.includes(e.toLowerCase()))}function Nu(e={}){let t=ku(e.libraryId);if(t)return t;let n=[e.modelFamily,e.source,e.description,e.name].filter(Ou).join(` `).toLowerCase();return n.includes(`uav`)||n.includes(`flight-control`)||n.includes(`flight control`)?Eu:``}function Pu(e={}){let t=ku(e.systemFamily);if(t)return t;let n=[e.modelFamily,e.source,e.description,e.name].filter(Ou).join(` `).toLowerCase();return n.includes(`uav`)||n.includes(`flight-control`)||n.includes(`flight control`)?Tu:``}function Fu(e={}){return ku(e.systemFamily??e.modelFamily)||(Mu(e)?Tu:``)}function Iu(e={}){return Array.isArray(e.supportedFaultLibraries)?Au(e.supportedFaultLibraries):Fu(e)===`uav-flight-control`?[Eu]:[]}function Lu(e={},t=null){return ku(e.libraryId)||Nu(t??e)}function Ru(e={},t=null){return ku(e.systemFamily??e.modelFamily)||Pu(t??e)}function zu(e,t={}){let n=typeof e==`string`?ku(e):Lu(e),r=typeof e==`string`?``:Ru(e),i=Iu(t),a=Fu(t);return n&&i.includes(n)?!0:!!(r&&a&&r===a)}function Bu(e,t={},n=null){let r=Lu(e,n),i=Ru(e,n),a=Iu(t),o=Fu(t);return r&&a.includes(r)?!0:!!(i&&o&&i===o)}function Vu(e,t={}){let n=Array.isArray(e)?e:e?.faultTypes,r=Array.isArray(e)?null:e;return Array.isArray(n)?n.filter(e=>Bu(e,t,r)):[]}function Hu(e={},t=null){let n=Iu(e),r=Fu(e),i=t?Vu(t,e):[];return{systemFamily:r,faultLibraryIds:n,compatible:t?i.length>0:n.length>0,compatibleFaultTypes:i,reason:n.length>0?`model declares compatible fault libraries`:`model has no compatible fault-library metadata`}}typeof window<`u`&&(window.__GZ_PYTHON_RUNTIME__={executePythonBinding:kl,executePythonBindingSync:Ol,executeFlowBlockPythonBindingSync:Pl,executeSimulationBlockPythonBindingSync:Fl,getPythonBindingDefaultValue:Nl},window.__GZ_FAULT_INJECTION_RUNTIME__={applyScalarFault:ru,applyScalarFaultBindings:hu,appendFaultBinding:fu,buildFaultPythonModuleSpec:wu,createFaultBinding:cu,createInjectedFaultPayload:iu,findCompatibleFaultTarget:Cu,getFaultBindings:pu,getFaultRuntimeBehavior:Ql,hasActiveFaultBinding:mu,inferFaultPropagationMode:eu,isFaultActive:nu,resolveFaultParameters:tu,compatibility:{describeModelFaultCompatibility:Hu,filterCompatibleFaultTypes:Vu,getModelFaultLibraryIds:Iu,getModelSystemFamily:Fu,isFaultCompatibleWithModel:Bu,isFaultLibraryCompatibleWithModel:zu}});var Uu=[`data-runtime-ready`],Wu={class:`workbench-main`},Gu=`gz.layoutSizes`;eo({__name:`App`,setup(e){let t=Yo(),n=Wt(null),r=Object.freeze({left:192,right:320,status:100}),i=Object.freeze({left:{min:168,max:360},right:{min:260,max:460},status:{min:100,max:180},canvasMin:560,splitterTotal:12}),a=null;function o(e,t,n){return Math.min(Math.max(e,t),n)}function s(){try{let e=JSON.parse(window.localStorage.getItem(Gu)||`{}`);return{left:Number.isFinite(e.left)?e.left:r.left,right:Number.isFinite(e.right)?e.right:r.right,status:Number.isFinite(e.status)?e.status:r.status}}catch{return{...r}}}function c(){let e=n.value;if(!e)return s();let t=(t,n)=>{let r=e.style.getPropertyValue(t).trim(),i=Number.parseFloat(r);return Number.isFinite(i)?i:n};return{left:t(`--workbench-left-w`,r.left),right:t(`--workbench-right-w`,r.right),status:t(`--workbench-status-h`,r.status)}}function l(e,t=document.querySelector(`.workbench-main`)?.getBoundingClientRect()){let n=t?.width?Math.max(0,t.width-i.canvasMin-i.splitterTotal):1/0,r=Math.min(i.right.max,Math.max(i.right.min,n-i.left.min)),a=o(e.right,i.right.min,r),s=Math.min(i.left.max,Math.max(i.left.min,n-a));return{left:o(e.left,i.left.min,s),right:a,status:o(e.status,i.status.min,i.status.max)}}function u(e,t={}){let r=l(e,t.mainRect),i=n.value;return i&&(i.style.setProperty(`--workbench-left-w`,`${r.left}px`),i.style.setProperty(`--workbench-right-w`,`${r.right}px`),i.style.setProperty(`--workbench-status-h`,`${r.status}px`)),t.persist!==!1&&window.localStorage.setItem(Gu,JSON.stringify(r)),r}function d(e){if(!a)return;let{target:t,startY:n,startSizes:r,mainRect:i}=a,o={...r};t===`left`?o.left=e.clientX-i.left:t===`right`?o.right=i.right-e.clientX:t===`bottom`&&(o.status=r.status+(n-e.clientY)),u(o,{mainRect:i})}function f(){a&&(a=null,document.body.classList.remove(`is-layout-resizing`),window.removeEventListener(`pointermove`,d),window.removeEventListener(`pointerup`,f))}function p(e,t){if(t.button!==0)return;let n=document.querySelector(`.workbench-main`)?.getBoundingClientRect();n&&(t.preventDefault(),a={target:e,startY:t.clientY,startSizes:c(),mainRect:n},document.body.classList.add(`is-layout-resizing`),t.currentTarget?.setPointerCapture?.(t.pointerId),window.addEventListener(`pointermove`,d),window.addEventListener(`pointerup`,f))}function m(e){let t=c();if(e===`all`){u({...r});return}u({...t,[e]:r[e]})}return er(async()=>{u(s(),{persist:!1}),await mn(),Bc(),Tl(),t.markReady()}),rr(()=>{f(),El()}),(e,r)=>(H(),U(`div`,{ref_key:`rootEl`,ref:n,class:`gz-app`,"data-testid":`workbench-root`,"data-runtime-ready":I(t).runtimeReady?`true`:`false`},[G(ao),W(`main`,Wu,[G(co),W(`button`,{type:`button`,class:`layout-resizer layout-resizer--vertical layout-resizer--left`,"data-layout-resizer":`left`,"aria-label":`拖动调整左侧组件库宽度`,title:`拖动调整左侧组件库宽度，双击恢复默认`,onPointerdown:r[0]||=e=>p(`left`,e),onDblclick:r[1]||=e=>m(`left`)},null,32),G(fo),W(`button`,{type:`button`,class:`layout-resizer layout-resizer--vertical layout-resizer--right`,"data-layout-resizer":`right`,"aria-label":`拖动调整右侧属性面板宽度`,title:`拖动调整右侧属性面板宽度，双击恢复默认`,onPointerdown:r[2]||=e=>p(`right`,e),onDblclick:r[3]||=e=>m(`right`)},null,32),G(ho),W(`button`,{type:`button`,class:`layout-resizer layout-resizer--horizontal layout-resizer--bottom`,"data-layout-resizer":`bottom`,"aria-label":`拖动调整底部状态栏高度`,title:`拖动调整底部状态栏高度，双击恢复默认`,onPointerdown:r[4]||=e=>p(`bottom`,e),onDblclick:r[5]||=e=>m(`status`)},null,32),G(vo)]),G(xo),G(wo),G(Do),G(Ao),G(No),G(Io),G(Vs),G(Ws)],8,Uu))}}).mount(`#app`);