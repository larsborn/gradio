import{SvelteComponentDev as $,init as ee,safe_not_equal as te,dispatch_dev as v,validate_store as ne,component_subscribe as oe,validate_slots as se,element as R,create_component as L,attr_dev as z,toggle_class as J,add_location as j,insert_dev as g,mount_component as S,transition_in as B,transition_out as E,detach_dev as b,destroy_component as P,binding_callbacks as K,bind as M,text as C,space as y,append_dev as D,set_data_dev as F,add_flush_callback as Q}from"../../../node/dev/svelte-internal.js";import{X as O}from"./index-168e7816.js";import{S as U}from"./StaticForm-8130bfc7.js";import{I as T}from"./InteractiveTextbox-d565d3ef.js";import{a as V}from"./Button-e33227ec.js";import"./Textbox-a3622855.js";import{S as W}from"./StaticColumn-cba6ce44.js";import"./BlockTitle-87da8f73.js";import"./Info-05947842.js";import"./Copy-e8e2bc99.js";const N="src/Login.svelte";function I(n){let t,o;const a={c:function(){t=R("p"),o=C(n[0]),z(t,"class","auth svelte-nszhgc"),j(t,N,38,3,995)},m:function(i,s){g(i,t,s),D(t,o)},p:function(i,s){s&1&&F(o,i[0])},d:function(i){i&&b(t)}};return v("SvelteRegisterBlock",{block:a,id:I.name,type:"if",source:"(35:2) {#if auth_message}",ctx:n}),a}function q(n){let t,o=n[6]("login.enable_cookies")+"",a;const c={c:function(){t=R("p"),a=C(o),z(t,"class","auth svelte-nszhgc"),j(t,N,41,3,1058)},m:function(s,u){g(s,t,u),D(t,a)},p:function(s,u){u&64&&o!==(o=s[6]("login.enable_cookies")+"")&&F(a,o)},d:function(s){s&&b(t)}};return v("SvelteRegisterBlock",{block:c,id:q.name,type:"if",source:"(38:2) {#if space_id}",ctx:n}),c}function X(n){let t,o=n[6]("login.incorrect_credentials")+"",a;const c={c:function(){t=R("p"),a=C(o),z(t,"class","creds svelte-nszhgc"),j(t,N,46,3,1157)},m:function(s,u){g(s,t,u),D(t,a)},p:function(s,u){u&64&&o!==(o=s[6]("login.incorrect_credentials")+"")&&F(a,o)},d:function(s){s&&b(t)}};return v("SvelteRegisterBlock",{block:c,id:X.name,type:"if",source:"(43:2) {#if incorrect_credentials}",ctx:n}),c}function Y(n){let t,o,a,c,i,s;function u(l){n[9](l)}let p={label:"username",lines:1,show_label:!0,max_lines:1};n[3]!==void 0&&(p.value=n[3]),t=new T({props:p,$$inline:!0}),K.push(()=>M(t,"value",u)),t.$on("submit",n[7]);function w(l){n[10](l)}let _={label:"password",lines:1,show_label:!0,max_lines:1,type:"password"};n[4]!==void 0&&(_.value=n[4]),c=new T({props:_,$$inline:!0}),K.push(()=>M(c,"value",w)),c.$on("submit",n[7]);const d={c:function(){L(t.$$.fragment),a=y(),L(c.$$.fragment)},m:function(r,f){S(t,r,f),g(r,a,f),S(c,r,f),s=!0},p:function(r,f){const k={};!o&&f&8&&(o=!0,k.value=r[3],Q(()=>o=!1)),t.$set(k);const h={};!i&&f&16&&(i=!0,h.value=r[4],Q(()=>i=!1)),c.$set(h)},i:function(r){s||(B(t.$$.fragment,r),B(c.$$.fragment,r),s=!0)},o:function(r){E(t.$$.fragment,r),E(c.$$.fragment,r),s=!1},d:function(r){r&&b(a),P(t,r),P(c,r)}};return v("SvelteRegisterBlock",{block:d,id:Y.name,type:"slot",source:"(46:2) <Form>",ctx:n}),d}function Z(n){let t=n[6]("login.login")+"",o;const a={c:function(){o=C(t)},m:function(i,s){g(i,o,s)},p:function(i,s){s&64&&t!==(t=i[6]("login.login")+"")&&F(o,t)},d:function(i){i&&b(o)}};return v("SvelteRegisterBlock",{block:a,id:Z.name,type:"slot",source:'(66:2) <BaseButton size=\\"lg\\" variant=\\"primary\\" on:click={submit}    >',ctx:n}),a}function x(n){let t,o=n[6]("login.login")+"",a,c,i,s,u,p,w,_,d,l=n[0]&&I(n),r=n[2]&&q(n),f=n[5]&&X(n);p=new U({props:{$$slots:{default:[Y]},$$scope:{ctx:n}},$$inline:!0}),_=new V({props:{size:"lg",variant:"primary",$$slots:{default:[Z]},$$scope:{ctx:n}},$$inline:!0}),_.$on("click",n[7]);const k={c:function(){t=R("h2"),a=C(o),c=y(),l&&l.c(),i=y(),r&&r.c(),s=y(),f&&f.c(),u=y(),L(p.$$.fragment),w=y(),L(_.$$.fragment),z(t,"class","svelte-nszhgc"),j(t,N,36,2,942)},m:function(e,m){g(e,t,m),D(t,a),g(e,c,m),l&&l.m(e,m),g(e,i,m),r&&r.m(e,m),g(e,s,m),f&&f.m(e,m),g(e,u,m),S(p,e,m),g(e,w,m),S(_,e,m),d=!0},p:function(e,m){(!d||m&64)&&o!==(o=e[6]("login.login")+"")&&F(a,o),e[0]?l?l.p(e,m):(l=I(e),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null),e[2]?r?r.p(e,m):(r=q(e),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null),e[5]?f?f.p(e,m):(f=X(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null);const G={};m&2072&&(G.$$scope={dirty:m,ctx:e}),p.$set(G);const H={};m&2112&&(H.$$scope={dirty:m,ctx:e}),_.$set(H)},i:function(e){d||(B(p.$$.fragment,e),B(_.$$.fragment,e),d=!0)},o:function(e){E(p.$$.fragment,e),E(_.$$.fragment,e),d=!1},d:function(e){e&&(b(t),b(c),b(i),b(s),b(u),b(w)),l&&l.d(e),r&&r.d(e),f&&f.d(e),P(p,e),P(_,e)}};return v("SvelteRegisterBlock",{block:k,id:x.name,type:"slot",source:'(33:1) <Column variant=\\"panel\\" min_width={480}>',ctx:n}),k}function A(n){let t,o,a;o=new W({props:{variant:"panel",min_width:480,$$slots:{default:[x]},$$scope:{ctx:n}},$$inline:!0});const c={c:function(){t=R("div"),L(o.$$.fragment),z(t,"class","wrap svelte-nszhgc"),J(t,"min-h-screen",n[1]),j(t,N,34,0,849)},l:function(s){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(s,u){g(s,t,u),S(o,t,null),a=!0},p:function(s,[u]){const p={};u&2173&&(p.$$scope={dirty:u,ctx:s}),o.$set(p),(!a||u&2)&&J(t,"min-h-screen",s[1])},i:function(s){a||(B(o.$$.fragment,s),a=!0)},o:function(s){E(o.$$.fragment,s),a=!1},d:function(s){s&&b(t),P(o)}};return v("SvelteRegisterBlock",{block:c,id:A.name,type:"component",source:"",ctx:n}),c}function ie(n,t,o){let a;ne(O,"_"),oe(n,O,e=>o(6,a=e));let{$$slots:c={},$$scope:i}=t;se("Login",c,[]);let{root:s}=t,{auth_message:u}=t,{app_mode:p}=t,{space_id:w}=t,_="",d="",l=!1;const r=async()=>{const e=new FormData;e.append("username",_),e.append("password",d);let m=await fetch(s+"/login",{method:"POST",body:e});m.status===400?(o(5,l=!0),o(3,_=""),o(4,d="")):m.status==200&&location.reload()};n.$$.on_mount.push(function(){s===void 0&&!("root"in t||n.$$.bound[n.$$.props.root])&&console.warn("<Login> was created without expected prop 'root'"),u===void 0&&!("auth_message"in t||n.$$.bound[n.$$.props.auth_message])&&console.warn("<Login> was created without expected prop 'auth_message'"),p===void 0&&!("app_mode"in t||n.$$.bound[n.$$.props.app_mode])&&console.warn("<Login> was created without expected prop 'app_mode'"),w===void 0&&!("space_id"in t||n.$$.bound[n.$$.props.space_id])&&console.warn("<Login> was created without expected prop 'space_id'")});const f=["root","auth_message","app_mode","space_id"];Object.keys(t).forEach(e=>{!~f.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Login> was created with unknown prop '${e}'`)});function k(e){_=e,o(3,_)}function h(e){d=e,o(4,d)}return n.$$set=e=>{"root"in e&&o(8,s=e.root),"auth_message"in e&&o(0,u=e.auth_message),"app_mode"in e&&o(1,p=e.app_mode),"space_id"in e&&o(2,w=e.space_id)},n.$capture_state=()=>({Form:U,Textbox:T,BaseButton:V,Column:W,_:O,root:s,auth_message:u,app_mode:p,space_id:w,username:_,password:d,incorrect_credentials:l,submit:r,$_:a}),n.$inject_state=e=>{"root"in e&&o(8,s=e.root),"auth_message"in e&&o(0,u=e.auth_message),"app_mode"in e&&o(1,p=e.app_mode),"space_id"in e&&o(2,w=e.space_id),"username"in e&&o(3,_=e.username),"password"in e&&o(4,d=e.password),"incorrect_credentials"in e&&o(5,l=e.incorrect_credentials)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),[u,p,w,_,d,l,a,r,s,k,h]}class ge extends ${constructor(t){super(t),ee(this,t,ie,A,te,{root:8,auth_message:0,app_mode:1,space_id:2}),v("SvelteRegisterComponent",{component:this,tagName:"Login",options:t,id:A.name})}get root(){throw new Error("<Login>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set root(t){throw new Error("<Login>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get auth_message(){throw new Error("<Login>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set auth_message(t){throw new Error("<Login>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get app_mode(){throw new Error("<Login>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set app_mode(t){throw new Error("<Login>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get space_id(){throw new Error("<Login>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set space_id(t){throw new Error("<Login>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ge as default};
//# sourceMappingURL=Login-3101f8e5.js.map
