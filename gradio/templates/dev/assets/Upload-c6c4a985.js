import{SvelteComponentDev as ne,init as oe,safe_not_equal as re,dispatch_dev as Q,create_slot as se,validate_slots as le,getContext as R,createEventDispatcher as q,tick as N,element as G,space as ie,attr_dev as g,add_location as H,toggle_class as j,insert_dev as ae,append_dev as I,listen_dev as d,stop_propagation as E,prevent_default as P,update_slot_base as ce,get_all_dirty_from_scope as ue,get_slot_changes as de,prop_dev as fe,transition_in as he,transition_out as _e,detach_dev as ge,run_all as me,bubble as k,binding_callbacks as pe}from"../../../node/dev/svelte-internal.js";import{u as J}from"./index-7ad15df3.js";import{d as K,n as L}from"./Button-98cd7b29.js";const M="Users/peterallen/Projects/gradio/js/upload/src/Upload.svelte";function z(n){let t,o,l,b,y,h,i,f,v;const m=n[16].default,a=se(m,n,n[15],null),_={c:function(){t=G("div"),a&&a.c(),o=ie(),l=G("input"),g(l,"type","file"),g(l,"accept",n[0]),l.multiple=b=n[4]==="multiple"||void 0,g(l,"webkitdirectory",y=n[4]==="directory"||void 0),g(l,"mozdirectory",h=n[4]==="directory"||void 0),g(l,"class","svelte-1h87ywf"),H(l,M,118,1,3174),g(t,"class","svelte-1h87ywf"),j(t,"center",n[2]),j(t,"boundedheight",n[1]),j(t,"flex",n[3]),H(t,M,101,0,2689)},l:function(r){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(r,s){ae(r,t,s),a&&a.m(t,null),I(t,o),I(t,l),n[24](l),i=!0,f||(v=[d(l,"change",n[8],!1,!1,!1,!1),d(t,"drag",E(P(n[17])),!1,!0,!0,!1),d(t,"dragstart",E(P(n[18])),!1,!0,!0,!1),d(t,"dragend",E(P(n[19])),!1,!0,!0,!1),d(t,"dragover",E(P(n[20])),!1,!0,!0,!1),d(t,"dragenter",E(P(n[21])),!1,!0,!0,!1),d(t,"dragleave",E(P(n[22])),!1,!0,!0,!1),d(t,"drop",E(P(n[23])),!1,!0,!0,!1),d(t,"click",n[7],!1,!1,!1,!1),d(t,"drop",n[9],!1,!1,!1,!1),d(t,"dragenter",n[6],!1,!1,!1,!1),d(t,"dragleave",n[6],!1,!1,!1,!1)],f=!0)},p:function(r,[s]){a&&a.p&&(!i||s&32768)&&ce(a,m,r,r[15],i?de(m,r[15],s,null):ue(r[15]),null),(!i||s&1)&&g(l,"accept",r[0]),(!i||s&16&&b!==(b=r[4]==="multiple"||void 0))&&fe(l,"multiple",b),(!i||s&16&&y!==(y=r[4]==="directory"||void 0))&&g(l,"webkitdirectory",y),(!i||s&16&&h!==(h=r[4]==="directory"||void 0))&&g(l,"mozdirectory",h),(!i||s&4)&&j(t,"center",r[2]),(!i||s&2)&&j(t,"boundedheight",r[1]),(!i||s&8)&&j(t,"flex",r[3])},i:function(r){i||(he(a,r),i=!0)},o:function(r){_e(a,r),i=!1},d:function(r){r&&ge(t),a&&a.d(r),n[24](null),f=!1,me(v)}};return Q("SvelteRegisterBlock",{block:_,id:z.name,type:"component",source:"",ctx:n}),_}function we(n,t,o){let{$$slots:l={},$$scope:b}=t;le("Upload",l,["default"]);const y=R("upload_files")??J;let{filetype:h=null}=t,{include_file_metadata:i=!0}=t,{dragging:f=!1}=t,{boundedheight:v=!0}=t,{center:m=!0}=t,{flex:a=!0}=t,{file_count:_="single"}=t,{disable_click:u=!1}=t,{parse_to_data_url:r=!0}=t,{root:s}=t,p;const D=q();function C(){o(10,f=!f)}function S(){u||(o(5,p.value="",p),p.click())}async function T(e){await N();let U=(Array.isArray(e)?e:[e]).map(w=>w.blob);await y(s,U).then(async w=>{w.error?(Array.isArray(e)?e:[e]).forEach(async(c,A)=>{c.data=await K(c.blob),c.blob=void 0}):(Array.isArray(e)?e:[e]).forEach((c,A)=>{w.files&&(c.orig_name=c.name,c.name=w.files[A],c.is_file=!0,c.blob=void 0,L(c,s,null))})}),D("load",_==="single"?e[0]:e)}async function F(e){let U=Array.from(e);if(e.length){_==="single"&&(U=[e[0]]);var w=[];U.forEach((c,A)=>{w[A]={name:c.name,size:c.size,data:"",blob:c}}),await T(w)}}async function B(e){const U=e.target;U.files&&await F(U.files)}async function O(e){o(10,f=!1),e.dataTransfer?.files&&await F(e.dataTransfer.files)}n.$$.on_mount.push(function(){s===void 0&&!("root"in t||n.$$.bound[n.$$.props.root])&&console.warn("<Upload> was created without expected prop 'root'")});const V=["filetype","include_file_metadata","dragging","boundedheight","center","flex","file_count","disable_click","parse_to_data_url","root"];Object.keys(t).forEach(e=>{!~V.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Upload> was created with unknown prop '${e}'`)});function W(e){k.call(this,n,e)}function X(e){k.call(this,n,e)}function Y(e){k.call(this,n,e)}function Z(e){k.call(this,n,e)}function x(e){k.call(this,n,e)}function $(e){k.call(this,n,e)}function ee(e){k.call(this,n,e)}function te(e){pe[e?"unshift":"push"](()=>{p=e,o(5,p)})}return n.$$set=e=>{"filetype"in e&&o(0,h=e.filetype),"include_file_metadata"in e&&o(11,i=e.include_file_metadata),"dragging"in e&&o(10,f=e.dragging),"boundedheight"in e&&o(1,v=e.boundedheight),"center"in e&&o(2,m=e.center),"flex"in e&&o(3,a=e.flex),"file_count"in e&&o(4,_=e.file_count),"disable_click"in e&&o(12,u=e.disable_click),"parse_to_data_url"in e&&o(13,r=e.parse_to_data_url),"root"in e&&o(14,s=e.root),"$$scope"in e&&o(15,b=e.$$scope)},n.$capture_state=()=>({createEventDispatcher:q,tick:N,getContext:R,blobToBase64:K,normalise_file:L,default_upload_files:J,upload_files:y,filetype:h,include_file_metadata:i,dragging:f,boundedheight:v,center:m,flex:a,file_count:_,disable_click:u,parse_to_data_url:r,root:s,hidden_upload:p,dispatch:D,updateDragging:C,openFileUpload:S,handle_upload:T,loadFiles:F,loadFilesFromUpload:B,loadFilesFromDrop:O}),n.$inject_state=e=>{"filetype"in e&&o(0,h=e.filetype),"include_file_metadata"in e&&o(11,i=e.include_file_metadata),"dragging"in e&&o(10,f=e.dragging),"boundedheight"in e&&o(1,v=e.boundedheight),"center"in e&&o(2,m=e.center),"flex"in e&&o(3,a=e.flex),"file_count"in e&&o(4,_=e.file_count),"disable_click"in e&&o(12,u=e.disable_click),"parse_to_data_url"in e&&o(13,r=e.parse_to_data_url),"root"in e&&o(14,s=e.root),"hidden_upload"in e&&o(5,p=e.hidden_upload)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),[h,v,m,a,_,p,C,S,B,O,f,i,u,r,s,b,l,W,X,Y,Z,x,$,ee,te]}class Ue extends ne{constructor(t){super(t),oe(this,t,we,z,re,{filetype:0,include_file_metadata:11,dragging:10,boundedheight:1,center:2,flex:3,file_count:4,disable_click:12,parse_to_data_url:13,root:14}),Q("SvelteRegisterComponent",{component:this,tagName:"Upload",options:t,id:z.name})}get filetype(){throw new Error("<Upload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set filetype(t){throw new Error("<Upload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get include_file_metadata(){throw new Error("<Upload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set include_file_metadata(t){throw new Error("<Upload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get dragging(){throw new Error("<Upload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set dragging(t){throw new Error("<Upload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get boundedheight(){throw new Error("<Upload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set boundedheight(t){throw new Error("<Upload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get center(){throw new Error("<Upload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set center(t){throw new Error("<Upload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get flex(){throw new Error("<Upload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set flex(t){throw new Error("<Upload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get file_count(){throw new Error("<Upload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set file_count(t){throw new Error("<Upload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get disable_click(){throw new Error("<Upload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set disable_click(t){throw new Error("<Upload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get parse_to_data_url(){throw new Error("<Upload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set parse_to_data_url(t){throw new Error("<Upload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get root(){throw new Error("<Upload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set root(t){throw new Error("<Upload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ue as U};
//# sourceMappingURL=Upload-c6c4a985.js.map
