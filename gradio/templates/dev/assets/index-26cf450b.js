import{SvelteComponentDev as $,init as ee,safe_not_equal as te,dispatch_dev as P,validate_store as ve,component_subscribe as ke,validate_slots as ne,createEventDispatcher as Q,create_component as y,space as z,empty as Ie,mount_component as E,insert_dev as R,group_outros as F,transition_out as v,check_outros as H,transition_in as g,detach_dev as D,destroy_component as B,bubble as V,element as L,attr_dev as S,add_location as U,src_url_equal as W,toggle_class as Y,append_dev as Pe,listen_dev as Se,flush as b,assign as ye,get_spread_update as Ee,get_spread_object as Be}from"../../../node/dev/svelte-internal.js";import{X as q,S as oe}from"./index-09ad131b.js";import{u as Z}from"./utils-c3e3db58.js";import{n as x,B as ie}from"./Button-70427016.js";import{B as se}from"./BlockLabel-facb91af.js";import{I as le}from"./IconButton-b7cab4d0.js";import{E as ae}from"./Empty-1d767e6a.js";import{S as re}from"./ShareButton-3325f41e.js";import{D as ce}from"./Download-10ced665.js";import{I as M}from"./Image-70764d4a.js";import{g as p}from"./utils-90f3612b.js";const X="Users/peterallen/Projects/gradio/js/image/static/ImagePreview.svelte";function ue(t){let e,n,c,s,i,l,u,f,a=t[3]&&A(t),_=t[5]&&G(t);const d={c:function(){e=L("div"),a&&a.c(),n=z(),_&&_.c(),c=z(),s=L("img"),S(e,"class","icon-buttons svelte-v9w493"),U(e,X,45,1,1179),W(s.src,i=t[6].data)||S(s,"src",i),S(s,"alt",""),S(s,"class","svelte-v9w493"),Y(s,"selectable",t[4]),U(s,X,71,1,1836)},m:function(w,m){R(w,e,m),a&&a.m(e,null),Pe(e,n),_&&_.m(e,null),R(w,c,m),R(w,s,m),l=!0,u||(f=Se(s,"click",t[8],!1,!1,!1,!1),u=!0)},p:function(w,m){w[3]?a?(a.p(w,m),m&8&&g(a,1)):(a=A(w),a.c(),g(a,1),a.m(e,n)):a&&(F(),v(a,1,1,()=>{a=null}),H()),w[5]?_?(_.p(w,m),m&32&&g(_,1)):(_=G(w),_.c(),g(_,1),_.m(e,null)):_&&(F(),v(_,1,1,()=>{_=null}),H()),(!l||m&64&&!W(s.src,i=w[6].data))&&S(s,"src",i),(!l||m&16)&&Y(s,"selectable",w[4])},i:function(w){l||(g(a),g(_),l=!0)},o:function(w){v(a),v(_),l=!1},d:function(w){w&&(D(e),D(c),D(s)),a&&a.d(),_&&_.d(),u=!1,f()}};return P("SvelteRegisterBlock",{block:d,id:ue.name,type:"else",source:"(35:0) {:else}",ctx:t}),d}function he(t){let e,n;e=new ae({props:{unpadded_box:!0,size:"large",$$slots:{default:[_e]},$$scope:{ctx:t}},$$inline:!0});const c={c:function(){y(e.$$.fragment)},m:function(i,l){E(e,i,l),n=!0},p:function(i,l){const u={};l&16384&&(u.$$scope={dirty:l,ctx:i}),e.$set(u)},i:function(i){n||(g(e.$$.fragment,i),n=!0)},o:function(i){v(e.$$.fragment,i),n=!1},d:function(i){B(e,i)}};return P("SvelteRegisterBlock",{block:c,id:he.name,type:"if",source:"(33:0) {#if value_ === null}",ctx:t}),c}function A(t){let e,n,c,s;n=new le({props:{Icon:ce,label:t[7]("common.download")},$$inline:!0});const i={c:function(){e=L("a"),y(n.$$.fragment),S(e,"href",c=t[6].data),S(e,"target",window.__is_colab__?"_blank":null),S(e,"download","image"),U(e,X,47,3,1238)},m:function(u,f){R(u,e,f),E(n,e,null),s=!0},p:function(u,f){const a={};f&128&&(a.label=u[7]("common.download")),n.$set(a),(!s||f&64&&c!==(c=u[6].data))&&S(e,"href",c)},i:function(u){s||(g(n.$$.fragment,u),s=!0)},o:function(u){v(n.$$.fragment,u),s=!1},d:function(u){u&&D(e),B(n)}};return P("SvelteRegisterBlock",{block:i,id:A.name,type:"if",source:"(37:2) {#if show_download_button}",ctx:t}),i}function G(t){let e,n;e=new re({props:{formatter:t[10],value:t[0]},$$inline:!0}),e.$on("share",t[11]),e.$on("error",t[12]);const c={c:function(){y(e.$$.fragment)},m:function(i,l){E(e,i,l),n=!0},p:function(i,l){const u={};l&1&&(u.value=i[0]),e.$set(u)},i:function(i){n||(g(e.$$.fragment,i),n=!0)},o:function(i){v(e.$$.fragment,i),n=!1},d:function(i){B(e,i)}};return P("SvelteRegisterBlock",{block:c,id:G.name,type:"if",source:"(46:2) {#if show_share_button}",ctx:t}),c}function _e(t){let e,n;e=new M({$$inline:!0});const c={c:function(){y(e.$$.fragment)},m:function(i,l){E(e,i,l),n=!0},i:function(i){n||(g(e.$$.fragment,i),n=!0)},o:function(i){v(e.$$.fragment,i),n=!1},d:function(i){B(e,i)}};return P("SvelteRegisterBlock",{block:c,id:_e.name,type:"slot",source:'(34:1) <Empty unpadded_box={true} size=\\"large\\">',ctx:t}),c}function J(t){let e,n,c,s,i,l;e=new se({props:{show_label:t[2],Icon:M,label:t[1]||t[7]("image.image")},$$inline:!0});const u=[he,ue],f=[];function a(d,h){return d[6]===null?0:1}c=a(t),s=f[c]=u[c](t);const _={c:function(){y(e.$$.fragment),n=z(),s.c(),i=Ie()},l:function(h){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(h,w){E(e,h,w),R(h,n,w),f[c].m(h,w),R(h,i,w),l=!0},p:function(h,[w]){const m={};w&4&&(m.show_label=h[2]),w&130&&(m.label=h[1]||h[7]("image.image")),e.$set(m);let I=c;c=a(h),c===I?f[c].p(h,w):(F(),v(f[I],1,1,()=>{f[I]=null}),H(),s=f[c],s?s.p(h,w):(s=f[c]=u[c](h),s.c()),g(s,1),s.m(i.parentNode,i))},i:function(h){l||(g(e.$$.fragment,h),g(s),l=!0)},o:function(h){v(e.$$.fragment,h),v(s),l=!1},d:function(h){h&&(D(n),D(i)),B(e,h),f[c].d(h)}};return P("SvelteRegisterBlock",{block:_,id:J.name,type:"component",source:"",ctx:t}),_}function je(t,e,n){let c;ve(q,"_"),ke(t,q,r=>n(7,c=r));let{$$slots:s={},$$scope:i}=e;ne("ImagePreview",s,[]);let{value:l}=e,u,{label:f=void 0}=e,{show_label:a}=e,{show_download_button:_=!0}=e,{selectable:d=!1}=e,{show_share_button:h=!1}=e,{root:w}=e;const m=Q(),I=r=>{let k=p(r);k&&m("select",{index:k,value:null})};t.$$.on_mount.push(function(){l===void 0&&!("value"in e||t.$$.bound[t.$$.props.value])&&console.warn("<ImagePreview> was created without expected prop 'value'"),a===void 0&&!("show_label"in e||t.$$.bound[t.$$.props.show_label])&&console.warn("<ImagePreview> was created without expected prop 'show_label'"),w===void 0&&!("root"in e||t.$$.bound[t.$$.props.root])&&console.warn("<ImagePreview> was created without expected prop 'root'")});const O=["value","label","show_label","show_download_button","selectable","show_share_button","root"];Object.keys(e).forEach(r=>{!~O.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<ImagePreview> was created with unknown prop '${r}'`)});const C=async r=>r?`<img src="${await Z(r,"base64")}" />`:"";function N(r){V.call(this,t,r)}function j(r){V.call(this,t,r)}return t.$$set=r=>{"value"in r&&n(0,l=r.value),"label"in r&&n(1,f=r.label),"show_label"in r&&n(2,a=r.show_label),"show_download_button"in r&&n(3,_=r.show_download_button),"selectable"in r&&n(4,d=r.selectable),"show_share_button"in r&&n(5,h=r.show_share_button),"root"in r&&n(9,w=r.root)},t.$capture_state=()=>({createEventDispatcher:Q,uploadToHuggingFace:Z,BlockLabel:se,Empty:ae,IconButton:le,ShareButton:re,Download:ce,get_coordinates_of_clicked_image:p,_:q,Image:M,normalise_file:x,value:l,value_:u,label:f,show_label:a,show_download_button:_,selectable:d,show_share_button:h,root:w,dispatch:m,handle_click:I,$_:c}),t.$inject_state=r=>{"value"in r&&n(0,l=r.value),"value_"in r&&n(6,u=r.value_),"label"in r&&n(1,f=r.label),"show_label"in r&&n(2,a=r.show_label),"show_download_button"in r&&n(3,_=r.show_download_button),"selectable"in r&&n(4,d=r.selectable),"show_share_button"in r&&n(5,h=r.show_share_button),"root"in r&&n(9,w=r.root)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&1&&l&&m("change",l.data),t.$$.dirty&577&&l!==u&&(n(6,u=l),x(u,w,null))},[l,f,a,_,d,h,u,c,I,w,C,N,j]}class fe extends ${constructor(e){super(e),ee(this,e,je,J,te,{value:0,label:1,show_label:2,show_download_button:3,selectable:4,show_share_button:5,root:9}),P("SvelteRegisterComponent",{component:this,tagName:"ImagePreview",options:e,id:J.name})}get value(){throw new Error("<ImagePreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(e){throw new Error("<ImagePreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<ImagePreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(e){throw new Error("<ImagePreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_label(){throw new Error("<ImagePreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_label(e){throw new Error("<ImagePreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_download_button(){throw new Error("<ImagePreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_download_button(e){throw new Error("<ImagePreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get selectable(){throw new Error("<ImagePreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set selectable(e){throw new Error("<ImagePreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_share_button(){throw new Error("<ImagePreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_share_button(e){throw new Error("<ImagePreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get root(){throw new Error("<ImagePreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set root(e){throw new Error("<ImagePreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function we(t){let e,n,c,s;const i=[t[14]];let l={};for(let f=0;f<i.length;f+=1)l=ye(l,i[f]);e=new oe({props:l,$$inline:!0}),c=new fe({props:{root:t[7],value:t[0],label:t[4],show_label:t[5],show_download_button:t[6],selectable:t[10],show_share_button:t[15]},$$inline:!0}),c.$on("select",t[18]),c.$on("share",t[19]),c.$on("error",t[20]);const u={c:function(){y(e.$$.fragment),n=z(),y(c.$$.fragment)},m:function(a,_){E(e,a,_),R(a,n,_),E(c,a,_),s=!0},p:function(a,_){const d=_&16384?Ee(i,[Be(a[14])]):{};e.$set(d);const h={};_&128&&(h.root=a[7]),_&1&&(h.value=a[0]),_&16&&(h.label=a[4]),_&32&&(h.show_label=a[5]),_&64&&(h.show_download_button=a[6]),_&1024&&(h.selectable=a[10]),_&32768&&(h.show_share_button=a[15]),c.$set(h)},i:function(a){s||(g(e.$$.fragment,a),g(c.$$.fragment,a),s=!0)},o:function(a){v(e.$$.fragment,a),v(c.$$.fragment,a),s=!1},d:function(a){a&&D(n),B(e,a),B(c,a)}};return P("SvelteRegisterBlock",{block:u,id:we.name,type:"slot",source:'(29:0) <Block  {visible}  variant={\\"solid\\"}  border_mode={dragging ? \\"focus\\" : \\"base\\"}  padding={false}  {elem_id}  {elem_classes}  height={height || undefined}  {width}  allow_overflow={false}  {container}  {scale}  {min_width} >',ctx:t}),u}function K(t){let e,n;e=new ie({props:{visible:t[3],variant:"solid",border_mode:t[17]?"focus":"base",padding:!1,elem_id:t[1],elem_classes:t[2],height:t[8]||void 0,width:t[9],allow_overflow:!1,container:t[11],scale:t[12],min_width:t[13],$$slots:{default:[we]},$$scope:{ctx:t}},$$inline:!0});const c={c:function(){y(e.$$.fragment)},l:function(i){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(i,l){E(e,i,l),n=!0},p:function(i,[l]){const u={};l&8&&(u.visible=i[3]),l&2&&(u.elem_id=i[1]),l&4&&(u.elem_classes=i[2]),l&256&&(u.height=i[8]||void 0),l&512&&(u.width=i[9]),l&2048&&(u.container=i[11]),l&4096&&(u.scale=i[12]),l&8192&&(u.min_width=i[13]),l&2213105&&(u.$$scope={dirty:l,ctx:i}),e.$set(u)},i:function(i){n||(g(e.$$.fragment,i),n=!0)},o:function(i){v(e.$$.fragment,i),n=!1},d:function(i){B(e,i)}};return P("SvelteRegisterBlock",{block:c,id:K.name,type:"component",source:"",ctx:t}),c}function Re(t,e,n){let{$$slots:c={},$$scope:s}=e;ne("StaticImage",c,[]);let{elem_id:i=""}=e,{elem_classes:l=[]}=e,{visible:u=!0}=e,{value:f=null}=e,{label:a}=e,{show_label:_}=e,{show_download_button:d}=e,{root:h}=e,{height:w}=e,{width:m}=e,{selectable:I=!1}=e,{container:O=!0}=e,{scale:C=null}=e,{min_width:N=void 0}=e,{loading_status:j}=e,{show_share_button:r=!1}=e,{gradio:k}=e,T;t.$$.on_mount.push(function(){a===void 0&&!("label"in e||t.$$.bound[t.$$.props.label])&&console.warn("<StaticImage> was created without expected prop 'label'"),_===void 0&&!("show_label"in e||t.$$.bound[t.$$.props.show_label])&&console.warn("<StaticImage> was created without expected prop 'show_label'"),d===void 0&&!("show_download_button"in e||t.$$.bound[t.$$.props.show_download_button])&&console.warn("<StaticImage> was created without expected prop 'show_download_button'"),h===void 0&&!("root"in e||t.$$.bound[t.$$.props.root])&&console.warn("<StaticImage> was created without expected prop 'root'"),w===void 0&&!("height"in e||t.$$.bound[t.$$.props.height])&&console.warn("<StaticImage> was created without expected prop 'height'"),m===void 0&&!("width"in e||t.$$.bound[t.$$.props.width])&&console.warn("<StaticImage> was created without expected prop 'width'"),j===void 0&&!("loading_status"in e||t.$$.bound[t.$$.props.loading_status])&&console.warn("<StaticImage> was created without expected prop 'loading_status'"),k===void 0&&!("gradio"in e||t.$$.bound[t.$$.props.gradio])&&console.warn("<StaticImage> was created without expected prop 'gradio'")});const de=["elem_id","elem_classes","visible","value","label","show_label","show_download_button","root","height","width","selectable","container","scale","min_width","loading_status","show_share_button","gradio"];Object.keys(e).forEach(o=>{!~de.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<StaticImage> was created with unknown prop '${o}'`)});const me=({detail:o})=>k.dispatch("select",o),be=({detail:o})=>k.dispatch("share",o),ge=({detail:o})=>k.dispatch("error",o);return t.$$set=o=>{"elem_id"in o&&n(1,i=o.elem_id),"elem_classes"in o&&n(2,l=o.elem_classes),"visible"in o&&n(3,u=o.visible),"value"in o&&n(0,f=o.value),"label"in o&&n(4,a=o.label),"show_label"in o&&n(5,_=o.show_label),"show_download_button"in o&&n(6,d=o.show_download_button),"root"in o&&n(7,h=o.root),"height"in o&&n(8,w=o.height),"width"in o&&n(9,m=o.width),"selectable"in o&&n(10,I=o.selectable),"container"in o&&n(11,O=o.container),"scale"in o&&n(12,C=o.scale),"min_width"in o&&n(13,N=o.min_width),"loading_status"in o&&n(14,j=o.loading_status),"show_share_button"in o&&n(15,r=o.show_share_button),"gradio"in o&&n(16,k=o.gradio)},t.$capture_state=()=>({StaticImage:fe,Block:ie,_:q,StatusTracker:oe,elem_id:i,elem_classes:l,visible:u,value:f,label:a,show_label:_,show_download_button:d,root:h,height:w,width:m,selectable:I,container:O,scale:C,min_width:N,loading_status:j,show_share_button:r,gradio:k,dragging:T}),t.$inject_state=o=>{"elem_id"in o&&n(1,i=o.elem_id),"elem_classes"in o&&n(2,l=o.elem_classes),"visible"in o&&n(3,u=o.visible),"value"in o&&n(0,f=o.value),"label"in o&&n(4,a=o.label),"show_label"in o&&n(5,_=o.show_label),"show_download_button"in o&&n(6,d=o.show_download_button),"root"in o&&n(7,h=o.root),"height"in o&&n(8,w=o.height),"width"in o&&n(9,m=o.width),"selectable"in o&&n(10,I=o.selectable),"container"in o&&n(11,O=o.container),"scale"in o&&n(12,C=o.scale),"min_width"in o&&n(13,N=o.min_width),"loading_status"in o&&n(14,j=o.loading_status),"show_share_button"in o&&n(15,r=o.show_share_button),"gradio"in o&&n(16,k=o.gradio),"dragging"in o&&n(17,T=o.dragging)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&1&&n(0,f=f||null),t.$$.dirty&65537&&k.dispatch("change")},[f,i,l,u,a,_,d,h,w,m,I,O,C,N,j,r,k,T,me,be,ge]}class De extends ${constructor(e){super(e),ee(this,e,Re,K,te,{elem_id:1,elem_classes:2,visible:3,value:0,label:4,show_label:5,show_download_button:6,root:7,height:8,width:9,selectable:10,container:11,scale:12,min_width:13,loading_status:14,show_share_button:15,gradio:16}),P("SvelteRegisterComponent",{component:this,tagName:"StaticImage_1",options:e,id:K.name})}get elem_id(){return this.$$.ctx[1]}set elem_id(e){this.$$set({elem_id:e}),b()}get elem_classes(){return this.$$.ctx[2]}set elem_classes(e){this.$$set({elem_classes:e}),b()}get visible(){return this.$$.ctx[3]}set visible(e){this.$$set({visible:e}),b()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),b()}get label(){return this.$$.ctx[4]}set label(e){this.$$set({label:e}),b()}get show_label(){return this.$$.ctx[5]}set show_label(e){this.$$set({show_label:e}),b()}get show_download_button(){return this.$$.ctx[6]}set show_download_button(e){this.$$set({show_download_button:e}),b()}get root(){return this.$$.ctx[7]}set root(e){this.$$set({root:e}),b()}get height(){return this.$$.ctx[8]}set height(e){this.$$set({height:e}),b()}get width(){return this.$$.ctx[9]}set width(e){this.$$set({width:e}),b()}get selectable(){return this.$$.ctx[10]}set selectable(e){this.$$set({selectable:e}),b()}get container(){return this.$$.ctx[11]}set container(e){this.$$set({container:e}),b()}get scale(){return this.$$.ctx[12]}set scale(e){this.$$set({scale:e}),b()}get min_width(){return this.$$.ctx[13]}set min_width(e){this.$$set({min_width:e}),b()}get loading_status(){return this.$$.ctx[14]}set loading_status(e){this.$$set({loading_status:e}),b()}get show_share_button(){return this.$$.ctx[15]}set show_share_button(e){this.$$set({show_share_button:e}),b()}get gradio(){return this.$$.ctx[16]}set gradio(e){this.$$set({gradio:e}),b()}}const Ae=De;export{Ae as default};
//# sourceMappingURL=index-26cf450b.js.map
