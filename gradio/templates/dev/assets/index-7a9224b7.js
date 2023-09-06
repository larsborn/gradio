import{SvelteComponentDev as se,init as ae,safe_not_equal as x,dispatch_dev as p,validate_slots as ce,createEventDispatcher as $,globals as ue,create_component as B,space as A,empty as F,mount_component as I,insert_dev as P,group_outros as G,transition_out as k,check_outros as H,transition_in as y,detach_dev as S,destroy_component as j,bubble as C,binding_callbacks as Le,bind as Xe,create_slot as Ae,element as ee,text as te,attr_dev as oe,add_location as ne,append_dev as ie,set_data_dev as re,noop as X,add_flush_callback as Fe,update_slot_base as Ge,get_all_dirty_from_scope as He,get_slot_changes as Ke,flush as w,assign as Qe,get_spread_update as Ye,get_spread_object as Ze}from"../../../node/dev/svelte-internal.js";import{S as de,X as xe}from"./index-09ad131b.js";import{n as L,B as fe}from"./Button-70427016.js";import{U as _e}from"./UploadText-4a361f4c.js";import{U as me}from"./Upload-c27a3fdf.js";import{M as he}from"./ModifyUpload-1a195fc2.js";import{B as be}from"./BlockLabel-facb91af.js";import{V as ge,P as we}from"./Player-ca6ccf2e.js";import{W as ke}from"./InteractiveImage-5fee324b.js";import{a as K,p as ye}from"./Player.svelte_svelte_type_style_lang-4712a5da.js";import"./IconButton-b7cab4d0.js";import"./Undo-059ed206.js";import"./Image-70764d4a.js";import"./utils-90f3612b.js";const{console:q}=ue,le="Users/peterallen/Projects/gradio/js/video/interactive/Video.svelte";function ve(t){let e,o,s,l,n,r,a;e=new he({$$inline:!0}),e.$on("clear",t[12]);const d=[Ee,Ve],u=[];function f(_,m){return s==null&&(s=!!ye()),s?0:_[0].size?1:-1}~(l=f(t))&&(n=u[l]=d[l](t));const h={c:function(){B(e.$$.fragment),o=A(),n&&n.c(),r=F()},m:function(m,b){I(e,m,b),P(m,o,b),~l&&u[l].m(m,b),P(m,r,b),a=!0},p:function(m,b){let g=l;l=f(m),l===g?~l&&u[l].p(m,b):(n&&(G(),k(u[g],1,1,()=>{u[g]=null}),H()),~l?(n=u[l],n?n.p(m,b):(n=u[l]=d[l](m),n.c()),y(n,1),n.m(r.parentNode,r)):n=null)},i:function(m){a||(y(e.$$.fragment,m),y(n),a=!0)},o:function(m){k(e.$$.fragment,m),k(n),a=!1},d:function(m){m&&(S(o),S(r)),j(e,m),~l&&u[l].d(m)}};return p("SvelteRegisterBlock",{block:h,id:ve.name,type:"else",source:"(57:0) {:else}",ctx:t}),h}function pe(t){let e,o,s,l;const n=[Se,Pe],r=[];function a(u,f){return u[2]==="upload"?0:u[2]==="webcam"?1:-1}~(e=a(t))&&(o=r[e]=n[e](t));const d={c:function(){o&&o.c(),s=F()},m:function(f,h){~e&&r[e].m(f,h),P(f,s,h),l=!0},p:function(f,h){let _=e;e=a(f),e===_?~e&&r[e].p(f,h):(o&&(G(),k(r[_],1,1,()=>{r[_]=null}),H()),~e?(o=r[e],o?o.p(f,h):(o=r[e]=n[e](f),o.c()),y(o,1),o.m(s.parentNode,s)):o=null)},i:function(f){l||(y(o),l=!0)},o:function(f){k(o),l=!1},d:function(f){f&&S(s),~e&&r[e].d(f)}};return p("SvelteRegisterBlock",{block:d,id:pe.name,type:"if",source:"(36:0) {#if value === null}",ctx:t}),d}function Ve(t){let e,o=t[0].name+"",s,l,n,r=K(t[0].size)+"",a;const d={c:function(){e=ee("div"),s=te(o),l=A(),n=ee("div"),a=te(r),oe(e,"class","file-name svelte-le2jrd"),ne(e,le,92,2,1812),oe(n,"class","file-size svelte-le2jrd"),ne(n,le,93,2,1856)},m:function(f,h){P(f,e,h),ie(e,s),P(f,l,h),P(f,n,h),ie(n,a)},p:function(f,h){h&1&&o!==(o=f[0].name+"")&&re(s,o),h&1&&r!==(r=K(f[0].size)+"")&&re(a,r)},i:X,o:X,d:function(f){f&&(S(e),S(l),S(n))}};return p("SvelteRegisterBlock",{block:d,id:Ve.name,type:"if",source:"(73:22) ",ctx:t}),d}function Ee(t){let e=t[0]?.data,o,s,l=Q(t);const n={c:function(){l.c(),o=F()},m:function(a,d){l.m(a,d),P(a,o,d),s=!0},p:function(a,d){d&1&&x(e,e=a[0]?.data)?(G(),k(l,1,1,X),H(),l=Q(a),l.c(),y(l,1),l.m(o.parentNode,o)):l.p(a,d)},i:function(a){s||(y(l),s=!0)},o:function(a){k(l),s=!1},d:function(a){a&&S(o),l.d(a)}};return p("SvelteRegisterBlock",{block:n,id:Ee.name,type:"if",source:"(59:1) {#if playable()}",ctx:t}),n}function Q(t){let e,o;e=new we({props:{autoplay:t[7],src:t[0].data,subtitle:t[1]?.data,mirror:t[5]&&t[2]==="webcam",label:t[3]},$$inline:!0}),e.$on("play",t[19]),e.$on("pause",t[20]),e.$on("stop",t[21]),e.$on("end",t[22]);const s={c:function(){B(e.$$.fragment)},m:function(n,r){I(e,n,r),o=!0},p:function(n,r){const a={};r&128&&(a.autoplay=n[7]),r&1&&(a.src=n[0].data),r&2&&(a.subtitle=n[1]?.data),r&36&&(a.mirror=n[5]&&n[2]==="webcam"),r&8&&(a.label=n[3]),e.$set(a)},i:function(n){o||(y(e.$$.fragment,n),o=!0)},o:function(n){k(e.$$.fragment,n),o=!1},d:function(n){j(e,n)}};return p("SvelteRegisterBlock",{block:s,id:Q.name,type:"key",source:"(60:2) {#key value?.data}",ctx:t}),s}function Pe(t){let e,o;e=new ke({props:{mirror_webcam:t[5],include_audio:t[6],mode:"video"},$$inline:!0}),e.$on("error",t[15]),e.$on("capture",t[16]),e.$on("start_recording",t[17]),e.$on("stop_recording",t[18]);const s={c:function(){B(e.$$.fragment)},m:function(n,r){I(e,n,r),o=!0},p:function(n,r){const a={};r&32&&(a.mirror_webcam=n[5]),r&64&&(a.include_audio=n[6]),e.$set(a)},i:function(n){o||(y(e.$$.fragment,n),o=!0)},o:function(n){k(e.$$.fragment,n),o=!1},d:function(n){j(e,n)}};return p("SvelteRegisterBlock",{block:s,id:Pe.name,type:"if",source:"(46:31) ",ctx:t}),s}function Se(t){let e,o,s;function l(a){t[14](a)}let n={filetype:"video/x-m4v,video/*",root:t[8],$$slots:{default:[Be]},$$scope:{ctx:t}};t[9]!==void 0&&(n.dragging=t[9]),e=new me({props:n,$$inline:!0}),Le.push(()=>Xe(e,"dragging",l)),e.$on("load",t[11]);const r={c:function(){B(e.$$.fragment)},m:function(d,u){I(e,d,u),s=!0},p:function(d,u){const f={};u&256&&(f.root=d[8]),u&8388608&&(f.$$scope={dirty:u,ctx:d}),!o&&u&512&&(o=!0,f.dragging=d[9],Fe(()=>o=!1)),e.$set(f)},i:function(d){s||(y(e.$$.fragment,d),s=!0)},o:function(d){k(e.$$.fragment,d),s=!1},d:function(d){j(e,d)}};return p("SvelteRegisterBlock",{block:r,id:Se.name,type:"if",source:'(37:1) {#if source === \\"upload\\"}',ctx:t}),r}function Be(t){let e;const o=t[13].default,s=Ae(o,t,t[23],null),l={c:function(){s&&s.c()},m:function(r,a){s&&s.m(r,a),e=!0},p:function(r,a){s&&s.p&&(!e||a&8388608)&&Ge(s,o,r,r[23],e?Ke(o,r[23],a,null):He(r[23]),null)},i:function(r){e||(y(s,r),e=!0)},o:function(r){k(s,r),e=!1},d:function(r){s&&s.d(r)}};return p("SvelteRegisterBlock",{block:l,id:Be.name,type:"slot",source:'(38:2) <Upload    bind:dragging    filetype=\\"video/x-m4v,video/*\\"    on:load={handle_load}    {root}   >',ctx:t}),l}function Y(t){let e,o,s,l,n,r;e=new be({props:{show_label:t[4],Icon:ge,label:t[3]||"Video"},$$inline:!0});const a=[pe,ve],d=[];function u(h,_){return h[0]===null?0:1}s=u(t),l=d[s]=a[s](t);const f={c:function(){B(e.$$.fragment),o=A(),l.c(),n=F()},l:function(_){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(_,m){I(e,_,m),P(_,o,m),d[s].m(_,m),P(_,n,m),r=!0},p:function(_,[m]){const b={};m&16&&(b.show_label=_[4]),m&8&&(b.label=_[3]||"Video"),e.$set(b);let g=s;s=u(_),s===g?d[s].p(_,m):(G(),k(d[g],1,1,()=>{d[g]=null}),H(),l=d[s],l?l.p(_,m):(l=d[s]=a[s](_),l.c()),y(l,1),l.m(n.parentNode,n))},i:function(_){r||(y(e.$$.fragment,_),y(l),r=!0)},o:function(_){k(e.$$.fragment,_),k(l),r=!1},d:function(_){_&&(S(o),S(n)),j(e,_),d[s].d(_)}};return p("SvelteRegisterBlock",{block:f,id:Y.name,type:"component",source:"",ctx:t}),f}function $e(t,e,o){let{$$slots:s={},$$scope:l}=e;ce("Video",s,["default"]);let{value:n=null}=e,{subtitle:r=null}=e,{source:a}=e,{label:d=void 0}=e,{show_label:u=!0}=e,{mirror_webcam:f=!1}=e,{include_audio:h}=e,{autoplay:_}=e,{root:m}=e;const b=$();function g({detail:c}){console.log("in handle_load"),console.log(c),o(0,n=c),b("change",c),b("upload",c)}function R({detail:c}){o(0,n=null),b("change",c),b("clear")}let V=!1;t.$$.on_mount.push(function(){a===void 0&&!("source"in e||t.$$.bound[t.$$.props.source])&&q.warn("<Video> was created without expected prop 'source'"),h===void 0&&!("include_audio"in e||t.$$.bound[t.$$.props.include_audio])&&q.warn("<Video> was created without expected prop 'include_audio'"),_===void 0&&!("autoplay"in e||t.$$.bound[t.$$.props.autoplay])&&q.warn("<Video> was created without expected prop 'autoplay'"),m===void 0&&!("root"in e||t.$$.bound[t.$$.props.root])&&q.warn("<Video> was created without expected prop 'root'")});const U=["value","subtitle","source","label","show_label","mirror_webcam","include_audio","autoplay","root"];Object.keys(e).forEach(c=>{!~U.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&q.warn(`<Video> was created with unknown prop '${c}'`)});function O(c){V=c,o(9,V)}function D(c){C.call(this,t,c)}const J=({detail:c})=>b("change",c);function M(c){C.call(this,t,c)}function T(c){C.call(this,t,c)}function v(c){C.call(this,t,c)}function N(c){C.call(this,t,c)}function z(c){C.call(this,t,c)}function W(c){C.call(this,t,c)}return t.$$set=c=>{"value"in c&&o(0,n=c.value),"subtitle"in c&&o(1,r=c.subtitle),"source"in c&&o(2,a=c.source),"label"in c&&o(3,d=c.label),"show_label"in c&&o(4,u=c.show_label),"mirror_webcam"in c&&o(5,f=c.mirror_webcam),"include_audio"in c&&o(6,h=c.include_audio),"autoplay"in c&&o(7,_=c.autoplay),"root"in c&&o(8,m=c.root),"$$scope"in c&&o(23,l=c.$$scope)},t.$capture_state=()=>({createEventDispatcher:$,Upload:me,ModifyUpload:he,BlockLabel:be,Webcam:ke,Video:ge,normalise_file:L,prettyBytes:K,playable:ye,Player:we,value:n,subtitle:r,source:a,label:d,show_label:u,mirror_webcam:f,include_audio:h,autoplay:_,root:m,dispatch:b,handle_load:g,handle_clear:R,dragging:V}),t.$inject_state=c=>{"value"in c&&o(0,n=c.value),"subtitle"in c&&o(1,r=c.subtitle),"source"in c&&o(2,a=c.source),"label"in c&&o(3,d=c.label),"show_label"in c&&o(4,u=c.show_label),"mirror_webcam"in c&&o(5,f=c.mirror_webcam),"include_audio"in c&&o(6,h=c.include_audio),"autoplay"in c&&o(7,_=c.autoplay),"root"in c&&o(8,m=c.root),"dragging"in c&&o(9,V=c.dragging)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&512&&b("drag",V)},[n,r,a,d,u,f,h,_,m,V,b,g,R,s,O,D,J,M,T,v,N,z,W,l]}class Ie extends se{constructor(e){super(e),ae(this,e,$e,Y,x,{value:0,subtitle:1,source:2,label:3,show_label:4,mirror_webcam:5,include_audio:6,autoplay:7,root:8}),p("SvelteRegisterComponent",{component:this,tagName:"Video_1",options:e,id:Y.name})}get value(){throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(e){throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get subtitle(){throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set subtitle(e){throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get source(){throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set source(e){throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(e){throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_label(){throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_label(e){throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get mirror_webcam(){throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set mirror_webcam(e){throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get include_audio(){throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set include_audio(e){throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get autoplay(){throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set autoplay(e){throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get root(){throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set root(e){throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const{console:E}=ue;function je(t){let e,o;e=new _e({props:{type:"video"},$$inline:!0});const s={c:function(){B(e.$$.fragment)},m:function(n,r){I(e,n,r),o=!0},p:X,i:function(n){o||(y(e.$$.fragment,n),o=!0)},o:function(n){k(e.$$.fragment,n),o=!1},d:function(n){j(e,n)}};return p("SvelteRegisterBlock",{block:s,id:je.name,type:"slot",source:'(75:1) <Video   value={_video}   subtitle={_subtitle}   on:change={handle_change}   on:drag={({ detail }) => (dragging = detail)}   on:error={({ detail }) => {    loading_status = loading_status || {};    loading_status.status = \\"error\\";    loading_status.message = detail;   }}   {label}   {show_label}   {source}   {mirror_webcam}   {include_audio}   {autoplay}   {root}   on:clear={() => gradio.dispatch(\\"clear\\")}   on:play={() => gradio.dispatch(\\"play\\")}   on:pause={() => gradio.dispatch(\\"pause\\")}   on:upload={() => gradio.dispatch(\\"upload\\")}   on:stop={() => gradio.dispatch(\\"stop\\")}   on:end={() => gradio.dispatch(\\"end\\")}   on:start_recording={() => gradio.dispatch(\\"start_recording\\")}   on:stop_recording={() => gradio.dispatch(\\"stop_recording\\")}  >',ctx:t}),s}function Re(t){let e,o,s,l;const n=[t[1]];let r={};for(let d=0;d<n.length;d+=1)r=Qe(r,n[d]);e=new de({props:r,$$inline:!0}),s=new Ie({props:{value:t[18],subtitle:t[19],label:t[5],show_label:t[8],source:t[6],mirror_webcam:t[11],include_audio:t[12],autoplay:t[16],root:t[7],$$slots:{default:[je]},$$scope:{ctx:t}},$$inline:!0}),s.$on("change",t[21]),s.$on("drag",t[24]),s.$on("error",t[25]),s.$on("clear",t[26]),s.$on("play",t[27]),s.$on("pause",t[28]),s.$on("upload",t[29]),s.$on("stop",t[30]),s.$on("end",t[31]),s.$on("start_recording",t[32]),s.$on("stop_recording",t[33]);const a={c:function(){B(e.$$.fragment),o=A(),B(s.$$.fragment)},m:function(u,f){I(e,u,f),P(u,o,f),I(s,u,f),l=!0},p:function(u,f){const h=f[0]&2?Ye(n,[Ze(u[1])]):{};e.$set(h);const _={};f[0]&262144&&(_.value=u[18]),f[0]&524288&&(_.subtitle=u[19]),f[0]&32&&(_.label=u[5]),f[0]&256&&(_.show_label=u[8]),f[0]&64&&(_.source=u[6]),f[0]&2048&&(_.mirror_webcam=u[11]),f[0]&4096&&(_.include_audio=u[12]),f[0]&65536&&(_.autoplay=u[16]),f[0]&128&&(_.root=u[7]),f[1]&8&&(_.$$scope={dirty:f,ctx:u}),s.$set(_)},i:function(u){l||(y(e.$$.fragment,u),y(s.$$.fragment,u),l=!0)},o:function(u){k(e.$$.fragment,u),k(s.$$.fragment,u),l=!1},d:function(u){u&&S(o),j(e,u),j(s,u)}};return p("SvelteRegisterBlock",{block:a,id:Re.name,type:"slot",source:'(59:0) <Block  {visible}  variant={value === null && source === \\"upload\\" ? \\"dashed\\" : \\"solid\\"}  border_mode={dragging ? \\"focus\\" : \\"base\\"}  padding={false}  {elem_id}  {elem_classes}  {height}  {width}  {container}  {scale}  {min_width}  allow_overflow={false} >',ctx:t}),a}function Z(t){let e,o;e=new fe({props:{visible:t[4],variant:t[0]===null&&t[6]==="upload"?"dashed":"solid",border_mode:t[20]?"focus":"base",padding:!1,elem_id:t[2],elem_classes:t[3],height:t[9],width:t[10],container:t[13],scale:t[14],min_width:t[15],allow_overflow:!1,$$slots:{default:[Re]},$$scope:{ctx:t}},$$inline:!0});const s={c:function(){B(e.$$.fragment)},l:function(n){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(n,r){I(e,n,r),o=!0},p:function(n,r){const a={};r[0]&16&&(a.visible=n[4]),r[0]&65&&(a.variant=n[0]===null&&n[6]==="upload"?"dashed":"solid"),r[0]&1048576&&(a.border_mode=n[20]?"focus":"base"),r[0]&4&&(a.elem_id=n[2]),r[0]&8&&(a.elem_classes=n[3]),r[0]&512&&(a.height=n[9]),r[0]&1024&&(a.width=n[10]),r[0]&8192&&(a.container=n[13]),r[0]&16384&&(a.scale=n[14]),r[0]&32768&&(a.min_width=n[15]),r[0]&2038242|r[1]&8&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i:function(n){o||(y(e.$$.fragment,n),o=!0)},o:function(n){k(e.$$.fragment,n),o=!1},d:function(n){j(e,n)}};return p("SvelteRegisterBlock",{block:s,id:Z.name,type:"component",source:"",ctx:t}),s}function et(t,e,o){let{$$slots:s={},$$scope:l}=e;ce("InteractiveVideo",s,[]);let{elem_id:n=""}=e,{elem_classes:r=[]}=e,{visible:a=!0}=e,{value:d=null}=e,u=null,{label:f}=e,{source:h}=e,{root:_}=e,{root_url:m}=e,{show_label:b}=e,{loading_status:g}=e,{height:R}=e,{width:V}=e,{mirror_webcam:U}=e,{include_audio:O}=e,{container:D=!1}=e,{scale:J=null}=e,{min_width:M=void 0}=e,{autoplay:T=!1}=e,{gradio:v}=e,N=null,z=null,W=!1;function c({detail:i}){i!=null?o(0,d={video:i,subtitles:null}):o(0,d=null)}t.$$.on_mount.push(function(){f===void 0&&!("label"in e||t.$$.bound[t.$$.props.label])&&E.warn("<InteractiveVideo> was created without expected prop 'label'"),h===void 0&&!("source"in e||t.$$.bound[t.$$.props.source])&&E.warn("<InteractiveVideo> was created without expected prop 'source'"),_===void 0&&!("root"in e||t.$$.bound[t.$$.props.root])&&E.warn("<InteractiveVideo> was created without expected prop 'root'"),m===void 0&&!("root_url"in e||t.$$.bound[t.$$.props.root_url])&&E.warn("<InteractiveVideo> was created without expected prop 'root_url'"),b===void 0&&!("show_label"in e||t.$$.bound[t.$$.props.show_label])&&E.warn("<InteractiveVideo> was created without expected prop 'show_label'"),g===void 0&&!("loading_status"in e||t.$$.bound[t.$$.props.loading_status])&&E.warn("<InteractiveVideo> was created without expected prop 'loading_status'"),R===void 0&&!("height"in e||t.$$.bound[t.$$.props.height])&&E.warn("<InteractiveVideo> was created without expected prop 'height'"),V===void 0&&!("width"in e||t.$$.bound[t.$$.props.width])&&E.warn("<InteractiveVideo> was created without expected prop 'width'"),U===void 0&&!("mirror_webcam"in e||t.$$.bound[t.$$.props.mirror_webcam])&&E.warn("<InteractiveVideo> was created without expected prop 'mirror_webcam'"),O===void 0&&!("include_audio"in e||t.$$.bound[t.$$.props.include_audio])&&E.warn("<InteractiveVideo> was created without expected prop 'include_audio'"),v===void 0&&!("gradio"in e||t.$$.bound[t.$$.props.gradio])&&E.warn("<InteractiveVideo> was created without expected prop 'gradio'")});const Ne=["elem_id","elem_classes","visible","value","label","source","root","root_url","show_label","loading_status","height","width","mirror_webcam","include_audio","container","scale","min_width","autoplay","gradio"];Object.keys(e).forEach(i=>{!~Ne.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&E.warn(`<InteractiveVideo> was created with unknown prop '${i}'`)});const Ue=({detail:i})=>o(20,W=i),Oe=({detail:i})=>{o(1,g=g||{}),o(1,g.status="error",g),o(1,g.message=i,g)},ze=()=>v.dispatch("clear"),Ce=()=>v.dispatch("play"),De=()=>v.dispatch("pause"),Je=()=>v.dispatch("upload"),Me=()=>v.dispatch("stop"),Te=()=>v.dispatch("end"),We=()=>v.dispatch("start_recording"),qe=()=>v.dispatch("stop_recording");return t.$$set=i=>{"elem_id"in i&&o(2,n=i.elem_id),"elem_classes"in i&&o(3,r=i.elem_classes),"visible"in i&&o(4,a=i.visible),"value"in i&&o(0,d=i.value),"label"in i&&o(5,f=i.label),"source"in i&&o(6,h=i.source),"root"in i&&o(7,_=i.root),"root_url"in i&&o(22,m=i.root_url),"show_label"in i&&o(8,b=i.show_label),"loading_status"in i&&o(1,g=i.loading_status),"height"in i&&o(9,R=i.height),"width"in i&&o(10,V=i.width),"mirror_webcam"in i&&o(11,U=i.mirror_webcam),"include_audio"in i&&o(12,O=i.include_audio),"container"in i&&o(13,D=i.container),"scale"in i&&o(14,J=i.scale),"min_width"in i&&o(15,M=i.min_width),"autoplay"in i&&o(16,T=i.autoplay),"gradio"in i&&o(17,v=i.gradio)},t.$capture_state=()=>({normalise_file:L,Block:fe,Video:Ie,UploadText:_e,StatusTracker:de,_:xe,elem_id:n,elem_classes:r,visible:a,value:d,old_value:u,label:f,source:h,root:_,root_url:m,show_label:b,loading_status:g,height:R,width:V,mirror_webcam:U,include_audio:O,container:D,scale:J,min_width:M,autoplay:T,gradio:v,_video:N,_subtitle:z,dragging:W,handle_change:c}),t.$inject_state=i=>{"elem_id"in i&&o(2,n=i.elem_id),"elem_classes"in i&&o(3,r=i.elem_classes),"visible"in i&&o(4,a=i.visible),"value"in i&&o(0,d=i.value),"old_value"in i&&o(23,u=i.old_value),"label"in i&&o(5,f=i.label),"source"in i&&o(6,h=i.source),"root"in i&&o(7,_=i.root),"root_url"in i&&o(22,m=i.root_url),"show_label"in i&&o(8,b=i.show_label),"loading_status"in i&&o(1,g=i.loading_status),"height"in i&&o(9,R=i.height),"width"in i&&o(10,V=i.width),"mirror_webcam"in i&&o(11,U=i.mirror_webcam),"include_audio"in i&&o(12,O=i.include_audio),"container"in i&&o(13,D=i.container),"scale"in i&&o(14,J=i.scale),"min_width"in i&&o(15,M=i.min_width),"autoplay"in i&&o(16,T=i.autoplay),"gradio"in i&&o(17,v=i.gradio),"_video"in i&&o(18,N=i._video),"_subtitle"in i&&o(19,z=i._subtitle),"dragging"in i&&o(20,W=i.dragging)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty[0]&4194433&&(d!=null?(o(18,N=L(d.video,_,m)),o(19,z=L(d.subtitles,_,m))):(o(18,N=null),o(19,z=null))),t.$$.dirty[0]&8519681&&JSON.stringify(d)!==JSON.stringify(u)&&(o(23,u=d),v.dispatch("change")),t.$$.dirty[0]&262144&&console.log(N)},[d,g,n,r,a,f,h,_,b,R,V,U,O,D,J,M,T,v,N,z,W,c,m,u,Ue,Oe,ze,Ce,De,Je,Me,Te,We,qe]}class tt extends se{constructor(e){super(e),ae(this,e,et,Z,x,{elem_id:2,elem_classes:3,visible:4,value:0,label:5,source:6,root:7,root_url:22,show_label:8,loading_status:1,height:9,width:10,mirror_webcam:11,include_audio:12,container:13,scale:14,min_width:15,autoplay:16,gradio:17},null,[-1,-1]),p("SvelteRegisterComponent",{component:this,tagName:"InteractiveVideo",options:e,id:Z.name})}get elem_id(){return this.$$.ctx[2]}set elem_id(e){this.$$set({elem_id:e}),w()}get elem_classes(){return this.$$.ctx[3]}set elem_classes(e){this.$$set({elem_classes:e}),w()}get visible(){return this.$$.ctx[4]}set visible(e){this.$$set({visible:e}),w()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),w()}get label(){return this.$$.ctx[5]}set label(e){this.$$set({label:e}),w()}get source(){return this.$$.ctx[6]}set source(e){this.$$set({source:e}),w()}get root(){return this.$$.ctx[7]}set root(e){this.$$set({root:e}),w()}get root_url(){return this.$$.ctx[22]}set root_url(e){this.$$set({root_url:e}),w()}get show_label(){return this.$$.ctx[8]}set show_label(e){this.$$set({show_label:e}),w()}get loading_status(){return this.$$.ctx[1]}set loading_status(e){this.$$set({loading_status:e}),w()}get height(){return this.$$.ctx[9]}set height(e){this.$$set({height:e}),w()}get width(){return this.$$.ctx[10]}set width(e){this.$$set({width:e}),w()}get mirror_webcam(){return this.$$.ctx[11]}set mirror_webcam(e){this.$$set({mirror_webcam:e}),w()}get include_audio(){return this.$$.ctx[12]}set include_audio(e){this.$$set({include_audio:e}),w()}get container(){return this.$$.ctx[13]}set container(e){this.$$set({container:e}),w()}get scale(){return this.$$.ctx[14]}set scale(e){this.$$set({scale:e}),w()}get min_width(){return this.$$.ctx[15]}set min_width(e){this.$$set({min_width:e}),w()}get autoplay(){return this.$$.ctx[16]}set autoplay(e){this.$$set({autoplay:e}),w()}get gradio(){return this.$$.ctx[17]}set gradio(e){this.$$set({gradio:e}),w()}}const bt=tt;export{bt as default};
//# sourceMappingURL=index-7a9224b7.js.map
