import{SvelteComponentDev as oe,init as ie,safe_not_equal as Q,dispatch_dev as V,validate_slots as le,createEventDispatcher as Y,afterUpdate as Z,tick as p,create_component as P,space as q,empty as Be,mount_component as S,insert_dev as T,group_outros as L,transition_out as y,check_outros as X,transition_in as v,detach_dev as U,destroy_component as E,bubble as C,element as x,attr_dev as R,add_location as $,append_dev as ee,noop as je,flush as g,assign as Re,get_spread_update as Ne,get_spread_object as Oe}from"../../../node/dev/svelte-internal.js";import{S as se,X as De}from"./index-168e7816.js";import{B as ae,n as H}from"./Button-e33227ec.js";import{B as re}from"./BlockLabel-2ee7f826.js";import{I as ue}from"./IconButton-f58f3320.js";import{E as ce}from"./Empty-fa07e7fd.js";import{S as he}from"./ShareButton-c782b318.js";import{D as de}from"./Download-39664f40.js";import{V as W,P as fe}from"./Player-2e78dac2.js";import{u as te}from"./utils-c3e3db58.js";import"./Undo-a5938b87.js";import"./Player.svelte_svelte_type_style_lang-4712a5da.js";const ne="Users/peterallen/Projects/gradio/js/video/static/VideoPreview.svelte";function _e(t){let e=t[0].data,n,a,l,o,s,c,_,h,f=A(t);o=new ue({props:{Icon:de,label:"Download"},$$inline:!0});let d=t[5]&&G(t);const u={c:function(){f.c(),n=q(),a=x("div"),l=x("a"),P(o.$$.fragment),_=q(),d&&d.c(),R(l,"href",s=t[0].data),R(l,"target",window.__is_colab__?"_blank":null),R(l,"download",c=t[0].orig_name||t[0].name),$(l,ne,64,2,1341),R(a,"class","icon-buttons svelte-1mrvp2o"),R(a,"data-testid","download-div"),$(a,ne,63,1,1285)},m:function(w,b){f.m(w,b),T(w,n,b),T(w,a,b),ee(a,l),S(o,l,null),ee(a,_),d&&d.m(a,null),h=!0},p:function(w,b){b&1&&Q(e,e=w[0].data)?(L(),y(f,1,1,je),X(),f=A(w),f.c(),v(f,1),f.m(n.parentNode,n)):f.p(w,b),(!h||b&1&&s!==(s=w[0].data))&&R(l,"href",s),(!h||b&1&&c!==(c=w[0].orig_name||w[0].name))&&R(l,"download",c),w[5]?d?(d.p(w,b),b&32&&v(d,1)):(d=G(w),d.c(),v(d,1),d.m(a,null)):d&&(L(),y(d,1,1,()=>{d=null}),X())},i:function(w){h||(v(f),v(o.$$.fragment,w),v(d),h=!0)},o:function(w){y(f),y(o.$$.fragment,w),y(d),h=!1},d:function(w){w&&(U(n),U(a)),f.d(w),E(o),d&&d.d()}};return V("SvelteRegisterBlock",{block:u,id:_e.name,type:"else",source:"(34:0) {:else}",ctx:t}),u}function we(t){let e,n;e=new ce({props:{unpadded_box:!0,size:"large",$$slots:{default:[me]},$$scope:{ctx:t}},$$inline:!0});const a={c:function(){P(e.$$.fragment)},m:function(o,s){S(e,o,s),n=!0},p:function(o,s){const c={};s&65536&&(c.$$scope={dirty:s,ctx:o}),e.$set(c)},i:function(o){n||(v(e.$$.fragment,o),n=!0)},o:function(o){y(e.$$.fragment,o),n=!1},d:function(o){E(e,o)}};return V("SvelteRegisterBlock",{block:a,id:we.name,type:"if",source:"(32:0) {#if value === null}",ctx:t}),a}function A(t){let e,n;e=new fe({props:{src:t[0].data,subtitle:t[1]?.data,autoplay:t[4],mirror:!1,label:t[2]},$$inline:!0}),e.$on("play",t[6]),e.$on("pause",t[7]),e.$on("stop",t[8]),e.$on("end",t[9]);const a={c:function(){P(e.$$.fragment)},m:function(o,s){S(e,o,s),n=!0},p:function(o,s){const c={};s&1&&(c.src=o[0].data),s&2&&(c.subtitle=o[1]?.data),s&16&&(c.autoplay=o[4]),s&4&&(c.label=o[2]),e.$set(c)},i:function(o){n||(v(e.$$.fragment,o),n=!0)},o:function(o){y(e.$$.fragment,o),n=!1},d:function(o){E(e,o)}};return V("SvelteRegisterBlock",{block:a,id:A.name,type:"key",source:"(35:1) {#key value.data}",ctx:t}),a}function G(t){let e,n;e=new he({props:{value:t[0],formatter:t[10]},$$inline:!0}),e.$on("error",t[11]),e.$on("share",t[12]);const a={c:function(){P(e.$$.fragment)},m:function(o,s){S(e,o,s),n=!0},p:function(o,s){const c={};s&1&&(c.value=o[0]),e.$set(c)},i:function(o){n||(v(e.$$.fragment,o),n=!0)},o:function(o){y(e.$$.fragment,o),n=!1},d:function(o){E(e,o)}};return V("SvelteRegisterBlock",{block:a,id:G.name,type:"if",source:"(56:2) {#if show_share_button}",ctx:t}),a}function me(t){let e,n;e=new W({$$inline:!0});const a={c:function(){P(e.$$.fragment)},m:function(o,s){S(e,o,s),n=!0},i:function(o){n||(v(e.$$.fragment,o),n=!0)},o:function(o){y(e.$$.fragment,o),n=!1},d:function(o){E(e,o)}};return V("SvelteRegisterBlock",{block:a,id:me.name,type:"slot",source:'(33:1) <Empty unpadded_box={true} size=\\"large\\">',ctx:t}),a}function K(t){let e,n,a,l,o,s;e=new re({props:{show_label:t[3],Icon:W,label:t[2]||"Video"},$$inline:!0});const c=[we,_e],_=[];function h(d,u){return d[0]===null?0:1}a=h(t),l=_[a]=c[a](t);const f={c:function(){P(e.$$.fragment),n=q(),l.c(),o=Be()},l:function(u){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(u,m){S(e,u,m),T(u,n,m),_[a].m(u,m),T(u,o,m),s=!0},p:function(u,[m]){const w={};m&8&&(w.show_label=u[3]),m&4&&(w.label=u[2]||"Video"),e.$set(w);let b=a;a=h(u),a===b?_[a].p(u,m):(L(),y(_[b],1,1,()=>{_[b]=null}),X(),l=_[a],l?l.p(u,m):(l=_[a]=c[a](u),l.c()),v(l,1),l.m(o.parentNode,o))},i:function(u){s||(v(e.$$.fragment,u),v(l),s=!0)},o:function(u){y(e.$$.fragment,u),y(l),s=!1},d:function(u){u&&(U(n),U(o)),E(e,u),_[a].d(u)}};return V("SvelteRegisterBlock",{block:f,id:K.name,type:"component",source:"",ctx:t}),f}function Ie(t,e,n){let{$$slots:a={},$$scope:l}=e;le("VideoPreview",a,[]);let{value:o=null}=e,{subtitle:s=null}=e,{label:c=void 0}=e,{show_label:_=!0}=e,{autoplay:h}=e,{show_share_button:f=!0}=e,d=null,u=null;const m=Y();Z(async()=>{o!==d&&s!==u&&u!==null&&(d=o,n(0,o=null),await p(),n(0,o=d)),d=o,u=s}),t.$$.on_mount.push(function(){h===void 0&&!("autoplay"in e||t.$$.bound[t.$$.props.autoplay])&&console.warn("<VideoPreview> was created without expected prop 'autoplay'")});const w=["value","subtitle","label","show_label","autoplay","show_share_button"];Object.keys(e).forEach(r=>{!~w.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<VideoPreview> was created with unknown prop '${r}'`)});function b(r){C.call(this,t,r)}function B(r){C.call(this,t,r)}function j(r){C.call(this,t,r)}function N(r){C.call(this,t,r)}const O=async r=>r?await te(r.data,"url"):"";function D(r){C.call(this,t,r)}function I(r){C.call(this,t,r)}return t.$$set=r=>{"value"in r&&n(0,o=r.value),"subtitle"in r&&n(1,s=r.subtitle),"label"in r&&n(2,c=r.label),"show_label"in r&&n(3,_=r.show_label),"autoplay"in r&&n(4,h=r.autoplay),"show_share_button"in r&&n(5,f=r.show_share_button)},t.$capture_state=()=>({createEventDispatcher:Y,afterUpdate:Z,tick:p,BlockLabel:re,Empty:ce,IconButton:ue,ShareButton:he,Video:W,Download:de,uploadToHuggingFace:te,Player:fe,value:o,subtitle:s,label:c,show_label:_,autoplay:h,show_share_button:f,old_value:d,old_subtitle:u,dispatch:m}),t.$inject_state=r=>{"value"in r&&n(0,o=r.value),"subtitle"in r&&n(1,s=r.subtitle),"label"in r&&n(2,c=r.label),"show_label"in r&&n(3,_=r.show_label),"autoplay"in r&&n(4,h=r.autoplay),"show_share_button"in r&&n(5,f=r.show_share_button),"old_value"in r&&(d=r.old_value),"old_subtitle"in r&&(u=r.old_subtitle)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&1&&o&&m("change",o)},[o,s,c,_,h,f,b,B,j,N,O,D,I]}class be extends oe{constructor(e){super(e),ie(this,e,Ie,K,Q,{value:0,subtitle:1,label:2,show_label:3,autoplay:4,show_share_button:5}),V("SvelteRegisterComponent",{component:this,tagName:"VideoPreview",options:e,id:K.name})}get value(){throw new Error("<VideoPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(e){throw new Error("<VideoPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get subtitle(){throw new Error("<VideoPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set subtitle(e){throw new Error("<VideoPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<VideoPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(e){throw new Error("<VideoPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_label(){throw new Error("<VideoPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_label(e){throw new Error("<VideoPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get autoplay(){throw new Error("<VideoPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set autoplay(e){throw new Error("<VideoPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_share_button(){throw new Error("<VideoPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_share_button(e){throw new Error("<VideoPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function ge(t){let e,n,a,l;const o=[t[7]];let s={};for(let _=0;_<o.length;_+=1)s=Re(s,o[_]);e=new se({props:s,$$inline:!0}),a=new be({props:{value:t[16],subtitle:t[17],label:t[4],show_label:t[6],autoplay:t[13],show_share_button:t[14]},$$inline:!0}),a.$on("play",t[22]),a.$on("pause",t[23]),a.$on("stop",t[24]),a.$on("end",t[25]),a.$on("share",t[26]),a.$on("error",t[27]);const c={c:function(){P(e.$$.fragment),n=q(),P(a.$$.fragment)},m:function(h,f){S(e,h,f),T(h,n,f),S(a,h,f),l=!0},p:function(h,f){const d=f&128?Ne(o,[Oe(h[7])]):{};e.$set(d);const u={};f&65536&&(u.value=h[16]),f&131072&&(u.subtitle=h[17]),f&16&&(u.label=h[4]),f&64&&(u.show_label=h[6]),f&8192&&(u.autoplay=h[13]),f&16384&&(u.show_share_button=h[14]),a.$set(u)},i:function(h){l||(v(e.$$.fragment,h),v(a.$$.fragment,h),l=!0)},o:function(h){y(e.$$.fragment,h),y(a.$$.fragment,h),l=!1},d:function(h){h&&U(n),E(e,h),E(a,h)}};return V("SvelteRegisterBlock",{block:c,id:ge.name,type:"slot",source:'(48:0) <Block  {visible}  variant={value === null && source === \\"upload\\" ? \\"dashed\\" : \\"solid\\"}  border_mode={dragging ? \\"focus\\" : \\"base\\"}  padding={false}  {elem_id}  {elem_classes}  {height}  {width}  {container}  {scale}  {min_width}  allow_overflow={false} >',ctx:t}),c}function M(t){let e,n;e=new ae({props:{visible:t[2],variant:t[3]===null&&t[5]==="upload"?"dashed":"solid",border_mode:t[18]?"focus":"base",padding:!1,elem_id:t[0],elem_classes:t[1],height:t[8],width:t[9],container:t[10],scale:t[11],min_width:t[12],allow_overflow:!1,$$slots:{default:[ge]},$$scope:{ctx:t}},$$inline:!0});const a={c:function(){P(e.$$.fragment)},l:function(o){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(o,s){S(e,o,s),n=!0},p:function(o,[s]){const c={};s&4&&(c.visible=o[2]),s&40&&(c.variant=o[3]===null&&o[5]==="upload"?"dashed":"solid"),s&1&&(c.elem_id=o[0]),s&2&&(c.elem_classes=o[1]),s&256&&(c.height=o[8]),s&512&&(c.width=o[9]),s&1024&&(c.container=o[10]),s&2048&&(c.scale=o[11]),s&4096&&(c.min_width=o[12]),s&268689616&&(c.$$scope={dirty:s,ctx:o}),e.$set(c)},i:function(o){n||(v(e.$$.fragment,o),n=!0)},o:function(o){y(e.$$.fragment,o),n=!1},d:function(o){E(e,o)}};return V("SvelteRegisterBlock",{block:a,id:M.name,type:"component",source:"",ctx:t}),a}function Ce(t,e,n){let{$$slots:a={},$$scope:l}=e;le("StaticVideo",a,[]);let{elem_id:o=""}=e,{elem_classes:s=[]}=e,{visible:c=!0}=e,{value:_=null}=e,h=null,{label:f}=e,{source:d}=e,{root:u}=e,{root_url:m}=e,{show_label:w}=e,{loading_status:b}=e,{height:B}=e,{width:j}=e,{container:N=!1}=e,{scale:O=null}=e,{min_width:D=void 0}=e,{autoplay:I=!1}=e,{show_share_button:r=!0}=e,{gradio:k}=e,z=null,J=null,F=!1;t.$$.on_mount.push(function(){f===void 0&&!("label"in e||t.$$.bound[t.$$.props.label])&&console.warn("<StaticVideo> was created without expected prop 'label'"),d===void 0&&!("source"in e||t.$$.bound[t.$$.props.source])&&console.warn("<StaticVideo> was created without expected prop 'source'"),u===void 0&&!("root"in e||t.$$.bound[t.$$.props.root])&&console.warn("<StaticVideo> was created without expected prop 'root'"),m===void 0&&!("root_url"in e||t.$$.bound[t.$$.props.root_url])&&console.warn("<StaticVideo> was created without expected prop 'root_url'"),w===void 0&&!("show_label"in e||t.$$.bound[t.$$.props.show_label])&&console.warn("<StaticVideo> was created without expected prop 'show_label'"),b===void 0&&!("loading_status"in e||t.$$.bound[t.$$.props.loading_status])&&console.warn("<StaticVideo> was created without expected prop 'loading_status'"),B===void 0&&!("height"in e||t.$$.bound[t.$$.props.height])&&console.warn("<StaticVideo> was created without expected prop 'height'"),j===void 0&&!("width"in e||t.$$.bound[t.$$.props.width])&&console.warn("<StaticVideo> was created without expected prop 'width'"),k===void 0&&!("gradio"in e||t.$$.bound[t.$$.props.gradio])&&console.warn("<StaticVideo> was created without expected prop 'gradio'")});const ve=["elem_id","elem_classes","visible","value","label","source","root","root_url","show_label","loading_status","height","width","container","scale","min_width","autoplay","show_share_button","gradio"];Object.keys(e).forEach(i=>{!~ve.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<StaticVideo> was created with unknown prop '${i}'`)});const ye=()=>k.dispatch("play"),ke=()=>k.dispatch("pause"),Ve=()=>k.dispatch("stop"),Pe=()=>k.dispatch("end"),Se=({detail:i})=>k.dispatch("share",i),Ee=({detail:i})=>k.dispatch("error",i);return t.$$set=i=>{"elem_id"in i&&n(0,o=i.elem_id),"elem_classes"in i&&n(1,s=i.elem_classes),"visible"in i&&n(2,c=i.visible),"value"in i&&n(3,_=i.value),"label"in i&&n(4,f=i.label),"source"in i&&n(5,d=i.source),"root"in i&&n(19,u=i.root),"root_url"in i&&n(20,m=i.root_url),"show_label"in i&&n(6,w=i.show_label),"loading_status"in i&&n(7,b=i.loading_status),"height"in i&&n(8,B=i.height),"width"in i&&n(9,j=i.width),"container"in i&&n(10,N=i.container),"scale"in i&&n(11,O=i.scale),"min_width"in i&&n(12,D=i.min_width),"autoplay"in i&&n(13,I=i.autoplay),"show_share_button"in i&&n(14,r=i.show_share_button),"gradio"in i&&n(15,k=i.gradio)},t.$capture_state=()=>({normalise_file:H,Block:ae,StaticVideo:be,StatusTracker:se,_:De,elem_id:o,elem_classes:s,visible:c,value:_,old_value:h,label:f,source:d,root:u,root_url:m,show_label:w,loading_status:b,height:B,width:j,container:N,scale:O,min_width:D,autoplay:I,show_share_button:r,gradio:k,_video:z,_subtitle:J,dragging:F}),t.$inject_state=i=>{"elem_id"in i&&n(0,o=i.elem_id),"elem_classes"in i&&n(1,s=i.elem_classes),"visible"in i&&n(2,c=i.visible),"value"in i&&n(3,_=i.value),"old_value"in i&&n(21,h=i.old_value),"label"in i&&n(4,f=i.label),"source"in i&&n(5,d=i.source),"root"in i&&n(19,u=i.root),"root_url"in i&&n(20,m=i.root_url),"show_label"in i&&n(6,w=i.show_label),"loading_status"in i&&n(7,b=i.loading_status),"height"in i&&n(8,B=i.height),"width"in i&&n(9,j=i.width),"container"in i&&n(10,N=i.container),"scale"in i&&n(11,O=i.scale),"min_width"in i&&n(12,D=i.min_width),"autoplay"in i&&n(13,I=i.autoplay),"show_share_button"in i&&n(14,r=i.show_share_button),"gradio"in i&&n(15,k=i.gradio),"_video"in i&&n(16,z=i._video),"_subtitle"in i&&n(17,J=i._subtitle),"dragging"in i&&n(18,F=i.dragging)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&1572872&&(_!=null?(n(16,z=H(_.video,u,m)),n(17,J=H(_.subtitles,u,m))):(n(16,z=null),n(17,J=null))),t.$$.dirty&2129928&&JSON.stringify(_)!==JSON.stringify(h)&&(n(21,h=_),k.dispatch("change"))},[o,s,c,_,f,d,w,b,B,j,N,O,D,I,r,k,z,J,F,u,m,h,ye,ke,Ve,Pe,Se,Ee]}class ze extends oe{constructor(e){super(e),ie(this,e,Ce,M,Q,{elem_id:0,elem_classes:1,visible:2,value:3,label:4,source:5,root:19,root_url:20,show_label:6,loading_status:7,height:8,width:9,container:10,scale:11,min_width:12,autoplay:13,show_share_button:14,gradio:15}),V("SvelteRegisterComponent",{component:this,tagName:"StaticVideo_1",options:e,id:M.name})}get elem_id(){return this.$$.ctx[0]}set elem_id(e){this.$$set({elem_id:e}),g()}get elem_classes(){return this.$$.ctx[1]}set elem_classes(e){this.$$set({elem_classes:e}),g()}get visible(){return this.$$.ctx[2]}set visible(e){this.$$set({visible:e}),g()}get value(){return this.$$.ctx[3]}set value(e){this.$$set({value:e}),g()}get label(){return this.$$.ctx[4]}set label(e){this.$$set({label:e}),g()}get source(){return this.$$.ctx[5]}set source(e){this.$$set({source:e}),g()}get root(){return this.$$.ctx[19]}set root(e){this.$$set({root:e}),g()}get root_url(){return this.$$.ctx[20]}set root_url(e){this.$$set({root_url:e}),g()}get show_label(){return this.$$.ctx[6]}set show_label(e){this.$$set({show_label:e}),g()}get loading_status(){return this.$$.ctx[7]}set loading_status(e){this.$$set({loading_status:e}),g()}get height(){return this.$$.ctx[8]}set height(e){this.$$set({height:e}),g()}get width(){return this.$$.ctx[9]}set width(e){this.$$set({width:e}),g()}get container(){return this.$$.ctx[10]}set container(e){this.$$set({container:e}),g()}get scale(){return this.$$.ctx[11]}set scale(e){this.$$set({scale:e}),g()}get min_width(){return this.$$.ctx[12]}set min_width(e){this.$$set({min_width:e}),g()}get autoplay(){return this.$$.ctx[13]}set autoplay(e){this.$$set({autoplay:e}),g()}get show_share_button(){return this.$$.ctx[14]}set show_share_button(e){this.$$set({show_share_button:e}),g()}get gradio(){return this.$$.ctx[15]}set gradio(e){this.$$set({gradio:e}),g()}}const Qe=ze;export{Qe as default};
//# sourceMappingURL=index-5987cbd5.js.map
