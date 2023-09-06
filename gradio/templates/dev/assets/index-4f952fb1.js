import{SvelteComponentDev as H,init as I,safe_not_equal as K,dispatch_dev as J,validate_slots as L,afterUpdate as T,assign as M,create_component as P,mount_component as k,transition_in as j,transition_out as B,destroy_component as O,space as Q,insert_dev as V,get_spread_update as W,get_spread_object as X,detach_dev as Y}from"../../../node/dev/svelte-internal.js";import{S as C}from"./index-0c627992.js";import{B as q}from"./Button-9bfe2272.js";import{T as U}from"./Table-3bbd236c.js";import"./utils-c3e3db58.js";import"./Upload-29fdce3c.js";import"./StaticMarkdown-f88fcd2a.js";import"./dsv-576afacd.js";function z(n){let t,o,u,w;const a=[n[16]];let c={};for(let m=0;m<a.length;m+=1)c=M(c,a[m]);t=new C({props:c,$$inline:!0}),u=new U({props:{root:n[12],label:n[7],row_count:n[6],col_count:n[5],values:n[0],headers:n[1],wrap:n[8],datatype:n[9],latex_delimiters:n[14],editable:!1,height:n[15]},$$inline:!0}),u.$on("change",n[19]),u.$on("select",n[20]);const l={c:function(){P(t.$$.fragment),o=Q(),P(u.$$.fragment)},m:function(s,r){k(t,s,r),V(s,o,r),k(u,s,r),w=!0},p:function(s,r){const h=r&65536?W(a,[X(s[16])]):{};t.$set(h);const i={};r&4096&&(i.root=s[12]),r&128&&(i.label=s[7]),r&64&&(i.row_count=s[6]),r&32&&(i.col_count=s[5]),r&1&&(i.values=s[0]),r&2&&(i.headers=s[1]),r&256&&(i.wrap=s[8]),r&512&&(i.datatype=s[9]),r&16384&&(i.latex_delimiters=s[14]),r&32768&&(i.height=s[15]),u.$set(i)},i:function(s){w||(j(t.$$.fragment,s),j(u.$$.fragment,s),w=!0)},o:function(s){B(t.$$.fragment,s),B(u.$$.fragment,s),w=!1},d:function(s){s&&Y(o),O(t,s),O(u,s)}};return J("SvelteRegisterBlock",{block:l,id:z.name,type:"slot",source:"(44:0) <Block  {visible}  padding={false}  {elem_id}  {elem_classes}  container={false}  {scale}  {min_width}  allow_overflow={false} >",ctx:n}),l}function N(n){let t,o;t=new q({props:{visible:n[4],padding:!1,elem_id:n[2],elem_classes:n[3],container:!1,scale:n[10],min_width:n[11],allow_overflow:!1,$$slots:{default:[z]},$$scope:{ctx:n}},$$inline:!0});const u={c:function(){P(t.$$.fragment)},l:function(a){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(a,c){k(t,a,c),o=!0},p:function(a,[c]){const l={};c&16&&(l.visible=a[4]),c&4&&(l.elem_id=a[2]),c&8&&(l.elem_classes=a[3]),c&1024&&(l.scale=a[10]),c&2048&&(l.min_width=a[11]),c&4322275&&(l.$$scope={dirty:c,ctx:a}),t.$set(l)},i:function(a){o||(j(t.$$.fragment,a),o=!0)},o:function(a){B(t.$$.fragment,a),o=!1},d:function(a){O(t,a)}};return J("SvelteRegisterBlock",{block:u,id:N.name,type:"component",source:"",ctx:n}),u}function Z(n,t,o){let{$$slots:u={},$$scope:w}=t;L("StaticDataframe",u,[]);let{headers:a=[]}=t,{elem_id:c=""}=t,{elem_classes:l=[]}=t,{visible:m=!0}=t,{value:s={data:[["","",""]],headers:["1","2","3"]}}=t,r=JSON.stringify(s),{value_is_output:h=!1}=t,{col_count:i}=t,{row_count:d}=t,{label:S=null}=t,{wrap:_}=t,{datatype:g}=t,{scale:D=null}=t,{min_width:y=void 0}=t,{root:b}=t,{gradio:f}=t,{latex_delimiters:p}=t,{height:E=void 0}=t,{loading_status:v}=t;function R(){f.dispatch("change"),h||f.dispatch("input")}T(()=>{o(17,h=!1)}),n.$$.on_mount.push(function(){i===void 0&&!("col_count"in t||n.$$.bound[n.$$.props.col_count])&&console.warn("<StaticDataframe> was created without expected prop 'col_count'"),d===void 0&&!("row_count"in t||n.$$.bound[n.$$.props.row_count])&&console.warn("<StaticDataframe> was created without expected prop 'row_count'"),_===void 0&&!("wrap"in t||n.$$.bound[n.$$.props.wrap])&&console.warn("<StaticDataframe> was created without expected prop 'wrap'"),g===void 0&&!("datatype"in t||n.$$.bound[n.$$.props.datatype])&&console.warn("<StaticDataframe> was created without expected prop 'datatype'"),b===void 0&&!("root"in t||n.$$.bound[n.$$.props.root])&&console.warn("<StaticDataframe> was created without expected prop 'root'"),f===void 0&&!("gradio"in t||n.$$.bound[n.$$.props.gradio])&&console.warn("<StaticDataframe> was created without expected prop 'gradio'"),p===void 0&&!("latex_delimiters"in t||n.$$.bound[n.$$.props.latex_delimiters])&&console.warn("<StaticDataframe> was created without expected prop 'latex_delimiters'"),v===void 0&&!("loading_status"in t||n.$$.bound[n.$$.props.loading_status])&&console.warn("<StaticDataframe> was created without expected prop 'loading_status'")});const A=["headers","elem_id","elem_classes","visible","value","value_is_output","col_count","row_count","label","wrap","datatype","scale","min_width","root","gradio","latex_delimiters","height","loading_status"];Object.keys(t).forEach(e=>{!~A.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<StaticDataframe> was created with unknown prop '${e}'`)});const F=({detail:e})=>{o(0,s=e)},G=e=>f.dispatch("select",e.detail);return n.$$set=e=>{"headers"in e&&o(1,a=e.headers),"elem_id"in e&&o(2,c=e.elem_id),"elem_classes"in e&&o(3,l=e.elem_classes),"visible"in e&&o(4,m=e.visible),"value"in e&&o(0,s=e.value),"value_is_output"in e&&o(17,h=e.value_is_output),"col_count"in e&&o(5,i=e.col_count),"row_count"in e&&o(6,d=e.row_count),"label"in e&&o(7,S=e.label),"wrap"in e&&o(8,_=e.wrap),"datatype"in e&&o(9,g=e.datatype),"scale"in e&&o(10,D=e.scale),"min_width"in e&&o(11,y=e.min_width),"root"in e&&o(12,b=e.root),"gradio"in e&&o(13,f=e.gradio),"latex_delimiters"in e&&o(14,p=e.latex_delimiters),"height"in e&&o(15,E=e.height),"loading_status"in e&&o(16,v=e.loading_status)},n.$capture_state=()=>({afterUpdate:T,Block:q,Table:U,StatusTracker:C,headers:a,elem_id:c,elem_classes:l,visible:m,value:s,old_value:r,value_is_output:h,col_count:i,row_count:d,label:S,wrap:_,datatype:g,scale:D,min_width:y,root:b,gradio:f,latex_delimiters:p,height:E,loading_status:v,handle_change:R}),n.$inject_state=e=>{"headers"in e&&o(1,a=e.headers),"elem_id"in e&&o(2,c=e.elem_id),"elem_classes"in e&&o(3,l=e.elem_classes),"visible"in e&&o(4,m=e.visible),"value"in e&&o(0,s=e.value),"old_value"in e&&o(18,r=e.old_value),"value_is_output"in e&&o(17,h=e.value_is_output),"col_count"in e&&o(5,i=e.col_count),"row_count"in e&&o(6,d=e.row_count),"label"in e&&o(7,S=e.label),"wrap"in e&&o(8,_=e.wrap),"datatype"in e&&o(9,g=e.datatype),"scale"in e&&o(10,D=e.scale),"min_width"in e&&o(11,y=e.min_width),"root"in e&&o(12,b=e.root),"gradio"in e&&o(13,f=e.gradio),"latex_delimiters"in e&&o(14,p=e.latex_delimiters),"height"in e&&o(15,E=e.height),"loading_status"in e&&o(16,v=e.loading_status)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),n.$$.update=()=>{n.$$.dirty&262145&&JSON.stringify(s)!==r&&(o(18,r=JSON.stringify(s)),R())},[s,a,c,l,m,i,d,S,_,g,D,y,b,f,p,E,v,h,r,F,G]}class x extends H{constructor(t){super(t),I(this,t,Z,N,K,{headers:1,elem_id:2,elem_classes:3,visible:4,value:0,value_is_output:17,col_count:5,row_count:6,label:7,wrap:8,datatype:9,scale:10,min_width:11,root:12,gradio:13,latex_delimiters:14,height:15,loading_status:16}),J("SvelteRegisterComponent",{component:this,tagName:"StaticDataframe",options:t,id:N.name})}get headers(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set headers(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get elem_id(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_id(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get elem_classes(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_classes(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get visible(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set visible(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get value(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get value_is_output(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value_is_output(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get col_count(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set col_count(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get row_count(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set row_count(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get wrap(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set wrap(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get datatype(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set datatype(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get scale(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set scale(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get min_width(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set min_width(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get root(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set root(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get gradio(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set gradio(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get latex_delimiters(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set latex_delimiters(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get height(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set height(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get loading_status(){throw new Error("<StaticDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set loading_status(t){throw new Error("<StaticDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const ce=x;export{ce as default};
//# sourceMappingURL=index-4f952fb1.js.map
