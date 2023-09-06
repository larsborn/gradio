import{SvelteComponentDev as ne,init as ie,safe_not_equal as le,dispatch_dev as P,validate_store as Ae,component_subscribe as Se,validate_slots as ae,createEventDispatcher as x,tick as Ee,create_component as B,space as T,empty as Be,mount_component as j,insert_dev as O,transition_in as b,group_outros as F,transition_out as y,check_outros as H,detach_dev as D,destroy_component as R,bubble as J,element as W,attr_dev as k,add_location as Y,append_dev as je,src_url_equal as $,action_destroyer as Re,listen_dev as U,is_function as Ne,noop as ee,run_all as Oe,flush as g,assign as De,get_spread_update as Ie,get_spread_object as Ce}from"../../../node/dev/svelte-internal.js";import{X as M,S as se}from"./index-09ad131b.js";import{B as ue,n as te}from"./Button-70427016.js";import{B as re}from"./BlockLabel-facb91af.js";import{I as ce}from"./IconButton-b7cab4d0.js";import{E as de}from"./Empty-1d767e6a.js";import{S as _e}from"./ShareButton-3325f41e.js";import{u as oe}from"./utils-c3e3db58.js";import{D as fe}from"./Download-10ced665.js";import{M as Z,l as he}from"./utils-327b4024.js";const p="Users/peterallen/Projects/gradio/js/audio/static/AudioPlayer.svelte";function X(t){let e,o,d,l=t[4]&&G(t),n=t[5]&&K(t);const u={c:function(){e=W("div"),l&&l.c(),o=T(),n&&n.c(),k(e,"class","icon-buttons svelte-1r6c90p"),Y(e,p,53,1,923)},m:function(a,s){O(a,e,s),l&&l.m(e,null),je(e,o),n&&n.m(e,null),d=!0},p:function(a,s){a[4]?l?(l.p(a,s),s&16&&b(l,1)):(l=G(a),l.c(),b(l,1),l.m(e,o)):l&&(F(),y(l,1,1,()=>{l=null}),H()),a[5]?n?(n.p(a,s),s&32&&b(n,1)):(n=K(a),n.c(),b(n,1),n.m(e,null)):n&&(F(),y(n,1,1,()=>{n=null}),H())},i:function(a){d||(b(l),b(n),d=!0)},o:function(a){y(l),y(n),d=!1},d:function(a){a&&D(e),l&&l.d(),n&&n.d()}};return P("SvelteRegisterBlock",{block:u,id:X.name,type:"if",source:"(35:0) {#if value !== null}",ctx:t}),u}function G(t){let e,o,d,l,n;o=new ce({props:{Icon:fe,label:t[6]("common.download")},$$inline:!0});const u={c:function(){e=W("a"),B(o.$$.fragment),k(e,"href",d=t[0].data),k(e,"target",window.__is_colab__?"_blank":null),k(e,"download",l=t[0].name),Y(e,p,55,3,982)},m:function(a,s){O(a,e,s),j(o,e,null),n=!0},p:function(a,s){const _={};s&64&&(_.label=a[6]("common.download")),o.$set(_),(!n||s&1&&d!==(d=a[0].data))&&k(e,"href",d),(!n||s&1&&l!==(l=a[0].name))&&k(e,"download",l)},i:function(a){n||(b(o.$$.fragment,a),n=!0)},o:function(a){y(o.$$.fragment,a),n=!1},d:function(a){a&&D(e),R(o)}};return P("SvelteRegisterBlock",{block:u,id:G.name,type:"if",source:"(37:2) {#if show_download_button}",ctx:t}),u}function K(t){let e,o;e=new _e({props:{formatter:t[11],value:t[0]},$$inline:!0}),e.$on("error",t[12]),e.$on("share",t[13]);const d={c:function(){B(e.$$.fragment)},m:function(n,u){j(e,n,u),o=!0},p:function(n,u){const c={};u&1&&(c.value=n[0]),e.$set(c)},i:function(n){o||(b(e.$$.fragment,n),o=!0)},o:function(n){y(e.$$.fragment,n),o=!1},d:function(n){R(e,n)}};return P("SvelteRegisterBlock",{block:d,id:K.name,type:"if",source:"(46:2) {#if show_share_button}",ctx:t}),d}function me(t){let e,o,d,l,n,u;const c={c:function(){e=W("audio"),e.controls=!0,k(e,"preload","metadata"),$(e.src,o=t[0]?.data)||k(e,"src",o),k(e,"data-testid",d=`${t[1]}-audio`),k(e,"class","svelte-1r6c90p"),Y(e,p,83,1,1536)},m:function(s,_){O(s,e,_),n||(u=[Re(l=he.call(null,e,{autoplay:t[3]})),U(e,"play",t[9],!1,!1,!1,!1),U(e,"pause",t[10],!1,!1,!1,!1),U(e,"ended",t[7],!1,!1,!1,!1)],n=!0)},p:function(s,_){_&1&&!$(e.src,o=s[0]?.data)&&k(e,"src",o),_&2&&d!==(d=`${s[1]}-audio`)&&k(e,"data-testid",d),l&&Ne(l.update)&&_&8&&l.update.call(null,{autoplay:s[3]})},i:ee,o:ee,d:function(s){s&&D(e),n=!1,Oe(u)}};return P("SvelteRegisterBlock",{block:c,id:me.name,type:"else",source:"(65:0) {:else}",ctx:t}),c}function we(t){let e,o;e=new de({props:{size:"small",$$slots:{default:[be]},$$scope:{ctx:t}},$$inline:!0});const d={c:function(){B(e.$$.fragment)},m:function(n,u){j(e,n,u),o=!0},p:function(n,u){const c={};u&32768&&(c.$$scope={dirty:u,ctx:n}),e.$set(c)},i:function(n){o||(b(e.$$.fragment,n),o=!0)},o:function(n){y(e.$$.fragment,n),o=!1},d:function(n){R(e,n)}};return P("SvelteRegisterBlock",{block:d,id:we.name,type:"if",source:"(61:0) {#if value === null}",ctx:t}),d}function be(t){let e,o;e=new Z({$$inline:!0});const d={c:function(){B(e.$$.fragment)},m:function(n,u){j(e,n,u),o=!0},i:function(n){o||(b(e.$$.fragment,n),o=!0)},o:function(n){y(e.$$.fragment,n),o=!1},d:function(n){R(e,n)}};return P("SvelteRegisterBlock",{block:d,id:be.name,type:"slot",source:'(62:1) <Empty size=\\"small\\">',ctx:t}),d}function Q(t){let e,o,d,l,n,u,c;e=new re({props:{show_label:t[2],Icon:Z,float:!1,label:t[1]||t[6]("audio.audio")},$$inline:!0});let a=t[0]!==null&&X(t);const s=[we,me],_=[];function v(w,f){return w[0]===null?0:1}l=v(t),n=_[l]=s[l](t);const h={c:function(){B(e.$$.fragment),o=T(),a&&a.c(),d=T(),n.c(),u=Be()},l:function(f){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(f,m){j(e,f,m),O(f,o,m),a&&a.m(f,m),O(f,d,m),_[l].m(f,m),O(f,u,m),c=!0},p:function(f,[m]){const A={};m&4&&(A.show_label=f[2]),m&66&&(A.label=f[1]||f[6]("audio.audio")),e.$set(A),f[0]!==null?a?(a.p(f,m),m&1&&b(a,1)):(a=X(f),a.c(),b(a,1),a.m(d.parentNode,d)):a&&(F(),y(a,1,1,()=>{a=null}),H());let S=l;l=v(f),l===S?_[l].p(f,m):(F(),y(_[S],1,1,()=>{_[S]=null}),H(),n=_[l],n?n.p(f,m):(n=_[l]=s[l](f),n.c()),b(n,1),n.m(u.parentNode,u))},i:function(f){c||(b(e.$$.fragment,f),b(a),b(n),c=!0)},o:function(f){y(e.$$.fragment,f),y(a),y(n),c=!1},d:function(f){f&&(D(o),D(d),D(u)),R(e,f),a&&a.d(f),_[l].d(f)}};return P("SvelteRegisterBlock",{block:h,id:Q.name,type:"component",source:"",ctx:t}),h}function qe(t,e,o){let d;Ae(M,"_"),Se(t,M,r=>o(6,d=r));let{$$slots:l={},$$scope:n}=e;ae("AudioPlayer",l,[]);let{value:u=null}=e,{label:c}=e,{name:a}=e,{show_label:s=!0}=e,{autoplay:_}=e,{show_download_button:v=!0}=e,{show_share_button:h=!1}=e;const w=x();function f(){w("stop"),w("end")}t.$$.on_mount.push(function(){c===void 0&&!("label"in e||t.$$.bound[t.$$.props.label])&&console.warn("<AudioPlayer> was created without expected prop 'label'"),a===void 0&&!("name"in e||t.$$.bound[t.$$.props.name])&&console.warn("<AudioPlayer> was created without expected prop 'name'"),_===void 0&&!("autoplay"in e||t.$$.bound[t.$$.props.autoplay])&&console.warn("<AudioPlayer> was created without expected prop 'autoplay'")});const m=["value","label","name","show_label","autoplay","show_download_button","show_share_button"];Object.keys(e).forEach(r=>{!~m.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<AudioPlayer> was created with unknown prop '${r}'`)});function A(r){J.call(this,t,r)}function S(r){J.call(this,t,r)}const N=async r=>r?`<audio controls src="${await oe(r.data,"url")}"></audio>`:"";function I(r){J.call(this,t,r)}function C(r){J.call(this,t,r)}return t.$$set=r=>{"value"in r&&o(0,u=r.value),"label"in r&&o(1,c=r.label),"name"in r&&o(8,a=r.name),"show_label"in r&&o(2,s=r.show_label),"autoplay"in r&&o(3,_=r.autoplay),"show_download_button"in r&&o(4,v=r.show_download_button),"show_share_button"in r&&o(5,h=r.show_share_button)},t.$capture_state=()=>({Empty:de,_:M,createEventDispatcher:x,tick:Ee,uploadToHuggingFace:oe,BlockLabel:re,ShareButton:_e,IconButton:ce,Music:Z,Download:fe,loaded:he,value:u,label:c,name:a,show_label:s,autoplay:_,show_download_button:v,show_share_button:h,dispatch:w,handle_ended:f,$_:d}),t.$inject_state=r=>{"value"in r&&o(0,u=r.value),"label"in r&&o(1,c=r.label),"name"in r&&o(8,a=r.name),"show_label"in r&&o(2,s=r.show_label),"autoplay"in r&&o(3,_=r.autoplay),"show_download_button"in r&&o(4,v=r.show_download_button),"show_share_button"in r&&o(5,h=r.show_share_button)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&257&&u&&w("change",{name:a,data:u?.data})},[u,c,s,_,v,h,d,f,a,A,S,N,I,C]}class ge extends ne{constructor(e){super(e),ie(this,e,qe,Q,le,{value:0,label:1,name:8,show_label:2,autoplay:3,show_download_button:4,show_share_button:5}),P("SvelteRegisterComponent",{component:this,tagName:"AudioPlayer",options:e,id:Q.name})}get value(){throw new Error("<AudioPlayer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(e){throw new Error("<AudioPlayer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<AudioPlayer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(e){throw new Error("<AudioPlayer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get name(){throw new Error("<AudioPlayer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set name(e){throw new Error("<AudioPlayer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_label(){throw new Error("<AudioPlayer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_label(e){throw new Error("<AudioPlayer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get autoplay(){throw new Error("<AudioPlayer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set autoplay(e){throw new Error("<AudioPlayer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_download_button(){throw new Error("<AudioPlayer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_download_button(e){throw new Error("<AudioPlayer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_share_button(){throw new Error("<AudioPlayer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_share_button(e){throw new Error("<AudioPlayer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function ye(t){let e,o,d,l;const n=[t[11]];let u={};for(let a=0;a<n.length;a+=1)u=De(u,n[a]);e=new se({props:u,$$inline:!0}),d=new ge({props:{autoplay:t[12],show_label:t[7],show_download_button:t[13],show_share_button:t[14],value:t[16],name:t[16]?.name||"audio_file",label:t[6]},$$inline:!0}),d.$on("share",t[21]),d.$on("error",t[22]);const c={c:function(){B(e.$$.fragment),o=T(),B(d.$$.fragment)},m:function(s,_){j(e,s,_),O(s,o,_),j(d,s,_),l=!0},p:function(s,_){const v=_&2048?Ie(n,[Ce(s[11])]):{};e.$set(v);const h={};_&4096&&(h.autoplay=s[12]),_&128&&(h.show_label=s[7]),_&8192&&(h.show_download_button=s[13]),_&16384&&(h.show_share_button=s[14]),_&65536&&(h.value=s[16]),_&65536&&(h.name=s[16]?.name||"audio_file"),_&64&&(h.label=s[6]),d.$set(h)},i:function(s){l||(b(e.$$.fragment,s),b(d.$$.fragment,s),l=!0)},o:function(s){y(e.$$.fragment,s),y(d.$$.fragment,s),l=!1},d:function(s){s&&D(o),R(e,s),R(d,s)}};return P("SvelteRegisterBlock",{block:c,id:ye.name,type:"slot",source:'(38:0) <Block  variant={mode === \\"interactive\\" && value === null && source === \\"upload\\"   ? \\"dashed\\"   : \\"solid\\"}  border_mode={dragging ? \\"focus\\" : \\"base\\"}  padding={false}  {elem_id}  {elem_classes}  {visible}  {container}  {scale}  {min_width} >',ctx:t}),c}function V(t){let e,o;e=new ue({props:{variant:t[3]==="interactive"&&t[4]===null&&t[5]==="upload"?"dashed":"solid",border_mode:t[17]?"focus":"base",padding:!1,elem_id:t[0],elem_classes:t[1],visible:t[2],container:t[8],scale:t[9],min_width:t[10],$$slots:{default:[ye]},$$scope:{ctx:t}},$$inline:!0});const d={c:function(){B(e.$$.fragment)},l:function(n){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(n,u){j(e,n,u),o=!0},p:function(n,[u]){const c={};u&56&&(c.variant=n[3]==="interactive"&&n[4]===null&&n[5]==="upload"?"dashed":"solid"),u&1&&(c.elem_id=n[0]),u&2&&(c.elem_classes=n[1]),u&4&&(c.visible=n[2]),u&256&&(c.container=n[8]),u&512&&(c.scale=n[9]),u&1024&&(c.min_width=n[10]),u&8517824&&(c.$$scope={dirty:u,ctx:n}),e.$set(c)},i:function(n){o||(b(e.$$.fragment,n),o=!0)},o:function(n){y(e.$$.fragment,n),o=!1},d:function(n){R(e,n)}};return P("SvelteRegisterBlock",{block:d,id:V.name,type:"component",source:"",ctx:t}),d}function ze(t,e,o){let{$$slots:d={},$$scope:l}=e;ae("StaticAudio",d,[]);let{elem_id:n=""}=e,{elem_classes:u=[]}=e,{visible:c=!0}=e,{mode:a}=e,{value:s=null}=e,{source:_}=e,{label:v}=e,{root:h}=e,{show_label:w}=e,{root_url:f}=e,{container:m=!0}=e,{scale:A=null}=e,{min_width:S=void 0}=e,{loading_status:N}=e,{autoplay:I=!1}=e,{show_download_button:C=!0}=e,{show_share_button:r=!1}=e,{gradio:E}=e,q=null,z,L;t.$$.on_mount.push(function(){a===void 0&&!("mode"in e||t.$$.bound[t.$$.props.mode])&&console.warn("<StaticAudio> was created without expected prop 'mode'"),_===void 0&&!("source"in e||t.$$.bound[t.$$.props.source])&&console.warn("<StaticAudio> was created without expected prop 'source'"),v===void 0&&!("label"in e||t.$$.bound[t.$$.props.label])&&console.warn("<StaticAudio> was created without expected prop 'label'"),h===void 0&&!("root"in e||t.$$.bound[t.$$.props.root])&&console.warn("<StaticAudio> was created without expected prop 'root'"),w===void 0&&!("show_label"in e||t.$$.bound[t.$$.props.show_label])&&console.warn("<StaticAudio> was created without expected prop 'show_label'"),f===void 0&&!("root_url"in e||t.$$.bound[t.$$.props.root_url])&&console.warn("<StaticAudio> was created without expected prop 'root_url'"),N===void 0&&!("loading_status"in e||t.$$.bound[t.$$.props.loading_status])&&console.warn("<StaticAudio> was created without expected prop 'loading_status'"),E===void 0&&!("gradio"in e||t.$$.bound[t.$$.props.gradio])&&console.warn("<StaticAudio> was created without expected prop 'gradio'")});const ve=["elem_id","elem_classes","visible","mode","value","source","label","root","show_label","root_url","container","scale","min_width","loading_status","autoplay","show_download_button","show_share_button","gradio"];Object.keys(e).forEach(i=>{!~ve.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<StaticAudio> was created with unknown prop '${i}'`)});const ke=i=>E.dispatch("share",i.detail),Pe=i=>E.dispatch("error",i.detail);return t.$$set=i=>{"elem_id"in i&&o(0,n=i.elem_id),"elem_classes"in i&&o(1,u=i.elem_classes),"visible"in i&&o(2,c=i.visible),"mode"in i&&o(3,a=i.mode),"value"in i&&o(4,s=i.value),"source"in i&&o(5,_=i.source),"label"in i&&o(6,v=i.label),"root"in i&&o(18,h=i.root),"show_label"in i&&o(7,w=i.show_label),"root_url"in i&&o(19,f=i.root_url),"container"in i&&o(8,m=i.container),"scale"in i&&o(9,A=i.scale),"min_width"in i&&o(10,S=i.min_width),"loading_status"in i&&o(11,N=i.loading_status),"autoplay"in i&&o(12,I=i.autoplay),"show_download_button"in i&&o(13,C=i.show_download_button),"show_share_button"in i&&o(14,r=i.show_share_button),"gradio"in i&&o(15,E=i.gradio)},t.$capture_state=()=>({_:M,StaticAudio:ge,StatusTracker:se,Block:ue,normalise_file:te,elem_id:n,elem_classes:u,visible:c,mode:a,value:s,source:_,label:v,root:h,show_label:w,root_url:f,container:m,scale:A,min_width:S,loading_status:N,autoplay:I,show_download_button:C,show_share_button:r,gradio:E,old_value:q,_value:z,dragging:L}),t.$inject_state=i=>{"elem_id"in i&&o(0,n=i.elem_id),"elem_classes"in i&&o(1,u=i.elem_classes),"visible"in i&&o(2,c=i.visible),"mode"in i&&o(3,a=i.mode),"value"in i&&o(4,s=i.value),"source"in i&&o(5,_=i.source),"label"in i&&o(6,v=i.label),"root"in i&&o(18,h=i.root),"show_label"in i&&o(7,w=i.show_label),"root_url"in i&&o(19,f=i.root_url),"container"in i&&o(8,m=i.container),"scale"in i&&o(9,A=i.scale),"min_width"in i&&o(10,S=i.min_width),"loading_status"in i&&o(11,N=i.loading_status),"autoplay"in i&&o(12,I=i.autoplay),"show_download_button"in i&&o(13,C=i.show_download_button),"show_share_button"in i&&o(14,r=i.show_share_button),"gradio"in i&&o(15,E=i.gradio),"old_value"in i&&o(20,q=i.old_value),"_value"in i&&o(16,z=i._value),"dragging"in i&&o(17,L=i.dragging)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&786448&&o(16,z=te(s,h,f)),t.$$.dirty&1081360&&JSON.stringify(s)!==JSON.stringify(q)&&(o(20,q=s),E.dispatch("change"))},[n,u,c,a,s,_,v,w,m,A,S,N,I,C,r,E,z,L,h,f,q,ke,Pe]}class Je extends ne{constructor(e){super(e),ie(this,e,ze,V,le,{elem_id:0,elem_classes:1,visible:2,mode:3,value:4,source:5,label:6,root:18,show_label:7,root_url:19,container:8,scale:9,min_width:10,loading_status:11,autoplay:12,show_download_button:13,show_share_button:14,gradio:15}),P("SvelteRegisterComponent",{component:this,tagName:"StaticAudio_1",options:e,id:V.name})}get elem_id(){return this.$$.ctx[0]}set elem_id(e){this.$$set({elem_id:e}),g()}get elem_classes(){return this.$$.ctx[1]}set elem_classes(e){this.$$set({elem_classes:e}),g()}get visible(){return this.$$.ctx[2]}set visible(e){this.$$set({visible:e}),g()}get mode(){return this.$$.ctx[3]}set mode(e){this.$$set({mode:e}),g()}get value(){return this.$$.ctx[4]}set value(e){this.$$set({value:e}),g()}get source(){return this.$$.ctx[5]}set source(e){this.$$set({source:e}),g()}get label(){return this.$$.ctx[6]}set label(e){this.$$set({label:e}),g()}get root(){return this.$$.ctx[18]}set root(e){this.$$set({root:e}),g()}get show_label(){return this.$$.ctx[7]}set show_label(e){this.$$set({show_label:e}),g()}get root_url(){return this.$$.ctx[19]}set root_url(e){this.$$set({root_url:e}),g()}get container(){return this.$$.ctx[8]}set container(e){this.$$set({container:e}),g()}get scale(){return this.$$.ctx[9]}set scale(e){this.$$set({scale:e}),g()}get min_width(){return this.$$.ctx[10]}set min_width(e){this.$$set({min_width:e}),g()}get loading_status(){return this.$$.ctx[11]}set loading_status(e){this.$$set({loading_status:e}),g()}get autoplay(){return this.$$.ctx[12]}set autoplay(e){this.$$set({autoplay:e}),g()}get show_download_button(){return this.$$.ctx[13]}set show_download_button(e){this.$$set({show_download_button:e}),g()}get show_share_button(){return this.$$.ctx[14]}set show_share_button(e){this.$$set({show_share_button:e}),g()}get gradio(){return this.$$.ctx[15]}set gradio(e){this.$$set({gradio:e}),g()}}const Ve=Je;export{Ve as default};
//# sourceMappingURL=index-e2faf599.js.map
