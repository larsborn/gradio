import{SvelteComponentDev as rt,init as st,safe_not_equal as it,dispatch_dev as q,validate_slots as at,space as V,element as U,attr_dev as w,toggle_class as O,add_location as A,insert_dev as j,listen_dev as Z,group_outros as x,transition_out as H,check_outros as $,transition_in as N,detach_dev as M,bubble as xe,binding_callbacks as ee,prop_dev as Ot,run_all as Ye,text as fe,set_data_dev as de,noop as pe,create_component as se,mount_component as ie,destroy_component as ae,HtmlTag as Nt,empty as Ut,bind as we,validate_store as qt,component_subscribe as zt,createEventDispatcher as $e,tick as X,ensure_array_like_dev as le,validate_each_keys as oe,set_style as et,append_dev as L,action_destroyer as Ht,add_flush_callback as ye,update_keyed_each as De,outro_and_destroy_block as Le,svg_element as re}from"../../../node/dev/svelte-internal.js";import{X as Ae}from"./index-0c627992.js";import{c as ct}from"./utils-c3e3db58.js";import{U as ut}from"./Upload-29fdce3c.js";import{a as Je}from"./Button-9bfe2272.js";import{M as ft}from"./StaticMarkdown-f88fcd2a.js";import{d as tt}from"./dsv-576afacd.js";var nt=Object.prototype.hasOwnProperty;function ue(l,e){var t,o;if(l===e)return!0;if(l&&e&&(t=l.constructor)===e.constructor){if(t===Date)return l.getTime()===e.getTime();if(t===RegExp)return l.toString()===e.toString();if(t===Array){if((o=l.length)===e.length)for(;o--&&ue(l[o],e[o]););return o===-1}if(!t||typeof l=="object"){o=0;for(t in l)if(nt.call(l,t)&&++o&&!nt.call(e,t)||!(t in e)||!ue(l[t],e[t]))return!1;return Object.keys(e).length===o}}return l!==l&&e!==e}const dt="Users/peterallen/Projects/gradio/js/dataframe/shared/EditableCell.svelte";function je(l){let e,t,o;const s={c:function(){e=U("input"),w(e,"tabindex","-1"),e.value=l[0],w(e,"class","svelte-1fpq0oi"),O(e,"header",l[3]),A(e,dt,23,1,230)},m:function(a,c){j(a,e,c),l[8](e),t||(o=[Z(e,"keydown",l[7],!1,!1,!1,!1),Z(e,"blur",l[9],!1,!1,!1,!1)],t=!0)},p:function(a,c){c&1&&e.value!==a[0]&&Ot(e,"value",a[0]),c&8&&O(e,"header",a[3])},d:function(a){a&&M(e),l[8](null),t=!1,Ye(o)}};return q("SvelteRegisterBlock",{block:s,id:je.name,type:"if",source:"(10:0) {#if edit}",ctx:l}),s}function ht(l){let e;const t={c:function(){e=fe(l[0])},m:function(s,r){j(s,e,r)},p:function(s,r){r&1&&de(e,s[0])},i:pe,o:pe,d:function(s){s&&M(e)}};return q("SvelteRegisterBlock",{block:t,id:ht.name,type:"else",source:"(33:1) {:else}",ctx:l}),t}function _t(l){let e,t;e=new ft({props:{message:l[0].toLocaleString(),latex_delimiters:l[5],chatbot:!1},$$inline:!0});const o={c:function(){se(e.$$.fragment)},m:function(r,a){ie(e,r,a),t=!0},p:function(r,a){const c={};a&1&&(c.message=r[0].toLocaleString()),a&32&&(c.latex_delimiters=r[5]),e.$set(c)},i:function(r){t||(N(e.$$.fragment,r),t=!0)},o:function(r){H(e.$$.fragment,r),t=!1},d:function(r){ae(e,r)}};return q("SvelteRegisterBlock",{block:o,id:_t.name,type:"if",source:"(27:35) ",ctx:l}),o}function mt(l){let e,t;const o={c:function(){e=new Nt(!1),t=Ut(),e.a=t},m:function(r,a){e.m(l[0],r,a),j(r,t,a)},p:function(r,a){a&1&&e.p(r[0])},i:pe,o:pe,d:function(r){r&&(M(t),e.d())}};return q("SvelteRegisterBlock",{block:o,id:mt.name,type:"if",source:'(25:1) {#if datatype === \\"html\\"}',ctx:l}),o}function Me(l){let e,t,o,s,r,a,c,i=l[2]&&je(l);const f=[mt,_t,ht],h=[];function E(g,y){return g[4]==="html"?0:g[4]==="markdown"?1:2}o=E(l),s=h[o]=f[o](l);const b={c:function(){i&&i.c(),e=V(),t=U("span"),s.c(),w(t,"tabindex","-1"),w(t,"role","button"),w(t,"class","svelte-1fpq0oi"),O(t,"edit",l[2]),A(t,dt,36,0,441)},l:function(y){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(y,P){i&&i.m(y,P),j(y,e,P),j(y,t,P),h[o].m(t,null),r=!0,a||(c=Z(t,"dblclick",l[6],!1,!1,!1,!1),a=!0)},p:function(y,[P]){y[2]?i?i.p(y,P):(i=je(y),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null);let u=o;o=E(y),o===u?h[o].p(y,P):(x(),H(h[u],1,1,()=>{h[u]=null}),$(),s=h[o],s?s.p(y,P):(s=h[o]=f[o](y),s.c()),N(s,1),s.m(t,null)),(!r||P&4)&&O(t,"edit",y[2])},i:function(y){r||(N(s),r=!0)},o:function(y){H(s),r=!1},d:function(y){y&&(M(e),M(t)),i&&i.d(y),h[o].d(),a=!1,c()}};return q("SvelteRegisterBlock",{block:b,id:Me.name,type:"component",source:"",ctx:l}),b}function Ft(l,e,t){let{$$slots:o={},$$scope:s}=e;at("EditableCell",o,[]);let{edit:r}=e,{value:a=""}=e,{header:c=!1}=e,{datatype:i="str"}=e,{latex_delimiters:f}=e,{el:h}=e;l.$$.on_mount.push(function(){r===void 0&&!("edit"in e||l.$$.bound[l.$$.props.edit])&&console.warn("<EditableCell> was created without expected prop 'edit'"),f===void 0&&!("latex_delimiters"in e||l.$$.bound[l.$$.props.latex_delimiters])&&console.warn("<EditableCell> was created without expected prop 'latex_delimiters'"),h===void 0&&!("el"in e||l.$$.bound[l.$$.props.el])&&console.warn("<EditableCell> was created without expected prop 'el'")});const E=["edit","value","header","datatype","latex_delimiters","el"];Object.keys(e).forEach(u=>{!~E.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<EditableCell> was created with unknown prop '${u}'`)});function b(u){xe.call(this,l,u)}function g(u){xe.call(this,l,u)}function y(u){ee[u?"unshift":"push"](()=>{h=u,t(1,h)})}const P=({currentTarget:u})=>{t(0,a=u.value),u.setAttribute("tabindex","-1")};return l.$$set=u=>{"edit"in u&&t(2,r=u.edit),"value"in u&&t(0,a=u.value),"header"in u&&t(3,c=u.header),"datatype"in u&&t(4,i=u.datatype),"latex_delimiters"in u&&t(5,f=u.latex_delimiters),"el"in u&&t(1,h=u.el)},l.$capture_state=()=>({MarkdownCode:ft,edit:r,value:a,header:c,datatype:i,latex_delimiters:f,el:h}),l.$inject_state=u=>{"edit"in u&&t(2,r=u.edit),"value"in u&&t(0,a=u.value),"header"in u&&t(3,c=u.header),"datatype"in u&&t(4,i=u.datatype),"latex_delimiters"in u&&t(5,f=u.latex_delimiters),"el"in u&&t(1,h=u.el)},e&&"$$inject"in e&&l.$inject_state(e.$$inject),[a,h,r,c,i,f,b,g,y,P]}class Ve extends rt{constructor(e){super(e),st(this,e,Ft,Me,it,{edit:2,value:0,header:3,datatype:4,latex_delimiters:5,el:1}),q("SvelteRegisterComponent",{component:this,tagName:"EditableCell",options:e,id:Me.name})}get edit(){throw new Error("<EditableCell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set edit(e){throw new Error("<EditableCell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get value(){throw new Error("<EditableCell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(e){throw new Error("<EditableCell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get header(){throw new Error("<EditableCell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set header(e){throw new Error("<EditableCell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get datatype(){throw new Error("<EditableCell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set datatype(e){throw new Error("<EditableCell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get latex_delimiters(){throw new Error("<EditableCell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set latex_delimiters(e){throw new Error("<EditableCell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get el(){throw new Error("<EditableCell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set el(e){throw new Error("<EditableCell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const D="Users/peterallen/Projects/gradio/js/dataframe/shared/Table.svelte";function me(l,e,t){const o=l.slice();return o[57]=e[t],o[59]=t,o}function ge(l,e,t){const o=l.slice();return o[60]=e[t].value,o[61]=e[t].id,o[62]=e,o[63]=t,o}function be(l,e,t){const o=l.slice();return o[60]=e[t].value,o[61]=e[t].id,o[64]=e,o[59]=t,o}function Oe(l){let e,t;const o={c:function(){e=U("p"),t=fe(l[1]),w(e,"class","svelte-xegaym"),A(e,D,539,2,12752)},m:function(r,a){j(r,e,a),L(e,t)},p:function(r,a){a[0]&2&&de(t,r[1])},d:function(r){r&&M(e)}};return q("SvelteRegisterBlock",{block:o,id:Oe.name,type:"if",source:"(432:1) {#if label && label.length !== 0}",ctx:l}),o}function Ne(l){let e,t;const o={c:function(){e=U("caption"),t=fe(l[1]),w(e,"class","sr-only"),A(e,D,560,5,13191)},m:function(r,a){j(r,e,a),L(e,t)},p:function(r,a){a[0]&2&&de(t,r[1])},d:function(r){r&&M(e)}};return q("SvelteRegisterBlock",{block:o,id:Ne.name,type:"if",source:"(453:4) {#if label && label.length !== 0}",ctx:l}),o}function Ue(l,e){let t,o,s,r,a,c,i,f,h,E,b,g=e[61],y,P,u;function p(R){e[34](R,e[61])}function C(){return e[35](e[61])}let _={value:e[60],latex_delimiters:e[4],edit:e[16]===e[61],header:!0};e[13][e[61]].input!==void 0&&(_.el=e[13][e[61]].input),s=new Ve({props:_,$$inline:!0}),ee.push(()=>we(s,"el",p)),s.$on("keydown",e[25]),s.$on("dblclick",C);function v(){return e[36](e[59])}const m=()=>e[37](t,g),z=()=>e[37](null,g),K={key:l,first:null,c:function(){t=U("th"),o=U("div"),se(s.$$.fragment),a=V(),c=U("div"),i=re("svg"),f=re("path"),E=V(),w(f,"d","M4.49999 0L8.3971 6.75H0.602875L4.49999 0Z"),A(f,D,597,11,14327),w(i,"width","1em"),w(i,"height","1em"),w(i,"viewBox","0 0 9 7"),w(i,"fill","none"),w(i,"xmlns","http://www.w3.org/2000/svg"),w(i,"class","svelte-xegaym"),A(i,D,590,10,14154),w(c,"class",h="sort-button "+e[14]+" svelte-xegaym"),O(c,"sorted",e[15]===e[59]),O(c,"des",e[15]===e[59]&&e[14]==="des"),A(c,D,584,9,13935),w(o,"class","cell-wrap svelte-xegaym"),A(o,D,570,8,13486),w(t,"aria-sort",b=e[19](e[60],e[15],e[14])),w(t,"class","svelte-xegaym"),O(t,"editing",e[16]===e[61]),A(t,D,565,7,13321),this.first=t},m:function(F,I){j(F,t,I),L(t,o),ie(s,o,null),L(o,a),L(o,c),L(c,i),L(i,f),L(t,E),m(),y=!0,P||(u=Z(c,"click",v,!1,!1,!1,!1),P=!0)},p:function(F,I){e=F;const T={};I[0]&2048&&(T.value=e[60]),I[0]&16&&(T.latex_delimiters=e[4]),I[0]&67584&&(T.edit=e[16]===e[61]),!r&&I[0]&10240&&(r=!0,T.el=e[13][e[61]].input,ye(()=>r=!1)),s.$set(T),(!y||I[0]&16384&&h!==(h="sort-button "+e[14]+" svelte-xegaym"))&&w(c,"class",h),(!y||I[0]&51200)&&O(c,"sorted",e[15]===e[59]),(!y||I[0]&51200)&&O(c,"des",e[15]===e[59]&&e[14]==="des"),(!y||I[0]&51200&&b!==(b=e[19](e[60],e[15],e[14])))&&w(t,"aria-sort",b),g!==e[61]&&(z(),g=e[61],m()),(!y||I[0]&67584)&&O(t,"editing",e[16]===e[61])},i:function(F){y||(N(s.$$.fragment,F),y=!0)},o:function(F){H(s.$$.fragment,F),y=!1},d:function(F){F&&M(t),ae(s),z(),P=!1,u()}};return q("SvelteRegisterBlock",{block:K,id:Ue.name,type:"each",source:"(458:6) {#each _headers as { value, id }",ctx:e}),K}function qe(l,e){let t,o,s,r,a,c=e[61],i,f,h;function E(m){e[38](m,e[60],e[62],e[63])}function b(m){e[39](m,e[61])}let g={latex_delimiters:e[4],edit:e[10]===e[61],datatype:Array.isArray(e[0])?e[0][e[63]]:e[0]};e[60]!==void 0&&(g.value=e[60]),e[13][e[61]].input!==void 0&&(g.el=e[13][e[61]].input),s=new Ve({props:g,$$inline:!0}),ee.push(()=>we(s,"value",E)),ee.push(()=>we(s,"el",b));const y=()=>e[40](t,c),P=()=>e[40](null,c);function u(){return e[41](e[61])}function p(){return e[42](e[61])}function C(){return e[43](e[61])}function _(...m){return e[44](e[59],e[63],e[61],...m)}const v={key:l,first:null,c:function(){t=U("td"),o=U("div"),se(s.$$.fragment),w(o,"class","cell-wrap svelte-xegaym"),O(o,"border-transparent",e[9]!==e[61]),A(o,D,618,9,14866),w(t,"tabindex","0"),w(t,"class","svelte-xegaym"),A(t,D,610,8,14592),this.first=t},m:function(z,K){j(z,t,K),L(t,o),ie(s,o,null),y(),i=!0,f||(h=[Z(t,"touchstart",u,{passive:!0},!1,!1,!1),Z(t,"click",p,!1,!1,!1,!1),Z(t,"dblclick",C,!1,!1,!1,!1),Z(t,"keydown",_,!1,!1,!1,!1)],f=!0)},p:function(z,K){e=z;const R={};K[0]&16&&(R.latex_delimiters=e[4]),K[0]&5120&&(R.edit=e[10]===e[61]),K[0]&4097&&(R.datatype=Array.isArray(e[0])?e[0][e[63]]:e[0]),!r&&K[0]&4096&&(r=!0,R.value=e[60],ye(()=>r=!1)),!a&&K[0]&12288&&(a=!0,R.el=e[13][e[61]].input,ye(()=>a=!1)),s.$set(R),(!i||K[0]&4608)&&O(o,"border-transparent",e[9]!==e[61]),c!==e[61]&&(P(),c=e[61],y())},i:function(z){i||(N(s.$$.fragment,z),i=!0)},o:function(z){H(s.$$.fragment,z),i=!1},d:function(z){z&&M(t),ae(s),P(),f=!1,Ye(h)}};return q("SvelteRegisterBlock",{block:v,id:qe.name,type:"each",source:"(503:7) {#each row as { value, id }",ctx:e}),v}function ze(l,e){let t,o=[],s=new Map,r,a,c=le(e[57]);const i=h=>h[61];oe(e,c,ge,i);for(let h=0;h<c.length;h+=1){let E=ge(e,c,h),b=i(E);s.set(b,o[h]=qe(b,E))}const f={key:l,first:null,c:function(){t=U("tr");for(let E=0;E<o.length;E+=1)o[E].c();r=V(),w(t,"class","svelte-xegaym"),A(t,D,608,6,14535),this.first=t},m:function(E,b){j(E,t,b);for(let g=0;g<o.length;g+=1)o[g]&&o[g].m(t,null);L(t,r),a=!0},p:function(E,b){e=E,b[0]&7353873&&(c=le(e[57]),x(),oe(e,c,ge,i),o=De(o,b,i,1,e,c,s,t,Le,qe,r,ge),$())},i:function(E){if(!a){for(let b=0;b<c.length;b+=1)N(o[b]);a=!0}},o:function(E){for(let b=0;b<o.length;b+=1)H(o[b]);a=!1},d:function(E){E&&M(t);for(let b=0;b<o.length;b+=1)o[b].d()}};return q("SvelteRegisterBlock",{block:f,id:ze.name,type:"each",source:"(501:5) {#each data as row, i (row)}",ctx:e}),f}function gt(l){let e,t,o,s,r=[],a=new Map,c,i,f=[],h=new Map,E,b=l[1]&&l[1].length!==0&&Ne(l),g=le(l[11]);const y=C=>C[61];oe(l,g,be,y);for(let C=0;C<g.length;C+=1){let _=be(l,g,C),v=y(_);a.set(v,r[C]=Ue(v,_))}let P=le(l[12]);const u=C=>C[57];oe(l,P,me,u);for(let C=0;C<P.length;C+=1){let _=me(l,P,C),v=u(_);h.set(v,f[C]=ze(v,_))}const p={c:function(){e=U("table"),b&&b.c(),t=V(),o=U("thead"),s=U("tr");for(let _=0;_<r.length;_+=1)r[_].c();c=V(),i=U("tbody");for(let _=0;_<f.length;_+=1)f[_].c();w(s,"class","svelte-xegaym"),A(s,D,563,5,13261),w(o,"class","svelte-xegaym"),A(o,D,562,4,13248),w(i,"class","svelte-xegaym"),A(i,D,606,4,14487),w(e,"class","svelte-xegaym"),O(e,"dragging",l[17]),A(e,D,558,3,13125)},m:function(_,v){j(_,e,v),b&&b.m(e,null),L(e,t),L(e,o),L(o,s);for(let m=0;m<r.length;m+=1)r[m]&&r[m].m(s,null);L(e,c),L(e,i);for(let m=0;m<f.length;m+=1)f[m]&&f[m].m(i,null);E=!0},p:function(_,v){_[1]&&_[1].length!==0?b?b.p(_,v):(b=Ne(_),b.c(),b.m(e,t)):b&&(b.d(1),b=null),v[0]&59369488&&(g=le(_[11]),x(),oe(_,g,be,y),r=De(r,v,y,1,_,g,a,s,Le,Ue,null,be),$()),v[0]&7353873&&(P=le(_[12]),x(),oe(_,P,me,u),f=De(f,v,u,1,_,P,h,i,Le,ze,null,me),$()),(!E||v[0]&131072)&&O(e,"dragging",_[17])},i:function(_){if(!E){for(let v=0;v<g.length;v+=1)N(r[v]);for(let v=0;v<P.length;v+=1)N(f[v]);E=!0}},o:function(_){for(let v=0;v<r.length;v+=1)H(r[v]);for(let v=0;v<f.length;v+=1)H(f[v]);E=!1},d:function(_){_&&M(e),b&&b.d();for(let v=0;v<r.length;v+=1)r[v].d();for(let v=0;v<f.length;v+=1)f[v].d()}};return q("SvelteRegisterBlock",{block:p,id:gt.name,type:"slot",source:"(443:2) <Upload    flex={false}    center={false}    boundedheight={false}    disable_click={true}    {root}    on:load={(e) => blob_to_string(data_uri_to_blob(e.detail.data))}    bind:dragging   >",ctx:l}),p}function He(l){let e,t,o,s=l[3][1]==="dynamic"&&Fe(l),r=l[2][1]==="dynamic"&&Ie(l);const a={c:function(){e=U("div"),s&&s.c(),t=V(),r&&r.c(),w(e,"class","controls-wrap svelte-xegaym"),A(e,D,641,2,15348)},m:function(i,f){j(i,e,f),s&&s.m(e,null),L(e,t),r&&r.m(e,null),o=!0},p:function(i,f){i[3][1]==="dynamic"?s?(s.p(i,f),f[0]&8&&N(s,1)):(s=Fe(i),s.c(),N(s,1),s.m(e,t)):s&&(x(),H(s,1,1,()=>{s=null}),$()),i[2][1]==="dynamic"?r?(r.p(i,f),f[0]&4&&N(r,1)):(r=Ie(i),r.c(),N(r,1),r.m(e,null)):r&&(x(),H(r,1,1,()=>{r=null}),$())},i:function(i){o||(N(s),N(r),o=!0)},o:function(i){H(s),H(r),o=!1},d:function(i){i&&M(e),s&&s.d(),r&&r.d()}};return q("SvelteRegisterBlock",{block:a,id:He.name,type:"if",source:"(534:1) {#if editable}",ctx:l}),a}function Fe(l){let e,t,o;t=new Je({props:{variant:"secondary",size:"sm",$$slots:{default:[bt]},$$scope:{ctx:l}},$$inline:!0}),t.$on("click",l[47]);const s={c:function(){e=U("span"),se(t.$$.fragment),w(e,"class","button-wrap svelte-xegaym"),A(e,D,643,4,15416)},m:function(a,c){j(a,e,c),ie(t,e,null),o=!0},p:function(a,c){const i={};c[0]&262144|c[2]&8&&(i.$$scope={dirty:c,ctx:a}),t.$set(i)},i:function(a){o||(N(t.$$.fragment,a),o=!0)},o:function(a){H(t.$$.fragment,a),o=!1},d:function(a){a&&M(e),ae(t)}};return q("SvelteRegisterBlock",{block:s,id:Fe.name,type:"if",source:'(536:3) {#if row_count[1] === \\"dynamic\\"}',ctx:l}),s}function bt(l){let e,t,o,s=l[18]("dataframe.new_row")+"",r;const a={c:function(){e=re("svg"),t=re("path"),o=V(),r=fe(s),w(t,"fill","currentColor"),w(t,"d","M24.59 16.59L17 24.17V4h-2v20.17l-7.59-7.58L6 18l10 10l10-10l-1.41-1.41z"),A(t,D,655,7,15789),w(e,"xmlns","http://www.w3.org/2000/svg"),w(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),w(e,"aria-hidden","true"),w(e,"role","img"),w(e,"width","1em"),w(e,"height","1em"),w(e,"preserveAspectRatio","xMidYMid meet"),w(e,"viewBox","0 0 32 32"),w(e,"class","svelte-xegaym"),A(e,D,645,6,15524)},m:function(i,f){j(i,e,f),L(e,t),j(i,o,f),j(i,r,f)},p:function(i,f){f[0]&262144&&s!==(s=i[18]("dataframe.new_row")+"")&&de(r,s)},d:function(i){i&&(M(e),M(o),M(r))}};return q("SvelteRegisterBlock",{block:a,id:bt.name,type:"slot",source:'(538:5) <BaseButton variant=\\"secondary\\" size=\\"sm\\" on:click={() => add_row()}>',ctx:l}),a}function Ie(l){let e,t,o;t=new Je({props:{variant:"secondary",size:"sm",$$slots:{default:[pt]},$$scope:{ctx:l}},$$inline:!0}),t.$on("click",l[27]);const s={c:function(){e=U("span"),se(t.$$.fragment),w(e,"class","button-wrap svelte-xegaym"),A(e,D,665,4,16043)},m:function(a,c){j(a,e,c),ie(t,e,null),o=!0},p:function(a,c){const i={};c[0]&262144|c[2]&8&&(i.$$scope={dirty:c,ctx:a}),t.$set(i)},i:function(a){o||(N(t.$$.fragment,a),o=!0)},o:function(a){H(t.$$.fragment,a),o=!1},d:function(a){a&&M(e),ae(t)}};return q("SvelteRegisterBlock",{block:s,id:Ie.name,type:"if",source:'(558:3) {#if col_count[1] === \\"dynamic\\"}',ctx:l}),s}function pt(l){let e,t,o,s=l[18]("dataframe.new_column")+"",r;const a={c:function(){e=re("svg"),t=re("path"),o=V(),r=fe(s),w(t,"fill","currentColor"),w(t,"d","m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"),A(t,D,677,7,16408),w(e,"xmlns","http://www.w3.org/2000/svg"),w(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),w(e,"aria-hidden","true"),w(e,"role","img"),w(e,"width","1em"),w(e,"height","1em"),w(e,"preserveAspectRatio","xMidYMid meet"),w(e,"viewBox","0 0 32 32"),w(e,"class","svelte-xegaym"),A(e,D,667,6,16143)},m:function(i,f){j(i,e,f),L(e,t),j(i,o,f),j(i,r,f)},p:function(i,f){f[0]&262144&&s!==(s=i[18]("dataframe.new_column")+"")&&de(r,s)},d:function(i){i&&(M(e),M(o),M(r))}};return q("SvelteRegisterBlock",{block:a,id:pt.name,type:"slot",source:'(560:5) <BaseButton variant=\\"secondary\\" size=\\"sm\\" on:click={add_col}>',ctx:l}),a}function Ke(l){let e,t,o,s,r,a,c,i,f,h=l[1]&&l[1].length!==0&&Oe(l);function E(P){l[45](P)}let b={flex:!1,center:!1,boundedheight:!1,disable_click:!0,root:l[7],$$slots:{default:[gt]},$$scope:{ctx:l}};l[17]!==void 0&&(b.dragging=l[17]),s=new ut({props:b,$$inline:!0}),ee.push(()=>we(s,"dragging",E)),s.$on("load",l[46]);let g=l[5]&&He(l);const y={c:function(){e=U("div"),h&&h.c(),t=V(),o=U("div"),se(s.$$.fragment),a=V(),g&&g.c(),w(o,"class","table-wrap svelte-xegaym"),et(o,"max-height",typeof l[8]===void 0?"auto":l[8]+"px"),O(o,"dragging",l[17]),O(o,"no-wrap",!l[6]),A(o,D,543,1,12782),w(e,"class","svelte-xegaym"),O(e,"label",l[1]&&l[1].length!==0),A(e,D,537,0,12658)},l:function(u){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(u,p){j(u,e,p),h&&h.m(e,null),L(e,t),L(e,o),ie(s,o,null),L(e,a),g&&g.m(e,null),c=!0,i||(f=[Z(window,"click",l[28],!1,!1,!1,!1),Z(window,"touchstart",l[28],!1,!1,!1,!1),Ht(ct.call(null,e))],i=!0)},p:function(u,p){u[1]&&u[1].length!==0?h?h.p(u,p):(h=Oe(u),h.c(),h.m(e,t)):h&&(h.d(1),h=null);const C={};p[0]&128&&(C.root=u[7]),p[0]&261651|p[2]&8&&(C.$$scope={dirty:p,ctx:u}),!r&&p[0]&131072&&(r=!0,C.dragging=u[17],ye(()=>r=!1)),s.$set(C),(!c||p[0]&256)&&et(o,"max-height",typeof u[8]===void 0?"auto":u[8]+"px"),(!c||p[0]&131072)&&O(o,"dragging",u[17]),(!c||p[0]&64)&&O(o,"no-wrap",!u[6]),u[5]?g?(g.p(u,p),p[0]&32&&N(g,1)):(g=He(u),g.c(),N(g,1),g.m(e,null)):g&&(x(),H(g,1,1,()=>{g=null}),$()),(!c||p[0]&2)&&O(e,"label",u[1]&&u[1].length!==0)},i:function(u){c||(N(s.$$.fragment,u),N(g),c=!0)},o:function(u){H(s.$$.fragment,u),H(g),c=!1},d:function(u){u&&M(e),h&&h.d(),ae(s),g&&g.d(),i=!1,Ye(f)}};return q("SvelteRegisterBlock",{block:y,id:Ke.name,type:"component",source:"",ctx:l}),y}function lt(l,e){return e.filter(t);function t(o){var s=-1;return l.split(`
`).every(r);function r(a){if(!a)return!0;var c=a.split(o).length;return s<0&&(s=c),s===c&&c>1}}}function ot(l){const e=atob(l.split(",")[1]),t=l.split(",")[0].split(":")[1].split(";")[0],o=new ArrayBuffer(e.length),s=new Uint8Array(o);for(let r=0;r<e.length;r++)s[r]=e.charCodeAt(r);return new Blob([o],{type:t})}function It(l,e,t){let o;qt(Ae,"_"),zt(l,Ae,n=>t(18,o=n));let{$$slots:s={},$$scope:r}=e;at("Table",s,[]);let{datatype:a}=e,{label:c=null}=e,{headers:i=[]}=e,{values:f=[[]]}=e,{col_count:h}=e,{row_count:E}=e,{latex_delimiters:b}=e,{editable:g=!0}=e,{wrap:y=!1}=e,{root:P}=e,{height:u=void 0}=e,p=!1;const C=$e();let _=!1;const v=(n,d)=>T[n][d].value;let m={};function z(n){let d=n||[];if(h[1]==="fixed"&&d.length<h[0]){const k=Array(h[0]-d.length).fill("").map((B,S)=>`${S+d.length}`);d=d.concat(k)}return!d||d.length===0?Array(h[0]).fill(0).map((k,B)=>{const S=`h-${B}`;return t(13,m[S]={cell:null,input:null},m),{id:S,value:JSON.stringify(B+1)}}):d.map((k,B)=>{const S=`h-${B}`;return t(13,m[S]={cell:null,input:null},m),{id:S,value:k??""}})}function K(n){const d=n.length;return Array(E[1]==="fixed"||d<E[0]?E[0]:d).fill(0).map((k,B)=>Array(h[1]==="fixed"?h[0]:d>0?n[0].length:i.length).fill(0).map((S,J)=>{const W=`${B}-${J}`;return t(13,m[W]={input:null,cell:null},m),{value:n?.[B]?.[J]??"",id:W}}))}let R=z(i),F;async function I(){typeof _=="string"?(await X(),m[_]?.input?.focus()):typeof p=="string"&&(await X(),m[p]?.input?.focus())}let T=[[]],Q;function Xe(n,d,k){if(!d)return"none";if(i[d]===n){if(k==="asc")return"ascending";if(k==="des")return"descending"}return"none"}function ke(n){return T.reduce((d,k,B)=>{const S=k.reduce((J,W,Re)=>n===W.id?Re:J,-1);return S===-1?d:[B,S]},[-1,-1])}async function te(n,d){if(!g||_===n)return;if(d){const[B,S]=ke(n);t(12,T[B][S].value="",T)}t(10,_=n),await X();const{input:k}=m[n];k?.focus()}async function ve(n,d,k,B){let S;switch(n.key){case"ArrowRight":if(_)break;n.preventDefault(),S=T[d][k+1],t(9,p=S?S.id:p);break;case"ArrowLeft":if(_)break;n.preventDefault(),S=T[d][k-1],t(9,p=S?S.id:p);break;case"ArrowDown":if(_)break;n.preventDefault(),S=T[d+1],t(9,p=S?S[k].id:p);break;case"ArrowUp":if(_)break;n.preventDefault(),S=T[d-1],t(9,p=S?S[k].id:p);break;case"Escape":if(!g)break;n.preventDefault(),t(9,p=_),t(10,_=!1);break;case"Enter":if(!g)break;if(n.preventDefault(),n.shiftKey){_e(d),await X();const[Mt]=ke(B);t(9,p=T[Mt+1][k].id)}else _===B?t(10,_=!1):te(B);break;case"Backspace":if(!g)break;_||(n.preventDefault(),t(12,T[d][k].value="",T));break;case"Delete":if(!g)break;_||(n.preventDefault(),t(12,T[d][k].value="",T));break;case"Tab":let J=n.shiftKey?-1:1,W=T[d][k+J],Re=T?.[d+J]?.[J>0?0:R.length-1],Se=W||Re;Se&&(n.preventDefault(),t(9,p=Se?Se.id:p)),t(10,_=!1);break;default:(!_||_&&_!==B)&&n.key.length===1&&te(B,!0);break}}async function Ee(n){_!==n&&p!==n&&(t(10,_=!1),t(9,p=n))}async function Te(n,d){if(d==="edit"&&typeof n=="string"&&(await X(),m[n].input?.focus()),d==="edit"&&typeof n=="boolean"&&typeof p=="string"){let k=m[p]?.cell;await X(),k?.focus()}if(d==="select"&&typeof n=="string"){const{cell:k}=m[n];await X(),k?.focus()}}let G,ne;function Ze(n,d){d==="asc"?t(12,T=T.sort((k,B)=>k[n].value<B[n].value?-1:1)):d==="des"&&t(12,T=T.sort((k,B)=>k[n].value>B[n].value?-1:1))}function Pe(n){typeof ne!="number"||ne!==n?(t(14,G="asc"),t(15,ne=n)):G==="asc"?t(14,G="des"):G==="des"&&t(14,G="asc"),Ze(n,G)}let Y;function Be(){if(typeof p=="string"){const n=m[p].input?.value;if(R.find(d=>d.id===p)){let d=R.find(k=>k.id===p);n&&(d.value=n)}else n&&R.push({id:p,value:n})}}async function he(n,d){!g||h[1]!=="dynamic"||_===n||(t(16,Y=n),await X(),m[n].input?.focus(),d&&m[n].input?.select())}function Ge(n){if(g)switch(n.key){case"Escape":case"Enter":case"Tab":n.preventDefault(),t(9,p=Y),t(16,Y=!1),Be();break}}function _e(n){if(E[1]==="dynamic"){if(T.length===0){t(31,f=[Array(i.length).fill("")]);return}T.splice(n?n+1:T.length,0,Array(T[0].length).fill(0).map((d,k)=>{const B=`${T.length}-${k}`;return t(13,m[B]={cell:null,input:null},m),{id:B,value:""}})),t(12,T),t(31,f),t(33,Q)}}async function Qe(){if(h[1]!=="dynamic")return;for(let d=0;d<T.length;d++){const k=`${d}-${T[d].length}`;t(13,m[k]={cell:null,input:null},m),T[d].push({id:k,value:""})}const n=`h-${R.length}`;t(13,m[n]={cell:null,input:null},m),R.push({id:n,value:`Header ${R.length+1}`}),t(12,T),t(31,f),t(33,Q),t(11,R),t(30,i),t(32,F),t(31,f),await X(),he(n,!0)}function We(n){typeof _=="string"&&m[_]&&m[_].cell!==n.target&&!m[_].cell?.contains(n?.target)&&t(10,_=!1),typeof Y=="string"&&m[Y]&&m[Y].cell!==n.target&&!m[Y].cell?.contains(n.target)&&(t(9,p=Y),t(16,Y=!1),Be(),t(16,Y=!1))}function Ce(n){const d=new FileReader;function k(B){if(!B?.target?.result||typeof B.target.result!="string")return;const[S]=lt(B.target.result,[",","	"]),[J,...W]=tt(S).parseRows(B.target.result);t(11,R=z(h[1]==="fixed"?J.slice(0,h[0]):J)),t(31,f=W),d.removeEventListener("loadend",k)}d.addEventListener("loadend",k),d.readAsText(n)}let ce=!1;l.$$.on_mount.push(function(){a===void 0&&!("datatype"in e||l.$$.bound[l.$$.props.datatype])&&console.warn("<Table> was created without expected prop 'datatype'"),h===void 0&&!("col_count"in e||l.$$.bound[l.$$.props.col_count])&&console.warn("<Table> was created without expected prop 'col_count'"),E===void 0&&!("row_count"in e||l.$$.bound[l.$$.props.row_count])&&console.warn("<Table> was created without expected prop 'row_count'"),b===void 0&&!("latex_delimiters"in e||l.$$.bound[l.$$.props.latex_delimiters])&&console.warn("<Table> was created without expected prop 'latex_delimiters'"),P===void 0&&!("root"in e||l.$$.bound[l.$$.props.root])&&console.warn("<Table> was created without expected prop 'root'")});const wt=["datatype","label","headers","values","col_count","row_count","latex_delimiters","editable","wrap","root","height"];Object.keys(e).forEach(n=>{!~wt.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<Table> was created with unknown prop '${n}'`)});function yt(n,d){l.$$.not_equal(m[d].input,n)&&(m[d].input=n,t(13,m))}const kt=n=>he(n),vt=n=>Pe(n);function Et(n,d){ee[n?"unshift":"push"](()=>{m[d].cell=n,t(13,m)})}function Tt(n,d,k,B){k[B].value=n,t(12,T),t(31,f),t(33,Q)}function Pt(n,d){l.$$.not_equal(m[d].input,n)&&(m[d].input=n,t(13,m))}function Bt(n,d){ee[n?"unshift":"push"](()=>{m[d].cell=n,t(13,m)})}const Ct=n=>te(n),Rt=n=>Ee(n),St=n=>te(n),At=(n,d,k,B)=>ve(B,n,d,k);function Dt(n){ce=n,t(17,ce)}const Lt=n=>Ce(ot(n.detail.data)),jt=()=>_e();return l.$$set=n=>{"datatype"in n&&t(0,a=n.datatype),"label"in n&&t(1,c=n.label),"headers"in n&&t(30,i=n.headers),"values"in n&&t(31,f=n.values),"col_count"in n&&t(2,h=n.col_count),"row_count"in n&&t(3,E=n.row_count),"latex_delimiters"in n&&t(4,b=n.latex_delimiters),"editable"in n&&t(5,g=n.editable),"wrap"in n&&t(6,y=n.wrap),"root"in n&&t(7,P=n.root),"height"in n&&t(8,u=n.height)},l.$capture_state=()=>({createEventDispatcher:$e,tick:X,dsvFormat:tt,dequal:ue,copy:ct,Upload:ut,BaseButton:Je,EditableCell:Ve,_:Ae,datatype:a,label:c,headers:i,values:f,col_count:h,row_count:E,latex_delimiters:b,editable:g,wrap:y,root:P,height:u,selected:p,dispatch:C,editing:_,get_data_at:v,els:m,make_headers:z,process_data:K,_headers:R,old_headers:F,refresh_focus:I,data:T,old_val:Q,get_sort_status:Xe,get_current_indices:ke,start_edit:te,handle_keydown:ve,handle_cell_click:Ee,set_focus:Te,sort_direction:G,sort_by:ne,sort:Ze,handle_sort:Pe,header_edit:Y,update_headers_data:Be,edit_header:he,end_header_edit:Ge,add_row:_e,add_col:Qe,handle_click_outside:We,guess_delimitaor:lt,data_uri_to_blob:ot,blob_to_string:Ce,dragging:ce,$_:o}),l.$inject_state=n=>{"datatype"in n&&t(0,a=n.datatype),"label"in n&&t(1,c=n.label),"headers"in n&&t(30,i=n.headers),"values"in n&&t(31,f=n.values),"col_count"in n&&t(2,h=n.col_count),"row_count"in n&&t(3,E=n.row_count),"latex_delimiters"in n&&t(4,b=n.latex_delimiters),"editable"in n&&t(5,g=n.editable),"wrap"in n&&t(6,y=n.wrap),"root"in n&&t(7,P=n.root),"height"in n&&t(8,u=n.height),"selected"in n&&t(9,p=n.selected),"editing"in n&&t(10,_=n.editing),"els"in n&&t(13,m=n.els),"_headers"in n&&t(11,R=n._headers),"old_headers"in n&&t(32,F=n.old_headers),"data"in n&&t(12,T=n.data),"old_val"in n&&t(33,Q=n.old_val),"sort_direction"in n&&t(14,G=n.sort_direction),"sort_by"in n&&t(15,ne=n.sort_by),"header_edit"in n&&t(16,Y=n.header_edit),"dragging"in n&&t(17,ce=n.dragging)},e&&"$$inject"in e&&l.$inject_state(e.$$inject),l.$$.update=()=>{if(l.$$.dirty[1]&1&&(f&&!Array.isArray(f)?(t(30,i=f.headers),t(31,f=f.data),t(9,p=!1)):f===null&&(t(31,f=[]),t(9,p=!1))),l.$$.dirty[0]&512&&p!==!1){const n=p.split("-"),d=parseInt(n[0]),k=parseInt(n[1]);!isNaN(d)&&!isNaN(k)&&C("select",{index:[d,k],value:v(d,k)})}l.$$.dirty[0]&1073741824|l.$$.dirty[1]&2&&(ue(i,F)||(t(11,R=z(i)),t(32,F=i),I())),l.$$.dirty[1]&5&&(ue(f,Q)||(t(12,T=K(f)),t(33,Q=f),I())),l.$$.dirty[0]&6144&&R&&C("change",{data:T.map(n=>n.map(({value:d})=>d)),headers:R.map(n=>n.value)}),l.$$.dirty[0]&1024&&Te(_,"edit"),l.$$.dirty[0]&512&&Te(p,"select")},[a,c,h,E,b,g,y,P,u,p,_,R,T,m,G,ne,Y,ce,o,Xe,te,ve,Ee,Pe,he,Ge,_e,Qe,We,Ce,i,f,F,Q,yt,kt,vt,Et,Tt,Pt,Bt,Ct,Rt,St,At,Dt,Lt,jt]}class Qt extends rt{constructor(e){super(e),st(this,e,It,Ke,it,{datatype:0,label:1,headers:30,values:31,col_count:2,row_count:3,latex_delimiters:4,editable:5,wrap:6,root:7,height:8},null,[-1,-1,-1]),q("SvelteRegisterComponent",{component:this,tagName:"Table",options:e,id:Ke.name})}get datatype(){throw new Error("<Table>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set datatype(e){throw new Error("<Table>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<Table>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(e){throw new Error("<Table>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get headers(){throw new Error("<Table>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set headers(e){throw new Error("<Table>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get values(){throw new Error("<Table>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set values(e){throw new Error("<Table>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get col_count(){throw new Error("<Table>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set col_count(e){throw new Error("<Table>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get row_count(){throw new Error("<Table>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set row_count(e){throw new Error("<Table>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get latex_delimiters(){throw new Error("<Table>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set latex_delimiters(e){throw new Error("<Table>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editable(){throw new Error("<Table>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editable(e){throw new Error("<Table>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get wrap(){throw new Error("<Table>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set wrap(e){throw new Error("<Table>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get root(){throw new Error("<Table>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set root(e){throw new Error("<Table>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get height(){throw new Error("<Table>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set height(e){throw new Error("<Table>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Qt as T};
//# sourceMappingURL=Table-3bbd236c.js.map
