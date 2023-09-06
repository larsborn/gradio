import{SvelteComponentDev as T,init as X,safe_not_equal as F,dispatch_dev as U,validate_store as G,component_subscribe as H,validate_slots as I,getContext as k,tick as A,create_component as J,mount_component as K,transition_in as L,transition_out as M,destroy_component as Q,text as V,insert_dev as W,set_data_dev as Y,detach_dev as Z}from"../../../node/dev/svelte-internal.js";import{X as B,u as j}from"./index-09ad131b.js";import{U as R}from"./UploadButton-02615cbc.js";import{d as C}from"./Button-70427016.js";function O(n){let t=n[11](n[3])+"",o;const a={c:function(){o=V(t)},m:function(s,i){W(s,o,i)},p:function(s,i){i&2056&&t!==(t=s[11](s[3])+"")&&Y(o,t)},d:function(s){s&&Z(o)}};return U("SvelteRegisterBlock",{block:a,id:O.name,type:"slot",source:'(48:0) <UploadButton  {elem_id}  {elem_classes}  {visible}  {file_count}  {file_types}  {size}  {scale}  {min_width}  disabled  {variant}  {label}  on:click={() => gradio.dispatch(\\"click\\")}  on:load={handle_upload} >',ctx:n}),a}function S(n){let t,o;t=new R({props:{elem_id:n[0],elem_classes:n[1],visible:n[2],file_count:n[4],file_types:n[5],size:n[6],scale:n[7],min_width:n[8],disabled:!0,variant:n[9],label:n[3],$$slots:{default:[O]},$$scope:{ctx:n}},$$inline:!0}),t.$on("click",n[15]),t.$on("load",n[12]);const a={c:function(){J(t.$$.fragment)},l:function(s){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(s,i){K(t,s,i),o=!0},p:function(s,[i]){const c={};i&1&&(c.elem_id=s[0]),i&2&&(c.elem_classes=s[1]),i&4&&(c.visible=s[2]),i&16&&(c.file_count=s[4]),i&32&&(c.file_types=s[5]),i&64&&(c.size=s[6]),i&128&&(c.scale=s[7]),i&256&&(c.min_width=s[8]),i&512&&(c.variant=s[9]),i&8&&(c.label=s[3]),i&133128&&(c.$$scope={dirty:i,ctx:s}),t.$set(c)},i:function(s){o||(L(t.$$.fragment,s),o=!0)},o:function(s){M(t.$$.fragment,s),o=!1},d:function(s){Q(t,s)}};return U("SvelteRegisterBlock",{block:a,id:S.name,type:"component",source:"",ctx:n}),a}function x(n,t,o){let a;G(B,"_"),H(n,B,e=>o(11,a=e));let{$$slots:r={},$$scope:s}=t;I("StaticUploadButton",r,[]);let{elem_id:i=""}=t,{elem_classes:c=[]}=t,{visible:_=!0}=t,{label:f}=t,{value:d}=t,{file_count:h}=t,{file_types:p=[]}=t,{root:m}=t,{size:b="lg"}=t,{scale:g=null}=t,{min_width:v=void 0}=t,{variant:y="secondary"}=t,{gradio:u}=t;const E=k("upload_files")??j;async function P({detail:e}){o(13,d=e),await A();let N=(Array.isArray(e)?e:[e]).map(w=>w.blob);E(m,N).then(async w=>{w.error?(Array.isArray(e)?e:[e]).forEach(async(l,z)=>{l.data=await C(l.blob),l.blob=void 0}):(Array.isArray(e)?e:[e]).forEach((l,z)=>{w.files&&(l.orig_name=l.name,l.name=w.files[z],l.is_file=!0,l.blob=void 0)}),u.dispatch("change",d),u.dispatch("upload",e)})}n.$$.on_mount.push(function(){f===void 0&&!("label"in t||n.$$.bound[n.$$.props.label])&&console.warn("<StaticUploadButton> was created without expected prop 'label'"),d===void 0&&!("value"in t||n.$$.bound[n.$$.props.value])&&console.warn("<StaticUploadButton> was created without expected prop 'value'"),h===void 0&&!("file_count"in t||n.$$.bound[n.$$.props.file_count])&&console.warn("<StaticUploadButton> was created without expected prop 'file_count'"),m===void 0&&!("root"in t||n.$$.bound[n.$$.props.root])&&console.warn("<StaticUploadButton> was created without expected prop 'root'"),u===void 0&&!("gradio"in t||n.$$.bound[n.$$.props.gradio])&&console.warn("<StaticUploadButton> was created without expected prop 'gradio'")});const q=["elem_id","elem_classes","visible","label","value","file_count","file_types","root","size","scale","min_width","variant","gradio"];Object.keys(t).forEach(e=>{!~q.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<StaticUploadButton> was created with unknown prop '${e}'`)});const D=()=>u.dispatch("click");return n.$$set=e=>{"elem_id"in e&&o(0,i=e.elem_id),"elem_classes"in e&&o(1,c=e.elem_classes),"visible"in e&&o(2,_=e.visible),"label"in e&&o(3,f=e.label),"value"in e&&o(13,d=e.value),"file_count"in e&&o(4,h=e.file_count),"file_types"in e&&o(5,p=e.file_types),"root"in e&&o(14,m=e.root),"size"in e&&o(6,b=e.size),"scale"in e&&o(7,g=e.scale),"min_width"in e&&o(8,v=e.min_width),"variant"in e&&o(9,y=e.variant),"gradio"in e&&o(10,u=e.gradio)},n.$capture_state=()=>({tick:A,getContext:k,UploadButton:R,default_upload_files:j,blobToBase64:C,_:B,elem_id:i,elem_classes:c,visible:_,label:f,value:d,file_count:h,file_types:p,root:m,size:b,scale:g,min_width:v,variant:y,gradio:u,upload_files:E,handle_upload:P,$_:a}),n.$inject_state=e=>{"elem_id"in e&&o(0,i=e.elem_id),"elem_classes"in e&&o(1,c=e.elem_classes),"visible"in e&&o(2,_=e.visible),"label"in e&&o(3,f=e.label),"value"in e&&o(13,d=e.value),"file_count"in e&&o(4,h=e.file_count),"file_types"in e&&o(5,p=e.file_types),"root"in e&&o(14,m=e.root),"size"in e&&o(6,b=e.size),"scale"in e&&o(7,g=e.scale),"min_width"in e&&o(8,v=e.min_width),"variant"in e&&o(9,y=e.variant),"gradio"in e&&o(10,u=e.gradio)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),[i,c,_,f,h,p,b,g,v,y,u,a,P,d,m,D]}class $ extends T{constructor(t){super(t),X(this,t,x,S,F,{elem_id:0,elem_classes:1,visible:2,label:3,value:13,file_count:4,file_types:5,root:14,size:6,scale:7,min_width:8,variant:9,gradio:10}),U("SvelteRegisterComponent",{component:this,tagName:"StaticUploadButton",options:t,id:S.name})}get elem_id(){throw new Error("<StaticUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_id(t){throw new Error("<StaticUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get elem_classes(){throw new Error("<StaticUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_classes(t){throw new Error("<StaticUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get visible(){throw new Error("<StaticUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set visible(t){throw new Error("<StaticUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<StaticUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(t){throw new Error("<StaticUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get value(){throw new Error("<StaticUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(t){throw new Error("<StaticUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get file_count(){throw new Error("<StaticUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set file_count(t){throw new Error("<StaticUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get file_types(){throw new Error("<StaticUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set file_types(t){throw new Error("<StaticUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get root(){throw new Error("<StaticUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set root(t){throw new Error("<StaticUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get size(){throw new Error("<StaticUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set size(t){throw new Error("<StaticUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get scale(){throw new Error("<StaticUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set scale(t){throw new Error("<StaticUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get min_width(){throw new Error("<StaticUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set min_width(t){throw new Error("<StaticUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get variant(){throw new Error("<StaticUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set variant(t){throw new Error("<StaticUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get gradio(){throw new Error("<StaticUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set gradio(t){throw new Error("<StaticUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const se=$;export{se as default};
//# sourceMappingURL=index-6889aef3.js.map
