import{SvelteComponentDev as J,init as K,safe_not_equal as L,dispatch_dev as P,validate_slots as M,createEventDispatcher as S,create_slot as Q,element as T,space as X,create_component as Y,attr_dev as h,add_location as Z,insert_dev as R,mount_component as x,listen_dev as C,prop_dev as $,transition_in as O,transition_out as q,detach_dev as D,destroy_component as ee,run_all as te,binding_callbacks as ne,update_slot_base as oe,get_all_dirty_from_scope as se,get_slot_changes as ie}from"../../../node/dev/svelte-internal.js";import"./index-09ad131b.js";import{a as A}from"./Button-70427016.js";const le="Users/peterallen/Projects/gradio/js/uploadbutton/shared/UploadButton.svelte";function I(n){let t;const o=n[16].default,c=Q(o,n,n[18],null),_={c:function(){c&&c.c()},m:function(l,a){c&&c.m(l,a),t=!0},p:function(l,a){c&&c.p&&(!t||a&262144)&&oe(c,o,l,l[18],t?ie(o,l[18],a,null):se(l[18]),null)},i:function(l){t||(O(c,l),t=!0)},o:function(l){q(c,l),t=!1},d:function(l){c&&c.d(l)}};return P("SvelteRegisterBlock",{block:_,id:I.name,type:"slot",source:"(83:0) <BaseButton  {size}  {variant}  {elem_id}  {elem_classes}  {visible}  on:click={openFileUpload}  {scale}  {min_width}  {disabled} >",ctx:n}),_}function E(n){let t,o,c,_,d,l,a,r,f,w;a=new A({props:{size:n[4],variant:n[7],elem_id:n[0],elem_classes:n[1],visible:n[2],scale:n[5],min_width:n[6],disabled:n[9],$$slots:{default:[I]},$$scope:{ctx:n}},$$inline:!0}),a.$on("click",n[12]);const p={c:function(){t=T("input"),l=X(),Y(a.$$.fragment),h(t,"class","hide svelte-py6oj0"),h(t,"accept",n[11]),h(t,"type","file"),t.multiple=o=n[3]==="multiple"||void 0,h(t,"webkitdirectory",c=n[3]==="directory"||void 0),h(t,"mozdirectory",_=n[3]==="directory"||void 0),h(t,"data-testid",d=n[8]+"-upload-button"),Z(t,le,80,0,1751)},l:function(s){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(s,i){R(s,t,i),n[17](t),R(s,l,i),x(a,s,i),r=!0,f||(w=[C(t,"change",n[13],!1,!1,!1,!1),C(t,"click",N,!1,!1,!1,!1)],f=!0)},p:function(s,[i]){(!r||i&2048)&&h(t,"accept",s[11]),(!r||i&8&&o!==(o=s[3]==="multiple"||void 0))&&$(t,"multiple",o),(!r||i&8&&c!==(c=s[3]==="directory"||void 0))&&h(t,"webkitdirectory",c),(!r||i&8&&_!==(_=s[3]==="directory"||void 0))&&h(t,"mozdirectory",_),(!r||i&256&&d!==(d=s[8]+"-upload-button"))&&h(t,"data-testid",d);const u={};i&16&&(u.size=s[4]),i&128&&(u.variant=s[7]),i&1&&(u.elem_id=s[0]),i&2&&(u.elem_classes=s[1]),i&4&&(u.visible=s[2]),i&32&&(u.scale=s[5]),i&64&&(u.min_width=s[6]),i&512&&(u.disabled=s[9]),i&262144&&(u.$$scope={dirty:i,ctx:s}),a.$set(u)},i:function(s){r||(O(a.$$.fragment,s),r=!0)},o:function(s){q(a.$$.fragment,s),r=!1},d:function(s){s&&(D(t),D(l)),n[17](null),ee(a,s),f=!1,te(w)}};return P("SvelteRegisterBlock",{block:p,id:E.name,type:"component",source:"",ctx:n}),p}function N(n){const t=n.target;t.value&&(t.value="")}function ce(n,t,o){let{$$slots:c={},$$scope:_}=t;M("UploadButton",c,["default"]);let{elem_id:d=""}=t,{elem_classes:l=[]}=t,{visible:a=!0}=t,{file_count:r}=t,{file_types:f=[]}=t,{include_file_metadata:w=!0}=t,{size:p="lg"}=t,{scale:m=null}=t,{min_width:s=void 0}=t,{variant:i="secondary"}=t,{label:u}=t,{disabled:y=!1}=t,b;const z=S();let g;f==null?g=null:(f=f.map(e=>e.startsWith(".")?e:e+"/*"),g=f.join(", "));function k(){b.click()}function j(e){let v=Array.from(e);if(e.length){r==="single"&&(v=[e[0]]);var B=[];v.forEach((U,G)=>{B[G]=w?{name:U.name,size:U.size,data:"",blob:U}:U,B.filter(H=>H!==void 0).length===e.length&&z("load",r=="single"?B[0]:B)})}}function F(e){const v=e.target;v.files&&j(v.files)}n.$$.on_mount.push(function(){r===void 0&&!("file_count"in t||n.$$.bound[n.$$.props.file_count])&&console.warn("<UploadButton> was created without expected prop 'file_count'"),u===void 0&&!("label"in t||n.$$.bound[n.$$.props.label])&&console.warn("<UploadButton> was created without expected prop 'label'")});const V=["elem_id","elem_classes","visible","file_count","file_types","include_file_metadata","size","scale","min_width","variant","label","disabled"];Object.keys(t).forEach(e=>{!~V.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<UploadButton> was created with unknown prop '${e}'`)});function W(e){ne[e?"unshift":"push"](()=>{b=e,o(10,b)})}return n.$$set=e=>{"elem_id"in e&&o(0,d=e.elem_id),"elem_classes"in e&&o(1,l=e.elem_classes),"visible"in e&&o(2,a=e.visible),"file_count"in e&&o(3,r=e.file_count),"file_types"in e&&o(14,f=e.file_types),"include_file_metadata"in e&&o(15,w=e.include_file_metadata),"size"in e&&o(4,p=e.size),"scale"in e&&o(5,m=e.scale),"min_width"in e&&o(6,s=e.min_width),"variant"in e&&o(7,i=e.variant),"label"in e&&o(8,u=e.label),"disabled"in e&&o(9,y=e.disabled),"$$scope"in e&&o(18,_=e.$$scope)},n.$capture_state=()=>({BaseButton:A,createEventDispatcher:S,elem_id:d,elem_classes:l,visible:a,file_count:r,file_types:f,include_file_metadata:w,size:p,scale:m,min_width:s,variant:i,label:u,disabled:y,hidden_upload:b,dispatch:z,accept_file_types:g,openFileUpload:k,loadFiles:j,loadFilesFromUpload:F,clearInputValue:N}),n.$inject_state=e=>{"elem_id"in e&&o(0,d=e.elem_id),"elem_classes"in e&&o(1,l=e.elem_classes),"visible"in e&&o(2,a=e.visible),"file_count"in e&&o(3,r=e.file_count),"file_types"in e&&o(14,f=e.file_types),"include_file_metadata"in e&&o(15,w=e.include_file_metadata),"size"in e&&o(4,p=e.size),"scale"in e&&o(5,m=e.scale),"min_width"in e&&o(6,s=e.min_width),"variant"in e&&o(7,i=e.variant),"label"in e&&o(8,u=e.label),"disabled"in e&&o(9,y=e.disabled),"hidden_upload"in e&&o(10,b=e.hidden_upload),"accept_file_types"in e&&o(11,g=e.accept_file_types)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),[d,l,a,r,p,m,s,i,u,y,b,g,k,F,f,w,c,W,_]}class de extends J{constructor(t){super(t),K(this,t,ce,E,L,{elem_id:0,elem_classes:1,visible:2,file_count:3,file_types:14,include_file_metadata:15,size:4,scale:5,min_width:6,variant:7,label:8,disabled:9}),P("SvelteRegisterComponent",{component:this,tagName:"UploadButton",options:t,id:E.name})}get elem_id(){throw new Error("<UploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_id(t){throw new Error("<UploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get elem_classes(){throw new Error("<UploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_classes(t){throw new Error("<UploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get visible(){throw new Error("<UploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set visible(t){throw new Error("<UploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get file_count(){throw new Error("<UploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set file_count(t){throw new Error("<UploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get file_types(){throw new Error("<UploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set file_types(t){throw new Error("<UploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get include_file_metadata(){throw new Error("<UploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set include_file_metadata(t){throw new Error("<UploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get size(){throw new Error("<UploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set size(t){throw new Error("<UploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get scale(){throw new Error("<UploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set scale(t){throw new Error("<UploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get min_width(){throw new Error("<UploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set min_width(t){throw new Error("<UploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get variant(){throw new Error("<UploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set variant(t){throw new Error("<UploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<UploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(t){throw new Error("<UploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get disabled(){throw new Error("<UploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set disabled(t){throw new Error("<UploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{de as U};
//# sourceMappingURL=UploadButton-02615cbc.js.map
